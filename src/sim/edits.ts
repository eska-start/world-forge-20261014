// 편집 연산 + Undo/Redo — 모든 월드 편집은 EditOp를 통해 적용/반전된다
import type { WorldState, Tree, Rock, Building, Villager, Animal } from './types'
import {
  refreshTiles,
  indexTree,
  unindexTree,
  indexRock,
  unindexRock,
  indexBuilding,
  unindexBuilding,
  idx,
  inBounds,
  isWater,
} from './grid'
import { CHUNK_SIZE } from './grid'

export type EditOp =
  | { t: 'heights'; tiles: Array<[number, number, number]> } // [tileIndex, before, after]
  | { t: 'water'; tiles: Array<[number, number, number, number, number]> } // [i, beforeWater, beforeLevel, afterWater, afterLevel]
  | { t: 'treeAdd'; tree: Tree }
  | { t: 'treeRemove'; tree: Tree }
  | { t: 'rockAdd'; rock: Rock }
  | { t: 'rockRemove'; rock: Rock }
  | { t: 'buildingAdd'; building: Building }
  | { t: 'buildingRemove'; building: Building }
  | { t: 'villagerAdd'; villager: Villager }
  | { t: 'villagerRemove'; villager: Villager }
  | { t: 'animalAdd'; animal: Animal }
  | { t: 'animalRemove'; animal: Animal }

export type Edit = EditOp[]

export interface DirtyFlags {
  chunks: Set<string>
  terrain: boolean
  trees: boolean
  rocks: boolean
  buildings: boolean
  villagers: boolean
  animals: boolean
}

export function emptyDirty(): DirtyFlags {
  return {
    chunks: new Set(),
    terrain: false,
    trees: false,
    rocks: false,
    buildings: false,
    villagers: false,
    animals: false,
  }
}

export function chunkKeyOf(world: WorldState, x: number, z: number): string {
  return `${Math.floor(x / CHUNK_SIZE)},${Math.floor(z / CHUNK_SIZE)}`
}

function markTile(world: WorldState, dirty: DirtyFlags, x: number, z: number): void {
  if (!inBounds(world, x, z)) return
  const cx = Math.floor(x / CHUNK_SIZE)
  const cz = Math.floor(z / CHUNK_SIZE)
  // 경계 타일은 이웃 청크 노멀에도 영향 → 주변 3x3 청크 마킹
  for (let dz = -1; dz <= 1; dz++) {
    for (let dx = -1; dx <= 1; dx++) {
      const cxx = clampChunk(cx + dx, Math.ceil(world.size / CHUNK_SIZE) - 1)
      const czz = clampChunk(cz + dz, Math.ceil(world.size / CHUNK_SIZE) - 1)
      dirty.chunks.add(`${cxx},${czz}`)
    }
  }
}

function clampChunk(v: number, max: number): number {
  return Math.max(0, Math.min(max, v))
}

export function invertOp(op: EditOp): EditOp {
  switch (op.t) {
    case 'heights':
      return { t: 'heights', tiles: op.tiles.map(([i, before, after]) => [i, after, before] as [number, number, number]) }
    case 'water':
      return {
        t: 'water',
        tiles: op.tiles.map(
          ([i, bw, bl, aw, al]) => [i, aw, al, bw, bl] as [number, number, number, number, number],
        ),
      }
    case 'treeAdd':
      return { t: 'treeRemove', tree: op.tree }
    case 'treeRemove':
      return { t: 'treeAdd', tree: op.tree }
    case 'rockAdd':
      return { t: 'rockRemove', rock: op.rock }
    case 'rockRemove':
      return { t: 'rockAdd', rock: op.rock }
    case 'buildingAdd':
      return { t: 'buildingRemove', building: op.building }
    case 'buildingRemove':
      return { t: 'buildingAdd', building: op.building }
    case 'villagerAdd':
      return { t: 'villagerRemove', villager: op.villager }
    case 'villagerRemove':
      return { t: 'villagerAdd', villager: op.villager }
    case 'animalAdd':
      return { t: 'animalRemove', animal: op.animal }
    case 'animalRemove':
      return { t: 'animalAdd', animal: op.animal }
  }
}

export function applyOp(world: WorldState, op: EditOp, inverse = false): DirtyFlags {
  const dirty = emptyDirty()
  applyOpInto(world, op, inverse, dirty)
  return dirty
}

export function applyOps(world: WorldState, ops: EditOp[], inverse = false): DirtyFlags {
  const dirty = emptyDirty()
  const ordered = inverse ? [...ops].reverse() : ops
  for (const op of ordered) applyOpInto(world, op, inverse, dirty)
  if (dirty.chunks.size > 0) dirty.terrain = true
  return dirty
}

