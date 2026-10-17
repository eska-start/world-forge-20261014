// 고정 시간 간격 시뮬레이션 틱 — 렌더 루프와 분리된 순수 로직
import type { WorldState, WeatherKind, Tree, Building, Fire } from './types'
import { DAY_LEN, BLOCK_FIRE } from './types'
import { updateVillager, updateAnimal, completeBuilding } from './ai'
import type { PathBudget } from './pathfinding'
import { houseCapacity } from './buildings'
import {
  idx,
  inBounds,
  heightAt,
  refreshTiles,
  pushToast,
  dayNumber,
} from './grid'
import { clamp, mulberry32, smoothstep } from './rng'

export const TICK_DT = 0.1 // 고정 시뮬레이션 간격(초)

const weatherRng = mulberry32(0x5eed1a7e) // 날씨 전이는 시드 고정(월드 시드와 무관한 안정적 패턴)

export function tick(world: WorldState, dt = TICK_DT): void {
  world.time += dt

  updateWeather(world, dt)
  updateFires(world, dt)
  updateVillagers(world, dt)
  updateAnimals(world, dt)
  updateFarms(world, dt)
  regrowTrees(world, dt)
  updatePopulation(world, dt)
}

function updateVillagers(world: WorldState, dt: number): void {
  const budget: PathBudget = {
    left: Math.max(3, Math.min(12, Math.ceil(world.villagers.length / 12))),
  }
  for (const v of world.villagers) {
    if (!v.alive) continue
    updateVillager(v, world, dt, budget)
    // 불꽃에 직접 닿으면 피해
    for (const f of world.fires) {
      const d = Math.hypot(f.x - v.x, f.z - v.z)
      if (d < 1.4) v.health = Math.max(0, v.health - 8 * dt)
    }
  }
  // 사망 처리
  const dead = world.villagers.filter((v) => !v.alive)
  if (dead.length > 0) {
    world.villagers = world.villagers.filter((v) => v.alive)
    world.stats.deaths += dead.length
    pushToast(world, `주민 ${dead.length}명 사망 (아사/화재)`)
  }
}

function updateAnimals(world: WorldState, dt: number): void {
  const budget: PathBudget = { left: 2 }
  for (const a of world.animals) updateAnimal(a, world, dt, budget)
}

// ---------------- 날씨 ----------------

function pickWeather(): { kind: WeatherKind; left: number } {
  const r = weatherRng()
  if (r < 0.62) return { kind: 'clear', left: 50 + weatherRng() * 80 }
  if (r < 0.87) return { kind: 'rain', left: 30 + weatherRng() * 60 }
  return { kind: 'storm', left: 20 + weatherRng() * 40 }
}

function updateWeather(world: WorldState, dt: number): void {
  world.weather.left -= dt
  if (world.weather.left <= 0) {
    const next = pickWeather()
    if (next.kind !== world.weather.kind) {
      pushToast(
        world,
        next.kind === 'clear' ? '날씨: 맑음' : next.kind === 'rain' ? '날씨: 비 — 화재 진압·농작물 촉진' : '날씨: 폭풍 — 낙뢰 주의',
      )
    }
    world.weather.kind = next.kind
    world.weather.left = next.left
  }
  // 폭풍 낙뢰 → 산발 화재
  if (world.weather.kind === 'storm') {
    if (weatherRng() < dt * 0.05 && world.trees.size > 0) {
      const ids = [...world.trees.keys()]
      const pick = ids[Math.floor(weatherRng() * ids.length)]
      const t = world.trees.get(pick)
      if (t && !t.burning) {
        igniteTree(world, t)
      }
    }
  }
}

// ---------------- 화재 ----------------

export function igniteTree(world: WorldState, t: Tree): void {
  t.burning = true
  world.fires.push({
    id: world.nextId++,
    x: t.x,
    z: t.z,
    life: 12,
    kind: 'tree',
    targetId: t.id,
  })
  const i = idx(world, t.x, t.z)
  if (inBounds(world, t.x, t.z)) world.blocked[i] |= BLOCK_FIRE
  pushToast(world, '화재 발생! 주민들이 대피합니다')
}

