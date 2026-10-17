// Utility AI 기반 주민/동물 행동 — 실제 자원 흐름과 연결되는 행동 선택·실행
import type { WorldState, Villager, Action, Animal, ActionKind, Vec2, Building } from './types'
import { DAY_LEN } from './types'
import { findPath, type PathBudget } from './pathfinding'
import {
  nearestDepot,
  nearestHouse,
  nearestReadyFarm,
  findConstructionSite,
  needsMaterials,
  materialsReady,
  adjacentWalkableOf,
  hasLumberyard,
  hasQuarry,
  BUILDING_DEFS,
  dist2,
} from './buildings'
import {
  walkable,
  inBounds,
  idx,
  treeAt,
  heightAt,
  isNight,
  clampX,
  freeLandNear,
  treeIdsAt,
  pushToast,
} from './grid'
import { clamp } from './rng'

const WALK_SPEED = 1.7 // 타일/초
const INV_CAP = 6

export function newAction(kind: ActionKind, reason: string, goal: string): Action {
  return { kind, reason, goal, path: null, pathIndex: 0, phase: 'awaitPath', workLeft: 0 }
}

// ---------------- 행동 선택 (Utility AI) ----------------

export function evaluate(v: Villager, world: WorldState): void {
  // 진행 중인 건설 작업(운반→건설 체인)은 현장이 유효한 한 유지한다 —
  // 평가가 잦아들 때마다 운반→반입→건설 사슬이 다른 행동으로 끊기는 것을 방지.
  // 단, 자재 수령대기가 교착이면(창고 비어있음) 유지하지 않고 다른 작업을 택하게둔다.
  if (v.action.kind === 'build' && v.action.siteId !== undefined) {
    const site = world.buildings.get(v.action.siteId)
    const siteAlive = !!(site && site.state !== 'done' && site.state !== 'ruined')
    const stalledFetch =
      v.action.buildStage === 'fetch' && world.storage[v.action.fetchRes ?? 'wood'] <= 0
    if (siteAlive && !stalledFetch && v.hunger < 85 && v.fatigue < 90) {
      v.thinkIn = Math.max(v.thinkIn, 0.4)
      return
    }
  }

  let best: Action | null = null
  let bestScore = -Infinity

  const consider = (score: number, a: Action | null) => {
    if (a && score > bestScore) {
      bestScore = score
      best = a
    }
  }

  const dVillage = Math.hypot(v.x - world.village.x, v.z - world.village.z)
  const night = isNight(world)

  // 1) 위험 회피 — 불이 가까우면 무조건 대피
  const fire = nearestFire(world, v.x, v.z)
  if (fire && fire.d < 7) {
    const tile = fleeTile(world, v.x, v.z, fire.x, fire.z)
    if (tile) {
      const a = newAction('flee', `화재 위험(거리 ${fire.d.toFixed(1)}) → 안전 지대 대피`, '불길에서 벗어나기')
      a.tx = tile.x
      a.tz = tile.z
      consider(3000, a)
    }
  }

  // 2) 배고픔 — 인벤토리 식량 → 창고 → 농장 직수확 → 야생 채집 순서
  if (v.hunger > 42) {
    if (v.inv.food > 0) {
      const a = newAction('eat', `배고픔 ${Math.round(v.hunger)} → 소지 식량 섭취`, '식량 섭취')
      a.phase = 'work'
      a.workLeft = 0.4
      consider(600 + v.hunger * 3, a)
    } else {
      const depot = nearestDepot(world, v.x, v.z, 'food')
      if (depot && world.storage.food > 0) {
        const t = adjacentWalkableOf(world, depot, v.x, v.z)
        if (t) {
          const a = newAction('eat', `배고픔 ${Math.round(v.hunger)} → 창고에서 식량 1개 섭취`, '식량 섭취')
          a.targetId = depot.id
          a.tx = t.x
          a.tz = t.z
          consider(320 + v.hunger * 2.5 - dist(t.x, t.z, v.x, v.z) * 2, a)
        }
      }
      const farm = nearestReadyFarm(world, v.x, v.z)
      if (farm) {
        const t = adjacentWalkableOf(world, farm, v.x, v.z)
        if (t) {
          const a = newAction(
            'harvest',
            `식량 부족 + 농장 수확 가능 → 수확 후 섭취/보관`,
            '농작물 수확',
          )
          a.targetId = farm.id
          a.tx = t.x
          a.tz = t.z
          consider(300 + v.hunger * 2 - dist(t.x, t.z, v.x, v.z) * 2, a)
        }
      }
      // 창고에도 농장에도 식량이 없으면 야생 채집(행동 변화 요구 충족)
      if (world.storage.food <= 0 && !farm) {
        const wild = nearestWildTile(world, v.x, v.z, 70)
        if (wild) {
          const a = newAction('forage', `창고·농장 식량 없음 → 숲에서 야생 채집`, '야생 식량 채집')
          a.tx = wild.x
          a.tz = wild.z
          consider(280 + v.hunger * 2.4 - dist(wild.x, wild.z, v.x, v.z) * 1.6, a)
        }
      }
    }
  }

  // 3) 휴식/수면 — 피로 or 야간
  if (v.fatigue > 55 || (night && v.fatigue > 22)) {
    const house = nearestHouse(world, v.x, v.z)
    if (house) {
      const t = adjacentWalkableOf(world, house, v.x, v.z)
      if (t) {
        const a = newAction(
          'sleep',
          `피로 ${Math.round(v.fatigue)}${night ? ' + 야간' : ''} → ${BUILDING_DEFS.house.name}에서 휴식`,
          '집에서 수면',
        )
        a.targetId = house.id
        a.tx = t.x
        a.tz = t.z
        consider(v.fatigue * 2.6 + (night ? 200 : 0) - dist(t.x, t.z, v.x, v.z) * 1.5, a)
      }
    } else {
      const a = newAction('sleep', `피로 ${Math.round(v.fatigue)} → 집이 없어 노상 휴식`, '노상 휴식')
      a.phase = 'work'
      a.workLeft = 999
      consider(v.fatigue * 2.2 + (night ? 160 : 0), a)
    }
  }

  // 4) 운반 — 인벤토리에 자원이 있으면 반입처로
  const invTotal = v.inv.wood + v.inv.stone + v.inv.food
  if (invTotal > 0) {
    const res = v.inv.wood > 0 ? 'wood' : v.inv.stone > 0 ? 'stone' : 'food'
    const depot = nearestDepot(world, v.x, v.z, res)
    if (depot) {
      const t = adjacentWalkableOf(world, depot, v.x, v.z)
      if (t) {
        const a = newAction(
          'deposit',
          `소지 ${resLabel(res)} ${invTotal}개 → ${BUILDING_DEFS[depot.type].name} 반입`,
          '자원 반입',
        )
        a.targetId = depot.id
        a.tx = t.x
        a.tz = t.z
        consider(200 + (invTotal >= INV_CAP ? 70 : 0) - dist(t.x, t.z, v.x, v.z) * 2, a)
      }
    }
  }

  // 5) 건설 — 자재가 준비된 현장 참여
  const site = findConstructionSite(world)
  if (site) {
    const t = adjacentWalkableOf(world, site, v.x, v.z)
    if (t) {
      const a = newAction(
        'build',
        `건설 현장(${BUILDING_DEFS[site.type].name}) 자재 준비됨 → 건설 참여`,
        '건설 공사',
      )
      a.targetId = site.id
      a.siteId = site.id
      a.tx = t.x
      a.tz = t.z
      a.buildStage = 'work'
      consider(240 + (v.job === '건설가' ? 80 : 0) - dist(t.x, t.z, v.x, v.z) * 1.8, a)
    }
  }
  // 5b) 자재가 필요한 현장이 있고 창고에 자재가 있는 경우: fetch+deliver 건설 참여
  const needySite = needySiteFor(world)
  if (needySite && !site) {
    const need = needsMaterials(needySite)
    const res: 'wood' | 'stone' = need.wood > 0 && world.storage.wood > 0 ? 'wood' : 'stone'
    if (need[res] > 0 && world.storage[res] > 0) {
      const depot = nearestDepot(world, v.x, v.z, res)
      if (depot) {
        const t = adjacentWalkableOf(world, depot, v.x, v.z)
        if (t) {
          const a = newAction(
            'build',
            `${BUILDING_DEFS[needySite.type].name} 건설 자재(${resLabel(res)}) 부족 → 창고에서 운반`,
            '건설 자재 운반',
          )
          a.targetId = depot.id
          a.siteId = needySite.id
          a.tx = t.x
          a.tz = t.z
          a.buildStage = 'fetch'
          a.fetchRes = res
          consider(255 + (v.job === '건설가' ? 60 : 0) - dist(t.x, t.z, v.x, v.z) * 1.8, a)
        }
      }
    }
  }

  // 6) 벌목
  const woodNeed = Math.max(0, 100 - world.storage.wood)
  if (woodNeed > 0) {
    const tree = nearestTree(world, v.x, v.z, 70)
    if (tree) {
      const t = adjacentWalkableOf(world, { x: tree.x, z: tree.z, w: 1, h: 1 }, v.x, v.z)
      if (t) {
        const a = newAction(
          'chop',
          `창고 목재 ${Math.round(world.storage.wood)}/100 부족 → 벌목`,
          '목재 채집',
        )
        a.targetId = tree.id
        a.tx = t.x
        a.tz = t.z
        consider(
          170 + Math.min(woodNeed, 60) * 0.9 + (v.job === '벌목꾼' ? 90 : 0) - dist(t.x, t.z, v.x, v.z) * 1.6,
          a,
        )
      }
    }
  }

  // 7) 채석
  const stoneNeed = Math.max(0, 60 - world.storage.stone)
  if (stoneNeed > 0) {
    const rock = nearestRock(world, v.x, v.z, 70)
    if (rock) {
      const t = adjacentWalkableOf(world, { x: rock.x, z: rock.z, w: 1, h: 1 }, v.x, v.z)
      if (t) {
        const a = newAction(
          'mine',
          `창고 석재 ${Math.round(world.storage.stone)}/60 부족 → 채석`,
          '석재 채집',
        )
        a.targetId = rock.id
        a.tx = t.x
        a.tz = t.z
        consider(
          165 + Math.min(stoneNeed, 50) * 0.9 + (v.job === '광부' ? 90 : 0) - dist(t.x, t.z, v.x, v.z) * 1.6,
          a,
        )
      }
    }
  }

  // 8) 농사(보관용 수확)
  if (!night) {
    const farm = nearestReadyFarm(world, v.x, v.z)
    if (farm && world.storage.food < 50) {
      const t = adjacentWalkableOf(world, farm, v.x, v.z)
      if (t) {
        const a = newAction('harvest', `농장 작물 성숙 → 수확 후 창고 보관`, '농작물 수확')
        a.targetId = farm.id
        a.tx = t.x
        a.tz = t.z
        consider(250 + (v.job === '농부' ? 90 : 0) - dist(t.x, t.z, v.x, v.z) * 1.8, a)
      }
    }
  }

  // 9) 배회
  const wanderTile = wanderTarget(world, v.x, v.z, Math.max(4, Math.min(10, dVillage)))
  if (wanderTile) {
    const a = newAction('wander', `우선 작업 없음 → 마을 주변 배회`, '주변 답사')
    a.tx = wanderTile.x
    a.tz = wanderTile.z
    consider(30 - dist(wanderTile.x, wanderTile.z, v.x, v.z), a)
  }
  {
    const a = newAction('idle', `할 일 없음 → 제자리 휴식`, '대기')
    a.phase = 'work'
    a.workLeft = 1.2
    consider(8, a)
  }

  if (best) {
    v.action = best
    v.thinkIn = 1.8 + ((v.id * 7) % 10) * 0.08
  }
}

