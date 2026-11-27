// One door to the AI for every feature: up to five keys from three providers
// (Groq x2, Google Gemini x2, Mistral x1), all spoken to the same way (the
// OpenAI-compatible chat API each of them offers).
//
// Speed and staying up:
// - The work is spread over the keys (the least busy key of the fastest
//   provider first), so no single key hits its per-minute limit.
// - When a key is slow to answer, a second key is asked at the same time and
//   the first good answer wins ("hedging"), so one slow provider never holds
//   the student up.
// - A key that is used up for the day, refused, or failing rests while the
//   others answer; a per-minute limit only pauses it for the seconds asked.
// - Small routing tasks (fast: true) use each provider's quickest model.
// Each key's use is counted per day in the database (requests, tokens,
// failures, speed, the provider's own limits when it reports them), for the
// CTO's System page. Keys come from that page (encrypted in the database) or
// from the server's environment.
import { HttpError } from './http.js';
import { secret } from './secrets.js';

export const PROVIDERS = {
  groq: {
    name: 'Groq',
    base: 'https://api.groq.com/openai/v1',
    text: ['openai/gpt-oss-120b', 'qwen/qwen3.8-27b', 'openai/gpt-oss-20b'],
    vision: ['qwen/qwen3.8-27b', 'meta-llama/llama-4-scout-17b-16e-instruct'],
    fast: ['openai/gpt-oss-20b', 'qwen/qwen3.8-27b'],
    reasoning: (model) => model.startsWith('openai/gpt-oss'),
    // speech, safety classifiers and narrow models are never used for chat
    notChat: /whisper|guard|orpheus|tts|allam|prompt/i,
    keyLooks: /^gsk_[A-Za-z0-9]{20,}$/,
    keyHint: 'Groq keys start with gsk_',
  },
  gemini: {
    name: 'Google Gemini',
    base: 'https://generativelanguage.googleapis.com/v1beta/openai',
    text: ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3-flash-preview', 'gemini-2.5-flash-lite'],
    vision: ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3-flash-preview', 'gemini-2.5-flash-lite'],
    fast: ['gemini-2.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-3.1-flash-lite'],
    reasoning: (model) => /gemini-(2\.5|3)/.test(model) && !/lite/.test(model),
    // only the general "flash" chat models: not images, speech, live or embeddings
    pick: (ids) =>
      ids
        .filter((m) => /^gemini-([\d.]+-)?flash(-lite)?(-latest|-preview)?$/.test(m))
        .sort()
        .reverse(),
    notChat: /tts|image|live|audio|embedding|aqa|imagen|veo|banana/i,
    keyLooks: /^AIza[0-9A-Za-z_-]{30,}$/,
    keyHint: 'Gemini keys start with AIza and are 39 characters long',
  },
  mistral: {
    name: 'Mistral',
    base: 'https://api.mistral.ai/v1',
    text: ['mistral-medium-latest', 'mistral-small-latest'],
    vision: ['mistral-medium-latest', 'mistral-small-latest'],
    fast: ['mistral-small-latest'],
    reasoning: () => false,
    notChat: /embed|moderation|ocr|codestral|voxtral|devstral/i,
    keyLooks: /^[A-Za-z0-9]{24,64}$/,
    keyHint: 'Mistral keys are 32 letters and numbers',
  },
};

// The five places for a key.
export const SLOTS = [
  { id: 'groq1', provider: 'groq', env: 'GROQ_API_KEY', label: 'Groq, key 1' },
  { id: 'groq2', provider: 'groq', env: 'GROQ_API_KEY_2', label: 'Groq, key 2' },
  { id: 'gemini1', provider: 'gemini', env: 'GEMINI_API_KEY', label: 'Google Gemini, key 1' },
  { id: 'gemini2', provider: 'gemini', env: 'GEMINI_API_KEY_2', label: 'Google Gemini, key 2' },
  { id: 'mistral', provider: 'mistral', env: 'MISTRAL_API_KEY', label: 'Mistral' },
];
// Which provider answers first: Groq is the fastest for text; photos and
// documents are read best by Gemini.
const TIERS = { text: ['groq', 'gemini', 'mistral'], vision: ['gemini', 'groq', 'mistral'] };

