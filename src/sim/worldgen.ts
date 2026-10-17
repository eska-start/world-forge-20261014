// 시드 기반 절차적 월드 생성 — 동일 시드·설정 → 결정론적 재현
import { fbm, ridge, mulberry32, clamp, smoothstep, lerp } from './rng'
import type { WorldState, Tree, Rock, Building, Villager, Animal, Job, BuildingType } from './types'
import { recomputeAllBlocked, rebuildIndexes, heightAt } from './grid'

const KOREAN_NAMES = [
  '김도현', '이서연', '박지훈', '최수아', '정민준', '강하은', '윤서준', '있다온', '임도윤', '오지아',
  '신유찬', '한지민', '배도현', '고은우', '권시우', '문성현', '송하람', '홍지운', '류가온', '허온',
  '남주원', '심우진', '조현서', '곽다은', '천시아', '안그린', '서다온', '전하람', '표은찬', '여서준',
  '맹하윤', '기도현', '진서아', '옥지안', '함가람', '후지후', '추온유', '유현우', '차서진', '구자온',
]

export const JOBS: Job[] = ['벌목꾼', '광부', '농부', '건설가', '일꾼']

export function emptyWorld(seed: number, size: number): WorldState {
  const n = size * size
  return {
    seed,
    size,
    heights: new Float32Array(n),
    water: new Uint8Array(n),
    waterLevel: new Float32Array(n),
    trees: new Map(),
    rocks: new Map(),
    buildings: new Map(),
    villagers: [],
    animals: [],
    fires: [],
    nextId: 1,
    time: 0,
    weather: { kind: 'clear', left: 60 },
    popTimer: 25,
    village: { x: size / 2, z: size / 2 },
    stats: { gatheredWood: 0, gatheredStone: 0, gatheredFood: 0, built: 0, births: 0, deaths: 0 },
    storage: { wood: 80, stone: 40, food: 60 },
    blocked: new Uint8Array(n),
    treeIndex: new Map(),
    rockIndex: new Map(),
    buildingIndex: new Map(),
    toasts: [],
  }
}

export function generateWorld(seed: number, size = 160): WorldState {
  const world = emptyWorld(seed, size)
  const rng = mulberry32(seed)
  const S = seed | 0
  const half = size / 2

  // 1) 기본 높이맵: 해안(섬 마스크) + 평원/언덕 + 산맥
  for (let z = 0; z < size; z++) {
    for (let x = 0; x < size; x++) {
      const nx = (x - half) / half // -1..1
      const nz = (z - half) / half
      const d = Math.min(1, Math.sqrt(nx * nx + nz * nz))
      // 가장자리로 갈수록 낮아지는 섬 마스크 → 해안 생성
      const mask = 1 - smoothstep(0.55, 0.97, d)
      const base = fbm(x * 0.021, z * 0.021, S, 5) // -1..1
      const hills = fbm(x * 0.055, z * 0.055, S + 31, 3) * 0.5
      const mMask = smoothstep(0.08, 0.45, base)
      const mount = (ridge(x * 0.013, z * 0.013, S + 77) - 0.45) * 2.4 * mMask
      let h = base * 4.2 + hills + mount * 6.5
      h = h * mask - (1 - mask) * 3.2 - 0.6
      world.heights[z * size + x] = clamp(h, -6, 16)
    }
  }

  // 2) 강: 내륙 고지에서 시작해 고도를 따라 내려가며 협곡을 파고 바다로 흐른다
  const riverSources: Array<{ x: number; z: number }> = []
  for (let tries = 0; tries < 400 && riverSources.length < 3; tries++) {
    const x = Math.floor(half * 0.35 + rng() * size * 0.35)
    const z = Math.floor(half * 0.35 + rng() * size * 0.35)
    if (heightAt(world, x, z) > 5) riverSources.push({ x, z })
  }
  for (const src of riverSources) carveRiver(world, src.x, src.z, rng)

  // 3) 호수: 내륙 움푹 파인 분지를 해수면 아래로 파서 물이 차오르게 한다
  for (let li = 0; li < 2; li++) {
    for (let tries = 0; tries < 200; tries++) {
      const x = Math.floor(size * 0.25 + rng() * size * 0.5)
      const z = Math.floor(size * 0.25 + rng() * size * 0.5)
      if (heightAt(world, x, z) > 2.5 && !world.water[z * size + x]) {
        carveLake(world, x, z, 4 + Math.floor(rng() * 3), rng)
        break
      }
    }
  }

  // 4) 물 플래그: 자연 수면(해수면/호수) = 높이 < 0
  for (let i = 0; i < size * size; i++) {
    if (world.heights[i] < 0) {
      world.water[i] = 1
      world.waterLevel[i] = 0
    }
  }

  // 5) 마을 부지: 중앙 근처 평지 탐색 후 평탄화
  const site = findVillageSite(world, rng)
  world.village = { x: site.x, z: site.z }
  flattenPlaza(world, site.x, site.z, 7)

  // 6) 숲(식생): 습도 노이즈 + 고도/경사 조건
  plantForests(world, rng, 1300)
  // 7) 바위: 고지대/산기슭
  scatterRocks(world, rng, 90)
  // 마을 주변 정리
  clearArea(world, site.x, site.z, 8)

  // 8) 초기 건물: 창고 1 + 집 2 + 농장 1 (완공 상태)
  addInitialBuildings(world, site.x, site.z)

  // 9) 주민 10명 + 동물 24마리
  spawnStartingVillagers(world, rng, 10)
  spawnWildlife(world, rng, 24)

  recomputeAllBlocked(world)
  rebuildIndexes(world)
  return world
}