function needySiteFor(world: WorldState): Building | null {
  for (const b of world.buildings.values()) {
    if (b.state === 'done' || b.state === 'ruined') continue
    const need = needsMaterials(b)
    if (need.wood > 0 && world.storage.wood > 0) return b
    if (need.stone > 0 && world.storage.stone > 0) return b
  }
  return null
}

function resLabel(res: string): string {
  return res === 'wood' ? '목재' : res === 'stone' ? '석재' : '식량'
}

function dist(ax: number, az: number, bx: number, bz: number): number {
  return Math.hypot(ax - bx, az - bz)
}

function nearestFire(world: WorldState, x: number, z: number): { x: number; z: number; d: number } | null {
  let best: { x: number; z: number; d: number } | null = null
  let bd = Infinity
  for (const f of world.fires) {
    const d = dist(f.x, f.z, x, z)
    if (d < bd) {
      bd = d
      best = { x: f.x, z: f.z, d }
    }
  }
  return best
}

function fleeTile(world: WorldState, x: number, z: number, fx: number, fz: number): Vec2 | null {
  let dx = x - fx
  let dz = z - fz
  const len = Math.hypot(dx, dz) || 1
  dx /= len
  dz /= len
  for (const r of [4, 6, 8]) {
    const t = freeLandNear(world, clampX(world, x + dx * r), clampX(world, z + dz * r), 3)
    if (t) return t
  }
  return freeLandNear(world, x, z, 8)
}

