import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.digestive

const PARTS = {
  oesophagus: [0, 1.2, 0],
  stomach: [0.3, 0.5, 0],
  liver: [-0.7, 0.6, 0.2],
  'small-intestine': [0, -0.5, 0],
  'large-intestine': [0.1, -1.2, 0.3]
}

export default function DigestiveModel({ activePart, onSelectPart }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  const click = (part) => (e) => {
    e.stopPropagation()
    onSelectPart(part)
  }

  // Small intestine as a coiled tube — several short segments looping
  const coilPoints = Array.from({ length: 10 }, (_, i) => {
    const t = i / 9
    const angle = t * Math.PI * 3.5
    return [
      Math.cos(angle) * 0.45,
      -0.5 + t * -0.5,
      Math.sin(angle) * 0.3
    ]
  })

  return (
    <group ref={group}>
      {/* Oesophagus */}
      <mesh position={PARTS.oesophagus} onClick={click('oesophagus')}>
        <cylinderGeometry args={[0.14, 0.14, 0.8, 16]} />
        <meshStandardMaterial color="#DED2AE" roughness={0.5} />
      </mesh>

      {/* Stomach — a bulging capsule */}
      <mesh position={PARTS.stomach} scale={[1, 0.7, 0.7]} onClick={click('stomach')}>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshStandardMaterial color={accent} roughness={0.45} />
      </mesh>

      {/* Liver — large flattened lobe beside the stomach */}
      <mesh position={PARTS.liver} scale={[1.1, 0.6, 0.6]} onClick={click('liver')}>
        <sphereGeometry args={[0.55, 22, 22]} />
        <meshStandardMaterial color="#8A3A2A" roughness={0.45} />
      </mesh>

      {/* Small intestine — coiled tube segments */}
      {coilPoints.map((p, i) => (
        <mesh key={i} position={p} onClick={click('small-intestine')}>
          <sphereGeometry args={[0.14, 14, 14]} />
          <meshStandardMaterial color="#E0A748" roughness={0.4} />
        </mesh>
      ))}

      {/* Large intestine — thicker frame around the bottom */}
      <mesh position={PARTS['large-intestine']} rotation={[Math.PI / 2, 0, 0]} onClick={click('large-intestine')}>
        <torusGeometry args={[0.65, 0.14, 12, 28, Math.PI * 1.6]} />
        <meshStandardMaterial color="#8C5A26" roughness={0.5} />
      </mesh>

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
