// [필수 검증] 저장 → 직렬화 → 로드 뒤 동일 핵심 상태 + IndexedDB round-trip + JSON 내보내기/가져오기
import { describe, it, expect, beforeAll } from 'vitest'
import 'fake-indexeddb/auto'
import { generateWorld, makeTree } from '../src/sim/worldgen'
import { serializeWorld, deserializeWorld, exportToJson, importFromJson, saveToIdb, loadFromIdb, clearIdb } from '../src/sim/persistence'
import { applyOps } from '../src/sim/edits'
import { placeBuilding } from '../src/sim/buildings'
import { refreshWorld } from './helpers'

beforeAll(async () => {
  await clearIdb().catch(() => undefined)
})

describe('직렬화/역직렬화', () => {
  it('편집된 월드를 저장→로드하면 핵심 상태가 동일하다', () => {
    const w = generateWorld(4242, 80)
    // 편집 몇 개 적용: 지형 올리기 + 건물 + 나무 제거
    const i = 20 * w.size + 20
    applyOps(w, [{ t: 'heights', tiles: [[i, w.heights[i], 9.5]] }])
    placeBuilding(w, 30, 30, 'lumberyard', 'planned')
    const t = [...w.trees.values()][0]
    applyOps(w, [{ t: 'treeRemove', tree: t }])
    w.storage.wood = 123.5
    w.storage.food = 55
    w.time = 654.3
    refreshWorld(w)

    const data = serializeWorld(w)
    const json = JSON.stringify(data)
    const restored = deserializeWorld(JSON.parse(json) as ReturnType<typeof serializeWorld>)

    expect(restored.seed).toBe(w.seed)
    expect(restored.time).toBeCloseTo(w.time, 5)
    expect(restored.storage).toEqual(w.storage)
    expect(restored.trees.size).toBe(w.trees.size)
    expect(restored.buildings.size).toBe(w.buildings.size)
    expect(restored.villagers.length).toBe(w.villagers.length)
    for (let k = 0; k < w.villagers.length; k++) {
      expect(restored.villagers[k].name).toBe(w.villagers[k].name)
      expect(restored.villagers[k].job).toBe(w.villagers[k].job)
    }
    // 편집된 높이 보존
    expect(restored.heights[20 * restored.size + 20]).toBeCloseTo(9.5, 3)
    // 통행 불가 그리드 재구성 (물/건물 차단)
    const b = [...restored.buildings.values()].find((bb) => bb.type === 'lumberyard' && bb.state === 'planned')
    expect(b).toBeDefined()
    if (b) {
      expect(restored.blocked[b.z * restored.size + b.x]).toBe(2) // BLOCK_BUILDING
    }
    // 편집 전 나무 제거 보존
    expect(restored.trees.has(t.id)).toBe(false)
  })

  it('JSON 내보내기 → 가져오기 round-trip', () => {
    const w = generateWorld(555, 60)
    const t = makeTree(w, 30, 30)
    w.trees.set(t.id, t)
    w.stats.built = 7
    const json = exportToJson(w)
    const w2 = importFromJson(json)
    expect(w2.stats.built).toBe(7)
    expect(w2.trees.size).toBe(w.trees.size)
    expect(w2.seed).toBe(555)
  })

  it('IndexedDB 저장 → 로드 → 동일 상태', async () => {
    const w = generateWorld(9090, 60)
    w.storage.stone = 77
    const data = serializeWorld(w)
    await saveToIdb(data)
    const loaded = await loadFromIdb()
    expect(loaded).not.toBeNull()
    const w2 = deserializeWorld(loaded as NonNullable<typeof loaded>)
    expect(w2.storage.stone).toBe(77)
    expect(w2.seed).toBe(9090)
    expect(w2.villagers.length).toBe(w.villagers.length)
  })

  it('잘못된 버전 데이터는 지정된 에러로 거부된다', () => {
    const w = generateWorld(1, 40)
    const data = serializeWorld(w)
    const broken = JSON.parse(JSON.stringify(data))
    broken.v = 999
    expect(() => deserializeWorld(broken)).toThrow(/지원하지 않는 저장 버전/)
  })
})
