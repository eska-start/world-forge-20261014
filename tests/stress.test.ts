// 부하/스케일 스모크 테스트 — 목표 규모(주민 150, 나무 2500, 건물 120+기존)에서 시뮬 안정성
import { describe, it, expect } from 'vitest'
import { generateWorld, makeTree, makeVillager } from '../src/sim/worldgen'
import { placeBuilding, canPlaceBuilding } from '../src/sim/buildings'
import { tick } from '../src/sim/sim'
import { refreshWorld } from './helpers'

describe('부하 테스트 (목표 규모 시뮬레이션)', () => {
  it('주민 150명·나무 2500그루·건물 120개에서 30초 시뮬레이션이 완료되고 실행 불가 상태가 없다', () => {
    const w = generateWorld(31415, 160)
    // 부하 프리셋: 건물 먼저(평지 선점) → 나무 → 주민
    // 건물 120
    let doneB = 0
    for (let tries = 0; tries < 40000 && doneB < 120; tries++) {
      const x = 3 + Math.floor(Math.random() * (w.size - 8))
      const z = 3 + Math.floor(Math.random() * (w.size - 8))
      if (canPlaceBuilding(w, x, z, 'house')) {
        placeBuilding(w, x, z, 'house', 'done')
        doneB++
      }
    }
    // 나무 2500 (절벽 허용 — 물/바위/건물/기존 나무만 배제)
    for (let tries = 0; tries < 80000 && w.trees.size < 2500; tries++) {
      const x = 2 + Math.floor(Math.random() * (w.size - 4))
      const z = 2 + Math.floor(Math.random() * (w.size - 4))
      const i = z * w.size + x
      if (w.water[i] || w.heights[i] < 0.45) continue
      if (w.blocked[i] & 6) continue // 물·건물 비트만 배제
      if (w.treeIndex.has(i)) continue
      if (w.buildingIndex.has(i) || w.rockIndex.has(i)) continue
      const t = makeTree(w, x, z)
      w.trees.set(t.id, t)
    }
    // 주민 150
    for (let tries = 0; tries < 8000 && w.villagers.length < 150; tries++) {
      const x = 4 + Math.floor(Math.random() * (w.size - 8))
      const z = 4 + Math.floor(Math.random() * (w.size - 8))
      if (w.heights[z * w.size + x] < 0.5 || w.water[z * w.size + x]) continue
      const v = makeVillager(w, x, z, '벌목꾼')
      w.villagers.push(v)
    }
    refreshWorld(w)

    expect(w.villagers.length).toBe(150)
    expect(w.trees.size).toBeGreaterThanOrEqual(2500)
    expect(w.buildings.size).toBeGreaterThanOrEqual(120)

    // JIT 워밍업 후 30초 시뮬레이션 (300틱)
    for (let i = 0; i < 20; i++) tick(w, 0.1)
    const t0 = performance.now()
    for (let i = 0; i < 300; i++) tick(w, 0.1)
    const elapsed = performance.now() - t0
    console.log(`부하 시뮬 300틱 소요: ${elapsed.toFixed(1)}ms (틱당 ${(elapsed / 300).toFixed(3)}ms)`)
    // 현실적인 상한: 틱당 8ms 이하 여야 60fps(16ms 프레임) 예산 내
    expect(elapsed / 300).toBeLessThan(8)
    // 모든 주민은 유효한 위치에 존재
    for (const v of w.villagers) {
      expect(Number.isFinite(v.x)).toBe(true)
      expect(Number.isFinite(v.z)).toBe(true)
    }
  })
})
