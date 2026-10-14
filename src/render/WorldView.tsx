/* 3D 월드 렌더러: 청크 지형, 수면, InstancedMesh 군집, 낮/밤, 날씨, 선택/브러시 */
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useWorld } from '../sim/store';
import { HEIGHT_SCALE, heightAt } from '../core/terrain';
import { sunIntensity, isNight } from '../sim/environment';

function biomeColor(h: number, waterLevel: number, moistPseudo: number): [number, number, number] {
  if (h < waterLevel - 0.06) return [0.16, 0.32, 0.55];
  if (h < waterLevel - 0.015) return [0.3, 0.5, 0.62];
  if (h < waterLevel + 0.015) return [0.87, 0.78, 0.55]; // 해변
  if (h > 0.78) return [0.62, 0.62, 0.68]; // 설산
  if (h > 0.62) return [0.45, 0.42, 0.33]; // 언덕
  if (moistPseudo > 0.55) return [0.16, 0.42, 0.2]; // 숲
  return [0.42, 0.62, 0.3]; // 평원
}

export default function WorldView() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const size = () => useWorld.getState().terrain.size || 96;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87b5d6);
    scene.fog = new THREE.Fog(0x87b5d6, 90, 260);

    const camera = new THREE.PerspectiveCamera(50, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.set(40, 42, 40);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.minDistance = 8;
    controls.maxDistance = 220;
    controls.target.set(0, 2, 0);

    // 조명
    const sun = new THREE.DirectionalLight(0xfff2dd, 2.2);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -70; sun.shadow.camera.right = 70;
    sun.shadow.camera.top = 70; sun.shadow.camera.bottom = -70;
    scene.add(sun);
    scene.add(sun.target);
    const hemi = new THREE.HemisphereLight(0xbdd8ff, 0x6a7f56, 0.7);
    scene.add(hemi);
    const amb = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(amb);

    // 청크 지형 (2x2 청크 → 프러스텀 컬링 단위)
    const CHUNKS = 2;
    let chunkMeshes: THREE.Mesh[] = [];
    let waterMesh: THREE.Mesh | null = null;
    let brushRing: THREE.Mesh | null = null;
    let selRing: THREE.Mesh | null = null;
    let lastHeightsRef: Float32Array | null = null;
    let lastTerrainKey = '';
    let lastRebuild = 0;

    const buildTerrain = () => {
      const st = useWorld.getState();
      const n = st.terrain.size;
      const wl = st.terrain.waterLevel;
      for (const m of chunkMeshes) { scene.remove(m); m.geometry.dispose(); }
      chunkMeshes = [];
      const per = Math.floor(n / CHUNKS);
      for (let cz = 0; cz < CHUNKS; cz++) {
        for (let cx = 0; cx < CHUNKS; cx++) {
          const x0 = cx * per;
          const z0 = cz * per;
          const x1 = cx === CHUNKS - 1 ? n : x0 + per + 1;
          const z1 = cz === CHUNKS - 1 ? n : z0 + per + 1;
          const w = x1 - x0;
          const d = z1 - z0;
          const geo = new THREE.PlaneGeometry(w - 1, d - 1, w - 1, d - 1);
          geo.rotateX(-Math.PI / 2);
          const pos = geo.attributes.position;
          const colors = new Float32Array(pos.count * 3);
          for (let i = 0; i < pos.count; i++) {
            const lx = Math.round(pos.getX(i) + (w - 1) / 2);
            const lz = Math.round(pos.getZ(i) + (d - 1) / 2);
            const gx = Math.min(n - 1, x0 + lx);
            const gz = Math.min(n - 1, z0 + lz);
            const h = st.heights[gz * n + gx];
            const pseudo = ((gx * 73 + gz * 149) % 100) / 100;
            pos.setX(i, gx - n / 2 + 0); // 월드 좌표
            pos.setZ(i, gz - n / 2 + 0);
            pos.setY(i, h * HEIGHT_SCALE);
            const [r, g, b] = biomeColor(h, wl, pseudo);
            // 수중은 어둡게
            const shade = h < wl ? 0.85 : 1;
            colors[i * 3] = r * shade; colors[i * 3 + 1] = g * shade; colors[i * 3 + 2] = b * shade;
          }
          geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
          geo.computeVertexNormals();
          const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
          const mesh = new THREE.Mesh(geo, mat);
          mesh.receiveShadow = true;
          scene.add(mesh);
          chunkMeshes.push(mesh);
        }
      }
      // 수면
      if (waterMesh) { scene.remove(waterMesh); waterMesh.geometry.dispose(); }
      const wgeo = new THREE.PlaneGeometry(n, n);
      wgeo.rotateX(-Math.PI / 2);
      const wmat = new THREE.MeshStandardMaterial({ color: 0x3d7dc4, transparent: true, opacity: 0.72, roughness: 0.25, metalness: 0.1 });
      waterMesh = new THREE.Mesh(wgeo, wmat);
      waterMesh.position.y = wl * HEIGHT_SCALE + 0.12;
      waterMesh.receiveShadow = true;
      scene.add(waterMesh);
      // 브러시 링 / 선택 링
      if (!brushRing) {
        brushRing = new THREE.Mesh(
          new THREE.RingGeometry(0.9, 1.1, 40),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, side: THREE.DoubleSide }),
        );
        brushRing.rotation.x = -Math.PI / 2;
        scene.add(brushRing);
      }
      if (!selRing) {
        selRing = new THREE.Mesh(
          new THREE.RingGeometry(0.7, 0.95, 32),
          new THREE.MeshBasicMaterial({ color: 0xffd43b, transparent: true, opacity: 0.95, side: THREE.DoubleSide }),
        );
        selRing.rotation.x = -Math.PI / 2;
        scene.add(selRing);
      }
      lastHeightsRef = st.heights;
      lastTerrainKey = `${st.seed}:${n}:${wl}`;
      lastRebuild = performance.now();
    };

    // Instanced 군집
    const MAXT = 4000;
    const MAXV = 400;
    const dummy = new THREE.Object3D();
    const mkInst = (geo: THREE.BufferGeometry, mat: THREE.Material, max: number) => {
      const m = new THREE.InstancedMesh(geo, mat, max);
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      m.count = 0;
      scene.add(m);
      return m;
    };
    const trunkMesh = mkInst(new THREE.CylinderGeometry(0.14, 0.2, 1.1, 6), new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.9 }), MAXT);
    const leafMesh = mkInst(new THREE.ConeGeometry(0.85, 1.9, 7), new THREE.MeshStandardMaterial({ color: 0x2f7a35, roughness: 0.85 }), MAXT);
    const pineMesh = mkInst(new THREE.ConeGeometry(0.8, 2.4, 7), new THREE.MeshStandardMaterial({ color: 0x1f5c2e, roughness: 0.85 }), MAXT);
    const rockMesh = mkInst(new THREE.DodecahedronGeometry(0.55, 0), new THREE.MeshStandardMaterial({ color: 0x8d8d99, roughness: 0.95 }), 800);
    const bushMesh = mkInst(new THREE.SphereGeometry(0.55, 8, 6), new THREE.MeshStandardMaterial({ color: 0x4c9a3f, roughness: 0.9 }), 1200);
    const bodyMesh = mkInst(new THREE.CapsuleGeometry(0.28, 0.7, 4, 8), new THREE.MeshStandardMaterial({ roughness: 0.7 }), MAXV);
    const headMesh = mkInst(new THREE.SphereGeometry(0.24, 10, 8), new THREE.MeshStandardMaterial({ color: 0xf2c89b, roughness: 0.7 }), MAXV);
    const animalMesh = mkInst(new THREE.CapsuleGeometry(0.22, 0.55, 4, 8), new THREE.MeshStandardMaterial({ color: 0xb08954, roughness: 0.8 }), 200);
    const houseBase = mkInst(new THREE.BoxGeometry(1.8, 1.3, 1.8), new THREE.MeshStandardMaterial({ color: 0xd9b382, roughness: 0.85 }), 220);
    const houseRoof = mkInst(new THREE.ConeGeometry(1.5, 1.1, 4), new THREE.MeshStandardMaterial({ color: 0xa34a2e, roughness: 0.85 }), 220);
    const fireMesh = mkInst(new THREE.ConeGeometry(0.6, 1.6, 7), new THREE.MeshStandardMaterial({ color: 0xff6a00, emissive: 0xff4400, emissiveIntensity: 2 }), 60);
    // 빗방울
    const RAIN_N = 900;
    const rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(RAIN_N * 3), 3));
    const rain = new THREE.Points(rainGeo, new THREE.PointsMaterial({ color: 0x9fc4ff, size: 0.35, transparent: true, opacity: 0.7 }));
    rain.visible = false;
    rain.frustumCulled = false;
    scene.add(rain);
    // 경로 표시 라인 풀
    const pathGroup = new THREE.Group();
    scene.add(pathGroup);

    const groundPlane = new THREE.PlaneGeometry(400, 400);
    groundPlane.rotateX(-Math.PI / 2);
    const groundHit = new THREE.Mesh(groundPlane, new THREE.MeshBasicMaterial({ visible: false }));
    groundHit.position.y = 0;
    scene.add(groundHit);

    const ray = new THREE.Raycaster();
    const ptr = new THREE.Vector2();
    const cellFromEvent = (e: PointerEvent) => {
      const r = renderer.domElement.getBoundingClientRect();
      ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      ray.setFromCamera(ptr, camera);
      // 지형 메시들과 교차
      const hits = ray.intersectObjects(chunkMeshes, false);
      if (hits.length > 0) {
        const p = hits[0].point;
        const n = useWorld.getState().terrain.size;
        return { x: p.x + n / 2, z: p.z + n / 2, y: p.y };
      }
      return null;
    };

    let brushing = false;
    const onDown = (e: PointerEvent) => {
      if (e.button === 2) return;
      const st = useWorld.getState();
      // 좌클릭: 카메라 회전과 편집 충돌 방지 — 편집 도구일 때는 컨트롤 비활성화
      if (st.tool !== 'select') {
        controls.enableRotate = false;
        brushing = true;
        const c = cellFromEvent(e);
        if (c) {
          if (st.tool === 'raise' || st.tool === 'lower' || st.tool === 'flatten' || st.tool === 'water') st.applyBrushAt(c.x, c.z);
          else st.clickAt(c.x, c.z);
        }
      } else {
        const c = cellFromEvent(e);
        if (c) useWorld.getState().clickAt(c.x, c.z);
      }
    };
    const onMove = (e: PointerEvent) => {
      const st = useWorld.getState();
      const c = cellFromEvent(e);
      if (brushRing) {
        if (c && (st.tool === 'raise' || st.tool === 'lower' || st.tool === 'flatten' || st.tool === 'water' || st.tool === 'plantTree')) {
          brushRing.visible = true;
          const n = st.terrain.size;
          brushRing.position.set(c.x - n / 2, c.y + 0.25, c.z - n / 2);
          const s = st.tool === 'plantTree' ? 1.8 : st.brushRadius;
          brushRing.scale.set(s, s, 1);
        } else brushRing.visible = false;
      }
      if (brushing && c) {
        if (st.tool === 'raise' || st.tool === 'lower' || st.tool === 'flatten' || st.tool === 'water') st.applyBrushAt(c.x, c.z);
      }
    };
    const onUp = () => { brushing = false; controls.enableRotate = true; };
    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);

    buildTerrain();

    let raf = 0;
    const clock = new THREE.Clock();
    const tmpColor = new THREE.Color();
    let frame = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const dt = Math.min(0.1, clock.getDelta());
      void dt;
      frame++;
      const st = useWorld.getState();
      const n = st.terrain.size;

      // 지형 변경 시 재빌드 (최대 5Hz)
      const key = `${st.seed}:${n}:${st.terrain.waterLevel}`;
      if ((st.heights !== lastHeightsRef || key !== lastTerrainKey) && performance.now() - lastRebuild > 200) {
        buildTerrain();
      }

      // 낮/밤
      const si = sunIntensity(st.env.timeOfDay);
      const night = isNight(st.env.timeOfDay);
      sun.intensity = night ? 0.12 : 0.4 + si * 1.8;
      hemi.intensity = night ? 0.18 : 0.5 + si * 0.4;
      const ang = ((st.env.timeOfDay - 6) / 12) * Math.PI;
      sun.position.set(Math.cos(ang) * 80, Math.max(8, Math.sin(ang) * 80), 30);
      scene.background = new THREE.Color(night ? 0x0b1026 : st.env.weather === '맑음' ? 0x87b5d6 : 0x6f8299);
      scene.fog = new THREE.Fog(scene.background as THREE.Color, 90, 260);

      const yOf = (x: number, z: number) => heightAt({ heights: st.heights, settings: st.terrain }, x, z) * HEIGHT_SCALE;

      // 나무/바위/덤불 인스턴싱
      let ti = 0, pi = 0, ri = 0, bi = 0;
      for (const t of st.trees) {
        if (!t.alive) continue;
        const y = yOf(t.x, t.z);
        if (t.kind === 'pine') {
          if (pi >= MAXT) break;
          dummy.position.set(t.x - n / 2, y + 1.3 * t.growth, t.z - n / 2);
          dummy.scale.setScalar(Math.max(0.15, t.growth));
          dummy.rotation.set(0, (t.id * 37) % 6, 0);
          dummy.updateMatrix();
          pineMesh.setMatrixAt(pi++, dummy.matrix);
        } else {
          if (ti >= MAXT) break;
          dummy.position.set(t.x - n / 2, y + 0.55 * t.growth, t.z - n / 2);
          dummy.scale.setScalar(Math.max(0.15, t.growth));
          dummy.rotation.set(0, (t.id * 53) % 6, 0);
          dummy.updateMatrix();
          trunkMesh.setMatrixAt(ti, dummy.matrix);
          dummy.position.set(t.x - n / 2, y + (1.1 + 0.7) * t.growth, t.z - n / 2);
          dummy.updateMatrix();
          leafMesh.setMatrixAt(ti, dummy.matrix);
          ti++;
        }
      }
      trunkMesh.count = ti; leafMesh.count = ti;
      pineMesh.count = pi;
      trunkMesh.instanceMatrix.needsUpdate = true;
      leafMesh.instanceMatrix.needsUpdate = true;
      pineMesh.instanceMatrix.needsUpdate = true;

      for (const r of st.rocks) {
        if (!r.alive || ri >= 800) continue;
        dummy.position.set(r.x - n / 2, yOf(r.x, r.z) + 0.25, r.z - n / 2);
        dummy.scale.setScalar(0.8 + ((r.id * 13) % 10) / 22);
        dummy.rotation.set(0, (r.id * 29) % 6, 0);
        dummy.updateMatrix();
        rockMesh.setMatrixAt(ri++, dummy.matrix);
      }
      rockMesh.count = ri;
      rockMesh.instanceMatrix.needsUpdate = true;

      for (const b of st.bushes) {
        if (!b.alive || bi >= 1200) continue;
        dummy.position.set(b.x - n / 2, yOf(b.x, b.z) + 0.35, b.z - n / 2);
        dummy.scale.set(1, 0.8, 1);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        bushMesh.setMatrixAt(bi, dummy.matrix);
        bushMesh.setColorAt(bi, tmpColor.set(b.food > 0 ? 0x4c9a3f : 0x6f7f4a));
        bi++;
      }
      bushMesh.count = bi;
      bushMesh.instanceMatrix.needsUpdate = true;
      if (bushMesh.instanceColor) bushMesh.instanceColor.needsUpdate = true;

      // 주민 (몸통+머리, 직업별 색상)
      const jobColor: Record<string, number> = { '목수': 0x8a5a2b, '석공': 0x7d7d8d, '농부': 0x4c9a3f, '운반꾼': 0x3f6fbf, '건설자': 0xbf7a3f, '무직': 0x9a8f7f };
      let vi = 0;
      for (const v of st.villagers) {
        if (vi >= MAXV) break;
        const y = yOf(v.x, v.z);
        dummy.position.set(v.x - n / 2, y + 0.65, v.z - n / 2);
        dummy.scale.setScalar(1);
        dummy.rotation.set(0, (v.id * 71 + frame * 0) % 6, 0);
        dummy.updateMatrix();
        bodyMesh.setMatrixAt(vi, dummy.matrix);
        bodyMesh.setColorAt(vi, tmpColor.set(jobColor[v.job] ?? 0x9a8f7f));
        dummy.position.set(v.x - n / 2, y + 1.45, v.z - n / 2);
        dummy.updateMatrix();
        headMesh.setMatrixAt(vi, dummy.matrix);
        vi++;
      }
      bodyMesh.count = vi; headMesh.count = vi;
      bodyMesh.instanceMatrix.needsUpdate = true;
      headMesh.instanceMatrix.needsUpdate = true;
      if (bodyMesh.instanceColor) bodyMesh.instanceColor.needsUpdate = true;

      // 동물
      let ai = 0;
      for (const a of st.animals) {
        if (ai >= 200) break;
        dummy.position.set(a.x - n / 2, yOf(a.x, a.z) + 0.4, a.z - n / 2);
        dummy.scale.set(a.kind === 'rabbit' ? 0.6 : 1, a.kind === 'rabbit' ? 0.6 : 1, a.kind === 'rabbit' ? 0.6 : 1);
        dummy.rotation.set(0, (a.id * 37) % 6, 0);
        dummy.updateMatrix();
        animalMesh.setMatrixAt(ai++, dummy.matrix);
      }
      animalMesh.count = ai;
      animalMesh.instanceMatrix.needsUpdate = true;

      // 건물 (미완성은 반투명+낮게)
      let hi = 0;
      for (const b of st.buildings) {
        if (hi >= 220) break;
        const y = yOf(b.x, b.z);
        const s = b.complete ? 1 : 0.4 + b.progress * 0.6;
        dummy.position.set(b.x - n / 2, y + 0.65 * s, b.z - n / 2);
        dummy.scale.set(s, s, s);
        dummy.rotation.set(0, (b.id * 17) % 4, 0);
        dummy.updateMatrix();
        houseBase.setMatrixAt(hi, dummy.matrix);
        const palette: Record<string, number> = { house: 0xd9b382, storage: 0x8a6f4d, farm: 0x7fae4c, lumber: 0x6b4a2f, quarry: 0x8d8d99 };
        houseBase.setColorAt(hi, tmpColor.set(palette[b.kind] ?? 0xd9b382));
        dummy.position.set(b.x - n / 2, y + (1.3 + 0.55) * s, b.z - n / 2);
        dummy.updateMatrix();
        houseRoof.setMatrixAt(hi, dummy.matrix);
        houseRoof.setColorAt(hi, tmpColor.set(b.kind === 'farm' ? 0x5c8a34 : 0xa34a2e));
        hi++;
      }
      houseBase.count = hi; houseRoof.count = hi;
      houseBase.instanceMatrix.needsUpdate = true;
      houseRoof.instanceMatrix.needsUpdate = true;
      if (houseBase.instanceColor) houseBase.instanceColor.needsUpdate = true;
      if (houseRoof.instanceColor) houseRoof.instanceColor.needsUpdate = true;

      // 화재
      let fi = 0;
      for (const f of st.fires) {
        if (fi >= 60) break;
        dummy.position.set(f.x - n / 2, yOf(f.x, f.z) + 0.8, f.z - n / 2);
        const flick = 0.9 + Math.sin(performance.now() / 90 + f.id) * 0.25;
        dummy.scale.set(flick * f.intensity, flick * f.intensity * 1.2, flick * f.intensity);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        fireMesh.setMatrixAt(fi++, dummy.matrix);
      }
      fireMesh.count = fi;
      fireMesh.instanceMatrix.needsUpdate = true;

      // 비
      const raining = st.env.raining;
      rain.visible = raining > 0.05;
      if (rain.visible) {
        const pos = rainGeo.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < RAIN_N; i++) {
          let y = pos.getY(i) - dt * 28;
          if (y < 0) {
            pos.setXYZ(i, (Math.random() - 0.5) * n, 18 + Math.random() * 8, (Math.random() - 0.5) * n);
            y = pos.getY(i);
          } else pos.setY(i, y);
        }
        pos.needsUpdate = true;
        (rain.material as THREE.PointsMaterial).opacity = Math.min(0.85, raining);
      }

      // 선택 링 + 경로 표시 (5Hz 갱신)
      if (selRing) {
        const sel = st.selection;
        if (sel && sel.kind === 'villager') {
          const v = st.villagers.find((x) => x.id === sel.id);
          if (v) {
            selRing.visible = true;
            selRing.position.set(v.x - n / 2, yOf(v.x, v.z) + 0.3, v.z - n / 2);
          } else selRing.visible = false;
        } else if (sel && sel.kind === 'building') {
          const b = st.buildings.find((x) => x.id === sel.id);
          if (b) {
            selRing.visible = true;
            selRing.position.set(b.x - n / 2, yOf(b.x, b.z) + 0.3, b.z - n / 2);
            selRing.scale.set(2, 2, 1);
          } else selRing.visible = false;
        } else {
          selRing.visible = false;
          if (selRing.scale.x !== 1) selRing.scale.set(1, 1, 1);
        }
      }
      if (frame % 12 === 0) {
        while (pathGroup.children.length) {
          const c = pathGroup.children.pop()!;
          pathGroup.remove(c);
        }
        if (st.showPaths) {
          const sel = st.selection;
          const list = sel && sel.kind === 'villager'
            ? st.villagers.filter((v) => v.id === sel.id)
            : st.villagers.slice(0, 12);
          for (const v of list) {
            if (v.path.length < 2 || v.pathIdx >= v.path.length) continue;
            const pts: THREE.Vector3[] = [];
            pts.push(new THREE.Vector3(v.x - n / 2, yOf(v.x, v.z) + 0.5, v.z - n / 2));
            for (let i = v.pathIdx; i < v.path.length; i++) {
              const p = v.path[i];
              pts.push(new THREE.Vector3(p.x - n / 2, yOf(p.x, p.z) + 0.5, p.z - n / 2));
            }
            const g = new THREE.BufferGeometry().setFromPoints(pts);
            const line = new THREE.Line(g, new THREE.LineBasicMaterial({ color: sel && sel.kind === 'villager' && sel.id === v.id ? 0xffd43b : 0xffffff, transparent: true, opacity: 0.8 }));
            pathGroup.add(line);
          }
        }
      }
      // 수면 애니메이션
      if (waterMesh) waterMesh.position.y = st.terrain.waterLevel * HEIGHT_SCALE + 0.12 + Math.sin(performance.now() / 900) * 0.05;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh || o instanceof THREE.InstancedMesh || o instanceof THREE.Points) {
          o.geometry.dispose();
        }
      });
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '100%', cursor: 'crosshair' }} />;
}
