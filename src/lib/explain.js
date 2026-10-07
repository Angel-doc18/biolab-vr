// The tutor's spoken teaching of a diagram (one part per label or fact), a
// practical (one part per method step) or a lesson (one part per paragraph or
// worked example). The server writes each one once per class and shares it; the
// phone keeps a copy so it plays again without data.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { post } from '../api/client';

// Bump when the way the tutor teaches changes, so old explanations are not reused.
const VERSION = 3;

function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export async function fetchExplanation({ kind, subject, title, items, context, lang, className }) {
  const body = { kind, subject, title, items, context: context || undefined, lang };
  const key = `bs:explain:${hash(JSON.stringify({ ...body, v: VERSION, c: className || '' }))}`;
  try {
    const saved = await AsyncStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {
    // ask the server
  }
  const r = await post('/v1/ai/explain', body, { timeout: 120000 });
  AsyncStorage.setItem(key, JSON.stringify(r.explanation)).catch(() => {});
  return r.explanation;
}

// Speakable segments: the introduction, one per item, then the summary.
// `at` is the item each segment belongs to (null for the intro and summary).
export const segmentsOf = (e) => [
  { text: e.intro, at: null },
  ...e.items.map((text, i) => ({ text, at: i })),
  { text: e.summary, at: null },
];
