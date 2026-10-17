// 그리드 보조 함수 + 파생 상태(통행 불가 그리드/공간 인덱스) 유지
import type { WorldState, Tree, Rock, Building } from './types'
import { BLOCK_WATER, BLOCK_BUILDING, BLOCK_ROCK, BLOCK_CLIFF, BLOCK_FIRE } from './types'

export const CHUNK_SIZE = 10 // 지형 청크 한 변 타일 수 (프러스텀 컬링 단위)
import { clamp } from './rng'

export function idx(world: WorldState, x: number, z: number): number {
  return z * world.size + x
}

export function inBounds(world: WorldState, x: number, z: number): boolean {
  return x >= 0 && z >= 0 && x < world.size && z < world.size
}

export function heightAt(world: WorldState, x: number, z: number): number {
  if (!inBounds(world, x, z)) return -2
  return world.heights[idx(world, x, z)]
}

export function isWater(world: WorldState, x: number, z: number): boolean {
  if (!inBounds(world, x, z)) return true
  return world.water[idx(world, x, z)] === 1
}

export function waterLevelAt(world: WorldState, x: number, z: number): number {
  if (!inBounds(world, x, z)) return 0
  return world.waterLevel[idx(world, x, z)]
}

export function clampX(world: WorldState, x: number): number {
  return clamp(Math.round(x), 0, world.size - 1)
}

// 타일 좌표 → 연속 좌표(월드 중앙 기준) 변환은 렌더러가 담당.
// 시뮬레이션 내부에서는 전부 타일(정수) 좌표 체계를 사용한다.

export function slopeAt(world: WorldState, x: number, z: number): number {
  const h = heightAt(world, x, z)
  let s = 0
  const consider = (nx: number, nz: number) => {
    if (!inBounds(world, nx, nz)) return // 지도 밖은 절벽으로 취급하지 않는다
    const d = Math.abs(heightAt(world, nx, nz) - h)
    if (d > s) s = d
  }
  consider(x, z - 1)
  consider(x, z + 1)
  consider(x + 1, z)
  consider(x - 1, z)
  return s
}

export function treeIdsAt(world: WorldState, x: number, z: number): number[] {
  return world.treeIndex.get(idx(world, x, z)) ?? []
}

export function treeAt(world: WorldState, x: number, z: number): Tree | null {
  const ids = treeIdsAt(world, x, z)
  for (const id of ids) {
    const t = world.trees.get(id)
    if (t) return t
  }
  return null
}

export function rockAt(world: WorldState, x: number, z: number): Rock | null {
  const ids = world.rockIndex.get(idx(world, x, z)) ?? []
  for (const id of ids) {
    const r = world.rocks.get(id)
    if (r) return r
  }
  return null
}

export function buildingIdsAt(world: WorldState, x: number, z: number): number[] {
  return world.buildingIndex.get(idx(world, x, z)) ?? []
}

export function buildingAt(world: WorldState, x: number, z: number): Building | null {
  const ids = buildingIdsAt(world, x, z)
  for (const id of ids) {
    const b = world.buildings.get(id)
    if (b) return b
  }
  return null
}

export function walkable(world: WorldState, x: number, z: number): boolean {
  if (!inBounds(world, x, z)) return false
  return world.blocked[idx(world, x, z)] === 0
}

// 반경 내 자유지(나무/바위/건물/물 없음) 타일 하나
export function freeLandNear(world: WorldState, x: number, z: number, maxR = 6): { x: number; z: number } | null {
  const cx = clampX(world, x)
  const cz = clampX(world, z)
  for (let r = 0; r <= maxR; r++) {
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue
        const tx = cx + dx
        const tz = cz + dz
        if (!inBounds(world, tx, tz)) continue
        if (world.blocked[idx(world, tx, tz)] !== 0) continue
        if (treeAt(world, tx, tz) || rockAt(world, tx, tz)) continue
        return { x: tx, z: tz }
      }
    }
  }
  return null
}

