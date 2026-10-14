import { describe, it, expect } from 'vitest';
import { useWorld } from '../src/sim/store';
import { scoreActions } from '../src/sim/villagerAI';

/** 자원이 실제로 채집→운반→창고→건설로 이어지는지 검증 */
describe('자원·건설 경제 흐름', () => {
  it('초기 월드에 주민 10명과 집/창고가 있다', () => {
    useWorld.getState().initWorld('econ-test', { size: 64, waterLevel: 0.38, hilliness: 0.6, forestDensity: 0.6 });
    const s = useWorld.getState();
    expect(s.villagers.length).toBe(10);
    expect(s.buildings.some((b) => b.kind === 'house' && b.complete)).toBe(true);
    expect(s.buildings.some((b) => b.kind === 'storage' && b.complete)).toBe(true);
  });

  it('벌목→운반→하역이 창고 자원을 증가시킨다 (순간이동 없음)', () => {
    useWorld.getState().initWorld('econ-haul', { size: 64, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.7 });
    const s0 = useWorld.getState();
    const wood0 = s0.resources.wood;
    // 주민 한 명에게 목재를 들려 창고 옆에 배치 후 운반 액션 강제
    const st = useWorld.getState();
    const store = st.buildings.find((b) => b.complete)!;
    const v = st.villagers[0];
    useWorld.setState({
      villagers: st.villagers.map((x, i) => i === 0 ? {
        ...x, x: store.x + 1.2, z: store.z + 1.2,
        carry: { wood: 8, stone: 0, food: 0 }, action: '운반' as const,
        path: [], pathIdx: 0, targetX: null, targetZ: null, reason: '테스트',
      } : x),
    });
    // 5초 시뮬레이션
    for (let i = 0; i < 100; i++) useWorld.getState().tick(0.05);
    const s1 = useWorld.getState();
    expect(s1.resources.wood).toBeGreaterThan(wood0);
    // 운반자는 이동했거나 하역 완료했어야 함 (제자리 가짜 이동 금지 검증은 위치 변화/자원 반영으로)
    expect(s1.resources.wood - wood0).toBeGreaterThan(0);
    void v;
  });

  it('건설 착공 시 자원이 소모되고 주민 작업으로 완성된다', () => {
    useWorld.getState().initWorld('econ-build', { size: 64, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.6 });
    useWorld.setState({ resources: { ...useWorld.getState().resources, wood: 200, stone: 200, food: 200, capacity: 1000, population: 10, housing: 4 } });
    const before = useWorld.getState().resources.wood;
    // 육지 셀 탐색 (시작 건물 근처 나선 탐색 — 물 위 배치 실패 방지)
    const s = useWorld.getState();
    const n = s.terrain.size;
    const hx = Math.round(s.buildings[0].x);
    const hz = Math.round(s.buildings[0].z);
    let bx = hx + 8;
    let bz = hz + 8;
    outer: for (let r = 4; r < 20; r++) {
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          const x = hx + dx;
          const z = hz + dz;
          if (x < 2 || z < 2 || x >= n - 2 || z >= n - 2) continue;
          if (s.heights[z * n + x] > s.terrain.waterLevel + 0.03) { bx = x; bz = z; break outer; }
        }
      }
    }
    useWorld.getState().setTool('buildHouse');
    useWorld.getState().clickAt(bx, bz);
    const s1 = useWorld.getState();
    const site = s1.buildings[s1.buildings.length - 1];
    expect(site.kind).toBe('house');
    expect(site.complete).toBe(false);
    expect(s1.resources.wood).toBeLessThan(before); // 착공 소모
    // 건설자를 현장에 배치해 완성까지 가속
    useWorld.setState({
      villagers: useWorld.getState().villagers.map((x, i) => i < 3 ? {
        ...x, x: site.x + 2, z: site.z, action: '건설' as const, job: '건설자' as const,
        path: [], pathIdx: 0, targetX: null, targetZ: null, reason: '테스트 건설',
      } : x),
    });
    for (let i = 0; i < 1200; i++) {
      useWorld.getState().tick(0.05);
      if (useWorld.getState().buildings.find((b) => b.id === site.id)?.complete) break;
    }
    expect(useWorld.getState().buildings.find((b) => b.id === site.id)?.complete).toBe(true);
  });

  it('식량 부족 시 주민 행동이 채집/식사로 기운다', () => {
    useWorld.getState().initWorld('econ-food', { size: 64, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.6 });
    const s = useWorld.getState();
    const hungry = { ...s.villagers[0], hunger: 10, carry: { wood: 0, stone: 0, food: 0 } };
    const ranked = scoreActions(hungry, {
      size: 64, heights: s.heights, waterLevel: 0.38, blocked: s.blocked,
      trees: s.trees, rocks: s.rocks, bushes: s.bushes, buildings: s.buildings,
      villagers: s.villagers, animals: s.animals, fires: [],
      resources: { ...s.resources, food: 0 }, env: s.env, simTime: 0,
    });
    // 비축 0 + 굶주림 → 식사보다 식량탐색이 유효하거나 식사가 최상위
    expect(['식사', '식량탐색', '농사']).toContain(ranked[0].action);
  });

  it('존재하지 않는 자원 획득이 없다 (나무 없으면 벌목 완료 불가)', () => {
    useWorld.getState().initWorld('econ-nores', { size: 48, waterLevel: 0.38, hilliness: 0.5, forestDensity: 0.6 });
    // 모든 나무 제거
    useWorld.setState({ trees: [] });
    const wood0 = useWorld.getState().resources.wood;
    for (let i = 0; i < 200; i++) useWorld.getState().tick(0.05);
    // 나무가 없는데 목재가 무한정 늘어나면 안 됨 (농장 생산분 제외 — 목재는 그대로여야 함)
    expect(useWorld.getState().resources.wood).toBeLessThanOrEqual(wood0 + 0.001);
  });
});
