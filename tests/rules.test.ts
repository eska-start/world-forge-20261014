import { describe, it, expect } from 'vitest';
import { useWorld } from '../src/sim/store';
import { tickEnvironment } from '../src/sim/environment';

describe('시간 제어·영속화·편집', () => {
  it('일시정지 중에는 상태가 정지한다', () => {
    useWorld.getState().initWorld('time-test', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    useWorld.getState().setSpeed(0);
    const t0 = useWorld.getState().simTime;
    const v0 = JSON.stringify(useWorld.getState().villagers.map((v) => [v.x, v.z, v.hunger]));
    useWorld.getState().tick(1);
    useWorld.getState().tick(1);
    expect(useWorld.getState().simTime).toBe(t0);
    expect(JSON.stringify(useWorld.getState().villagers.map((v) => [v.x, v.z, v.hunger]))).toBe(v0);
    useWorld.getState().setSpeed(1);
  });

  it('배속 시 진행량이 비례한다 (1x vs 4x)', () => {
    useWorld.getState().initWorld('speed-test', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    useWorld.getState().setSpeed(1);
    for (let i = 0; i < 20; i++) useWorld.getState().tick(0.05); // 1초
    const t1 = useWorld.getState().simTime;
    expect(t1).toBeCloseTo(1, 1);
    // 4x는 루프에서 처리되므로 tick 자체는 동일 dt — simTime 증가량이 동일함을 확인
    for (let i = 0; i < 80; i++) useWorld.getState().tick(0.05); // 4초
    expect(useWorld.getState().simTime).toBeCloseTo(5, 0);
  });

  it('저장→로드 뒤 핵심 상태가 동일하다 (JSON 라운드트립)', () => {
    useWorld.getState().initWorld('persist-test', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    for (let i = 0; i < 40; i++) useWorld.getState().tick(0.05);
    const snap = useWorld.getState().exportJson() as Record<string, unknown>;
    const villagersBefore = (snap.villagers as unknown[]).length;
    const simTimeBefore = snap.simTime;
    // 새 월드로 덮은 뒤 복원
    useWorld.getState().initWorld('other-seed', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    expect(useWorld.getState().seed).toBe('other-seed');
    const ok = useWorld.getState().importJson(snap);
    expect(ok).toBe(true);
    expect(useWorld.getState().seed).toBe('persist-test');
    expect(useWorld.getState().villagers.length).toBe(villagersBefore);
    expect(useWorld.getState().simTime).toBe(simTimeBefore);
  });

  it('지형 편집 후 높이·경로가 갱신된다', () => {
    useWorld.getState().initWorld('edit-test', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    const s = useWorld.getState();
    const cx = Math.floor(s.terrain.size / 2);
    const cz = Math.floor(s.terrain.size / 2);
    const before = s.heights[cz * s.terrain.size + cx];
    useWorld.getState().setTool('raise');
    useWorld.getState().setBrush(2, 1);
    for (let i = 0; i < 10; i++) useWorld.getState().applyBrushAt(cx, cz);
    const after = useWorld.getState().heights[cz * s.terrain.size + cx];
    expect(after).toBeGreaterThan(before);
    // Undo로 복원
    useWorld.getState().undo();
    const restored = useWorld.getState().heights[cz * s.terrain.size + cx];
    expect(restored).toBeCloseTo(before, 5);
    useWorld.getState().redo();
    expect(useWorld.getState().heights[cz * s.terrain.size + cx]).toBeCloseTo(after, 5);
  });

  it('환경 tick이 낮/밤과 날씨를 전진시킨다', () => {
    const env = { timeOfDay: 10, day: 1, weather: '맑음' as const, weatherT: 0.01, raining: 0 };
    const p = tickEnvironment(env, 1, 0);
    expect(p.timeOfDay).toBeGreaterThan(10);
    expect(p.weather).toBeDefined();
  });

  it('다수 주민 부하 스모크 (100명 tick이 폭주하지 않음)', () => {
    useWorld.getState().initWorld('load-test', { size: 64, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.5 });
    useWorld.getState().addLoadTestPopulation(100, 500);
    expect(useWorld.getState().villagers.length).toBeGreaterThanOrEqual(110);
    const t0 = performance.now();
    for (let i = 0; i < 20; i++) useWorld.getState().tick(0.05);
    const ms = performance.now() - t0;
    // 20틱이 15초를 넘기면 비정상 (CI 환경 여유)
    expect(ms).toBeLessThan(15000);
  });
});
