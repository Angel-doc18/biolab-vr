// What a model acts out while the teacher explains it (see demos.js): a marker
// for the thing that moves (food, blood, air, a nerve impulse) with a fading
// trail, streams of small dots (bile, oxygen, heat lost), and parts that move
// only at their own step (a forearm bending, a vacuole filling), and colours that
// change (an indicator at the end point) and stay changed until the end.
//
// demoRef.current: { on, key, steps, step, dur }. The marker goes from wherever
// it is along the step's path in about the time the teacher takes to say it.
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from './r3f';
import { pose } from './anim';

const TRAIL = 7;
const DOTS = 14;
const ease = (u) => (u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2);

// The point a fraction u (0 to 1) of the way along an open line of points.
export function along(out, pts, u) {
  if (!pts?.length) return out;
  if (pts.length === 1) return out.set(pts[0][0], pts[0][1], pts[0][2]);
  const lens = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    lens.push(l);
    total += l;
  }
  let d = Math.min(1, Math.max(0, u)) * total;
  for (let i = 0; i < lens.length; i++) {
    if (d <= lens[i] || i === lens.length - 1) {
      const f = lens[i] ? Math.min(1, d / lens[i]) : 1;
      const a = pts[i];
      const b = pts[i + 1];
      return out.set(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f);
    }
    d -= lens[i];
  }
  return out;
}

