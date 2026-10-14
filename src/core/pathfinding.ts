/* A* 길찾기: 물/급경사/장애물 회피. 지형 변경 시 캐시 무효화. */
export interface PathOptions {
  size: number;
  heights: Float32Array;
  waterLevel: number;
  blocked: Uint8Array; // 1이면 장애물(건물 등)
  maxSlope?: number; // 허용 높이차 (0..1)
}

export interface PathResult {
  path: { x: number; z: number }[];
  cost: number;
  visited: number;
}

const DIRS = [
  [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
  [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2],
] as const;

// 간단 경로 캐시 (key: start-goal 쌍 + 버전)
const cache = new Map<string, { x: number; z: number }[]>();
let cacheVersion = 0;
export function invalidatePathCache() {
  cacheVersion++;
  if (cache.size > 500) cache.clear();
}
export function pathCacheSize() {
  return cache.size;
}

function key(sx: number, sz: number, gx: number, gz: number) {
  return `${cacheVersion}:${sx},${sz}>${gx},${gz}`;
}

export function isWalkable(opt: PathOptions, x: number, z: number): boolean {
  const { size, heights, waterLevel, blocked, maxSlope = 0.09 } = opt;
  if (x < 0 || z < 0 || x >= size || z >= size) return false;
  const i = z * size + x;
  if (blocked[i]) return false;
  if (heights[i] < waterLevel + 0.005) return false; // 물 진입 방지
  return true;
}

export function findPath(opt: PathOptions, sx: number, sz: number, gx: number, gz: number, maxVisited = 6000): PathResult | null {
  sx = Math.max(0, Math.min(opt.size - 1, Math.round(sx)));
  sz = Math.max(0, Math.min(opt.size - 1, Math.round(sz)));
  gx = Math.max(0, Math.min(opt.size - 1, Math.round(gx)));
  gz = Math.max(0, Math.min(opt.size - 1, Math.round(gz)));
  if (sx === gx && sz === gz) return { path: [{ x: gx, z: gz }], cost: 0, visited: 0 };

  const ck = key(sx, sz, gx, gz);
  const hit = cache.get(ck);
  if (hit) {
    // 캐시 정합성 검증: 지형이 바뀌었는데 버전이 그대로면 stale 가능 → 전수 검사
    let valid = true;
    for (const p of hit) {
      if (!isWalkable(opt, p.x, p.z)) { valid = false; break; }
    }
    if (valid) return { path: hit.map((p) => ({ ...p })), cost: hit.length, visited: 0 };
    cache.delete(ck);
  }

  // 목표가 막혔으면 인근 탐색
  let goal = { x: gx, z: gz };
  if (!isWalkable(opt, gx, gz)) {
    let found: { x: number; z: number } | null = null;
    for (let r = 1; r <= 4 && !found; r++) {
      for (let dz = -r; dz <= r && !found; dz++) {
        for (let dx = -r; dx <= r && !found; dx++) {
          if (isWalkable(opt, gx + dx, gz + dz)) found = { x: gx + dx, z: gz + dz };
        }
      }
    }
    if (!found) return null;
    goal = found;
  }
  if (!isWalkable(opt, sx, sz)) {
    // 시작점이 막혔으면 인근으로 보정
    let found = false;
    for (let r = 1; r <= 3 && !found; r++) {
      for (let dz = -r; dz <= r && !found; dz++)
        for (let dx = -r; dx <= r && !found; dx++)
          if (isWalkable(opt, sx + dx, sz + dz)) { sx += dx; sz += dz; found = true; }
    }
    if (!found) return null;
  }

  const { size, heights } = opt;
  const maxSlope = opt.maxSlope ?? 0.09;
  const open: number[] = [sz * size + sx];
  const gScore = new Map<number, number>();
  const came = new Map<number, number>();
  const closed = new Set<number>();
  gScore.set(sz * size + sx, 0);
  const h = (i: number) => {
    const x = i % size;
    const z = Math.floor(i / size);
    return Math.hypot(goal.x - x, goal.z - z);
  };
  const f = new Map<number, number>();
  f.set(sz * size + sx, h(sz * size + sx));
  let visited = 0;

  while (open.length > 0 && visited < maxVisited) {
    // 최소 f 선택 (선형 스캔; 월드 96 규모에서 충분)
    let bi = 0;
    let bv = Infinity;
    for (let i = 0; i < open.length; i++) {
      const v = f.get(open[i]) ?? Infinity;
      if (v < bv) { bv = v; bi = i; }
    }
    const cur = open.splice(bi, 1)[0];
    if (closed.has(cur)) continue;
    closed.add(cur);
    visited++;
    const cx = cur % size;
    const cz = Math.floor(cur / size);
    if (cx === goal.x && cz === goal.z) {
      const path: { x: number; z: number }[] = [];
      let c: number | undefined = cur;
      while (c !== undefined) {
        path.push({ x: c % size, z: Math.floor(c / size) });
        c = came.get(c);
      }
      path.reverse();
      const smoothed = smoothPath(opt, path);
      cache.set(ck, smoothed.map((p) => ({ ...p })));
      return { path: smoothed, cost: gScore.get(cur) ?? path.length, visited };
    }
    for (const [dx, dz, base] of DIRS) {
      const nx = cx + dx;
      const nz = cz + dz;
      if (!isWalkable(opt, nx, nz)) continue;
      const ni = nz * size + nx;
      if (closed.has(ni)) continue;
      const dh = Math.abs(heights[ni] - heights[cur]);
      if (dh > maxSlope) continue; // 급경사 회피
      const slopeCost = 1 + dh * 30;
      const tentative = (gScore.get(cur) ?? Infinity) + base * slopeCost;
      if (tentative < (gScore.get(ni) ?? Infinity)) {
        came.set(ni, cur);
        gScore.set(ni, tentative);
        f.set(ni, tentative + h(ni));
        if (!open.includes(ni)) open.push(ni);
      }
    }
  }
  return null;
}

function smoothPath(opt: PathOptions, path: { x: number; z: number }[]): { x: number; z: number }[] {
  if (path.length < 3) return path;
  const out = [path[0]];
  let anchor = 0;
  for (let i = 2; i < path.length; i++) {
    if (!hasLineOfSight(opt, path[anchor], path[i])) {
      out.push(path[i - 1]);
      anchor = i - 1;
    }
  }
  out.push(path[path.length - 1]);
  return out;
}

function hasLineOfSight(opt: PathOptions, a: { x: number; z: number }, b: { x: number; z: number }): boolean {
  const steps = Math.max(Math.abs(b.x - a.x), Math.abs(b.z - a.z)) * 2;
  const n = Math.max(1, Math.ceil(steps));
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const x = Math.round(a.x + (b.x - a.x) * t);
    const z = Math.round(a.z + (b.z - a.z) * t);
    if (!isWalkable(opt, x, z)) return false;
    const dh = Math.abs(opt.heights[z * opt.size + x] - opt.heights[a.z * opt.size + a.x]);
    if (dh > (opt.maxSlope ?? 0.09) * 3) return false;
  }
  return true;
}
