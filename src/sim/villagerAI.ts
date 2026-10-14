/* 주민 AI: Utility AI 점수 + FSM 실행. 실제 자원 소모/획득. 순간이동 금지. */
import { findPath, invalidatePathCache } from '../core/pathfinding';
import type { VillagerEnt, TreeEnt, RockEnt, BushEnt, BuildingEnt, Resources, AnimalEnt, FireEnt, EnvState } from './types';

export interface SimCtx {
  size: number;
  heights: Float32Array;
  waterLevel: number;
  blocked: Uint8Array;
  trees: TreeEnt[]; rocks: RockEnt[]; bushes: BushEnt[];
  buildings: BuildingEnt[]; villagers: VillagerEnt[]; animals: AnimalEnt[]; fires: FireEnt[];
  resources: Resources; env: EnvState; simTime: number;
}

export interface AiResult {
  villagers: VillagerEnt[]; trees: TreeEnt[]; rocks: RockEnt[]; bushes: BushEnt[];
  buildings: BuildingEnt[]; resources: Resources;
}

function dist(ax: number, az: number, bx: number, bz: number) {
  return Math.hypot(ax - bx, az - bz);
}

function nearestFire(v: VillagerEnt, fires: FireEnt[]): FireEnt | null {
  let best: FireEnt | null = null;
  let bd = 7;
  for (const f of fires) {
    const d = dist(v.x, v.z, f.x, f.z);
    if (d < bd) { bd = d; best = f; }
  }
  return best;
}

function findNearestTree(v: VillagerEnt, trees: TreeEnt[]): TreeEnt | null {
  let best: TreeEnt | null = null;
  let bd = Infinity;
  for (const t of trees) {
    if (!t.alive || t.growth < 0.6) continue;
    const d = dist(v.x, v.z, t.x, t.z);
    if (d < bd) { bd = d; best = t; }
  }
  return best;
}

function findNearestRock(v: VillagerEnt, rocks: RockEnt[]): RockEnt | null {
  let best: RockEnt | null = null;
  let bd = Infinity;
  for (const r of rocks) {
    if (!r.alive || r.amount <= 0) continue;
    const d = dist(v.x, v.z, r.x, r.z);
    if (d < bd) { bd = d; best = r; }
  }
  return best;
}

function findNearestFood(v: VillagerEnt, bushes: BushEnt[], farms: BuildingEnt[]): { x: number; z: number; bushId?: number; farmId?: number } | null {
  let best: { x: number; z: number; bushId?: number; farmId?: number } | null = null;
  let bd = Infinity;
  for (const b of bushes) {
    if (!b.alive || b.food <= 0) continue;
    const d = dist(v.x, v.z, b.x, b.z);
    if (d < bd) { bd = d; best = { x: b.x, z: b.z, bushId: b.id }; }
  }
  for (const f of farms) {
    if (!f.complete) continue;
    const d = dist(v.x, v.z, f.x, f.z);
    if (d < bd * 0.8) { bd = d; best = { x: f.x + 1.5, z: f.z + 1.5, farmId: f.id }; }
  }
  return best;
}

function findWorkSite(buildings: BuildingEnt[]): BuildingEnt | null {
  let best: BuildingEnt | null = null;
  for (const b of buildings) {
    if (b.complete) continue;
    if (!best || b.progress > best.progress) best = b; // 거의 다 된 곳 협력
  }
  return best;
}

function storageOf(buildings: BuildingEnt[], v: VillagerEnt): BuildingEnt | null {
  let best: BuildingEnt | null = null;
  let bd = Infinity;
  for (const b of buildings) {
    if (!b.complete) continue;
    if (b.kind !== 'storage' && b.kind !== 'house') continue;
    const d = dist(v.x, v.z, b.x, b.z);
    if (d < bd) { bd = d; best = b; }
  }
  return best ?? buildings.find((b) => b.complete) ?? null;
}

