// Groq chat completions (OpenAI-compatible REST). The key lives only in the
// GROQ_API_KEY Worker secret and never reaches the app.
import { HttpError } from './http.js';

const URL_ = 'https://api.groq.com/openai/v1/chat/completions';

// Tried in order: if Groq retires a model, the next one keeps the tutor working.
// Override with GROQ_MODEL / GROQ_VISION_MODEL vars (comma separated).
const TEXT_MODELS = ['llama-3.3-70b-versatile', 'openai/gpt-oss-120b', 'qwen/qwen3-32b'];
const VISION_MODELS = ['meta-llama/llama-4-scout-17b-16e-instruct', 'meta-llama/llama-4-maverick-17b-128e-instruct'];

const list = (v, fallback) => (v ? v.split(',').map((s) => s.trim()).filter(Boolean) : fallback);

export const groqConfigured = (env) => Boolean(env.GROQ_API_KEY);

// Removes hidden reasoning some models emit, and em dashes from all output.
export const clean = (s) =>
  String(s || '')
    .replace(/<think>[\s\S]*?<\/think>/g, '')
    .replace(/—/g, ', ')
    .trim();

export async function groqChat(env, { messages, vision = false, json = false, maxTokens = 2000, temperature = 0.4 }) {
  if (!env.GROQ_API_KEY) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  const models = vision ? list(env.GROQ_VISION_MODEL, VISION_MODELS) : list(env.GROQ_MODEL, TEXT_MODELS);
  let lastError = null;
  for (const model of models) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 60_000);
    let res;
    try {
      res = await fetch(URL_, {
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
