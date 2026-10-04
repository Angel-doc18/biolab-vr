// Derived study information shared by several screens.
import { unitById, unitsFor } from '../data/units';
import { lessonById, lessonsFor } from '../data/lessons';
import { unitLocked, lessonLocked } from '../data/plan';

export function unitStatus(progress, unitPct, unit, pro) {
  if (unitLocked(unit.id, pro)) return 'locked';
  const pct = unitPct[unit.id] || 0;
  if (pct >= 85) return 'mastered';
  const started = lessonsFor(unit.id).some((l) => progress.lessons[l.id]) || progress.quiz[unit.id];
  return started ? 'progress' : 'next';
}

// First unread lesson in a unit (or the first lesson if all are done).
export function nextLesson(progress, unitId, pro) {
  const list = lessonsFor(unitId);
  const i = list.findIndex((l, idx) => !progress.lessons[l.id] && !lessonLocked(unitId, idx, pro));
  return list[i >= 0 ? i : 0];
}

// The unit to revise today in a subject: lowest mastery among unlocked units,
// preferring units already started.
// `shown`: the topics the student sees (their class's, for subjects organised by
// class); all the subject's topics when not given.
export function focusUnit(progress, unitPct, pro, subject, shown) {
  const units = shown?.length ? shown : unitsFor(subject);
  const open = units.filter((u) => !unitLocked(u.id, pro));
  const started = open.filter((u) => (unitPct[u.id] || 0) > 0 && (unitPct[u.id] || 0) < 85);
  const pool = started.length ? started : open.filter((u) => (unitPct[u.id] || 0) < 85);
  if (!pool.length) return open.sort((a, b) => (unitPct[a.id] || 0) - (unitPct[b.id] || 0))[0] || units[0];
  return pool.sort((a, b) => (unitPct[a.id] || 0) - (unitPct[b.id] || 0) || a.n - b.n)[0];
}

// Units of a subject studied most recently (by last lesson read or quiz taken).
export function recentUnits(progress, count = 2, subject) {
  const ids = new Set(unitsFor(subject).map((u) => u.id));
  const last = {};
  const bump = (u, at) => ids.has(u) && (last[u] = Math.max(last[u] || 0, at || 0));
  for (const [id, at] of Object.entries(progress.lessons)) {
    const l = lessonById(id);
    if (!l) continue;
    // A shared lesson counts for every unit that lists it.
    for (const u of unitsFor(subject)) if (u.id === l.unit || u.lessonIds?.includes(id)) bump(u.id, at);
  }
  for (const w of progress.workbook) if (w.unit) bump(w.unit, w.at);
  return Object.entries(last)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([id]) => unitById(id))
    .filter(Boolean);
}

// Accuracy per unit across all Paper 1 attempts.
export function accuracyByUnit(exams) {
  const acc = {};
  for (const e of exams) {
    for (const [u, [c, t]] of Object.entries(e.byUnit || {})) {
      acc[u] = acc[u] || [0, 0];
      acc[u][0] += c;
      acc[u][1] += t;
    }
  }
  return Object.fromEntries(Object.entries(acc).map(([u, [c, t]]) => [u, t ? Math.round((c / t) * 100) : 0]));
}

// The exams passed in are already one subject's; `subject` limits the mastery fallback too.
export function weakestUnit(exams, unitPct, subject) {
  const acc = accuracyByUnit(exams);
  const scored = Object.entries(acc).filter(([, v]) => v != null);
  if (scored.length) {
    const [u, pct] = scored.sort((a, b) => a[1] - b[1])[0];
    return { unit: unitById(u), pct, source: 'exams' };
  }
  const touched = Object.entries(unitPct).filter(([u, v]) => v > 0 && (!subject || unitById(u)?.subject === subject));
  if (!touched.length) return null;
  const [u, pct] = touched.sort((a, b) => a[1] - b[1])[0];
  return { unit: unitById(u), pct, source: 'mastery' };
}

// Rough grade band from a percentage, for practice feedback only.
export function gradeFor(pct) {
  if (pct == null) return null;
  if (pct >= 70) return 'A';
  if (pct >= 60) return 'B';
  if (pct >= 50) return 'C';
  if (pct >= 40) return 'D';
  if (pct >= 30) return 'E';
  return 'U';
}

export function greeting(L) {
  const h = new Date().getHours();
  if (h < 12) return L('Good morning', 'Bonjour');
  if (h < 17) return L('Good afternoon', 'Bon après-midi');
  return L('Good evening', 'Bonsoir');
}

export const firstName = (name = '') => name.trim().split(/\s+/)[0] || '';
