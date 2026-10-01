// Paper 1 engine: builds papers from the question bank and scores attempts.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { units, unitById } from '../data/units';

export const BANK = units.flatMap((u) => u.quiz.map((q, qi) => ({ ...q, unit: u.id, qi, key: `${u.id}:${qi}` })));
export const byKey = (key) => BANK.find((q) => q.key === key);

export const P1 = { count: 50, minutes: 90 };
const SESSION = 'bs:p1:session';

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Spreads questions across units, then fills at random.
export function buildPaper(count = P1.count, unitIds) {
  const pool = unitIds ? BANK.filter((q) => unitIds.includes(q.unit)) : BANK;
  const byUnit = {};
  for (const q of shuffle(pool)) (byUnit[q.unit] = byUnit[q.unit] || []).push(q);
  const picked = [];
  const lists = Object.values(byUnit);
  let round = 0;
  while (picked.length < Math.min(count, pool.length)) {
    for (const l of lists) if (l[round] && picked.length < count) picked.push(l[round]);
    round++;
  }
  return shuffle(picked).map((q) => ({ key: q.key, order: shuffle(q.a.map((_, i) => i)) }));
}

export async function loadSession() {
  try {
    const raw = await AsyncStorage.getItem(SESSION);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (Date.now() - s.startedAt > P1.minutes * 60000 + 5 * 60000) return null;
    return s;
  } catch {
    return null;
  }
}
export const saveSession = (s) => AsyncStorage.setItem(SESSION, JSON.stringify(s)).catch(() => {});
export const clearSession = () => AsyncStorage.removeItem(SESSION).catch(() => {});

// answers[i] = original option index picked (0 is always the correct option in the bank).
export function score(paper, answers, flags = {}) {
  const byUnit = {};
  let correct = 0;
  const items = paper.map((p, i) => {
    const q = byKey(p.key);
    const pick = answers[i] ?? -1;
    const ok = pick === 0;
    if (ok) correct++;
    byUnit[q.unit] = byUnit[q.unit] || [0, 0];
    byUnit[q.unit][1]++;
    if (ok) byUnit[q.unit][0]++;
    return { k: p.key, p: pick, f: flags[i] ? 1 : 0, o: p.order };
  });
  return { correct, total: paper.length, pct: Math.round((correct / paper.length) * 100), byUnit, items };
}

export const unitLabel = (id) => unitById(id)?.short || id;