function wanderTarget(world: WorldState, x: number, z: number, r: number): Vec2 | null {
  for (let i = 0; i < 8; i++) {
    const ang = ((x * 13 + z * 7 + i * 31) % 360) * (Math.PI / 180)
    const rr = 2 + ((x + i * 5 + z) % r)
    const tx = clampX(world, x + Math.cos(ang) * rr)
    const tz = clampX(world, z + Math.sin(ang) * rr)
    if (walkable(world, tx, tz)) return { x: tx, z: tz }
  }
  return null
}

// 링 탐색: 가장 가까운 나무(인덱스 기반)
function nearestTree(world: WorldState, x: number, z: number, maxR: number): Vec2 & { id: number } | null {
  const size = world.size
  const cx = clampX(world, x)
  const cz = clampX(world, z)
  for (let r = 1; r <= maxR; r++) {
    let best: (Vec2 & { id: number }) | null = null
    let bd = Infinity
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue
        const tx = cx + dx
        const tz = cz + dz
        if (!inBounds(world, tx, tz)) continue
        const ids = treeIdsAt(world, tx, tz)
        for (const id of ids) {
          const t = world.trees.get(id)
          if (!t || t.burning) continue
          const d = dist2(t.x, t.z, x, z)
          if (d < bd) {
            bd = d
            best = { x: t.x, z: t.z, id: t.id }
          }
        }
      }
    }
    if (best) return best
  }
  return null
}

