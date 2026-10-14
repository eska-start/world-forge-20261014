/* 전역 월드 상태 (Zustand) + 시뮬레이션 오케스트레이션 */
import { create } from 'zustand';
import { generateWorld, heightAt, DEFAULT_TERRAIN, type TerrainSettings, HEIGHT_SCALE } from '../core/terrain';
import { invalidatePathCache } from '../core/pathfinding';
import { idbSet, idbGet } from '../core/persistence';
import { SeededRng, koreanName } from '../core/rng';
import type {
  ToolKind, TreeEnt, RockEnt, BushEnt, BuildingEnt, VillagerEnt, AnimalEnt, FireEnt,
  Resources, EnvState, BuildingKind, JobKind,
} from './types';
import { BUILDING_DEFS } from './types';
import { tickVillagers } from './villagerAI';
import { tickEnvironment } from './environment';

export interface Selection { kind: 'villager' | 'building' | 'tree' | 'rock' | 'animal'; id: number; }

interface UndoEntry {
  label: string;
  heights: Float32Array;
  trees: TreeEnt[]; rocks: RockEnt[]; bushes: BushEnt[];
  buildings: BuildingEnt[]; villagers: VillagerEnt[]; animals: AnimalEnt[];
  resources: Resources;
}

interface WorldState {
  ready: boolean;
  seed: string;
  terrain: TerrainSettings;
  heights: Float32Array;
  biomes: Uint8Array;
  blocked: Uint8Array;
  trees: TreeEnt[]; rocks: RockEnt[]; bushes: BushEnt[];
  buildings: BuildingEnt[]; villagers: VillagerEnt[]; animals: AnimalEnt[]; fires: FireEnt[];
  resources: Resources;
  env: EnvState;
  simTime: number;
  speed: 0 | 1 | 2 | 4; // 0=일시정지
  tool: ToolKind;
  brushRadius: number;
  brushStrength: number;
  selection: Selection | null;
  showPaths: boolean;
  nextId: number;
  undoStack: UndoEntry[];
  redoStack: UndoEntry[];
  fps: number; aiMs: number; tickCount: number;
  notice: string;
  dirty: boolean;

  initWorld: (seed: string, terrain?: TerrainSettings) => void;
  regenerate: () => void;
  setTool: (t: ToolKind) => void;
  setBrush: (r: number, s: number) => void;
  setSpeed: (s: 0 | 1 | 2 | 4) => void;
  setSelection: (s: Selection | null) => void;
  togglePaths: () => void;
  applyBrushAt: (wx: number, wz: number) => void;
  clickAt: (wx: number, wz: number) => void;
  tick: (dt: number) => void;
  undo: () => void;
  redo: () => void;
  save: () => Promise<void>;
  load: () => Promise<boolean>;
  exportJson: () => unknown;
  importJson: (data: Record<string, unknown>) => boolean;
  reset: () => void;
  spawnVillagerAt: (x: number, z: number) => void;
  addLoadTestPopulation: (villagers: number, trees: number) => void;
  setNotice: (n: string) => void;
  rebuildBlocked: () => void;
}

const SAVE_KEY = 'world-forge-save-v1';
let villagerSeq = 1;
let lastUndoLabel = '';
let lastUndoAt = 0;

function pushUndo(get: () => WorldState, set: (p: Partial<WorldState>) => void, label: string) {
  const s = get();
  // 브러시 드래그 coalescing: 같은 라벨이 1초 내 연속이면 스택 폭증 방지
  const now = Date.now();
  if (label === lastUndoLabel && now - lastUndoAt < 1000 && s.undoStack.length > 0) return;
  lastUndoLabel = label;
  lastUndoAt = now;
  const entry: UndoEntry = {
    label,
    heights: new Float32Array(s.heights),
    trees: structuredClone(s.trees), rocks: structuredClone(s.rocks), bushes: structuredClone(s.bushes),
    buildings: structuredClone(s.buildings), villagers: structuredClone(s.villagers), animals: structuredClone(s.animals),
    resources: { ...s.resources },
  };
  const stack = [...s.undoStack, entry].slice(-30);
  set({ undoStack: stack, redoStack: [] });
}

