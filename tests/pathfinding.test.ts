// [필수 검증] 물 진입 방지, 장애물 회피, 편집 후 경로 갱신, 코너 컷 방지
import { describe, it, expect } from 'vitest'
import type { WorldState } from '../src/sim/types'
import { findPath } from '../src/sim/pathfinding'
import { recomputeAllBlocked } from '../src/sim/grid'
import { applyOps } from '../src/sim/edits'
import { placeBuilding } from '../src/sim/buildings'
import { makeFlatWorld, addWaterTile, refreshWorld } from './helpers'

describe('A* 길찾기', () => {
  it('평지에서 직선 경로를 찾고 모든 타일이 통행 가능하다', () => {
    const w: WorldState = makeFlatWorld(40)
    refreshWorld(w)
    const path = findPath(w, 5, 5, 15, 5)
    expect(path).not.toBeNull()
    if (!path) return
    for (const t of path) {
      expect(w.blocked[t.z * w.size + t.x]).toBe(0)
    }
    // 마지막 타일은 목적지
    expect(path[path.length - 1]).toEqual({ x: 15, z: 5 })
  })

  it('물 타일을 경로에 포함하지 않는다(물 진입 방지)', () => {
    const w = makeFlatWorld(40)
    // x=20 열 전체를 물로 (한 군데 구멍)
    for (let z = 0; z < 40; z++) {
      if (z !== 20) addWaterTile(w, 20, z)
    }
    refreshWorld(w)
    const path = findPath(w, 5, 5, 30, 5)
    expect(path).not.toBeNull()
    if (!path) return
    for (const t of path) {
      expect(w.water[t.z * w.size + t.x]).toBe(0) // 물을 밟지 않음
    }
    // 구멍(z=20) 근처를 지나가므로 직선보다 김
    expect(path.length).toBeGreaterThan(20)
  })

  it('완전히 막힌 경우 경로를 못 찾는다', () => {
    const w = makeFlatWorld(40)
    for (let z = 0; z < 40; z++) addWaterTile(w, 20, z)
    refreshWorld(w)
    const path = findPath(w, 5, 5, 30, 5)
    expect(path).toBeNull()
  })

  it('물로 둘러싸인 고립 지대에는 도달 불가', () => {
    const w = makeFlatWorld(40)
    // (30,30) 중심 3x3 육지, 테두리(max=2) 물
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) === 2) addWaterTile(w, 30 + dx, 30 + dz)
      }
    }
    refreshWorld(w)
    // 고립 육지(29,29)에는 도달 불가
    expect(findPath(w, 5, 5, 29, 29)).toBeNull()
    // 목적지가 물 위(28,28) → 인접 통행 타일로 스냅되어 도달
    const snap = findPath(w, 5, 5, 28, 28)
    expect(snap).not.toBeNull()
    if (snap) {
      for (const t of snap) expect(w.water[t.z * w.size + t.x]).toBe(0)
    }
  })

  it('건물이 장벽이 되면 우회한다', () => {
    const w = makeFlatWorld(40)
    // x=20,21 세로 열에 집들(2x2)을 4 간격으로 배치 → 2칸 통로 남김
    for (let z = 2; z < 38; z += 4) {
      placeBuilding(w, 20, z, 'house', 'done')
    }
    refreshWorld(w)
    const path = findPath(w, 10, 10, 30, 10)
    expect(path).not.toBeNull()
    if (!path) return
    for (const t of path) {
      expect(w.blocked[t.z * w.size + t.x]).toBe(0)
      expect(w.water[t.z * w.size + t.x]).toBe(0)
    }
  })

  it('절벽(경사 2.2 초과)을 통행 불가로 처리하고 계단으로 우회한다', () => {
    const w = makeFlatWorld(40)
    // x>=21 영역을 높이 8 고원으로 (경계 단차 6 > 2.2 → 절벽)
    for (let z = 0; z < 40; z++) {
      for (let x = 21; x < 40; x++) w.heights[z * w.size + x] = 8
    }
    refreshWorld(w)
    expect(findPath(w, 5, 5, 30, 10)).toBeNull() // 고원에 접근 불가

    // z=9..11 행에 완만한 경사길(계단)을 만든다
    for (const zRow of [9, 10, 11]) {
      for (let x = 20; x < 40; x++) {
        w.heights[zRow * w.size + x] = Math.min(8, 2 + (x - 20) * 0.65)
      }
    }
    refreshWorld(w)
    const path = findPath(w, 5, 5, 30, 10)
    expect(path).not.toBeNull()
    if (!path) return
    for (const t of path) {
      expect(w.blocked[t.z * w.size + t.x]).toBe(0)
    }
  })

  it('코너 컷: 양쪽 직교가 모두 막힌 대각선 이동은 금지된다', () => {
    const w = makeFlatWorld(20)
    // (1,0)과 (0,1)을 물로 막으면 (0,0)→(2,2) 직접 대각 불가 → 출발지가 고립
    addWaterTile(w, 1, 0)
    addWaterTile(w, 0, 1)
    refreshWorld(w)
    expect(findPath(w, 0, 0, 2, 2)).toBeNull()
    // 한쪽만 막으면 통과 가능
    const w2 = makeFlatWorld(20)
    addWaterTile(w2, 1, 0)
    refreshWorld(w2)
    expect(findPath(w2, 0, 0, 2, 2)).not.toBeNull()
  })

  it('[필수 검증] 지형 편집 후 차단 그리드와 경로가 갱신된다', () => {
    const w = makeFlatWorld(40)
    refreshWorld(w)
    const before = findPath(w, 5, 5, 15, 5)
    expect(before).not.toBeNull()
    expect(before?.some((t) => t.x === 10 && t.z === 5)).toBe(true) // 직선 통과

    // (10, 3..7) 5칸을 물로 만들어 벽을 세움 (편집 적용 경로 사용)
    const tiles: Array<[number, number, number, number, number]> = []
    for (let z = 3; z <= 7; z++) {
      const i = z * w.size + 10
      tiles.push([i, 0, 0, 1, 0])
    }
    applyOps(w, [{ t: 'water', tiles }])
    refreshWorld(w)

    const after = findPath(w, 5, 5, 15, 5)
    expect(after).not.toBeNull()
    if (!after) return
    for (const t of after) {
      expect(t.x === 10 && t.z >= 3 && t.z <= 7).toBe(false) // 벽을 우회
    }
    expect(after.some((t) => t.z < 3 || t.z > 7)).toBe(true) // 다른 길로 돌아감
  })
})
