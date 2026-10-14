/* 헤드리스 Chrome 실제 브라우저 검증: 렌더/시뮬/저장/스크린샷 */
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const APP_URL = process.env.WF_URL || 'http://localhost:4173/';
const SHOT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'screenshots');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const results = [];
const check = (name, ok, detail = '') => {
  results.push({ name, ok, detail });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1280,800'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 300)); });

  await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForFunction(() => document.querySelectorAll('canvas').length > 0, { timeout: 30000 });
  check('페이지 로드 + canvas 생성', true);

  // WebGL 렌더 5초 대기 후 픽셀 분산 측정 (정적 모형/빈 화면 판별)
  await new Promise((r) => setTimeout(r, 6000));
  const pixels = await page.evaluate(async () => {
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(null))));
    const gl = document.querySelector('canvas');
    const c = document.createElement('canvas');
    c.width = 320; c.height = 200;
    const ctx = c.getContext('2d');
    ctx.drawImage(gl, 0, 0, 320, 200);
    const d = ctx.getImageData(0, 0, 320, 200).data;
    let sum = 0, sum2 = 0, n = 0;
    const buckets = new Set();
    for (let i = 0; i < d.length; i += 16) {
      const r = d[i], g = d[i + 1], b = d[i + 2];
      const v = (r + g + b) / 3;
      sum += v; sum2 += v * v; n++;
      buckets.add(((r >> 5) << 6) | ((g >> 5) << 3) | (b >> 5));
    }
    const mean = sum / n;
    const variance = sum2 / n - mean * mean;
    return { mean, std: Math.sqrt(Math.max(0, variance)), colors: buckets.size };
  });
  check('3D 실제 렌더 (픽셀 분산)', pixels.std > 8 && pixels.colors > 12, `std=${pixels.std.toFixed(1)} colors=${pixels.colors}`);
  fs.mkdirSync(SHOT_DIR, { recursive: true });
  const shot1 = path.join(SHOT_DIR, 'main.png');
  await page.screenshot({ path: shot1 });
  check('스크린샷 저장', fs.existsSync(shot1));

  // 시뮬레이션 진행 확인
  const t0 = await page.evaluate(() => window.__world.getState().simTime);
  await new Promise((r) => setTimeout(r, 3000));
  const t1 = await page.evaluate(() => window.__world.getState().simTime);
  check('시뮬레이션 시간 전진', t1 > t0, `simTime ${t0.toFixed(2)} → ${t1.toFixed(2)}`);

  const pop = await page.evaluate(() => ({
    villagers: window.__world.getState().villagers.length,
    trees: window.__world.getState().trees.length,
    fps: window.__world.getState().fps,
  }));
  check('주민/나무 스폰', pop.villagers >= 10 && pop.trees > 50, `주민 ${pop.villagers}, 나무 ${pop.trees}, FPS ${pop.fps}`);

  // 사용자 흐름: 캔버스 중앙 클릭(선택) + 주민 생성 + 저장
  await page.mouse.click(640, 420);
  await new Promise((r) => setTimeout(r, 800));
  const flow = await page.evaluate(() => {
    const st = window.__world.getState();
    // 육지 탐색 (스폰 실패 방지)
    const n = st.terrain.size;
    let sx = st.villagers[0].x + 3;
    let sz = st.villagers[0].z + 3;
    outer: for (let r = 2; r < 24; r++) {
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          const x = st.villagers[0].x + dx;
          const z = st.villagers[0].z + dz;
          if (x < 2 || z < 2 || x >= n - 2 || z >= n - 2) continue;
          if (st.heights[Math.round(z) * n + Math.round(x)] > st.terrain.waterLevel + 0.03) { sx = x; sz = z; break outer; }
        }
      }
    }
    st.setTool('spawnVillager');
    st.clickAt(sx, sz);
    return { after: window.__world.getState().villagers.length, notice: window.__world.getState().notice };
  });
  check('주민 생성 흐름', flow.after === pop.villagers + 1, `${pop.villagers} → ${flow.after} (${flow.notice})`);
  await page.evaluate(() => window.__world.getState().save());
  await new Promise((r) => setTimeout(r, 800));
  const saved = await page.evaluate(() => localStorage.getItem('world-forge-save-v1') !== null);
  check('IndexedDB/localStorage 저장', saved);
  await page.screenshot({ path: path.join(SHOT_DIR, 'after-actions.png') });

  check('콘솔/페이지 오류 없음', errors.length === 0, errors.slice(0, 3).join(' | '));
} finally {
  await browser.close();
}

const failed = results.filter((r) => !r.ok);
console.log(`\n브라우저 검증: ${results.length - failed.length}/${results.length} 통과`);
process.exit(failed.length ? 1 : 0);