function nearestRock(world: WorldState, x: number, z: number, maxR: number): Vec2 & { id: number } | null {
  const size = world.size
  const cx = clampX(world, x)
  const cz = clampX(world, z)
  for (let r = 1; r <= maxR; r++) {
    let best: (Vec2 & { id: number }) | null = null
    let bd = Infinity
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue
        const tx = cx + dx
        const tz = cz + dz
        if (!inBounds(world, tx, tz)) continue
        const ids = world.rockIndex.get(tz * size + tx) ?? []
        for (const id of ids) {
          const rk = world.rocks.get(id)
          if (!rk) continue
          const d = dist2(rk.x, rk.z, x, z)
          if (d < bd) {
            bd = d
            best = { x: rk.x, z: rk.z, id: rk.id }
          }
        }
      }
    }
    if (best) return best
  }
  return null
}

function nearestWildTile(world: WorldState, x: number, z: number, maxR: number): Vec2 | null {
  const t = nearestTree(world, x, z, maxR)
  if (t) return { x: t.x, z: t.z }
  return freeLandNear(world, x, z, 10)
}

// ---------------- 행동 실행 ----------------

function workDuration(kind: ActionKind, world: WorldState): number {
  switch (kind) {
    case 'eat':
      return 0.4
    case 'chop':
      return hasLumberyard(world) ? 2.5 / 1.5 : 2.5
    case 'mine':
      return hasQuarry(world) ? 3.5 / 1.5 : 3.5
    case 'harvest':
      return 2.5
    case 'forage':
      return 3.0
    case 'deposit':
      return 0.4
    case 'sleep':
      return 999
    case 'wander':
      return 1.5
    default:
      return 1.0
  }
}

