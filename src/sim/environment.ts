/* 환경 시뮬레이션: 낮/밤, 날씨, 비/폭풍. 고정 dt 기반. */
import type { EnvState } from './types';

export function tickEnvironment(env: EnvState, dt: number, fireCount: number): Partial<EnvState> {
  // 게임 1일 = 480초
  const next: Partial<EnvState> = {};
  let tod = env.timeOfDay + (dt * 24) / 480;
  let day = env.day;
  if (tod >= 24) { tod -= 24; day += 1; }
  next.timeOfDay = tod;
  next.day = day;

  let { weather, weatherT, raining } = env;
  weatherT -= dt;
  if (weatherT <= 0) {
    // 화재가 있으면 비 올 확률 상승 (완화 장치), 평소엔 맑음 위주
    const r = Math.random();
    if (fireCount > 0 && r < 0.55) { weather = '비'; weatherT = 30 + Math.random() * 40; }
    else if (r < 0.62) { weather = '맑음'; weatherT = 60 + Math.random() * 90; }
    else if (r < 0.88) { weather = '비'; weatherT = 25 + Math.random() * 40; }
    else { weather = '폭풍'; weatherT = 15 + Math.random() * 20; }
  }
  const targetRain = weather === '맑음' ? 0 : weather === '비' ? 0.6 : 1;
  raining += (targetRain - raining) * Math.min(1, dt * 0.5);
  next.weather = weather;
  next.weatherT = weatherT;
  next.raining = raining;
  return next;
}

export function sunIntensity(timeOfDay: number): number {
  // 6시 일출 ~ 18시 일몰 가정
  const t = ((timeOfDay - 6) / 12) * Math.PI; // 0..π (낮)
  if (timeOfDay < 5.5 || timeOfDay > 18.5) return 0.06;
  return 0.25 + 0.95 * Math.max(0, Math.sin(t));
}

export function isNight(timeOfDay: number): boolean {
  return timeOfDay < 5.5 || timeOfDay > 18.5;
}
