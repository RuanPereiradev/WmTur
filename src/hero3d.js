// Título 3D do topo (carregado só depois da página, em segundo plano).
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import FALLBACK from 'three/examples/fonts/droid/droid_serif_bold.typeface.json?url';

const FONT_URL = 'https://raw.githubusercontent.com/google/fonts/main/ofl/dmserifdisplay/DMSerifDisplay-Italic.ttf';

export async function mount(el, { lines, colors }) {
  let font;
  try { font = new FontLoader().parse(await new TTFLoader().loadAsync(FONT_URL)); }
  catch (e) { font = await new FontLoader().loadAsync(FALLBACK); }

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  el.appendChild(renderer.domElement);
  Object.assign(renderer.domElement.style, { display: 'block', width: '100%', height: '100%' });

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  scene.add(new THREE.HemisphereLight(0xfff4e0, 0x0d4f55, 1.3));
  const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(-3, 4, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x3fd0d4, 2.2); rim.position.set(4, -2, -3); scene.add(rim);
  const warm = new THREE.PointLight(0xf2894a, 18, 20); warm.position.set(2, 1, 3); scene.add(warm);

  const root = new THREE.Group(); scene.add(root);
  const mats = [
    new THREE.MeshPhysicalMaterial({ color: colors[0], roughness: 0.35, metalness: 0.05, clearcoat: 0.6 }),
    new THREE.MeshPhysicalMaterial({ color: colors[1], roughness: 0.25, metalness: 0.1, clearcoat: 1 }),
  ];
  const size = 1, lh = 1.18;
  const words = [];
  lines.forEach((line, li) => {
    let x = 0;
    line.split(' ').forEach((w, wi) => {
      const g = new TextGeometry(w, { font, size, height: 0.28, depth: 0.28, curveSegments: 10, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.025, bevelSegments: 4 });
      g.computeBoundingBox();
      const m = new THREE.Mesh(g, mats[li % 2]);
      const base = new THREE.Vector3(x, -li * lh, 0);
      m.position.copy(base);
      root.add(m);
      words.push({ m, base, bb: g.boundingBox, ph: li * 1.3 + wi * 0.9 });
      x += g.boundingBox.max.x + size * 0.28;
    });
  });
  const box = new THREE.Box3();
  words.forEach(w => { box.expandByPoint(w.bb.min.clone().add(w.base)); box.expandByPoint(w.bb.max.clone().add(w.base)); });
  const tw0 = box.max.x - box.min.x, th0 = box.max.y - box.min.y;
  if (!isFinite(tw0) || !isFinite(th0) || tw0 <= 0 || th0 <= 0) throw new Error('bad text bounds');
  const cx = (box.min.x + box.max.x) / 2, cy = (box.min.y + box.max.y) / 2;
  words.forEach(w => { w.base.x -= cx; w.base.y -= cy; });
  const k = 10 / tw0; root.scale.setScalar(k);
  const tw = tw0 * k, th = th0 * k;

  const fit = () => {
    const w = el.clientWidth || 1, h = el.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const vf = THREE.MathUtils.degToRad(camera.fov);
    const distH = (th * 1.35) / (2 * Math.tan(vf / 2));
    const distW = (tw * 1.12) / (2 * Math.tan(vf / 2) * camera.aspect);
    camera.position.set(0, 0, Math.max(distH, distW, 4) + 0.6);
    camera.updateProjectionMatrix();
  };
  fit();
  const ro = new ResizeObserver(fit); ro.observe(el);

  const mouse = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
  const onMove = (e) => { const r = el.getBoundingClientRect(); mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2; mouse.y = ((e.clientY - r.top) / r.height - 0.5) * 2; };
  addEventListener('pointermove', onMove);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let raf, t0 = performance.now();
  const tick = () => {
    const t = still ? 0 : (performance.now() - t0) / 1000;
    cur.x += (mouse.x - cur.x) * 0.05; cur.y += (mouse.y - cur.y) * 0.05;
    root.rotation.y = -0.12 + Math.sin(t * 0.5) * 0.06 + cur.x * 0.15;
    root.rotation.x = 0.05 + Math.sin(t * 0.7) * 0.03 + cur.y * 0.1;
    words.forEach(w => {
      w.m.position.set(w.base.x, w.base.y + Math.sin(t * 1.4 + w.ph) * 0.06, Math.sin(t * 1.1 + w.ph) * 0.12);
      w.m.rotation.z = Math.sin(t * 0.9 + w.ph) * 0.025;
    });
    warm.position.x = Math.sin(t * 0.6) * 3;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };
  tick();
  el.dataset.ready = '1';

  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); removeEventListener('pointermove', onMove);
    words.forEach(w => w.m.geometry.dispose()); mats.forEach(m => m.dispose());
    renderer.dispose(); renderer.domElement.remove();
  };
}
