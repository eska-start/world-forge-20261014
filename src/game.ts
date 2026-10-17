// Game — 시뮬레이션·렌더러·편집·저장을 묶는 코디네이터
import type { WorldState, Villager, Building, BuildingType, Tree, Rock, Animal } from './sim/types'
import { generateWorld, makeTree, makeRock, makeVillager, makeAnimal } from './sim/worldgen'
import { tick, TICK_DT, weatherName, timeOfDayString } from './sim/sim'
import {
  applyOps,
  invertOp,
  type Edit,
  type EditOp,
  type DirtyFlags,
  EditBatch,
} from './sim/edits'
import { BUILDING_DEFS, canPlaceBuilding, placeBuilding, houseCapacity } from './sim/buildings'
import { treeAt, rockAt, buildingAt, freeLandNear, heightAt, inBounds, idx, isWater } from './sim/grid'
import { Renderer } from './render/renderer'
import { useUI } from './ui/store'
import { SimDriver } from './sim/driver'
import {
  serializeWorld,
  deserializeWorld,
  exportToJson,
  importFromJson,
  saveToIdb,
  loadFromIdb,
  clearIdb,
  type SaveData,
} from './sim/persistence'
import { JOBS } from './sim/worldgen'

export class Game {
  world: WorldState
  renderer: Renderer | null = null
  speed = 1
  undoStack: Edit[] = []
  redoStack: Edit[] = []
  hover: { x: number; z: number } | null = null
  selected: { kind: string; id: number } | null = null
  aiMs = 0
  simSteps = 0
  driver = new SimDriver()
  private autosaveIn = 20
  private uiPollIn = 0
  private brushTimer = 0
  private brushActive = false
  private brushLastTile: { x: number; z: number } | null = null
  private batch = new EditBatch()
  private sessionOps: EditOp[] = []
  private saving = false

  constructor(seed: number, size = 160) {
    this.world = generateWorld(seed, size)
  }

  attach(canvas: HTMLCanvasElement): void {
    this.renderer = new Renderer(canvas, {
      onClickTile: (t) => this.onClick(t),
      onBrush: (t) => this.onBrushDown(t),
      onBrushEnd: () => this.endBrush(),
      onHoverTile: (t) => {
        this.hover = t
      },
      getTool: () => {
        const s = useUI.getState()
        return {
          tool: s.tool,
          buildingType: s.buildingType,
          brushRadius: s.brushRadius,
          brushStrength: s.brushStrength,
        }
      },
      isSelected: (kind, id) => this.selected?.kind === kind && this.selected.id === id,
      selectedPath: () => {
        const ui = useUI.getState()
        if (!ui.showPath || !this.selected || this.selected.kind !== 'villager') return null
        const v = this.world.villagers.find((vv) => vv.id === this.selected?.id)
        if (!v || !v.action.path) return null
        return v.action.path.slice(v.action.pathIndex)
      },
    })
    this.renderer.focusVillage(this.world)
    this.renderer.rebuildAll(this.world)
    ;(window as unknown as { __WF: unknown }).__WF = this
  }

  // ---------------- 메인 업데이트 ----------------

  update(realDt: number): void {
    const t0 = performance.now()
    this.simSteps = this.driver.step(this.world, realDt, (w, dt) => tick(w, dt))
    this.aiMs = performance.now() - t0
    // 연속 브러시 적용
    if (this.brushActive && this.hover) {
      this.brushTimer -= realDt
      if (this.brushTimer <= 0) {
        this.brushTimer = 0.07
        this.applyBrushHeights(this.hover)
        this.applyBrushWater(this.hover)
      }
    }
    // 자동 저장
    this.autosaveIn -= realDt
    if (this.autosaveIn <= 0) {
      this.autosaveIn = 20
      void this.save(true)
    }
    // UI 풀링
    this.uiPollIn -= realDt
    if (this.uiPollIn <= 0) {
      this.uiPollIn = 0.25
      this.pollUi()
    }
    // 토스트
    const toasts = this.world.toasts
    if (toasts.length > 0) {
      const ui = useUI.getState()
      for (const t of toasts) ui.pushToast(t)
      toasts.length = 0
    }
    this.renderer?.updateOverlays(this.world, this.hover, this.selectedVillager())
    this.renderer?.frame(this.world, realDt)
  }