function restoreEntry(s: WorldState, e: UndoEntry): Partial<WorldState> {
  return {
    heights: new Float32Array(e.heights),
    trees: structuredClone(e.trees), rocks: structuredClone(e.rocks), bushes: structuredClone(e.bushes),
    buildings: structuredClone(e.buildings), villagers: structuredClone(e.villagers), animals: structuredClone(e.animals),
    resources: { ...e.resources },
  };
}

function recomputeDerived(buildings: BuildingEnt[]): { housing: number; capacity: number } {
  let housing = 0;
  let capacity = 100;
  for (const b of buildings) {
    if (!b.complete) continue;
    if (b.kind === 'house') housing += 4;
    if (b.kind === 'storage') capacity += 200;
  }
  return { housing, capacity };
}

export const useWorld = create<WorldState>((set, get) => ({
  ready: false,
  seed: 'forge-1',
  terrain: { ...DEFAULT_TERRAIN },
  heights: new Float32Array(0),
  biomes: new Uint8Array(0),
  blocked: new Uint8Array(0),
  trees: [], rocks: [], bushes: [],
  buildings: [], villagers: [], animals: [], fires: [],
  resources: { wood: 40, stone: 20, food: 60, capacity: 100, population: 0, housing: 0 },
  env: { timeOfDay: 9, day: 1, weather: '맑음', weatherT: 60, raining: 0 },
  simTime: 0,
  speed: 1,
  tool: 'select',
  brushRadius: 3,
  brushStrength: 0.5,
  selection: null,
  showPaths: true,
  nextId: 1,
  undoStack: [],
  redoStack: [],
  fps: 0, aiMs: 0, tickCount: 0,
  notice: '',
  dirty: false,

  initWorld: (seed, terrain) => {
    const t = terrain ?? get().terrain;
    const gen = generateWorld(seed, t);
    const size = t.size;
    const blocked = new Uint8Array(size * size);
    const rng = new SeededRng(seed + ':pop');
    const trees: TreeEnt[] = gen.trees.map((s, i) => ({ id: i + 1, x: s.x, z: s.z, kind: s.kind as 'tree' | 'pine', growth: 1, alive: true }));
    const rocks: RockEnt[] = gen.rocks.map((s, i) => ({ id: 100000 + i + 1, x: s.x, z: s.z, alive: true, amount: 3 }));
    const bushes: BushEnt[] = gen.bushes.map((s, i) => ({ id: 200000 + i + 1, x: s.x, z: s.z, alive: true, food: 2, regrow: 0 }));
    let nid = 300000;
    // 시작 마을: 중앙 평지에 집 1 + 창고 1(완성) + 주민 10
    const cx = size / 2;
    const cz = size / 2;
    // 중앙이 물이면 가장 가까운 육지 탐색
    let px = Math.round(cx);
    let pz = Math.round(cz);
    if (gen.heights[pz * size + px] < t.waterLevel + 0.03) {
      let best = { x: px, z: pz, d: Infinity };
      for (let z = 0; z < size; z += 2) for (let x = 0; x < size; x += 2) {
        if (gen.heights[z * size + x] > t.waterLevel + 0.05) {
          const d = Math.hypot(x - cx, z - cz);
          if (d < best.d) best = { x, z, d };
        }
      }
      px = best.x; pz = best.z;
    }
    const buildings: BuildingEnt[] = [
      { id: nid++, kind: 'house', x: px, z: pz, progress: 1, required: { wood: 0, stone: 0 }, delivered: { wood: 0, stone: 0 }, complete: true },
      { id: nid++, kind: 'storage', x: px + 4, z: pz + 2, progress: 1, required: { wood: 0, stone: 0 }, delivered: { wood: 0, stone: 0 }, complete: true },
    ];
    const jobs: JobKind[] = ['목수', '석공', '농부', '운반꾼', '건설자', '무직', '목수', '농부', '운반꾼', '무직'];
    const villagers: VillagerEnt[] = [];
    for (let i = 0; i < 10; i++) {
      villagers.push({
        id: nid++, name: koreanName(rng), job: jobs[i % jobs.length],
        x: px + rng.range(-4, 4), z: pz + rng.range(-4, 4),
        hunger: rng.range(55, 90), fatigue: rng.range(5, 35), health: rng.range(80, 100),
        action: '대기', reason: '마을에 정착했습니다.',
        targetX: null, targetZ: null, path: [], pathIdx: 0,
        carry: { wood: 0, stone: 0, food: 0 }, carryCap: 10, speed: 4.2,
        homeId: buildings[0].id, workId: null, idleTicks: 0,
      });
    }
    // 동물 8마리
    const animals: AnimalEnt[] = [];
    for (let i = 0; i < 8; i++) {
      animals.push({ id: nid++, kind: i % 2 === 0 ? 'deer' : 'rabbit', x: px + rng.range(-18, 18), z: pz + rng.range(-18, 18), path: [], pathIdx: 0, retarget: rng.range(0, 5) });
    }
    const { housing, capacity } = recomputeDerived(buildings);
    // 시작 건물 주변 장애물 반영
    for (const b of buildings) {
      const bx = Math.round(b.x);
      const bz = Math.round(b.z);
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        const x = bx + dx;
        const z = bz + dz;
        if (x >= 0 && z >= 0 && x < size && z < size) blocked[z * size + x] = 1;
      }
    }
    invalidatePathCache();
    villagerSeq = 1;
    lastUndoLabel = '';
    lastUndoAt = 0;
    set({
      ready: true, seed, terrain: { ...t },
      heights: gen.heights, biomes: gen.biomes, blocked,
      trees, rocks, bushes, buildings, villagers, animals, fires: [],
      resources: { wood: 40, stone: 20, food: 60, capacity, population: villagers.length, housing },
      env: { timeOfDay: 9, day: 1, weather: '맑음', weatherT: 90, raining: 0 },
      simTime: 0, nextId: nid, undoStack: [], redoStack: [],
      selection: null, notice: `시드 "${seed}" 월드 생성 완료 — 주민 10명 정착`,
      tickCount: 0, dirty: false,
    });
  },

  regenerate: () => {
    get().initWorld(get().seed, get().terrain);
  },

  setTool: (t) => set({ tool: t }),
  setBrush: (r, s) => set({ brushRadius: Math.max(1, Math.min(10, r)), brushStrength: Math.max(0.05, Math.min(1, s)) }),
  setSpeed: (s) => set({ speed: s }),
  setSelection: (s) => set({ selection: s }),
  togglePaths: () => set((st) => ({ showPaths: !st.showPaths })),
  setNotice: (n) => set({ notice: n }),

  rebuildBlocked: () => {
    const s = get();
    const size = s.terrain.size;
    const blocked = new Uint8Array(size * size);
    for (const b of s.buildings) {
      const bx = Math.round(b.x);
      const bz = Math.round(b.z);
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        const x = bx + dx;
        const z = bz + dz;
        if (x >= 0 && z >= 0 && x < size && z < size) blocked[z * size + x] = 1;
      }
    }
    set({ blocked });
    invalidatePathCache();
  },

  applyBrushAt: (wx, wz) => {
    const s = get();
    if (!s.ready) return;
    const tool = s.tool;
    if (tool !== 'raise' && tool !== 'lower' && tool !== 'flatten' && tool !== 'water') return;
    pushUndo(get, (p) => set(p), tool);
    const size = s.terrain.size;
    const heights = new Float32Array(s.heights);
    const r = s.brushRadius;
    const strength = s.brushStrength * 0.02;
    const cxi = Math.round(wx);
    const czi = Math.round(wz);
    let targetH = 0;
    if (tool === 'flatten') targetH = heights[Math.max(0, Math.min(size - 1, czi)) * size + Math.max(0, Math.min(size - 1, cxi))];
    for (let dz = -Math.ceil(r); dz <= Math.ceil(r); dz++) {
      for (let dx = -Math.ceil(r); dx <= Math.ceil(r); dx++) {
        const x = cxi + dx;
        const z = czi + dz;
        if (x < 0 || z < 0 || x >= size || z >= size) continue;
        const d = Math.sqrt(dx * dx + dz * dz);
        if (d > r) continue;
        const fall = 1 - d / (r + 0.001);
        const i = z * size + x;
        if (tool === 'raise') heights[i] = Math.min(1, heights[i] + strength * fall);
        else if (tool === 'lower') heights[i] = Math.max(0, heights[i] - strength * fall);
        else if (tool === 'flatten') heights[i] += (targetH - heights[i]) * Math.min(1, strength * 4 * fall);
        else if (tool === 'water') heights[i] = Math.max(0, heights[i] - strength * 1.6 * fall);
      }
    }
    set({ heights, dirty: true });
    invalidatePathCache();
  },

  clickAt: (wx, wz) => {
    const s = get();
    if (!s.ready) return;
    const tool = s.tool;
    const size = s.terrain.size;
    const x = Math.max(0, Math.min(size - 1, wx));
    const z = Math.max(0, Math.min(size - 1, wz));
    const h = s.heights[Math.round(z) * size + Math.round(x)];
    const isWater = h < s.terrain.waterLevel;

    const eatUndo = (label: string) => pushUndo(get, (p) => set(p), label);

    if (tool === 'select') {
      // 가장 가까운 개체 선택 (반경 2.5셀)
      let best: Selection | null = null;
      let bestD = 2.5;
      for (const v of s.villagers) {
        const d = Math.hypot(v.x - x, v.z - z);
        if (d < bestD) { bestD = d; best = { kind: 'villager', id: v.id }; }
      }
      for (const b of s.buildings) {
        const d = Math.hypot(b.x - x, b.z - z);
        if (d < bestD + 1) { bestD = d; best = { kind: 'building', id: b.id }; }
      }
      for (const a of s.animals) {
        const d = Math.hypot(a.x - x, a.z - z);
        if (d < bestD) { bestD = d; best = { kind: 'animal', id: a.id }; }
      }
      set({ selection: best });
      return;
    }
    if (tool === 'plantTree') {
      if (isWater) { set({ notice: '물에는 나무를 심을 수 없습니다.' }); return; }
      eatUndo('나무 심기');
      const id = s.nextId++;
      set((st) => ({ trees: [...st.trees, { id, x, z, kind: 'tree', growth: 0.4, alive: true }], nextId: id + 1, dirty: true, notice: '나무를 심었습니다.' }));
      return;
    }
    if (tool === 'removeVeg' || tool === 'bulldoze') {
      eatUndo('제거');
      let trees = s.trees;
      let rocks = s.rocks;
      let bushes = s.bushes;
      let buildings = s.buildings;
      let villagers = s.villagers;
      let animals = s.animals;
      const R = tool === 'bulldoze' ? 2.5 : 1.8;
      trees = trees.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
      rocks = rocks.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
      bushes = bushes.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
      if (tool === 'bulldoze') {
        buildings = buildings.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
        const remV = s.villagers.length - villagers.length;
        void remV;
        villagers = villagers.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
        animals = animals.filter((t) => Math.hypot(t.x - x, t.z - z) > R);
      }
      set({ trees, rocks, bushes, buildings, villagers, animals, dirty: true, notice: '오브젝트를 제거했습니다.' });
      get().rebuildBlocked();
      const { housing, capacity } = recomputeDerived(get().buildings);
      set((st) => ({ resources: { ...st.resources, housing, capacity: Math.max(capacity, st.resources.wood + st.resources.stone + st.resources.food) } }));
      return;
    }
    if (tool === 'spawnVillager') {
      if (isWater) { set({ notice: '물에는 주민을 생성할 수 없습니다.' }); return; }
      eatUndo('주민 생성');
      get().spawnVillagerAt(x, z);
      return;
    }
    if (tool === 'spawnAnimal') {
      if (isWater) { set({ notice: '물에는 동물을 생성할 수 없습니다.' }); return; }
      eatUndo('동물 생성');
      const id = get().nextId++;
      set((st) => ({ animals: [...st.animals, { id, kind: 'rabbit', x, z, path: [], pathIdx: 0, retarget: 0 }], nextId: id + 1, dirty: true }));
      return;
    }
    if (tool === 'fire') {
      eatUndo('화재');
      const id = get().nextId++;
      set((st) => ({ fires: [...st.fires, { id, x: Math.round(x), z: Math.round(z), intensity: 1 }], nextId: id + 1, dirty: true, notice: '화재가 발생했습니다! 비가 오면 완화됩니다.' }));
      return;
    }
    // 건물 배치
    const kindMap: Partial<Record<ToolKind, BuildingKind>> = {
      buildHouse: 'house', buildStorage: 'storage', buildFarm: 'farm', buildLumber: 'lumber', buildQuarry: 'quarry',
    };
    const bk = kindMap[tool];
    if (bk) {
      if (isWater) { set({ notice: '물에는 건물을 지을 수 없습니다.' }); return; }
      const def = BUILDING_DEFS[bk];
      const st = get();
      if (st.resources.wood < def.wood || st.resources.stone < def.stone) {
        set({ notice: `자원이 부족합니다. 필요: 목재 ${def.wood}, 석재 ${def.stone} (보유: 목재 ${Math.floor(st.resources.wood)}, 석재 ${Math.floor(st.resources.stone)})` });
        return;
      }
      eatUndo(`건설:${def.name}`);
      const id = st.nextId++;
      // 건설비는 착공 시점에 차감 (실제 소모)
      set((prev) => ({
        buildings: [...prev.buildings, {
          id, kind: bk, x, z, progress: 0,
          required: { wood: def.wood, stone: def.stone },
          delivered: { wood: 0, stone: 0 },
          complete: false,
        }],
        resources: { ...prev.resources, wood: prev.resources.wood - def.wood, stone: prev.resources.stone - def.stone },
        nextId: id + 1, dirty: true,
        notice: `${def.name} 착공 — 주민이 건설하러 갑니다.`,
      }));
      get().rebuildBlocked();
      return;
    }
  },

  spawnVillagerAt: (x, z) => {
    const s = get();
    const rng = new SeededRng(s.seed + ':spawn:' + s.nextId + ':' + villagerSeq++);
    const jobs: JobKind[] = ['무직', '목수', '석공', '농부', '운반꾼', '건설자'];
    const id = s.nextId++;
    const home = s.buildings.find((b) => b.kind === 'house' && b.complete)?.id ?? null;
    set((st) => ({
      villagers: [...st.villagers, {
        id, name: koreanName(rng), job: jobs[Math.floor(rng.next() * jobs.length)],
        x, z, hunger: 70, fatigue: 10, health: 100,
        action: '대기', reason: '새로 태어났습니다.',
        targetX: null, targetZ: null, path: [], pathIdx: 0,
        carry: { wood: 0, stone: 0, food: 0 }, carryCap: 10, speed: 4.2,
        homeId: home, workId: null, idleTicks: 0,
      }],
      resources: { ...st.resources, population: st.villagers.length + 1 },
      nextId: id + 1, dirty: true, notice: '새 주민이 태어났습니다.',
    }));
  },

  addLoadTestPopulation: (villagers, trees) => {
    const s = get();
    pushUndo(get, (p) => set(p), '부하테스트');
    const rng = new SeededRng(s.seed + ':load');
    const size = s.terrain.size;
    let nid = s.nextId;
    const nv: VillagerEnt[] = [];
    for (let i = 0; i < villagers; i++) {
      const x = rng.range(5, size - 6);
      const z = rng.range(5, size - 6);
      nv.push({
        id: nid++, name: koreanName(rng), job: '무직', x, z,
        hunger: 70, fatigue: 10, health: 100, action: '대기', reason: '부하 테스트 주민',
        targetX: null, targetZ: null, path: [], pathIdx: 0,
        carry: { wood: 0, stone: 0, food: 0 }, carryCap: 10, speed: 4.2,
        homeId: null, workId: null, idleTicks: 0,
      });
    }
    const nt: TreeEnt[] = [];
    for (let i = 0; i < trees; i++) {
      const x = rng.range(2, size - 3);
      const z = rng.range(2, size - 3);
      const h = s.heights[Math.round(z) * size + Math.round(x)];
      if (h < s.terrain.waterLevel) continue;
      nt.push({ id: nid++, x, z, kind: rng.next() < 0.5 ? 'tree' : 'pine', growth: 1, alive: true });
    }
    set((st) => ({
      villagers: [...st.villagers, ...nv],
      trees: [...st.trees, ...nt],
      nextId: nid,
      resources: { ...st.resources, population: st.villagers.length + nv.length },
      dirty: true, notice: `부하 테스트: 주민 +${nv.length}, 나무 +${nt.length}`,
    }));
  },

  tick: (dt) => {
    const s = get();
    if (!s.ready || s.speed === 0) return;
    const t0 = performance.now();
    // 환경
    const envPatch = tickEnvironment(s.env, dt, s.fires.length);
    // 주민 AI (분산 처리: 매 틱 절반씩 번갈아 전체 추론 — 대규모 부하 대응)
    const simCtx = {
      size: s.terrain.size,
      heights: s.heights,
      waterLevel: s.terrain.waterLevel,
      blocked: s.blocked,
      trees: s.trees, rocks: s.rocks, bushes: s.bushes,
      buildings: s.buildings, villagers: s.villagers, animals: s.animals, fires: s.fires,
      resources: s.resources, env: { ...s.env, ...envPatch }, simTime: s.simTime,
    };
    const aiRes = tickVillagers(simCtx, dt, s.tickCount);
    const aiMs = performance.now() - t0;

    // 동물 배회 + 화재 확산 + 나무 성장 + 농장 생산 + 자원 소비는 여기서 집계
    const size = s.terrain.size;
    const rng = Math.random;
    // 동물 이동
    const animals: AnimalEnt[] = s.animals.map((a) => ({ ...a }));
    // 화재: 비에 완화, 인접 나무로 확산
    let fires: FireEnt[] = s.fires.map((f) => ({ ...f }));
    const rain = (envPatch.raining ?? s.env.raining);
    const newFires: FireEnt[] = [];
    const deadTreeIds = new Set<number>();
    if (fires.length > 0) {
      let nid = s.nextId;
      for (const f of fires) {
        f.intensity += dt * (rain > 0.3 ? -0.5 : 0.12);
        // 주변 나무 연소
        for (const t of s.trees) {
          if (!t.alive) continue;
          if (Math.hypot(t.x - f.x, t.z - f.z) < 2.2 && Math.random() < dt * 0.25 * f.intensity) {
            deadTreeIds.add(t.id);
            if (Math.random() < 0.4 && newFires.length + fires.length < 40) {
              newFires.push({ id: nid++, x: Math.round(t.x), z: Math.round(t.z), intensity: 0.7 });
            }
          }
        }
      }
      fires = [...fires, ...newFires].filter((f) => f.intensity > 0.05);
      if (fires.length === 0) set({ notice: '화재가 진압되었습니다.' });
      set({ nextId: nid });
    }
    // 나무 성장/재생, 덤불 재생
    const trees: TreeEnt[] = aiRes.trees as TreeEnt[];
    for (const t of trees) {
      if (!t.alive) continue;
      if (t.growth < 1) t.growth = Math.min(1, t.growth + dt * 0.01);
    }
    // 60초마다 빈 땅에 새싹 (재생)
    let extraTrees: TreeEnt[] = [];
    if (s.tickCount % 600 === 0 && trees.filter((t) => t.alive).length < size * size * 0.05) {
      let nid = get().nextId;
      for (let k = 0; k < 6; k++) {
        const x = 2 + Math.random() * (size - 4);
        const z = 2 + Math.random() * (size - 4);
        const h = s.heights[Math.round(z) * size + Math.round(x)];
        if (h < s.terrain.waterLevel + 0.02) continue;
        extraTrees.push({ id: nid++, x, z, kind: Math.random() < 0.5 ? 'tree' : 'pine', growth: 0.2, alive: true });
      }
      if (extraTrees.length) set({ nextId: nid });
    }
    const bushes: BushEnt[] = (aiRes.bushes as BushEnt[]).map((b) => ({ ...b }));
    for (const b of bushes) {
      if (b.food < 2) {
        b.regrow += dt;
        if (b.regrow > 40) { b.food = 2; b.regrow = 0; }
      }
    }
    // 농장 식량 생산 (완성된 농장당 주기적 +1)
    let foodGain = 0;
    const farms = s.buildings.filter((b) => b.kind === 'farm' && b.complete);
    if (farms.length > 0 && Math.floor(s.simTime) !== Math.floor(s.simTime + dt)) {
      // 초당 1회 판정: 농장당 0.08 확률
      for (const f of farms) {
        void f;
        if (rng() < 0.09 * farms.length) foodGain += 1;
      }
    }
    // 주민 식량 소비 (하루 3끼 가정 → 게임시간 기준)
    // 배고픔 감소는 villagerAI에서 처리, 여기서는 비축 식량으로 굶주림 해소는 AI가 수행.

    // 건물 완성 시 파생치 갱신
    const buildings = aiRes.buildings as BuildingEnt[];
    const { housing, capacity } = recomputeDerived(buildings);
    const resources: Resources = {
      wood: Math.min(capacity, aiRes.resources.wood + 0),
      stone: Math.min(capacity, aiRes.resources.stone),
      food: Math.min(capacity, aiRes.resources.food + foodGain),
      capacity,
      population: (aiRes.villagers as VillagerEnt[]).length,
      housing,
    };

    // 낮/밤 시간 전진 (게임 1일 = 480초 @1x)
    const timeAdvance = dt * (24 / 480);
    let timeOfDay = (envPatch.timeOfDay ?? s.env.timeOfDay) + timeAdvance * 0; // tickEnvironment가 이미 전진
    void timeAdvance;
    timeOfDay = envPatch.timeOfDay ?? s.env.timeOfDay;

    set({
      trees: deadTreeIds.size ? trees.filter((t) => !deadTreeIds.has(t.id)) : [...trees, ...extraTrees],
      rocks: aiRes.rocks as RockEnt[],
      bushes,
      buildings,
      villagers: aiRes.villagers as VillagerEnt[],
      animals: animals.map((a) => {
        // 간단 배회: 목표 없으면 새 목표
        a.retarget -= dt;
        if (a.pathIdx >= a.path.length || a.retarget <= 0) {
          const gx = Math.max(1, Math.min(size - 2, a.x + (Math.random() - 0.5) * 24));
          const gz = Math.max(1, Math.min(size - 2, a.z + (Math.random() - 0.5) * 24));
          const dx = gx - a.x;
          const dz = gz - a.z;
          const n = Math.max(2, Math.floor(Math.hypot(dx, dz)));
          a.path = Array.from({ length: n }, (_, i) => ({ x: a.x + (dx * (i + 1)) / n, z: a.z + (dz * (i + 1)) / n }));
          a.pathIdx = 0;
          a.retarget = 6 + Math.random() * 8;
        } else {
          const p = a.path[a.pathIdx];
          const d = Math.hypot(p.x - a.x, p.z - a.z);
          const step = dt * 1.6;
          if (d < step) { a.pathIdx++; }
          else { a.x += ((p.x - a.x) / d) * step; a.z += ((p.z - a.z) / d) * step; }
          // 물에 빠지지 않게
          const h = s.heights[Math.max(0, Math.min(size - 1, Math.round(a.z))) * size + Math.max(0, Math.min(size - 1, Math.round(a.x)))];
          if (h < s.terrain.waterLevel) { a.x -= ((p.x - a.x) / Math.max(0.001, d)) * step * 2; a.z -= ((p.z - a.z) / Math.max(0.001, d)) * step * 2; a.retarget = 0; }
        }
        return a;
      }),
      fires,
      resources,
      env: { ...s.env, ...envPatch, timeOfDay },
      simTime: s.simTime + dt,
      aiMs,
      tickCount: s.tickCount + 1,
      dirty: true,
    });
  },

  undo: () => {
    const s = get();
    const prev = s.undoStack[s.undoStack.length - 1];
    if (!prev) { set({ notice: '되돌릴 작업이 없습니다.' }); return; }
    const cur: UndoEntry = {
      label: 'redo', heights: new Float32Array(s.heights),
      trees: structuredClone(s.trees), rocks: structuredClone(s.rocks), bushes: structuredClone(s.bushes),
      buildings: structuredClone(s.buildings), villagers: structuredClone(s.villagers), animals: structuredClone(s.animals),
      resources: { ...s.resources },
    };
    set({
      ...restoreEntry(s, prev),
      undoStack: s.undoStack.slice(0, -1),
      redoStack: [...s.redoStack, cur],
      notice: `되돌림: ${prev.label}`,
    });
    get().rebuildBlocked();
  },

  redo: () => {
    const s = get();
    const nxt = s.redoStack[s.redoStack.length - 1];
    if (!nxt) { set({ notice: '다시 실행할 작업이 없습니다.' }); return; }
    const cur: UndoEntry = {
      label: 'undo', heights: new Float32Array(s.heights),
      trees: structuredClone(s.trees), rocks: structuredClone(s.rocks), bushes: structuredClone(s.bushes),
      buildings: structuredClone(s.buildings), villagers: structuredClone(s.villagers), animals: structuredClone(s.animals),
      resources: { ...s.resources },
    };
    set({
      ...restoreEntry(s, nxt),
      redoStack: s.redoStack.slice(0, -1),
      undoStack: [...s.undoStack, cur],
      notice: '다시 실행했습니다.',
    });
    get().rebuildBlocked();
  },

  save: async () => {
    const s = get();
    const data = get().exportJson() as Record<string, unknown>;
    await idbSet(SAVE_KEY, data);
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch { /* 용량 초과 시 무시 */ }
    set({ dirty: false, notice: '저장 완료 (IndexedDB + 로컬 백업)' });
  },

  load: async () => {
    let data: Record<string, unknown> | null = null;
    try { data = await idbGet<Record<string, unknown>>(SAVE_KEY); } catch { data = null; }
    if (!data) {
      try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (raw) data = JSON.parse(raw) as Record<string, unknown>;
      } catch { data = null; }
    }
    if (!data) { set({ notice: '저장된 데이터가 없습니다.' }); return false; }
    const ok = get().importJson(data);
    set({ notice: ok ? '불러오기 완료' : '불러오기 실패 (데이터 손상)' });
    return ok;
  },

  exportJson: () => {
    const s = get();
    return {
      version: 1,
      seed: s.seed,
      terrain: s.terrain,
      heights: Array.from(s.heights),
      biomes: Array.from(s.biomes),
      trees: s.trees, rocks: s.rocks, bushes: s.bushes,
      buildings: s.buildings, villagers: s.villagers, animals: s.animals, fires: s.fires,
      resources: s.resources, env: s.env, simTime: s.simTime, nextId: s.nextId,
    };
  },

  importJson: (data) => {
    try {
      const d = data as unknown as {
        seed: string; terrain: TerrainSettings; heights: number[]; biomes: number[];
        trees: TreeEnt[]; rocks: RockEnt[]; bushes: BushEnt[];
        buildings: BuildingEnt[]; villagers: VillagerEnt[]; animals: AnimalEnt[]; fires: FireEnt[];
        resources: Resources; env: EnvState; simTime: number; nextId: number;
      };
      if (!d.seed || !d.terrain || !d.heights) return false;
      const size = d.terrain.size;
      if (d.heights.length !== size * size) return false;
      set({
        ready: true,
        seed: d.seed, terrain: d.terrain,
        heights: new Float32Array(d.heights),
        biomes: new Uint8Array(d.biomes),
        trees: d.trees ?? [], rocks: d.rocks ?? [], bushes: d.bushes ?? [],
        buildings: d.buildings ?? [], villagers: d.villagers ?? [], animals: d.animals ?? [], fires: d.fires ?? [],
        resources: d.resources, env: d.env, simTime: d.simTime ?? 0, nextId: d.nextId ?? 1000000,
        undoStack: [], redoStack: [], selection: null,
      });
      get().rebuildBlocked();
      invalidatePathCache();
      return true;
    } catch {
      return false;
    }
  },

  reset: () => {
    get().initWorld(get().seed, get().terrain);
  },
}));

export function heightAtCursor(): (x: number, z: number) => number {
  const s = useWorld.getState();
  return (x, z) => heightAt({ heights: s.heights, settings: s.terrain }, x, z) * HEIGHT_SCALE;
}
