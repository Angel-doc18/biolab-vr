// The tutor's spoken teaching of a diagram (one part per label or fact), a
// practical (one part per method step) or a lesson (one part per paragraph or
// worked example). The server writes each one once per class and shares it; the
// phone keeps a copy so it plays again without data. On a phone the copies are
// files in the app's documents (no size limit, kept until deleted), so a whole
// class can be downloaded for offline use; the web preview keeps them in storage.
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { post } from '../api/client';

// Bump when the way the tutor teaches changes, so old explanations are not reused.
const VERSION = 3;

function hash(s) {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// The fields keep their order so copies kept before this change still match.
const requestOf = ({ kind, subject, title, items, context, lang }) => ({ kind, subject, title, items, context: context || undefined, lang });
const idOf = (req) => hash(JSON.stringify({ ...requestOf(req), v: VERSION, c: req.className || '' }));

function folder() {
  const { Directory, Paths } = require('expo-file-system');
  const dir = new Directory(Paths.document, 'explanations');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}
function fileOf(id) {
  const { File } = require('expo-file-system');
  return new File(folder(), `${id}.json`);
}

async function readKept(id) {
  if (Platform.OS !== 'web') {
    try {
      const f = fileOf(id);
      if (f.exists) return JSON.parse(await f.text());
    } catch {
      // try the older store below
    }
  }
  try {
    const saved = await AsyncStorage.getItem(`bs:explain:${id}`);
    if (saved) return JSON.parse(saved);
  } catch {
    // nothing kept
  }
  return null;
}

async function keep(id, explanation) {
  const text = JSON.stringify(explanation);
  if (Platform.OS !== 'web') {
    try {
      const f = fileOf(id);
      if (f.exists) f.delete();
      f.create();
      await f.write(text);
      return;
    } catch {
      // fall back to storage
    }
  }
  AsyncStorage.setItem(`bs:explain:${id}`, text).catch(() => {});
}

// The kept copy of an explanation, or null, without using the network.
export const keptExplanation = (req) => readKept(idOf(req));

// req: { kind, subject, title, items, context, lang, className }
export async function fetchExplanation(req) {
  const id = idOf(req);
  const kept = await readKept(id);
  if (kept) return kept;
  const r = await post('/v1/ai/explain', requestOf(req), { timeout: 120000 });
  await keep(id, r.explanation);
  return r.explanation;
}

// How many explanations are kept on this phone, and their size in bytes.
export function keptExplanationsSize() {
  if (Platform.OS === 'web') return { count: 0, bytes: 0 };
  try {
    const files = folder()
      .list()
      .filter((f) => String(f.name || f.uri || '').endsWith('.json'));
    return { count: files.length, bytes: files.reduce((a, f) => a + (f.size || 0), 0) };
  } catch {
    return { count: 0, bytes: 0 };
  }
}

export function deleteKeptExplanations() {
  if (Platform.OS === 'web') return;
  try {
    folder().delete();
  } catch {
    // nothing kept
  }
}

// Speakable segments: the introduction, one per item, then the summary.
// `at` is the item each segment belongs to (null for the intro and summary).
export const segmentsOf = (e) => [
  { text: e.intro, at: null },
  ...e.items.map((text, i) => ({ text, at: i })),
  { text: e.summary, at: null },
];
