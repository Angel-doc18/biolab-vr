import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { topics } from '../src/data/topics.js'

const {
  ANTHROPIC_API_KEY,
  ANTHROPIC_MODEL = 'claude-sonnet-5',
  APP_PASSCODE = '',
  ALLOWED_ORIGINS = 'http://localhost:5173',
  MAX_REQUESTS_PER_HOUR = '30',
  PORT = '8787'
} = process.env

if (!ANTHROPIC_API_KEY) {
  console.error('Missing ANTHROPIC_API_KEY — copy server/.env.example to server/.env and fill it in.')
  process.exit(1)
}

const SYSTEM_PROMPT = `You are a patient, encouraging Biology tutor for a secondary school student preparing for the WAEC/GCE Biology examination (West Africa).

Give clear, detailed, exam-relevant explanations:
- Use language a teenage student can follow, but don't oversimplify to the point of being wrong.
- Structure longer answers with short paragraphs or a numbered/bulleted list when that helps.
- Where relevant, mention the correct scientific term (in bold with **asterisks**) alongside a plain-language explanation.
- If the question relates to one of this app's topics, you can mention it by name so the student knows they can explore it in 3D, but don't force a connection that isn't there.
- If a question is outside secondary school Biology, politely redirect to biology topics — don't answer unrelated subjects.
- Keep answers focused: aim for enough depth to actually help with exam prep, without padding.

The app's topics are: ${topics.map((t) => t.title).join(', ')}.`

const allowedOrigins = ALLOWED_ORIGINS.split(',').map((s) => s.trim()).filter(Boolean)
const maxPerHour = Number(MAX_REQUESTS_PER_HOUR) || 30

const app = express()
app.use(express.json({ limit: '32kb' }))
app.use(
  cors({
    origin: allowedOrigins.includes('*') ? true : allowedOrigins,
    methods: ['GET', 'POST']
  })
)

// Minimal in-memory per-IP rate limiter. Good enough for a single-
// instance classroom deployment; resets if the process restarts, and
// won't coordinate across multiple server instances — that's fine at
// this scale, but note it if you ever need to scale this out.
const requestLog = new Map() // ip -> [timestamps]

function isRateLimited(ip) {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < windowMs)
  timestamps.push(now)
  requestLog.set(ip, timestamps)
  return timestamps.length > maxPerHour
}

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.post('/api/ask', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'

  if (APP_PASSCODE && req.headers['x-app-passcode'] !== APP_PASSCODE) {
    return res.status(401).json({ error: 'Incorrect or missing class passcode.' })
  }

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many questions from this device this hour. Try again later.' })
  }

  const { question, history } = req.body || {}
  if (!question || typeof question !== 'string' || question.length > 2000) {
    return res.status(400).json({ error: 'Missing or invalid "question".' })
  }
  const safeHistory = Array.isArray(history)
    ? history
        .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string')
        .slice(-10) // cap context sent per request
    : []

  const messages = [...safeHistory, { role: 'user', content: question }]

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages
      })
    })

    if (!upstream.ok) {
      const body = await upstream.text().catch(() => '')
      console.error('Anthropic API error', upstream.status, body)
      return res.status(502).json({ error: 'The AI service returned an error. Try again shortly.' })
    }

    const data = await upstream.json()
    const text = (data.content || [])
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')

    res.json({ text: text || '(No response text returned.)' })
  } catch (err) {
    console.error('Proxy error', err)
    res.status(500).json({ error: 'Server could not reach the AI service.' })
  }
})

app.listen(Number(PORT), () => {
  console.log(`BioLab VR AI proxy listening on http://localhost:${PORT}`)
  if (!APP_PASSCODE) {
    console.warn('APP_PASSCODE is not set — anyone who can reach this server can use your API quota.')
  }
})
