// 월드 상태 타입 정의 — 시뮬레이션의 단일 진실(Single Source of Truth)
// 이 모듈은 DOM/three.js에 의존하지 않는다 (Node 테스트 가능).

export type BuildingType = 'house' | 'warehouse' | 'farm' | 'lumberyard' | 'quarry'
export type Job = '일꾼' | '벌목꾼' | '광부' | '농부' | '건설가'
export type ActionKind =
  | 'flee'
  | 'eat'
  | 'sleep'
  | 'build'
  | 'chop'
  | 'mine'
  | 'harvest'
  | 'forage'
  | 'deposit'
  | 'wander'
  | 'idle'

export type WeatherKind = 'clear' | 'rain' | 'storm'

export interface Vec2 {
  x: number
  z: number
}

export interface Tree {
  id: number
  x: number
  z: number
  kind: 'pine' | 'oak' | 'palm'
  growth: number // 0..1 (묘목→성목)
  hp: number
  burning: boolean
}

export interface Rock {
  id: number
  x: number
  z: number
  amount: number
  maxAmount: number
}

export interface Building {
  id: number
  type: BuildingType
  x: number
  z: number // 발자국 좌상단 타일
  w: number
  h: number
  state: 'planned' | 'building' | 'done' | 'ruined'
  stored: { wood: number; stone: number } // 건설 자재 (현장 반입분)
  progress: number // 0..1
  crops: number // 농장 0..1
  burning: boolean
  hp: number
  rot: number
}

export interface Fire {
  id: number
  x: number
  z: number
  life: number // 남은 연소 시간(초)
  kind: 'tree' | 'building'
  targetId: number
}

export type VillagerPhase = 'awaitPath' | 'move' | 'work'

export interface Action {
  kind: ActionKind
  reason: string // 행동 선택 근거 (한글)
  goal: string // 목표 요약 (한글)
  targetId?: number
  tx?: number
  tz?: number
  path: Vec2[] | null
  pathIndex: number
  phase: VillagerPhase
  workLeft: number
  buildStage?: 'fetch' | 'deliver' | 'work'
  fetchRes?: 'wood' | 'stone'
  siteId?: number
}

export interface Footprint {
  x: number
  z: number
  w: number
  h: number
}

export interface Villager {
  id: number
  name: string
  job: Job
  x: number
  z: number
  facing: number
  hunger: number // 0..100
  fatigue: number // 0..100
  health: number // 0..100
  inv: { wood: number; stone: number; food: number }
  action: Action
  thinkIn: number
  alive: boolean
  bornAt: number
}

export interface Animal {
  id: number
  kind: 'deer' | 'rabbit'
  x: number
  z: number
  facing: number
  action: Action
  thinkIn: number
}

export interface Storage {
  wood: number
  stone: number
  food: number
}

export interface WorldStats {
  gatheredWood: number
  gatheredStone: number
  gatheredFood: number
  built: number
  births: number
  deaths: number
}

export interface WorldState {
  seed: number
  size: number
  heights: Float32Array
  water: Uint8Array
  waterLevel: Float32Array
  trees: Map<number, Tree>
  rocks: Map<number, Rock>
  buildings: Map<number, Building>
  villagers: Villager[]
  animals: Animal[]
  fires: Fire[]
  nextId: number
  time: number // 시뮬레이션 초
  weather: { kind: WeatherKind; left: number }
  popTimer: number
  village: { x: number; z: number }
  stats: WorldStats
  storage: Storage
  // ---- 파생 상태 (저장 대상 아님, 로드/편집 시 재계산) ----
  blocked: Uint8Array
  treeIndex: Map<number, number[]>
  rockIndex: Map<number, number[]>
  buildingIndex: Map<number, number[]>
  toasts: string[]
}

export const DAY_LEN = 180 // 하루 = 180 시뮬레이션 초
export const SEA_LEVEL = 0

export const BLOCK_WATER = 1
export const BLOCK_BUILDING = 2
export const BLOCK_ROCK = 4
export const BLOCK_CLIFF = 8
export const BLOCK_FIRE = 16
