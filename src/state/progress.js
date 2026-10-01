// Offline-first study record. Everything is computed on the device and synced
// to the server (when signed in) so parents and teachers see real numbers.
import { units } from '../data/units';

export const EMPTY = {
  v: 2,
  xp: 0,
  days: [], // ISO dates with study activity
  minutes: {}, // ISO date -> minutes studied
  quiz: {}, // unitId -> { answers: {qi: {ok, pick}}, best, attempts }
  xpAwarded: {}, // 'unit:qi' -> true, XP only for the first correct answer
  lessons: {}, // lessonId -> completedAt
  labs: {}, // labId -> { at, result }
  workbook: [], // { id, labId, title, observation, conclusion, at }
  exams: [], // { id, kind: 'p1'|'p2', score, total, pct, secs, byUnit, at }
  models: {}, // modelId -> viewedAt
  bookmarks: {}, // lessonId -> savedAt
};

export const iso = (d = new Date()) => {
  const x = new Date(d);
  return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}-${String(x.getDate()).padStart(2, '0')}`;
};

export function touchDay(p, addMinutes = 0) {
  const day = iso();
  const days = p.days.includes(day) ? p.days : [...p.days, day].slice(-400);
  const minutes = addMinutes ? { ...p.minutes, [day]: Math.min(1440, (p.minutes[day] || 0) + addMinutes) } : p.minutes;
  return { ...p, days, minutes };
}

export function streak(days) {
  const set = new Set(days);
  const d = new Date();
  if (!set.has(iso(d))) d.setDate(d.getDate() - 1); // a streak survives until the day ends
  let n = 0;
  while (set.has(iso(d))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export function minutesThisWeek(minutes) {
  let total = 0;
  const d = new Date();
  for (let i = 0; i < 7; i++) {
    total += minutes[iso(d)] || 0;
    d.setDate(d.getDate() - 1);
  }
  return total;
}

// Unit mastery blends the best quiz score, lessons read and the unit's lab.
export function unitMastery(p, unit, lessonIds = []) {
  const quiz = p.quiz[unit.id]?.best ?? 0;
  const read = lessonIds.length ? lessonIds.filter((id) => p.lessons[id]).length / lessonIds.length : 0;
  return Math.round(quiz * 0.7 + read * 100 * 0.3);
}

export function syllabusMastery(p, lessonsByUnit) {
  const total = units.reduce((a, u) => a + u.weight, 0);
  const got = units.reduce((a, u) => a + (unitMastery(p, u, lessonsByUnit(u.id)) * u.weight) / 100, 0);
  return Math.round((got / total) * 100);
}

export function bestExam(p, kind) {
  const list = p.exams.filter((e) => !kind || e.kind === kind);
  return list.length ? Math.max(...list.map((e) => e.pct)) : null;
}

// Merges a server copy into the local copy without losing work done offline.
export function merge(local, remote) {
  if (!remote || typeof remote !== 'object') return local;
  const a = { ...EMPTY, ...local };
  const b = { ...EMPTY, ...remote };
  const quiz = { ...b.quiz };
  for (const [k, v] of Object.entries(a.quiz)) {
    const r = quiz[k];
    quiz[k] = r
      ? { answers: v.answers || {}, attempts: Math.max(v.attempts || 0, r.attempts || 0), best: Math.max(v.best ?? -1, r.best ?? -1) < 0 ? null : Math.max(v.best ?? -1, r.best ?? -1) }
      : v;
  }
  const minutes = { ...b.minutes };
  for (const [k, v] of Object.entries(a.minutes)) minutes[k] = Math.max(v, minutes[k] || 0);
  const byId = (list) => Object.values(Object.fromEntries(list.map((x) => [x.id, x])));
  return {
    ...a,
    xp: Math.max(a.xp, b.xp),
    days: [...new Set([...b.days, ...a.days])].sort().slice(-400),
    minutes,
    quiz,
    xpAwarded: { ...b.xpAwarded, ...a.xpAwarded },
    lessons: { ...b.lessons, ...a.lessons },
    labs: { ...b.labs, ...a.labs },
    models: { ...b.models, ...a.models },
    bookmarks: { ...b.bookmarks, ...a.bookmarks },
    workbook: byId([...b.workbook, ...a.workbook]).sort((x, y) => x.at - y.at).slice(-200),
    exams: byId([...b.exams, ...a.exams]).sort((x, y) => x.at - y.at).slice(-100),
  };
}

// GCE Ordinary Level Biology is written in late May / June. Counts down to
// 1 June of the student's exam year.
export function daysToExam(examYear) {
  const now = new Date();
  let year = examYear || now.getFullYear();
  let exam = new Date(year, 5, 1);
  if (!examYear && exam < now) exam = new Date(year + 1, 5, 1);
  return Math.max(0, Math.ceil((exam - now) / 86400000));
}