function ensurePath(ctx: SimCtx, v: VillagerEnt, tx: number, tz: number): boolean {
  if (v.targetX !== null && Math.abs(v.targetX - tx) < 0.5 && v.targetZ !== null && Math.abs(v.targetZ - tz) < 0.5 && v.pathIdx < v.path.length) {
    return true;
  }
  const res = findPath(
    { size: ctx.size, heights: ctx.heights, waterLevel: ctx.waterLevel, blocked: ctx.blocked },
    v.x, v.z, tx, tz,
  );
  if (!res) {
    // 직행 시도 (근거리만)
    if (dist(v.x, v.z, tx, tz) < 3) {
      v.path = [{ x: tx, z: tz }];
      v.pathIdx = 0;
      v.targetX = tx; v.targetZ = tz;
      return true;
    }
    return false;
  }
  v.path = res.path;
  v.pathIdx = 0;
  v.targetX = tx; v.targetZ = tz;
  return true;
}

function moveAlong(v: VillagerEnt, dt: number): boolean {
  // true = 도착
  if (v.pathIdx >= v.path.length) return true;
  let remaining = v.speed * dt;
  let guard = 0;
  while (remaining > 0 && v.pathIdx < v.path.length && guard++ < 4) {
    const p = v.path[v.pathIdx];
    const d = dist(v.x, v.z, p.x, p.z);
    if (d < 0.15) { v.pathIdx++; continue; }
    const step = Math.min(remaining, d);
    v.x += ((p.x - v.x) / d) * step;
    v.z += ((p.z - v.z) / d) * step;
    remaining -= step;
    if (step >= d - 1e-6) v.pathIdx++;
    else break;
  }
  return v.pathIdx >= v.path.length;
}

export function scoreActions(v: VillagerEnt, ctx: SimCtx): { action: VillagerEnt['action']; score: number; reason: string }[] {
  const out: { action: VillagerEnt['action']; score: number; reason: string }[] = [];
  const fire = nearestFire(v, ctx.fires);
  const incomplete = ctx.buildings.filter((b) => !b.complete).length;
  const carrying = v.carry.wood + v.carry.stone + v.carry.food;
  out.push({ action: '회피', score: fire ? 100 : 0, reason: fire ? `화재 발생 (${Math.round(dist(v.x, v.z, fire.x, fire.z))}칸) — 안전지대로 대피` : '' });
  out.push({ action: '식사', score: v.hunger < 25 ? 95 : v.hunger < 45 ? 60 : v.hunger < 60 && ctx.resources.food > 5 ? 25 : 0, reason: `배고픔 ${Math.round(v.hunger)} — 식량 섭취 필요` });
  out.push({ action: '휴식', score: v.fatigue > 85 ? 80 : v.fatigue > 65 ? 45 : v.fatigue > 50 ? 15 : 0, reason: `피로도 ${Math.round(v.fatigue)} — 휴식 필요` });
  out.push({ action: '운반', score: carrying >= v.carryCap * 0.7 ? 85 : carrying > 0 && incomplete === 0 ? 70 : carrying > 0 ? 55 : 0, reason: `적재 ${carrying}/${v.carryCap} — 창고로 운반` });
  out.push({ action: '건설', score: incomplete > 0 ? (v.job === '건설자' ? 75 : 60) + (carrying > 0 ? -20 : 0) : 0, reason: `미완성 건물 ${incomplete}채 — 건설 지원` });
  const woodNeed = ctx.resources.wood < 30;
  const stoneNeed = ctx.resources.stone < 20;
  const foodNeed = ctx.resources.food < ctx.villagers.length * 4;
  out.push({ action: '벌목', score: v.carry.wood + v.carry.stone + v.carry.food > 0 ? 0 : woodNeed ? (v.job === '목수' ? 65 : 50) : 30, reason: `비축 목재 ${Math.floor(ctx.resources.wood)} — 벌목 필요` });
  out.push({ action: '채석', score: v.carry.wood + v.carry.stone + v.carry.food > 0 ? 0 : stoneNeed ? (v.job === '석공' ? 65 : 50) : 25, reason: `비축 석재 ${Math.floor(ctx.resources.stone)} — 채석 필요` });
  out.push({ action: '식량탐색', score: v.carry.wood + v.carry.stone + v.carry.food > 0 ? 0 : foodNeed || v.hunger < 70 ? (v.job === '농부' ? 70 : 55) : 20, reason: `비축 식량 ${Math.floor(ctx.resources.food)} — 식량 확보` });
  out.push({ action: '농사', score: ctx.buildings.some((b) => b.kind === 'farm' && b.complete) && carrying === 0 ? 35 : 0, reason: '농장에서 작물 수확' });
  out.push({ action: '귀가', score: ctx.env.timeOfDay < 5 || ctx.env.timeOfDay > 21 ? 40 : 0, reason: '심야 — 마을로 복귀' });
  out.push({ action: '대기', score: 5, reason: '할 일이 없어 대기' });
  return out.sort((a, b) => b.score - a.score);
}