export function igniteBuilding(world: WorldState, b: Building): void {
  b.burning = true
  world.fires.push({
    id: world.nextId++,
    x: b.x + (b.w - 1) / 2,
    z: b.z + (b.h - 1) / 2,
    life: 18,
    kind: 'building',
    targetId: b.id,
  })
  for (let dz = 0; dz < b.h; dz++) {
    for (let dx = 0; dx < b.w; dx++) {
      const i = idx(world, b.x + dx, b.z + dz)
      if (inBounds(world, b.x + dx, b.z + dz)) world.blocked[i] |= BLOCK_FIRE
    }
  }
  pushToast(world, '건물 화재 발생!')
}

function updateFires(world: WorldState, dt: number): void {
  const rainy = world.weather.kind !== 'clear'
  const extingBase = rainy ? (world.weather.kind === 'storm' ? 0.5 : 0.3) * dt : 0.04 * dt
  const spreadBase = rainy ? 0.05 * dt : 0.5 * dt

  const done: Array<{ fire: Fire; burn: boolean }> = []
  for (const f of world.fires) {
    f.life -= dt * (rainy ? 1.8 : 1)
    // 확산: 인접 나무/건물
    if (weatherRng() < spreadBase) {
      const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]][Math.floor(weatherRng() * 4)]
      const nx = f.x + dir[0]
      const nz = f.z + dir[1]
      if (inBounds(world, nx, nz)) {
        const nid = nz * world.size + nx
        const wet = rainy ? 0.25 : 1
        for (const tid of world.treeIndex.get(nid) ?? []) {
          const t = world.trees.get(tid)
          if (t && !t.burning && weatherRng() < 0.5 * wet) igniteTree(world, t)
        }
        for (const bid of world.buildingIndex.get(nid) ?? []) {
          const b = world.buildings.get(bid)
          if (b && !b.burning && b.state !== 'ruined' && weatherRng() < 0.35 * wet) igniteBuilding(world, b)
        }
      }
    }
    // 소화
    if (weatherRng() < extingBase) {
      done.push({ fire: f, burn: false })
      continue
    }
    if (f.life <= 0) done.push({ fire: f, burn: true })
  }
  for (const { fire, burn } of done) {
    const k = world.fires.indexOf(fire)
    if (k >= 0) world.fires.splice(k, 1)
    if (fire.kind === 'tree') {
      const t = world.trees.get(fire.targetId)
      if (t) {
        t.burning = false
        if (burn) world.trees.delete(t.id) // 연소 종료 → 소실
        const i = idx(world, t.x, t.z)
        refreshTiles(world, [{ x: t.x, z: t.z }])
        void i
      }
    } else {
      const b = world.buildings.get(fire.targetId)
      if (b) {
        b.burning = false
        if (burn) {
          b.state = 'ruined'
          b.hp = 0
          pushToast(world, '건물 전소!')
        }
        refreshTiles(world, [{ x: b.x, z: b.z }])
      }
    }
  }
}

// ---------------- 농작물/나무 재생 ----------------

function updateFarms(world: WorldState, dt: number): void {
  const boost = world.weather.kind === 'rain' ? 2.0 : world.weather.kind === 'storm' ? 1.6 : 1.0
  for (const b of world.buildings.values()) {
    if (b.type !== 'farm' || b.state !== 'done') continue
    if (b.crops < 1) b.crops = Math.min(1, b.crops + dt / 45 * boost)
  }
}

