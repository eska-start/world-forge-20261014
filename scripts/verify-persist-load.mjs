/* 새로고침 복원 + 부하 실측 */
import puppeteer from 'puppeteer-core';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1280,800'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForFunction(() => document.querySelectorAll('canvas').length > 0, { timeout: 30000 });
  await new Promise((r) => setTimeout(r, 4000));
  // 동일 프로필에서 저장 → 새로고침 → 복원
  const pre = await page.evaluate(() => {
    const st = window.__world.getState();
    st.setTool('spawnVillager');
    return { villagers: st.villagers.length, simTime: st.simTime, seed: st.seed };
  });
  await page.evaluate(() => window.__world.getState().save());
  await new Promise((r) => setTimeout(r, 800));
  await page.reload({ waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForFunction(() => (window.__world && window.__world.getState().ready), { timeout: 30000 });
  await new Promise((r) => setTimeout(r, 2500)); // init + load 복원 대기
  const restored = await page.evaluate(() => ({
    villagers: window.__world.getState().villagers.length,
    simTime: window.__world.getState().simTime,
    seed: window.__world.getState().seed,
  }));
  console.log(`저장 전: 주민 ${pre.villagers}, simTime ${pre.simTime.toFixed(1)} / 복원 후: 주민 ${restored.villagers}, simTime ${restored.simTime.toFixed(1)}, seed ${restored.seed}`);
  console.log(`${restored.villagers === pre.villagers && restored.seed === pre.seed && restored.simTime >= pre.simTime ? 'PASS' : 'FAIL'}  새로고침 복원`);

  // 부하 실측: +100명/+1500그루 후 AI 틱 시간
  await page.evaluate(() => window.__world.getState().addLoadTestPopulation(100, 1500));
  await new Promise((r) => setTimeout(r, 6000));
  const perf = await page.evaluate(() => ({
    villagers: window.__world.getState().villagers.length,
    trees: window.__world.getState().trees.filter((t) => t.alive).length,
    buildings: window.__world.getState().buildings.length,
    aiMs: window.__world.getState().aiMs,
    fps: window.__world.getState().fps,
    mem: performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1048576) : -1,
  }));
  console.log(`부하 실측: 주민 ${perf.villagers}, 나무 ${perf.trees}, 건물 ${perf.buildings}, AI ${perf.aiMs.toFixed(2)}ms/tick, FPS ${perf.fps} (SwiftShader), JS힙 ${perf.mem}MB`);
  console.log(`${perf.villagers >= 110 && perf.aiMs < 50 ? 'PASS' : 'FAIL'}  부하 안정성 (AI 50ms 미만)`);
  await page.screenshot({ path: 'screenshots/load-test.png' });
} finally {
  await browser.close();
}