export const keyOf = (env, slot) => secret(env, `ai_${slot.id}`, slot.env);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const today = () => new Date().toISOString().slice(0, 10);

// ---------- each key's health (in memory) and use (in the database) ----------
const health = new Map();
const stateOf = (id) => {
  if (!health.has(id)) health.set(id, { restUntil: 0, reason: null, ok: 0, failed: 0, lastModel: null, lastAt: 0, lastError: null, ewma: 0, recent: [], inflight: 0 });
  return health.get(id);
};
const rest = (env, id, ms, reason) => {
  const s = stateOf(id);
  s.restUntil = Date.now() + ms;
  s.reason = reason;
  if (reason === 'used up' || reason === 'refused') saveUse(env, id, { usedUpUntil: s.restUntil, reason });
};
export function slotHealth(id) {
  const s = stateOf(id);
  const resting = s.restUntil > Date.now();
  return {
    resting,
    restUntil: resting ? s.restUntil : null,
    reason: resting ? s.reason : null,
    ok: s.ok,
    failed: s.failed,
    lastModel: s.lastModel,
    lastAt: s.lastAt || null,
    lastError: s.lastError,
    avgMs: s.ewma ? Math.round(s.ewma) : null,
  };
}
// A new key starts fresh.
export function forgetHealth(env, id) {
  health.delete(id);
  try {
    if (env?.DB)
      env.DB.prepare('UPDATE ai_key_usage SET used_up_until = 0, reason = NULL WHERE slot = ? AND day = ?')
        .bind(id, today())
        .run()
        .catch(() => {});
  } catch {
    // the table is not there yet
  }
}

// Today's use of each key, kept in the database so restarts do not lose it
// and a key used up for the day is not tried again after a restart.
let restored = false;
async function restore(env) {
  if (restored || !env?.DB) return;
  restored = true;
  try {
    const { results } = await env.DB.prepare('SELECT slot, used_up_until, reason FROM ai_key_usage WHERE day = ? AND used_up_until > ?').bind(today(), Date.now()).all();
    for (const r of results) {
      const s = stateOf(r.slot);
      s.restUntil = r.used_up_until;
      s.reason = r.reason || 'used up';
    }
  } catch {
    // the table is not there yet (before the migration)
  }
}
function saveUse(env, slot, u) {
  if (!env?.DB) return;
  try {
    env.DB.prepare(
      `INSERT INTO ai_key_usage (day, slot, requests, tokens, failures, ms_total, last_model, last_error, last_at, used_up_until, reason, limits)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(day, slot) DO UPDATE SET
       requests = requests + excluded.requests,
       tokens = tokens + excluded.tokens,
       failures = failures + excluded.failures,
       ms_total = ms_total + excluded.ms_total,
       last_model = COALESCE(excluded.last_model, last_model),
       last_error = COALESCE(excluded.last_error, last_error),
       last_at = MAX(last_at, excluded.last_at),
       used_up_until = CASE WHEN excluded.used_up_until > 0 THEN excluded.used_up_until ELSE used_up_until END,
       reason = COALESCE(excluded.reason, reason),
       limits = COALESCE(excluded.limits, limits)`,
    )
      .bind(
        today(),
        slot,
        u.ok ? 1 : 0,
        u.tokens || 0,
        u.failed ? 1 : 0,
        u.ok ? u.ms || 0 : 0,
        u.model || null,
        u.error || null,
        Date.now(),
        u.usedUpUntil || 0,
        u.reason || null,
        u.limits ? JSON.stringify(u.limits) : null,
      )
      .run()
      .catch(() => {});
  } catch {
    // the table is not there yet (before the migration)
  }
}
export async function usageToday(env) {
  if (!env?.DB) return {};
  try {
    const { results } = await env.DB.prepare('SELECT * FROM ai_key_usage WHERE day = ?').bind(today()).all();
    return Object.fromEntries(
      results.map((r) => [
        r.slot,
        {
          requests: r.requests,
          tokens: r.tokens,
          failures: r.failures,
          avgMs: r.requests ? Math.round(r.ms_total / r.requests) : null,
          lastModel: r.last_model,
          lastError: r.last_error,
          lastAt: r.last_at,
          usedUpUntil: r.used_up_until > Date.now() ? r.used_up_until : null,
          reason: r.used_up_until > Date.now() ? r.reason : null,
          limits: r.limits ? JSON.parse(r.limits) : null,
        },
      ]),
    );
  } catch {
    return {};
  }
}
// The provider's own counters, when it sends them (Groq and Mistral do).
function limitsFrom(res) {
  const out = {};
  res.headers.forEach((v, k) => {
    if (/^x-ratelimit-/i.test(k)) out[k.toLowerCase().replace(/^x-ratelimit-/, '')] = v;
  });
  return Object.keys(out).length ? out : null;
}

