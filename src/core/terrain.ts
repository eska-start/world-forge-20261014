/* 시드 기반 절차적 지형 생성: 높이맵, 바이옴, 식생 배치. 결정론적. */
import { ValueNoise2D } from './noise';
import { SeededRng } from './rng';

export type Biome = 'ocean' | 'beach' | 'plain' | 'forest' | 'hill' | 'mountain' | 'lake' | 'river';

export interface TerrainSettings {
  size: number; // 한 변 셀 수 (예: 96)
  waterLevel: number; // 0..1 기준 수면 높이
  hilliness: number; // 0..1
  forestDensity: number; // 0..1
}

export const DEFAULT_TERRAIN: TerrainSettings = {
  size: 96,
  waterLevel: 0.38,
  hilliness: 0.6,
  forestDensity: 0.6,
};

export interface VegetationSpot {
  x: number; // 셀 좌표 (float)
  z: number;
  kind: 'tree' | 'pine' | 'rock' | 'bush';
}

export interface GeneratedWorld {
  seed: string;
  settings: TerrainSettings;
  heights: Float32Array; // size*size, 0..1
  biomes: Uint8Array; // Biome index
  trees: VegetationSpot[];
  rocks: VegetationSpot[];
  bushes: VegetationSpot[];
}

export const BIOME_LIST: Biome[] = ['ocean', 'beach', 'plain', 'forest', 'hill', 'mountain', 'lake', 'river'];

export function biomeIndex(b: Biome): number {
  return BIOME_LIST.indexOf(b);
}

export function generateWorld(seed: string, settings: TerrainSettings): GeneratedWorld {
  const { size } = settings;
  const heights = new Float32Array(size * size);
  const biomes = new Uint8Array(size * size);
  const hNoise = new ValueNoise2D(seed + ':height');
  const mNoise = new ValueNoise2D(seed + ':moist');
  const rNoise = new ValueNoise2D(seed + ':river');

  const scale = 0.045;
  const hill = 0.4 + settings.hilliness * 0.9;

  for (let z = 0; z < size; z++) {
    for (let x = 0; x < size; x++) {
      const nx = x * scale;
      const nz = z * scale;
      // 가장자리 섬 형태로 떨어지게 (radial falloff) — 해안 지형 보장
      const cx = (x / size - 0.5) * 2;
      const cz = (z / size - 0.5) * 2;
      const dist = Math.sqrt(cx * cx + cz * cz); // 0..~1.41
      const falloff = Math.max(0, 1 - Math.pow(dist, 2.2) * 0.72);

      let h = hNoise.fbm(nx, nz, 5) * hill + hNoise.fbm(nx * 3.1 + 7.3, nz * 3.1 + 2.9, 2) * 0.12;
      h *= (0.35 + 0.65 * falloff);
      // 강: 대각선 밴드 형태의 침식
      const rv = Math.abs(rNoise.fbm(nx * 0.9 + 3.7, nz * 0.9 + 9.1, 3) - 0.5) * 2; // 0..1
      const riverMask = rv < 0.06 ? 1 - rv / 0.06 : 0;
      if (riverMask > 0 && h > settings.waterLevel && h < settings.waterLevel + 0.22) {
        h -= riverMask * 0.09;
      }
      h = Math.min(1, Math.max(0, h));
      heights[z * size + x] = h;
    }
  }

  // 바이옴 분류
  for (let z = 0; z < size; z++) {
    for (let x = 0; x < size; x++) {
      const h = heights[z * size + x];
      const moist = mNoise.fbm(x * 0.06 + 11, z * 0.06 + 5, 3);
      const wl = settings.waterLevel;
      let b: Biome;
      if (h < wl - 0.06) b = 'ocean';
      else if (h < wl - 0.015) b = 'lake'; // 얕은 물/호수 (내륙 저지대도 포함)
      else if (h < wl + 0.015) b = 'beach';
      else if (h > 0.78) b = 'mountain';
      else if (h > 0.62) b = 'hill';
      else if (moist > 0.55 && h > wl + 0.05) b = 'forest';
      else b = 'plain';
      // 강 복원 판정
      const rv = Math.abs(rNoise.fbm(x * scale * 0.9 + 3.7, z * scale * 0.9 + 9.1, 3) - 0.5) * 2;
      if (rv < 0.035 && h <= wl + 0.2 && h >= wl - 0.02) b = 'river';
      biomes[z * size + x] = biomeIndex(b);
    }
  }

  // 식생 배치 (결정론적 RNG)
  const rng = new SeededRng(seed + ':veg');
  const trees: VegetationSpot[] = [];
  const rocks: VegetationSpot[] = [];
  const bushes: VegetationSpot[] = [];
  const targetTrees = Math.floor(size * size * 0.028 * (0.4 + settings.forestDensity));
  const targetRocks = Math.floor(size * size * 0.006);
  const targetBushes = Math.floor(size * size * 0.008);
  let guard = 0;
  let placed = 0;
  while (placed < targetTrees && guard++ < targetTrees * 40) {
    const x = rng.range(0, size - 1);
    const z = rng.range(0, size - 1);
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    const b = BIOME_LIST[biomes[zi * size + xi]];
    const h = heights[zi * size + xi];
    if (h < settings.waterLevel + 0.02) continue;
    if (b === 'mountain') continue;
    const forestBoost = b === 'forest' ? 0.9 : 0.28;
    if (rng.next() > forestBoost) continue;
    const kind = h > 0.55 || rng.next() < 0.35 ? 'pine' : 'tree';
    trees.push({ x, z, kind });
    placed++;
  }
  guard = 0;
  placed = 0;
  while (placed < targetRocks && guard++ < targetRocks * 60) {
    const x = rng.range(0, size - 1);
    const z = rng.range(0, size - 1);
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    const h = heights[zi * size + xi];
    if (h < settings.waterLevel + 0.02) continue;
    rocks.push({ x, z, kind: 'rock' });
    placed++;
  }
  guard = 0;
  placed = 0;
  while (placed < targetBushes && guard++ < targetBushes * 60) {
    const x = rng.range(0, size - 1);
    const z = rng.range(0, size - 1);
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    const b = BIOME_LIST[biomes[zi * size + xi]];
    const h = heights[zi * size + xi];
    if (h < settings.waterLevel + 0.02) continue;
    if (b === 'mountain' || b === 'beach') continue;
    bushes.push({ x, z, kind: 'bush' });
    placed++;
  }

  return { seed, settings: { ...settings }, heights, biomes, trees, rocks, bushes };
}

export function heightAt(world: Pick<GeneratedWorld, 'heights' | 'settings'>, x: number, z: number): number {
  const { size } = world.settings;
  const cx = Math.max(0, Math.min(size - 1.001, x));
  const cz = Math.max(0, Math.min(size - 1.001, z));
  const x0 = Math.floor(cx);
  const z0 = Math.floor(cz);
  const fx = cx - x0;
  const fz = cz - z0;
  const h00 = world.heights[z0 * size + x0];
  const h10 = world.heights[z0 * size + Math.min(size - 1, x0 + 1)];
  const h01 = world.heights[Math.min(size - 1, z0 + 1) * size + x0];
  const h11 = world.heights[Math.min(size - 1, z0 + 1) * size + Math.min(size - 1, x0 + 1)];
  return h00 * (1 - fx) * (1 - fz) + h10 * fx * (1 - fz) + h01 * (1 - fx) * fz + h11 * fx * fz;
}

/** 월드 높이(0..1)를 렌더 높이로 변환하는 스케일 */
export const HEIGHT_SCALE = 10;

export function worldY(h: number): number {
  return h * HEIGHT_SCALE;
}
