// The tutor's voice for the whole app. Text is first rewritten for speech
// (pronounce.js), then spoken in a natural voice made on the server and kept on
// the phone, so a sentence heard once plays again without a connection. Without
// an account or a connection the phone's own best voice is used instead.
// speak(text, options) and stop() take the same options as expo-speech.
import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import { postBytes } from '../api/client';
import { forSpeech, speechChunks } from './pronounce';

export const VOICES = {
  en: [
    { id: 'draco', en: 'Man, British', fr: 'Homme, britannique' },
    { id: 'pandora', en: 'Woman, British', fr: 'Femme, britannique' },
  ],
  fr: [{ id: 'melo', en: 'French', fr: 'Français' }],
};
let chosen = 'draco';
export function setVoice(id) {
  if (VOICES.en.some((v) => v.id === id)) chosen = id;
}
const voiceFor = (lang) => (lang === 'fr' ? 'melo' : chosen);
const langOf = (o = {}) => (o.lang ? (o.lang === 'fr' ? 'fr' : 'en') : String(o.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en');

function hash(s) {
  let a = 0x811c9dc5;
  let b = 0x01000193;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    a = Math.imul(a ^ c, 16777619) >>> 0;
    b = Math.imul(b ^ c, 2246822519) >>> 0;
  }
  return a.toString(16).padStart(8, '0') + b.toString(16).padStart(8, '0');
}

// ---------- natural voice ----------
let pauseUntil = 0; // after a refusal, the natural voice is not asked again for a while
const clips = new Map(); // key -> Promise<uri>

function voiceDir() {
  const { Directory, Paths } = require('expo-file-system');
  const dir = new Directory(Paths.cache, 'voice');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}

function storedClip(key) {
  if (Platform.OS === 'web') return null;
  try {
    const { File } = require('expo-file-system');
    for (const ext of ['mp3', 'wav']) {
      const f = new File(voiceDir(), `${key}.${ext}`);
      if (f.exists && f.size > 256) return f.uri;
    }
  } catch {
    // no storage: fetch again
  }
  return null;
}

// A playable address for one piece of speech (already rewritten).
function clip(text, lang, keep) {
  const voice = voiceFor(lang);
  const key = hash(`${voice}|${lang}|${text}`);
  if (clips.has(key)) return clips.get(key);
  const p = (async () => {
    const stored = storedClip(key);
    if (stored) return stored;
    if (Date.now() < pauseUntil) throw new Error('natural voice paused');
    let got;
    try {
      got = await postBytes('/v1/voice', { text, lang, voice, keep }, { timeout: 9000 });
    } catch (e) {
      if (e.code === 'voice_off' || e.code === 'voice_quota') pauseUntil = Date.now() + 15 * 60_000;
      else if (e.status === 401 || e.code === 'unauthorized' || e.code === 'offline') pauseUntil = Date.now() + 60_000;
      throw e;
    }
    const wav = /wav/i.test(got.type);
    const bytes = new Uint8Array(got.bytes);
    if (Platform.OS === 'web') return URL.createObjectURL(new Blob([bytes], { type: wav ? 'audio/wav' : 'audio/mpeg' }));
    const { File } = require('expo-file-system');
    const f = new File(voiceDir(), `${key}.${wav ? 'wav' : 'mp3'}`);
    if (f.exists) f.delete();
    f.create();
    f.write(bytes);
    return f.uri;
  })();
  clips.set(key, p);
  p.catch(() => clips.delete(key));
  return p;
}

let modeSet = false;
async function audioMode() {
  if (modeSet) return;
  modeSet = true;
  try {
    await require('expo-audio').setAudioModeAsync({ playsInSilentMode: true, interruptionMode: 'duckOthers', shouldPlayInBackground: false });
  } catch {
    // older devices: default audio mode
  }
}

const current = { finish: null };

function playUri(uri) {
  return new Promise((resolve, reject) => {
    let player;
    try {
      player = require('expo-audio').createAudioPlayer({ uri });
    } catch (e) {
      reject(e);
      return;
    }
    let done = false;
    let started = false;
    let endTimer = null;
    let sub = null;
    const finish = (err) => {
      if (done) return;
      done = true;
      clearTimeout(startTimer);
      clearTimeout(endTimer);
      try {
        sub?.remove();
      } catch {
        // already removed
      }
      try {
        player.pause();
        player.remove();
      } catch {
        // already released
      }
      if (current.finish === finish) current.finish = null;
      if (err) reject(err);
      else resolve();
    };
    // Guards so a clip that never starts or never reports its end cannot stall the voice.
    const startTimer = setTimeout(() => !started && finish(new Error('audio did not start')), 7000);
    sub = player.addListener('playbackStatusUpdate', (st) => {
      if (st.playing && !started) started = true;
      if (st.duration > 0 && !endTimer) endTimer = setTimeout(() => finish(), (st.duration - (st.currentTime || 0) + 2) * 1000);
      if (st.didJustFinish) finish();
    });
    current.finish = finish;
    player.play();
  });
}

// ---------- the phone's own voice ----------
const best = {};
async function bestVoice(lang) {
  if (lang in best) return best[lang];
  best[lang] = undefined;
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    const want = lang === 'fr' ? ['fr-fr', 'fr'] : ['en-gb', 'en-us', 'en'];
    let top = null;
    let score = -1;
    for (const v of voices) {
      const l = String(v.language || '').toLowerCase().replace('_', '-');
      const at = want.findIndex((w) => l.startsWith(w));
      if (at < 0) continue;
      let sc = (want.length - at) * 10;
      if (v.quality === 'Enhanced') sc += 40;
      if (/premium|enhanced|neural/i.test(`${v.identifier} ${v.name}`)) sc += 20;
      if (sc > score) {
        top = v;
        score = sc;
      }
    }
    best[lang] = top?.identifier;
  } catch {
    // keep the default voice
  }
  return best[lang];
}