// ---------- which models each key can use (cached an hour per key) ----------
const catalogs = new Map(); // `${slot}:${hint}` -> { ids, at }
async function liveModels(provider, key, cacheKey) {
  const c = catalogs.get(cacheKey);
  if (c && Date.now() - c.at < 3_600_000) return c.ids;
  try {
    const res = await fetch(`${provider.base}/models`, { headers: { authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(8000) });
    if (!res.ok) return c?.ids || null;
    const data = await res.json();
    const ids = (data.data || []).map((m) => String(m.id || '').replace(/^models\//, '')).filter(Boolean);
    catalogs.set(cacheKey, { ids, at: Date.now() });
    return ids;
  } catch {
    return c?.ids || null;
  }
}

async function modelsFor(env, slot, key, { vision = false, fast = false } = {}) {
  const p = PROVIDERS[slot.provider];
  const override = slot.provider === 'groq' && !fast ? (vision ? env.GROQ_VISION_MODEL : env.GROQ_MODEL) : null;
  const preferred = override
    ? override
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : vision
      ? p.vision
      : fast
        ? [...p.fast, ...p.text]
        : p.text;
  const ids = await liveModels(p, key, `${slot.id}:${key.slice(-6)}`);
  if (!ids) return preferred;
  const live = preferred.filter((m) => ids.includes(m));
  if (live.length) return live.slice(0, 3);
  // None of the preferred models is served any more: the provider's newest chat model.
  const others = p.pick ? p.pick(ids) : ids.filter((m) => !p.notChat.test(m));
  return others.length ? others.slice(0, 2) : preferred;
}

// Is any key set (in the app or on the server)?
export async function aiConfigured(env) {
  for (const slot of SLOTS) if ((await keyOf(env, slot)).value) return true;
  return false;
}

// How long a provider asks us to wait after a limit: the retry-after header,
// or "try again in 7.5s" / "in 1m2s" / "in 2h5m" in the message. The shorter
// of the two wins: Groq's header can say a round minute while its message
// gives the real time ("try again in 7.71s").
function waitFrom(res, body) {
  const h = Number(res.headers.get('retry-after'));
  let fromBody = null;
  const ms = /try again in (\d+(?:\.\d+)?)ms/i.exec(body);
  if (ms) fromBody = Number(ms[1]);
  else {
    const m = /try again in (?:(\d+)h)?(?:(\d+)m(?!s))?(?:(\d+(?:\.\d+)?)s)?/i.exec(body);
    if (m && (m[1] || m[2] || m[3])) fromBody = ((Number(m[1]) || 0) * 3600 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0)) * 1000;
  }
  const fromHeader = Number.isFinite(h) && h > 0 ? h * 1000 : null;
  if (fromBody != null && fromHeader != null) return Math.min(fromBody, fromHeader);
  return fromBody ?? fromHeader;
}

// The keys to try, in order: by provider (fastest first, or Gemini first
// for photos), and within a provider the least busy key, so the load is
// spread instead of always falling on the first key.
async function orderFor(env, vision) {
  const now = Date.now();
  const ready = [];
  let resting = 0;
  for (const slot of SLOTS) {
    const { value } = await keyOf(env, slot);
    if (!value) continue;
    const st = stateOf(slot.id);
    st.recent = st.recent.filter((t) => now - t < 60_000);
    if (st.restUntil > now) {
      resting += 1;
      continue;
    }
    ready.push({ slot, key: value, st });
  }
  const tiers = TIERS[vision ? 'vision' : 'text'];
  // A key's score: its provider's place (fastest first), plus the requests it
  // is answering now and has answered this minute, so the work spreads over
  // the keys and spills to the next provider when one is busy.
  const score = (c) => tiers.indexOf(c.slot.provider) * 2 + c.st.inflight + c.st.recent.length / 8;
  ready.sort((a, b) => score(a) - score(b) || (a.st.lastAt || 0) - (b.st.lastAt || 0));
  // counted at once, so requests arriving together go to different keys
  if (ready[0]) ready[0].st.inflight += 1;
  if (ready[0]) ready[0].counted = true;
  return { ready, resting };
}

// One key: its models in turn. Resolves { ok, text, ... } or { ok: false,
// busy?, wait?, refused?, error }.
async function tryKey(env, c, opts, signal) {
  if (!c.counted) c.st.inflight += 1;
  try {
    return await tryKeyInner(env, c, opts, signal);
  } finally {
    c.st.inflight = Math.max(0, c.st.inflight - 1);
  }
}
async function tryKeyInner(env, { slot, key, st }, opts, signal) {
  const { messages, vision = false, json = false, maxTokens = 2000, temperature = 0.4, reasoning = null, fast = false } = opts;
  const p = PROVIDERS[slot.provider];
  const models = await modelsFor(env, slot, key, { vision, fast });
  let wait = null;
  let busy = false;
  let lastError = null;
  st.recent.push(Date.now());
  for (const model of models) {
    if (signal.aborted) return { ok: false, aborted: true };
    const t0 = Date.now();
    let res;
    try {
      res = await fetch(`${p.base}/chat/completions`, {
        method: 'POST',
        signal: AbortSignal.any([signal, AbortSignal.timeout(90_000)]),
        headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: maxTokens,
          temperature,
          ...(json ? { response_format: { type: 'json_object' } } : {}),
          ...(reasoning && p.reasoning(model) ? { reasoning_effort: fast ? 'low' : reasoning } : {}),
        }),
      });
    } catch (e) {
      if (signal.aborted) return { ok: false, aborted: true };
      lastError = `no answer (${e?.name === 'TimeoutError' ? 'timed out' : e?.message || e})`;
      continue; // timed out or no answer: the next model, then the next key
    }
    const limits = limitsFrom(res);
    if (res.ok) {
      const data = await res.json().catch(() => null);
      const text = data?.choices?.[0]?.message?.content;
      if (typeof text === 'string' && text.trim()) {
        const ms = Date.now() - t0;
        st.ok += 1;
        st.lastModel = model;
        st.lastAt = Date.now();
        st.lastError = null;
        st.ewma = st.ewma ? st.ewma * 0.7 + ms * 0.3 : ms;
        saveUse(env, slot.id, { ok: true, ms, tokens: data?.usage?.total_tokens || 0, model, limits });
        return { ok: true, text, model, provider: slot.provider, slot: slot.id };
      }
      lastError = 'empty answer';
      continue;
    }
    const body = await res.text().catch(() => '');
    console.error('ai_error', slot.id, model, res.status, res.status === 429 ? `retry-after=${res.headers.get('retry-after')}` : '', body.slice(0, 300));
    st.failed += 1;
    st.lastError = `${res.status} ${plainError(slot.provider, res.status, body)}`;
    saveUse(env, slot.id, { failed: true, error: st.lastError.slice(0, 300), limits });
    if (res.status === 401 || res.status === 403 || (res.status === 400 && /api key not valid|API_KEY_INVALID/i.test(body))) {
      rest(env, slot.id, 6 * 3_600_000, 'refused');
      return { ok: false, refused: true, error: st.lastError };
    }
    if (res.status === 429) {
      // per-minute limit (try the next model, which has its own) or the day's
      // quota. Only a limit that names the day counts as used up: Groq's
      // per-minute message links to its billing page, and Gemini calls its
      // per-minute limit a "quota" too.
      const perMinute = /per ?minute|\bTPM\b|\bRPM\b/i.test(body);
      const perDay = /per ?day|\bTPD\b|\bRPD\b|daily/i.test(body);
      const w = waitFrom(res, body);
      if (perDay && !perMinute) {
        rest(env, slot.id, Math.min(24 * 3_600_000, Math.max(60_000, w ?? 60 * 60_000)), 'used up');
        return { ok: false, busy: true, error: st.lastError };
      }
      busy = true;
      if (w != null) wait = wait == null ? w : Math.min(wait, w);
      continue;
    }
    if (res.status === 404) catalogs.delete(`${slot.id}:${key.slice(-6)}`);
    lastError = st.lastError;
  }
  if (busy && stateOf(slot.id).restUntil <= Date.now()) rest(env, slot.id, Math.min(60_000, Math.max(2_000, wait ?? 20_000)), 'busy');
  else if (!busy && lastError) rest(env, slot.id, 30_000, 'failing'); // a provider down: the others answer meanwhile
  return { ok: false, busy, error: lastError };
}

