// 건물 정의, 배치 규칙, 자재/창고/건설 현장 조회
import type { WorldState, Building, BuildingType, Footprint } from './types'
import {
  buildingIdsAt,
  inBounds,
  idx,
  isWater,
  treeAt,
  rockAt,
} from './grid'

export interface BuildingDef {
  type: BuildingType
  name: string
  w: number
  h: number
  cost: { wood: number; stone: number }
  buildTime: number // 초
  desc: string
}

export const BUILDING_DEFS: Record<BuildingType, BuildingDef> = {
  house: {
    type: 'house',
    name: '집',
    w: 2,
    h: 2,
    cost: { wood: 8, stone: 0 },
    buildTime: 8,
    desc: '주거 +4, 주민 휴식처',
  },
  warehouse: {
    type: 'warehouse',
    name: '창고',
    w: 2,
    h: 2,
    cost: { wood: 12, stone: 6 },
    buildTime: 12,
    desc: '자원 보관·운반 목적지',
  },
  farm: {
    type: 'farm',
    name: '농장',
    w: 3,
    h: 3,
    cost: { wood: 6, stone: 0 },
    buildTime: 10,
    desc: '작물 재배 → 수확 시 식량 +6',
  },
  lumberyard: {
    type: 'lumberyard',
    name: '벌목장',
    w: 2,
    h: 2,
    cost: { wood: 10, stone: 4 },
    buildTime: 14,
    desc: '목재 반입처·주변 벌목 속도 +50%',
  },
  quarry: {
    type: 'quarry',
    name: '채석장',
    w: 2,
    h: 2,
    cost: { wood: 8, stone: 8 },
    buildTime: 14,
    desc: '석재 반입처·채굴 속도 +50%',
  },
}

export function canPlaceBuilding(world: WorldState, tx: number, tz: number, type: BuildingType): boolean {
  const def = BUILDING_DEFS[type]
  for (let dz = 0; dz < def.h; dz++) {
    for (let dx = 0; dx < def.w; dx++) {
      const x = tx + dx
      const z = tz + dz
      if (!inBounds(world, x, z)) return false
      if (isWater(world, x, z)) return false
      if (buildingIdsAt(world, x, z).length > 0) return false
      if (treeAt(world, x, z) || rockAt(world, x, z)) return false
      const h = world.heights[idx(world, x, z)]
      if (h < 0.45) return false
      // 경사 검사(주변 최대 고차)
      for (const [ox, oz] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) {
        const nh = world.heights[idx(world, clampi(x + ox, world.size), clampi(z + oz, world.size))]
        if (Math.abs(nh - h) > 2.2) return false
      }
    }
  }
  return true
}

function clampi(v: number, size: number): number {
  return Math.max(0, Math.min(size - 1, v))
}

export function placeBuilding(
  world: WorldState,
  tx: number,
  tz: number,
  type: BuildingType,
  state: 'planned' | 'done' = 'planned',
): Building {
  const def = BUILDING_DEFS[type]
  const b: Building = {
    id: world.nextId++,
    type,
    x: tx,
    z: tz,
    w: def.w,
    h: def.h,
    state,
    stored: { wood: 0, stone: 0 },
    progress: state === 'done' ? 1 : 0,
    crops: type === 'farm' && state === 'done' ? 0.1 : 0,
    burning: false,
    hp: 100,
    rot: 0,
  }
  world.buildings.set(b.id, b)
  return b
}

export function needsMaterials(b: Building): { wood: number; stone: number } {
  const def = BUILDING_DEFS[b.type]
  return {
    wood: Math.max(0, def.cost.wood - b.stored.wood),
    stone: Math.max(0, def.cost.stone - b.stored.stone),
  }
}

export function materialsReady(b: Building): boolean {
  const n = needsMaterials(b)
  return n.wood === 0 && n.stone === 0
}