export function updateVillager(v: Villager, world: WorldState, dt: number, budget: PathBudget): void {
  if (!v.alive) return

  // 위험 즉시 회피 (현재 행동 무시)
  if (v.action.kind !== 'flee') {
    const fire = nearestFire(world, v.x, v.z)
    if (fire && fire.d < 6.5) {
      evaluateFleeOnly(v, world)
    }
  } else {
    const fire = nearestFire(world, v.x, v.z)
    if (!fire || fire.d > 9) v.thinkIn = 0
  }

  // 이동 중 목표가 사라졌는지 확인
  if (v.action.phase === 'move' || v.action.phase === 'awaitPath') {
    if (targetGone(v, world)) {
      v.thinkIn = 0
    }
  }

  // 1) 실행 — 도착 즉시 작업(반입/섭취/건설 등)이 평가로 덮이쓰이지 않도록 실행을 먼저 한다
  switch (v.action.phase) {
    case 'awaitPath': {
      if (budget.left <= 0) break
      budget.left--
      const tx = v.action.tx
      const tz = v.action.tz
      if (tx === undefined || tz === undefined || !inBounds(world, tx, tz)) {
        v.action.phase = 'work'
        v.action.workLeft = workDuration(v.action.kind, world)
        break
      }
      const path = findPath(world, Math.round(v.x), Math.round(v.z), tx, tz)
      if (path === null) {
        v.action = newAction('wander', `목표지까지 경로 없음 → 대체 배회`, '우회 이동')
        v.action.tx = undefined
        v.action.tz = undefined
        v.action.phase = 'work'
        v.action.workLeft = 1.0
      } else {
        v.action.path = path
        v.action.pathIndex = 0
        if (path.length === 0) {
          v.action.phase = 'work'
          v.action.workLeft = workDuration(v.action.kind, world)
        } else {
          v.action.phase = 'move'
        }
      }
      break
    }
    case 'move': {
      // 실제 이동 (순간이동 금지 — 경로를 따라 한 스텝씩)
      moveAlong(v, dt)
      // 도착한 틱에 즉시 작업 완료 처리 (긴 이동 후 평가가 완료를 덮어쓰지 않도록)
      if ((v.action.phase as string) === 'work') {
        runWork(v, world, dt)
      }
      break
    }
    case 'work': {
      runWork(v, world, dt)
      break
    }
  }

  // 2) 평가 — 실행이 끝난 시점에만 새 행동을 고른다
  if (v.thinkIn <= 0 && (v.action.phase === 'work' || v.action.phase === 'awaitPath')) {
    evaluate(v, world)
  } else {
    v.thinkIn -= dt
  }

  // 생존 지표
  const sleeping = v.action.kind === 'sleep' && v.action.phase === 'work'
  const moving = v.action.phase === 'move'
  v.hunger = clamp(v.hunger + (sleeping ? 0.6 : 1.55) * dt, 0, 100)
  if (sleeping) {
    v.fatigue = clamp(v.fatigue - (isNight(world) ? 11 : 8) * dt, 0, 100)
  } else {
    v.fatigue = clamp(v.fatigue + (moving ? 0.95 : 0.4) * dt, 0, 100)
  }
  if (v.hunger > 90) v.health = clamp(v.health - 1.4 * dt, 0, 100)
  else if (v.hunger < 35) v.health = clamp(v.health + 0.35 * dt, 0, 100)
}

function evaluateFleeOnly(v: Villager, world: WorldState): void {
  const fire = nearestFire(world, v.x, v.z)
  if (!fire) return
  const tile = fleeTile(world, v.x, v.z, fire.x, fire.z)
  if (!tile) return
  const a = newAction('flee', `화재 위험(거리 ${fire.d.toFixed(1)}) → 안전 지대 대피`, '불길에서 벗어나기')
  a.tx = tile.x
  a.tz = tile.z
  v.action = a
  v.thinkIn = 1.0
}

