import { useEffect, useRef } from 'react'
import { useUI, type ToolKind } from './store'
import { getGame, getGameOrNull } from './bridge'
import { BUILDING_DEFS } from '../sim/buildings'
import type { BuildingType } from '../sim/types'
import type { Game } from '../game'

const TOOLS: Array<{ kind: ToolKind; label: string; icon: string; hint: string }> = [
  { kind: 'select', label: '선택', icon: '🖱️', hint: '개체를 클릭해 상태 확인' },
  { kind: 'raise', label: '지형 올리기', icon: '⛰️', hint: '드래그로 브러시 반경 내 지형을 올림' },
  { kind: 'lower', label: '지형 내리기', icon: '🕳️', hint: '드래그로 지형을 내림 (해수면 아래는 물이 참)' },
  { kind: 'flatten', label: '평탄화', icon: '🧱', hint: '브러시 중심 높이로 평탄화' },
  { kind: 'placeWater', label: '물 배치', icon: '💧', hint: '브러시 영역에 물 채움' },
  { kind: 'removeWater', label: '물 제거', icon: '🏜️', hint: '브러시 영역의 물 제거' },
  { kind: 'plantTree', label: '나무 심기', icon: '🌱', hint: '클릭/드래그로 묘목 심기' },
  { kind: 'removeTree', label: '나무 제거', icon: '🪓', hint: '브러시 영역 나무 제거' },
  { kind: 'placeBuilding', label: '건물 배치', icon: '🏠', hint: '아래에서 종류 선택 후 클릭 배치(주민이 지어감)' },
  { kind: 'spawnVillager', label: '주민 생성', icon: '🧑‍🌾', hint: '클릭 위치에 새 주민' },
  { kind: 'spawnAnimal', label: '동물 생성', icon: '🦌', hint: '클릭 위치에 동물' },
  { kind: 'delete', label: '삭제', icon: '🗑️', hint: '클릭한 개체 삭제' },
]

