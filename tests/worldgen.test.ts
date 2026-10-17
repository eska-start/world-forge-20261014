// [필수 검증] 같은 시드 → 동일 월드 / 다른 시드 → 다른 월드 + 지형 요소 존재
import { describe, it, expect } from 'vitest'
import { generateWorld } from '../src/sim/worldgen'
import { isWater, heightAt } from '../src/sim/grid'

describe('시드 기반 절차적 지형 생성', () => {
  it('같은 시드·설정은 비트 단위까지 동일한 높이맵을 재현한다', () => {
    const a = generateWorld(20261017, 120)
    const b = generateWorld(20261017, 120)
    expect(a.heights.length).toBe(b.heights.length)
    for (let i = 0; i < a.heights.length; i++) {
      expect(a.heights[i]).toBe(b.heights[i])
    }
    expect(a.trees.size).toBe(b.trees.size)
    const ta = [...a.trees.values()].map((t) => `${t.x},${t.z},${t.kind}`)
    const tb = [...b.trees.values()].map((t) => `${t.x},${t.z},${t.kind}`)
    expect(ta).toEqual(tb)
    expect(a.rocks.size).toBe(b.rocks.size)
    expect(a.village.x).toBe(b.village.x)
    expect(a.village.z).toBe(b.village.z)
  })

  it('다른 시드는 다른 월드를 만든다', () => {
    const a = generateWorld(1000, 120)
    const b = generateWorld(2000, 120)
    let diff = 0
    for (let i = 0; i < a.heights.length; i++) {
      if (a.heights[i] !== b.heights[i]) diff++
    }
    expect(diff).toBeGreaterThan(1000)
  })

  it('기본 월드는 물/육지/숲/바위/주민/건물을 포함한다', () => {
    const w = generateWorld(20261017, 160)
    let water = 0
    let land = 0
    let high = 0
    for (let i = 0; i < w.heights.length; i++) {
      if (w.water[i]) water++
      else land++
      if (w.heights[i] > 6) high++
    }
    expect(water).toBeGreaterThan(300) // 해안/강/호수
    expect(land).toBeGreaterThan(2000)
    expect(high).toBeGreaterThan(50) // 산/언덕
    expect(w.trees.size).toBeGreaterThan(250) // 숲
    expect(w.rocks.size).toBeGreaterThan(10)
    expect(w.villagers.length).toBe(10) // 기본 주민 10명
    expect(w.buildings.size).toBeGreaterThanOrEqual(4)
    // 마을 중심은 통행 가능해야 함
    const v = w.village
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        const x = Math.round(v.x) + dx
        const z = Math.round(v.z) + dz
        if (isWater(w, x, z)) throw new Error(`마을 중심(${x},${z})이 물 위에 있음`)
        expect(heightAt(w, x, z)).toBeGreaterThan(0.3)
      }
    }
  })

  it('호수/강 필터와 높이맵의 모든 값은 유한수다', () => {
    const w = generateWorld(777, 100)
    for (let i = 0; i < w.heights.length; i++) {
      expect(Number.isFinite(w.heights[i])).toBe(true)
    }
    for (let i = 0; i < w.water.length; i++) {
      if (w.water[i] === 1) {
        expect(Number.isFinite(w.waterLevel[i])).toBe(true)
      }
    }
  })
})
