import { NavLink } from 'react-router-dom'
import { topics } from '../data/topics.js'
import { systemColors } from '../data/systemColors.js'

export default function Sidebar({ progress, onNavigate }) {
  return (
    <nav
      aria-label="Biology topics"
      className="h-full w-full overflow-y-auto border-r border-tray-line bg-tray-raised/60 px-3 py-5"
    >
      <div className="mb-5 px-2">
        <p className="font-display text-lg tracking-tight text-tag">BioLab VR</p>
        <p className="text-xs text-tag-dim">WAEC / GCE Biology</p>
      </div>

      <NavLink
        to="/ask"
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            'mb-4 flex items-center gap-3 rounded-sm border px-3 py-2.5 text-sm transition-colors',
            isActive
              ? 'border-tag bg-tag/10 text-tag'
              : 'border-tray-line text-tag-dim hover:border-tag hover:text-tag'
          ].join(' ')
        }
      >
        <span aria-hidden="true">✦</span>
        Ask AI
      </NavLink>

      <p className="mb-2 px-3 text-xs uppercase tracking-wide text-tag-dim">Topics</p>

      <ul className="space-y-1">
        {topics.map((topic) => {
          const rec = progress.records[topic.id]
          return (
            <li key={topic.id}>
              <NavLink
                to={`/topic/${topic.id}`}
                onClick={onNavigate}
                className={({ isActive }) =>
                  [
                    'group flex items-center gap-3 rounded-sm border px-3 py-2.5 text-sm transition-colors',
                    isActive
                      ? 'border-tray-line bg-tray text-tag'
                      : 'border-transparent text-tag-dim hover:border-tray-line hover:bg-tray/60 hover:text-tag'
                  ].join(' ')
                }
              >
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: systemColors[topic.system] }}
                />
                <span className="flex-1">{topic.title}</span>
                {rec?.bestScore != null && (
                  <span className="text-xs tabular-nums text-tag-dim">{rec.bestScore}%</span>
                )}
                {rec?.visited && rec?.bestScore == null && (
                  <span aria-label="Visited" className="text-xs text-tag-dim">
                    •
                  </span>
                )}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
