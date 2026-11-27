// One door to the AI for every feature: up to five keys from three providers
// (Groq x2, Google Gemini x2, Mistral x1), all spoken to the same way (the
// OpenAI-compatible chat API each of them offers). A request goes to the first
// key that is set and not resting; when a key's allowance is used up (429), it
// is refused (401/403) or the provider fails, it rests for a while and the next
// key answers at once, so the tutor never stops while any key still works.
// Keys come from the CTO's System page (encrypted in the database) or from the
// server's environment.
import { HttpError } from './http.js';
import { secret } from './secrets.js';

export const PROVIDERS = {
  groq: {
    name: 'Groq',
    base: 'https://api.groq.com/openai/v1',
    text: ['openai/gpt-oss-120b', 'qwen/qwen3.8-27b', 'openai/gpt-oss-20b'],
    vision: ['qwen/qwen3.8-27b', 'meta-llama/llama-4-scout-17b-16e-instruct'],
    reasoning: (model) => model.startsWith('openai/gpt-oss'),
    // speech, safety classifiers and narrow models are never used for chat
    notChat: /whisper|guard|orpheus|tts|allam|prompt/i,
  },
  gemini: {
    name: 'Google Gemini',
    base: 'https://generativelanguage.googleapis.com/v1beta/openai',
    text: ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'],
    vision: ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'],
    reasoning: (model) => /gemini-2\.5/.test(model),
    // only the general "flash" chat models: not images, speech, live or embeddings
    pick: (ids) => ids.filter((m) => /^gemini-[\d.]+-flash(-lite)?$/.test(m)).sort().reverse(),
    notChat: /tts|image|live|audio|embedding|aqa|imagen|veo/i,
  },
  mistral: {
    name: 'Mistral',
    base: 'https://api.mistral.ai/v1',
    text: ['mistral-medium-latest', 'mistral-small-latest'],
    vision: ['mistral-medium-latest', 'mistral-small-latest'],
    reasoning: () => false,
    notChat: /embed|moderation|ocr|codestral|voxtral|devstral/i,
  },
};

// The five places for a key, in the order they are tried.
export const SLOTS = [
  { id: 'groq1', provider: 'groq', env: 'GROQ_API_KEY', label: 'Groq, key 1' },
  { id: 'groq2', provider: 'groq', env: 'GROQ_API_KEY_2', label: 'Groq, key 2' },
  { id: 'gemini1', provider: 'gemini', env: 'GEMINI_API_KEY', label: 'Google Gemini, key 1' },
  { id: 'gemini2', provider: 'gemini', env: 'GEMINI_API_KEY_2', label: 'Google Gemini, key 2' },
  { id: 'mistral', provider: 'mistral', env: 'MISTRAL_API_KEY', label: 'Mistral' },
];
// Photos and documents are read best by Gemini, so they try Gemini first.
const VISION_ORDER = ['gemini1', 'gemini2', 'groq1', 'groq2', 'mistral'];

export const keyOf = (env, slot) => secret(env, `ai_${slot.id}`, slot.env);

// ---------- health of each key (kept in memory) ----------
const health = new Map(); // slot id -> { restUntil, reason, ok, failed, lastModel, lastAt, lastError }
const stateOf = (id) => {
  if (!health.has(id)) health.set(id, { restUntil: 0, reason: null, ok: 0, failed: 0, lastModel: null, lastAt: 0, lastError: null });
  return health.get(id);
};
const rest = (id, ms, reason) => {
  const s = stateOf(id);
  s.restUntil = Date.now() + ms;
  s.reason = reason;
};
export function slotHealth(id) {
  const s = stateOf(id);
  const resting = s.restUntil > Date.now();
  return { resting, restUntil: resting ? s.restUntil : null, reason: resting ? s.reason : null, ok: s.ok, failed: s.failed, lastModel: s.lastModel, lastAt: s.lastAt || null, lastError: s.lastError };
}
// A new key starts fresh.
export const forgetHealth = (id) => health.delete(id);

