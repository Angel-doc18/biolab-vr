// Paper 1 engine: builds papers from a subject's question bank and scores attempts.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formsFor, units, unitById, unitsCovered, unitsFor } from '../data/units';
import { subjectById } from '../data/subjects';

export const BANK = units.flatMap((u) => u.quiz.map((q, qi) => ({ ...q, unit: u.id, subject: u.subject, qi, key: `${u.id}:${qi}` })));
const byKeyMap = new Map(BANK.map((q) => [q.key, q]));
export const byKey = (key) => byKeyMap.get(key);
export const bankFor = (subject) => BANK.filter((q) => q.subject === subject);

export const p1For = (subject) => subjectById(subject).p1;

// The Paper 1 a student sits: the full exam paper once they have covered the
// whole course (Form 5 and above); before that, a shorter paper on the classes
// they have done, with the time cut in proportion. A subject whose examination
// class is still being written (Computer Science, Geography, Home Economics so
// far) always gives the shorter class paper, never one called the exam paper.
const EXAM_CLASS = { O: 'Form 5', A: 'Upper Sixth' };
export const reachesExam = (subject) => {
  const forms = formsFor(subject);
  return !forms.length || forms.includes(EXAM_CLASS[subjectById(subject).level]);
};
export function paper1Plan(subject, className) {
  const P1 = p1For(subject);
  const covered = unitsCovered(subject, className);
  if (reachesExam(subject) && covered.length >= unitsFor(subject).length) return { ...P1, unitIds: null, forms: [] };
  const pool = covered.reduce((a, u) => a + u.quiz.length, 0);
  const count = Math.min(P1.count, pool);
  const forms = [...new Set(covered.map((u) => u.form))];
  return { count, minutes: Math.max(10, Math.round((P1.minutes * count) / P1.count / 5) * 5), unitIds: covered.map((u) => u.id), forms };
}
// End-of-term class tests. Topics that follow a school's scheme of work carry the
// term in which they are taught (Computer Science, Geography and Home Economics
// so far). A term test sets questions on that term's topics of the student's
// class only. It is offered only when every topic of the class has its term, so
// no topic taught that term is left out.
const TERM_QUESTIONS = 30;
export function termsFor(subject, className) {
  const mine = unitsFor(subject).filter((u) => u.form === className);
  if (!mine.length || mine.some((u) => !u.term)) return [];
  return [...new Set(mine.map((u) => u.term))].sort((a, b) => a - b);
}
export function termPlan(subject, className, term) {
  const P1 = p1For(subject);
  const list = unitsFor(subject).filter((u) => u.form === className && u.term === term);
  const pool = list.reduce((a, u) => a + u.quiz.length, 0);
  const count = Math.min(TERM_QUESTIONS, pool);
  return { count, minutes: Math.max(10, Math.round((P1.minutes * count) / P1.count / 5) * 5), unitIds: list.map((u) => u.id), forms: [className], term };
}

// Biology keeps its original key so an unfinished paper survives the update. A
// term test keeps its own session (slot "t1", "t2" or "t3").
const sessionKey = (subject, slot) => `${subject === 'biology' ? 'bs:p1:session' : `bs:p1:session:${subject}`}${slot ? `:${slot}` : ''}`;

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Spreads questions across units, then fills at random.
export function buildPaper(subject, count = p1For(subject).count, unitIds) {
  const pool = unitIds ? BANK.filter((q) => unitIds.includes(q.unit)) : bankFor(subject);
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

export async function loadSession(subject, slot) {
  try {
    const raw = await AsyncStorage.getItem(sessionKey(subject, slot));
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (Date.now() - s.startedAt > (s.minutes || p1For(subject).minutes) * 60000 + 5 * 60000) return null;
    if (!s.paper?.every((p) => byKey(p.key))) return null;
    return s;
  } catch {
    return null;
  }
}
export const saveSession = (subject, s, slot) => AsyncStorage.setItem(sessionKey(subject, slot), JSON.stringify(s)).catch(() => {});
export const clearSession = (subject, slot) => AsyncStorage.removeItem(sessionKey(subject, slot)).catch(() => {});

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

// Assignment reference for a teacher-set Paper 1 in a subject.
export const mockRef = (subject) => (subject === 'biology' ? 'paper1' : `paper1-${subject}`);
export const mockSubject = (ref) => (ref === 'paper1' ? 'biology' : ref?.startsWith('paper1-') ? ref.slice(7) : null);
