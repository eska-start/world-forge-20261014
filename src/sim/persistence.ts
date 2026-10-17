// 영속화 — JSON 직렬화 + IndexedDB 저장/로드 + 내보내기/가져오기
import type { WorldState, Tree, Rock, Building, Villager, Animal, Fire, WorldStats, Storage, WeatherKind } from './types'
import { emptyWorld } from './worldgen'
import { recomputeAllBlocked, rebuildIndexes } from './grid'

export interface SaveData {
  v: number
  seed: number
  size: number
  time: number
  weather: { kind: WeatherKind; left: number }
  popTimer: number
  village: { x: number; z: number }
  stats: WorldStats
  storage: Storage
  nextId: number
  heights: string // base64(Float32Array)
  water: string // base64(Uint8Array)
  waterLevel: string // base64(Float32Array)
  trees: Tree[]
  rocks: Rock[]
  buildings: Building[]
  villagers: Villager[]
  animals: Animal[]
  fires: Fire[]
}

export const SAVE_VERSION = 2

export function bytesToB64(bytes: Uint8Array): string {
  let s = ''
  const CH = 0x8000
  for (let i = 0; i < bytes.length; i += CH) {
    s += String.fromCharCode(...bytes.subarray(i, i + CH))
  }
  return btoa(s)
}

export function b64ToBytes(b64: string): Uint8Array {
  const s = atob(b64)
  const out = new Uint8Array(s.length)
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i)
  return out
}

function f32ToB64(arr: Float32Array): string {
  return bytesToB64(new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength))
}

export function serializeWorld(world: WorldState): SaveData {
  const strip = (v: Villager | Animal) => ({
    ...(v as unknown as Record<string, unknown>),
    action: { ...(v as { action: Villager['action'] }).action, path: null },
  })
  return {
    v: SAVE_VERSION,
    seed: world.seed,
    size: world.size,
    time: world.time,
    weather: { ...world.weather },
    popTimer: world.popTimer,
    village: { ...world.village },
    stats: { ...world.stats },
    storage: { ...world.storage },
    nextId: world.nextId,
    heights: f32ToB64(world.heights),
    water: bytesToB64(world.water),
    waterLevel: f32ToB64(world.waterLevel),
    trees: [...world.trees.values()],
    rocks: [...world.rocks.values()],
    buildings: [...world.buildings.values()],
    villagers: world.villagers.map(strip) as Villager[],
    animals: world.animals.map(strip) as Animal[],
    fires: world.fires.map((f) => ({ ...f })),
  }
}

export function deserializeWorld(data: SaveData): WorldState {
  if (data.v !== SAVE_VERSION) throw new Error(`지원하지 않는 저장 버전: ${data.v}`)
  const world = emptyWorld(data.seed, data.size)
  world.time = data.time
  world.weather = { ...data.weather }
  world.popTimer = data.popTimer
  world.village = { ...data.village }
  world.stats = { ...data.stats }
  world.storage = { ...data.storage }
  world.nextId = data.nextId
  world.heights = new Float32Array(b64ToBytes(data.heights).buffer)
  world.water = b64ToBytes(data.water)
  world.waterLevel = new Float32Array(b64ToBytes(data.waterLevel).buffer)
  if (world.heights.length !== data.size * data.size) throw new Error('높이맵 크기 불일치')
  for (const t of data.trees) world.trees.set(t.id, { ...t })
  for (const r of data.rocks) world.rocks.set(r.id, { ...r })
  for (const b of data.buildings) {
    world.buildings.set(b.id, {
      ...b,
      stored: { ...b.stored },
    })
  }
  world.villagers = data.villagers.map((v) => ({
    ...v,
    inv: { ...v.inv },
    action: { ...v.action, path: null },
  }))
  world.animals = data.animals.map((a) => ({
    ...a,
    action: { ...a.action, path: null },
  }))
  world.fires = data.fires.map((f) => ({ ...f }))
  rebuildIndexes(world)
  recomputeAllBlocked(world)
  return world
}

// ---------------- JSON 내보내기/가져오기 ----------------

export function exportToJson(world: WorldState): string {
  return JSON.stringify(serializeWorld(world))
}

export function importFromJson(text: string): WorldState {
  const data = JSON.parse(text) as SaveData
  return deserializeWorld(data)
}

// ---------------- IndexedDB ----------------

const DB_NAME = 'world-forge'
const STORE = 'saves'
const AUTO_KEY = 'auto'

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

export async function saveToIdb(data: SaveData, key = AUTO_KEY): Promise<void> {
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).put(data, key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}

export async function loadFromIdb(key = AUTO_KEY): Promise<SaveData | null> {
  const db = await openDb()
  const result = await new Promise<SaveData | null>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly')
    const req = tx.objectStore(STORE).get(key)
    req.onsuccess = () => resolve((req.result as SaveData) ?? null)
    req.onerror = () => reject(req.error)
  })
  db.close()
  return result
}

export async function clearIdb(key = AUTO_KEY): Promise<void> {
  const db = await openDb()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite')
    tx.objectStore(STORE).delete(key)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}