// One chat completion. messages: OpenAI format (images as image_url data URIs).
// Options: vision, json, maxTokens, temperature, reasoning, fast (a quick
// routing task: each provider's quickest model), patience (how long to wait
// for a briefly busy key before giving up). Returns { text, model, provider, slot }.
export async function aiChat(env, opts, until = null) {
  const { maxTokens = 2000, patience = 25_000, vision = false } = opts;
  const deadline = until ?? Date.now() + patience;
  await restore(env);
  const { ready, resting } = await orderFor(env, vision);
  if (!ready.length && !resting) {
    if (!(await aiConfigured(env))) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  }
  // When the first key is slow, the next one is asked too and the first good
  // answer wins: after about twice the key's usual time (or a few seconds for
  // a short answer, longer for a long one).
  const hedgeAfter = (c) => Math.min(25_000, Math.max(maxTokens <= 1500 ? 3500 : 9000, (c.st.ewma || 0) * 2));
  const outcome = await new Promise((resolve) => {
    const queue = [...ready];
    const ctrls = [];
    let running = 0;
    let settled = false;
    let busy = false;
    let lastError = null;
    let hedgeTimer = null;
    const finish = (r) => {
      if (settled) return;
      settled = true;
      clearTimeout(hedgeTimer);
      ctrls.forEach((c) => c.abort());
      resolve(r);
    };
    const launch = () => {
      if (settled) return;
      const c = queue.shift();
      if (!c) {
        if (running === 0) finish({ ok: false, busy, error: lastError });
        return;
      }
      running += 1;
      const ctrl = new AbortController();
      ctrls.push(ctrl);
      clearTimeout(hedgeTimer);
      // a backup request if this one is slow (at most two at once)
      hedgeTimer = setTimeout(() => running < 2 && launch(), hedgeAfter(c));
      tryKey(env, c, opts, ctrl.signal).then((r) => {
        running -= 1;
        if (settled || r.aborted) return;
        if (r.ok) return finish(r);
        if (r.busy) busy = true;
        lastError = r.error || lastError;
        launch(); // this key failed: the next one at once
      });
    };
    launch();
  });
  if (outcome.ok) {
    const { ok, ...r } = outcome;
    return r;
  }
  // Every key only briefly busy (a per-minute limit): wait for the first one
  // to be free and try again, until `patience` runs out, rather than failing.
  if (outcome.busy || resting) {
    let soonest = Infinity;
    for (const slot of SLOTS) {
      if (!(await keyOf(env, slot)).value) continue;
      const st = stateOf(slot.id);
      if ((st.reason === 'busy' || st.reason === 'failing') && st.restUntil > Date.now()) soonest = Math.min(soonest, st.restUntil);
    }
    const ms = soonest - Date.now();
    if (ms > 0 && Date.now() + ms <= deadline) {
      await sleep(ms + 300);
      return aiChat(env, opts, deadline);
    }
  }
  console.error('ai_all_keys_failed', outcome.error || (outcome.busy ? 'busy' : 'none'));
  if (outcome.busy || resting) throw new HttpError(503, 'The AI tutor is very busy right now. Please try again in a minute.', 'ai_busy');
  throw new HttpError(502, 'The AI tutor could not answer just now. Please try again.', 'ai_failed');
}

