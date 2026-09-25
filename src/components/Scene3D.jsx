import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { XR, createXRStore } from '@react-three/xr'
import CellModel from './models/CellModel.jsx'
import CirculatoryModel from './models/CirculatoryModel.jsx'
import RespiratoryModel from './models/RespiratoryModel.jsx'
import DigestiveModel from './models/DigestiveModel.jsx'
import ExcretoryModel from './models/ExcretoryModel.jsx'
import ReproductiveModel from './models/ReproductiveModel.jsx'
import GeneticsModel from './models/GeneticsModel.jsx'
import EcologyModel from './models/EcologyModel.jsx'
import PlaceholderModel from './models/PlaceholderModel.jsx'
import { systemColors } from '../data/systemColors.js'

const xrStore = createXRStore()

const MODELS = {
  'cell-structure': CellModel,
  'circulatory-system': CirculatoryModel,
  'respiratory-system': RespiratoryModel,
  'digestive-system': DigestiveModel,
  'excretory-system': ExcretoryModel,
  'reproductive-system': ReproductiveModel,
  genetics: GeneticsModel,
  ecology: EcologyModel
}

function TopicModel({ topic, activePart, onSelectPart }) {
  const Model = MODELS[topic.id]
  if (Model) {
    return <Model activePart={activePart} onSelectPart={onSelectPart} />
  }
  // Fallback only — every current topic has a dedicated model above.
  // Kept so a newly added topic without a model yet still renders.
  return (
    <PlaceholderModel
      color={systemColors[topic.system]}
      title={topic.title}
      labels={topic.labels}
    />
  )
}

export default function Scene3D({ topic, activePart, onSelectPart }) {
  const [xrSupported, setXrSupported] = useState(null)

  // Feature-detect WebXR without assuming a headset is present — most
  // students will be on a phone with no headset at all, and that's the
  // primary path, not a degraded one.
  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.xr?.isSessionSupported) {
      navigator.xr
        .isSessionSupported('immersive-vr')
        .then(setXrSupported)
        .catch(() => setXrSupported(false))
    } else {
      setXrSupported(false)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <XR store={xrStore}>
          <Suspense fallback={null}>
            {/* Lighting is hand-set, not an Environment HDRI preset — those
                are fetched from a CDN by drei and would break the "works
                with zero network after install" guarantee. */}
            <ambientLight intensity={0.55} />
            <hemisphereLight args={['#DED2AE', '#0F1713', 0.5]} />
            <directionalLight position={[3, 4, 2]} intensity={1.1} />
            <TopicModel topic={topic} activePart={activePart} onSelectPart={onSelectPart} />
          </Suspense>
          <OrbitControls
            enablePan={false}
            minDistance={2}
            maxDistance={7}
            makeDefault
          />
        </XR>
      </Canvas>

      {xrSupported && (
        <button
          onClick={() => xrStore.enterVR()}
          className="absolute bottom-4 right-4 rounded-sm border border-tag bg-tray px-4 py-2 text-sm text-tag transition-colors hover:bg-tray-raised"
        >
          Enter VR
        </button>
      )}
      {xrSupported === false && (
        <p className="absolute bottom-4 right-4 max-w-[14rem] text-right text-xs text-tag-dim">
          No VR headset detected — drag to rotate, pinch/scroll to zoom.
        </p>
      )}
    </div>
  )
}