export function findConstructionSite(world: WorldState): Building | null {
  let best: Building | null = null
  let bestD = Infinity
  for (const b of world.buildings.values()) {
    if (b.state === 'done' || b.state === 'ruined') continue
    if (b.state === 'planned' && !materialsReady(b)) continue // 자재 대기 중인 현장은 건설 불가
    const d = dist2(b.x + b.w / 2, b.z + b.h / 2, 0, 0)
    void d
    // 마을 중심 기준이 아니라 요청자 위치 기준이 필요하지만, 후보 평가에서 거리 보정하므로 여기선 첫 후보 반환
    const cx = world.village.x
    const cz = world.village.z
    const dd = (b.x - cx) * (b.x - cx) + (b.z - cz) * (b.z - cz)
    if (dd < bestD) {
      bestD = dd
      best = b
    }
  }
  return best
}

export function nearestDepot(world: WorldState, x: number, z: number, res: 'wood' | 'stone' | 'food'): Building | null {
  let best: Building | null = null
  let bestD = Infinity
  for (const b of world.buildings.values()) {
    if (b.state !== 'done') continue
    const accepts =
      res === 'food' ? b.type === 'warehouse' : b.type === 'warehouse' || b.type === (res === 'wood' ? 'lumberyard' : 'quarry')
    if (!accepts) continue
    const d = (b.x + b.w / 2 - x) * (b.x + b.w / 2 - x) + (b.z + b.h / 2 - z) * (b.z + b.h / 2 - z)
    if (d < bestD) {
      bestD = d
      best = b
    }
  }
  return best
}

export function nearestHouse(world: WorldState, x: number, z: number): Building | null {
  let best: Building | null = null
  let bestD = Infinity
  for (const b of world.buildings.values()) {
    if (b.type !== 'house' || b.state !== 'done') continue
    const d = (b.x - x) * (b.x - x) + (b.z - z) * (b.z - z)
    if (d < bestD) {
      bestD = d
      best = b
    }
  }
  return best
}

export function nearestReadyFarm(world: WorldState, x: number, z: number): Building | null {
  let best: Building | null = null
  let bestD = Infinity
  for (const b of world.buildings.values()) {
    if (b.type !== 'farm' || b.state !== 'done' || b.crops < 0.95) continue
    const d = (b.x - x) * (b.x - x) + (b.z - z) * (b.z - z)
    if (d < bestD) {
      bestD = d
      best = b
    }
  }
  return best
}

export function houseCapacity(world: WorldState): number {
  let cap = 6
  for (const b of world.buildings.values()) {
    if (b.type === 'house' && b.state === 'done') cap += 4
  }
  return cap
}

export function hasLumberyard(world: WorldState): boolean {
  for (const b of world.buildings.values()) if (b.type === 'lumberyard' && b.state === 'done') return true
  return false
}

export function hasQuarry(world: WorldState): boolean {
  for (const b of world.buildings.values()) if (b.type === 'quarry' && b.state === 'done') return true
  return false
}

export function dist2(ax: number, az: number, bx: number, bz: number): number {
  const dx = ax - bx
  const dz = az - bz
  return dx * dx + dz * dz
}

// 건물 중심 근처의 통행 가능 타일(들어갈 자리)
export function adjacentWalkableOf(world: WorldState, b: Footprint, fromX: number, fromZ: number): { x: number; z: number } | null {
  let best: { x: number; z: number } | null = null
  let bestD = Infinity
  const tryTile = (x: number, z: number) => {
    if (!inBounds(world, x, z)) return
    if (world.blocked[idx(world, x, z)] !== 0) return
    if (treeAt(world, x, z) || rockAt(world, x, z)) return
    const d = dist2(x, z, fromX, fromZ)
    if (d < bestD) {
      bestD = d
      best = { x, z }
    }
  }
  for (let dx = -1; dx <= b.w; dx++) {
    tryTile(b.x + dx, b.z - 1)
    tryTile(b.x + dx, b.z + b.h)
  }
  for (let dz = 0; dz < b.h; dz++) {
    tryTile(b.x - 1, b.z + dz)
    tryTile(b.x + b.w, b.z + dz)
  }
  return best
}
