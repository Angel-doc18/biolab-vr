import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.excretory

const PARTS = {
  kidney: [-0.5, 0.5, 0],
  nephron: [-0.85, 0.55, 0.3],
  ureter: [-0.35, -0.4, 0],
  bladder: [0, -1.2, 0]
}

export default function ExcretoryModel({ activePart, onSelectPart }) {
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
      {/* Kidneys — bean shape via two overlapping spheres, one indented */}
      <mesh position={PARTS.kidney} scale={[0.55, 0.9, 0.5]} onClick={click('kidney')}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={accent} roughness={0.45} />
      </mesh>
      <mesh position={[0.5, 0.5, 0]} scale={[0.55, 0.9, 0.5]} onClick={click('kidney')}>
        <sphereGeometry args={[0.6, 24, 24]} />
        <meshStandardMaterial color={accent} roughness={0.45} />
      </mesh>

      {/* Nephron — a tiny coiled tubule detail on the left kidney */}
      {Array.from({ length: 6 }, (_, i) => {
        const t = i / 5
        const angle = t * Math.PI * 4
        return (
          <mesh
            key={i}
            position={[-0.85 + Math.cos(angle) * 0.12, 0.55 + t * 0.2, 0.3 + Math.sin(angle) * 0.12]}
            onClick={click('nephron')}
          >
            <sphereGeometry args={[0.05, 10, 10]} />
            <meshStandardMaterial color="#DED2AE" roughness={0.4} />
          </mesh>
        )
      })}

      {/* Ureters — tubes running down to the bladder */}
      <mesh position={PARTS.ureter} rotation={[0, 0, -0.15]} onClick={click('ureter')}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 12]} />
        <meshStandardMaterial color="#DED2AE" roughness={0.5} />
      </mesh>
      <mesh position={[0.35, -0.4, 0]} rotation={[0, 0, 0.15]} onClick={click('ureter')}>
        <cylinderGeometry args={[0.07, 0.07, 0.8, 12]} />
        <meshStandardMaterial color="#DED2AE" roughness={0.5} />
      </mesh>

      {/* Bladder */}
      <mesh position={PARTS.bladder} onClick={click('bladder')}>
        <sphereGeometry args={[0.42, 22, 22]} />
        <meshStandardMaterial color="#2A5478" transparent opacity={0.7} roughness={0.4} />
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
