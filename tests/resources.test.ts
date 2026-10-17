// [필수 검증] 실제 자원 채집 → 운반 → 창고 반영 → 건설 자원 소비 → 완공/효과
import { describe, it, expect } from 'vitest'
import type { WorldState } from '../src/sim/types'
import { tick } from '../src/sim/sim'
import { evaluate, updateVillager } from '../src/sim/ai'
import { placeBuilding, houseCapacity, BUILDING_DEFS } from '../src/sim/buildings'
import { makeTree } from '../src/sim/worldgen'
import { refreshWorld, makeFlatWorld, addTestVillager } from './helpers'

function run(w: WorldState, seconds: number): void {
  const dt = 0.1
  const n = Math.round(seconds / dt)
  for (let i = 0; i < n; i++) tick(w, dt)
}

describe('자원 흐름 통합', () => {
  it('나무 벌목 → 인벤토리 → 창고 반입으로 storage.wood가 증가한다', () => {
    const w = makeFlatWorld(48)
    // 창고 (마을 역할) + 나무 5그루
    placeBuilding(w, 24, 23, 'warehouse', 'done')
    for (let i = 0; i < 5; i++) {
      const t = makeTree(w, 10 + i, 24)
      w.trees.set(t.id, t)
    }
    const v = addTestVillager(w, 12, 24)
    refreshWorld(w)

    const before = w.storage.wood
    run(w, 90)

    expect(w.stats.gatheredWood).toBeGreaterThan(0)
    expect(w.storage.wood).toBeGreaterThan(before)
    expect(v.inv.wood + w.storage.wood).toBeGreaterThanOrEqual(3)
  })

  it('석재 채굴 → 창고 반입이 동작한다', () => {
    const w = makeFlatWorld(48)
    placeBuilding(w, 24, 23, 'warehouse', 'done')
    w.rocks.set(w.nextId, { id: w.nextId++, x: 10, z: 24, amount: 20, maxAmount: 20 })
    w.rocks.set(w.nextId + 100, { id: w.nextId++, x: 11, z: 24, amount: 20, maxAmount: 20 })
    addTestVillager(w, 12, 24)
    refreshWorld(w)

    run(w, 100)
    expect(w.stats.gatheredStone).toBeGreaterThan(0)
    expect(w.storage.stone).toBeGreaterThan(0)
  })

  it('집 건설: 자재 운반 → 진행도 → 완공 → 주거 용량 증가', () => {
    const w = makeFlatWorld(48)
    const wh = placeBuilding(w, 24, 23, 'warehouse', 'done')
    addTestVillager(w, 26, 24) // 운반+건설 주민
    addTestVillager(w, 25, 26)
    refreshWorld(w)

    const site = placeBuilding(w, 18, 18, 'house', 'planned')
    const capBefore = houseCapacity(w)
    w.storage.wood = BUILDING_DEFS.house.cost.wood + 4 // 자재 있음
    refreshWorld(w)

    run(w, 140) // 운반 2회 왕복 + 건설 8초 여유

    expect(site.state).toBe('done')
    expect(site.progress).toBe(1)
    expect(w.stats.built).toBeGreaterThanOrEqual(1)
    expect(houseCapacity(w)).toBe(capBefore + 4)
    void wh
    // 실제 자재 소모 확인: 창고에 있던 목재가 소진(현장 반입 후 사용)됐어야 함
    expect(w.storage.wood).toBeLessThan(BUILDING_DEFS.house.cost.wood + 4)
  })

  it('[필수 검증] 자재 부족 → 건설 중단 → 자재 확보 후 재개', () => {
    const w = makeFlatWorld(48)
    placeBuilding(w, 24, 23, 'warehouse', 'done')
    addTestVillager(w, 26, 24)
    // 나무 없음 → 자재를 스스로 조달할 방법이 없음 (건설 중단 상태)
    refreshWorld(w)

    const site = placeBuilding(w, 18, 18, 'house', 'planned')
    w.storage.wood = 0
    refreshWorld(w)

    run(w, 40)
    // 자재 없음 → 현장 진행 없음 (중단 상태)
    expect(site.stored.wood).toBe(0)
    expect(site.state).toBe('planned')

    // 자재 확보 → 재개
    w.storage.wood = 30
    refreshWorld(w)
    run(w, 140)
    expect(site.state).toBe('done')
  })

  it('농작물 성장 → 수확 → 창고 식량 반영 → 섭취 시 storage.food 감소', () => {
    const w = makeFlatWorld(48)
    const farm = placeBuilding(w, 18, 18, 'farm', 'done')
    farm.crops = 0.98
    const wh = placeBuilding(w, 24, 23, 'warehouse', 'done')
    const v = addTestVillager(w, 27, 24)
    refreshWorld(w)
    w.storage.food = 20 // 수확 임계치(50) 이하로 시작

    const food0 = w.storage.food
    run(w, 30) // 수확+운반
    expect(w.storage.food).toBeGreaterThan(food0 + 3)
    expect(w.stats.gatheredFood).toBeGreaterThan(0)

    // 식량 섭취: 배고픔 유발
    v.hunger = 80
    const food1 = w.storage.food
    run(w, 12)
    expect(v.hunger).toBeLessThan(60)
    expect(w.storage.food).toBeLessThan(food1 + 1) // 섭취로 소모
    void farm
  })

  it('배고픔 지속 시 체력이 감소하고, 식량 확보 시 행동이 바뀐다', () => {
    const w = makeFlatWorld(48)
    placeBuilding(w, 24, 23, 'warehouse', 'done')
    // 멀리 나무 1그루 (채집 대상)
    const t = makeTree(w, 15, 24)
    w.trees.set(t.id, t)
    const v = addTestVillager(w, 27, 24)
    v.hunger = 95
    w.storage.food = 10
    refreshWorld(w)

    evaluate(v, w)
    expect(v.action.kind).toBe('eat')
    const dt = 0.1
    for (let i = 0; i < 120; i++) tick(w, dt) // 12초
    // 제때 섭취하여 체력 유지 + 배고픔 완화
    expect(v.hunger).toBeLessThan(65)
    expect(v.health).toBeGreaterThan(95)

    // 공복 90+ 유지 시 체력 감소 (행동을 강제로 유지시킨 미시 테스트)
    const w2 = makeFlatWorld(20)
    const v2 = addTestVillager(w2, 10, 10)
    v2.hunger = 95
    v2.thinkIn = 999 // 재평가 억제
    v2.action.workLeft = 999
    const BUDGET = { left: 99 }
    for (let i = 0; i < 30; i++) updateVillager(v2, w2, 0.1, BUDGET) // 3초 경과
    expect(v2.health).toBeLessThan(100)
  })
})