function targetGone(v: Villager, world: WorldState): boolean {
  const t = v.action.targetId
  if (t === undefined) return false
  switch (v.action.kind) {
    case 'chop':
      return !world.trees.has(t)
    case 'mine':
      return !world.rocks.has(t)
    case 'harvest':
    case 'sleep':
    case 'eat':
    case 'deposit':
      if (v.action.kind === 'eat' && v.inv.food > 0) return false
      return !world.buildings.has(t)
    case 'build':
      return !(world.buildings.has(v.action.siteId ?? -1))
    default:
      return false
  }
}

function moveAlong(v: Villager, dt: number): void {
  const path = v.action.path
  if (!path) {
    v.action.phase = 'work'
    return
  }
  let remain = dt * WALK_SPEED
  while (remain > 0) {
    if (v.action.pathIndex >= path.length) {
      v.action.phase = 'work'
      v.action.workLeft = 0
      v.action.path = null
      return
    }
    const t = path[v.action.pathIndex]
    const dx = t.x - v.x
    const dz = t.z - v.z
    const d = Math.hypot(dx, dz)
    if (d < 1e-4) {
      v.action.pathIndex++
      continue
    }
    const step = Math.min(remain, d)
    v.x += (dx / d) * step
    v.z += (dz / d) * step
    v.facing = Math.atan2(dx, dz)
    remain -= step
    if (step >= d - 1e-6) v.action.pathIndex++
  }
}

