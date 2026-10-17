// UI 전역 상태 (zustand) — 시뮬레이션 월드는 Game 인스턴스가 소유하고 UI는 스냅샷만 구독
import { create } from 'zustand'
import type { BuildingType } from '../sim/types'

export type ToolKind =
  | 'select'
  | 'raise'
  | 'lower'
  | 'flatten'
  | 'placeWater'
  | 'removeWater'
  | 'plantTree'
  | 'removeTree'
  | 'placeBuilding'
  | 'spawnVillager'
  | 'spawnAnimal'
  | 'delete'

export interface StatsSnapshot {
  pop: number
  cap: number
  wood: number
  stone: number
  food: number
  timeStr: string
  weather: string
  trees: number
  buildings: number
  construction: number
}

export interface SelectedInfo {
  kind: string
  id: number
  title: string
  subtitle: string
  rows: Array<{ k: string; v: string }>
  bars: Array<{ k: string; v: number; color: string }>
  reason?: string
  goal?: string
  pathLen?: number
}

export interface PerfInfo {
  fpsAvg: number
  fpsLow: number
  aiMs: number
  drawCalls: number
  simSteps: number
  villagers: number
  trees: number
  buildings: number
  memMB: number
}

interface UIState {
  tool: ToolKind
  buildingType: BuildingType
  brushRadius: number
  brushStrength: number
  showPath: boolean
  speed: number
  stats: StatsSnapshot
  selectedKind: string | null
  selectedId: number | null
  selectedInfo: SelectedInfo | null
  toasts: Array<{ id: number; text: string }>
  perf: PerfInfo
  saveStatus: string
  loadTestNote: string
  setTool: (t: ToolKind) => void
  setBuildingType: (t: BuildingType) => void
  setBrushRadius: (r: number) => void
  setBrushStrength: (s: number) => void
  setShowPath: (v: boolean) => void
  setSpeed: (s: number) => void
  select: (kind: string | null, id: number | null) => void
  setStats: (s: StatsSnapshot) => void
  setSelectedInfo: (i: SelectedInfo | null) => void
  setPerf: (p: PerfInfo) => void
  setSaveStatus: (s: string) => void
  setLoadTestNote: (s: string) => void
  pushToast: (text: string) => void
  dropToast: (id: number) => void
}

let toastId = 1

export const useUI = create<UIState>((set) => ({
  tool: 'select',
  buildingType: 'house',
  brushRadius: 4,
  brushStrength: 0.5,
  showPath: true,
  speed: 1,
  stats: { pop: 0, cap: 0, wood: 0, stone: 0, food: 0, timeStr: '', weather: '', trees: 0, buildings: 0, construction: 0 },
  selectedKind: null,
  selectedId: null,
  selectedInfo: null,
  toasts: [],
  perf: { fpsAvg: 0, fpsLow: 0, aiMs: 0, drawCalls: 0, simSteps: 0, villagers: 0, trees: 0, buildings: 0, memMB: 0 },
  saveStatus: '자동저장 대기',
  loadTestNote: '',
  setTool: (t) => set({ tool: t }),
  setBuildingType: (t) => set({ buildingType: t }),
  setBrushRadius: (r) => set({ brushRadius: r }),
  setBrushStrength: (s) => set({ brushStrength: s }),
  setShowPath: (v) => set({ showPath: v }),
  setSpeed: (s) => set({ speed: s }),
  select: (kind, id) => set({ selectedKind: kind, selectedId: id, selectedInfo: null }),
  setStats: (s) => set({ stats: s }),
  setSelectedInfo: (i) => set({ selectedInfo: i }),
  setPerf: (p) => set({ perf: p }),
  setSaveStatus: (s) => set({ saveStatus: s }),
  setLoadTestNote: (s) => set({ loadTestNote: s }),
  pushToast: (text) =>
    set((st) => ({ toasts: [...st.toasts.slice(-5), { id: toastId++, text }] })),
  dropToast: (id) => set((st) => ({ toasts: st.toasts.filter((t) => t.id !== id) })),
}))
