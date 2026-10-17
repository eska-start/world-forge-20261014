// 고정 시간 간격 드라이버 — 렌더 루프(가변 dt)와 시뮬(고정 dt) 분리
import type { WorldState } from './types'
import { TICK_DT } from './sim'

export class SimDriver {
  acc = 0
  speed = 1 // 0 = 일시정지

  /** 실제 경과 시간을 받아 고정 틱 실행. 실행한 틱 수 반환. */
  step(world: WorldState, realDt: number, tickFn: (w: WorldState, dt: number) => void): number {
    if (this.speed <= 0) {
      return 0
    }
    this.acc += realDt * this.speed
    let steps = 0
    while (this.acc >= TICK_DT && steps < 40) {
      tickFn(world, TICK_DT)
      this.acc -= TICK_DT
      steps++
    }
    if (this.acc > TICK_DT * 12) this.acc = 0 // 스파이크 백로그 폐기
    return steps
  }

  reset(): void {
    this.acc = 0
  }
}
