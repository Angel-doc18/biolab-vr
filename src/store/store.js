import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { units } from '../data/units';

// All student state lives on the device (offline-first) in one AsyncStorage key.
const KEY = 'biospatial:v1';

const initial = {
  profile: { name: 'Enow Brenda', school: 'GBHS Yaoundé', form: 'Biology Form 5' },
  level: 'O',
  lang: 'en',
  unitId: 'cell',
  progress: {}, // unitId -> { answers: {qi: {ok, pick}}, best: number|null, attempts }
  xpAwarded: {}, // 'unit:qi' -> true (XP only for the first correct answer)
  xp: 0,
  days: [], // ISO dates with study activity
  focusBonus: {}, // date -> unitId, +50 XP once per day
  labs: {}, // labId -> { step }
  workbook: [], // recorded lab observations
  exams: [], // { pct, correct, total, at }
};

const today = () => new Date().toISOString().slice(0, 10);

const Ctx = createContext(null);

export function StoreProvider({ children }) {
  const [state, setState] = useState(initial);
  const [ready, setReady] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (raw) setState((s) => ({ ...s, ...JSON.parse(raw) }));
      })
      .catch(() => {})
      .finally(() => {
        loaded.current = true;
        setReady(true);
      });
  }, []);

  useEffect(() => {
    if (loaded.current) AsyncStorage.setItem(KEY, JSON.stringify(state)).catch(() => {});
  }, [state]);

  const markDay = (s) => (s.days.includes(today()) ? s.days : [...s.days, today()].slice(-400));

  const actions = useMemo(
    () => ({
      set: (patch) => setState((s) => ({ ...s, ...patch })),
      setProfile: (profile) => setState((s) => ({ ...s, profile: { ...s.profile, ...profile } })),
      answer: (unitId, qi, correct, pick) =>
        setState((s) => {
          const p = s.progress[unitId] || { answers: {}, best: null, attempts: 0 };
          const k = `${unitId}:${qi}`;
          const earn = correct && !s.xpAwarded[k];
          return {
            ...s,
            progress: { ...s.progress, [unitId]: { ...p, answers: { ...p.answers, [qi]: { ok: correct, pick } } } },
            xpAwarded: earn ? { ...s.xpAwarded, [k]: true } : s.xpAwarded,
            xp: s.xp + (earn ? 10 : 0),
            days: markDay(s),
          };
        }),
      clearAnswer: (unitId, qi) =>
        setState((s) => {
          const p = s.progress[unitId];
          if (!p) return s;
          const answers = { ...p.answers };
          delete answers[qi];
          return { ...s, progress: { ...s.progress, [unitId]: { ...p, answers } } };
        }),
      // Scores the current attempt, keeps the best, and starts a fresh attempt.
      finishQuiz: (unitId, total, focusUnitId) =>
        setState((s) => {
          const p = s.progress[unitId] || { answers: {}, best: null, attempts: 0 };
          const correct = Object.values(p.answers).filter((a) => a.ok).length;
          const pct = Math.round((correct / total) * 100);
          const bonus = focusUnitId === unitId && !s.focusBonus[today()];
          return {
            ...s,
            progress: {
              ...s.progress,
              [unitId]: { answers: {}, attempts: p.attempts + 1, best: p.best == null ? pct : Math.max(p.best, pct) },
            },
            focusBonus: bonus ? { ...s.focusBonus, [today()]: unitId } : s.focusBonus,
            xp: s.xp + (bonus ? 50 : 0),
            days: markDay(s),
          };
        }),
      resetQuiz: (unitId) =>
        setState((s) => {
          const p = s.progress[unitId];
          if (!p) return s;
          return { ...s, progress: { ...s.progress, [unitId]: { ...p, answers: {} } } };
        }),
      setLabStep: (labId, step) => setState((s) => ({ ...s, labs: { ...s.labs, [labId]: { ...s.labs[labId], step } } })),
      recordLab: (entry) =>
        setState((s) => ({
          ...s,
          workbook: [...s.workbook, { ...entry, at: Date.now() }].slice(-200),
          xp: s.xp + 20,
          days: markDay(s),
        })),
      recordExam: (exam) =>
        setState((s) => ({
          ...s,
          exams: [...s.exams, { ...exam, at: Date.now() }].slice(-50),
          xp: s.xp + exam.correct * 5,
          days: markDay(s),
        })),
    }),
    []
  );

  const value = useMemo(() => ({ state, ready, ...actions }), [state, ready, actions]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useStore = () => useContext(Ctx);

// ---------- derived values ----------

export function streak(days) {
  const set = new Set(days);
  const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1); // streak survives until today ends
  let n = 0;
  while (set.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

// Exam-weight-weighted mastery across the syllabus.
export function syllabusPct(progress) {
  const total = units.reduce((a, u) => a + u.weight, 0);
  const got = units.reduce((a, u) => a + ((progress[u.id]?.best ?? 0) * u.weight) / 100, 0);
  return Math.round((got / total) * 100);
}

export function unitStatus(progress, unit) {
  const p = progress[unit.id];
  const answered = p ? Object.keys(p.answers).length : 0;
  if (answered > 0) return { kind: 'progress', pct: Math.round((answered / unit.quiz.length) * 100) };
  if (p?.best != null) return { kind: p.best >= 90 ? 'mastered' : 'score', pct: p.best };
  return { kind: 'next' };
}

export function focusUnit(progress) {
  return units.find((u) => (progress[u.id]?.best ?? 0) < 90) || units[0];
}

// Cameroon GCE ordinary-level written papers run from late May; count down to 1 June.
export function daysToExam() {
  const now = new Date();
  let exam = new Date(now.getFullYear(), 5, 1);
  if (exam < now) exam = new Date(now.getFullYear() + 1, 5, 1);
  return Math.ceil((exam - now) / 86400000);
}