function applyOpInto(world: WorldState, op: EditOp, inverse: boolean, dirty: DirtyFlags): void {
  const affected: Array<{ x: number; z: number }> = []
  switch (op.t) {
    case 'heights': {
      for (const [i, before, after] of op.tiles) {
        const h = inverse ? before : after
        if (!inBounds(world, i % world.size, Math.floor(i / world.size))) continue
        world.heights[i] = h
        const x = i % world.size
        const z = Math.floor(i / world.size)
        // 높이 변경 → 자연 수면 규칙 동기화(해수면 아래로 내리면 물이 찬다)
        if (h < 0 && !isWater(world, x, z)) {
          world.water[i] = 1
          world.waterLevel[i] = 0
        } else if (h >= 0 && world.water[i] === 1 && world.waterLevel[i] === 0) {
          world.water[i] = 0
        }
        affected.push({ x, z })
        markTile(world, dirty, x, z)
      }
      dirty.terrain = true
      break
    }
    case 'water': {
      for (const [i, bw, bl, aw, al] of op.tiles) {
        const w = inverse ? bw : aw
        const lv = inverse ? bl : al
        const x = i % world.size
        const z = Math.floor(i / world.size)
        if (!inBounds(world, x, z)) continue
        world.water[i] = w
        world.waterLevel[i] = lv
        affected.push({ x, z })
        markTile(world, dirty, x, z)
      }
      dirty.terrain = true
      break
    }
    case 'treeAdd': {
      world.trees.set(op.tree.id, op.tree)
      indexTree(world, op.tree)
      affected.push({ x: op.tree.x, z: op.tree.z })
      dirty.trees = true
      break
    }
    case 'treeRemove': {
      world.trees.delete(op.tree.id)
      unindexTree(world, op.tree)
      affected.push({ x: op.tree.x, z: op.tree.z })
      dirty.trees = true
      break
    }
    case 'rockAdd': {
      world.rocks.set(op.rock.id, op.rock)
      indexRock(world, op.rock)
      dirty.rocks = true
      break
    }
    case 'rockRemove': {
      world.rocks.delete(op.rock.id)
      unindexRock(world, op.rock)
      dirty.rocks = true
      break
    }
    case 'buildingAdd': {
      world.buildings.set(op.building.id, op.building)
      indexBuilding(world, op.building)
      affected.push({ x: op.building.x, z: op.building.z })
      dirty.buildings = true
      break
    }
    case 'buildingRemove': {
      world.buildings.delete(op.building.id)
      unindexBuilding(world, op.building)
      affected.push({ x: op.building.x, z: op.building.z })
      dirty.buildings = true
      break
    }
    case 'villagerAdd': {
      if (!world.villagers.some((v) => v.id === op.villager.id)) world.villagers.push(op.villager)
      dirty.villagers = true
      break
    }
    case 'villagerRemove': {
      world.villagers = world.villagers.filter((v) => v.id !== op.villager.id)
      dirty.villagers = true
      break
    }
    case 'animalAdd': {
      if (!world.animals.some((a) => a.id === op.animal.id)) world.animals.push(op.animal)
      dirty.animals = true
      break
    }
    case 'animalRemove': {
      world.animals = world.animals.filter((a) => a.id !== op.animal.id)
      dirty.animals = true
      break
    }
  }
  if (affected.length > 0) refreshTiles(world, affected)
}

// ---------------- 브러시 배치용 누적 배치 ----------------

export class EditBatch {
  heights = new Map<number, [number, number, number]>()
  water = new Map<number, [number, number, number, number, number]>()

  isEmpty(): boolean {
    return this.heights.size === 0 && this.water.size === 0
  }

  /** 첫 접촉 시 before 기록, 이후에는 after 갱신 */
  setHeight(world: WorldState, x: number, z: number, after: number): void {
    const i = idx(world, x, z)
    const existing = this.heights.get(i)
    if (existing) existing[2] = after
    else this.heights.set(i, [i, world.heights[i], after])
  }

  setWater(world: WorldState, x: number, z: number, afterW: number, afterL: number): void {
    const i = idx(world, x, z)
    const existing = this.water.get(i)
    if (existing) {
      existing[3] = afterW
      existing[4] = afterL
    } else {
      this.water.set(i, [i, world.water[i], world.waterLevel[i], afterW, afterL])
    }
  }

  /** 나무 심기/제거 등 단건 연산을 흡수(중복 방지) */
  toOps(world: WorldState): Edit {
    const ops: EditOp[] = []
    if (this.heights.size > 0) {
      ops.push({
        t: 'heights',
        tiles: [...this.heights.values()].map((v) => [v[0], v[1], v[2]] as [number, number, number]),
      })
    }
    if (this.water.size > 0) {
      ops.push({
        t: 'water',
        tiles: [...this.water.values()].map(
          (v) => [v[0], v[1], v[2], v[3], v[4]] as [number, number, number, number, number],
        ),
      })
    }
    return ops
  }

  reset(): void {
    this.heights.clear()
    this.water.clear()
  }
}
