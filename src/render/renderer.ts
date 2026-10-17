// three.js 렌더러 — 청크 지형, InstancedMesh 수목/건물/주민, 낮밤·날씨, 카메라, 픽킹
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type { WorldState, Building, BuildingType, Villager } from '../sim/types'
import { heightAt, waterLevelAt, idx, inBounds, treeAt, rockAt, CHUNK_SIZE } from '../sim/grid'
import { BUILDING_DEFS, canPlaceBuilding } from '../sim/buildings'
import { daylight } from '../sim/sim'
import { valueNoise } from '../sim/rng'

const JOB_COLORS: Record<string, number> = {
  일꾼: 0x6f9dd9,
  벌목꾼: 0xb5654a,
  광부: 0x9aa0a6,
  농부: 0x7cb35c,
  건설가: 0xe2a33d,
}

const TYPE_COLORS: Record<BuildingType, { body: number; roof: number }> = {
  house: { body: 0xe8dcc0, roof: 0xb4543f },
  warehouse: { body: 0x9c7a4e, roof: 0x6b5334 },
  farm: { body: 0x8a6b42, roof: 0xc9a86a },
  lumberyard: { body: 0xb08a54, roof: 0x7d6236 },
  quarry: { body: 0xa8adb5, roof: 0x79808a },
}

export interface RendererCallbacks {
  onClickTile: (tile: { x: number; z: number }) => void
  onBrush: (tile: { x: number; z: number }) => void // 브러시 도구가 드래그 중일 때
  onBrushEnd: () => void // 브러시 스트로크 종료(포인터 업/캔버스 이탈)
  onHoverTile: (tile: { x: number; z: number } | null) => void
  getTool: () => { tool: string; buildingType: BuildingType; brushRadius: number; brushStrength: number }
  isSelected: (kind: string, id: number) => boolean
  selectedPath: () => { x: number; z: number }[] | null
}

export class Renderer {
  private canvas: HTMLCanvasElement
  private cb: RendererCallbacks
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private sun: THREE.DirectionalLight
  private sunTarget: THREE.Object3D
  private hemi: THREE.HemisphereLight
  private terrainGroup: THREE.Group
  private waterGroup: THREE.Group
  private terrainMeshes = new Map<string, THREE.Mesh>()
  private waterMeshes = new Map<string, THREE.Mesh>()
  private treesTrunk!: THREE.InstancedMesh
  private treesPine!: THREE.InstancedMesh
  private treesBroad!: THREE.InstancedMesh
  private rocks!: THREE.InstancedMesh
  private foundations!: THREE.InstancedMesh
  private bodies = new Map<BuildingType, THREE.InstancedMesh>()
  private roofs = new Map<BuildingType, THREE.InstancedMesh>()
  private vBody!: THREE.InstancedMesh
  private vHead!: THREE.InstancedMesh
  private aBody!: THREE.InstancedMesh
  private aHead!: THREE.InstancedMesh
  private flames!: THREE.InstancedMesh
  private rain!: THREE.Points
  private brushRing!: THREE.Mesh
  private brushFill!: THREE.Mesh
  private ghost!: THREE.Mesh
  private selRing!: THREE.Mesh
  private pathLine!: THREE.Line
  private dummy = new THREE.Object3D()
  private colorTmp = new THREE.Color()
  private half = 80
  private disposed = false
  private raycaster = new THREE.Raycaster()
  private pointer = new THREE.Vector2()
  private frameTimes: number[] = []
  private lastFrame = performance.now()
  fpsAvg = 0
  fpsLow = 0
  drawCalls = 0

  constructor(canvas: HTMLCanvasElement, cb: RendererCallbacks) {
    this.canvas = canvas
    this.cb = cb
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x9ed4f2)
    this.scene.fog = new THREE.Fog(0x9ed4f2, 120, 320)

    this.camera = new THREE.PerspectiveCamera(48, 1, 0.5, 600)
    this.camera.position.set(0, 70, 95)

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.09
    this.controls.maxPolarAngle = 1.32
    this.controls.minPolarAngle = 0.12
    this.controls.minDistance = 10
    this.controls.maxDistance = 230
    this.controls.screenSpacePanning = false

    // 조명
    this.hemi = new THREE.HemisphereLight(0xbfe3ff, 0x5a6b45, 0.9)
    this.scene.add(this.hemi)
    this.sun = new THREE.DirectionalLight(0xfff3dd, 2.6)
    this.sun.castShadow = true
    this.sun.shadow.mapSize.set(2048, 2048)
    this.sun.shadow.camera.near = 10
    this.sun.shadow.camera.far = 320
    const sc = this.sun.shadow.camera as THREE.OrthographicCamera
    sc.left = -60
    sc.right = 60
    sc.top = 60
    sc.bottom = -60
    sc.updateProjectionMatrix()
    this.sunTarget = new THREE.Object3D()
    this.scene.add(this.sunTarget)
    this.sun.target = this.sunTarget
    this.scene.add(this.sun)

    this.terrainGroup = new THREE.Group()
    this.waterGroup = new THREE.Group()
    this.scene.add(this.terrainGroup)
    this.scene.add(this.waterGroup)

