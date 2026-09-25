import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.reproductive

const PARTS = {
  petal: [0.9, 0.3, 0],
  sepal: [0.75, -0.35, 0],
  anther: [0.25, 0.45, 0.25],
  stigma: [0, 0.75, 0],
  ovary: [0, -0.3, 0]
}

export default function ReproductiveModel({ activePart, onSelectPart }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  const click = (part) => (e) => {
    e.stopPropagation()
    onSelectPart(part)
  }

  const petalAngles = [0, 1, 2, 3, 4].map((i) => (i / 5) * Math.PI * 2)

  return (
    <group ref={group}>
      {/* Petals — ring of flattened spheres around the centre */}
      {petalAngles.map((angle, i) => (
        <mesh
          key={i}
          position={[Math.cos(angle) * 0.9, 0.3, Math.sin(angle) * 0.9]}
          rotation={[0, -angle, 0]}
          scale={[1, 0.4, 0.6]}
          onClick={click('petal')}
        >
          <sphereGeometry args={[0.55, 16, 16]} />
          <meshStandardMaterial color={accent} roughness={0.4} />
        </mesh>
      ))}

      {/* Sepals — smaller green ring beneath the petals */}
      {petalAngles.map((angle, i) => (
        <mesh
          key={`s${i}`}
          position={[Math.cos(angle) * 0.75, -0.35, Math.sin(angle) * 0.75]}
          rotation={[0, -angle, 0]}
          scale={[0.8, 0.3, 0.4]}
          onClick={click('sepal')}
        >
          <sphereGeometry args={[0.4, 14, 14]} />
          <meshStandardMaterial color="#4C7A3D" roughness={0.4} />
        </mesh>
      ))}

      {/* Stamens with anthers — thin filaments topped with pollen sacs */}
      {[0, 1, 2].map((i) => {
        const a = (i / 3) * Math.PI * 2
        return (
          <group key={i}>
            <mesh position={[Math.cos(a) * 0.25, 0.15, Math.sin(a) * 0.25]}>
              <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
              <meshStandardMaterial color="#DED2AE" roughness={0.5} />
            </mesh>
            <mesh position={[Math.cos(a) * 0.25, 0.42, Math.sin(a) * 0.25]} onClick={click('anther')}>
              <sphereGeometry args={[0.1, 12, 12]} />
              <meshStandardMaterial color="#C98A2E" roughness={0.4} />
            </mesh>
          </group>
        )
      })}

      {/* Style + stigma — central column rising from the ovary */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.9, 8]} />
        <meshStandardMaterial color="#4C7A3D" roughness={0.5} />
      </mesh>
      <mesh position={PARTS.stigma} onClick={click('stigma')}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial color="#B15A8C" roughness={0.4} />
      </mesh>

      {/* Ovary — base of the flower */}
      <mesh position={PARTS.ovary} onClick={click('ovary')}>
        <sphereGeometry args={[0.28, 18, 18]} />
        <meshStandardMaterial color="#3D6B35" roughness={0.4} />
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
