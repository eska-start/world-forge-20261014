// 실제 브라우저 검증 (puppeteer-core + 로컬 Edge/Chrome)
// 1) 페이지 로드/랜더 오류 수집  2) 사용자 흐름(도구 선택→지형 편집→Undo→건물 배치→시간 배속→저장→새로고침 복원)
// 3) 부하 테스트 생성 후 FPS/메모리 측정  4) 스크린샷 저장
import { spawn } from 'node:child_process'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const shotDir = join(root, 'docs', 'screenshots')
mkdirSync(shotDir, { recursive: true })

const CANDIDATES = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
]
const browserPath = CANDIDATES.find((p) => existsSync(p))
if (!browserPath) {
  console.error('브라우저(Edge/Chrome)를 찾지 못했습니다. 수동 확인 필요.')
  process.exit(2)
}
console.log('브라우저:', browserPath)

// 1) 프리뷰 서버 기동 (Node 24의 .cmd spawn 제한 회피 — vite.js를 node로 직접 실행)
const server = spawn(process.execPath, [join(root, 'node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
  cwd: root,
  stdio: 'ignore',
})
async function waitForServer(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url)
      if (res.ok) return true
    } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  return false
}

const report = {
  browser: browserPath,
  url: 'http://127.0.0.1:4173/?seed=20261017',
  consoleErrors: [],
  pageErrors: [],
  steps: {},
  startedAt: new Date().toISOString(),
}

