# 월드 포지 (World Forge) — 3D 절차적 월드 + 자율 생태계 시뮬레이터

시드 기반 절차적 3D 지형, 실시간 지형 편집, Utility AI 주민 10명+,
자원/건설 경제, 날씨·화재 생태계, 시간 제어·IndexedDB 영속화, 한글 UI.

## 실행 방법

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # vitest 22개 테스트
npm run build    # 프로덕션 빌드 (dist/)
npm run preview -- --port 4173
npm run verify:browser  # 헤드리스 Chrome 실측 ( repairs preview 필요)
```

## 조작

- 선택 모드: 좌클릭 선택, 우드래그 회전, 휠 줌
- 편집 도구: 올리기/내리기/평탄화/물파기(드래그), 심기/제거/건설/스폰(클릭)
- 하단: 일시정지·1x·2x·4x, 저장/불러오기, JSON 내보내기/가져오기, 부하테스트

## 구조

- `src/core/` — rng, noise(값 노이즈 fBm), terrain(시드 생성), pathfinding(A*+캐시), persistence(IndexedDB)
- `src/sim/` — store(zustand 월드 상태), villagerAI(Utility AI+FSM), environment(날씨/낮밤), simulation(고정 20Hz 루프)
- `src/render/WorldView.tsx` — Three.js 청크 지형, InstancedMesh 군집, 그림자, 비 파티클, 경로 표시
- `src/App.tsx` — 한글 UI 셸
- `tests/` — 지형/길찾기/경제/시간·저장 22개 테스트
- `scripts/` — 헤드리스 브라우저 검증 스크립트
- `screenshots/` — 실측 스크린샷
