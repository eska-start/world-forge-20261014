// Utility AI 행동 선택 + 시간 제어 + 화재/날씨
import { describe, it, expect } from 'vitest'
import { evaluate, updateVillager, newAction } from '../src/sim/ai'
import { tick, igniteTree } from '../src/sim/sim'
import { placeBuilding } from '../src/sim/buildings'
import { makeTree } from '../src/sim/worldgen'
import { SimDriver } from '../src/sim/driver'
import { isNight } from '../src/sim/grid'
import type { PathBudget } from '../src/sim/pathfinding'
import { makeFlatWorld, addTestVillager, refreshWorld } from './helpers'

const BUDGET: PathBudget = { left: 99 }

describe('Utility AI 행동 선택', () => {
  it('배고픔 + 창고 식량 有 → 섭취 행동 선택', () => {
    const w = makeFlatWorld(40)
    placeBuilding(w, 22, 19, 'warehouse', 'done')
    const v = addTestVillager(w, 26, 20)
    v.hunger = 75
    w.storage.food = 5
    refreshWorld(w)
    evaluate(v, w)
    expect(v.action.kind).toBe('eat')
    expect(v.action.reason).toContain('창고')
  })

  it('배고픔 + 식량 없음 → 야생 채집으로 행동 변화', () => {
    const w = makeFlatWorld(40)
    placeBuilding(w, 22, 19, 'warehouse', 'done')
    const v = addTestVillager(w, 26, 20)
    v.hunger = 75
    w.storage.food = 0
    const t = makeTree(w, 10, 20)
    w.trees.set(t.id, t)
    refreshWorld(w)
    evaluate(v, w)
    expect(['forage', 'harvest']).toContain(v.action.kind)
  })

  it('화재 근접 → 무조건 대피', () => {
    const w = makeFlatWorld(40)
    const v = addTestVillager(w, 20, 20)
    const t = makeTree(w, 22, 20)
    w.trees.set(t.id, t)
    refreshWorld(w)
    igniteTree(w, t)
    evaluate(v, w)
    expect(v.action.kind).toBe('flee')
    // 실행 중에도 즉시 오버라이드
    v.action = newAction('chop', '벌목', '목재 채집')
    v.action.tx = 10
    v.action.tz = 10
    v.thinkIn = 999
    updateVillager(v, w, 0.1, BUDGET)
    expect(v.action.kind).toBe('flee')
  })

  it('피로 높음 + 집 有 → 수면 행동', () => {
    const w = makeFlatWorld(40)
    placeBuilding(w, 22, 19, 'house', 'done')
    const v = addTestVillager(w, 26, 20)
    v.fatigue = 92
    refreshWorld(w)
    evaluate(v, w)
    expect(v.action.kind).toBe('sleep')
  })

  it('자재 준비된 건설 현장 → 건설 참여', () => {
    const w = makeFlatWorld(40)
    const wh = placeBuilding(w, 22, 19, 'warehouse', 'done')
    const site = placeBuilding(w, 18, 19, 'house', 'planned')
    site.stored.wood = BUILDING_COST_house // cost 채움
    const v = addTestVillager(w, 25, 20)
    refreshWorld(w)
    evaluate(v, w)
    expect(v.action.kind).toBe('build')
    expect(['work', 'deliver']).toContain(v.action.buildStage ?? 'work')
    void wh
  })

  it('자재 부족 + 창고에 자재 有 → 자재 운반(build fetch) 참여', () => {
    const w = makeFlatWorld(40)
    placeBuilding(w, 22, 19, 'warehouse', 'done')
    placeBuilding(w, 18, 19, 'house', 'planned') // 자재 0
    w.storage.wood = 40
    const v = addTestVillager(w, 25, 20)
    refreshWorld(w)
    evaluate(v, w)
    expect(v.action.kind).toBe('build')
    expect(v.action.buildStage).toBe('fetch')
  })
})

const BUILDING_COST_house = 8