// What a provider's refusal means, in plain words for the CTO.
export function plainError(provider, status, body) {
  const b = String(body || '');
  if (provider === 'gemini' && (status === 400 || status === 401) && /api key not valid|API_KEY_INVALID/i.test(b))
    return 'Google says this key is not valid. Copy it again, whole, from aistudio.google.com/apikey (it starts with AIza).';
  if (provider === 'gemini' && status === 403 && /SERVICE_DISABLED|has not been used|is disabled|not enabled/i.test(b))
    return 'The Gemini API is not switched on in this key’s Google project. Make the key in Google AI Studio (aistudio.google.com/apikey), which switches it on.';
  if (provider === 'gemini' && status === 403) return 'Google refused this key (permission denied). Make a new key in Google AI Studio (aistudio.google.com/apikey).';
  if (provider === 'mistral' && status === 401) return 'Mistral does not accept this key yet. A new key can take a few minutes to start working; check it was copied whole and try again shortly.';
  if (status === 401) return 'The provider refused this key. Check it was copied whole.';
  if (status === 403) return 'The provider refused this key (no permission for this API).';
  if (status === 429) return /per ?day|TPD|RPD|daily/i.test(b) ? 'Used up for today.' : 'Busy for a moment (per-minute limit).';
  if (status >= 500) return 'The provider had a problem on its side.';
  const msg = /"message"\s*:\s*"([^"]{1,200})/.exec(b)?.[1];
  return msg || b.slice(0, 160);
}

