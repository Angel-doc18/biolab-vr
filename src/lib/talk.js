// The study space's voice: one explanation at a time, spoken part by part
// (a solution's steps), which the student can interrupt to ask something.
// The AI answers aloud, then says so and goes back to the step it was on,
// like a teacher who takes a question in the middle of the board work.
import { speak, stop as stopVoice, voiceSession } from './voice';

const listeners = new Set();
let current = null; // { id, parts, index, lang, playing }
let paused = null; // the explanation that was interrupted
let turn = 0;

const snapshot = () => ({ id: current?.id || null, index: current?.index ?? -1, playing: !!current?.playing, pausedId: paused?.id || null, pausedIndex: paused?.index ?? -1 });
const emit = () => listeners.forEach((fn) => fn(snapshot()));
// A listener gets the state at once: a message shown just after its
// explanation started still knows it is being explained.
export function subscribe(fn) {
  listeners.add(fn);
  fn(snapshot());
  return () => listeners.delete(fn);
}

function play(ex, from) {
  turn += 1;
  const mine = turn;
  const session = voiceSession();
  current = { ...ex, index: from, playing: true };
  emit();
  const go = (i) => {
    if (mine !== turn) return;
    if (i >= ex.parts.length) {
      current = null;
      emit();
      ex.onEnd?.();
      return;
    }
    if (!ex.parts[i]) return go(i + 1); // nothing to say for this part
    current = { ...current, index: i };
    emit();
    speak(ex.parts[i], { lang: ex.lang, session, quick: i === from, next: ex.parts[i + 1], onDone: () => go(i + 1), onError: () => go(i + 1) });
  };
  go(from);
}

// parts: what to say, in order (e.g. the interpretation, then each step);
// from: the part to start at ("Explain again" on one step).
export function explain(id, parts, { lang = 'en', onEnd, from = 0 } = {}) {
  paused = null;
  play({ id, parts, lang, onEnd }, Math.max(0, Math.min(from, parts.length - 1)));
}

export function stopTalking() {
  turn += 1;
  stopVoice();
  current = null;
  paused = null;
  emit();
}

// The student starts speaking: stop at once, remembering where we were.
export function interrupt() {
  if (current?.playing && current.parts) paused = { ...current, playing: false };
  turn += 1;
  stopVoice();
  current = null;
  emit();
}

export const isTalking = () => !!current?.playing;

// The AI's answer to a spoken question, read aloud; then back to the
// interrupted explanation, from the step it was on.
export function reply(text, { lang = 'en', onEnd } = {}) {
  turn += 1;
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
  speak(text, { lang, quick: true, onDone: resume, onError: resume });
}

// Where the interrupted explanation stopped: { id, index } or null.
export const pausedNow = () => (paused ? { id: paused.id, index: paused.index } : null);