  private pollUi(): void {
    const w = this.world
    useUI.getState().setStats({
      pop: w.villagers.length,
      cap: houseCapacity(w),
      wood: Math.round(w.storage.wood),
      stone: Math.round(w.storage.stone),
      food: Math.round(w.storage.food),
      timeStr: timeOfDayString(w),
      weather: weatherName(w),
      trees: w.trees.size,
      buildings: [...w.buildings.values()].filter((b) => b.state === 'done').length,
      construction: [...w.buildings.values()].filter((b) => b.state !== 'done' && b.state !== 'ruined').length,
    })
    useUI.getState().setSelectedInfo(this.buildSelectedInfo())
    const mem = (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory
    useUI.getState().setPerf({
      fpsAvg: this.renderer?.fpsAvg ?? 0,
      fpsLow: this.renderer?.fpsLow ?? 0,
      aiMs: this.aiMs,
      drawCalls: this.renderer?.drawCalls ?? 0,
      simSteps: this.simSteps,
      villagers: w.villagers.length,
      trees: w.trees.size,
      buildings: w.buildings.size,
      memMB: mem ? Math.round(mem.usedJSHeapSize / 1048576) : 0,
    })
  }

  private buildSelectedInfo(): import('./ui/store').SelectedInfo | null {
    const sel = this.selected
    if (!sel) return null
    const w = this.world
    if (sel.kind === 'villager') {
      const v = w.villagers.find((vv) => vv.id === sel.id)
      if (!v) return null
      return {
        kind: 'villager',
        id: v.id,
        title: v.name,
        subtitle: `직업: ${v.job} · ID ${v.id}`,
        rows: [
          { k: '위치', v: `(${v.x.toFixed(1)}, ${v.z.toFixed(1)})` },
          { k: '인벤토리', v: `목재 ${v.inv.wood} · 석재 ${v.inv.stone} · 식량 ${v.inv.food}` },
          { k: '경로', v: v.action.path ? `${Math.max(0, v.action.path.length - v.action.pathIndex)}타일 남음` : '없음' },
        ],
        bars: [
          { k: '배고픔', v: v.hunger, color: '#e67e22' },
          { k: '피로', v: v.fatigue, color: '#8e44ad' },
          { k: '체력', v: v.health, color: '#2ecc71' },
        ],
        reason: v.action.reason,
        goal: v.action.goal,
        pathLen: v.action.path ? v.action.path.length - v.action.pathIndex : 0,
      }
    }
    if (sel.kind === 'tree') {
      const t = w.trees.get(sel.id)
      if (!t) return null
      return {
        kind: 'tree',
        id: t.id,
        title: `나무 #${t.id}`,
        subtitle: t.kind === 'pine' ? '침엽수' : t.kind === 'palm' ? '야자수' : '활엽수',
        rows: [
          { k: '위치', v: `(${t.x}, ${t.z})` },
          { k: '상태', v: t.burning ? '발화 중!' : t.growth < 1 ? '성장 중' : '성목' },
        ],
        bars: [{ k: '성장도', v: t.growth * 100, color: '#27ae60' }],
      }
    }
    if (sel.kind === 'rock') {
      const r = w.rocks.get(sel.id)
      if (!r) return null
      return {
        kind: 'rock',
        id: r.id,
        title: `바위 #${r.id}`,
        subtitle: '채석 가능',
        rows: [{ k: '위치', v: `(${r.x}, ${r.z})` }],
        bars: [{ k: '잔량', v: (r.amount / r.maxAmount) * 100, color: '#95a5a6' }],
      }
    }
    if (sel.kind === 'building') {
      const b = w.buildings.get(sel.id)
      if (!b) return null
      const def = BUILDING_DEFS[b.type]
      const rows: Array<{ k: string; v: string }> = [
        { k: '종류', v: def.name },
        { k: '위치', v: `(${b.x}, ${b.z}) · ${b.w}x${b.h}` },
      ]
      if (b.state === 'done') {
        if (b.type === 'farm') rows.push({ k: '작물', v: `${Math.round(b.crops * 100)}% 성장` })
        if (b.type === 'house') rows.push({ k: '기능', v: '주거 +4 · 휴식처' })
        if (b.type === 'warehouse') rows.push({ k: '기능', v: '자원 반입처' })
        if (b.type === 'lumberyard') rows.push({ k: '기능', v: '목재 반입·벌목 +50%' })
        if (b.type === 'quarry') rows.push({ k: '기능', v: '석재 반입·채굴 +50%' })
      } else if (b.state === 'ruined') {
        rows.push({ k: '상태', v: '전소 폐허' })
      } else {
        rows.push({ k: '건설', v: `${Math.round(b.progress * 100)}% · 자재 목재${b.stored.wood}/석재${b.stored.stone}` })
        rows.push({ k: '필요', v: `목재 ${def.cost.wood} · 석재 ${def.cost.stone}` })
      }
      return {
        kind: 'building',
        id: b.id,
        title: def.name,
        subtitle: b.state === 'done' ? '완공' : b.state === 'ruined' ? '폐허' : '건설 중',
        rows,
        bars: b.state !== 'done' && b.state !== 'ruined' ? [{ k: '진행도', v: b.progress * 100, color: '#f39c12' }] : [],
      }
    }
    if (sel.kind === 'animal') {
      const a = w.animals.find((aa) => aa.id === sel.id)
      if (!a) return null
      return {
        kind: 'animal',
        id: a.id,
        title: a.kind === 'deer' ? '사슴' : '토끼',
        subtitle: `ID ${a.id}`,
        rows: [{ k: '위치', v: `(${a.x.toFixed(1)}, ${a.z.toFixed(1)})` }],
        bars: [],
      }
    }
    return null
  }

  selectedVillager(): Villager | null {
    if (!this.selected || this.selected.kind !== 'villager') return null
    return this.world.villagers.find((v) => v.id === this.selected?.id) ?? null
  }

  // ---------------- 클릭/브러시 ----------------

  private onClick(t: { x: number; z: number }): void {
    const ui = useUI.getState()
    const tool = ui.tool
    if (!inBounds(this.world, t.x, t.z)) return
    if (tool === 'select') {
      const e = this.renderer?.findEntityAt(this.world, t)
      this.selected = e ?? null
      useUI.getState().select(e?.kind ?? null, e?.id ?? null)
      return
    }
    if (tool === 'placeBuilding') {
      if (canPlaceBuilding(this.world, t.x, t.z, ui.buildingType)) {
        const b = placeBuilding(this.world, t.x, t.z, ui.buildingType, 'planned')
        const op: EditOp = { t: 'buildingAdd', building: b }
        this.commit([op])
        useUI.getState().pushToast(`건설 시작: ${BUILDING_DEFS[ui.buildingType].name} (자재 필요)`)
        this.renderer?.syncWorldObjects(this.world)
      } else {
        useUI.getState().pushToast('배치 불가: 물/경사/장애물/겹침 확인')
      }
      return
    }
    if (tool === 'spawnVillager') {
      const spot = freeLandNear(this.world, t.x, t.z, 5)
      if (spot) {
        const v = makeVillager(this.world, spot.x, spot.z, JOBS[this.world.villagers.length % JOBS.length])
        this.commit([{ t: 'villagerAdd', villager: v }])
        useUI.getState().pushToast(`주민 생성: ${v.name} (${v.job})`)
        this.renderer?.syncWorldObjects(this.world)
      }
      return
    }
    if (tool === 'spawnAnimal') {
      const spot = freeLandNear(this.world, t.x, t.z, 5)
      if (spot) {
        const a = makeAnimal(this.world, spot.x, spot.z)
        this.commit([{ t: 'animalAdd', animal: a }])
        this.renderer?.syncWorldObjects(this.world)
      }
      return
    }
    if (tool === 'delete') {
      const e = this.renderer?.findEntityAt(this.world, t)
      if (!e) return
      const op = this.removeOpFor(e.kind, e.id)
      if (op) {
        this.commit([op])
        this.selected = null
        useUI.getState().select(null, null)
        this.renderer?.syncWorldObjects(this.world)
      }
    }
  }

  private removeOpFor(kind: string, id: number): EditOp | null {
    const w = this.world
    if (kind === 'villager') {
      const v = w.villagers.find((vv) => vv.id === id)
      return v ? { t: 'villagerRemove', villager: v } : null
    }
    if (kind === 'animal') {
      const a = w.animals.find((aa) => aa.id === id)
      return a ? { t: 'animalRemove', animal: a } : null
    }
    if (kind === 'building') {
      const b = w.buildings.get(id)
      return b ? { t: 'buildingRemove', building: b } : null
    }
    if (kind === 'tree') {
      const t = w.trees.get(id)
      return t ? { t: 'treeRemove', tree: t } : null
    }
    if (kind === 'rock') {
      const r = w.rocks.get(id)
      return r ? { t: 'rockRemove', rock: r } : null
    }
    return null
  }

  private onBrushDown(t: { x: number; z: number }): void {
    const ui = useUI.getState()
    this.brushActive = true
    this.brushTimer = 0
    if (this.brushLastTile?.x !== t.x || this.brushLastTile?.z !== t.z) {
      this.brushLastTile = { ...t }
      // 타일 진입 시 즉시 1회 적용 도구
      if (ui.tool === 'plantTree') this.applyTreeBrush(t, true)
      else if (ui.tool === 'removeTree') this.applyTreeBrush(t, false)
    }
    if (['raise', 'lower', 'flatten', 'placeWater', 'removeWater'].includes(ui.tool)) {
      this.applyBrushHeights(t)
      this.applyBrushWater(t)
    }
  }

  private applyBrushHeights(t: { x: number; z: number }): void {
    const ui = useUI.getState()
    const tool = ui.tool
    if (!['raise', 'lower', 'flatten'].includes(tool)) return
    const w = this.world
    const r = ui.brushRadius
    const strength = ui.brushStrength
    const baseH = heightAt(w, t.x, t.z)
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = t.x + dx
        const z = t.z + dz
        if (!inBounds(w, x, z)) continue
        const d = Math.hypot(dx, dz)
        if (d > r) continue
        const falloff = Math.pow(1 - d / (r + 0.001), 1.4)
        const i = idx(w, x, z)
        const cur = w.heights[i]
        let target = cur
        if (tool === 'raise') target = cur + strength * 0.55 * falloff
        else if (tool === 'lower') target = cur - strength * 0.55 * falloff
        else target = cur + (baseH - cur) * Math.min(1, strength * 1.2 * falloff)
        target = Math.max(-4, Math.min(18, target))
        this.batch.setHeight(w, x, z, target)
      }
    }
    const ops = this.batch.toOps(w)
    if (ops.length > 0) {
      const dirty = applyOps(w, ops)
      this.syncDirty(dirty)
    }
  }

  private applyBrushWater(t: { x: number; z: number }): void {
    const ui = useUI.getState()
    const tool = ui.tool
    if (!['placeWater', 'removeWater'].includes(tool)) return
    const w = this.world
    const r = ui.brushRadius
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = t.x + dx
        const z = t.z + dz
        if (!inBounds(w, x, z)) continue
        if (Math.hypot(dx, dz) > r) continue
        if (tool === 'placeWater') {
          const h = heightAt(w, x, z)
          const level = Math.max(h, 0) + 0.32
          if (!isWater(w, x, z) || w.waterLevel[idx(w, x, z)] !== level) {
            this.batch.setWater(w, x, z, 1, level)
          }
        } else {
          if (isWater(w, x, z)) this.batch.setWater(w, x, z, 0, 0)
        }
      }
    }
    const ops = this.batch.toOps(w)
    if (ops.length > 0) {
      const dirty = applyOps(w, ops)
      this.syncDirty(dirty)
    }
  }

  private applyTreeBrush(t: { x: number; z: number }, plant: boolean): void {
    const ui = useUI.getState()
    const w = this.world
    const r = Math.max(1, Math.min(3, ui.brushRadius / 2))
    const ops: EditOp[] = []
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = t.x + dx
        const z = t.z + dz
        if (!inBounds(w, x, z)) continue
        if (Math.hypot(dx, dz) > r) continue
        if (plant) {
          const h = heightAt(w, x, z)
          if (h < 0.45 || isWater(w, x, z) || treeAt(w, x, z) || rockAt(w, x, z) || buildingAt(w, x, z)) continue
          if (Math.random() < 0.5) continue
          const tree = makeTree(w, x, z)
          ops.push({ t: 'treeAdd', tree })
        } else {
          const tree = treeAt(w, x, z)
          if (tree) ops.push({ t: 'treeRemove', tree })
        }
      }
    }
    if (ops.length > 0) {
      const dirty = applyOps(w, ops)
      this.sessionOps.push(...ops)
      this.syncDirty(dirty)
    }
  }

  endBrush(): void {
    if (!this.brushActive) return
    this.brushActive = false
    this.brushLastTile = null
    if (!this.batch.isEmpty()) {
      const ops = this.batch.toOps(this.world)
      this.undoStack.push(ops)
      this.redoStack = []
      this.batch.reset()
    }
    if (this.sessionOps.length > 0) {
      this.undoStack.push(this.sessionOps.slice())
      this.redoStack = []
      this.sessionOps = []
    }
    if (this.undoStack.length > 60) this.undoStack.shift()
    useUI.getState().pushToast('편집 완료 (Ctrl+Z 되돌리기 가능)')
  }

  private commit(ops: EditOp[]): void {
    this.undoStack.push(ops)
    this.redoStack = []
    if (this.undoStack.length > 60) this.undoStack.shift()
  }

  undo(): void {
    const ops = this.undoStack.pop()
    if (!ops) return
    const dirty = applyOps(this.world, ops, true)
    this.syncDirty(dirty)
    this.redoStack.push(ops)
    useUI.getState().pushToast('되돌리기')
  }

  redo(): void {
    const ops = this.redoStack.pop()
    if (!ops) return
    const dirty = applyOps(this.world, ops, false)
    this.syncDirty(dirty)
    this.undoStack.push(ops)
    useUI.getState().pushToast('다시 실행')
  }

  private syncDirty(dirty: DirtyFlags): void {
    if (!this.renderer) return
    if (dirty.terrain) this.renderer.rebuildChunks(this.world, [...dirty.chunks])
    if (dirty.terrain || dirty.trees || dirty.rocks || dirty.buildings) {
      this.renderer.syncWorldObjects(this.world)
    }
  }

  // ---------------- 저장/로드 ----------------

  async save(silent: boolean): Promise<void> {
    if (this.saving) return
    this.saving = true
    try {
      const data = serializeWorld(this.world)
      await saveToIdb(data)
      useUI.getState().setSaveStatus(`저장 완료 ${timeOfDayString(this.world)}`)
      if (!silent) useUI.getState().pushToast('월드를 저장했습니다')
    } catch (e) {
      useUI.getState().setSaveStatus(`저장 실패: ${String(e)}`)
    } finally {
      this.saving = false
    }
  }

  async load(): Promise<boolean> {
    try {
      const data = await loadFromIdb()
      if (!data) {
        useUI.getState().pushToast('저장된 월드가 없습니다')
        return false
      }
      this.replaceWorld(deserializeWorld(data))
      useUI.getState().pushToast('월드를 불러왔습니다')
      return true
    } catch (e) {
      useUI.getState().pushToast(`불러오기 실패: ${String(e)}`)
      return false
    }
  }

  async resetWorld(): Promise<void> {
    const seed = this.world.seed
    await clearIdb().catch(() => undefined)
    this.replaceWorld(generateWorld(seed, this.world.size))
    useUI.getState().pushToast('월드 초기화 (시드 유지)')
  }

  newWorld(seed: number): void {
    this.replaceWorld(generateWorld(seed, this.world.size))
    useUI.getState().pushToast(`새 월드 생성 (시드 ${seed})`)
  }

  private replaceWorld(w: WorldState): void {
    this.world = w
    this.undoStack = []
    this.redoStack = []
    this.selected = null
    useUI.getState().select(null, null)
    this.batch.reset()
    this.sessionOps = []
    this.renderer?.rebuildAll(w)
    this.renderer?.focusVillage(w)
  }

  exportFile(): void {
    const json = exportToJson(this.world)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `world-forge-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
    useUI.getState().pushToast('JSON 내보내기 완료')
  }

  async importFile(file: File): Promise<void> {
    try {
      const text = await file.text()
      const w = importFromJson(text)
      this.replaceWorld(w)
      useUI.getState().pushToast('JSON 가져오기 완료')
    } catch (e) {
      useUI.getState().pushToast(`가져오기 실패: ${String(e)}`)
    }
  }

  // ---------------- 부하 테스트 ----------------

  spawnLoadTest(villagerTarget = 150, treeTarget = 2500, buildingTarget = 120): void {
    const w = this.world
    const size = w.size
    // 건물 먼저(평지 선점) → 나무 → 주민 순서로 배치해야 목표치 달성 가능
    let tries = 0
    let done = [...w.buildings.values()].filter((b) => b.state === 'done').length
    while (done < buildingTarget && tries < 30000) {
      tries++
      const x = 3 + Math.floor(Math.random() * (size - 8))
      const z = 3 + Math.floor(Math.random() * (size - 8))
      if (canPlaceBuilding(w, x, z, 'house')) {
        placeBuilding(w, x, z, 'house', 'done')
        done++
      }
    }
    tries = 0
    while (w.trees.size < treeTarget && tries < 200000) {
      tries++
      const x = 2 + Math.floor(Math.random() * (size - 4))
      const z = 2 + Math.floor(Math.random() * (size - 4))
      const i = idx(w, x, z)
      if (w.water[i] === 1 || heightAt(w, x, z) < 0.45) continue
      if ((w.blocked[i] & 6) !== 0) continue // 물·건물 비트 배제(절벽은 허용)
      if (treeAt(w, x, z) || rockAt(w, x, z) || buildingAt(w, x, z)) continue
      const t = makeTree(w, x, z)
      w.trees.set(t.id, t)
    }
    tries = 0
    while (w.villagers.length < villagerTarget && tries < 8000) {
      tries++
      const x = 4 + Math.floor(Math.random() * (size - 8))
      const z = 4 + Math.floor(Math.random() * (size - 8))
      if (w.blocked[idx(w, x, z)] !== 0) continue
      if (heightAt(w, x, z) < 0.5 || treeAt(w, x, z) || rockAt(w, x, z) || buildingAt(w, x, z)) continue
      const v = makeVillager(w, x, z, JOBS[w.villagers.length % JOBS.length])
      w.villagers.push(v)
    }
    this.renderer?.syncWorldObjects(w)
    useUI.getState().setLoadTestNote(`부하 테스트: 주민 ${w.villagers.length} · 나무 ${w.trees.size} · 건물 ${done}`)
    useUI.getState().pushToast('부하 테스트 오브젝트 생성 완료')
  }

  // 테스트 훅용
  setSpeed(s: number): void {
    this.speed = s
    this.driver.speed = s
    useUI.getState().setSpeed(s)
  }
}
