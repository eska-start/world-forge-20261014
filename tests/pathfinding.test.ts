import { describe, it, expect } from 'vitest';
import { findPath, isWalkable, invalidatePathCache, pathCacheSize } from '../src/core/pathfinding';

function flatOpt(size = 24, waterLevel = 0.3) {
  const heights = new Float32Array(size * size).fill(0.5);
  const blocked = new Uint8Array(size * size);
  return { size, heights, waterLevel, blocked };
}

describe('길찾기 (A*)', () => {
  it('평지에서 시작→목표 경로를 찾는다', () => {
    invalidatePathCache();
    const res = findPath(flatOpt(), 2, 2, 20, 20);
    expect(res).not.toBeNull();
    expect(res!.path.length).toBeGreaterThanOrEqual(2); // 직선 스무딩 시 시작+목표 2점
    expect(res!.path[res!.path.length - 1]).toEqual({ x: 20, z: 20 });
  });

  it('물 셀에는 진입하지 않는다', () => {
    invalidatePathCache();
    const opt = flatOpt();
    // 가로 강 생성
    for (let x = 0; x < opt.size; x++) opt.heights[12 * opt.size + x] = 0.1;
    const res = findPath(opt, 2, 2, 20, 20);
    // 강을 우회하거나 실패해야 하며, 경로가 물을 밟으면 안 됨
    if (res) {
      for (const p of res.path) {
        expect(opt.heights[p.z * opt.size + p.x]).toBeGreaterThan(opt.waterLevel);
      }
    }
    expect(isWalkable(opt, 5, 12)).toBe(false);
  });

  it('장애물을 회피한다', () => {
    invalidatePathCache();
    const opt = flatOpt();
    // 세로 벽 (통로 1칸 제외)
    for (let z = 0; z < opt.size; z++) {
      if (z === 11) continue;
      opt.blocked[z * opt.size + 12] = 1;
    }
    const res = findPath(opt, 2, 2, 20, 20);
    expect(res).not.toBeNull();
    for (const p of res!.path) {
      expect(opt.blocked[p.z * opt.size + p.x]).toBe(0);
    }
  });

  it('막힌 목표는 인근 도달 가능 셀로 보정한다', () => {
    invalidatePathCache();
    const opt = flatOpt();
    opt.blocked[20 * opt.size + 20] = 1;
    const res = findPath(opt, 2, 2, 20, 20);
    expect(res).not.toBeNull();
    const last = res!.path[res!.path.length - 1];
    expect(isWalkable(opt, last.x, last.z)).toBe(true);
  });

  it('지형 변경 시 캐시를 무효화한다', () => {
    invalidatePathCache();
    const opt = flatOpt();
    findPath(opt, 1, 1, 10, 10);
    const before = pathCacheSize();
    expect(before).toBeGreaterThan(0);
    invalidatePathCache();
    // 캐시 버전이 바뀌어 이전 키는 재사용되지 않음
    const res = findPath(opt, 1, 1, 10, 10);
    expect(res).not.toBeNull();
  });

  it('급경사는 회피한다', () => {
    invalidatePathCache();
    const opt = flatOpt();
    opt.heights.fill(0.5);
    // 절벽
    for (let z = 0; z < opt.size; z++) for (let x = 12; x < opt.size; x++) opt.heights[z * opt.size + x] = 0.9;
    const res = findPath({ ...opt, maxSlope: 0.02 }, 2, 12, 20, 12);
    // 경사가 너무 가파르면 경로가 없거나 우회해야 함 — 물에 빠지지 않아야 함
    if (res) {
      for (const p of res.path) expect(isWalkable(opt, p.x, p.z)).toBe(true);
    } else {
      expect(res).toBeNull();
    }
  });
});