export function LeftTools(): React.JSX.Element {
  const tool = useUI((s) => s.tool)
  const buildingType = useUI((s) => s.buildingType)
  const brushRadius = useUI((s) => s.brushRadius)
  const brushStrength = useUI((s) => s.brushStrength)
  const setTool = useUI((s) => s.setTool)
  const setBuildingType = useUI((s) => s.setBuildingType)
  const setBrushRadius = useUI((s) => s.setBrushRadius)
  const setBrushStrength = useUI((s) => s.setBrushStrength)
  const active = TOOLS.find((t) => t.kind === tool)

  return (
    <div className="panel left-panel">
      <div className="panel-title">🛠️ 편집 도구</div>
      <div className="tool-grid">
        {TOOLS.map((t) => (
          <button
            key={t.kind}
            className={`tool-btn ${tool === t.kind ? 'active' : ''}`}
            onClick={() => setTool(t.kind)}
            title={t.hint}
          >
            <span className="tool-icon">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>
      <div className="divider" />
      <div className="slider-row">
        <label>브러시 반경</label>
        <input type="range" min={1} max={12} step={1} value={brushRadius}
          onChange={(e) => setBrushRadius(Number(e.target.value))} />
        <span className="slider-val">{brushRadius}</span>
      </div>
      <div className="slider-row">
        <label>브러시 강도</label>
        <input type="range" min={0.1} max={1} step={0.05} value={brushStrength}
          onChange={(e) => setBrushStrength(Number(e.target.value))} />
        <span className="slider-val">{Math.round(brushStrength * 100)}%</span>
      </div>
      {tool === 'placeBuilding' && (
        <>
          <div className="divider" />
          <div className="panel-title small">건물 종류</div>
          <div className="bld-grid">
            {(Object.keys(BUILDING_DEFS) as BuildingType[]).map((t) => (
              <button
                key={t}
                className={`tool-btn ${buildingType === t ? 'active' : ''}`}
                onClick={() => setBuildingType(t)}
                title={`${BUILDING_DEFS[t].name} — ${BUILDING_DEFS[t].desc} (비용: 목재 ${BUILDING_DEFS[t].cost.wood} 석재 ${BUILDING_DEFS[t].cost.stone})`}
              >
                <span>{BUILDING_DEFS[t].name}</span>
                <span className="bld-cost">
                  🪵{BUILDING_DEFS[t].cost.wood} 🪨{BUILDING_DEFS[t].cost.stone}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
      <div className="divider" />
      <div className="hint">{active?.hint ?? ''}</div>
      <div className="hint dim">Ctrl+Z 되돌리기 · Ctrl+Y 다시 실행 · Space 일시정지</div>
    </div>
  )
}

export function TopBar(): React.JSX.Element {
  const s = useUI((st) => st.stats)
  return (
    <div className="panel top-bar">
      <span>👥 인구 <b>{s.pop}</b>/{s.cap}</span>
      <span>🪵 목재 <b>{s.wood}</b></span>
      <span>🪨 석재 <b>{s.stone}</b></span>
      <span>🍖 식량 <b>{s.food}</b></span>
      <span>📅 {s.timeStr}</span>
      <span>🌦️ {s.weather}</span>
      <span>🌳 {s.trees}</span>
      <span>🏠 {s.buildings}{s.construction > 0 ? ` (+건설 ${s.construction})` : ''}</span>
    </div>
  )
}

export function PerfBar(): React.JSX.Element {
  const p = useUI((st) => st.perf)
  return (
    <div className="panel perf-bar">
      <span className={p.fpsAvg >= 55 ? 'good' : p.fpsAvg >= 30 ? 'warn' : 'bad'}>
        FPS {p.fpsAvg.toFixed(0)}
      </span>
      <span>1%Low {p.fpsLow.toFixed(0)}</span>
      <span>AI {p.aiMs.toFixed(1)}ms</span>
      <span>Draw {p.drawCalls}</span>
      <span>Heap {p.memMB}MB</span>
      <span>주민 {p.villagers} · 나무 {p.trees} · 건물 {p.buildings}</span>
    </div>
  )
}

export function RightPanel(): React.JSX.Element {
  const info = useUI((s) => s.selectedInfo)
  const showPath = useUI((s) => s.showPath)
  const setShowPath = useUI((s) => s.setShowPath)
  return (
    <div className="panel right-panel">
      <div className="panel-title">🔍 선택 정보</div>
      {!info && <div className="hint">월드에서 개체(주민/동물/건물/나무/바위)를 클릭하세요.</div>}
      {info && (
        <div className="sel-body">
          <div className="sel-title">{info.title}</div>
          <div className="sel-sub">{info.subtitle}</div>
          {info.rows.map((r) => (
            <div className="sel-row" key={r.k}>
              <span className="sel-k">{r.k}</span>
              <span className="sel-v">{r.v}</span>
            </div>
          ))}
          {info.bars.map((b) => (
            <div className="sel-bar" key={b.k}>
              <span className="sel-k">{b.k}</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${Math.min(100, b.v)}%`, background: b.color }} />
              </div>
              <span className="sel-v">{Math.round(b.v)}</span>
            </div>
          ))}
          {info.goal && <div className="sel-goal">🎯 목표: {info.goal}</div>}
          {info.reason && <div className="sel-reason">💡 선택 근거: {info.reason}</div>}
        </div>
      )}
      <div className="divider" />
      <label className="check-row">
        <input type="checkbox" checked={showPath} onChange={(e) => setShowPath(e.target.checked)} />
        경로 디버그 표시
      </label>
    </div>
  )
}

export function BottomBar(): React.JSX.Element {
  const speed = useUI((s) => s.speed)
  const setSpeed = useUI((s) => s.setSpeed)
  const saveStatus = useUI((s) => s.saveStatus)
  const loadTestNote = useUI((s) => s.loadTestNote)
  const fileRef = useRef<HTMLInputElement>(null)

  const togglePause = () => {
    const g = getGame()
    g.setSpeed(speed === 0 ? 1 : 0)
  }

  return (
    <div className="panel bottom-bar">
      <button className="btn primary" onClick={togglePause}>{speed === 0 ? '▶ 재생' : '⏸ 일시정지'}</button>
      {[1, 2, 4].map((s) => (
        <button key={s} className={`btn ${speed === s ? 'active' : ''}`} onClick={() => getGame().setSpeed(s)}>
          {s}x
        </button>
      ))}
      <span className="divider-v" />
      <button className="btn" onClick={() => void getGame().save(false)}>💾 저장</button>
      <button className="btn" onClick={() => void getGame().load()}>📂 불러오기</button>
      <button className="btn" onClick={() => void getGame().resetWorld()}>⏮ 초기화</button>
      <button className="btn" onClick={() => getGame().exportFile()}>⬇ JSON 내보내기</button>
      <button className="btn" onClick={() => fileRef.current?.click()}>⬆ JSON 가져오기</button>
      <input
        ref={fileRef}
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) void getGame().importFile(f)
          e.target.value = ''
        }}
      />
      <button className="btn" onClick={() => getGame().newWorld(Math.floor(Math.random() * 2147483647))}>🎲 새 월드</button>
      <button className="btn warn" onClick={() => getGame().spawnLoadTest()}>🧪 부하 테스트</button>
      <span className="save-status">{saveStatus}</span>
      {loadTestNote && <span className="load-note">{loadTestNote}</span>}
    </div>
  )
}

export function Toasts(): React.JSX.Element {
  const toasts = useUI((s) => s.toasts)
  const dropToast = useUI((s) => s.dropToast)
  useEffect(() => {
    if (toasts.length === 0) return
    const timers = toasts.map((t) => window.setTimeout(() => dropToast(t.id), 4200))
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [toasts, dropToast])
  return (
    <div className="toasts">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>{t.text}</div>
      ))}
    </div>
  )
}

export function HelpOverlay(): React.JSX.Element | null {
  const shown = useRef(false)
  useEffect(() => {
    shown.current = true
  }, [])
  void shown
  return null
}

export function getGameSafe(): Game | null {
  return getGameOrNull()
}
