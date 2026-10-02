// The tutor's spoken explanation of a diagram (one part per label) or a practical
// (one part per method step). The server writes each one once and shares it;
// the phone keeps a copy so it plays again without data.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { post } from '../api/client';

function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

export async function fetchExplanation({ kind, subject, title, items, context, lang }) {
  const body = { kind, subject, title, items, context: context || undefined, lang };
  const key = `bs:explain:${hash(JSON.stringify(body))}`;
  try {
    const saved = await AsyncStorage.getItem(key);
    if (saved) return JSON.parse(saved);
  } catch {
    // ask the server
  }
  const r = await post('/v1/ai/explain', body, { timeout: 90000 });
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
