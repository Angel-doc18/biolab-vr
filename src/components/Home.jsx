import { Link } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { systemColors } from '../data/systemColors.js'

export default function Home({ progress }) {
  const visitedCount = Object.values(progress.records).filter((r) => r.visited).length

  return (
    <div className="h-full overflow-y-auto p-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-xs uppercase tracking-wide text-tag-dim">
          {navigator.onLine ? 'Online' : 'Offline'} — works either way
        </p>
        <h1 className="font-display text-3xl text-tag">Study Biology, in three dimensions.</h1>
        <p className="mt-3 text-sm leading-relaxed text-tag-dim">
          Rotate and explore each topic as a 3D specimen, put on a headset for a closer look when
          one's available, and check your understanding with a short quiz. Everything here works
          fully offline once the app has loaded once — no data bundle, no signal needed after that.
        </p>

        <p className="mt-6 text-xs text-tag-dim">
          {visitedCount} of {topics.length} topics visited
        </p>

        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link
                to={`/topic/${topic.id}`}
                className="flex items-center gap-3 rounded-sm border border-tray-line px-3 py-2.5 text-sm text-tag-dim transition-colors hover:border-tag hover:text-tag"
              >
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: systemColors[topic.system] }}
                />
                {topic.title}
                {!topic.hasModel && <span className="ml-auto text-[10px] text-tag-dim">soon</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