function carveRiver(world: WorldState, sx: number, sz: number, rng: () => number): void {
  const size = world.size
  let cx = sx
  let cz = sz
  let bed = Math.max(1.0, heightAt(world, cx, cz) - 0.4)
  const visited = new Set<number>()
  for (let step = 0; step < 600; step++) {
    const ci = cz * size + cx
    if (visited.has(ci)) break
    visited.add(ci)
    // 협곡 파기(십자 1칸 폭)
    const carve = (x: number, z: number, to: number) => {
      if (x < 0 || z < 0 || x >= size || z >= size) return
      const i = z * size + x
      if (world.heights[i] > to) world.heights[i] = to
    }
    carve(cx, cz, bed)
    carve(cx + 1, cz, bed + 0.12)
    carve(cx - 1, cz, bed + 0.12)
    carve(cx, cz + 1, bed + 0.12)
    carve(cx, cz - 1, bed + 0.12)
    if (heightAt(world, cx, cz) < 0) {
      world.water[ci] = 1
      world.waterLevel[ci] = 0
      break
    }
    world.water[ci] = 1
    world.waterLevel[ci] = bed + 0.22
    // 다음 타일: 8방 중 (고도 + 지터) 최소값 선택
    let best = -1
    let bestScore = Infinity
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dz === 0) continue
        const nx = cx + dx
        const nz = cz + dz
        if (nx < 1 || nz < 1 || nx >= size - 1 || nz >= size - 1) continue
        const ni = nz * size + nx
        if (visited.has(ni)) continue
        const score = Math.max(0, world.heights[ni]) + rng() * 1.1
        if (score < bestScore) {
          bestScore = score
          best = ni
        }
      }
    }
    if (best < 0) break
    cx = best % size
    cz = Math.floor(best / size)
    const hn = world.heights[best]
    if (hn <= 0.08) {
      // 바다에 닿음
      carve(cx, cz, Math.min(bed, -0.4))
      world.water[best] = 1
      world.waterLevel[best] = 0
      break
    }
    bed = clamp(Math.min(bed, hn - 0.02), 0.06, 99)
  }
}

function carveLake(world: WorldState, cx: number, cz: number, r: number, rng: () => number): void {
  const size = world.size
  for (let dz = -r - 1; dz <= r + 1; dz++) {
    for (let dx = -r - 1; dx <= r + 1; dx++) {
      const x = cx + dx
      const z = cz + dz
      if (x < 0 || z < 0 || x >= size || z >= size) continue
      const d = Math.sqrt(dx * dx + dz * dz) / r
      if (d > 1.05) continue
      const i = z * size + x
      const bowl = -1.9 * Math.max(0, 1 - d * d) + world.heights[i] * d * d
      world.heights[i] = Math.min(world.heights[i], bowl + rng() * 0.15)
    }
  }
}

function findVillageSite(world: WorldState, rng: () => number): { x: number; z: number } {
  const size = world.size
  let best = { x: Math.floor(size / 2), z: Math.floor(size / 2) }
  let bestScore = -Infinity
  for (let tries = 0; tries < 600; tries++) {
    const x = Math.floor(size * 0.25 + rng() * size * 0.5)
    const z = Math.floor(size * 0.25 + rng() * size * 0.5)
    let ok = true
    let minH = Infinity
    let maxH = -Infinity
    for (let dz = -6; dz <= 6 && ok; dz++) {
      for (let dx = -6; dx <= 6; dx++) {
        const x2 = x + dx
        const z2 = z + dz
        if (x2 < 2 || z2 < 2 || x2 >= size - 2 || z2 >= size - 2) {
          ok = false
          break
        }
        const h = heightAt(world, x2, z2)
        if (h < 0.6 || world.water[z2 * size + x2]) {
          ok = false
          break
        }
        minH = Math.min(minH, h)
        maxH = Math.max(maxH, h)
      }
    }
    if (!ok) continue
    const flatness = 10 - (maxH - minH) // 높이 차 작을수록 좋음
    const centrality = 12 - Math.hypot(x - size / 2, z - size / 2) / size * 20
    const score = flatness + centrality
    if (score > bestScore) {
      bestScore = score
      best = { x, z }
    }
  }
  return best
}

