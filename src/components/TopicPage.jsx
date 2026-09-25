import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { getTopic, topics } from '../data/topics.js'
import { systemColors } from '../data/systemColors.js'
import Scene3D from './Scene3D.jsx'
import Quiz from './Quiz.jsx'

export default function TopicPage({ progress }) {
  const { topicId } = useParams()
  const topic = getTopic(topicId)
  const [activePart, setActivePart] = useState(null)

  useEffect(() => {
    if (topic) progress.markVisited(topic.id)
    setActivePart(null)
  }, [topic?.id])

  if (!topic) return <Navigate to="/" replace />

  const activeLabel = topic.labels.find((l) => l.part === activePart)
  const index = topics.findIndex((t) => t.id === topic.id)
  const prev = topics[index - 1]
  const next = topics[index + 1]

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="border-b border-tray-line px-6 py-4">
        <div className="flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full"
            style={{ backgroundColor: systemColors[topic.system] }}
          />
          <h1 className="font-display text-2xl text-tag">{topic.title}</h1>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-tag-dim">{topic.summary}</p>
      </header>

      <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="relative h-[60vh] border-b border-tray-line lg:h-auto lg:border-b-0 lg:border-r">
          <Scene3D topic={topic} activePart={activePart} onSelectPart={setActivePart} />
        </div>

        <div className="space-y-6 p-6">
          <section>
            <h2 className="mb-2 text-xs uppercase tracking-wide text-tag-dim">Parts</h2>
            <ul className="space-y-1.5">
              {topic.labels.map((l) => (
                <li key={l.part}>
                  <button
                    onClick={() => setActivePart(l.part)}
                    className={[
                      'w-full rounded-sm border px-3 py-2 text-left text-sm transition-colors',
                      activePart === l.part
                        ? 'border-tag bg-tag/10 text-tag'
                        : 'border-tray-line text-tag-dim hover:border-tag hover:text-tag'
                    ].join(' ')}
                  >
                    {l.text}
                  </button>
                </li>
              ))}
            </ul>
            {!activeLabel && (
              <p className="mt-2 text-xs text-tag-dim">
                Tap a part above, or a labeled point in the 3D view, to read about it.
              </p>
            )}
          </section>

          <section>
            <Quiz topic={topic} onComplete={(score, total) => progress.recordQuizScore(topic.id, score, total)} />
          </section>
        </div>
      </div>

      <footer className="flex items-center justify-between border-t border-tray-line px-6 py-3 text-sm">
        {prev ? (
          <Link to={`/topic/${prev.id}`} className="text-tag-dim hover:text-tag">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/topic/${next.id}`} className="text-tag-dim hover:text-tag">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </footer>
    </div>
  )
}
