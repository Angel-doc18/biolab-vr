// The tutor's natural voice. The app sends text already written out for speech
// (formulae, units and symbols in words). Audio is made by Workers AI and kept
// in KV, so the same sentence in the same voice is only ever paid for once.
import { HttpError, limit, readJson } from '../lib/http.js';
import { requireUser } from '../lib/auth.js';
import { oneOf, str } from '../lib/validate.js';
import { sha256 } from '../lib/crypto.js';
import { today } from '../lib/notify.js';

// The engines. 'melo' (MeloTTS, the default) is a neural voice cheap enough to
// run all day on the Workers free allowance (about 18 neurons per minute of
// speech). 'aura' (Deepgram Aura 2, British voices) sounds better but costs
// about 150 times more: set VOICE_ENGINE = "aura" only on the Workers Paid plan.
// 'elevenlabs' and 'fish' speak in a cloned voice (the school's own teacher):
// set VOICE_ENGINE to one of them, OWN_VOICE_ID to the voice made in that
// service, and its key as a secret (ELEVENLABS_API_KEY or FISH_API_KEY). Until
// both are set, or if the service fails, MeloTTS is used.
// One engine is used for everything, so the voice never changes mid-lesson.
const AURA_VOICES = ['draco', 'pandora'];
const OWN_KEY = { elevenlabs: 'ELEVENLABS_API_KEY', fish: 'FISH_API_KEY' };
const ownReady = (env) => !!(OWN_KEY[env.VOICE_ENGINE] && env[OWN_KEY[env.VOICE_ENGINE]] && env.OWN_VOICE_ID);
export const voiceEngine = (env) => (ownReady(env) ? env.VOICE_ENGINE : env.VOICE_ENGINE === 'aura' ? 'aura' : 'melo');
export const voiceChoices = (env) => {
  const engine = voiceEngine(env);
  return engine === 'aura' ? AURA_VOICES : OWN_KEY[engine] ? ['own'] : ['melo'];
};
// Names the voice the server speaks in, so phones know when it has changed and
// stop replaying clips kept in the old voice.
export const voiceTag = (env) => {
  const engine = voiceEngine(env);
  return OWN_KEY[engine] ? `${engine}:${env.OWN_VOICE_ID}:${env.OWN_VOICE_MODEL || ''}` : engine;
};
const MAX_TEXT = 600;
// New speech made per day, in characters (cached sentences are free). The total
// can be changed with the VOICE_DAILY_CHARS variable.
const PER_USER_DAY = 40_000;
const ALL_DAY = 400_000;

async function toBytes(out) {
  if (!out) throw new Error('empty audio');
  if (out instanceof Uint8Array) return out;
  if (out instanceof ArrayBuffer) return new Uint8Array(out);
  if (typeof out.getReader === 'function') return new Uint8Array(await new Response(out).arrayBuffer());
  if (typeof out.audio === 'string') return Uint8Array.from(atob(out.audio), (c) => c.charCodeAt(0));
  throw new Error('unknown audio format');
}

// MeloTTS returns 44.1 kHz WAV, about 90 KB a second. Speech needs no more than
// 16 kHz, which brings it to about 32 KB a second for phones on mobile data.
function smallerWav(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (u8.byteLength < 44 || dv.getUint32(0, false) !== 0x52494646) return u8; // 'RIFF'
  let fmt = null;
  let data = null;
  for (let off = 12; off + 8 <= u8.byteLength; ) {
    const id = dv.getUint32(off, false);
    const len = dv.getUint32(off + 4, true);
    if (id === 0x666d7420) fmt = { format: dv.getUint16(off + 8, true), channels: dv.getUint16(off + 10, true), rate: dv.getUint32(off + 12, true), bits: dv.getUint16(off + 22, true) };
    if (id === 0x64617461) data = { start: off + 8, len: Math.min(len, u8.byteLength - off - 8) };
    off += 8 + len + (len % 2);
  }
  const OUT = 16000;
  if (!fmt || !data || fmt.format !== 1 || fmt.channels !== 1 || fmt.bits !== 16 || fmt.rate <= OUT) return u8;
  const n = Math.floor(data.len / 2);
  const step = fmt.rate / OUT;
  const outN = Math.floor(n / step);
  const out = new Uint8Array(44 + outN * 2);
  const ov = new DataView(out.buffer);
  const tag = (o, t) => [...t].forEach((c, i) => (out[o + i] = c.charCodeAt(0)));
  tag(0, 'RIFF');
  ov.setUint32(4, 36 + outN * 2, true);
  tag(8, 'WAVEfmt ');
  ov.setUint32(16, 16, true);
  ov.setUint16(20, 1, true);
  ov.setUint16(22, 1, true);
  ov.setUint32(24, OUT, true);
  ov.setUint32(28, OUT * 2, true);
  ov.setUint16(32, 2, true);
  ov.setUint16(34, 16, true);
  tag(36, 'data');
  ov.setUint32(40, outN * 2, true);
  // Each output sample is the average of the input samples it covers (a simple
  // low-pass filter, so the resampling does not add a metallic edge).
  for (let i = 0; i < outN; i++) {
    const a = Math.floor(i * step);
    const b = Math.min(n, Math.floor((i + 1) * step));
    let sum = 0;
    for (let j = a; j < b; j++) sum += dv.getInt16(data.start + j * 2, true);
    ov.setInt16(44 + i * 2, Math.round(sum / Math.max(1, b - a)), true);
  }
  return out;
}

