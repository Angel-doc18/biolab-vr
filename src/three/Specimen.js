import { useRef } from 'react';
import { useFrame } from '@react-three/fiber/native';
import * as THREE from 'three';

const GEO = {
  sphere: 'sphereGeometry',
  box: 'boxGeometry',
  cyl: 'cylinderGeometry',
  cone: 'coneGeometry',
  torus: 'torusGeometry',
  capsule: 'capsuleGeometry',
};

function Mesh({ m, xray, active }) {
  const Geo = GEO[m.g];
  const transparent = m.o != null && m.o < 1;
  return (
    <mesh position={m.p || [0, 0, 0]} rotation={m.r || [0, 0, 0]} scale={m.s || [1, 1, 1]}>
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

/**
 * Renders a model spec from models.js. `explodeRef.current` (0..1) pushes
 * parts outward along their anchor direction; `partRefs` receives each part's
 * group so pins can be projected from the live transform.
 */
export default function Specimen({ spec, active, xray, explodeRef, partRefs }) {
  const keys = Object.keys(spec.parts);
  const cur = useRef({});
  useFrame(() => {
    const e = explodeRef?.current ?? 0;
    for (const k of keys) {
      const g = partRefs.current[k];
      if (!g) continue;
      const a = spec.parts[k].anchor;
      const len = Math.hypot(a[0], a[1], a[2]) || 1;
      const now = (cur.current[k] = THREE.MathUtils.lerp(cur.current[k] ?? 0, e, 0.12));
      g.position.set((a[0] / len) * now * 0.7, (a[1] / len) * now * 0.7, (a[2] / len) * now * 0.7);
    }
  });
  return (
    <group>
      {spec.shell.map((m, i) => (
        <Mesh key={`s${i}`} m={m} xray={xray} />
      ))}
      {keys.map((k) => (
        <group key={k} ref={(g) => (partRefs.current[k] = g)}>
          {spec.parts[k].meshes.map((m, i) => (
            <Mesh key={i} m={m} xray={xray} active={active === k} />
          ))}
        </group>
      ))}
    </group>
  );
}

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <ambientLight intensity={0.15} color="#0369A1" />
      <hemisphereLight args={['#ffffff', '#cde5ff', 0.6]} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      <directionalLight position={[-4, 3, 2]} intensity={0.35} color="#38BDF8" />
      <directionalLight position={[-3, -2, -4]} intensity={0.4} color="#94ccff" />
    </>
  );
}
