import { Html } from '@react-three/drei'

/**
 * A clickable specimen-tag label anchored to a 3D point. Shared by every
 * topic model so labeling behaves identically across the app.
 */
export default function LeaderLabel({ position, text, color, active, onClick }) {
  return (
    <Html position={position} distanceFactor={6} occlude={false} zIndexRange={[10, 0]}>
      <button
        onClick={onClick}
        className={[
          'flex -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-sm border px-2 py-1 text-left text-xs transition-colors',
          active
            ? 'border-tag bg-tray text-tag'
            : 'border-tray-line bg-tray/90 text-tag-dim hover:border-tag hover:text-tag'
        ].join(' ')}
        style={{ pointerEvents: 'auto' }}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
        {text}
      </button>
    </Html>
  )
}