// The cloned voice, as MP3 at 64 kbit/s (about 8 KB a second, a quarter of the
// 16 kHz WAV). Both services read English and French in the same voice.
async function ownVoice(env, text) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 30_000);
  try {
    const res =
      env.VOICE_ENGINE === 'elevenlabs'
        ? await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(env.OWN_VOICE_ID)}?output_format=mp3_44100_64`, {
            method: 'POST',
            signal: ctrl.signal,
            headers: { 'xi-api-key': env.ELEVENLABS_API_KEY, 'content-type': 'application/json', accept: 'audio/mpeg' },
            body: JSON.stringify({ text, model_id: env.OWN_VOICE_MODEL || 'eleven_multilingual_v2' }),
          })
        : await fetch('https://api.fish.audio/v1/tts', {
            method: 'POST',
            signal: ctrl.signal,
            headers: { authorization: `Bearer ${env.FISH_API_KEY}`, 'content-type': 'application/json', model: env.OWN_VOICE_MODEL || 's2.1-pro' },
            body: JSON.stringify({ text, reference_id: env.OWN_VOICE_ID, format: 'mp3', mp3_bitrate: 64, normalize: true, latency: 'normal' }),
          });
    if (!res.ok) throw new Error(`own voice ${res.status}: ${(await res.text()).slice(0, 200)}`);
    return new Uint8Array(await res.arrayBuffer());
  } finally {
    clearTimeout(timer);
  }
}

export async function synthesize(env, { text, lang, voice }) {
  if (voice === 'own') return ownVoice(env, text);
  if (lang === 'en' && voice !== 'melo') return toBytes(await env.AI.run('@cf/deepgram/aura-2-en', { text, speaker: voice, encoding: 'mp3' }));
  return smallerWav(await toBytes(await env.AI.run('@cf/myshell-ai/melotts', { prompt: text, lang })));
}

const isWav = (bytes) => {
  const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  return u8[0] === 0x52 && u8[1] === 0x49 && u8[2] === 0x46 && u8[3] === 0x46;
};
const audio = (bytes, cache) =>
  new Response(bytes, {
    headers: { 'content-type': isWav(bytes) ? 'audio/wav' : 'audio/mpeg', 'cache-control': 'private, max-age=31536000', 'x-voice-cache': cache },
  });

// POST /v1/voice { text, lang, voice?, keep? }  ->  audio/mpeg (English) or audio/wav (French)
export async function speak(request, env) {
  const user = await requireUser(request, env);
  if (!env.AI) throw new HttpError(503, 'The natural voice is not available.', 'voice_off');
  const body = await readJson(request, 8 * 1024);
  const lang = oneOf(body.lang || 'en', 'Language', ['en', 'fr']);
  const text = str(body.text, 'Text', { min: 1, max: MAX_TEXT }).replace(/\s+/g, ' ');
  const own = voiceChoices(env)[0] === 'own';
  const choices = own ? ['own'] : lang === 'fr' ? ['melo'] : voiceChoices(env);
  const voice = choices.includes(body.voice) ? body.voice : choices[0];
  const keep = body.keep !== false;

  const key = await sha256(`v3|${lang}|${voice === 'own' ? voiceTag(env) : voice}|${text}`);
  if (env.VOICE_CACHE) {
    const hit = await env.VOICE_CACHE.get(key, 'arrayBuffer');
    if (hit) return audio(hit, 'hit');
  }

  await limit(env.VOICE_LIMITER, `voice:${user.id}`, 'Too many requests. Try again shortly.');
  const day = today();
  const { results } = await env.DB.prepare('SELECT user_id, chars FROM voice_usage WHERE day = ? AND user_id IN (?, ?)').bind(day, user.id, '*').all();
  const used = Object.fromEntries(results.map((r) => [r.user_id, r.chars]));
  const allDay = Number(env.VOICE_DAILY_CHARS) || ALL_DAY;
  if ((used[user.id] || 0) + text.length > PER_USER_DAY || (used['*'] || 0) + text.length > allDay) {
    throw new HttpError(429, 'The natural voice has reached today’s limit.', 'voice_quota');
  }

  let bytes;
  let spoken = voice;
  try {
    bytes = await synthesize(env, { text, lang, voice });
  } catch (e) {
    const msg = String(e?.message || e);
    console.error('voice_failed', voice, msg);
    if (voice !== 'own') {
      // 4006: the account's daily Workers AI allowance is used up until 00:00 UTC.
      if (msg.includes('4006')) throw new HttpError(503, 'The natural voice has reached today’s limit.', 'voice_quota');
      throw new HttpError(503, 'The natural voice is not available right now.', 'voice_off');
    }
    // The cloned voice failed (its service is down or its allowance is used up):
    // say it in MeloTTS this time, and do not keep it, so the cloned voice is
    // tried again next time.
    try {
      spoken = 'melo';
      bytes = await synthesize(env, { text, lang, voice: 'melo' });
    } catch {
      throw new HttpError(503, 'The natural voice is not available right now.', 'voice_off');
    }
  }
  if (bytes.byteLength < 256) throw new HttpError(503, 'The natural voice is not available right now.', 'voice_off');

  const add = 'INSERT INTO voice_usage (user_id, day, chars) VALUES (?, ?, ?) ON CONFLICT(user_id, day) DO UPDATE SET chars = chars + excluded.chars';
  await env.DB.batch([env.DB.prepare(add).bind(user.id, day, text.length), env.DB.prepare(add).bind('*', day, text.length)]);
  const kept = keep && spoken === voice;
  if (kept && env.VOICE_CACHE) await env.VOICE_CACHE.put(key, bytes, { metadata: { lang, voice, n: text.length } }).catch(() => {});
  return audio(bytes, kept ? 'new' : 'once');
}
