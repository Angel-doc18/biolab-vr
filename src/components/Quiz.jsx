import { useState } from 'react'

export default function Quiz({ topic, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const allAnswered = topic.quiz.every((_, i) => answers[i] !== undefined)
  const score = topic.quiz.reduce((total, q, i) => (answers[i] === q.answer ? total + 1 : total), 0)

  const submit = () => {
    setSubmitted(true)
    onComplete(score, topic.quiz.length)
  }

  const retry = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h3 className="font-display text-base text-tag">Field notes — check your understanding</h3>
        {submitted && (
          <span className="tag-chip">
            {score}/{topic.quiz.length} correct
          </span>
        )}
      </div>

      <ol className="space-y-4">
        {topic.quiz.map((q, i) => (
          <li key={i} className="border-l-2 border-tray-line pl-3">
            <p className="mb-2 text-sm text-tag">
              {i + 1}. {q.q}
            </p>
            <div className="space-y-1">
              {q.options.map((opt, oi) => {
                const isSelected = answers[i] === oi
                const isCorrect = submitted && oi === q.answer
                const isWrongSelected = submitted && isSelected && oi !== q.answer
                return (
                  <button
                    key={oi}
                    disabled={submitted}
                    onClick={() => setAnswers((prev) => ({ ...prev, [i]: oi }))}
                    className={[
                      'block w-full rounded-sm border px-3 py-1.5 text-left text-sm transition-colors',
                      isCorrect
                        ? 'border-system-cellular bg-system-cellular/10 text-tag'
                        : isWrongSelected
                          ? 'border-system-circulatory bg-system-circulatory/10 text-tag'
                          : isSelected
                            ? 'border-tag bg-tag/10 text-tag'
                            : 'border-tray-line text-tag-dim hover:border-tag hover:text-tag'
                    ].join(' ')}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </li>
        ))}
      </ol>

      {!submitted ? (
        <button
          disabled={!allAnswered}
          onClick={submit}
          className="rounded-sm border border-tag px-4 py-2 text-sm text-tag transition-colors enabled:hover:bg-tag enabled:hover:text-tray disabled:cursor-not-allowed disabled:opacity-40"
        >
          Submit answers
        </button>
      ) : (
        <button
          onClick={retry}
          className="rounded-sm border border-tray-line px-4 py-2 text-sm text-tag-dim transition-colors hover:border-tag hover:text-tag"
        >
          Try again
        </button>
      )}
    </div>
  )
}
