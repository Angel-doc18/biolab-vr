// The tutor's voice for the whole app. Text is first rewritten for speech
// (pronounce.js), then spoken in a natural voice made on the server and kept on
// the phone, so a sentence heard once plays again without a connection. Without
// an account or a connection the phone's own best voice is used instead.
// speak(text, options) and stop() take the same options as expo-speech.
import { Platform } from 'react-native';
import * as Speech from 'expo-speech';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get, postBytes } from '../api/client';
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

// The voice the server speaks in (for example "melo", or a cloned teacher's
// voice). Clips are kept under it, and the old ones are cleared when it changes,
// so a phone never replays sentences in a voice the school no longer uses.
const TAG_KEY = 'bs:voiceTag';
let tagPromise = null;
function clearClips() {
  if (Platform.OS === 'web') return;
  try {
    voiceDir().delete();
  } catch {
    // nothing kept yet
  }
}
function serverVoice() {
  if (!tagPromise) {
    tagPromise = (async () => {
      let saved = '';
      try {
        saved = (await AsyncStorage.getItem(TAG_KEY)) || '';
      } catch {
        // no storage
      }
      try {
        const tag = (await get('/v1/health', { timeout: 8000 }))?.voice || '';
        if (tag && tag !== saved) {
          clearClips();
          AsyncStorage.setItem(TAG_KEY, tag).catch(() => {});
        }
        return tag || saved;
      } catch {
        return saved; // offline: keep using the clips already on the phone
      }
    })();
  }
  return tagPromise;
}

