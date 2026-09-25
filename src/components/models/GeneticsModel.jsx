import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { systemColors } from '../../data/systemColors.js'
import LeaderLabel from './LeaderLabel.jsx'

const accent = systemColors.genetics

const PARTS = {
  chromosome: [-1.1, 0, 0],
  dna: [0.3, 0, 0],
  gene: [0.3, 0.6, 0.15],
  allele: [-1.1, 0.5, 0.15]
}

export default function GeneticsModel({ activePart, onSelectPart }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  const click = (part) => (e) => {
    e.stopPropagation()
    onSelectPart(part)
  }

  // DNA double helix — two strands of small spheres plus rungs
  const helixSteps = 16
  const helix = Array.from({ length: helixSteps }, (_, i) => {
    const t = i / (helixSteps - 1)
    const y = -0.9 + t * 1.8
    const angle = t * Math.PI * 4
    return {
      a: [Math.cos(angle) * 0.3, y, Math.sin(angle) * 0.3],
      b: [Math.cos(angle + Math.PI) * 0.3, y, Math.sin(angle + Math.PI) * 0.3]
    }
  })

  return (
    <group ref={group}>
      {/* Chromosome — classic X shape, two pairs of chromatid arms */}
      <group position={PARTS.chromosome}>
        {[-0.4, 0.4].map((yOff, i) => (
          <group key={i}>
            <mesh rotation={[0, 0, 0.5]} position={[0, yOff, 0]} onClick={click('chromosome')}>
              <capsuleGeometry args={[0.09, 0.55, 6, 12]} />
              <meshStandardMaterial color={accent} roughness={0.4} />
            </mesh>
            <mesh rotation={[0, 0, -0.5]} position={[0, yOff, 0]} onClick={click('chromosome')}>
              <capsuleGeometry args={[0.09, 0.55, 6, 12]} />
              <meshStandardMaterial color={accent} roughness={0.4} />
            </mesh>
          </group>
        ))}
        {/* Allele markers — two colored bands at the same locus on each chromatid */}
        <mesh position={[0.12, 0.5, 0.05]} onClick={click('allele')}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#B23A3A" roughness={0.4} />
        </mesh>
        <mesh position={[-0.12, 0.5, 0.05]} onClick={click('allele')}>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#DED2AE" roughness={0.4} />
        </mesh>
      </group>

      {/* DNA double helix */}
      <group position={PARTS.dna}>
        {helix.map((step, i) => (
          <group key={i}>
            <mesh position={step.a}>
              <sphereGeometry args={[0.06, 10, 10]} />
              <meshStandardMaterial color="#3B4C8C" roughness={0.4} />
            </mesh>
            <mesh position={step.b}>
              <sphereGeometry args={[0.06, 10, 10]} />
              <meshStandardMaterial color="#6C7EC9" roughness={0.4} />
            </mesh>
            {i % 3 === 0 && (
              <mesh
                position={[(step.a[0] + step.b[0]) / 2, step.a[1], (step.a[2] + step.b[2]) / 2]}
                onClick={click('gene')}
              >
                <boxGeometry args={[0.55, 0.04, 0.04]} />
                <meshStandardMaterial color="#C98A2E" roughness={0.4} />
              </mesh>
            )}
          </group>
        ))}
      </group>

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