function runWork(v: Villager, world: WorldState, dt: number): void {
  const a = v.action
  // 수면: 피로 회복 완료 시 종료 / 심각한 공복에는 기상
  if (a.kind === 'sleep') {
    if (v.fatigue <= 10 || v.hunger > 85) {
      a.workLeft = 0
      v.thinkIn = 0
    }
    return
  }
  // 건설(작업 단계): 진행도 누적
  if (a.kind === 'build' && a.buildStage === 'work') {
    const site = world.buildings.get(a.siteId ?? -1)
    if (!site || site.state === 'done' || site.state === 'ruined') {
      v.thinkIn = 0
      return
    }
    if (!materialsReady(site)) {
      a.buildStage = 'fetch'
      const need = needsMaterials(site)
      const res: 'wood' | 'stone' = need.wood > 0 ? 'wood' : 'stone'
      if (world.storage[res] > 0) {
        const depot = nearestDepot(world, v.x, v.z, res)
        if (depot) {
          const t = adjacentWalkableOf(world, depot, v.x, v.z)
          if (t) {
            a.reason = `현장 자재 부족 → 창고에서 ${resLabel(res)} 재운반`
            a.buildStage = 'fetch'
            a.fetchRes = res
            a.targetId = depot.id
            a.tx = t.x
            a.tz = t.z
            a.phase = 'awaitPath'
            return
          }
        }
      }
      // 자재 조달 불가 → 건설 중단 대기
      a.reason = `건설 자재 부족 → 조달 대기(건설 중단)`
      a.workLeft = 2.0
      return
    }
    const def = BUILDING_DEFS[site.type]
    site.progress = Math.min(1, site.progress + dt / def.buildTime)
    if (site.progress >= 1) {
      completeBuilding(world, site)
      v.thinkIn = 0
    }
    return
  }

  a.workLeft -= dt
  if (a.workLeft > 0) return

  // 작업 완료 처리
  switch (a.kind) {
    case 'eat': {
      if (v.inv.food > 0) {
        v.inv.food--
        v.hunger = clamp(v.hunger - 40, 0, 100)
      } else {
        const depot = world.buildings.get(a.targetId ?? -1)
        if (depot && world.storage.food > 0) {
          world.storage.food--
          v.hunger = clamp(v.hunger - 40, 0, 100)
        }
      }
      v.thinkIn = 0
      break
    }
    case 'chop': {
      const tree = world.trees.get(a.targetId ?? -1)
      if (!tree) {
        v.thinkIn = 0
        break
      }
      tree.hp -= 30
      if (tree.hp <= 0) {
        world.trees.delete(tree.id) // 묘목 재생은 자연 재생 시스템이 확률적으로 담당
      }
      const gain = hasLumberyard(world) ? 4 : 3
      v.inv.wood = Math.min(INV_CAP, v.inv.wood + gain)
      if (v.inv.wood + v.inv.stone + v.inv.food >= INV_CAP || !world.trees.has(tree.id)) {
        v.thinkIn = 0
      } else {
        a.workLeft = workDuration('chop', world) // 같은 나무 계속 벌목
      }
      break
    }
    case 'mine': {
      const rock = world.rocks.get(a.targetId ?? -1)
      if (!rock) {
        v.thinkIn = 0
        break
      }
      rock.amount--
      const gain = hasQuarry(world) ? 3 : 2
      v.inv.stone = Math.min(INV_CAP, v.inv.stone + gain)
      if (rock.amount <= 0) world.rocks.delete(rock.id)
      if (v.inv.wood + v.inv.stone + v.inv.food >= INV_CAP || !world.rocks.has(rock.id)) {
        v.thinkIn = 0
      } else {
        a.workLeft = workDuration('mine', world)
      }
      break
    }
    case 'harvest': {
      const farm = world.buildings.get(a.targetId ?? -1)
      if (farm && farm.type === 'farm' && farm.crops >= 0.9) {
        farm.crops = 0
        v.inv.food = Math.min(INV_CAP, v.inv.food + 6)
      }
      v.thinkIn = 0
      break
    }
    case 'forage': {
      v.hunger = clamp(v.hunger - 30, 0, 100)
      v.thinkIn = 0
      break
    }
    case 'build': {
      // fetch(창고에서 자재 수령) / deliver(현장 반입) 단계 완료 처리
      const site = world.buildings.get(a.siteId ?? -1)
      if (!site || site.state === 'done' || site.state === 'ruined') {
        v.thinkIn = 0
        break
      }
      if (a.buildStage === 'fetch') {
        const res = a.fetchRes ?? 'wood'
        const need = needsMaterials(site)
        const cap = INV_CAP - (v.inv.wood + v.inv.stone + v.inv.food)
        const take = Math.min(need[res], Math.floor(world.storage[res]), cap)
        if (take <= 0) {
          v.thinkIn = 0
          break
        }
        world.storage[res] = Math.max(0, world.storage[res] - take)
        v.inv[res] += take
        const t = adjacentWalkableOf(world, site, v.x, v.z)
        if (t) {
          a.buildStage = 'deliver'
          a.targetId = site.id
          a.tx = t.x
          a.tz = t.z
          a.phase = 'awaitPath'
          a.path = null
          a.reason = `${resLabel(res)} ${take}개 수령 → 현장으로 운반`
        } else {
          v.thinkIn = 0
        }
      } else if (a.buildStage === 'deliver') {
        const res = a.fetchRes ?? 'wood'
        site.stored[res] += v.inv[res]
        v.inv[res] = 0
        if (materialsReady(site)) {
          const t = adjacentWalkableOf(world, site, v.x, v.z)
          if (t) {
            a.buildStage = 'work'
            a.targetId = site.id
            a.tx = t.x
            a.tz = t.z
            a.phase = 'awaitPath'
            a.path = null
            a.reason = `자재 준비 완료 → 건설 작업 시작`
          } else {
            v.thinkIn = 0
          }
        } else {
          // 아직 부족 → 재운반
          const need = needsMaterials(site)
          const res2: 'wood' | 'stone' =
            need.wood > 0 && world.storage.wood > 0 ? 'wood' : 'stone'
          if (world.storage[res2] > 0) {
            const depot = nearestDepot(world, v.x, v.z, res2)
            if (depot) {
              const t = adjacentWalkableOf(world, depot, v.x, v.z)
              if (t) {
                a.buildStage = 'fetch'
                a.fetchRes = res2
                a.targetId = depot.id
                a.tx = t.x
                a.tz = t.z
                a.phase = 'awaitPath'
                a.path = null
                a.reason = `현장 자재 still 부족 → ${resLabel(res2)} 추가 운반`
              } else {
                v.thinkIn = 0
              }
            } else {
              v.thinkIn = 0
            }
          } else {
            a.reason = `건설 자재 부족 → 조달 대기(건설 중단)`
            a.phase = 'work'
            a.workLeft = 2.0
          }
        }
      }
      break
    }
    case 'deposit': {
      world.stats.gatheredWood += v.inv.wood
      world.stats.gatheredStone += v.inv.stone
      world.stats.gatheredFood += v.inv.food
      world.storage.wood += v.inv.wood
      world.storage.stone += v.inv.stone
      world.storage.food += v.inv.food
      v.inv.wood = 0
      v.inv.stone = 0
      v.inv.food = 0
      v.thinkIn = 0
      break
    }
    case 'wander': {
      v.thinkIn = 0
      break
    }
    default:
      v.thinkIn = 0
  }
}