export function tickVillagers(ctx: SimCtx, dt: number, tickCount: number): AiResult {
  // 분산 추론: 매 틱 전수 이동, 의사결정은 (tick + id) % 5 === 0 인 주민만 재평가 ( 대규모 최적화 )
  const villagers: VillagerEnt[] = ctx.villagers.map((v) => ({
    ...v, path: [...v.path], carry: { ...v.carry },
  }));
  let trees: TreeEnt[] = ctx.trees.map((t) => ({ ...t }));
  let rocks: RockEnt[] = ctx.rocks.map((r) => ({ ...r }));
  let bushes: BushEnt[] = ctx.bushes.map((b) => ({ ...b }));
  let buildings: BuildingEnt[] = ctx.buildings.map((b) => ({ ...b, required: { ...b.required }, delivered: { ...b.delivered } }));
  const resources: Resources = { ...ctx.resources };
  const deadVillagers = new Set<number>();
  const felledTrees = new Set<number>();
  const depletedRocks = new Set<number>();

  const lumberBonus = buildings.some((b) => b.kind === 'lumber' && b.complete) ? 1.5 : 1;
  const quarryBonus = buildings.some((b) => b.kind === 'quarry' && b.complete) ? 1.5 : 1;

  for (const v of villagers) {
    // 생리 tick
    v.hunger = Math.max(0, v.hunger - dt * 0.55);
    if (v.action === '휴식') v.fatigue = Math.max(0, v.fatigue - dt * 9);
    else v.fatigue = Math.min(100, v.fatigue + dt * 0.5);
    if (v.hunger <= 0) v.health = Math.max(0, v.health - dt * 2.5);
    else if (v.hunger > 50 && v.fatigue < 70) v.health = Math.min(100, v.health + dt * 1.2);
    // 화재 피해
    const fire = nearestFire(v, ctx.fires);
    if (fire && dist(v.x, v.z, fire.x, fire.z) < 2.5) v.health = Math.max(0, v.health - dt * 12);
    if (v.health <= 0) { deadVillagers.add(v.id); continue; }

    const rethink = (tickCount + v.id) % 5 === 0 || v.action === '대기' || v.pathIdx >= v.path.length;
    if (rethink && v.action !== '운반' /* 운반 중 재평가 억제(왕복 보장) */) {
      const ranked = scoreActions(v, { ...ctx, resources, villagers, buildings });
      const top = ranked[0];
      if (top.action !== v.action && top.score > 10) {
        v.action = top.action === '이동' ? '대기' : top.action;
        v.reason = top.reason || `${top.action} 선택 (점수 ${Math.round(top.score)})`;
        v.targetX = null; v.targetZ = null; v.path = []; v.pathIdx = 0;
      } else if (v.action === '대기') {
        v.reason = top.reason;
      }
    }
    // 운반 완료 후에는 강제 재평가
    if (v.action === '운반' && v.carry.wood + v.carry.stone + v.carry.food <= 0) {
      const ranked = scoreActions(v, { ...ctx, resources, villagers, buildings });
      v.action = ranked[0].action;
      v.reason = ranked[0].reason;
      v.path = []; v.pathIdx = 0; v.targetX = null; v.targetZ = null;
    }

    switch (v.action) {
      case '회피': {
        const f = nearestFire(v, ctx.fires);
        if (!f) { v.action = '대기'; v.reason = '위험 해소 — 복귀'; break; }
        const dx = v.x - f.x;
        const dz = v.z - f.z;
        const d = Math.max(0.001, Math.hypot(dx, dz));
        const tx = Math.max(1, Math.min(ctx.size - 2, v.x + (dx / d) * 8));
        const tz = Math.max(1, Math.min(ctx.size - 2, v.z + (dz / d) * 8));
        v.reason = `화재 회피 중 — (${Math.round(tx)}, ${Math.round(tz)})로 대피`;
        if (ensurePath(ctx, v, tx, tz)) moveAlong(v, dt);
        else { v.x = tx; v.z = tz; v.path = []; }
        break;
      }
      case '식사': {
        if (v.carry.food > 0) {
          const eat = Math.min(v.carry.food, 5);
          v.carry.food -= eat;
          v.hunger = Math.min(100, v.hunger + eat * 7);
          v.health = Math.min(100, v.health + eat * 1.5);
          v.reason = `휴대 식량 섭취 (+${eat * 7} 포만)`;
          if (v.carry.food <= 0 && v.hunger > 60) { v.action = '대기'; v.path = []; }
        } else if (resources.food >= 5) {
          const store = storageOf(buildings, v);
          if (store && dist(v.x, v.z, store.x, store.z) > 2) {
            v.reason = `창고에서 식량 수령 이동 중 (비축 ${Math.floor(resources.food)})`;
            if (ensurePath(ctx, v, store.x + 1, store.z + 1)) {
              if (moveAlong(v, dt)) {
                resources.food -= 5;
                v.hunger = Math.min(100, v.hunger + 35);
                v.reason = '창고 식량 섭취 (포만 +35)';
                if (v.hunger > 60) v.action = '대기';
              }
            }
          } else {
            resources.food -= 5;
            v.hunger = Math.min(100, v.hunger + 35);
            v.reason = '창고 식량 섭취 (포만 +35)';
            if (v.hunger > 60) v.action = '대기';
          }
        } else {
          // 비축 고갈 → 직접 탐색 전환
          v.action = '식량탐색';
          v.reason = `비축 식량 고갈(${Math.floor(resources.food)}) — 직접 채집 전환`;
          v.path = []; v.targetX = null;
        }
        break;
      }
      case '휴식': {
        const home = buildings.find((b) => b.id === v.homeId && b.complete) ?? storageOf(buildings, v);
        if (home && dist(v.x, v.z, home.x, home.z) > 3) {
          v.reason = `휴식 위해 귀가 중 (피로 ${Math.round(v.fatigue)})`;
          if (ensurePath(ctx, v, home.x + 1, home.z)) moveAlong(v, dt);
        } else {
          v.reason = `휴식 중 (피로 ${Math.round(v.fatigue)} → 회복)`;
          if (v.fatigue <= 5) { v.action = '대기'; v.reason = '휴식 완료 — 복귀'; }
        }
        break;
      }
      case '벌목': {
        const t = findNearestTree(v, trees);
        if (!t) {
          // 할 일 없음 → 건설/대기
          const site = findWorkSite(buildings);
          if (site) { v.action = '건설'; v.reason = '벌목할 나무 없음 — 건설 지원'; }
          else { v.action = '대기'; v.reason = '성숙한 나무 없음 — 대기'; v.idleTicks++; }
          v.path = [];
          break;
        }
        if (dist(v.x, v.z, t.x, t.z) > 1.6) {
          v.reason = `벌목 이동 중 → 나무 #${t.id} (${Math.round(dist(v.x, v.z, t.x, t.z))}칸)`;
          if (!ensurePath(ctx, v, t.x, t.z)) { v.reason = '도달 불가 나무 — 다른 나무 탐색'; v.targetX = null; v.path = []; break; }
          moveAlong(v, dt);
        } else {
          v.fatigue = Math.min(100, v.fatigue + dt * 2);
          v.reason = `벌목 중 — 나무 #${t.id}`;
          // 작업 진척을 hunger처럼 누적: idleTicks를 진척도로 재활용
          v.idleTicks += dt * lumberBonus;
          if (v.idleTicks > 3) {
            v.idleTicks = 0;
            felledTrees.add(t.id);
            const gain = Math.min(v.carryCap - v.carry.wood, 5);
            v.carry.wood += gain;
            v.reason = `벌목 완료 — 목재 +${gain} 획득`;
            v.action = '운반';
            v.path = []; v.targetX = null;
          }
        }
        break;
      }
      case '채석': {
        const r = findNearestRock(v, rocks);
        if (!r) {
          const site = findWorkSite(buildings);
          if (site) { v.action = '건설'; v.reason = '채석할 바위 없음 — 건설 지원'; }
          else { v.action = '대기'; v.reason = '채석할 바위 없음 — 대기'; }
          v.path = [];
          break;
        }
        if (dist(v.x, v.z, r.x, r.z) > 1.6) {
          v.reason = `채석 이동 중 → 바위 #${r.id}`;
          if (!ensurePath(ctx, v, r.x, r.z)) { v.targetX = null; v.path = []; break; }
          moveAlong(v, dt);
        } else {
          v.fatigue = Math.min(100, v.fatigue + dt * 2);
          v.reason = `채석 중 — 바위 #${r.id} (잔량 ${r.amount})`;
          v.idleTicks += dt * quarryBonus;
          if (v.idleTicks > 3) {
            v.idleTicks = 0;
            const take = Math.min(r.amount, 4, v.carryCap - v.carry.stone);
            r.amount -= take;
            v.carry.stone += take;
            if (r.amount <= 0) { r.alive = false; depletedRocks.add(r.id); }
            v.reason = `채석 완료 — 석재 +${take} 획득`;
            v.action = '운반';
            v.path = []; v.targetX = null;
          }
        }
        break;
      }
      case '식량탐색':
      case '농사': {
        const farms = buildings.filter((b) => b.kind === 'farm' && b.complete);
        const spot = findNearestFood(v, bushes, farms);
        if (!spot) {
          v.action = '대기';
          v.reason = '채집할 식량 없음 — 대기 (기근 주의)';
          v.path = [];
          break;
        }
        if (dist(v.x, v.z, spot.x, spot.z) > 1.6) {
          v.reason = `식량 확보 이동 중 (${Math.round(dist(v.x, v.z, spot.x, spot.z))}칸)`;
          if (!ensurePath(ctx, v, spot.x, spot.z)) { v.targetX = null; v.path = []; break; }
          moveAlong(v, dt);
        } else if (spot.bushId != null) {
          const b = bushes.find((x) => x.id === spot.bushId);
          if (b && b.food > 0) {
            v.idleTicks += dt;
            v.reason = `열매 채집 중 — 덤불 #${b.id}`;
            if (v.idleTicks > 2) {
              v.idleTicks = 0;
              const take = Math.min(b.food, 4, v.carryCap - v.carry.food);
              b.food -= take;
              v.carry.food += take;
              v.reason = `채집 완료 — 식량 +${take}`;
              v.action = take > 0 ? '운반' : '대기';
              v.path = []; v.targetX = null;
            }
          } else { v.path = []; v.targetX = null; }
        } else {
          // 농장 수확: 즉시 휴대 +2, 쿨다운은 idleTicks
          v.idleTicks += dt;
          v.reason = '농장 수확 중';
          if (v.idleTicks > 2.5) {
            v.idleTicks = 0;
            const take = Math.min(6, v.carryCap - v.carry.food);
            v.carry.food += take;
            v.reason = `농장 수확 — 식량 +${take}`;
            v.action = '운반';
            v.path = []; v.targetX = null;
          }
        }
        break;
      }
      case '운반': {
        const store = storageOf(buildings, v);
        if (!store) { v.action = '대기'; v.reason = '창고 없음 — 대기'; break; }
        if (dist(v.x, v.z, store.x, store.z) > 2.2) {
          v.reason = `운반 중 → 창고 (목${v.carry.wood} 석${v.carry.stone} 식${v.carry.food})`;
          if (!ensurePath(ctx, v, store.x + 1, store.z + 1)) {
            // 경로 없음 → 그 자리에서 하역 (유실 방지: 자원은 그대로 비축 반영)
            resources.wood = Math.min(resources.capacity, resources.wood + v.carry.wood);
            resources.stone = Math.min(resources.capacity, resources.stone + v.carry.stone);
            resources.food = Math.min(resources.capacity, resources.food + v.carry.food);
            v.reason = '경로 차단 — 현장 하역(창고 외 비축 반영)';
            v.carry = { wood: 0, stone: 0, food: 0 };
            v.action = '대기';
            break;
          }
          moveAlong(v, dt);
        } else {
          resources.wood = Math.min(resources.capacity, resources.wood + v.carry.wood);
          resources.stone = Math.min(resources.capacity, resources.stone + v.carry.stone);
          resources.food = Math.min(resources.capacity, resources.food + v.carry.food);
          v.reason = `하역 완료 (목+${v.carry.wood} 석+${v.carry.stone} 식+${v.carry.food}) → 창고 반영`;
          v.carry = { wood: 0, stone: 0, food: 0 };
          v.action = '대기';
          v.path = []; v.targetX = null;
        }
        break;
      }
      case '건설': {
        const site = findWorkSite(buildings);
        if (!site) { v.action = '대기'; v.reason = '건설할 건물 없음'; break; }
        if (dist(v.x, v.z, site.x, site.z) > 2.6) {
          v.reason = `${site.kind} 건설 현장으로 이동 중 (진척 ${Math.round(site.progress * 100)}%)`;
          if (!ensurePath(ctx, v, site.x + 2, site.z)) { v.targetX = null; v.path = []; break; }
          moveAlong(v, dt);
        } else {
          v.fatigue = Math.min(100, v.fatigue + dt * 1.5);
          const rate = (v.job === '건설자' ? 1.6 : 1) / 30;
          site.progress = Math.min(1, site.progress + rate * dt * 10 * 0.3);
          v.reason = `건설 중 — ${site.kind} ${Math.round(site.progress * 100)}% (작업자 ${v.name})`;
          if (site.progress >= 1) {
            site.complete = true;
            v.reason = `${site.kind} 완성!`;
            v.action = '대기';
            v.path = [];
          }
        }
        break;
      }
      case '귀가': {
        const home = buildings.find((b) => b.id === v.homeId && b.complete) ?? storageOf(buildings, v);
        if (home && dist(v.x, v.z, home.x, home.z) > 3) {
          v.reason = '심야 — 마을로 복귀 중';
          if (ensurePath(ctx, v, home.x + 1, home.z)) moveAlong(v, dt);
        } else {
          v.reason = '마을에서 대기 중 (심야)';
          v.fatigue = Math.max(0, v.fatigue - dt * 3);
        }
        break;
      }
      default: { // 대기
        v.idleTicks += dt;
        if (v.idleTicks > 2) {
          v.idleTicks = 0;
          const ranked = scoreActions(v, { ...ctx, resources, villagers, buildings });
          if (ranked[0].score > 10) {
            v.action = ranked[0].action;
            v.reason = ranked[0].reason;
            v.path = []; v.targetX = null;
          } else {
            // 가벼운 배회
            const tx = Math.max(1, Math.min(ctx.size - 2, v.x + (Math.random() - 0.5) * 6));
            const tz = Math.max(1, Math.min(ctx.size - 2, v.z + (Math.random() - 0.5) * 6));
            if (ensurePath(ctx, v, tx, tz)) {
              v.reason = '주변 순찰 중';
              moveAlong(v, dt * 0.4);
            }
          }
        }
        break;
      }
    }
    // 월드 경계/물 진입 방지 클램프
    v.x = Math.max(0.5, Math.min(ctx.size - 1.5, v.x));
    v.z = Math.max(0.5, Math.min(ctx.size - 1.5, v.z));
    const hi = Math.round(v.z) * ctx.size + Math.round(v.x);
    if (ctx.heights[hi] < ctx.waterLevel) {
      // 물에 들어갔으면 이전 경로점으로 후퇴
      if (v.pathIdx > 0 && v.path[v.pathIdx - 1]) {
        v.x = v.path[v.pathIdx - 1].x;
        v.z = v.path[v.pathIdx - 1].z;
      }
      v.path = []; v.targetX = null; v.targetZ = null;
      if (v.action === '이동' || v.action === '대기') v.reason = '물 진입 회피 — 경로 재탐색';
    }
  }

  if (felledTrees.size > 0) trees = trees.filter((t) => !felledTrees.has(t.id));
  if (depletedRocks.size > 0) rocks = rocks.filter((r) => !depletedRocks.has(r.id));

  return {
    villagers: villagers.filter((v) => !deadVillagers.has(v.id)),
    trees, rocks, bushes, buildings, resources,
  };
}

export function describeVillager(v: VillagerEnt): string {
  return `${v.name}(${v.job}) — ${v.action}: ${v.reason}`;
}

export { invalidatePathCache };
