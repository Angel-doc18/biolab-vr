import { useEffect, useState } from 'react'
import { useAIProxy } from '../hooks/useAIProxy.js'
import { askAI } from '../lib/askAI.js'
import MarkdownLite from './MarkdownLite.jsx'

const SUGGESTIONS = [
  'Why do plant cells need a cell wall but animal cells don\u2019t?',
  'What\u2019s the difference between arteries and veins?',
  'Explain osmosis with a simple example',
  'Why is the surface area of the small intestine important?'
]

export default function AskAI() {
  const { proxyUrl, setProxyUrl, passcode, setPasscode, buildDefault } = useAIProxy()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [draftUrl, setDraftUrl] = useState(proxyUrl)
  const [draftPasscode, setDraftPasscode] = useState(passcode)
  const [input, setInput] = useState('')
  const [thread, setThread] = useState([]) // [{role, content}]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  const openSettings = () => {
    setDraftUrl(proxyUrl)
    setDraftPasscode(passcode)
    setSettingsOpen(true)
  }

  const send = async (question) => {
    const q = (question ?? input).trim()
    if (!q || loading) return
    setInput('')
    setError(null)
    const nextThread = [...thread, { role: 'user', content: q }]
    setThread(nextThread)
    setLoading(true)
    try {
      const answer = await askAI({ proxyUrl, passcode, question: q, history: thread })
      setThread([...nextThread, { role: 'assistant', content: answer }])
    } catch (err) {
      setError(err.message)
      // A passcode problem is the one error where jumping straight to
      // settings actually helps the student unblock themselves.
      if (/passcode/i.test(err.message)) openSettings()
    } finally {
      setLoading(false)
    }
  }

  const saveSettings = () => {
    setProxyUrl(draftUrl.trim())
    setPasscode(draftPasscode.trim())
    setSettingsOpen(false)
  }

  return (
    <div className="flex h-full flex-col">
      <header className="flex items-center justify-between border-b border-tray-line px-6 py-4">
        <div>
          <h1 className="font-display text-2xl text-tag">Ask AI</h1>
          <p className="mt-1 text-sm text-tag-dim">
            Ask any Biology question in your own words and get a detailed explanation.
            Needs internet — everything else in this app stays fully offline.
          </p>
        </div>
        <button
          onClick={openSettings}
          className="shrink-0 rounded-sm border border-tray-line px-3 py-1.5 text-xs text-tag-dim hover:border-tag hover:text-tag"
        >
          Settings
        </button>
      </header>

      {!online && (
        <div className="border-b border-tray-line bg-system-digestive/10 px-6 py-2 text-xs text-tag">
          You're offline right now — Ask AI needs a connection. The rest of the app still works.
        </div>
      )}

      {settingsOpen && (
        <div className="border-b border-tray-line bg-tray-raised/60 px-6 py-4">
          <div className="max-w-xl space-y-3">
            <div>
              <label className="mb-1 block text-xs text-tag-dim">Class passcode</label>
              <input
                type="password"
                value={draftPasscode}
                onChange={(e) => setDraftPasscode(e.target.value)}
                placeholder="Ask your teacher if one is needed"
                className="w-full rounded-sm border border-tray-line bg-tray px-3 py-2 text-sm text-tag placeholder:text-tag-dim/60"
              />
              <p className="mt-1 text-xs text-tag-dim">
                Only needed if your teacher set one up on the server. Stored on this device only.
              </p>
            </div>
            <details className="text-xs text-tag-dim">
              <summary className="cursor-pointer text-tag-dim hover:text-tag">
                Advanced — AI server address
              </summary>
              <div className="mt-2">
                <input
                  type="text"
                  value={draftUrl}
                  onChange={(e) => setDraftUrl(e.target.value)}
                  placeholder={buildDefault || 'e.g. https://your-server.example.com (leave blank for default)'}
                  className="w-full rounded-sm border border-tray-line bg-tray px-3 py-2 text-sm text-tag placeholder:text-tag-dim/60"
                />
                <p className="mt-1">
                  Only change this if your teacher told you to point at a different server. There is no
                  Anthropic API key in this app — the key lives on that server, not here.
                </p>
              </div>
            </details>
            <div className="flex gap-2">
              <button
                onClick={saveSettings}
                className="rounded-sm border border-tag px-4 py-1.5 text-sm text-tag hover:bg-tag hover:text-tray"
              >
                Save
              </button>
              <button
                onClick={() => setSettingsOpen(false)}
                className="rounded-sm border border-tray-line px-4 py-1.5 text-sm text-tag-dim hover:border-tag hover:text-tag"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
        {thread.length === 0 && (
          <div className="mx-auto max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-wide text-tag-dim">Try asking</p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-sm border border-tray-line px-3 py-2 text-left text-sm text-tag-dim hover:border-tag hover:text-tag"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto max-w-2xl space-y-5">
          {thread.map((msg, i) => (
            <div key={i}>
              {msg.role === 'user' ? (
                <p className="tag-chip inline-block max-w-full text-tag">{msg.content}</p>
              ) : (
                <div className="border-l-2 border-tray-line pl-4 text-sm text-tag-dim">
                  <MarkdownLite text={msg.content} />
                </div>
              )}
            </div>
          ))}
          {loading && <p className="text-sm text-tag-dim">Thinking…</p>}
          {error && (
            <p className="rounded-sm border border-system-circulatory bg-system-circulatory/10 px-3 py-2 text-sm text-tag">
              {error}
            </p>
          )}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          send()
        }}
        className="border-t border-tray-line px-6 py-4"
      >
        <div className="mx-auto flex max-w-2xl gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a Biology question…"
            className="flex-1 rounded-sm border border-tray-line bg-tray-raised px-3 py-2 text-sm text-tag placeholder:text-tag-dim/60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-sm border border-tag px-4 py-2 text-sm text-tag transition-colors enabled:hover:bg-tag enabled:hover:text-tray disabled:cursor-not-allowed disabled:opacity-40"
          >
            Ask
          </button>
        </div>
      </form>
    </div>
  )
}
