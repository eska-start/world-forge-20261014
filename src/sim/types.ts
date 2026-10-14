/* 공유 시뮬레이션 타입 */
export type ToolKind =
  | 'select' | 'raise' | 'lower' | 'flatten' | 'water' | 'plantTree' | 'removeVeg'
  | 'buildHouse' | 'buildStorage' | 'buildFarm' | 'buildLumber' | 'buildQuarry'
  | 'spawnVillager' | 'spawnAnimal' | 'bulldoze' | 'fire';

export type BuildingKind = 'house' | 'storage' | 'farm' | 'lumber' | 'quarry';
export type JobKind = '무직' | '목수' | '석공' | '농부' | '운반꾼' | '건설자';
export type ActionKind =
  | '대기' | '이동' | '식량탐색' | '식사' | '벌목' | '채석' | '운반' | '건설' | '휴식' | '회피' | '농사' | '귀가';

export interface TreeEnt { id: number; x: number; z: number; kind: 'tree' | 'pine'; growth: number; alive: boolean; }
export interface RockEnt { id: number; x: number; z: number; alive: boolean; amount: number; }
export interface BushEnt { id: number; x: number; z: number; alive: boolean; food: number; regrow: number; }
export interface BuildingEnt {
  id: number; kind: BuildingKind; x: number; z: number;
  progress: number; // 0..1 (1=완성)
  required: { wood: number; stone: number };
  delivered: { wood: number; stone: number };
  complete: boolean;
}
export interface VillagerEnt {
  id: number; name: string; job: JobKind;
  x: number; z: number;
  hunger: number; // 0..100 (100=포만)
  fatigue: number; // 0..100 (100=지침)
  health: number; // 0..100
  action: ActionKind;
  reason: string; // 선택 근거 (한글)
  targetX: number | null; targetZ: number | null;
  path: { x: number; z: number }[]; pathIdx: number;
  carry: { wood: number; stone: number; food: number };
  carryCap: number;
  speed: number; // 셀/초
  homeId: number | null;
  workId: number | null;
  idleTicks: number;
}
export interface AnimalEnt { id: number; kind: 'deer' | 'rabbit'; x: number; z: number; path: {x:number;z:number}[]; pathIdx: number; retarget: number; }
export interface FireEnt { id: number; x: number; z: number; intensity: number; }

export interface Resources { wood: number; stone: number; food: number; capacity: number; population: number; housing: number; }

export interface EnvState {
  timeOfDay: number; // 0..24
  day: number;
  weather: '맑음' | '비' | '폭풍';
  weatherT: number; // 남은 시간(초)
  raining: number; // 0..1 강도
}

export const BUILDING_DEFS: Record<BuildingKind, { name: string; wood: number; stone: number; time: number; desc: string; color: string }> = {
  house: { name: '집', wood: 20, stone: 5, time: 40, desc: '주민 4명 수용', color: '#c98f5e' },
  storage: { name: '창고', wood: 15, stone: 10, time: 30, desc: '자원 상한 +200', color: '#8a6f4d' },
  farm: { name: '농장', wood: 10, stone: 0, time: 25, desc: '식량 생산', color: '#7fae4c' },
  lumber: { name: '벌목장', wood: 10, stone: 5, time: 25, desc: '목재 채집 속도+', color: '#6b4a2f' },
  quarry: { name: '채석장', wood: 10, stone: 5, time: 25, desc: '석재 채집 속도+', color: '#8d8d99' },
};