function flattenPlaza(world: WorldState, cx: number, cz: number, r: number): void {
  const size = world.size
  let sum = 0
  let n = 0
  for (let dz = -r; dz <= r; dz++) {
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx
      const z = cz + dz
      if (x < 0 || z < 0 || x >= size || z >= size) continue
      const i = z * size + x
      if (world.heights[i] > 0.4) {
        sum += world.heights[i]
        n++
      }
    }
  }
  if (n === 0) return
  const avg = clamp(sum / n, 0.5, 8)
  for (let dz = -r; dz <= r; dz++) {
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx
      const z = cz + dz
      if (x < 0 || z < 0 || x >= size || z >= size) continue
      const d = Math.hypot(dx, dz)
      if (d > r) continue
      const i = z * size + x
      const t = 1 - d / r
      const target = lerp(world.heights[i], avg, smoothstep(0, 0.85, t))
      world.heights[i] = Math.max(0.45, target) // 물에 잠기지 않게
      world.water[i] = 0
    }
  }
}

function plantForests(world: WorldState, rng: () => number, cap: number): void {
  const size = world.size
  let count = 0
  for (let z = 2; z < size - 2 && count < cap; z++) {
    for (let x = 2; x < size - 2 && count < cap; x++) {
      const i = z * size + x
      const h = world.heights[i]
      if (h < 0.55 || h > 10.5) continue
      if (world.water[i]) continue
      const moisture = fbm(x * 0.045, z * 0.045, world.seed + 501, 4)
      const forest = smoothstep(-0.05, 0.45, moisture)
      const dens = forest * 0.62
      if (rng() < dens) {
        const t = Math.min(1, (h - 0.5) / 6)
        let kind: Tree['kind'] = 'oak'
        if (h > 5.5) kind = 'pine'
        else if (h < 0.9) kind = rng() < 0.6 ? 'palm' : 'oak'
        world.trees.set(world.nextId, {
          id: world.nextId++,
          x,
          z,
          kind,
          growth: 0.65 + rng() * 0.35,
          hp: 60,
          burning: false,
        })
        count++
        void t
      }
    }
  }
}

function scatterRocks(world: WorldState, rng: () => number, cap: number): void {
  const size = world.size
  let count = 0
  for (let tries = 0; tries < cap * 8 && count < cap; tries++) {
    const x = 2 + Math.floor(rng() * (size - 4))
    const z = 2 + Math.floor(rng() * (size - 4))
    const i = z * size + x
    const h = world.heights[i]
    if (h < 0.5 || world.water[i]) continue
    if (world.trees.has(i)) continue
    const mountainBias = smoothstep(2.5, 7, h)
    if (rng() > 0.15 + mountainBias * 0.8) continue
    const amount = 18 + Math.floor(rng() * 26)
    world.rocks.set(world.nextId, {
      id: world.nextId++,
      x,
      z,
      amount,
      maxAmount: amount,
    })
    count++
  }
}

function clearArea(world: WorldState, cx: number, cz: number, r: number): void {
  const size = world.size
  const removeIds: number[] = []
  for (let dz = -r; dz <= r; dz++) {
    for (let dx = -r; dx <= r; dx++) {
      const x = cx + dx
      const z = cz + dz
      if (x < 0 || z < 0 || x >= size || z >= size) continue
      const ids = [...world.trees.entries()].filter(([, t]) => t.x === x && t.z === z)
      for (const [id] of ids) removeIds.push(id)
    }
  }
  for (const id of removeIds) world.trees.delete(id)
}

export function addInitialBuildings(world: WorldState, vx: number, vz: number): void {
  place(world, 'warehouse', vx - 1, vz - 1)
  place(world, 'house', vx + 3, vz - 1)
  place(world, 'house', vx - 3, vz + 1)
  place(world, 'farm', vx + 2, vz + 3)
}

