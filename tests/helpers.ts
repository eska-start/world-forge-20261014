// 테스트 공용 헬퍼 — 평평한 통제 월드 생성
import type { WorldState, Villager } from '../src/sim/types'
import { emptyWorld, JOBS } from '../src/sim/worldgen'
import { recomputeAllBlocked, rebuildIndexes, heightAt, isWater, treeAt, rockAt, buildingAt, pushToast } from '../src/sim/grid'
import { placeBuilding } from '../src/sim/buildings'

export function makeFlatWorld(size = 48, seed = 12345): WorldState {
  const w = emptyWorld(seed, size)
  w.heights.fill(2.0)
  w.village = { x: size / 2, z: size / 2 }
  return w
}

export function addTestVillager(w: WorldState, x: number, z: number, job?: string): Villager {
  const v: Villager = {
    id: w.nextId++,
    name: '테스터',
    job: (job ?? JOBS[0]) as Villager['job'],
    x,
    z,
    facing: 0,
    hunger: 10,
    fatigue: 5,
    health: 100,
    inv: { wood: 0, stone: 0, food: 0 },
    action: {
      kind: 'idle',
      reason: '',
      goal: '',
      path: null,
      pathIndex: 0,
      phase: 'work',
      workLeft: 0,
    },
    thinkIn: 0,
    alive: true,
    bornAt: 0,
  }
  w.villagers.push(v)
  return v
}

/** 상태 변경 후 파생 그리드 재계산 */
export function refreshWorld(w: WorldState): void {
  rebuildIndexes(w)
  recomputeAllBlocked(w)
}

export function addWaterTile(w: WorldState, x: number, z: number): void {
  if (!isWater(w, x, z)) {
    w.water[z * w.size + x] = 1
    w.waterLevel[z * w.size + x] = 0
  }
}

export function findFreeSpot(w: WorldState, cx: number, cz: number): { x: number; z: number } | null {
  for (let r = 0; r < 20; r++) {
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = cx + dx
        const z = cz + dz
        if (x < 1 || z < 1 || x >= w.size - 1 || z >= w.size - 1) continue
        if (w.blocked[z * w.size + x] !== 0) continue
        if (treeAt(w, x, z) || rockAt(w, x, z) || buildingAt(w, x, z)) continue
        void heightAt(w, x, z)
        return { x, z }
      }
    }
  }
  return null
}

export { pushToast, placeBuilding }