function regrowTrees(world: WorldState, dt: number): void {
  // 매 틱 30그루 샘플링: 성장 + 신규 자연 발생
  const ids = [...world.trees.keys()]
  if (ids.length > 0) {
    for (let i = 0; i < 30; i++) {
      const t = world.trees.get(ids[Math.floor(Math.random() * ids.length)])
      if (t && t.growth < 1) t.growth = Math.min(1, t.growth + dt * 0.03)
    }
  }
  // 자연 신생: 여유 공간에 확률적 파종
  if (Math.random() < dt * 3) {
    const size = world.size
    const x = 2 + Math.floor(Math.random() * (size - 4))
    const z = 2 + Math.floor(Math.random() * (size - 4))
    const i = idx(world, x, z)
    const h = world.heights[i]
    if (
      h > 0.6 &&
      h < 10 &&
      world.water[i] === 0 &&
      (world.treeIndex.get(i)?.length ?? 0) === 0 &&
      world.blocked[i] === 0 &&
      world.trees.size < 3600
    ) {
      world.trees.set(world.nextId, {
        id: world.nextId++,
        x,
        z,
        kind: h > 5.5 ? 'pine' : 'oak',
        growth: 0.05,
        hp: 60,
        burning: false,
      })
    }
  }
}

// ---------------- 인구 성장 ----------------

function updatePopulation(world: WorldState, dt: number): void {
  world.popTimer -= dt
  if (world.popTimer > 0) return
  world.popTimer = 25
  const cap = houseCapacity(world)
  const pop = world.villagers.length
  if (world.storage.food >= 12 && pop < cap) {
    // 새 주민 이주 (창고 근처)
    const spot = findSpawnNear(world, world.village.x, world.village.z)
    if (spot) {
      const jobs = ['일꾼', '벌목꾼', '광부', '농부', '건설가'] as const
      const job = jobs[Math.floor(Math.random() * jobs.length)]
      const nv = {
        id: world.nextId++,
        name: `이주민${world.stats.births + 1}`,
        job,
        x: spot.x,
        z: spot.z,
        facing: 0,
        hunger: 35,
        fatigue: 25,
        health: 100,
        inv: { wood: 0, stone: 0, food: 0 },
        action: {
          kind: 'idle' as const,
          reason: '마을에 새로 이주',
          goal: '정착',
          path: null,
          pathIndex: 0,
          phase: 'work' as const,
          workLeft: 0.3,
        },
        thinkIn: 0.4,
        alive: true,
        bornAt: world.time,
      }
      world.villagers.push(nv)
      world.stats.births++
      pushToast(world, `새 주민 이주! 인구 ${pop + 1}/${cap}`)
    }
  }
  if (world.storage.food <= 2 && pop > 0) {
    pushToast(world, '식량 위기! 주민들이 야생 채집 중')
  }
}

export function findSpawnNear(world: WorldState, x: number, z: number): { x: number; z: number } | null {
  for (let r = 1; r <= 12; r++) {
    for (let i = 0; i < 8; i++) {
      const ang = (i / 8) * Math.PI * 2
      const tx = Math.round(x + Math.cos(ang) * r)
      const tz = Math.round(z + Math.sin(ang) * r)
      if (!inBounds(world, tx, tz)) continue
      if (world.blocked[idx(world, tx, tz)] !== 0) continue
      if (heightAt(world, tx, tz) < 0.4) continue
      return { x: tx, z: tz }
    }
  }
  return null
}

// ---------------- 통계/유틸 ----------------

export function timeOfDayString(world: WorldState): string {
  const frac = (world.time % DAY_LEN) / DAY_LEN
  const hours = (frac * 24 + 6) % 24
  const hh = Math.floor(hours)
  const mm = Math.floor((hours - hh) * 60)
  return `D${dayNumber(world)} ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
}

export function weatherName(world: WorldState): string {
  return world.weather.kind === 'clear' ? '맑음' : world.weather.kind === 'rain' ? '비' : '폭풍'
}

export function sunElevation(world: WorldState): number {
  const frac = (world.time % DAY_LEN) / DAY_LEN
  // frac 0 = 06:00 일출, 0.25 = 정오, 0.5 = 18:00 일몰
  return Math.sin(frac * Math.PI * 2)
}

export function daylight(world: WorldState): number {
  // 0(밤) .. 1(낮)
  return smoothstep(-0.14, 0.14, sunElevation(world))
}

export function clampWorldTime(world: WorldState): void {
  world.time = clamp(world.time, 0, Number.MAX_SAFE_INTEGER)
}
