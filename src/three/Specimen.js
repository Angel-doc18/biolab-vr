import { useMemo, useRef } from 'react';
import { useFrame } from './r3f';
import * as THREE from 'three';
import { pose } from './anim';

const GEO = {
  sphere: 'sphereGeometry',
  box: 'boxGeometry',
  cyl: 'cylinderGeometry',
  cone: 'coneGeometry',
  torus: 'torusGeometry',
  capsule: 'capsuleGeometry',
};

// Every moving object of a model registers here with its resting pose, so one
// frame callback moves them all.
function register(movers, obj, an, base, seed) {
  if (!obj || !an) return;
  const i = movers.findIndex((x) => x.obj === obj);
  const entry = { obj, an, base, seed };
  if (i >= 0) movers[i] = entry;
  else movers.push(entry);
}

function Mesh({ m, xray, active, movers, seed }) {
  const Geo = GEO[m.g];
  const transparent = m.o != null && m.o < 1;
  const p = m.p || [0, 0, 0];
  return (
    <mesh
      ref={(o) => register(movers, o, m.an, { p, r: m.r || [0, 0, 0], s: m.s || [1, 1, 1] }, seed)}
      position={p}
      rotation={m.r || [0, 0, 0]}
      scale={m.s || [1, 1, 1]}
    >
      <Geo args={m.a} />
      <meshStandardMaterial
        color={m.c}
        roughness={0.45}
        metalness={0.05}
        transparent={transparent || xray}
        opacity={xray ? 0.9 : m.o ?? 1}
        wireframe={xray}
        depthWrite={!transparent}
        emissive={active ? m.c : '#000000'}
        emissiveIntensity={active ? 0.35 : 0}
      />
    </mesh>
  );
}

// One part of a real anatomy model. In x-ray mode everything except the selected
// part turns see-through, so the selected structure shows inside the organ.
function RealMesh({ geometry, color, opacity = 1, active, dim }) {
  const see = dim ? 0.18 : opacity;
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        color={color}
        roughness={0.62}
        metalness={0}
        transparent={see < 1}
        opacity={see}
        depthWrite={see >= 1}
        side={see < 1 ? THREE.DoubleSide : THREE.FrontSide}
        emissive={active ? color : '#000000'}
        emissiveIntensity={active ? 0.28 : 0}
      />
    </mesh>
  );
}

// Moves every registered object to its pose for this moment, or back to rest
// when motion is switched off.
function useMotion(movers, motionRef) {
  const clock = useRef(0);
  const resting = useRef(true);
  useFrame((_, dt) => {
    const on = !!motionRef?.current;
    if (!on && resting.current) return;
    if (on) clock.current += Math.min(dt, 0.05);
    for (const { obj, an, base, seed } of movers) {
      if (!on) {
        obj.position.set(...base.p);
        obj.scale.set(...base.s);
        obj.rotation.set(...base.r);
        continue;
      }
      const { pos, scale, rot } = pose(an, base.p, clock.current, seed);
      obj.position.set(pos[0], pos[1], pos[2]);
      obj.scale.set(base.s[0] * scale, base.s[1] * scale, base.s[2] * scale);
      if (rot) obj.rotation.set(base.r[0] + rot[0], base.r[1] + rot[1], base.r[2] + rot[2]);
    }
    resting.current = !on;
  });
}

function useExplode(spec, explodeRef, partRefs) {
  const keys = Object.keys(spec.parts);
  const cur = useRef({});
  useFrame(() => {
    const e = explodeRef?.current ?? 0;
    for (const k of keys) {
      const g = partRefs.current[k];
      if (!g) continue;
      const a = spec.parts[k].centre || spec.parts[k].anchor;
      const len = Math.hypot(a[0], a[1], a[2]) || 1;
      const now = (cur.current[k] = THREE.MathUtils.lerp(cur.current[k] ?? 0, e, 0.12));
      g.position.set((a[0] / len) * now * 0.7, (a[1] / len) * now * 0.7, (a[2] / len) * now * 0.7);
    }
  });
  return keys;
}