// ---------- which models each key can use (cached an hour per key) ----------
const catalogs = new Map(); // `${slot}:${hint}` -> { ids, at }
async function liveModels(provider, key, cacheKey) {
  const c = catalogs.get(cacheKey);
  if (c && Date.now() - c.at < 3_600_000) return c.ids;
  try {
    const res = await fetch(`${provider.base}/models`, { headers: { authorization: `Bearer ${key}` } });
    if (!res.ok) return c?.ids || null;
    const data = await res.json();
    const ids = (data.data || []).map((m) => String(m.id || '').replace(/^models\//, '')).filter(Boolean);
    catalogs.set(cacheKey, { ids, at: Date.now() });
    return ids;
  } catch {
    return c?.ids || null;
  }
}

async function modelsFor(env, slot, key, vision) {
  const p = PROVIDERS[slot.provider];
  const override = slot.provider === 'groq' ? (vision ? env.GROQ_VISION_MODEL : env.GROQ_MODEL) : null;
  const preferred = override ? override.split(',').map((s) => s.trim()).filter(Boolean) : vision ? p.vision : p.text;
  const ids = await liveModels(p, key, `${slot.id}:${key.slice(-6)}`);
  if (!ids) return preferred;
  const live = preferred.filter((m) => ids.includes(m));
  if (live.length) return live;
  // None of the preferred models is served any more: the provider's newest chat model.
  const others = p.pick ? p.pick(ids) : ids.filter((m) => !p.notChat.test(m));
  return others.length ? others.slice(0, 2) : preferred;
}

// Is any key set (in the app or on the server)?
export async function aiConfigured(env) {
  for (const slot of SLOTS) if ((await keyOf(env, slot)).value) return true;
  return false;
}

// One chat completion. messages: OpenAI format (images as image_url data URIs).
// Returns { text, model, provider, slot }.
// How long a provider asks us to wait after a per-minute limit: the
// retry-after header, or "try again in 7.5s" / "in 1m2s" in the message.
function waitFrom(res, body) {
  const h = Number(res.headers.get('retry-after'));
  if (Number.isFinite(h) && h > 0) return h * 1000;
  const m = /try again in (?:(\d+)m)?(\d+(?:\.\d+)?)s/i.exec(body);
  return m ? ((Number(m[1]) || 0) * 60 + Number(m[2])) * 1000 : null;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function aiChat(env, opts, retried = false) {
  // patience: how long to wait for a briefly busy key before failing (study
  // tasks, which show progress, wait longer than a quick question).
  const { messages, vision = false, json = false, maxTokens = 2000, temperature = 0.4, reasoning = null, patience = 25_000 } = opts;
  const order = vision ? VISION_ORDER.map((id) => SLOTS.find((s) => s.id === id)) : SLOTS;
  let anyKey = false;
  let busy = false;
  let lastError = null;
  for (const slot of order) {
    const { value: key } = await keyOf(env, slot);
    if (!key) continue;
    anyKey = true;
    const st = stateOf(slot.id);
    if (st.restUntil > Date.now()) {
      if (st.reason === 'busy' || st.reason === 'used up') busy = true;
      continue;
    }
    const p = PROVIDERS[slot.provider];
    const models = await modelsFor(env, slot, key, vision);
    let slotBusy = false;
    let refused = false;
    let wait = null;
    for (const model of models) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 60_000);
      let res;
      try {
        res = await fetch(`${p.base}/chat/completions`, {
          method: 'POST',
          signal: ctrl.signal,
          headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
          body: JSON.stringify({
            model,
            messages,
            max_tokens: maxTokens,
            temperature,
            ...(json ? { response_format: { type: 'json_object' } } : {}),
            ...(reasoning && p.reasoning(model) ? { reasoning_effort: reasoning } : {}),
          }),
        });
      } catch (e) {
        lastError = e;
        continue; // timed out or no answer: the next model, then the next key
      } finally {
        clearTimeout(timer);
      }
      if (res.ok) {
        const data = await res.json().catch(() => null);
        const text = data?.choices?.[0]?.message?.content;
        if (typeof text === 'string' && text.trim()) {
          st.ok += 1;
          st.lastModel = model;
          st.lastAt = Date.now();
          st.lastError = null;
          return { text, model, provider: slot.provider, slot: slot.id };
        }
        lastError = new Error('empty_completion');
        continue;
      }
      const body = await res.text().catch(() => '');
      console.error('ai_error', slot.id, model, res.status, body.slice(0, 300));
      st.failed += 1;
      st.lastError = `${res.status} ${body.slice(0, 120)}`;
      if (res.status === 401 || res.status === 403) {
        refused = true;
        break; // the key itself is refused: no other model of it will work
      }
      if (res.status === 429) {
        // per-minute limit (try the next model, which has its own) or the day's quota
        if (/quota|exhaust|per day|daily|billing/i.test(body)) {
          rest(slot.id, 30 * 60_000, 'used up');
          slotBusy = true;
          break;
        }
        slotBusy = true;
        const w = waitFrom(res, body);
        if (w != null) wait = wait == null ? w : Math.min(wait, w);
        lastError = new Error('ai_429');
        continue;
      }
      if (res.status === 404) catalogs.delete(`${slot.id}:${key.slice(-6)}`);
      lastError = new Error(`ai_${res.status}`);
    }
    if (refused) rest(slot.id, 6 * 3_600_000, 'refused');
    else if (slotBusy && stateOf(slot.id).restUntil <= Date.now()) rest(slot.id, Math.min(60_000, Math.max(2_000, wait ?? 20_000)), 'busy');
    if (slotBusy) busy = true;
  }
  if (!anyKey) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  // Every key only briefly busy (a per-minute limit): wait for the first one
  // to be free (up to `patience`) and try once more, rather than failing.
  if (busy && !retried) {
    let soonest = Infinity;
    for (const slot of SLOTS) {
      if (!(await keyOf(env, slot)).value) continue;
      const st = stateOf(slot.id);
      if (st.reason === 'busy' && st.restUntil > Date.now()) soonest = Math.min(soonest, st.restUntil);
    }
    const ms = soonest - Date.now();
    if (ms > 0 && ms <= patience) {
      await sleep(ms + 300);
      return aiChat(env, opts, true);
    }
  }
  console.error('ai_all_keys_failed', lastError?.message || (busy ? 'busy' : 'none'));
  if (busy) throw new HttpError(503, 'The AI tutor is very busy right now. Please try again in a minute.', 'ai_busy');
  throw new HttpError(502, 'The AI tutor could not answer just now. Please try again.', 'ai_failed');
}

// A small real request with one key, for the CTO's "Test" button and to check a
// new key before it is saved. Returns { ok, model?, ms, error? }.
export async function testKey(env, slot, key) {
  const p = PROVIDERS[slot.provider];
  const t0 = Date.now();
  try {
    const list = await fetch(`${p.base}/models`, { headers: { authorization: `Bearer ${key}` } });
    if (list.status === 401 || list.status === 403) return { ok: false, ms: Date.now() - t0, error: `${p.name} refused this key.` };
    const models = await modelsFor(env, slot, key, false);
    const res = await fetch(`${p.base}/chat/completions`, {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ model: models[0], messages: [{ role: 'user', content: 'Reply with the single word: ready' }], max_tokens: 20, temperature: 0 }),
    });
    if (res.ok) return { ok: true, model: models[0], ms: Date.now() - t0 };
    const body = await res.text().catch(() => '');
    if (res.status === 429) return { ok: true, model: models[0], ms: Date.now() - t0, note: 'The key works but its allowance is used up for now.' };
    return { ok: false, ms: Date.now() - t0, error: `${p.name} answered ${res.status}: ${body.slice(0, 140)}` };
  } catch (e) {
    return { ok: false, ms: Date.now() - t0, error: `${p.name} could not be reached (${e?.message || e}).` };
  }
}