const { default: puppeteer } = await import('puppeteer-core')
let browser
try {
  const ok = await waitForServer('http://127.0.0.1:4173/')
  if (!ok) throw new Error('프리뷰 서버 기동 실패')
  console.log('프리뷰 서버 OK')

  browser = await puppeteer.launch({
    executablePath: browserPath,
    headless: true,
    args: [
      '--no-sandbox',
      '--enable-unsafe-swiftshader',
      '--window-size=1600,900',
      '--autoplay-policy=no-user-gesture-required',
    ],
    defaultViewport: { width: 1600, height: 900 },
  })
  const page = await browser.newPage()
  page.on('console', (msg) => {
    if (msg.type() === 'error') report.consoleErrors.push(msg.text())
  })
  page.on('pageerror', (err) => report.pageErrors.push(String(err)))

  await page.goto(report.url, { waitUntil: 'load', timeout: 60000 })
  await page.waitForFunction(() => !!(window).__WF && !!(window).__WF.world, { timeout: 30000 })
  report.steps.pageReady = true
  console.log('페이지 준비 완료')

  const webgl = await page.evaluate(() => {
    const c = document.createElement('canvas')
    const gl = c.getContext('webgl2') || c.getContext('webgl')
    if (!gl) return null
    const dbg = gl.getExtension('WEBGL_debug_renderer_info')
    return { vendor: gl.getParameter(dbg ? dbg.UNMASKED_RENDERER_WEBGL : 37446) }
  })
  report.webgl = webgl
  console.log('WebGL:', JSON.stringify(webgl))

  const snap = (name) => page.screenshot({ path: join(shotDir, `${name}.png`) })
  await snap('01-initial-world')

  // 2) 사용자 흐름: 지형 올리기 → Undo
  const clickTool = async (label) => {
    await page.evaluate((label) => {
      const btns = [...document.querySelectorAll('button')]
      const b = btns.find((x) => x.textContent?.includes(label))
      if (b) b.click()
    }, label)
    await new Promise((r) => setTimeout(r, 120))
  }

  // 높이 배열 샘플 해시 — 어느 타일이든 편집되면 변화 감지
  const heightsSig = () =>
    page.evaluate(() => {
      const w = (window).__WF.world
      let s = 0
      for (let i = 0; i < w.heights.length; i += 7) s += w.heights[i]
      return Math.round(s * 1000)
    })
  const opsBefore = await page.evaluate(() => (window).__WF.undoStack.length)
  const heightBefore = await heightsSig()
  await clickTool('지형 올리기')
  const cx = 800, cy = 430
  await page.mouse.move(cx, cy)
  await page.mouse.down()
  for (let i = 0; i < 14; i++) {
    await page.mouse.move(cx + (i % 5), cy + (i % 3))
    await new Promise((r) => setTimeout(r, 90))
  }
  await page.mouse.up()
  await new Promise((r) => setTimeout(r, 300))
  const heightAfter = await heightsSig()
  report.steps.terrainEditChanged = heightAfter > heightBefore
  report.steps.terrainEdit = { before: heightBefore, after: heightAfter, ops: opsBefore }
  console.log('지형 편집 해시:', heightBefore, '→', heightAfter, report.steps.terrainEditChanged ? 'OK' : 'FAIL')

  await page.keyboard.down('Control')
  await page.keyboard.press('z')
  await page.keyboard.up('Control')
  await new Promise((r) => setTimeout(r, 400))
  const heightUndo = await heightsSig()
  report.steps.terrainUndo = { undo: heightUndo, aim: heightBefore }
  report.steps.undoRestored = Math.abs(heightUndo - heightBefore) < 2 && heightAfter !== heightUndo
  console.log('Undo 복원 해시:', heightUndo, '→ 목표', heightBefore, report.steps.undoRestored ? 'OK' : 'FAIL')

  // 건물 배치
  await clickTool('건물 배치')
  await clickTool('집')
  const bBefore = await page.evaluate(() => window.__WF.world.buildings.size)
  await page.mouse.click(cx + 120, cy + 60)
  await new Promise((r) => setTimeout(r, 400))
  const bAfter = await page.evaluate(() => window.__WF.world.buildings.size)
  report.steps.buildingPlaced = bAfter === bBefore + 1
  console.log('건물 배치:', bBefore, '→', bAfter, report.steps.buildingPlaced ? 'OK' : 'FAIL')

  // 3) 시간 제어: 4x 진행 → 저장
  await page.keyboard.press('3') // 4x
  await new Promise((r) => setTimeout(r, 8000))
  const savedState = await page.evaluate(async () => {
    const g = window.__WF
    const snap = { seed: g.world.seed, time: Math.round(g.world.time), villagers: g.world.villagers.length, buildings: g.world.buildings.size, wood: Math.round(g.world.storage.wood) }
    await g.save(false)
    return snap
  })
  report.steps.savedState = savedState
  console.log('저장 시점 상태:', JSON.stringify(savedState))

  await page.reload({ waitUntil: 'load' })
  await page.waitForFunction(() => !!(window).__WF && !!(window).__WF.world, { timeout: 30000 })
  await new Promise((r) => setTimeout(r, 700))
  const restored = await page.evaluate(() => {
    const g = window.__WF
    return { seed: g.world.seed, time: Math.round(g.world.time), villagers: g.world.villagers.length, buildings: g.world.buildings.size, wood: Math.round(g.world.storage.wood) }
  })
  report.steps.restoredState = restored
  const same =
    restored.seed === savedState.seed &&
    restored.villagers === savedState.villagers &&
    restored.buildings === savedState.buildings &&
    Math.abs(restored.time - savedState.time) < 30
  report.steps.stateRestoredAfterReload = same
  console.log('새로고침 복원:', JSON.stringify(restored), same ? 'OK' : 'FAIL')

  // 4) 부하 테스트 (생성 직후 동기 카운트 — 대기 중 벌목/재생으로 수치가 흔들리는 것과 구분)
  const load = await page.evaluate(() => {
    const g = window.__WF
    g.spawnLoadTest(150, 2500, 120)
    const w = g.world
    return { villagers: w.villagers.length, trees: w.trees.size, buildings: w.buildings.size }
  })
  report.steps.loadTestCounts = load
  console.log('부하 오브젝트:', JSON.stringify(load))
  await snap('02-load-test')

  // FPS 샘플링 (부하 상태에서 10초)
  await new Promise((r) => setTimeout(r, 9000))
  const perf = await page.evaluate(() => {
    const g = window.__WF
    const mem = performance.memory
    return {
      fpsAvg: Number(g.renderer.fpsAvg.toFixed(1)),
      fpsLow: Number(g.renderer.fpsLow.toFixed(1)),
      aiMs: Number(g.aiMs.toFixed(2)),
      drawCalls: g.renderer.drawCalls,
      memMB: mem ? Math.round(mem.usedJSHeapSize / 1048576) : 0,
      villagers: g.world.villagers.length,
      trees: g.world.trees.size,
      buildings: g.world.buildings.size,
    }
  })
  report.steps.perfUnderLoad = perf
  console.log('부하 성능:', JSON.stringify(perf))
  report.conclusion = {
    simIntegrity: report.steps.terrainEditChanged && report.steps.undoRestored && report.steps.buildingPlaced,
    persistence: report.steps.stateRestoredAfterReload,
    loadCountsOk: load.villagers >= 150 && load.trees >= 2500 && load.buildings >= 120,
    consoleErrorCount: report.consoleErrors.length,
    pageErrorCount: report.pageErrors.length,
  }
  await snap('03-final')
} catch (e) {
  report.fatal = String(e && e.stack ? e.stack : e)
  console.error('브라우저 검증 실패:', e)
} finally {
  try {
    if (browser) await browser.close()
  } catch {}
  try {
    execSync(`taskkill /PID ${server.pid} /T /F`, { stdio: 'ignore' })
  } catch {}
}
writeFileSync(join(root, 'docs', 'browser-report.json'), JSON.stringify(report, null, 2), 'utf8')
console.log('보고서 저장: docs/browser-report.json')
if (report.fatal) process.exit(1)
if (report.conclusion) {
  const c = report.conclusion
  if (!c.simIntegrity || !c.persistence || !c.loadCountsOk) process.exit(1)
}
