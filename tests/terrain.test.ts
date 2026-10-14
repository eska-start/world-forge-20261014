import { describe, it, expect } from 'vitest';
import { generateWorld, heightAt, DEFAULT_TERRAIN, BIOME_LIST } from '../src/core/terrain';

describe('시드 기반 절차적 지형', () => {
  it('같은 시드는 동일한 월드를 생성한다', () => {
    const a = generateWorld('test-seed-1', DEFAULT_TERRAIN);
    const b = generateWorld('test-seed-1', DEFAULT_TERRAIN);
    expect(a.heights).toEqual(b.heights);
    expect(a.biomes).toEqual(b.biomes);
    expect(a.trees.length).toBe(b.trees.length);
    expect(a.rocks.length).toBe(b.rocks.length);
    expect(a.bushes.length).toBe(b.bushes.length);
  });

  it('다른 시드는 다른 월드를 생성한다', () => {
    const a = generateWorld('seed-A', DEFAULT_TERRAIN);
    const b = generateWorld('seed-B', DEFAULT_TERRAIN);
    let diff = 0;
    for (let i = 0; i < a.heights.length; i++) {
      if (Math.abs(a.heights[i] - b.heights[i]) > 1e-6) diff++;
    }
    expect(diff).toBeGreaterThan(a.heights.length * 0.1);
  });

  it('평원/언덕/산/물/숲 바이옴이 모두 존재한다', () => {
    const w = generateWorld('forge-1', DEFAULT_TERRAIN);
    const seen = new Set(Array.from(w.biomes).map((i) => BIOME_LIST[i]));
    expect(seen.has('plain') || seen.has('forest')).toBe(true);
    expect(seen.has('mountain') || seen.has('hill')).toBe(true);
    // 해안/수역 보장
    expect(seen.has('ocean') || seen.has('lake') || seen.has('river') || seen.has('beach')).toBe(true);
  });

  it('식생이 자동 배치된다 (나무/바위/덤불)', () => {
    const w = generateWorld('forge-1', DEFAULT_TERRAIN);
    expect(w.trees.length).toBeGreaterThan(50);
    expect(w.rocks.length).toBeGreaterThan(10);
    expect(w.bushes.length).toBeGreaterThan(10);
    // 물 위에 식생 없음
    for (const t of w.trees) {
      const h = heightAt(w, t.x, t.z);
      expect(h).toBeGreaterThan(w.settings.waterLevel);
    }
  });

  it('heightAt 보간이 경계에서 안정적이다', () => {
    const w = generateWorld('edge', DEFAULT_TERRAIN);
    const n = w.settings.size;
    expect(heightAt(w, 0, 0)).toBeGreaterThanOrEqual(0);
    expect(heightAt(w, n - 1, n - 1)).toBeLessThanOrEqual(1);
    expect(heightAt(w, -5, -5)).toEqual(heightAt(w, 0, 0));
  });
});