export function completeBuilding(world: WorldState, b: Building): void {
  b.state = 'done'
  b.progress = 1
  world.stats.built++
  pushToast(world, `건물 완공: ${BUILDING_DEFS[b.type].name}`)
}

// ---------------- 동물 ----------------

export function updateAnimal(a: Animal, world: WorldState, dt: number, budget: PathBudget): void {
  a.thinkIn -= dt
  // 주민 접근 시 도주
  let threat: Villager | null = null
  let bd = 9
  for (const v of world.villagers) {
    if (!v.alive) continue
    const d = dist2(v.x, v.z, a.x, a.z)
    if (d < bd) {
      bd = d
      threat = v
    }
  }
  if (threat && a.action.kind !== 'flee') {
    const tile = fleeTile(world, a.x, a.z, threat.x, threat.z)
    if (tile) {
      a.action = newAction('flee', '', '도주')
      a.action.tx = tile.x
      a.action.tz = tile.z
      a.thinkIn = 2.5
    }
  }
  if (a.thinkIn <= 0 && a.action.phase === 'work') {
    const t = wanderTarget(world, a.x, a.z, 6)
    if (t) {
      a.action = newAction('wander', '', '배회')
      a.action.tx = t.x
      a.action.tz = t.z
    }
    a.thinkIn = 1.5 + (a.id % 7) * 0.4
  }
  switch (a.action.phase) {
    case 'awaitPath': {
      if (budget.left <= 0) break
      budget.left--
      if (a.action.tx !== undefined && a.action.tz !== undefined) {
        const path = findPath(world, Math.round(a.x), Math.round(a.z), a.action.tx, a.action.tz)
        if (path) {
          a.action.path = path
          a.action.pathIndex = 0
          a.action.phase = path.length ? 'move' : 'work'
          a.action.workLeft = 1.5
        } else {
          a.action.phase = 'work'
          a.action.workLeft = 0.5
        }
      } else {
        a.action.phase = 'work'
        a.action.workLeft = 0.5
      }
      break
    }
    case 'move': {
      const speed = a.kind === 'deer' ? 2.2 : 1.6
      const path = a.action.path
      if (!path) {
        a.action.phase = 'work'
        break
      }
      let remain = dt * speed
      while (remain > 0) {
        if (a.action.pathIndex >= path.length) {
          a.action.phase = 'work'
          a.action.workLeft = 1.0
          a.action.path = null
          break
        }
        const t = path[a.action.pathIndex]
        const dx = t.x - a.x
        const dz = t.z - a.z
        const d = Math.hypot(dx, dz)
        if (d < 1e-4) {
          a.action.pathIndex++
          continue
        }
        const step = Math.min(remain, d)
        a.x += (dx / d) * step
        a.z += (dz / d) * step
        a.facing = Math.atan2(dx, dz)
        remain -= step
        if (step >= d - 1e-6) a.action.pathIndex++
      }
      break
    }
    case 'work': {
      a.action.workLeft -= dt
      if (a.action.workLeft <= 0) a.thinkIn = 0
      break
    }
  }
}

// 테스트/디버그용: 강제 행동 평가
export function forceThink(v: Villager, world: WorldState): void {
  evaluate(v, world)
}

export function dayProgress(world: WorldState): number {
  return (world.time % DAY_LEN) / DAY_LEN
}
