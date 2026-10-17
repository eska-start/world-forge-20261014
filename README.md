# WORLD FORGE — 절차적 월드 & 생태계 시뮬레이터

Managed by AI Command Bridge

GitHub 기획서 "WORLD FORGE"의 구현: **시드 기반 절차적 섬 월드** 위에서 주민·동물이 유틸리티 AI로
자율 행동하고, 벌목→운반→건설, 화재 확산/소화, 비와 농사, 밤·낮 날씨가 굴러가는 3D 생태계 시뮬레이터.

## 스택

- TypeScript + Vite + React 19 (오버레이 UI) + three.js (렌더) + zustand (UI 상태)
- 시뮬 코어(`src/sim/*`)는 DOM/three에 의존 없는 순수 TS — Node에서 직접 테스트 가능
- 외부 LLM API 없음 — 로컬 유틸리티 AI/FSM만 사용
- 영속화: IndexedDB(`idb-keygen` 아님, 자체 래퍼) + JSON 내보내기/가져오기, 테스트는 fake-indexeddb

## 실행

```bash
npm install
npm run dev        # http://localhost:5173  (기본 시드 20261017, ?seed=로 변경)
npm run build      # tsc --noEmit && vite build → dist/
npm run preview    # 빌드 결과 서빙 (port 4173)
```

## 테스트

```bash
npm test           # vitest 전체 (41 tests / 7 files)
npx vitest run tests/stress.test.ts   # 부하: 주민 150 · 나무 2500 · 건물 120 기준 틱당 <8ms
npm run browser:check                 # 헤드리스 Edge 실사용 검증(사용자 흐름+FPS) → docs/browser-report.json
```

- `browser:check`는 로컬 Edge(`msedge.exe`)를 puppeteer-core로 구동해
  지형 편집→Undo→건물 배치→4x→저장→새로고침 복원→부하 생성→FPS 측정까지 사람이 하는 대로 확인하고
  스크린샷(`docs/screenshots/`)을 남긴다.

## 조작

- 좌클릭: 선택 / 배치 — 도구(지형 올·내리기, 물 채움/제거, 나무 심기/제거, 건물 배치, 주민·동물 생성, 삭제)
- 드래그: 브러시 연속 적용 — 브러시 크기·강도 좌측 패널 슬라이더
- `1/2/3`: 배속 1x/2x/4x · `Space`: 일시정지
- `Ctrl+Z / Ctrl+Y`: 되돌리기/다시 실행 (브러시 스트로크 단위)
- 오른쪽 패널: 주민/건물/나무 클릭 시 정보·경로 표시

## 검증 항목(기획서 대응)

| 항목 | 검증 위치 |
| --- | --- |
| 동일 시드 → 동일 월드 / 다른 시드 → 다른 월드 | `tests/worldgen.test.ts` |
| 지형 편집 → 경로/충돌 즉시 갱신, Undo/Redo | `tests/pathfinding.test.ts`, `tests/edits.test.ts` |
| 벌목→운반→창고→건설 완주, 식량 부족 시 행동 전환 | `tests/resources.test.ts` |
| AI 유틸리티 평가(평가/행동 분리) | `tests/ai.test.ts` |
| 일시정지/배속/고정 틱 | `tests/driver.test.ts` |
| 화재 확산·비 소화·비 농사 가속 | `tests/ai.test.ts` |
| 저장/로드 핵심 동일성(IDB·JSON) | `tests/persistence.test.ts` |
| 부하(150/2500/120) 성능 | `tests/stress.test.ts`, `docs/browser-report.json` |
