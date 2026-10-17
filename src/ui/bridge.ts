import type { Game } from '../game'

let g: Game | null = null

export function setGame(game: Game | null): void {
  g = game
}

export function getGame(): Game {
  if (!g) throw new Error('Game 인스턴스가 아직 준비되지 않았습니다')
  return g
}

export function getGameOrNull(): Game | null {
  return g
}
