// The study space's voice: one explanation at a time, spoken part by part
// (a solution's steps on the board), which can be paused, replayed from a step
// or interrupted with a question. The AI answers, then says so and goes back
// to the step it was on, like a teacher who takes a question in the middle of
// the board work. With the sound off (or when no voice can play), the parts
// still follow one another at reading speed, so the board is written all the
// same.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { speak, stop as stopVoice, voiceSession } from './voice';

const listeners = new Set();
let current = null; // { id, parts, index, lang, playing }
let paused = null; // the explanation that was interrupted
let turn = 0;
let timer = null;
let sound = true;
const SOUND_KEY = 'k8:study:sound';
AsyncStorage.getItem(SOUND_KEY)
  .then((v) => {
    if (v === '0') {
      sound = false;
      emit();
    }
  })
  .catch(() => {});

// About how long it takes to read a part (when it is not spoken).
export const readTime = (t) => Math.min(9000, Math.max(2500, String(t || '').length * 55));

const snapshot = () => ({ id: current?.id || null, index: current?.index ?? -1, playing: !!current?.playing, pausedId: paused?.id || null, pausedIndex: paused?.index ?? -1, sound });
function emit() {
  listeners.forEach((fn) => fn(snapshot()));
}
// A listener gets the state at once: a message shown just after its
// explanation started still knows it is being explained.
export function subscribe(fn) {
  listeners.add(fn);
  fn(snapshot());
  return () => listeners.delete(fn);
}

export const soundOn = () => sound;
export function setSound(on) {
  sound = !!on;
  AsyncStorage.setItem(SOUND_KEY, sound ? '1' : '0').catch(() => {});
  emit();
}

function play(ex, from) {
  turn += 1;
  clearTimeout(timer);
  const mine = turn;
  const session = voiceSession();
  current = { ...ex, index: from, playing: true };
  emit();
  const go = (i) => {
    if (mine !== turn) return;
    clearTimeout(timer);
    if (i >= ex.parts.length) {
      current = null;
      emit();
      ex.onEnd?.();
      return;
    }
    if (!ex.parts[i]) return go(i + 1); // nothing to say for this part
    current = { ...current, index: i };
    emit();
    const text = ex.parts[i];
    if (!(ex.voice ?? sound)) {
      timer = setTimeout(() => go(i + 1), readTime(text));
      return;
    }
    // Moves on once: when the voice finishes, or (if it fails or never reports
    // back) after about the time it takes to read the part.
    const started = Date.now();
    let moved = false;
    const move = (ms) => {
      if (moved || mine !== turn) return;
      moved = true;
      clearTimeout(timer);
      timer = setTimeout(() => go(i + 1), ms);
    };
    timer = setTimeout(() => move(0), Math.max(15000, text.length * 120));
    speak(text, {
      lang: ex.lang,
      session,
      quick: i === from,
      next: ex.parts[i + 1],
      onDone: () => move(350),
      onError: () => move(Math.max(0, readTime(text) - (Date.now() - started))),
    });
  };
  go(from);
}

// parts: what to say, in order (e.g. the question, then each step, then the
// answer); from: the part to start at (a step tapped on the board); voice:
// true to speak whatever the Sound setting (on a call).
export function explain(id, parts, { lang = 'en', onEnd, from = 0, voice } = {}) {
  paused = null;
  play({ id, parts, lang, onEnd, voice }, Math.max(0, Math.min(from, parts.length - 1)));
}

export function stopTalking() {
  turn += 1;
  clearTimeout(timer);
  stopVoice();
  current = null;
  paused = null;
  emit();
}

// The person starts speaking: stop at once, remembering where we were.
export function interrupt() {
  if (current?.playing && current.parts) paused = { ...current, playing: false };
  turn += 1;
  clearTimeout(timer);
  stopVoice();
  current = null;
  emit();
}

export const isTalking = () => !!current?.playing;

// The AI's answer to a question asked in the middle, read aloud; then back to
// the interrupted explanation, from the step it was on (or onEnd if none).
export function reply(text, { lang = 'en', onEnd, voice } = {}) {
  turn += 1;
  clearTimeout(timer);
  const mine = turn;
  const back = paused;
  paused = null;
  current = { id: 'reply', playing: true, index: -1 };
  emit();
  const resume = () => {
    if (mine !== turn) return;
    current = null;
    emit();
    if (back) {
      speak(lang === 'fr' ? 'Bien, revenons là où nous en étions.' : 'Good. Now, back to where we were.', {
        lang,
        onDone: () => mine === turn && play(back, back.index),
        onError: () => mine === turn && play(back, back.index),
      });
    } else onEnd?.(); // nothing to go back to
  };
  if (!(voice ?? sound)) {
    timer = setTimeout(resume, readTime(text));
    return;
  }
  speak(text, { lang, quick: true, onDone: resume, onError: resume });
}

// Where the interrupted explanation stopped: { id, index } or null.
export const pausedNow = () => (paused ? { id: paused.id, index: paused.index } : null);