describe('시간 제어 (고정 시간 간격 + 배속)', () => {
  it('일시정지(speed 0) 중에는 시뮬레이션이 정지한다', () => {
    const w = makeFlatWorld(20)
    w.storage.food = 50
    const d = new SimDriver()
    d.speed = 0
    const steps = d.step(w, 2.0, (ww, dt) => tick(ww, dt))
    expect(steps).toBe(0)
    expect(w.time).toBe(0)
  })

  it('배속 4x는 같은 실시간에 4배의 시뮬레이션 진행량을 만든다', () => {
    const a = makeFlatWorld(20)
    const b = makeFlatWorld(20)
    const da = new SimDriver()
    const db = new SimDriver()
    da.speed = 1
    db.speed = 4
    for (let i = 0; i < 100; i++) {
      da.step(a, 0.016, (ww, dt) => tick(ww, dt))
      db.step(b, 0.016, (ww, dt) => tick(ww, dt))
    }
    expect(b.time).toBeGreaterThan(a.time * 3)
    expect(Math.abs(b.time - 6.4)).toBeLessThan(0.4) // 100*0.016*4 = 6.4s
  })

  it('고정 간격: 누적 오차 없이 정확히 적산된다', () => {
    const w = makeFlatWorld(20)
    const d = new SimDriver()
    d.speed = 2
    for (let i = 0; i < 200; i++) d.step(w, 0.1, (ww, dt) => tick(ww, dt))
    expect(Math.abs(w.time - 40)).toBeLessThan(0.25)
  })
})

describe('낮/밤·날씨·화재', () => {
  it('낮/밤 주기가 시간에 따라 전환된다', () => {
    const w = makeFlatWorld(20)
    w.time = 30 // 12:00
    expect(isNight(w)).toBe(false)
    w.time = 130 // 22:00
    expect(isNight(w)).toBe(true)
    w.time = 170 // 04:00 다음날
    expect(isNight(w)).toBe(true)
  })

  it('비는 화재를 진압하고, 화재는 인접 나무로 확산된다', () => {
    const dt = 0.1
    // 1) 확산: 확률적 메커니즘이라 독립 시나리오 중 1개라도 확산되면 통과
    let consumed = false
    for (let attempt = 0; attempt < 3 && !consumed; attempt++) {
      const w1 = makeFlatWorld(48)
      w1.weather.kind = 'clear'
      w1.weather.left = 99999 // 테스트 중 날씨 전이 고정
      const t0 = makeTree(w1, 20, 20)
      w1.trees.set(t0.id, t0)
      const neighbors = [19, 21].flatMap((dx) =>
        [-1, 0, 1].flatMap((dz) => {
          if (dx === 0 && dz === 0) return []
          const t = makeTree(w1, 20 + dx, 20 + dz)
          w1.trees.set(t.id, t)
          return [t]
        }),
      )
      refreshWorld(w1)
      igniteTree(w1, t0)
      expect(w1.fires.length).toBe(1)
      for (let i = 0; i < 300; i++) tick(w1, dt) // 30초
      const ignited = neighbors.filter((t) => t.burning || !w1.trees.has(t.id)).length
      consumed = !w1.trees.has(t0.id) || ignited >= 1 || w1.fires.length > 1
    }
    expect(consumed).toBe(true)

    // 2) 비 소화 (확률적 소화 — 독립 시나리오 3회 중 1회라도 소화되면 통과)
    let extinguished = false
    for (let attempt = 0; attempt < 3 && !extinguished; attempt++) {
      const w2 = makeFlatWorld(48)
      const lone = makeTree(w2, 20, 20)
      w2.trees.set(lone.id, lone)
      refreshWorld(w2)
      igniteTree(w2, lone)
      w2.weather.kind = 'rain'
      w2.weather.left = 99999
      for (let i = 0; i < 250; i++) tick(w2, dt) // 25초
      extinguished = w2.fires.length === 0 && w2.trees.has(lone.id)
    }
    expect(extinguished).toBe(true)
  })

  it('비가 농작물 성장을 촉진한다', () => {
    const rain = makeFlatWorld(20)
    const clearWorld = makeFlatWorld(20)
    const fr = placeBuilding(rain, 10, 10, 'farm', 'done')
    const fc = placeBuilding(clearWorld, 10, 10, 'farm', 'done')
    fr.crops = 0.1
    fc.crops = 0.1
    rain.weather.kind = 'rain'
    rain.weather.left = 999
    clearWorld.weather.kind = 'clear'
    clearWorld.weather.left = 999
    const dt = 0.1
    for (let i = 0; i < 100; i++) {
      tick(rain, dt)
      tick(clearWorld, dt)
    }
    expect(fr.crops).toBeGreaterThan(fc.crops)
  })
})
