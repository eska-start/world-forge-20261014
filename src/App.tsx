/* 한글 UI 셸: 상단 자원/날짜/FPS, 좌측 편집, 우측 상태, 하단 시간/저장 */
import { useEffect, useState } from 'react';
import WorldView from './render/WorldView';
import { useWorld } from './sim/store';
import { createSimLoop } from './sim/simulation';
import { downloadJson } from './core/persistence';
import type { ToolKind } from './sim/types';
import { BUILDING_DEFS } from './sim/types';

const TOOLS: { id: ToolKind; label: string }[] = [
  { id: 'select', label: '👆 선택' },
  { id: 'raise', label: '⛰ 올리기' },
  { id: 'lower', label: '🕳 내리기' },
  { id: 'flatten', label: '🟫 평탄화' },
  { id: 'water', label: '🌊 물파기' },
  { id: 'plantTree', label: '🌲 심기' },
  { id: 'removeVeg', label: '🪓 제거' },
  { id: 'buildHouse', label: '🏠 집' },
  { id: 'buildStorage', label: '📦 창고' },
  { id: 'buildFarm', label: '🌾 농장' },
  { id: 'buildLumber', label: '🪵 벌목장' },
  { id: 'buildQuarry', label: '⛏ 채석장' },
  { id: 'spawnVillager', label: '🧍 주민+' },
  { id: 'spawnAnimal', label: '🐇 동물+' },
  { id: 'fire', label: '🔥 화재' },
  { id: 'bulldoze', label: '💥 철거' },
];

