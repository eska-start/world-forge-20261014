/* 결정론적 시드 RNG: mulberry32 + 문자열 해시 */
export function hashSeed(str: string | number): number {
  if (typeof str === 'number') return str >>> 0;
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class SeededRng {
  private fn: () => number;
  constructor(seed: string | number) {
    this.fn = mulberry32(hashSeed(seed));
  }
  next(): number {
    return this.fn();
  }
  range(min: number, max: number): number {
    return min + (max - min) * this.next();
  }
  int(min: number, max: number): number {
    return Math.floor(this.range(min, max + 1));
  }
  pick<T>(arr: T[]): T {
    return arr[Math.floor(this.next() * arr.length)];
  }
}

const KOREAN_SURNAMES = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '서', '신', '권', '황'];
const KOREAN_GIVEN = ['민준', '서연', '도윤', '하은', '지훈', '수아', '현우', '지민', '준서', '예린', '태양', '보라', '산들', '이슬', '바람'];

export function koreanName(rng: SeededRng | (() => number)): string {
  const f = typeof rng === 'function' ? rng : () => (rng as SeededRng).next();
  const s = KOREAN_SURNAMES[Math.floor(f() * KOREAN_SURNAMES.length)];
  const g = KOREAN_GIVEN[Math.floor(f() * KOREAN_GIVEN.length)];
  return s + g;
}
