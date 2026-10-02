import { useRef } from 'react';
import { useFrame } from './r3f';
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
 * Renders a model spec from models.js, either the procedural diagram or, when
 * `geos` holds the downloaded geometries, the real anatomy model.
 * `explodeRef.current` (0..1) pushes parts outward; `partRefs` receives each
 * part's group so pins can be projected from the live transform.
 */
export default function Specimen({ spec, geos, active, xray, explodeRef, partRefs }) {
  const keys = useExplode(spec, explodeRef, partRefs);
  if (spec.real && geos) {
    return (
      <group>
        {spec.shell.map((s) =>
          geos[s.key] ? <RealMesh key={s.key} geometry={geos[s.key]} color={s.color} opacity={s.opacity} dim={xray} /> : null
        )}
        {keys.map((k) => (
          <group key={k} ref={(g) => (partRefs.current[k] = g)}>
            {geos[k] && <RealMesh geometry={geos[k]} color={spec.parts[k].color} opacity={spec.parts[k].opacity} active={active === k} dim={xray && active !== k} />}
          </group>
        ))}
      </group>
    );
  }
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
      <ambientLight intensity={0.55} />
      <hemisphereLight args={['#ffffff', '#d9e6f2', 0.55]} />
      <directionalLight position={[3, 4, 5]} intensity={1.35} />
      <directionalLight position={[-4, 2, 3]} intensity={0.45} color="#fff4ea" />
      <directionalLight position={[-3, -2, -4]} intensity={0.35} color="#dce9f5" />
    </>
  );
}
