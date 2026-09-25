import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

/**
 * Generic stand-in model for a topic that doesn't have a dedicated
 * geometry yet. Colored by the topic's system accent, labeled parts
 * shown as a flat list rather than 3D-anchored leader lines. Swap this
 * out for a real model by following the CellModel.jsx pattern, then
 * point Scene3D.jsx at it.
 */
export default function PlaceholderModel({ color, title, labels }) {
  const mesh = useRef()

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.2
  })

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color={color} wireframe roughness={0.4} />
      </mesh>
      <Html position={[0, -1.9, 0]} center distanceFactor={6} zIndexRange={[10, 0]}>
        <div className="w-64 rounded-sm border border-tray-line bg-tray/95 p-3 text-center">
          <p className="text-xs text-tag-dim">3D model coming soon</p>
          <p className="mt-1 text-xs text-tag-dim">
            {title} uses the placeholder viewer for now — see the labeled parts below.
          </p>
        </div>
      </Html>
    </group>
  )
}
