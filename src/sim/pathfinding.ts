// A* 길찾기 — 물/절벽/건물/바위/불 회피, 경사 비용, 대각선 코너 컷 방지
// 노드 스크래치 배열은 월드별로 재사용해 GC 부담을 줄인다.
import type { WorldState, Vec2 } from './types'
import { BLOCK_WATER, BLOCK_BUILDING, BLOCK_ROCK, BLOCK_CLIFF, BLOCK_FIRE } from './types'
import { inBounds, idx, treeAt } from './grid'

export interface PathBudget {
  left: number
}

interface Scratch {
  g: Float32Array
  f: Float32Array
  came: Int32Array
  stamp: Int32Array
  closed: Uint8Array
  cur: number
}

const scratchCache = new WeakMap<WorldState, Scratch>()

function scratchFor(world: WorldState): Scratch {
  let s = scratchCache.get(world)
  if (!s) {
    const n = world.size * world.size
    s = {
      g: new Float32Array(n),
      f: new Float32Array(n),
      came: new Int32Array(n),
      stamp: new Int32Array(n),
      closed: new Uint8Array(n),
      cur: 0,
    }
    scratchCache.set(world, s)
  }
  return s
}

// --- 이진 힙 (f 낮은 순) ---
class Heap {
  private items: number[] = []
  private keys: number[] = []

  get size(): number {
    return this.items.length
  }

  push(item: number, key: number): void {
    this.items.push(item)
    this.keys.push(key)
    let i = this.items.length - 1
    while (i > 0) {
      const p = (i - 1) >> 1
      if (this.keys[p] <= this.keys[i]) break
      this.swap(i, p)
      i = p
    }
  }

  pop(): number {
    const top = this.items[0]
    const lastItem = this.items.pop() as number
    const lastKey = this.keys.pop() as number
    if (this.items.length > 0) {
      this.items[0] = lastItem
      this.keys[0] = lastKey
      let i = 0
      const n = this.items.length
      for (;;) {
        const l = i * 2 + 1
        const r = l + 1
        let m = i
        if (l < n && this.keys[l] < this.keys[m]) m = l
        if (r < n && this.keys[r] < this.keys[m]) m = r
        if (m === i) break
        this.swap(i, m)
        i = m
      }
    }
    return top
  }

  private swap(a: number, b: number): void {
    const ti = this.items[a]
    this.items[a] = this.items[b]
    this.items[b] = ti
    const tk = this.keys[a]
    this.keys[a] = this.keys[b]
    this.keys[b] = tk
  }
}

const MAX_EXPAND = 7000

/**
 * start→goal A* 탐색. goal 타일이 막혀 있으면 인접 통행 타일로 스냅.
 * 성공 시 시작 타일을 제외한 타일 중심 경로, 실패 시 null.
 */
export function findPath(
  world: WorldState,
  sx: number,
  sz: number,
  gx: number,
  gz: number,
): Vec2[] | null {
  const size = world.size
  if (!inBounds(world, sx, sz) || !inBounds(world, gx, gz)) return null
  const s = scratchFor(world)
  s.cur++
  const cur = s.cur

  let start = sz * size + sx
  let goal = gz * size + gx

  const passable = (i: number): boolean => {
    const b = world.blocked[i]
    return (b & (BLOCK_WATER | BLOCK_BUILDING | BLOCK_ROCK | BLOCK_CLIFF | BLOCK_FIRE)) === 0
  }

  // 시작이 막혀 있으면(예: 삭제된 오브젝트 위) 인접 통행 타일로 이동
  if (!passable(start)) {
    const alt = passableNeighbor(world, sx, sz)
    if (!alt) return null
    start = alt.z * size + alt.x
  }
  // 목적지가 막혀 있으면 주변 통행 타일로 스냅
  if (!passable(goal)) {
    const alt = passableNeighbor(world, gx, gz)
    if (!alt) return null
    goal = alt.z * size + alt.x
  }
  if (start === goal) return []

  const hOf = (i: number): number => {
    const ix = i % size
    const iz = Math.floor(i / size)
    const gx2 = goal % size
    const gz2 = Math.floor(goal / size)
    const dx = Math.abs(ix - gx2)
    const dz = Math.abs(iz - gz2)
    return (dx + dz) + (Math.SQRT2 - 2) * Math.min(dx, dz)
  }

  const open = new Heap()
  s.g[start] = 0
  s.f[start] = hOf(start)
  s.stamp[start] = cur
  s.came[start] = -1
  open.push(start, s.f[start])

  let expanded = 0
  let found = -1

  while (open.size > 0) {
    const curi = open.pop()
    if (s.stamp[curi] !== cur) continue // 폐기된 스탬프
    if (s.closed[curi] === cur) continue
    s.closed[curi] = cur
    expanded++
    if (expanded > MAX_EXPAND) return null
    if (curi === goal) {
      found = curi
      break
    }
    const cx = curi % size
    const cz = Math.floor(curi / size)
    const hCur = world.heights[curi]
    for (let d = 0; d < 8; d++) {
      const dx = DX[d]
      const dz = DZ[d]
      const nx = cx + dx
      const nz = cz + dz
      if (nx < 0 || nz < 0 || nx >= size || nz >= size) continue
      const ni = nz * size + nx
      if (s.closed[ni] === cur) continue
      if (!passable(ni)) continue
      // 대각선: 양쪽 직교 이웃도 통행 가능해야 (코너 컷 방지)
      if (dx !== 0 && dz !== 0) {
        const a = cz * size + (cx + dx)
        const b = (cz + dz) * size + cx
        if (!passable(a) || !passable(b)) continue
      }
      const dh = Math.abs(world.heights[ni] - hCur)
      let step = dx !== 0 && dz !== 0 ? Math.SQRT2 : 1
      step += dh * 1.5
      if (treeAt(world, nx, nz)) step += 2.0 // 나무 사이 통행은 느리다(우회 유도)
      const gNew = s.g[curi] + step
      if (s.stamp[ni] === cur && gNew >= s.g[ni]) continue
      s.stamp[ni] = cur
      s.g[ni] = gNew
      s.f[ni] = gNew + hOf(ni)
      s.came[ni] = curi
      open.push(ni, s.f[ni])
    }
  }

  if (found < 0) return null
  // 역추적
  const tiles: Vec2[] = []
  let node = found
  while (node !== start && node >= 0) {
    tiles.push({ x: node % size, z: Math.floor(node / size) })
    node = s.came[node]
  }
  tiles.reverse()
  return tiles
}

const DX = [1, -1, 0, 0, 1, 1, -1, -1]
const DZ = [0, 0, 1, -1, 1, -1, 1, -1]

function passableNeighbor(world: WorldState, x: number, z: number): Vec2 | null {
  for (let r = 1; r <= 3; r++) {
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue
        const nx = x + dx
        const nz = z + dz
        if (!inBounds(world, nx, nz)) continue
        const b = world.blocked[nz * world.size + nx]
        if ((b & (BLOCK_WATER | BLOCK_BUILDING | BLOCK_ROCK | BLOCK_CLIFF | BLOCK_FIRE)) === 0) {
          return { x: nx, z: nz }
        }
      }
    }
  }
  return null
}