function setTileBlocked(world: WorldState, x: number, z: number): void {
  if (!inBounds(world, x, z)) return
  let bits = 0
  const i = idx(world, x, z)
  if (world.water[i] === 1) bits |= BLOCK_WATER
  if (buildingIdsAt(world, x, z).length > 0) bits |= BLOCK_BUILDING
  if (rockAt(world, x, z)) bits |= BLOCK_ROCK
  if (slopeAt(world, x, z) > 2.2) bits |= BLOCK_CLIFF
  const tree = treeAt(world, x, z)
  if (tree && tree.burning) bits |= BLOCK_FIRE
  for (const f of world.fires) {
    if (f.x === x && f.z === z) bits |= BLOCK_FIRE
  }
  world.blocked[i] = bits
}

// 편집 후 호출: 타일과 4이웃(절벽 판정은 이웃 높이에도 의존) 갱신
export function refreshTiles(world: WorldState, tiles: Array<{ x: number; z: number }>): void {
  const seen = new Set<number>()
  for (const t of tiles) {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        const x = t.x + dx
        const z = t.z + dz
        if (!inBounds(world, x, z)) continue
        const i = idx(world, x, z)
        if (seen.has(i)) continue
        seen.add(i)
        setTileBlocked(world, x, z)
      }
    }
  }
}

export function recomputeAllBlocked(world: WorldState): void {
  for (let z = 0; z < world.size; z++) {
    for (let x = 0; x < world.size; x++) {
      setTileBlocked(world, x, z)
    }
  }
}

export function rebuildIndexes(world: WorldState): void {
  world.treeIndex = new Map()
  world.rockIndex = new Map()
  world.buildingIndex = new Map()
  for (const t of world.trees.values()) indexTree(world, t)
  for (const r of world.rocks.values()) indexRock(world, r)
  for (const b of world.buildings.values()) indexBuilding(world, b)
}

export function indexTree(world: WorldState, t: Tree): void {
  const i = idx(world, t.x, t.z)
  const arr = world.treeIndex.get(i)
  if (arr) arr.push(t.id)
  else world.treeIndex.set(i, [t.id])
}

export function unindexTree(world: WorldState, t: Tree): void {
  const i = idx(world, t.x, t.z)
  const arr = world.treeIndex.get(i)
  if (arr) {
    const k = arr.indexOf(t.id)
    if (k >= 0) arr.splice(k, 1)
    if (arr.length === 0) world.treeIndex.delete(i)
  }
}

export function indexRock(world: WorldState, r: Rock): void {
  const i = idx(world, r.x, r.z)
  const arr = world.rockIndex.get(i)
  if (arr) arr.push(r.id)
  else world.rockIndex.set(i, [r.id])
}

export function unindexRock(world: WorldState, r: Rock): void {
  const i = idx(world, r.x, r.z)
  const arr = world.rockIndex.get(i)
  if (arr) {
    const k = arr.indexOf(r.id)
    if (k >= 0) arr.splice(k, 1)
    if (arr.length === 0) world.rockIndex.delete(i)
  }
}

export function indexBuilding(world: WorldState, b: Building): void {
  for (let dz = 0; dz < b.h; dz++) {
    for (let dx = 0; dx < b.w; dx++) {
      const i = idx(world, b.x + dx, b.z + dz)
      const arr = world.buildingIndex.get(i)
      if (arr) arr.push(b.id)
      else world.buildingIndex.set(i, [b.id])
    }
  }
}

export function unindexBuilding(world: WorldState, b: Building): void {
  for (let dz = 0; dz < b.h; dz++) {
    for (let dx = 0; dx < b.w; dx++) {
      const i = idx(world, b.x + dx, b.z + dz)
      const arr = world.buildingIndex.get(i)
      if (arr) {
        const k = arr.indexOf(b.id)
        if (k >= 0) arr.splice(k, 1)
        if (arr.length === 0) world.buildingIndex.delete(i)
      }
    }
  }
}

// 낮/밤 판정: 일출(06:00)~일몰(18:00)이 낮 — frac 0 = 06:00
export function hoursOfDay(world: WorldState): number {
  const frac = (world.time % 180) / 180
  return (frac * 24 + 6) % 24
}

export function isNight(world: WorldState): boolean {
  const frac = (world.time % 180) / 180
  return Math.sin(frac * Math.PI * 2) < 0
}

export function dayNumber(world: WorldState): number {
  return Math.floor(world.time / 180) + 1
}

export function pushToast(world: WorldState, msg: string): void {
  world.toasts.push(msg)
  if (world.toasts.length > 30) world.toasts.shift()
}