// Is this key well formed for the provider? (Catches a key pasted in the
// wrong place, or cut short.)
export function keyProblem(slot, key) {
  const p = PROVIDERS[slot.provider];
  // the prefixes only one provider uses come first (a Gemini key would also pass as a Mistral one)
  const owner = /^gsk_/.test(key) ? 'groq' : /^AIza/.test(key) ? 'gemini' : null;
  if (owner && owner !== slot.provider) return `This looks like a ${PROVIDERS[owner].name} key. Put it in a ${PROVIDERS[owner].name} place, or paste the ${p.name} key here (${p.keyHint}).`;
  if (p.keyLooks.test(key)) return null;
  for (const [id, other] of Object.entries(PROVIDERS)) {
    if (id !== slot.provider && other.keyLooks.test(key) && (id !== 'mistral' || !/^(gsk_|AIza)/.test(key))) {
      return `This looks like a ${other.name} key. Put it in a ${other.name} place, or paste the ${p.name} key here (${p.keyHint}).`;
    }
  }
  return `This does not look like a ${p.name} key: ${p.keyHint}. Copy it again, whole.`;
}

// Checks a key with its provider. definite: the provider said no (the key
// must not be saved); otherwise a failure is only for now (slow, busy).
export async function testKey(env, slot, key) {
  const p = PROVIDERS[slot.provider];
  const t0 = Date.now();
  try {
    const list = await fetch(`${p.base}/models`, { headers: { authorization: `Bearer ${key}` }, signal: AbortSignal.timeout(12_000) });
    if (!list.ok && [400, 401, 403].includes(list.status)) {
      const body = await list.text().catch(() => '');
      console.error('key_test', slot.id, 'models', list.status, body.slice(0, 200));
      return { ok: false, definite: true, ms: Date.now() - t0, error: plainError(slot.provider, list.status, body) };
    }
    const models = await modelsFor(env, slot, key, { fast: true });
    const res = await fetch(`${p.base}/chat/completions`, {
      method: 'POST',
      signal: AbortSignal.timeout(20_000),
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({ model: models[0], messages: [{ role: 'user', content: 'Reply with the single word: ready' }], max_tokens: 20, temperature: 0 }),
    });
    if (res.ok) return { ok: true, model: models[0], ms: Date.now() - t0 };
    const body = await res.text().catch(() => '');
    console.error('key_test', slot.id, models[0], res.status, body.slice(0, 200));
    if (res.status === 429) return { ok: true, model: models[0], ms: Date.now() - t0, note: plainError(slot.provider, 429, body) };
    return { ok: false, definite: [400, 401, 403].includes(res.status), ms: Date.now() - t0, error: plainError(slot.provider, res.status, body) };
  } catch (e) {
    return { ok: false, definite: false, ms: Date.now() - t0, error: `${p.name} did not answer in time (${e?.name === 'TimeoutError' ? 'timed out' : e?.message || e}).` };
  }
}

