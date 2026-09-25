import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.respiratory

const PARTS = {
  trachea: [0, 1.1, 0],
  bronchus: [0.35, 0.55, 0],
  lung: [0.75, -0.1, 0],
  alveoli: [0.95, -0.5, 0.3],
  diaphragm: [0, -1.15, 0]
}

export default function RespiratoryModel({ activePart, onSelectPart }) {
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
      {/* Trachea */}
      <mesh position={PARTS.trachea} onClick={click('trachea')}>
        <cylinderGeometry args={[0.18, 0.18, 0.9, 16]} />
        <meshStandardMaterial color="#DED2AE" roughness={0.5} />
      </mesh>

      {/* Bronchi — split left/right */}
      <mesh position={PARTS.bronchus} rotation={[0, 0, -0.5]} onClick={click('bronchus')}>
        <cylinderGeometry args={[0.11, 0.11, 0.7, 14]} />
        <meshStandardMaterial color={accent} roughness={0.5} />
      </mesh>
      <mesh position={[-0.35, 0.55, 0]} rotation={[0, 0, 0.5]} onClick={click('bronchus')}>
        <cylinderGeometry args={[0.11, 0.11, 0.7, 14]} />
        <meshStandardMaterial color={accent} roughness={0.5} />
      </mesh>

      {/* Lungs — right and left, asymmetric like the real thing */}
      <mesh position={PARTS.lung} scale={[1, 1.3, 0.7]} onClick={click('lung')}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={accent} transparent opacity={0.75} roughness={0.4} />
      </mesh>
      <mesh position={[-0.75, -0.1, 0]} scale={[0.9, 1.2, 0.65]} onClick={click('lung')}>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshStandardMaterial color={accent} transparent opacity={0.75} roughness={0.4} />
      </mesh>

      {/* Alveoli cluster — small sacs at the edge of one lung */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            PARTS.alveoli[0] + Math.cos(i) * 0.15,
            PARTS.alveoli[1] + Math.sin(i) * 0.15,
            PARTS.alveoli[2]
          ]}
          onClick={click('alveoli')}
        >
          <sphereGeometry args={[0.1, 12, 12]} />
          <meshStandardMaterial color="#D98E4F" roughness={0.4} />
        </mesh>
      ))}

      {/* Diaphragm — flattened disc beneath the lungs */}
      <mesh position={PARTS.diaphragm} rotation={[Math.PI / 2, 0, 0]} onClick={click('diaphragm')}>
        <cylinderGeometry args={[1.1, 1.1, 0.12, 28]} />
        <meshStandardMaterial color="#1F5450" roughness={0.5} />
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
