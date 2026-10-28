// The offline pack: while the phone is online, download the tutor's explanation
// of every lesson, diagram and practical in the student's class and subjects, so
// they can all be taught without a connection. Explanations already kept are
// skipped, so running it again only fetches what is new; the server shares each
// explanation between students, so most come back at once.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { chosenSubjects } from '../data/subjects';
import { unitsShown } from '../data/units';
import { lessonsFor } from '../data/lessons';
import { labsForUnit } from '../data/labs';
import { fetchExplanation, keptExplanation } from './explain';
import { diagramRequest, lessonRequest, practicalRequest } from './teach';
import { knownOffline, onWifi } from './online';
import { UNIT_MODEL, keepModel } from '../three/anatomy';

const STATE_KEY = 'bs:offlinePack';
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Every explanation the student's class uses, each once.
export function packRequests(user, lang) {
  const seen = new Set();
  const out = [];
  const add = (req) => {
    if (!req) return;
    const k = JSON.stringify([req.kind, req.subject, req.title, req.items]);
    if (seen.has(k)) return;
    seen.add(k);
    out.push(req);
  };
  for (const subject of chosenSubjects(user)) {
    for (const unit of unitsShown(subject, user?.className)) {
      if (unit.diagram) add(diagramRequest(unit.diagram, unit.subject));
      for (const lesson of lessonsFor(unit.id)) {
        add(lessonRequest(lesson, unit));
        for (const fig of [].concat(lesson.figure || unit.diagram || [])) add(diagramRequest(fig, unit.subject));
      }
      for (const lab of labsForUnit(unit.id)) {
        add(practicalRequest(lab, lang));
        if (lab.diagram) add(diagramRequest(lab.diagram, lab.subject));
      }
    }
  }
  return out;
}

// The 3D models used by the student's topics.
export function packModels(user) {
  const names = new Set();
  for (const subject of chosenSubjects(user)) for (const unit of unitsShown(subject, user?.className)) if (UNIT_MODEL[unit.id]) names.add(UNIT_MODEL[unit.id]);
  return [...names];
}

// What was last downloaded: { done, total, at, lang, className }.
export async function packState() {
  try {
    return JSON.parse((await AsyncStorage.getItem(STATE_KEY)) || 'null');
  } catch {
    return null;
  }
}

// Runs the download. onProgress({ done, total, fetched, failed }) after each
// item; control.stop = true stops it. Resolves with a summary and the reason it
// ended: 'done', 'stopped', 'offline', 'wifi' (Wi-Fi only and not on Wi-Fi),
// 'account' (the server refused this account) or 'error'.
export async function downloadPack({ user, lang, wifiOnly, models = true, onProgress, control = {} }) {
  const list = packRequests(user, lang);
  const modelList = models ? packModels(user) : [];
  const total = list.length + modelList.length;
  let done = 0;
  let fetched = 0;
  let failed = 0;
  const report = () => onProgress?.({ done, total, fetched, failed });
  const finish = async (reason) => {
    const summary = { done, total, fetched, failed, reason };
    try {
      await AsyncStorage.setItem(STATE_KEY, JSON.stringify({ done, total, at: Date.now(), lang, className: user?.className || '' }));
    } catch {
      // the summary is only for the screen
    }
    return summary;
  };
  report();
  for (const base of list) {
    if (control.stop) return finish('stopped');
    const req = { ...base, lang, className: user?.className };
    if (await keptExplanation(req)) {
      done += 1;
      report();
      continue;
    }
    if (knownOffline()) return finish('offline');
    if (wifiOnly && !(await onWifi())) return finish('wifi');
    for (let tries = 0; ; tries += 1) {
      if (control.stop) return finish('stopped');
      try {
        await fetchExplanation(req);
        fetched += 1;
        break;
      } catch (e) {
        if (e.code === 'offline') return finish('offline');
        if (e.status === 401 || e.status === 403) return finish('account');
        // The server makes a few new explanations a minute for each student.
        if ((e.code === 'rate_limited' || e.status === 429) && tries < 30) {
          await wait(9000);
          continue;
        }
        if (tries < 2) {
          await wait(3000);
          continue;
        }
        failed += 1;
        break;
      }
    }
    done += 1;
    report();
  }
  for (const name of modelList) {
    if (control.stop) return finish('stopped');
    if (knownOffline()) return finish('offline');
    if (wifiOnly && !(await onWifi())) return finish('wifi');
    try {
      await keepModel(name);
      fetched += 1;
    } catch {
      failed += 1;
    }
    done += 1;
    report();
  }
  return finish(failed ? 'error' : 'done');
}

// ---------- one download for the whole app ----------
// The download carries on while the student moves to other screens; screens
// watch it with watchPack().
const live = { running: false, progress: null, result: null, control: null };
const watchers = new Set();
const emit = () => watchers.forEach((f) => f(packLive()));

export const packLive = () => ({ running: live.running, progress: live.progress, result: live.result });

export function watchPack(fn) {
  watchers.add(fn);
  return () => watchers.delete(fn);
}

export function startPack(options) {
  if (live.running) return;
  live.running = true;
  live.result = null;
  live.control = {};
  emit();
  downloadPack({
    ...options,
    control: live.control,
    onProgress: (p) => {
      live.progress = p;
      emit();
    },
  })
    .then((r) => {
      live.result = r;
    })
    .catch(() => {
      live.result = { reason: 'error' };
    })
    .finally(() => {
      live.running = false;
      emit();
    });
}

export function stopPack() {
  if (live.control) live.control.stop = true;
}