// Speech to text with Groq's Whisper (the Groq keys, least busy first), for
// talking to the AI. bytes: the recording (m4a, mp4, webm, ogg, mp3 or wav).
const AUDIO_EXT = { 'audio/m4a': 'm4a', 'audio/mp4': 'm4a', 'audio/x-m4a': 'm4a', 'audio/aac': 'm4a', 'audio/webm': 'webm', 'audio/ogg': 'ogg', 'audio/mpeg': 'mp3', 'audio/wav': 'wav' };
export const AUDIO_TYPES = Object.keys(AUDIO_EXT);
export async function transcribe(env, bytes, mime, lang) {
  let anyKey = false;
  const groq = SLOTS.filter((s) => s.provider === 'groq').sort((a, b) => stateOf(a.id).recent.length - stateOf(b.id).recent.length);
  for (const slot of groq) {
    const { value: key } = await keyOf(env, slot);
    if (!key) continue;
    anyKey = true;
    stateOf(slot.id).recent.push(Date.now());
    const form = new FormData();
    form.append('file', new Blob([bytes], { type: mime }), `speech.${AUDIO_EXT[mime] || 'm4a'}`);
    form.append('model', env.WHISPER_MODEL || 'whisper-large-v3-turbo');
    form.append('response_format', 'json');
    form.append('temperature', '0');
    if (lang === 'fr' || lang === 'en') form.append('language', lang);
    form.append(
      'prompt',
      lang === 'fr'
        ? 'Un élève du secondaire au Cameroun parle avec son professeur de biologie, chimie, physique ou mathématiques.'
        : 'A secondary school student in Cameroon talking with a tutor about biology, chemistry, physics and mathematics.',
    );
    try {
      const res = await fetch(`${PROVIDERS.groq.base}/audio/transcriptions`, { method: 'POST', signal: AbortSignal.timeout(45_000), headers: { authorization: `Bearer ${key}` }, body: form });
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        return String(data.text || '').trim();
      }
      console.error('whisper_error', slot.id, res.status, (await res.text().catch(() => '')).slice(0, 200));
    } catch (e) {
      console.error('whisper_error', slot.id, e?.message);
    }
  }
  if (!anyKey) throw new HttpError(503, 'Speaking to the AI needs a Groq key. Type your question instead.', 'ai_unavailable');
  throw new HttpError(502, 'Your voice could not be understood just now. Try again, or type your question.', 'stt_failed');
}
