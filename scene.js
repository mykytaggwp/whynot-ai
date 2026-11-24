/* 3D hero scene: a glowing "core" ringed by orbiting chat bubbles, reacting to the pointer. */
(() => {
  'use strict';
  const hero = document.querySelector('.hero');
  const canvas = document.getElementById('scene');
  if (!hero || !canvas || !window.THREE) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { canvas.remove(); return; }
  const T = THREE;
  let renderer;
  try { renderer = new T.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' }); }
  catch (e) { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(42, 1, .1, 60);
  camera.position.z = 11;

  scene.add(new T.AmbientLight(0xffffff, .55));
  const key = new T.PointLight(0xffd400, 60, 40); key.position.set(4, 4, 6); scene.add(key);
  const rim = new T.DirectionalLight(0xffffff, .8); rim.position.set(-5, 3, 4); scene.add(rim);

  const root = new T.Group(); scene.add(root);
  const YEL = 0xffd400;

  // core
  const core = new T.Mesh(new T.IcosahedronGeometry(1.25, 1),
    new T.MeshStandardMaterial({ color: YEL, emissive: 0x6b5600, roughness: .35, metalness: .25, flatShading: true }));
  root.add(core);
  const wire = new T.Mesh(new T.IcosahedronGeometry(1.7, 1),
    new T.MeshBasicMaterial({ color: YEL, wireframe: true, transparent: true, opacity: .35 }));
  root.add(wire);

  // rings with bubbles
  const rings = [];
  [[3.1, .6, .2], [4.0, -.9, .5], [4.9, 1.2, -.3]].forEach(([r, rx, rz], i) => {
    const g = new T.Group(); g.rotation.set(rx, 0, rz);
    g.add(new T.Mesh(new T.TorusGeometry(r, .012, 8, 140),
      new T.MeshBasicMaterial({ color: i === 1 ? 0xffffff : YEL, transparent: true, opacity: .28 })));
    const n = 4 + i * 2;
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      const s = .12 + Math.random() * .22;
      const m = new T.Mesh(new T.SphereGeometry(s, 20, 20),
        new T.MeshStandardMaterial({ color: k % 3 === 0 ? 0xffffff : (k % 3 === 1 ? YEL : 0x232326), roughness: .3, metalness: .2, emissive: k % 3 === 1 ? 0x3a3000 : 0x000000 }));
      m.position.set(Math.cos(a) * r, Math.sin(a) * r, 0);
      g.add(m);
    }
    root.add(g); rings.push({ g, sp: (i % 2 ? -1 : 1) * (.18 + i * .07) });
  });

  // particles
  const N = 450, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = 6 + Math.random() * 9, a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1);
    pos.set([r * Math.sin(b) * Math.cos(a), r * Math.sin(b) * Math.sin(a) * .7, r * Math.cos(b) - 2], i * 3);
  }
  const pg = new T.BufferGeometry(); pg.setAttribute('position', new T.BufferAttribute(pos, 3));
  const pts = new T.Points(pg, new T.PointsMaterial({ color: YEL, size: .045, transparent: true, opacity: .7, depthWrite: false }));
  scene.add(pts);

  let w = 0, h = 0, mx = 0, my = 0, tx = 0, ty = 0, visible = true, scrollY = 0;
  function resize() {
    w = hero.clientWidth; h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const wide = w >= 1024;
    root.position.x = wide ? 4.6 : 0;
    root.position.y = wide ? 1.1 : 3.2;
    root.scale.setScalar(wide ? .82 : .62);
  }
  addEventListener('resize', resize); resize();
  hero.addEventListener('pointermove', e => {
    mx = (e.clientX / innerWidth - .5) * 2; my = (e.clientY / innerHeight - .5) * 2;
  });
  addEventListener('scroll', () => { scrollY = Math.min(scrollY = window.scrollY, 1200); }, { passive: true });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 }).observe(hero);

  const clock = new T.Clock();
  (function loop() {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    tx += (mx - tx) * .05; ty += (my - ty) * .05;
    core.rotation.set(t * .35 + ty * .4, t * .5 + tx * .6, 0);
    wire.rotation.set(-t * .22, t * .28, 0);
    const pulse = 1 + Math.sin(t * 2) * .05; core.scale.setScalar(pulse);
    rings.forEach(r => { r.g.children.forEach(c => { if (c.geometry.type === 'SphereGeometry') return; }); r.g.rotation.z += r.sp * .004; r.g.rotation.y = Math.sin(t * .4 + r.sp) * .35 + tx * .3; });
    root.rotation.y = tx * .35; root.rotation.x = ty * .2 - scrollY * .0006;
    root.position.y += ((w >= 1024 ? 1.1 : 3.2) + scrollY * .004 - root.position.y) * .1;
    pts.rotation.y = t * .03 + tx * .08; pts.rotation.x = ty * .05;
    key.position.x = 4 + tx * 3; key.position.y = 4 - ty * 3;
    renderer.render(scene, camera);
  })();
})();