function place(world: WorldState, type: BuildingType, x: number, z: number): Building {
  const dims: Record<BuildingType, [number, number]> = {
    house: [2, 2],
    warehouse: [2, 2],
    farm: [3, 3],
    lumberyard: [2, 2],
    quarry: [2, 2],
  }
  const [w, h] = dims[type]
  const b: Building = {
    id: world.nextId++,
    type,
    x,
    z,
    w,
    h,
    state: 'done',
    stored: { wood: 0, stone: 0 },
    progress: 1,
    crops: type === 'farm' ? 0.3 : 0,
    burning: false,
    hp: 100,
    rot: 0,
  }
  world.buildings.set(b.id, b)
  return b
}

function spawnStartingVillagers(world: WorldState, rng: () => number, count: number): void {
  for (let i = 0; i < count; i++) {
    const v: Villager = {
      id: world.nextId++,
      name: KOREAN_NAMES[i % KOREAN_NAMES.length] + (i >= KOREAN_NAMES.length ? String(i) : ''),
      job: JOBS[i % JOBS.length],
      x: world.village.x + (i % 5) - 2,
      z: world.village.z + Math.floor(i / 5) + 2,
      facing: rng() * Math.PI * 2,
      hunger: 20 + rng() * 25,
      fatigue: 10 + rng() * 20,
      health: 100,
      inv: { wood: 0, stone: 0, food: 0 },
      action: {
        kind: 'idle',
        reason: '월드 생성 직후',
        goal: '환경 파악',
        path: null,
        pathIndex: 0,
        phase: 'work',
        workLeft: 0.5,
      },
      thinkIn: rng() * 1.5,
      alive: true,
      bornAt: 0,
    }
    world.villagers.push(v)
  }
}

function spawnWildlife(world: WorldState, rng: () => number, count: number): void {
  const size = world.size
  for (let i = 0; i < count; i++) {
    for (let tries = 0; tries < 40; tries++) {
      const x = 4 + Math.floor(rng() * (size - 8))
      const z = 4 + Math.floor(rng() * (size - 8))
      const h = heightAt(world, x, z)
      if (h > 0.6 && h < 9) {
        const a: Animal = {
          id: world.nextId++,
          kind: rng() < 0.6 ? 'deer' : 'rabbit',
          x,
          z,
          facing: rng() * Math.PI * 2,
          action: {
            kind: 'idle',
            reason: '',
            goal: '',
            path: null,
            pathIndex: 0,
            phase: 'work',
            workLeft: rng() * 2,
          },
          thinkIn: rng() * 2,
        }
        world.animals.push(a)
        break
      }
    }
  }
}

// 편집기가 새 주민/동물을 만들 때 재사용
export function makeVillager(world: WorldState, x: number, z: number, job: Job): Villager {
  const n = world.villagers.length
  return {
    id: world.nextId++,
    name: KOREAN_NAMES[n % KOREAN_NAMES.length] + (n >= KOREAN_NAMES.length ? String(n) : ''),
    job,
    x,
    z,
    facing: Math.random() * Math.PI * 2,
    hunger: 30,
    fatigue: 20,
    health: 100,
    inv: { wood: 0, stone: 0, food: 0 },
    action: {
      kind: 'idle',
      reason: '새로 합류',
      goal: '마을 정착',
      path: null,
      pathIndex: 0,
      phase: 'work',
      workLeft: 0.2,
    },
    thinkIn: Math.random() * 1.2,
    alive: true,
    bornAt: world.time,
  }
}

export function makeAnimal(world: WorldState, x: number, z: number): Animal {
  return {
    id: world.nextId++,
    kind: Math.random() < 0.6 ? 'deer' : 'rabbit',
    x,
    z,
    facing: Math.random() * Math.PI * 2,
    action: { kind: 'idle', reason: '', goal: '', path: null, pathIndex: 0, phase: 'work', workLeft: 1 },
    thinkIn: Math.random() * 2,
  }
}

export function makeTree(world: WorldState, x: number, z: number): Tree {
  const h = heightAt(world, x, z)
  let kind: Tree['kind'] = 'oak'
  if (h > 5.5) kind = 'pine'
  else if (h < 0.9) kind = Math.random() < 0.6 ? 'palm' : 'oak'
  return {
    id: world.nextId++,
    x,
    z,
    kind,
    growth: 0.55,
    hp: 60,
    burning: false,
  }
}

export function makeRock(world: WorldState, x: number, z: number): Rock {
  const amount = 24 + Math.floor(Math.random() * 16)
  return { id: world.nextId++, x, z, amount, maxAmount: amount }
}

export function emptyRock(world: WorldState, x: number, z: number): Rock {
  return { id: world.nextId++, x, z, amount: 20, maxAmount: 20 }
}

export function emptyTree(world: WorldState, x: number, z: number): Tree {
  return { id: world.nextId++, x, z, kind: 'oak', growth: 0.8, hp: 60, burning: false }
}
