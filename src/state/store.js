import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { del, get, loadSession, onSessionLost, patch as apiPatch, post, put, setSession } from '../api/client';
import { EMPTY, examSubject, merge, minutesThisWeek, streak, syllabusMastery, touchDay, unitMastery, bestExam } from './progress';
import { units, unitsShown } from '../data/units';
import { lessonIdsFor } from '../data/lessons';
import { OPEN_IDS, chosenSubjects } from '../data/subjects';
import { OPEN_FOR_TESTING } from '../data/plan';
import { setVoice } from '../lib/voice';

const PREFS = 'bs:prefs';
const USER = 'bs:user';
const AVATAR = 'bs:avatar';
const progressKey = (id) => `bs:progress:${id || 'guest'}`;

const Ctx = createContext(null);

async function readJson(key, fallback) {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
const writeJson = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value)).catch(() => {});

export function AppProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [prefs, setPrefs] = useState({ lang: 'en', seenWelcome: false, langChosen: false });
  const [auth, setAuth] = useState({ status: 'loading', user: null, pro: false });
  const [progress, setProgress] = useState(EMPTY);
  const [quota, setQuota] = useState(null);
  const [unread, setUnread] = useState(0);
  const [avatar, setAvatarUri] = useState(null);
  const loadedFor = useRef(null);
  const syncTimer = useRef(null);

  // ---------- boot ----------
  useEffect(() => {
    (async () => {
      const p = await readJson(PREFS, null);
      if (p) setPrefs((x) => ({ ...x, ...p }));
      const session = await loadSession();
      const cached = await readJson(USER, null);
      if (session && cached?.user) {
        setAuth({ status: 'authed', user: cached.user, pro: Boolean(cached.pro) });
        await loadProgress(cached.user.id);
        refreshMe().catch(() => {});
      } else {
        setAuth({ status: 'guest', user: null, pro: false });
      }
      setReady(true);
    })();
    return onSessionLost(() => {
      AsyncStorage.removeItem(USER).catch(() => {});
      setAuth({ status: 'guest', user: null, pro: false });
    });
  }, []);

  async function loadProgress(userId) {
    const local = await readJson(progressKey(userId), EMPTY);
    loadedFor.current = userId;
    setProgress({ ...EMPTY, ...local });
  }

  useEffect(() => setVoice(prefs.voice), [prefs.voice]);

  const savePrefs = useCallback((patch) => {
    setPrefs((x) => {
      const next = { ...x, ...patch };
      writeJson(PREFS, next);
      return next;
    });
  }, []);

  const applyUser = useCallback(async (user, pro) => {
    setAuth({ status: 'authed', user, pro: Boolean(pro) });
    await writeJson(USER, { user, pro: Boolean(pro) });
    if (user?.lang) savePrefs({ lang: user.lang });
  }, [savePrefs]);

  const refreshMe = useCallback(async () => {
    const r = await get('/v1/me');
    await applyUser(r.user, r.pro);
    return r;
  }, [applyUser]);

  // Pulls the server copy once per sign-in and merges it with offline work.
  const pullProgress = useCallback(async (user) => {
    if (user.role !== 'student') return;
    try {
      const r = await get('/v1/me/progress');
      if (r.data) {
        setProgress((local) => {
          const merged = merge(local, r.data);
          writeJson(progressKey(user.id), merged);
          return merged;
        });
      }
    } catch {
      // offline: keep local copy
    }
  }, []);

  // ---------- auth ----------
  const startSession = useCallback(async (r) => {
    await setSession(r);
    await loadProgress(r.user.id);
    await applyUser(r.user, r.pro);
    pullProgress(r.user);
  }, [applyUser, pullProgress]);

  const register = useCallback(async (body) => {
    const r = await post('/v1/auth/register', { ...body, lang: prefs.lang }, { auth: false });
    await startSession(r);
    return r;
  }, [prefs.lang, startSession]);

  const login = useCallback(async (identifier, password) => {
    const r = await post('/v1/auth/login', { identifier, password }, { auth: false });
    await startSession(r);
    return r;
  }, [startSession]);

  const logout = useCallback(async () => {
    const session = await loadSession();
    try {
      if (session?.refreshToken) await post('/v1/auth/logout', { refreshToken: session.refreshToken }, { auth: false });
    } catch {
      // the local session is cleared regardless
    }
    await setSession(null);
    await AsyncStorage.multiRemove([USER, AVATAR]).catch(() => {});
    setAuth({ status: 'guest', user: null, pro: false });
    setAvatarUri(null);
    setQuota(null);
    setUnread(0);
  }, []);

  const updateMe = useCallback(async (fields) => {
    const r = await apiPatch('/v1/me', fields);
    await applyUser(r.user, r.pro);
    return r;
  }, [applyUser]);

  // ---------- progress ----------
  const user = auth.user;
  // Students under 18 need a parent's approval before anything is stored on the
  // server; until then progress stays on this phone only.
  const consentOk = !user || user.role !== 'student' || user.consentStatus === 'granted' || user.consentStatus === 'not_needed';

  // ---------- profile picture ----------
  // Kept on this phone as a data URI and fetched again only when it changes
  // (the server's avatarAt).
  useEffect(() => {
    let live = true;
    (async () => {
      if (!user) return setAvatarUri(null);
      const cached = await readJson(AVATAR, null);
      if (!user.avatarAt) {
        if (cached) AsyncStorage.removeItem(AVATAR).catch(() => {});
        if (live) setAvatarUri(null);
        return;
      }
      if (cached?.userId === user.id && cached.at === user.avatarAt) {
        if (live) setAvatarUri(cached.uri);
        return;
      }
      try {
        const r = await get('/v1/me/avatar');
        const uri = `data:${r.mediaType};base64,${r.base64}`;
        writeJson(AVATAR, { userId: user.id, at: r.at, uri });
        if (live) setAvatarUri(uri);
      } catch {
        if (live) setAvatarUri(cached?.userId === user.id ? cached.uri : null);
      }
    })();
    return () => {
      live = false;
    };
  }, [user]);

  const saveAvatar = useCallback(
    async (photo) => {
      const r = await put('/v1/me/avatar', { base64: photo.base64, mediaType: photo.mediaType });
      const uri = `data:${photo.mediaType};base64,${photo.base64}`;
      await writeJson(AVATAR, { userId: r.user.id, at: r.user.avatarAt, uri });
      setAvatarUri(uri);
      await applyUser(r.user, auth.pro);
    },
    [applyUser, auth.pro]
  );
  const removeAvatar = useCallback(async () => {
    const r = await del('/v1/me/avatar');
    await AsyncStorage.removeItem(AVATAR).catch(() => {});
    setAvatarUri(null);
    await applyUser(r.user, auth.pro);
  }, [applyUser, auth.pro]);

  // The sciences this student takes, and the one the tabs are showing now.
  const subjects = useMemo(() => chosenSubjects(user), [user]);
  const subject = subjects.includes(prefs.subject) ? prefs.subject : subjects[0];
  const setSubject = useCallback((id) => OPEN_IDS.includes(id) && savePrefs({ subject: id }), [savePrefs]);

  const stats = useMemo(() => {
    const unitPct = Object.fromEntries(units.map((u) => [u.id, unitMastery(progress, u, lessonIdsFor(u.id))]));
    const bySubject = Object.fromEntries(
      OPEN_IDS.map((id) => [
        id,
        {
          // Mastery of the topics the student sees: their class's.
          mastery: syllabusMastery(progress, unitsShown(id, user?.className), lessonIdsFor),
          bestMock: bestExam(progress, 'p1', id),
          mocksDone: progress.exams.filter((e) => examSubject(e) === id).length,
        },
      ])
    );
    const taken = subjects.map((id) => bySubject[id].mastery);
    return {
      mastery: bySubject[subject].mastery,
      overall: Math.round(taken.reduce((a, b) => a + b, 0) / taken.length),
      bySubject,
      unitPct,
      streak: streak(progress.days),
      minutesWeek: minutesThisWeek(progress.minutes),
      labsDone: Object.keys(progress.labs).length,
      mocksDone: progress.exams.length,
      bestMock: bySubject[subject].bestMock,
      lastActive: progress.days.length ? Date.now() : null,
    };
  }, [progress, subjects, subject, user?.className]);

  useEffect(() => {
    if (!user || loadedFor.current !== user.id) return;
    writeJson(progressKey(user.id), progress);
    if (user.role !== 'student' || prefs.autoSync === false || !consentOk) return;
    clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(() => {
      const lastDay = progress.days[progress.days.length - 1];
      put('/v1/me/progress', {
        // Drawings stay on the device; the server only needs the study record.
        data: { ...progress, workbook: progress.workbook.map(({ drawing, ...w }) => w) },
        stats: {
          mastery: stats.overall,
          xp: progress.xp,
          streak: stats.streak,
          labsDone: stats.labsDone,
          mocksDone: stats.mocksDone,
          bestMock: bestExam(progress, 'p1'),
          minutesWeek: stats.minutesWeek,
          lastActive: lastDay ? new Date(`${lastDay}T12:00:00`).getTime() : null,
          unitMastery: stats.unitPct,
          subjects: Object.fromEntries(subjects.map((id) => [id, stats.bySubject[id]])),
        },
      }).catch(() => {});
    }, 3000);
  }, [progress, user, stats, subjects, prefs.autoSync, consentOk]);

  const actions = useMemo(
    () => ({
      answer: (unitId, qi, ok, pick) =>
        setProgress((p) => {
          const q = p.quiz[unitId] || { answers: {}, best: null, attempts: 0 };
          const k = `${unitId}:${qi}`;
          const earn = ok && !p.xpAwarded[k];
          return touchDay({
            ...p,
            quiz: { ...p.quiz, [unitId]: { ...q, answers: { ...q.answers, [qi]: { ok, pick } } } },
            xpAwarded: earn ? { ...p.xpAwarded, [k]: true } : p.xpAwarded,
            xp: p.xp + (earn ? 10 : 0),
          });
        }),
      finishQuiz: (unitId, total) =>
        setProgress((p) => {
          const q = p.quiz[unitId] || { answers: {}, best: null, attempts: 0 };
          const correct = Object.values(q.answers).filter((a) => a.ok).length;
          const pct = Math.round((correct / total) * 100);
          return touchDay({
            ...p,
            quiz: { ...p.quiz, [unitId]: { answers: {}, attempts: q.attempts + 1, best: q.best == null ? pct : Math.max(q.best, pct) } },
          });
        }),
      resetQuiz: (unitId) =>
        setProgress((p) => (p.quiz[unitId] ? { ...p, quiz: { ...p.quiz, [unitId]: { ...p.quiz[unitId], answers: {} } } } : p)),
      completeLesson: (lessonId, minutes = 0) =>
        setProgress((p) => {
          const first = !p.lessons[lessonId];
          return touchDay({ ...p, lessons: first ? { ...p.lessons, [lessonId]: Date.now() } : p.lessons, xp: p.xp + (first ? 15 : 0) }, minutes);
        }),
      addMinutes: (m) => setProgress((p) => touchDay(p, m)),
      toggleBookmark: (lessonId) =>
        setProgress((p) => {
          const bookmarks = { ...(p.bookmarks || {}) };
          if (bookmarks[lessonId]) delete bookmarks[lessonId];
          else bookmarks[lessonId] = Date.now();
          return { ...p, bookmarks };
        }),
      viewModel: (modelId) => setProgress((p) => (p.models[modelId] ? p : touchDay({ ...p, models: { ...p.models, [modelId]: Date.now() }, xp: p.xp + 5 }))),
      recordLab: (labId, entry) =>
        setProgress((p) => {
          const first = !p.labs[labId];
          const id = `${labId}-${Date.now()}`;
          return touchDay(
            {
              ...p,
              labs: { ...p.labs, [labId]: { at: Date.now(), result: entry.result || null } },
              workbook: [...p.workbook, { id, labId, ...entry, at: Date.now() }].slice(-200),
              xp: p.xp + (first ? 40 : 10),
            },
            entry.minutes || 0
          );
        }),
      updateWorkbook: (id, patch) =>
        setProgress((p) => ({ ...p, workbook: p.workbook.map((w) => (w.id === id ? { ...w, ...patch } : w)) })),
      recordExam: (exam) =>
        setProgress((p) => {
          const id = `${exam.kind}-${Date.now()}`;
          return touchDay(
            { ...p, exams: [...p.exams, { ...exam, id, at: Date.now() }].slice(-100), xp: p.xp + Math.round((exam.pct || 0) / 2) },
            Math.round((exam.secs || 0) / 60)
          );
        }),
    }),
    []
  );

  // ---------- AI quota and notifications ----------
  const refreshQuota = useCallback(async () => {
    try {
      const q = await get('/v1/ai/quota');
      setQuota(q);
      return q;
    } catch {
      return null;
    }
  }, []);

  const refreshUnread = useCallback(async () => {
    try {
      const r = await get('/v1/notifications');
      setUnread(r.items.filter((n) => !n.read).length);
      return r.items;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (auth.status === 'authed') {
      refreshUnread();
      refreshQuota();
    }
  }, [auth.status, refreshUnread, refreshQuota]);

  const value = useMemo(
    () => ({
      ready,
      prefs,
      savePrefs,
      auth,
      user,
      pro: OPEN_FOR_TESTING || auth.pro,
      consentOk,
      subjects,
      subject,
      setSubject,
      applyUser,
      avatar,
      saveAvatar,
      removeAvatar,
      register,
      login,
      logout,
      updateMe,
      refreshMe,
      startSession,
      progress,
      stats,
      quota,
      setQuota,
      refreshQuota,
      unread,
      setUnread,
      refreshUnread,
      ...actions,
    }),
    [ready, prefs, savePrefs, auth, user, consentOk, subjects, subject, setSubject, applyUser, avatar, saveAvatar, removeAvatar, register, login, logout, updateMe, refreshMe, startSession, progress, stats, quota, refreshQuota, unread, refreshUnread, actions]
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useApp = () => useContext(Ctx);
