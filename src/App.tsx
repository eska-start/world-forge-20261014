import { useEffect, useRef } from 'react'
import { Game } from './game'
import { setGame } from './ui/bridge'
import { TopBar, LeftTools, RightPanel, BottomBar, Toasts, PerfBar } from './ui/panels'
import './ui/styles.css'

export default function App(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // 기본 시드 20261017 (재실행 식별자), URL ?seed= 로 재현 가능
    const urlSeed = new URLSearchParams(window.location.search).get('seed')
    const seed = urlSeed ? Number(urlSeed) | 0 : 20261017
    const game = new Game(seed, 160)
    setGame(game)
    game.attach(canvas)

    let raf = 0
    let last = performance.now()
    const loop = (t: number) => {
      const dt = Math.min(0.12, Math.max(0, (t - last) / 1000))
      last = t
      game.update(dt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // 저장된 월드 복원 (새로고침 대응)
    void game.load()

    // 키보드 단축키
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.code === 'Space') {
        e.preventDefault()
        const ui = useUiSpeed()
        game.setSpeed(ui === 0 ? 1 : 0)
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        if (e.shiftKey) game.redo()
        else game.undo()
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault()
        game.redo()
      } else if (e.key === '1') game.setSpeed(1)
      else if (e.key === '2') game.setSpeed(2)
      else if (e.key === '3' || e.key === '4') game.setSpeed(4)
    }
    const useUiSpeed = () => game.speed
    window.addEventListener('keydown', onKey)

    // 종료 전 자동 저장
    const onLeave = () => void game.save(true)
    window.addEventListener('visibilitychange', onLeave)
    window.addEventListener('beforeunload', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('visibilitychange', onLeave)
      window.removeEventListener('beforeunload', onLeave)
      game.renderer?.dispose()
      setGame(null)
    }
  }, [])

  return (
    <>
      <canvas className="world-canvas" ref={canvasRef} />
      <TopBar />
      <LeftTools />
      <RightPanel />
      <PerfBar />
      <BottomBar />
      <Toasts />
    </>
  )
}