function fmtTime(tod: number) {
  const h = Math.floor(tod);
  const m = Math.floor((tod - h) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export default function App() {
  const ready = useWorld((s) => s.ready);
  const [seedInput, setSeedInput] = useState('forge-1');
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    // 초기 월드: 저장본 있으면 복원, 없으면 신규
    useWorld.getState().initWorld('forge-1');
    useWorld.getState().load().then((ok) => {
      if (!ok) useWorld.getState().initWorld('forge-1');
      else setSeedInput(useWorld.getState().seed);
    });
    const stop = createSimLoop({ onFps: () => {} });
    return stop;
  }, []);

  if (!ready) return <div className="app"><div className="loading">월드 생성 중…</div></div>;

  return (
    <div className="app">
      <TopBar />
      <div className="main">
        <LeftPanel seedInput={seedInput} setSeedInput={setSeedInput} />
        <div className="center">
          <WorldView />
        </div>
        <RightPanel />
      </div>
      <BottomBar showHelp={showHelp} setShowHelp={setShowHelp} />
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

function TopBar() {
  const resources = useWorld((s) => s.resources);
  const env = useWorld((s) => s.env);
  const fps = useWorld((s) => s.fps);
  const aiMs = useWorld((s) => s.aiMs);
  const villagers = useWorld((s) => s.villagers);
  const simTime = useWorld((s) => s.simTime);
  return (
    <div className="topbar">
      <span style={{ fontWeight: 800 }}>🌍 월드 포지</span>
      <span>👥 인구 <b>{villagers.length}</b> / 주택 {resources.housing}</span>
      <span>🪵 목재 <b>{Math.floor(resources.wood)}</b></span>
      <span>⛏ 석재 <b>{Math.floor(resources.stone)}</b></span>
      <span>🌾 식량 <b>{Math.floor(resources.food)}</b>/{resources.capacity}</span>
      <span>📅 {env.day}일차 {fmtTime(env.timeOfDay)}</span>
      <span>🌤 {env.weather}</span>
      <span>⏱ {Math.floor(simTime)}초</span>
      <span style={{ marginLeft: 'auto' }}>🎞 {fps} FPS · AI {aiMs.toFixed(1)}ms</span>
    </div>
  );
}

function LeftPanel({ seedInput, setSeedInput }: { seedInput: string; setSeedInput: (s: string) => void }) {
  const tool = useWorld((s) => s.tool);
  const setTool = useWorld((s) => s.setTool);
  const brushRadius = useWorld((s) => s.brushRadius);
  const brushStrength = useWorld((s) => s.brushStrength);
  const setBrush = useWorld((s) => s.setBrush);
  const terrain = useWorld((s) => s.terrain);
  const notice = useWorld((s) => s.notice);
  const undo = useWorld((s) => s.undo);
  const redo = useWorld((s) => s.redo);
  return (
    <div className="left">
      <div className="section-title">씨드 기반 지형</div>
      <div className="row">
        <input type="text" value={seedInput} onChange={(e) => setSeedInput(e.target.value)} />
      </div>
      <div className="row">
        <button className="btn primary" style={{ flex: 1 }} onClick={() => useWorld.getState().initWorld(seedInput || 'forge-1')}>🌱 생성</button>
        <button className="btn" onClick={() => { setSeedInput(`forge-${Math.floor(Math.random() * 99999)}`); }}>🎲</button>
      </div>
      <div className="row"><label style={{ width: 70 }}>크기 {terrain.size}</label></div>
      <div className="row">
        {[64, 96, 128].map((sz) => (
          <button key={sz} className="btn" style={terrain.size === sz ? { borderColor: '#3b82f6' } : {}} onClick={() => useWorld.getState().initWorld(useWorld.getState().seed, { ...terrain, size: sz })}>{sz}</button>
        ))}
      </div>
      <div className="section-title">편집 도구</div>
      <div className="tool-grid">
        {TOOLS.map((t) => (
          <button key={t.id} className={'tool-btn' + (tool === t.id ? ' active' : '')} onClick={() => setTool(t.id)}>{t.label}</button>
        ))}
      </div>
      <div className="section-title">브러시 반경 {brushRadius} · 강도 {Math.round(brushStrength * 100)}%</div>
      <input type="range" min={1} max={10} value={brushRadius} onChange={(e) => setBrush(Number(e.target.value), brushStrength)} />
      <input type="range" min={5} max={100} value={Math.round(brushStrength * 100)} onChange={(e) => setBrush(brushRadius, Number(e.target.value) / 100)} />
      <div className="row">
        <button className="btn" style={{ flex: 1 }} onClick={undo}>↩ Undo</button>
        <button className="btn" style={{ flex: 1 }} onClick={redo}>↪ Redo</button>
      </div>
      <div className="card">
        <h4>🏗 건설비</h4>
        {Object.entries(BUILDING_DEFS).map(([k, d]) => (
          <div className="kv" key={k}><span>{d.name}</span><span>🪵{d.wood} ⛏{d.stone}</span></div>
        ))}
      </div>
      {notice && <div className="notice">{notice}</div>}
      <div className="card" style={{ fontSize: 12, color: '#8fa3c0' }}>
        편집 도구를 고른 뒤 3D 월드를 드래그/클릭하세요. 선택 모드에서는 좌클릭=선택, 우드래그=회전, 휠=줌입니다.
      </div>
    </div>
  );
}

function RightPanel() {
  const selection = useWorld((s) => s.selection);
  const villagers = useWorld((s) => s.villagers);
  const buildings = useWorld((s) => s.buildings);
  const animals = useWorld((s) => s.animals);
  const trees = useWorld((s) => s.trees);
  const fires = useWorld((s) => s.fires);
  const setSelection = useWorld((s) => s.setSelection);
  const showPaths = useWorld((s) => s.showPaths);
  const togglePaths = useWorld((s) => s.togglePaths);
  const [filter, setFilter] = useState('');

  const selVillager = selection?.kind === 'villager' ? villagers.find((v) => v.id === selection.id) : null;
  const selBuilding = selection?.kind === 'building' ? buildings.find((b) => b.id === selection.id) : null;
  const selAnimal = selection?.kind === 'animal' ? animals.find((a) => a.id === selection.id) : null;

  const list = villagers.filter((v) => !filter || v.name.includes(filter) || v.job.includes(filter) || v.action.includes(filter)).slice(0, 60);

  return (
    <div className="right">
      <div className="section-title">선택 개체 상태</div>
      {!selection && <div className="card">3D 월드의 주민·건물을 클릭하세요. (도구: 선택)</div>}
      {selVillager && (
        <div className="card">
          <h4>🧍 {selVillager.name} (#{selVillager.id})</h4>
          <div className="kv"><span>직업</span><span>{selVillager.job}</span></div>
          <div className="kv"><span>행동</span><span>{selVillager.action}</span></div>
          <div className="kv"><span>위치</span><span>({selVillager.x.toFixed(1)}, {selVillager.z.toFixed(1)})</span></div>
          <div style={{ margin: '6px 0', background: '#0f1520', padding: 6, borderRadius: 6 }}>💭 {selVillager.reason}</div>
          <Stat label="배고픔(포만)" v={selVillager.hunger} color="#4c9a3f" />
          <Stat label="피로" v={selVillager.fatigue} color="#bf7a3f" />
          <Stat label="체력" v={selVillager.health} color="#d64545" />
          <div className="kv"><span>운반</span><span>🪵{selVillager.carry.wood} ⛏{selVillager.carry.stone} 🌾{selVillager.carry.food}</span></div>
          <div className="kv"><span>경로</span><span>{selVillager.path.length - selVillager.pathIdx} 구간 남음</span></div>
        </div>
      )}
      {selBuilding && (
        <div className="card">
          <h4>🏠 {BUILDING_DEFS[selBuilding.kind].name} (#{selBuilding.id})</h4>
          <div className="kv"><span>상태</span><span>{selBuilding.complete ? '완성 ✅' : `건설 중 ${Math.round(selBuilding.progress * 100)}%`}</span></div>
          <div className="kv"><span>위치</span><span>({selBuilding.x.toFixed(1)}, {selBuilding.z.toFixed(1)})</span></div>
          <div style={{ color: '#8fa3c0' }}>{BUILDING_DEFS[selBuilding.kind].desc}</div>
        </div>
      )}
      {selAnimal && (
        <div className="card">
          <h4>🐇 동물 #{selAnimal.id} ({selAnimal.kind})</h4>
          <div className="kv"><span>위치</span><span>({selAnimal.x.toFixed(1)}, {selAnimal.z.toFixed(1)})</span></div>
        </div>
      )}
      <div className="row">
        <button className="btn" style={{ flex: 1 }} onClick={togglePaths}>{showPaths ? '🛤 경로 숨기기' : '🛤 경로 표시'}</button>
      </div>
      <div className="section-title">주민 목록 ({villagers.length}) · 나무 {trees.filter((t) => t.alive).length} · 화재 {fires.length}</div>
      <input type="text" placeholder="이름/직업/행동 검색" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <div style={{ marginTop: 6 }}>
        {list.map((v) => (
          <div key={v.id} className={'villager-row' + (selection?.kind === 'villager' && selection.id === v.id ? ' selected' : '')} onClick={() => setSelection({ kind: 'villager', id: v.id })}>
            <div>🧍 {v.name} · {v.job} · <b>{v.action}</b></div>
            <div style={{ fontSize: 11, color: '#8fa3c0' }}>{v.reason}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, v, color }: { label: string; v: number; color: string }) {
  return (
    <div style={{ margin: '3px 0' }}>
      <div className="kv"><span>{label}</span><span>{Math.round(v)}</span></div>
      <div className="bar"><div style={{ width: `${Math.max(0, Math.min(100, v))}%`, background: color }} /></div>
    </div>
  );
}

function BottomBar({ showHelp, setShowHelp }: { showHelp: boolean; setShowHelp: (b: boolean) => void }) {
  const speed = useWorld((s) => s.speed);
  const setSpeed = useWorld((s) => s.setSpeed);
  const save = useWorld((s) => s.save);
  const load = useWorld((s) => s.load);
  const reset = useWorld((s) => s.reset);
  const exportJson = useWorld((s) => s.exportJson);
  const importJson = useWorld((s) => s.importJson);
  const addLoad = useWorld((s) => s.addLoadTestPopulation);
  const trees = useWorld((s) => s.trees);
  const villagers = useWorld((s) => s.villagers);
  const buildings = useWorld((s) => s.buildings);
  return (
    <div className="bottombar">
      <button className={'btn' + (speed === 0 ? ' primary' : '')} onClick={() => setSpeed(0)}>⏸ 일시정지</button>
      {([1, 2, 4] as const).map((x) => (
        <button key={x} className={'btn' + (speed === x ? ' primary' : '')} onClick={() => setSpeed(x)}>{x}x</button>
      ))}
      <button className="btn" onClick={() => reset()}>🔄 초기화</button>
      <button className="btn" onClick={() => save()}>💾 저장</button>
      <button className="btn" onClick={() => load()}>📂 불러오기</button>
      <button className="btn" onClick={() => downloadJson(`world-forge-${Date.now()}.json`, exportJson())}>📤 JSON 내보내기</button>
      <label className="btn" style={{ cursor: 'pointer' }}>📥 JSON 가져오기<input type="file" accept=".json" style={{ display: 'none' }} onChange={(e) => {
        const f = e.target.files?.[0];
        if (!f) return;
        f.text().then((t) => {
          try {
            const ok = importJson(JSON.parse(t) as Record<string, unknown>);
            useWorld.getState().setNotice(ok ? 'JSON 가져오기 완료' : 'JSON 형식 오류');
          } catch { useWorld.getState().setNotice('JSON 파싱 실패'); }
        });
      }} /></label>
      <button className="btn" onClick={() => addLoad(90, 1500)}>⚡ 부하테스트 +90명/+1500그루</button>
      <span style={{ color: '#8fa3c0' }}>주민 {villagers.length} · 나무 {trees.filter((t) => t.alive).length} · 건물 {buildings.length}</span>
      <button className="btn" style={{ marginLeft: 'auto' }} onClick={() => setShowHelp(!showHelp)}>❓ 도움말</button>
    </div>
  );
}

function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }} onClick={onClose}>
      <div className="card" style={{ maxWidth: 560, padding: 18 }} onClick={(e) => e.stopPropagation()}>
        <h4>❓ 월드 포지 조작법</h4>
        <div style={{ fontSize: 13, lineHeight: 1.7 }}>
          • <b>선택 모드</b>: 좌클릭으로 주민/건물 선택, 우드래그 회전, 휠 줌, 우클릭+드래그 팬.<br />
          • <b>편집 모드</b>(올리기/내리기/평탄화/물파기): 드래그로 지형 변형, Undo/Redo 지원. 지형 변경 시 길찾기가 자동 갱신됩니다.<br />
          • <b>건설</b>: 집/창고/농장/벌목장/채석장을 클릭 배치. 착공 시 자원이 소모되고 주민이 와서 짓습니다.<br />
          • <b>주민 AI</b>: Utility AI가 배고픔·피로·비축량을 보고 벌목/채석/채집/운반/건설/휴식/회피를 고릅니다. 선택 시 근거가 한글로 표시됩니다.<br />
          • <b>재난</b>: 🔥 도구로 화재를 내면 주변 나무로 번지고, 비가 오면 꺼집니다. 주민은 자동 회피합니다.<br />
          • <b>시간/저장</b>: 일시정지·1x·2x·4x, IndexedDB 자동 저장/복원, JSON 내보내기/가져오기.<br />
          • 로컬 실행: <code>npm install; npm run dev</code> → http://localhost:5173
        </div>
        <div className="row"><button className="btn primary" onClick={onClose}>닫기</button></div>
      </div>
    </div>
  );
}
