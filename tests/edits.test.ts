// 편집 연산 + Undo/Redo 검증
import { describe, it, expect } from 'vitest'
import { applyOps, invertOp } from '../src/sim/edits'
import { makeFlatWorld, refreshWorld, addWaterTile } from './helpers'
import { makeTree, makeRock } from '../src/sim/worldgen'
import { placeBuilding, canPlaceBuilding } from '../src/sim/buildings'
import { findPath } from '../src/sim/pathfinding'
import { treeAt } from '../src/sim/grid'

describe('편집 + Undo/Redo', () => {
  it('지형 올림 → Undo 시 원래 값 복원(비트 동일)', () => {
    const w = makeFlatWorld(24)
    refreshWorld(w)
    const i = 10 * w.size + 10
    const before = w.heights[i]
    const ops = [{ t: 'heights' as const, tiles: [] as Array<[number, number, number]> }]
    ops[0].tiles.push([i, before, before + 2.5])
    applyOps(w, ops)
    expect(w.heights[i]).toBeCloseTo(before + 2.5, 5)

    const inverse = ops.map(invertOp)
    applyOps(w, inverse)
    expect(w.heights[i]).toBe(before)
  })

  it('물 배치 → 차단 갱신 → 경로 차단 → Undo로 복구', () => {
    const w = makeFlatWorld(24)
    refreshWorld(w)
    const path0 = findPath(w, 4, 4, 16, 4)
    expect(path0).not.toBeNull()

    const tiles: Array<[number, number, number, number, number]> = []
    for (let z = 0; z < 24; z++) {
      const i = z * w.size + 10
      tiles.push([i, 0, 0, 1, 2.3])
    }
    const ops = [{ t: 'water' as const, tiles }]
    applyOps(w, ops)
    refreshWorld(w)
    const path1 = findPath(w, 4, 4, 16, 4)
    expect(path1).toBeNull() // 전체가 물로 막힘

    applyOps(w, ops.map(invertOp))
    refreshWorld(w)
    expect(findPath(w, 4, 4, 16, 4)).not.toBeNull()
  })

  it('해수면 아래로 파면 물이 차오르고, 올리면 물이 빠진다', () => {
    const w = makeFlatWorld(24)
    refreshWorld(w)
    const i = 12 * w.size + 12
    applyOps(w, [{ t: 'heights', tiles: [[i, 2.0, -1.5]] }])
    expect(w.water[i]).toBe(1)
    applyOps(w, [{ t: 'heights', tiles: [[i, -1.5, 2.0]] }])
    expect(w.water[i]).toBe(0)
  })

  it('나무 심기/제거가 배치 규칙과 차단에 반영된다', () => {
    const w = makeFlatWorld(24)
    refreshWorld(w)
    const t = makeTree(w, 6, 6)
    expect(canPlaceBuilding(w, 5, 5, 'house')).toBe(true)
    applyOps(w, [{ t: 'treeAdd', tree: t }])
    refreshWorld(w)
    expect(treeAt(w, 6, 6)).toBe(t)
    // 나무가 겹치면 건물 배치 불가 (6,6 타일 포함)
    expect(canPlaceBuilding(w, 6, 6, 'house')).toBe(false)
    applyOps(w, [{ t: 'treeRemove', tree: t }])
    refreshWorld(w)
    expect(canPlaceBuilding(w, 6, 6, 'house')).toBe(true)
  })

  it('건물 배치/삭제 토글과 바위 차단', () => {
    const w = makeFlatWorld(24)
    refreshWorld(w)
    const r = makeRock(w, 8, 8)
    applyOps(w, [{ t: 'rockAdd', rock: r }])
    refreshWorld(w)
    expect(canPlaceBuilding(w, 8, 8, 'house')).toBe(false)
    applyOps(w, [{ t: 'rockRemove', rock: r }])
    refreshWorld(w)
    expect(canPlaceBuilding(w, 8, 8, 'house')).toBe(true)

    const b = placeBuilding(w, 9, 9, 'farm', 'planned')
    applyOps(w, [{ t: 'buildingRemove', building: b }])
    // 3x3 농장 제거 후 인접 배치 가능
    expect(canPlaceBuilding(w, 9, 9, 'house')).toBe(true)
  })

  it('기존 물 타일은 배치 규칙에서 제외된다', () => {
    const w = makeFlatWorld(24)
    addWaterTile(w, 5, 5)
    refreshWorld(w)
    expect(canPlaceBuilding(w, 5, 5, 'house')).toBe(false)
    expect(canPlaceBuilding(w, 8, 5, 'house')).toBe(true)
  })
})