    this.initInstances()
    this.initOverlays()
    this.initRain()
    this.attachInput()
    this.resize()
  }

  private initInstances(): void {
    const trunkGeo = new THREE.CylinderGeometry(0.07, 0.12, 0.9, 5)
    trunkGeo.translate(0, 0.45, 0)
    const pineGeo = new THREE.ConeGeometry(0.5, 1.6, 6)
    pineGeo.translate(0, 1.45, 0)
    const broadGeo = new THREE.SphereGeometry(0.55, 6, 5)
    broadGeo.scale(1, 0.85, 1)
    broadGeo.translate(0, 1.15, 0)

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a5a33, roughness: 1 })
    const pineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 })
    const broadMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 })

    this.treesTrunk = new THREE.InstancedMesh(trunkGeo, trunkMat, 4000)
    this.treesPine = new THREE.InstancedMesh(pineGeo, pineMat, 4000)
    this.treesBroad = new THREE.InstancedMesh(broadGeo, broadMat, 4000)
    for (const m of [this.treesTrunk, this.treesPine, this.treesBroad]) {
      m.castShadow = true
      m.count = 0
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
      m.frustumCulled = false
      this.scene.add(m)
    }

    const rockGeo = new THREE.DodecahedronGeometry(0.55)
    this.rocks = new THREE.InstancedMesh(
      rockGeo,
      new THREE.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 1 }),
      400,
    )
    this.rocks.castShadow = true
    this.rocks.count = 0
    this.scene.add(this.rocks)

    // 건물 타입별 body/roof
    const mkBox = (w: number, hh: number, d: number) => {
      const g = new THREE.BoxGeometry(w, hh, d)
      g.translate(0, hh / 2, 0)
      return g
    }
    const geoms: Record<BuildingType, { body: THREE.BufferGeometry; roof: THREE.BufferGeometry }> = {
      house: { body: mkBox(1.6, 1.1, 1.6), roof: new THREE.ConeGeometry(1.32, 0.85, 4) },
      warehouse: { body: mkBox(2.0, 1.25, 1.7), roof: mkBox(2.25, 0.28, 1.95) },
      farm: { body: mkBox(2.9, 0.16, 2.9), roof: mkBox(2.7, 0.5, 2.7) },
      lumberyard: { body: mkBox(1.75, 1.0, 1.4), roof: mkBox(1.95, 0.22, 1.6) },
      quarry: { body: mkBox(1.9, 0.9, 1.9), roof: mkBox(1.6, 0.5, 1.6) },
    }
    for (const t of Object.keys(BUILDING_DEFS) as BuildingType[]) {
      const bodyMesh = new THREE.InstancedMesh(
        geoms[t].body,
        new THREE.MeshStandardMaterial({ color: TYPE_COLORS[t].body, roughness: 0.9 }),
        300,
      )
      const roofMat = new THREE.MeshStandardMaterial({ color: TYPE_COLORS[t].roof, roughness: 0.9 })
      if (t === 'house') roofMat.userData.rot45 = true
      const roofMesh = new THREE.InstancedMesh(geoms[t].roof, roofMat, 300)
      bodyMesh.castShadow = true
      roofMesh.castShadow = true
      bodyMesh.count = 0
      roofMesh.count = 0
      this.bodies.set(t, bodyMesh)
      this.roofs.set(t, roofMesh)
      this.scene.add(bodyMesh)
      this.scene.add(roofMesh)
    }

    const fGeo = new THREE.BoxGeometry(1, 0.5, 1)
    fGeo.translate(0, 0.25, 0)
    this.foundations = new THREE.InstancedMesh(
      fGeo,
      new THREE.MeshStandardMaterial({ color: 0xf2d16b, transparent: true, opacity: 0.5 }),
      300,
    )
    this.foundations.count = 0
    this.scene.add(this.foundations)

    const vBodyGeo = new THREE.CapsuleGeometry(0.15, 0.32, 3, 8)
    vBodyGeo.translate(0, 0.36, 0)
    this.vBody = new THREE.InstancedMesh(
      vBodyGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 }),
      400,
    )
    const vHeadGeo = new THREE.SphereGeometry(0.14, 6, 5)
    vHeadGeo.translate(0, 0.68, 0)
    this.vHead = new THREE.InstancedMesh(
      vHeadGeo,
      new THREE.MeshStandardMaterial({ color: 0xf3d3ae, roughness: 0.9 }),
      400,
    )
    this.vBody.castShadow = true
    this.vBody.count = 0
    this.vHead.count = 0
    this.scene.add(this.vBody)
    this.scene.add(this.vHead)

    const aBodyGeo = new THREE.BoxGeometry(0.55, 0.4, 0.85)
    aBodyGeo.translate(0, 0.3, 0)
    this.aBody = new THREE.InstancedMesh(
      aBodyGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }),
      200,
    )
    const aHeadGeo = new THREE.BoxGeometry(0.28, 0.28, 0.3)
    aHeadGeo.translate(0, 0.62, 0.36)
    this.aHead = new THREE.InstancedMesh(
      aHeadGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 }),
      200,
    )
    this.aBody.castShadow = true
    this.aBody.count = 0
    this.aHead.count = 0
    this.scene.add(this.aBody)
    this.scene.add(this.aHead)

    const flameGeo = new THREE.ConeGeometry(0.32, 0.9, 6)
    flameGeo.translate(0, 0.6, 0)
    this.flames = new THREE.InstancedMesh(
      flameGeo,
      new THREE.MeshStandardMaterial({ color: 0xff7b1c, emissive: 0xff5500, emissiveIntensity: 2.2, roughness: 0.4 }),
      300,
    )
    this.flames.count = 0
    this.scene.add(this.flames)
  }

  private initOverlays(): void {
    const ringGeo = new THREE.RingGeometry(0.9, 1.0, 48)
    ringGeo.rotateX(-Math.PI / 2)
    this.brushRing = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }),
    )
    const fillGeo = new THREE.CircleGeometry(0.9, 32)
    fillGeo.rotateX(-Math.PI / 2)
    this.brushFill = new THREE.Mesh(
      fillGeo,
      new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.14, side: THREE.DoubleSide, depthWrite: false }),
    )
    this.brushRing.visible = false
    this.brushFill.visible = false
    this.scene.add(this.brushRing)
    this.scene.add(this.brushFill)

    this.ghost = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x66ff99, transparent: true, opacity: 0.4, depthWrite: false }),
    )
    this.ghost.visible = false
    this.scene.add(this.ghost)

    const selGeo = new THREE.RingGeometry(0.3, 0.42, 32)
    selGeo.rotateX(-Math.PI / 2)
    this.selRing = new THREE.Mesh(
      selGeo,
      new THREE.MeshBasicMaterial({ color: 0x3ddcff, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }),
    )
    this.selRing.visible = false
    this.scene.add(this.selRing)

    const pathGeo = new THREE.BufferGeometry()
    pathGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3 * 4096), 3))
    this.pathLine = new THREE.Line(
      pathGeo,
      new THREE.LineBasicMaterial({ color: 0x3ddcff, transparent: true, opacity: 0.9 }),
    )
    this.pathLine.frustumCulled = false
    this.pathLine.visible = false
    this.scene.add(this.pathLine)
  }

  private initRain(): void {
    const N = 1400
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 70
      pos[i * 3 + 1] = Math.random() * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    this.rain = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: 0xa8c8e8, size: 0.16, transparent: true, opacity: 0.55 }),
    )
    this.rain.visible = false
    this.scene.add(this.rain)
  }

  // ---------------- 지형 빌드 ----------------

  rebuildAll(world: WorldState): void {
    for (const [key, mesh] of this.terrainMeshes) {
      this.terrainGroup.remove(mesh)
      mesh.geometry.dispose()
      void key
    }
    this.terrainMeshes.clear()
    for (const [key, mesh] of this.waterMeshes) {
      this.waterGroup.remove(mesh)
      mesh.geometry.dispose()
      void key
    }
    this.waterMeshes.clear()
    this.rebuildChunks(world, [...this.allChunkKeys(world)])
    this.syncWorldObjects(world)
  }

  private allChunkKeys(world: WorldState): string[] {
    const n = Math.ceil(world.size / CHUNK_SIZE)
    const keys: string[] = []
    for (let cz = 0; cz < n; cz++) for (let cx = 0; cx < n; cx++) keys.push(`${cx},${cz}`)
    return keys
  }

  private cornerHeight(world: WorldState, x: number, z: number): number {
    // 타일 모서리 (x,z): 인접 4타일 높이 평균, 벗어난 타일은 해저 -2
    let sum = 0
    let n = 0
    for (let dz = -1; dz <= 0; dz++) {
      for (let dx = -1; dx <= 0; dx++) {
        const tx = x + dx
        const tz = z + dz
        if (tx < 0 || tz < 0 || tx >= world.size || tz >= world.size) {
          sum += -2
        } else {
          sum += world.heights[tz * world.size + tx]
        }
        n++
      }
    }
    return sum / n
  }

  private tileColor(world: WorldState, x: number, z: number, h: number, out: THREE.Color): void {
    const water = world.water[idx(world, x, z)] === 1
    const jitter = valueNoise(x * 0.35, z * 0.35, world.seed + 9) * 0.07 - 0.035
    if (water) {
      const depth = Math.min(1, Math.max(0, (waterLevelAt(world, x, z) - h) / 2.5))
      out.setRGB(0.28 + 0.08 * (1 - depth), 0.24 + 0.1 * (1 - depth), 0.16) // 수중 지면(모래/흙)
      out.offsetHSL(0, 0, jitter)
      return
    }
    if (h < 0.55) {
      out.setHex(0xd9c790) // 해안 모래
    } else if (h > 11.8) {
      out.setHex(0xeee8ea) // 눈
    } else if (h > 8.4) {
      out.setHex(0x8d8f96) // 산악 암석
    } else {
      const grass = 0x6fae4e
      out.setHex(grass)
      const moisture = valueNoise(x * 0.08, z * 0.08, world.seed + 501)
      out.offsetHSL(moisture * 0.03 - 0.015, 0.05, -0.04 + moisture * 0.06 + jitter)
    }
    // 가파른 사면 → 암석 노출
    const s = Math.max(
      Math.abs(heightAt(world, x, z - 1) - h),
      Math.abs(heightAt(world, x, z + 1) - h),
      Math.abs(heightAt(world, x + 1, z) - h),
      Math.abs(heightAt(world, x - 1, z) - h),
    )
    if (s > 1.1 && h >= 0.55) out.lerp(this.colorTmp.setHex(0x8d8f96), Math.min(0.75, (s - 1.1) * 0.9))
  }

  rebuildChunks(world: WorldState, keys: string[]): void {
    for (const key of keys) {
      const oldT = this.terrainMeshes.get(key)
      if (oldT) {
        this.terrainGroup.remove(oldT)
        oldT.geometry.dispose()
        this.terrainMeshes.delete(key)
      }
      const oldW = this.waterMeshes.get(key)
      if (oldW) {
        this.waterGroup.remove(oldW)
        oldW.geometry.dispose()
        this.waterMeshes.delete(key)
      }
      const [cks, ckz] = key.split(',').map(Number)
      const x0 = cks * CHUNK_SIZE
      const z0 = ckz * CHUNK_SIZE
      const x1 = Math.min(x0 + CHUNK_SIZE, world.size)
      const z1 = Math.min(z0 + CHUNK_SIZE, world.size)
      if (x0 >= world.size || z0 >= world.size) continue
      const gw = x1 - x0
      const gh = z1 - z0
      const vw = gw + 1
      const vh = gh + 1

      const positions = new Float32Array(vw * vh * 3)
      const colors = new Float32Array(vw * vh * 3)
      const indices: number[] = []
      const c = new THREE.Color()
      for (let vz = 0; vz < vh; vz++) {
        for (let vx = 0; vx < vw; vx++) {
          const wx = x0 + vx
          const wz = z0 + vz
          const cornerH = this.cornerHeight(world, wx, wz)
          const vi = vz * vw + vx
          positions[vi * 3] = wx - world.size / 2
          positions[vi * 3 + 1] = cornerH
          positions[vi * 3 + 2] = wz - world.size / 2
          // 모서리 색 = 인접 타일 색 평균
          c.setRGB(0, 0, 0)
          let n = 0
          for (let dz = -1; dz <= 0; dz++) {
            for (let dx = -1; dx <= 0; dx++) {
              const tx = wx + dx
              const tz = wz + dz
              if (tx < 0 || tz < 0 || tx >= world.size || tz >= world.size) continue
              const cc = new THREE.Color()
              this.tileColor(world, tx, tz, world.heights[tz * world.size + tx], cc)
              c.r += cc.r
              c.g += cc.g
              c.b += cc.b
              n++
            }
          }
          if (n > 0) {
            colors[vi * 3] = c.r / n
            colors[vi * 3 + 1] = c.g / n
            colors[vi * 3 + 2] = c.b / n
          }
        }
      }
      for (let vz = 0; vz < gh; vz++) {
        for (let vx = 0; vx < gw; vx++) {
          const a = vz * vw + vx
          const b = a + 1
          const cIdx = a + vw
          const d = cIdx + 1
          indices.push(a, cIdx, b, b, cIdx, d)
        }
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geo.setIndex(indices)
      geo.computeVertexNormals()
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 }),
      )
      mesh.receiveShadow = true
      mesh.castShadow = false
      mesh.userData.chunkKey = key
      this.terrainGroup.add(mesh)
      this.terrainMeshes.set(key, mesh)

      // 물 메시 (해당 청크에 물 타일이 있을 때)
      const wpos: number[] = []
      const wind: number[] = []
      let wcount = 0
      for (let z = z0; z < z1; z++) {
        for (let x = x0; x < x1; x++) {
          if (world.water[idx(world, x, z)] !== 1) continue
          wcount++
          const lv = world.waterLevel[idx(world, x, z)]
          const ax = x - world.size / 2
          const az = z - world.size / 2
          const bx = ax + 1
          const bz = az + 1
          const base = wpos.length / 3
          wpos.push(ax, lv, az, bx, lv, az, ax, lv, bz, bx, lv, bz)
          wind.push(base, base + 2, base + 1, base + 1, base + 2, base + 3)
        }
      }
      if (wcount > 0) {
        const wgeo = new THREE.BufferGeometry()
        wgeo.setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3))
        wgeo.setIndex(wind)
        wgeo.computeVertexNormals()
        const wmesh = new THREE.Mesh(
          wgeo,
          new THREE.MeshStandardMaterial({
            color: 0x2e86c1,
            transparent: true,
            opacity: 0.68,
            roughness: 0.15,
            metalness: 0.25,
          }),
        )
        wmesh.userData.baseY = 0
        wmesh.userData.key = key
        this.waterGroup.add(wmesh)
        this.waterMeshes.set(key, wmesh)
      }
    }
  }

  // ---------------- 오브젝트 인스턴싱 동기화 ----------------

  syncWorldObjects(world: WorldState): void {
    this.syncTrees(world)
    this.syncRocks(world)
    this.syncBuildings(world)
    this.syncVillagers(world, performance.now() / 1000)
    this.syncAnimals(world)
    this.syncFlames(world)
  }

  private syncTrees(world: WorldState): void {
    let trunkN = 0
    let pineN = 0
    let broadN = 0
    for (const t of world.trees.values()) {
      const s = 0.45 + t.growth * 0.85
      const wx = t.x - world.size / 2 + 0.5
      const wz = t.z - world.size / 2 + 0.5
      const y = heightAt(world, t.x, t.z)
      const rot = (t.id % 628) / 100
      if (trunkN < 4000) {
        this.dummy.position.set(wx, y, wz)
        this.dummy.rotation.set(0, rot, 0)
        this.dummy.scale.set(s, s * (t.kind === 'palm' ? 1.15 : 1), s)
        this.dummy.updateMatrix()
        this.treesTrunk.setMatrixAt(trunkN, this.dummy.matrix)
        this.treesTrunk.setColorAt(trunkN, this.colorTmp.setHex(t.burning ? 0x442211 : 0x8a5a33))
        trunkN++
      }
      const isPine = t.kind !== 'oak' && t.kind !== 'palm'
      if (isPine && pineN < 4000) {
        this.dummy.position.set(wx, y, wz)
        this.dummy.rotation.set(0, rot, 0)
        this.dummy.scale.set(s, s, s)
        this.dummy.updateMatrix()
        this.treesPine.setMatrixAt(pineN, this.dummy.matrix)
        this.treesPine.setColorAt(
          pineN,
          this.colorTmp.setHex(t.burning ? 0xff6a00 : t.kind === 'pine' ? 0x2f6d3a : 0x4f8f4a),
        )
        pineN++
      } else if (!isPine && broadN < 4000) {
        this.dummy.position.set(wx, y, wz)
        this.dummy.rotation.set(0, rot, 0)
        this.dummy.scale.set(s * (t.kind === 'palm' ? 0.8 : 1), s * (t.kind === 'palm' ? 1.25 : 1), s)
        this.dummy.updateMatrix()
        this.treesBroad.setMatrixAt(broadN, this.dummy.matrix)
        this.treesBroad.setColorAt(
          broadN,
          this.colorTmp.setHex(t.burning ? 0xff6a00 : t.kind === 'palm' ? 0x63a84f : 0x559a4b),
        )
        broadN++
      }
    }
    this.treesTrunk.count = trunkN
    this.treesPine.count = pineN
    this.treesBroad.count = broadN
    this.treesTrunk.instanceMatrix.needsUpdate = true
    this.treesPine.instanceMatrix.needsUpdate = true
    this.treesBroad.instanceMatrix.needsUpdate = true
    if (this.treesTrunk.instanceColor) this.treesTrunk.instanceColor.needsUpdate = true
    if (this.treesPine.instanceColor) this.treesPine.instanceColor.needsUpdate = true
    if (this.treesBroad.instanceColor) this.treesBroad.instanceColor.needsUpdate = true
  }

  private syncRocks(world: WorldState): void {
    let n = 0
    for (const r of world.rocks.values()) {
      if (n >= 400) break
      const s = 0.55 + (r.amount / r.maxAmount) * 0.65
      this.dummy.position.set(r.x - world.size / 2 + 0.5, heightAt(world, r.x, r.z), r.z - world.size / 2 + 0.5)
      this.dummy.rotation.set((r.id % 100) / 160, (r.id % 77) / 24, 0)
      this.dummy.scale.set(s, s * 0.8, s)
      this.dummy.updateMatrix()
      this.rocks.setMatrixAt(n, this.dummy.matrix)
      n++
    }
    this.rocks.count = n
    this.rocks.instanceMatrix.needsUpdate = true
  }

  private syncBuildings(world: WorldState): void {
    const counts = new Map<BuildingType, number>()
    let fn = 0
    for (const t of Object.keys(BUILDING_DEFS) as BuildingType[]) counts.set(t, 0)
    for (const b of world.buildings.values()) {
      const cx = b.x + b.w / 2 - world.size / 2
      const cz = b.z + b.h / 2 - world.size / 2
      const y = heightAt(world, b.x, b.z)
      const body = this.bodies.get(b.type)
      const roof = this.roofs.get(b.type)
      if (!body || !roof) continue
      const i = counts.get(b.type) as number
      if (i >= 300) continue
      counts.set(b.type, i + 1)
      if (b.state === 'planned') {
        this.dummy.position.set(cx, y, cz)
        this.dummy.rotation.set(0, b.rot, 0)
        this.dummy.scale.set(b.w * 0.92, 0.5, b.h * 0.92)
        this.dummy.updateMatrix()
        if (fn < 300) {
          this.foundations.setMatrixAt(fn, this.dummy.matrix)
          fn++
        }
        this.dummy.scale.set(0.001, 0.001, 0.001)
        this.dummy.updateMatrix()
        body.setMatrixAt(i, this.dummy.matrix)
        roof.setMatrixAt(i, this.dummy.matrix)
      } else if (b.state === 'ruined') {
        this.dummy.position.set(cx, y, cz)
        this.dummy.rotation.set(0, b.rot, 0)
        this.dummy.scale.set(b.w * 0.9, 0.22, b.h * 0.9)
        this.dummy.updateMatrix()
        body.setMatrixAt(i, this.dummy.matrix)
        body.setColorAt(i, this.colorTmp.setHex(0x3a3a3a))
        this.dummy.scale.set(0.001, 0.001, 0.001)
        this.dummy.updateMatrix()
        roof.setMatrixAt(i, this.dummy.matrix)
      } else {
        const p = b.state === 'building' ? Math.max(0.12, b.progress) : 1
        this.dummy.position.set(cx, y, cz)
        this.dummy.rotation.set(0, b.rot, 0)
        this.dummy.scale.set(b.w * 0.92, p, b.h * 0.92)
        this.dummy.updateMatrix()
        body.setMatrixAt(i, this.dummy.matrix)
        if (b.state === 'building') body.setColorAt(i, this.colorTmp.setHex(0xd8cfc0))
        if (b.state === 'done') {
          this.dummy.position.set(cx, y + (b.type === 'farm' ? 0.12 : 1.0 * p), cz)
          this.dummy.rotation.set(0, b.rot + (b.type === 'house' ? Math.PI / 4 : 0), 0)
          this.dummy.scale.set(1, b.type === 'farm' ? 0.25 + b.crops * 0.8 : p, 1)
          this.dummy.updateMatrix()
          roof.setMatrixAt(i, this.dummy.matrix)
        } else {
          this.dummy.scale.set(0.001, 0.001, 0.001)
          this.dummy.updateMatrix()
          roof.setMatrixAt(i, this.dummy.matrix)
        }
      }
    }
    let total = 0
    for (const t of Object.keys(BUILDING_DEFS) as BuildingType[]) {
      const body = this.bodies.get(t)
      const roof = this.roofs.get(t)
      if (!body || !roof) continue
      const n = counts.get(t) as number
      body.count = n
      roof.count = n
      body.instanceMatrix.needsUpdate = true
      roof.instanceMatrix.needsUpdate = true
      if (body.instanceColor) body.instanceColor.needsUpdate = true
      total += n
    }
    this.foundations.count = fn
    this.foundations.instanceMatrix.needsUpdate = true
    void total
  }

  private syncVillagers(world: WorldState, tSec: number): void {
    let n = 0
    for (const v of world.villagers) {
      if (!v.alive || n >= 400) continue
      const wx = v.x - world.size / 2 + 0.5
      const wz = v.z - world.size / 2 + 0.5
      const bob = v.action.phase === 'move' ? Math.abs(Math.sin(tSec * 9 + v.id)) * 0.07 : 0
      this.dummy.position.set(wx, heightAt(world, Math.round(v.x - 0.5 + 0.5), Math.round(v.z)) + bob, wz)
      this.dummy.rotation.set(0, v.facing, 0)
      this.dummy.scale.set(1, 1, 1)
      this.dummy.updateMatrix()
      this.vBody.setMatrixAt(n, this.dummy.matrix)
      this.vBody.setColorAt(n, this.colorTmp.setHex(JOB_COLORS[v.job] ?? 0xffffff))
      this.vHead.setMatrixAt(n, this.dummy.matrix)
      n++
    }
    this.vBody.count = n
    this.vHead.count = n
    this.vBody.instanceMatrix.needsUpdate = true
    this.vHead.instanceMatrix.needsUpdate = true
    if (this.vBody.instanceColor) this.vBody.instanceColor.needsUpdate = true
  }

  private syncAnimals(world: WorldState): void {
    let n = 0
    for (const a of world.animals) {
      if (n >= 200) break
      const wx = a.x - world.size / 2 + 0.5
      const wz = a.z - world.size / 2 + 0.5
      this.dummy.position.set(wx, heightAt(world, Math.round(a.x), Math.round(a.z)), wz)
      this.dummy.rotation.set(0, a.facing, 0)
      this.dummy.scale.set(1, 1, 1)
      this.dummy.updateMatrix()
      this.aBody.setMatrixAt(n, this.dummy.matrix)
      this.aBody.setColorAt(n, this.colorTmp.setHex(a.kind === 'deer' ? 0xa4713d : 0xe8e4dc))
      this.aHead.setMatrixAt(n, this.dummy.matrix)
      n++
    }
    this.aBody.count = n
    this.aHead.count = n
    this.aBody.instanceMatrix.needsUpdate = true
    this.aHead.instanceMatrix.needsUpdate = true
    if (this.aBody.instanceColor) this.aBody.instanceColor.needsUpdate = true
  }

  private syncFlames(world: WorldState): void {
    let n = 0
    for (const f of world.fires) {
      if (n >= 300) break
      const wx = f.x - world.size / 2 + 0.5
      const wz = f.z - world.size / 2 + 0.5
      this.dummy.position.set(wx, heightAt(world, f.x, f.z), wz)
      this.dummy.rotation.set(0, f.id * 1.3, 0)
      const flick = 0.8 + Math.sin(performance.now() / 60 + f.id) * 0.25
      this.dummy.scale.set(flick, flick, flick)
      this.dummy.updateMatrix()
      this.flames.setMatrixAt(n, this.dummy.matrix)
      n++
    }
    this.flames.count = n
    this.flames.instanceMatrix.needsUpdate = true
  }

  // ---------------- 프레임 ----------------

  frame(world: WorldState, dtSec: number): void {
    if (this.disposed) return
    const now = performance.now()
    const frameDt = now - this.lastFrame
    this.lastFrame = now
    this.frameTimes.push(frameDt)
    if (this.frameTimes.length > 180) this.frameTimes.shift()
    const avgDt = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length
    this.fpsAvg = 1000 / avgDt
    const sorted = [...this.frameTimes].sort((a, b) => b - a)
    this.fpsLow = 1000 / (sorted[Math.floor(sorted.length * 0.01)] || avgDt)
    this.drawCalls = this.renderer.info.render.calls

    this.controls.update()

    // 낮/밤
    const d = daylight(world)
    this.sun.intensity = 0.12 + d * 2.5
    this.hemi.intensity = 0.28 + d * 0.8
    const skyDay = this.colorTmp.setHex(0x9ed4f2)
    const skyNight = new THREE.Color(0x101830)
    ;(this.scene.background as THREE.Color).copy(skyNight).lerp(skyDay, d)
    ;(this.scene.fog as THREE.Fog).color.copy(this.scene.background as THREE.Color)
    this.hemi.color.copy(skyNight).lerp(new THREE.Color(0xbfe3ff), d)
    this.sun.position.set(
      this.controls.target.x + 60,
      this.controls.target.y + 40 + d * 60,
      this.controls.target.z + 30,
    )
    this.sunTarget.position.copy(this.controls.target)

    // 물 출렁임
    const tSec = now / 1000
    for (const [key, m] of this.waterMeshes) {
      const [cks, ckz] = key.split(',').map(Number)
      m.position.y = Math.sin(tSec * 1.4 + cks * 2.1 + ckz * 1.3) * 0.03
      void m
    }

    // 빗줄기
    this.rain.visible = world.weather.kind !== 'clear'
    if (this.rain.visible) {
      const pos = this.rain.geometry.getAttribute('position') as THREE.BufferAttribute
      const arr = pos.array as Float32Array
      const fall = world.weather.kind === 'storm' ? 34 : 22
      for (let i = 0; i < arr.length; i += 3) {
        arr[i + 1] -= fall * dtSec
        if (arr[i + 1] < 0) {
          arr[i + 1] = 30
          arr[i] = (Math.random() - 0.5) * 70
          arr[i + 2] = (Math.random() - 0.5) * 70
        }
      }
      pos.needsUpdate = true
      this.rain.position.set(this.controls.target.x, 0, this.controls.target.z)
    }

    // 주민 프레임 갱신(이동 보간 없이 위치 직접 반영)
    this.syncVillagers(world, tSec)

    // 선택 링/경로
    const path = this.cb.selectedPath()
    if (path && path.length > 0) {
      const attr = this.pathLine.geometry.getAttribute('position') as THREE.BufferAttribute
      const arr = attr.array as Float32Array
      const n = Math.min(path.length, 4095)
      for (let i = 0; i < n; i++) {
        const p = path[i]
        arr[i * 3] = p.x - world.size / 2 + 0.5
        arr[i * 3 + 1] = heightAt(world, Math.round(p.x), Math.round(p.z)) + 0.15
        arr[i * 3 + 2] = p.z - world.size / 2 + 0.5
      }
      attr.needsUpdate = true
      this.pathLine.geometry.setDrawRange(0, n)
      this.pathLine.visible = true
    } else {
      this.pathLine.visible = false
    }

    this.renderer.render(this.scene, this.camera)
  }

  resize(): void {
    const w = this.canvas.clientWidth || window.innerWidth
    const h = this.canvas.clientHeight || window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  focusVillage(world: WorldState): void {
    this.controls.target.set(world.village.x - world.size / 2, 4, world.village.z - world.size / 2)
    this.camera.position.set(
      world.village.x - world.size / 2,
      55,
      world.village.z - world.size / 2 + 75,
    )
  }

  // ---------------- 입력/픽킹 ----------------

  private dragging = false
  private downPos = { x: 0, y: 0 }
  private moved = false
  private brushTimer = 0

  private attachInput(): void {
    const el = this.canvas
    el.addEventListener('pointerdown', this.onPointerDown)
    el.addEventListener('pointermove', this.onPointerMove)
    el.addEventListener('pointerup', this.onPointerUp)
    el.addEventListener('pointerleave', this.onPointerLeave)
    el.addEventListener('contextmenu', (e) => e.preventDefault())
    window.addEventListener('resize', this.onResize)
  }

  private onResize = (): void => {
    this.resize()
  }

  private tileFromEvent(e: PointerEvent): { x: number; z: number } | null {
    const rect = this.canvas.getBoundingClientRect()
    this.pointer.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1,
    )
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hits = this.raycaster.intersectObjects(this.terrainGroup.children, false)
    if (hits.length === 0) return null
    const p = hits[0].point
    const tx = Math.floor(p.x + this.halfOf())
    const tz = Math.floor(p.z + this.halfOf())
    return { x: tx, z: tz }
  }

  halfOf(): number {
    return this.currentHalf
  }

  private currentHalf = 80

  private onPointerDown = (e: PointerEvent): void => {
    this.downPos = { x: e.clientX, y: e.clientY }
    this.moved = false
    // 캔버스 밖에서 마우스를 놓아도 pointerup 수신 보장
    try {
      this.canvas.setPointerCapture(e.pointerId)
    } catch {}
    if (e.button === 0) {
      const tool = this.cb.getTool().tool
      if (tool !== 'select') {
        this.dragging = true
        const t = this.tileFromEvent(e)
        if (t) this.cb.onBrush(t)
      }
    }
  }

  private onPointerMove = (e: PointerEvent): void => {
    if (Math.hypot(e.clientX - this.downPos.x, e.clientY - this.downPos.y) > 6) this.moved = true
    const t = this.tileFromEvent(e)
    this.cb.onHoverTile(t)
    if (this.dragging && e.buttons === 1) {
      if (t) this.cb.onBrush(t)
    }
  }

  private onPointerUp = (e: PointerEvent): void => {
    if (this.dragging) {
      this.dragging = false
      this.cb.onBrushEnd()
    }
    if (e.button === 0 && !this.moved) {
      const t = this.tileFromEvent(e)
      if (t) this.cb.onClickTile(t)
    }
  }

  private onPointerLeave = (): void => {
    if (this.dragging) {
      this.dragging = false
      this.cb.onBrushEnd()
    }
    this.cb.onHoverTile(null)
  }

  // 오버레이 업데이트 (게임에서 매 프레임 호출)
  updateOverlays(world: WorldState, hover: { x: number; z: number } | null, sel: Villager | null): void {
    const { tool, buildingType, brushRadius } = this.cb.getTool()
    this.currentHalf = world.size / 2
    const showBrush = ['raise', 'lower', 'flatten', 'placeWater', 'removeWater', 'plantTree', 'removeTree'].includes(tool)
    if (hover && showBrush) {
      this.brushRing.visible = true
      this.brushFill.visible = true
      const wx = hover.x - world.size / 2 + 0.5
      const wz = hover.z - world.size / 2 + 0.5
      const y = heightAt(world, hover.x, hover.z) + 0.08
      this.brushRing.position.set(wx, y, wz)
      this.brushFill.position.set(wx, y, wz)
      const r = Math.max(1, brushRadius)
      this.brushRing.scale.set(r, 1, r)
      this.brushFill.scale.set(r, 1, r)
    } else {
      this.brushRing.visible = false
      this.brushFill.visible = false
    }
    if (hover && tool === 'placeBuilding') {
      const def = BUILDING_DEFS[buildingType]
      this.ghost.visible = true
      this.ghost.scale.set(def.w, 1.1, def.h)
      this.ghost.position.set(
        hover.x - world.size / 2 + def.w / 2,
        heightAt(world, hover.x, hover.z) + 0.55,
        hover.z - world.size / 2 + def.h / 2,
      )
      const ok = canPlaceBuilding(world, hover.x, hover.z, buildingType)
      ;(this.ghost.material as THREE.MeshBasicMaterial).color.setHex(ok ? 0x66ff99 : 0xff5555)
    } else {
      this.ghost.visible = false
    }
    if (sel && sel.alive) {
      this.selRing.visible = true
      this.selRing.position.set(
        sel.x - world.size / 2 + 0.5,
        heightAt(world, Math.round(sel.x), Math.round(sel.z)) + 0.05,
        sel.z - world.size / 2 + 0.5,
      )
      const pulse = 1 + Math.sin(performance.now() / 300) * 0.12
      this.selRing.scale.set(pulse, 1, pulse)
    } else {
      this.selRing.visible = false
    }
  }

  dispose(): void {
    this.disposed = true
    this.controls.dispose()
    this.renderer.dispose()
    window.removeEventListener('resize', this.onResize)
  }

  // 클릭 시 개체 탐색 (우선순위: 주민 > 동물 > 건물 > 나무 > 바위)
  findEntityAt(world: WorldState, tile: { x: number; z: number }): { kind: string; id: number } | null {
    let best: { kind: string; id: number; d: number } | null = null
    const consider = (kind: string, id: number, d: number, radius: number) => {
      if (d <= radius && (!best || d < best.d)) best = { kind, id, d }
    }
    for (const v of world.villagers) {
      if (!v.alive) continue
      consider('villager', v.id, Math.hypot(v.x - tile.x, v.z - tile.z), 1.6)
    }
    for (const a of world.animals) {
      consider('animal', a.id, Math.hypot(a.x - tile.x, a.z - tile.z), 1.2)
    }
    for (const b of world.buildings.values()) {
      const cx = b.x + (b.w - 1) / 2
      const cz = b.z + (b.h - 1) / 2
      const d = Math.max(Math.abs(tile.x - cx), Math.abs(tile.z - cz))
      if (d <= Math.max(b.w, b.h) / 2 + 0.6) consider('building', b.id, d, 99)
    }
    const t = treeAt(world, tile.x, tile.z)
    if (t) consider('tree', t.id, 0.1, 99)
    const r = rockAt(world, tile.x, tile.z)
    if (r) consider('rock', r.id, 0.1, 99)
    const result = best as { kind: string; id: number; d: number } | null
    return result ? { kind: result.kind, id: result.id } : null
  }
}