/**
 * Renders a model spec from models.js, either the procedural model or, when
 * `geos` holds the downloaded geometries, the real anatomy model.
 * `explodeRef.current` (0..1) pushes parts outward; `partRefs` receives each
 * part's group so pins can be projected from the live transform;
 * `motionRef.current` turns the model's movement on and off.
 */
export default function Specimen({ spec, geos, active, xray, explodeRef, partRefs, motionRef }) {
  const keys = useExplode(spec, explodeRef, partRefs);
  const movers = useRef([]).current;
  useMotion(movers, motionRef);
  // A part that moves as a whole (a beating chamber, a turning coil) sits in an
  // inner group, so its label stays still while the part moves.
  const inner = (k, children) => {
    const an = spec.parts[k].an;
    if (!an) return children;
    return <group ref={(g) => register(movers, g, an, { p: [0, 0, 0], r: [0, 0, 0], s: [1, 1, 1] }, k.length)}>{children}</group>;
  };
  if (spec.real && geos) {
    return (
      <group>
        {spec.shell.map((s) =>
          geos[s.key] ? <RealMesh key={s.key} geometry={geos[s.key]} color={s.color} opacity={s.opacity} dim={xray} /> : null
        )}
        {keys.map((k) => (
          <group key={k} ref={(g) => (partRefs.current[k] = g)}>
            {inner(
              k,
              geos[k] && <RealMesh geometry={geos[k]} color={spec.parts[k].color} opacity={spec.parts[k].opacity} active={active === k} dim={xray && active !== k} />
            )}
          </group>
        ))}
      </group>
    );
  }
  return (
    <group>
      {spec.shell.map((m, i) => (
        <Mesh key={`s${i}`} m={m} xray={xray} movers={movers} seed={i + 0.5} />
      ))}
      {keys.map((k, pi) => (
        <group key={k} ref={(g) => (partRefs.current[k] = g)}>
          {inner(
            k,
            spec.parts[k].meshes.map((m, i) => <Mesh key={i} m={m} xray={xray} active={active === k} movers={movers} seed={pi * 100 + i + 1} />)
          )}
        </group>
      ))}
    </group>
  );
}

// Centres a model on the origin and reports its size as seen from the front in
// its starting position: half its width, half its height and half its depth,
// measured from the real geometry (built-in or downloaded) once per `fitKey`, so
// the camera can frame every model the same way.
export function Centered({ children, onSize, fitKey }) {
  const inner = useRef();
  const done = useRef(null);
  const box = useMemo(() => new THREE.Box3(), []);
  const mid = useMemo(() => new THREE.Vector3(), []);
  const back = useMemo(() => new THREE.Matrix4(), []);
  useFrame(() => {
    if (!inner.current || done.current === fitKey) return;
    inner.current.position.set(0, 0, 0);
    inner.current.updateMatrixWorld(true);
    box.setFromObject(inner.current);
    if (box.isEmpty()) return;
    box.getCenter(mid);
    const size = { w: (box.max.x - box.min.x) / 2, h: (box.max.y - box.min.y) / 2, d: (box.max.z - box.min.z) / 2 };
    // The box is measured in world space; turn its centre back into the frame of
    // the (possibly rotated) parent before moving the model onto the origin.
    if (inner.current.parent) mid.applyMatrix4(back.copy(inner.current.parent.matrixWorld).invert());
    inner.current.position.set(-mid.x, -mid.y, -mid.z);
    done.current = fitKey;
    onSize?.(size);
  });
  return <group ref={inner}>{children}</group>;
}

// How far the camera must stand for a model of this size to fill a frame of
// this aspect (width / height), with a margin for the labels.
export function fitDistance({ w, h, d }, aspect, fov = 40, margin = 1.14) {
  const tanV = Math.tan(((fov / 2) * Math.PI) / 180);
  const tanH = tanV * aspect;
  return d + Math.max(h / tanV, w / tanH) * margin;
}

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <hemisphereLight args={['#ffffff', '#d9e6f2', 0.55]} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} />
      <directionalLight position={[-4, 2, 3]} intensity={0.45} color="#fff4ea" />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} color="#dce9f5" />
    </>
  );
}
