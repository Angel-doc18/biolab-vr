import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.cellular

// Organelle positions, in the same order the topic's `labels` array
// (src/data/topics.js) expects to find them by `part` key.
const PARTS = {
  membrane: [0, 0, 0],
  nucleus: [-0.6, 0.3, 0.4],
  mitochondrion: [0.9, -0.2, 0.3],
  vacuole: [0.1, -0.9, -0.4]
}

/**
 * A generalized cell — organelles common to the WAEC syllabus treatment
 * (membrane, nucleus, mitochondrion, a vacuole as found in plant cells).
 * Geometry is procedural (no imported model files), keeping this topic
 * fully self-contained and lightweight to precache offline.
 */
export default function CellModel({ activePart, onSelectPart }) {
  const group = useRef()

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={group}>
      {/* Cell membrane */}
      <mesh
        position={PARTS.membrane}
        onClick={(e) => {
          e.stopPropagation()
          onSelectPart('membrane')
        }}
      >
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color={accent}
          transparent
          opacity={0.12}
          roughness={0.4}
          metalness={0}
        />
      </mesh>
      <mesh position={PARTS.membrane}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color={accent} wireframe transparent opacity={0.35} />
      </mesh>

      {/* Nucleus */}
      <mesh
        position={PARTS.nucleus}
        onClick={(e) => {
          e.stopPropagation()
          onSelectPart('nucleus')
        }}
      >
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshStandardMaterial color="#3B4C8C" roughness={0.5} />
      </mesh>

      {/* Mitochondrion (capsule-ish via scaled sphere) */}
      <mesh
        position={PARTS.mitochondrion}
        rotation={[0.3, 0.6, 0]}
        scale={[1, 0.55, 0.55]}
        onClick={(e) => {
          e.stopPropagation()
          onSelectPart('mitochondrion')
        }}
      >
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshStandardMaterial color="#B23A3A" roughness={0.45} />
      </mesh>

      {/* Vacuole */}
      <mesh
        position={PARTS.vacuole}
        onClick={(e) => {
          e.stopPropagation()
          onSelectPart('vacuole')
        }}
      >
        <sphereGeometry args={[0.36, 20, 20]} />
        <meshStandardMaterial color="#2F8F8A" transparent opacity={0.6} roughness={0.3} />
      </mesh>

      {Object.entries(PARTS).map(([part, pos]) => (
        <LeaderLabel
          key={part}
          position={pos}
          text={part.charAt(0).toUpperCase() + part.slice(1)}
          color={accent}
          active={activePart === part}
          onClick={() => onSelectPart(part)}
        />
      ))}
    </group>
  )
}
