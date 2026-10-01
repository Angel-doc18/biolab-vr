// Groq chat completions (OpenAI-compatible REST). The key lives only in the
// GROQ_API_KEY Worker secret and never reaches the app.
import { HttpError } from './http.js';

const API = 'https://api.groq.com/openai/v1';

// Preferred models, best first. Override with GROQ_MODEL / GROQ_VISION_MODEL
// (comma separated). Only models Groq currently serves are tried, so a retired
// model can never take the tutor offline.
const TEXT_MODELS = ['openai/gpt-oss-120b', 'qwen/qwen3.8-27b', 'openai/gpt-oss-20b'];
const VISION_MODELS = ['qwen/qwen3.8-27b'];
// Never used for chat: speech, safety classifiers and narrow models.
const NOT_CHAT = /whisper|guard|orpheus|tts|allam|prompt/i;

const list = (v, fallback) => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : fallback);

export const groqConfigured = (env) => Boolean(env.GROQ_API_KEY);

// Removes hidden reasoning some models emit, and em dashes and special
// hyphens from all output.
export const clean = (s) =>
  String(s || '')
    .replace(/<think>[\s\S]*?<\/think>/g, '')
    .replace(/\s*—\s*/g, ', ')
    .replace(/[‐‑‒–―]/g, '-')
    .trim();

// Live model list, cached per Worker instance for an hour.
let catalog = { ids: null, at: 0 };
async function liveModels(env) {
  if (catalog.ids && Date.now() - catalog.at < 3_600_000) return catalog.ids;
  try {
    const res = await fetch(`${API}/models`, { headers: { authorization: `Bearer ${env.GROQ_API_KEY}` } });
    if (!res.ok) return catalog.ids;
    const data = await res.json();
    catalog = { ids: (data.data || []).map((m) => m.id), at: Date.now() };
  } catch {
    // keep whatever we had; the preferred list is tried as is
  }
  return catalog.ids;
}

async function modelsFor(env, vision) {
  const preferred = vision ? list(env.GROQ_VISION_MODEL, VISION_MODELS) : list(env.GROQ_MODEL, TEXT_MODELS);
  const ids = await liveModels(env);
  if (!ids) return preferred;
  const live = preferred.filter((m) => ids.includes(m));
  if (live.length) return live;
  // None of the preferred models is served any more: fall back to any chat model.
  const others = ids.filter((m) => !NOT_CHAT.test(m));
  return others.length ? others : preferred;
}

export async function groqChat(env, { messages, vision = false, json = false, maxTokens = 2000, temperature = 0.4 }) {
  if (!env.GROQ_API_KEY) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  const models = await modelsFor(env, vision);
  let lastError = null;
  for (const model of models) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 60_000);
    let res;
    try {
      res = await fetch(`${API}/chat/completions`, {
        method: 'POST',
        signal: ctrl.signal,
        headers: { authorization: `Bearer ${env.GROQ_API_KEY}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: maxTokens,
          temperature,
          ...(json ? { response_format: { type: 'json_object' } } : {}),
        }),
      });
    } catch (e) {
      lastError = e;
      continue;
    } finally {
      clearTimeout(timer);
    }
    if (res.ok) {
      const data = await res.json();
      const text = data?.choices?.[0]?.message?.content;
      if (typeof text === 'string' && text.trim()) return { text, model };
      lastError = new Error('empty_completion');
      continue;
    }
    const body = await res.text().catch(() => '');
    console.error('groq_error', model, res.status, body.slice(0, 300));
    // Model missing, retired or unable to take this request: try the next one.
    if (res.status === 404 || res.status === 400 || res.status === 413 || res.status >= 500) {
      if (res.status === 404) catalog.at = 0; // refresh the model list next time
      lastError = new Error(`groq_${res.status}`);
      continue;
    }
    if (res.status === 429) throw new HttpError(503, 'The AI tutor is busy right now. Please try again in a minute.', 'ai_busy');
    if (res.status === 401 || res.status === 403) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
    lastError = new Error(`groq_${res.status}`);
  }
  console.error('groq_all_models_failed', lastError?.message);
  throw new HttpError(502, 'The AI tutor could not answer just now. Please try again.', 'ai_failed');
}
