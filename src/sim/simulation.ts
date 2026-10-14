/* 고정 시간 간격 시뮬레이션 루프 — 렌더 루프와 분리. */
import { useWorld } from './store';

export const FIXED_DT = 1 / 20; // 20Hz 시뮬레이션
export const MAX_STEPS = 8;

export function createSimLoop(opts: { onFps: (fps: number) => void }) {
  let acc = 0;
  let last = performance.now();
  let frames = 0;
  let fpsT = 0;
  let raf = 0;
  let running = true;

  const frame = (now: number) => {
    if (!running) return;
    const elapsed = Math.min(0.25, (now - last) / 1000);
    last = now;
    frames++;
    fpsT += elapsed;
    if (fpsT >= 0.5) {
      const fps = frames / fpsT;
      frames = 0;
      fpsT = 0;
      opts.onFps(fps);
      try { useWorld.setState({ fps: Math.round(fps) }); } catch { /* noop */ }
    }
    const speed = useWorld.getState().speed;
    if (speed !== 0) {
      acc += elapsed * speed;
      let steps = 0;
      while (acc >= FIXED_DT && steps < MAX_STEPS) {
        try { useWorld.getState().tick(FIXED_DT); } catch (e) { console.error(e); }
        acc -= FIXED_DT;
        steps++;
      }
      if (steps >= MAX_STEPS) acc = 0;
    } else {
      acc = 0;
    }
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);
  return () => { running = false; cancelAnimationFrame(raf); };
}