async function phoneSays(text, lang, rate) {
  const voice = await bestVoice(lang);
  return new Promise((resolve) => {
    Speech.speak(text, { language: lang === 'fr' ? 'fr-FR' : 'en-GB', voice, rate, pitch: 1, onDone: resolve, onStopped: resolve, onError: resolve });
  });
}

// ---------- speaking ----------
let turn = 0;
let pending = null;

async function run(pieces, lang, rate, mine, keep) {
  await audioMode();
  for (let i = 0; i < pieces.length; i++) {
    if (mine !== turn) return false;
    // Ask for the next piece while this one plays, so there is no gap.
    if (i + 1 < pieces.length) clip(pieces[i + 1], lang, keep).catch(() => {});
    let uri = null;
    try {
      uri = await clip(pieces[i], lang, keep);
    } catch {
      uri = null;
    }
    if (mine !== turn) return false;
    if (uri) {
      try {
        await playUri(uri);
        continue;
      } catch {
        if (mine !== turn) return false;
      }
    }
    await phoneSays(pieces[i], lang, rate);
  }
  return mine === turn;
}

// options: lang ('en' | 'fr') or language ('en-GB'), rate, keep (false for one-off
// text such as a reading just taken), onStart, onDone, onStopped, onError.
export function speak(text, options = {}) {
  stop();
  turn += 1;
  const mine = turn;
  const lang = langOf(options);
  const pieces = speechChunks(forSpeech(text, lang));
  pending = { mine, onStopped: options.onStopped };
  options.onStart?.();
  run(pieces, lang, options.rate ?? 0.95, mine, options.keep !== false)
    .then((finished) => {
      if (pending?.mine === mine) pending = null;
      if (finished) options.onDone?.();
    })
    .catch((e) => {
      if (pending?.mine === mine) pending = null;
      options.onError?.(e);
    });
}

export function stop() {
  turn += 1;
  const was = pending;
  pending = null;
  current.finish?.();
  Speech.stop();
  was?.onStopped?.();
}

// Fetches the first part of a text ahead of time, for example the next step.
export function prepare(text, options = {}) {
  const lang = langOf(options);
  const first = speechChunks(forSpeech(text, lang))[0];
  if (first) clip(first, lang, options.keep !== false).catch(() => {});
}
