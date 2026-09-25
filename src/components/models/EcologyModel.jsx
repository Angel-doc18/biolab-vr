import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.ecology

const PARTS = {
  producer: [0, -0.9, 0],
  'primary-consumer': [0, -0.15, 0],
  'secondary-consumer': [0, 0.6, 0],
  decomposer: [1.3, -1.1, 0]
}

export default function EcologyModel({ activePart, onSelectPart }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  const click = (part) => (e) => {
    e.stopPropagation()
    onSelectPart(part)
  }

  return (
    <group ref={group}>
      {/* Trophic pyramid — each tier a flattened box, widest at the base */}
      <mesh position={PARTS.producer} onClick={click('producer')}>
        <boxGeometry args={[2.2, 0.5, 1.6]} />
        <meshStandardMaterial color={accent} roughness={0.45} />
      </mesh>
      <mesh position={PARTS['primary-consumer']} onClick={click('primary-consumer')}>
        <boxGeometry args={[1.5, 0.5, 1.1]} />
        <meshStandardMaterial color="#C98A2E" roughness={0.45} />
      </mesh>
      <mesh position={PARTS['secondary-consumer']} onClick={click('secondary-consumer')}>
        <boxGeometry args={[0.8, 0.5, 0.6]} />
        <meshStandardMaterial color="#B23A3A" roughness={0.45} />
      </mesh>

      {/* Decomposers — small cluster at the base, recycling nutrients */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          position={[1.3 + i * 0.18, -1.1, i * 0.12]}
          onClick={click('decomposer')}
        >
          <sphereGeometry args={[0.11, 10, 10]} />
          <meshStandardMaterial color="#5C4A2E" roughness={0.6} />
        </mesh>
      ))}

      {Object.entries(PARTS).map(([part, pos]) => (
        <LeaderLabel
          key={part}
          position={pos}
          text={part
            .split('-')
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(' ')}
          color={accent}
          active={activePart === part}
          onClick={() => onSelectPart(part)}
        />
      ))}
    </group>
  )
}