// A playable address for one piece of speech (already rewritten).
function clip(text, lang, keep) {
  const voice = voiceFor(lang);
  const id = `${voice}|${lang}|${text}`;
  if (clips.has(id)) return clips.get(id);
  const p = (async () => {
    const key = hash(`${await serverVoice()}|${id}`);
    const stored = storedClip(key);
    if (stored) return stored;
    if (Date.now() < pauseUntil) throw new Error('natural voice paused');
    let got;
    try {
      // The voice server makes a new sentence in about the time it takes to say.
      got = await postBytes('/v1/voice', { text, lang, voice, keep }, { timeout: 60000 });
    } catch (e) {
      // voice_busy (the server restarting, for example) is retried by the player.
      if (e.code === 'voice_off' || e.code === 'voice_quota') pauseUntil = Date.now() + 15 * 60_000;
      else if (e.status === 401 || e.code === 'unauthorized' || e.code === 'offline') pauseUntil = Date.now() + 60_000;
      throw e;
    }
    const wav = /wav/i.test(got.type);
    const bytes = new Uint8Array(got.bytes);
    if (Platform.OS === 'web') return URL.createObjectURL(new Blob([bytes], { type: wav ? 'audio/wav' : 'audio/mpeg' }));
    const { File } = require('expo-file-system');
    // A clip the server did not keep (a one-off, or said in the stand-in voice
    // because the cloned voice was unavailable) is played but not reused later.
    const once = got.cache === 'once' ? `-once-${Date.now()}` : '';
    const f = new File(voiceDir(), `${key}${once}.${wav ? 'wav' : 'mp3'}`);
    if (f.exists) f.delete();
    f.create();
    // Since SDK 58 writing is asynchronous: the clip must be complete before it plays.
    await f.write(bytes);
    return f.uri;
  })();
  clips.set(id, p);
  p.catch(() => clips.delete(id));
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

const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// Pieces asked for ahead of the one playing. The server makes new speech one
// piece at a time, in the order asked, so they are asked for one after another.
const AHEAD = 3;
// How long to keep trying the natural voice before the phone's voice takes over:
// briefly before it has been heard, and long enough for the voice server to
// restart once it has, so the voice does not change in the middle.
const PATIENCE_START = [800, 2500];
const PATIENCE_HEARD = [1000, 2000, 4000, 7000, 10000];

// Plays one piece in the natural voice; false when it could not be had in time.
async function playNatural(piece, lang, keep, mine, session) {
  const waits = session?.heard ? PATIENCE_HEARD : PATIENCE_START;
  let giveUpAt = 0;
  for (let attempt = 0; ; attempt++) {
    if (mine !== turn) return false;
    try {
      const uri = await clip(piece, lang, keep);
      if (mine !== turn) return false;
      await playUri(uri);
      return true;
    } catch {
      if (!giveUpAt) giveUpAt = Date.now() + waits.reduce((a, b) => a + b, 0) + 6000;
      // the server said no (limit reached, voice off): do not keep asking
      if (mine !== turn || Date.now() < pauseUntil || attempt >= waits.length || Date.now() > giveUpAt) break;
      await wait(waits[attempt]);
    }
  }
  if (mine === turn) pauseUntil = Math.max(pauseUntil, Date.now() + 30_000);
  return false;
}

// A session holds one explanation of several parts: once the natural voice has
// been heard it is waited for, and if it is lost all the same, the phone's voice
// carries on to the end instead of switching back, so the speaker changes at
// most once.
export const voiceSession = () => ({ phone: false, heard: false });

// One voice for the whole text: the natural voice when it can be had, otherwise
// the phone's voice from start to finish, so it never changes mid-sentence.
// `next` is the text spoken after this one: its first pieces are asked for once
// this text's pieces are in.
async function run(pieces, lang, rate, mine, keep, session, next) {
  await audioMode();
  let phone = session?.phone || Date.now() < pauseUntil;
  if (phone && session) session.phone = true;
  let at = 0;
  let asked = 0;
  let asking = false;
  const more = () => {
    if (asking || phone || mine !== turn) return;
    if (asked >= pieces.length) {
      if (next) prepare(next, { lang, keep });
      next = null;
      return;
    }
    if (asked > at + AHEAD) return;
    const k = asked++;
    asking = true;
    clip(pieces[k], lang, keep).then(
      () => {
        asking = false;
        more();
      },
      () => {
        asking = false;
        asked = Math.min(asked, k); // asked again when the player reaches it
      }
    );
  };
  for (let i = 0; i < pieces.length; i++) {
    if (mine !== turn) return false;
    if (!phone) {
      at = i;
      more();
      if (await playNatural(pieces[i], lang, keep, mine, session)) {
        if (session) session.heard = true;
        continue;
      }
      if (mine !== turn) return false;
      phone = true;
      if (session) session.phone = true;
    }
    await phoneSays(pieces[i], lang, rate);
  }
  return mine === turn;
}

// options: lang ('en' | 'fr') or language ('en-GB'), rate, keep (false for one-off
// text such as a reading just taken), session (from voiceSession(), shared by the
// parts of one explanation), quick (the first text of an explanation: short
// pieces first, so it starts sooner), next (the text that follows, asked for
// ahead), onStart, onDone, onStopped, onError.
export function speak(text, options = {}) {
  stop();
  turn += 1;
  const mine = turn;
  const lang = langOf(options);
  const pieces = options.quick ? speechChunks(forSpeech(text, lang), 360, 100, true) : speechChunks(forSpeech(text, lang));
  pending = { mine, onStopped: options.onStopped };
  options.onStart?.();
  run(pieces, lang, options.rate ?? 0.95, mine, options.keep !== false, options.session, options.next)
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

// False while the natural voice is unavailable and the phone's voice is used.
export const naturalVoiceOn = () => Date.now() >= pauseUntil;

// Fetches the first part of a text ahead of time, for example the next step:
// the first piece, then the second.
export function prepare(text, options = {}) {
  const lang = langOf(options);
  const keep = options.keep !== false;
  const [a, b] = speechChunks(forSpeech(text, lang));
  if (!a) return;
  const first = clip(a, lang, keep);
  if (b) first.then(() => clip(b, lang, keep)).catch(() => {});
  else first.catch(() => {});
}

// Learns the server's voice and sets up the audio before the first word, so a
// lesson's first sentence is not kept waiting for them.
export function warmVoice() {
  serverVoice();
  audioMode();
}