// Drawn over the model (never hidden inside an organ), like a marker on an x-ray.
function Glow({ refFn, opacity = 1, order = 30 }) {
  return (
    <mesh ref={refFn} visible={false} renderOrder={order}>
      <sphereGeometry args={[1, 16, 12]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={opacity} depthTest={false} depthWrite={false} toneMapped={false} />
    </mesh>
  );
}

export default function Demo({ demoRef, innerRefs, shellRefs }) {
  const group = useRef();
  const token = useRef();
  const halo = useRef();
  const trail = useRef([]);
  const dots = useRef([]);
  const tmp = useMemo(() => new THREE.Vector3(), []);
  const world = useMemo(() => new THREE.Vector3(), []);
  const s = useRef(null);
  if (!s.current) {
    s.current = { key: null, step: -1, t: 0, t0: 0, move: 3, path: null, has: false, pos: new THREE.Vector3(), col: new THREE.Color('#ffd54f'), cFrom: new THREE.Color(), cTo: new THREE.Color(), r: 0.07, rFrom: 0.07, rTo: 0.07, hist: [], acted: new Map(), painted: new Map(), paintTo: new THREE.Color() };
  }
  const st = s.current;

  // Parts moved by a step go back to where they were.
  const restore = () => {
    for (const [obj, b] of st.acted) {
      obj.position.copy(b.p);
      obj.rotation.copy(b.r);
      obj.scale.copy(b.s);
    }
    st.acted.clear();
  };
  // Colours changed by the demonstration go back when it ends.
  const unpaint = () => {
    for (const [mat, c] of st.painted) mat.color.copy(c);
    st.painted.clear();
  };

  useFrame((_, dt) => {
    const d = demoRef.current;
    const g = group.current;
    if (!g) return;
    if (!d?.on || !d.steps?.length) {
      if (g.visible || st.key) {
        g.visible = false;
        restore();
        unpaint();
        st.key = null;
        st.step = -1;
        st.has = false;
        st.hist = [];
        if (d) d.tokenOn = false;
      }
      return;
    }
    g.visible = true;
    st.t += Math.min(dt, 0.05);
    if (st.key !== d.key) {
      // a new run from the start
      restore();
      unpaint();
      st.key = d.key;
      st.step = -1;
      st.has = false;
      st.hist = [];
      st.col.set('#ffd54f');
      st.r = 0.07;
    }
    const i = Math.min(d.steps.length - 1, Math.max(0, d.step));
    const step = d.steps[i];
    if (i !== st.step) {
      restore();
      st.step = i;
      st.t0 = st.t;
      const pts = step.path || [];
      if (step.from) {
        st.pos.set(step.from[0], step.from[1], step.from[2]);
        st.has = true;
        st.hist = [];
      }
      if (!st.has && pts.length) {
        st.pos.set(pts[0][0], pts[0][1], pts[0][2]);
        st.has = true;
      }
      st.path = pts.length ? [[st.pos.x, st.pos.y, st.pos.z], ...pts] : null;
      st.cFrom.copy(st.col);
      if (step.c) st.cTo.set(step.c);
      else st.cTo.copy(st.col);
      st.rFrom = st.r;
      st.rTo = step.r ?? st.r;
      const said = d.dur?.[i] ?? 4;
      st.move = Math.max(0.6, Math.min(said, step.move ?? said * 0.8));
    }
    const e = ease(Math.min(1, (st.t - st.t0) / st.move));
    if (st.path) along(st.pos, st.path, e);
    st.col.copy(st.cFrom).lerp(st.cTo, e);
    st.r = st.rFrom + (st.rTo - st.rFrom) * e;

    const show = st.has && !step.hide;
    const tk = token.current;
    const hl = halo.current;
    if (tk && hl) {
      tk.visible = show;
      hl.visible = show;
      if (show) {
        tk.position.copy(st.pos);
        tk.scale.setScalar(st.r * 1.2);
        tk.material.color.copy(st.col);
        hl.position.copy(st.pos);
        hl.scale.setScalar(st.r * 1.2 * (1.9 + 0.35 * Math.sin(st.t * 5)));
        hl.material.color.copy(st.col);
      }
    }
    st.hist.unshift([st.pos.x, st.pos.y, st.pos.z]);
    if (st.hist.length > TRAIL * 3 + 3) st.hist.length = TRAIL * 3 + 3;
    trail.current.forEach((m, k) => {
      if (!m) return;
      const h = st.hist[(k + 1) * 3];
      m.visible = show && !!h;
      if (!h) return;
      m.position.set(h[0], h[1], h[2]);
      m.scale.setScalar(st.r * (0.78 - k * 0.09));
      m.material.color.copy(st.col);
      m.material.opacity = 0.5 - k * 0.06;
    });

    // Streams of small dots for this step.
    let n = 0;
    for (const f of step.flows || []) {
      const count = f.n ?? 5;
      for (let j = 0; j < count && n < DOTS; j++, n++) {
        const m = dots.current[n];
        if (!m) continue;
        along(tmp, f.pts, (st.t * (f.speed ?? 0.3) + j / count) % 1);
        m.visible = true;
        m.position.copy(tmp);
        m.scale.setScalar(f.r ?? 0.035);
        m.material.color.set(f.c || '#ffffff');
      }
    }
    for (; n < DOTS; n++) if (dots.current[n]) dots.current[n].visible = false;

    // Colours that change at this step (and stay changed).
    if (step.paint) {
      for (const [k, [from, to]] of Object.entries(step.paint)) {
        const obj = innerRefs.current[k];
        if (!obj) continue;
        const want = from.replace('#', '').toLowerCase();
        st.paintTo.set(to);
        obj.traverse((o) => {
          const mat = o.material;
          if (!mat?.color) return;
          if (!st.painted.has(mat)) {
            if (mat.color.getHexString() !== want) return;
            st.painted.set(mat, mat.color.clone());
          }
          mat.color.copy(st.painted.get(mat)).lerp(st.paintTo, e);
        });
      }
    }

    // Parts that move only at this step.
    if (step.act) {
      for (const [k, an] of Object.entries(step.act)) {
        const obj = innerRefs.current[k] || shellRefs.current[k];
        if (!obj) continue;
        if (!st.acted.has(obj)) st.acted.set(obj, { p: obj.position.clone(), r: obj.rotation.clone(), s: obj.scale.clone() });
        const b = st.acted.get(obj);
        const q = pose(an, [b.p.x, b.p.y, b.p.z], st.t - st.t0, 0);
        obj.position.set(q.pos[0], q.pos[1], q.pos[2]);
        obj.scale.set(b.s.x * q.scale, b.s.y * q.scale, b.s.z * q.scale);
        if (q.rot) obj.rotation.set(b.r.x + q.rot[0], b.r.y + q.rot[1], b.r.z + q.rot[2]);
      }
    }

    // Where the marker is, for its name on the screen.
    if (show && tk) {
      tk.getWorldPosition(world);
      d.world = world;
      d.tokenOn = true;
    } else d.tokenOn = false;
  });

  return (
    <group ref={group} visible={false}>
      <Glow refFn={(m) => (halo.current = m)} opacity={0.28} order={29} />
      <Glow refFn={(m) => (token.current = m)} order={31} />
      {Array.from({ length: TRAIL }, (_, k) => (
        <Glow key={`t${k}`} refFn={(m) => (trail.current[k] = m)} opacity={0.4} order={28} />
      ))}
      {Array.from({ length: DOTS }, (_, k) => (
        <Glow key={`d${k}`} refFn={(m) => (dots.current[k] = m)} opacity={0.9} order={30} />
      ))}
    </group>
  );
}
