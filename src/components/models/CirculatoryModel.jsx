import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.circulatory

const PARTS = {
  heart: [0, 0, 0],
  atrium: [-0.35, 0.55, 0.2],
  ventricle: [0.15, -0.45, 0.2],
  artery: [0.9, 0.9, 0],
  vein: [-1.0, 0.8, -0.2]
}

export default function CirculatoryModel({ activePart, onSelectPart }) {
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
      {/* Heart body */}
      <mesh position={PARTS.heart} onClick={click('heart')}>
        <sphereGeometry args={[1, 28, 28]} />
        <meshStandardMaterial color={accent} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.9, 0]} rotation={[Math.PI, 0, 0]} onClick={click('heart')}>
        <coneGeometry args={[0.55, 0.9, 24]} />
        <meshStandardMaterial color={accent} roughness={0.4} />
      </mesh>

      {/* Atrium (upper chamber, lighter) */}
      <mesh position={PARTS.atrium} onClick={click('atrium')}>
        <sphereGeometry args={[0.32, 20, 20]} />
        <meshStandardMaterial color="#D9847F" roughness={0.4} />
      </mesh>

      {/* Ventricle (lower chamber, darker/thicker-walled) */}
      <mesh position={PARTS.ventricle} onClick={click('ventricle')}>
        <sphereGeometry args={[0.34, 20, 20]} />
        <meshStandardMaterial color="#7A1F1F" roughness={0.45} />
      </mesh>

      {/* Artery — carries blood away, bright oxygenated red, tube up-right */}
      <mesh position={PARTS.artery} rotation={[0, 0, -0.5]} onClick={click('artery')}>
        <cylinderGeometry args={[0.14, 0.14, 1.1, 16]} />
        <meshStandardMaterial color="#E4483C" roughness={0.4} />
      </mesh>

      {/* Vein — carries blood back, deoxygenated bluish-red, tube up-left */}
      <mesh position={PARTS.vein} rotation={[0, 0, 0.5]} onClick={click('vein')}>
        <cylinderGeometry args={[0.16, 0.16, 1.0, 16]} />
        <meshStandardMaterial color="#4A5A8C" roughness={0.4} />
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
