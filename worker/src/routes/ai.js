import { HttpError, limit, now, ok, readJson } from '../lib/http.js';
import { isPro, requireUser, requireConsent } from '../lib/auth.js';
import { int, oneOf, str } from '../lib/validate.js';
import { sha256, uuid } from '../lib/crypto.js';
import { explainItems, markAnswer, solveQuestion, tutorReply } from '../lib/ai.js';
import { today } from '../lib/notify.js';
import { subjectOr } from '../lib/subjects.js';

// Fair daily use. A photo marking costs about six times a typed one (it is read
// by a vision model first), so photos have their own, smaller allowance.
export const AI_LIMITS = { free: { asks: 5, marks: 0, photos: 0 }, pro: { asks: 30, marks: 30, photos: 6 } };
const COLUMNS = ['asks', 'marks', 'photos'];

async function usage(env, userId) {
  const row = await env.DB.prepare('SELECT asks, marks, photos FROM ai_usage WHERE user_id = ? AND day = ?').bind(userId, today()).first();
  return row || { asks: 0, marks: 0, photos: 0 };
}

async function consume(env, userId, column) {
  if (!COLUMNS.includes(column)) throw new Error('bad_usage_column');
  await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, day, asks, marks, photos) VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(user_id, day) DO UPDATE SET ${column} = ${column} + 1`
  )
    .bind(userId, today(), ...COLUMNS.map((c) => (c === column ? 1 : 0)))
    .run();
}

export async function aiQuota(request, env) {
  const user = await requireUser(request, env);
  const tier = isPro(user) ? 'pro' : 'free';
  const used = await usage(env, user.id);
  return ok({
    tier,
    asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks),
    marksLeft: Math.max(0, AI_LIMITS[tier].marks - used.marks),
    photosLeft: Math.max(0, AI_LIMITS[tier].photos - used.photos),
    limits: AI_LIMITS[tier],
  });
}

export async function ask(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'You are sending questions too quickly. Wait a moment.');
  const tier = isPro(user) ? 'pro' : 'free';
  const used = await usage(env, user.id);
  if (used.asks >= AI_LIMITS[tier].asks) {
    throw new HttpError(402, tier === 'pro' ? 'You have reached today\'s question limit.' : 'You have used today\'s free questions.', 'quota');
  }
  const b = await readJson(request, 96 * 1024);
  const question = str(b.question, 'Question', { min: 2, max: 2000 });
  let history = Array.isArray(b.history) ? b.history : [];
  history = history
    .filter((h) => h && (h.role === 'user' || h.role === 'assistant') && typeof h.content === 'string' && h.content.length <= 8000)
    .slice(-10)
    .map((h) => ({ role: h.role, content: h.content }));
  while (history.length && history[0].role !== 'user') history.shift();
  const context = str(b.context, 'Context', { max: 300, optional: true });
  const subject = subjectOr(b.subject);
  const text = await tutorReply(env, history, question, { lang: user.lang, context, lesson: lessonOf(b.lesson), level: user.class_name, subject });
  await consume(env, user.id, 'asks');
  return ok({ text, asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks - 1) });
}

// The lesson or topic open on the student's screen, sent so the tutor can keep
// to it: { title, text }. Long lessons are cut to a size the model reads well.
function lessonOf(v) {
  if (!v || typeof v !== 'object') return null;
  const title = typeof v.title === 'string' ? v.title.trim().slice(0, 200) : '';
  const text = typeof v.text === 'string' ? v.text.trim().slice(0, 5000) : '';
  return title || text ? { title, text } : null;
}

// The workspace: a question solved step by step on the board. The same question
// in the same class, language and lesson is solved once and shared, and a shared
// solution does not use the student's daily questions.
export async function solve(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  const b = await readJson(request, 64 * 1024);
  const subject = subjectOr(b.subject);
  const lang = oneOf(b.lang ?? user.lang ?? 'en', 'Language', ['en', 'fr']);
  const question = str(b.question, 'Question', { min: 3, max: 1500 });
  const lesson = lessonOf(b.lesson);
  const className = user.class_name || '';
  const key = await sha256(JSON.stringify(['solve', subject, lang, className, question.replace(/\s+/g, ' ').trim().toLowerCase(), lesson?.title || '']));
  const hit = await env.DB.prepare('SELECT body FROM ai_explanations WHERE key = ?').bind(key).first();
  const tier = isPro(user) ? 'pro' : 'free';
  const used = await usage(env, user.id);
  if (hit) return ok({ solution: JSON.parse(hit.body), cached: true, asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks) });
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'You are sending questions too quickly. Wait a moment.');
  if (used.asks >= AI_LIMITS[tier].asks) {
    throw new HttpError(402, tier === 'pro' ? 'You have reached today\'s question limit.' : 'You have used today\'s free questions.', 'quota');
  }
  const solution = await solveQuestion(env, { subject, lang, className, question, lesson });
  await env.DB.prepare('INSERT OR REPLACE INTO ai_explanations (key, kind, body, created_at) VALUES (?, ?, ?, ?)').bind(key, 'solve', JSON.stringify(solution), now()).run();
  await consume(env, user.id, 'asks');
  return ok({ solution, cached: false, asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks - 1) });
}

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export async function mark(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  if (!isPro(user)) throw new HttpError(402, 'Mark my answer is part of Premium.', 'premium_required');
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'Please wait a moment before marking another answer.');
  const used = await usage(env, user.id);
  const b = await readJson(request, 6 * 1024 * 1024);
  const kind = b.image ? 'photos' : 'marks';
  if (used[kind] >= AI_LIMITS.pro[kind]) {
    throw new HttpError(402, kind === 'photos' ? 'You have used today\'s photo markings. Type the answer instead, or try again tomorrow.' : 'You have reached today\'s marking limit.', 'quota');
  }
  const question = str(b.question, 'Question', { min: 5, max: 2000 });
  const maxMarks = int(b.maxMarks, 'Marks', { min: 1, max: 40 });
  if (!Array.isArray(b.markScheme) || b.markScheme.length < 1 || b.markScheme.length > 12) {
    throw new HttpError(400, 'Mark scheme is required.', 'invalid_input');
  }
  const markScheme = b.markScheme.map((p, i) => ({
    point: str(p?.point, `Mark point ${i + 1}`, { min: 3, max: 400 }),
    marks: int(p?.marks, `Mark point ${i + 1} marks`, { min: 1, max: 10 }),
  }));
  let image = null;
  let answerText = null;
  if (b.image) {
    const mediaType = b.image.mediaType;
    if (!IMAGE_TYPES.includes(mediaType)) throw new HttpError(400, 'Photo must be JPEG, PNG or WebP.', 'invalid_input');
    const data = typeof b.image.data === 'string' ? b.image.data : '';
    if (!/^[A-Za-z0-9+/=]+$/.test(data) || data.length < 1000 || data.length > 5_500_000) {
      throw new HttpError(400, 'The photo could not be read. Try a smaller, clearer photo.', 'invalid_input');
    }
    image = { mediaType, data };
  } else {
    answerText = str(b.answerText, 'Answer', { min: 3, max: 4000 });
  }
  const result = await markAnswer(env, { question, markScheme, maxMarks, answerText, image, subject: subjectOr(b.subject) });
  await consume(env, user.id, kind);
  return ok({
    result,
    marksLeft: Math.max(0, AI_LIMITS.pro.marks - used.marks - (kind === 'marks' ? 1 : 0)),
    photosLeft: Math.max(0, AI_LIMITS.pro.photos - used.photos - (kind === 'photos' ? 1 : 0)),
    markedAt: now(),
  });
}

// "Report this answer": stored for review; required for apps with AI-generated content.
export async function report(request, env) {
  const user = await requireUser(request, env);
  await limit(env.WRITE_LIMITER, `aireport:${user.id}`, 'Please wait a moment.');
  const b = await readJson(request, 32 * 1024);
  const reason = oneOf(b.reason, 'Reason', ['wrong', 'harmful', 'off_topic', 'other']);
  const answer = str(b.answer, 'Answer', { min: 1, max: 12000 });
  const question = str(b.question, 'Question', { max: 2000, optional: true });
  await env.DB.prepare('INSERT INTO ai_reports (id, user_id, reason, question, answer, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(uuid(), user.id, reason, question || null, answer, now())
    .run();
  return ok({ reported: true });
}

// Spoken teaching of a diagram, a practical or a lesson, pitched at the student's
// class. Shared and cached per class, so it does not use the student's daily
// questions; the rate limiter still applies.
const TEACHING_VERSION = 2; // bump when the teaching prompts change
export async function explain(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  const b = await readJson(request, 48 * 1024);
  const kind = oneOf(b.kind, 'Kind', ['diagram', 'practical', 'lesson']);
  const long = kind === 'lesson';
  const subject = subjectOr(b.subject);
  const lang = oneOf(b.lang ?? user.lang ?? 'en', 'Language', ['en', 'fr']);
  const title = str(b.title, 'Title', { min: 3, max: 200 });
  const context = str(b.context, 'Context', { max: long ? 2000 : 600, optional: true });
  if (!Array.isArray(b.items) || b.items.length < 1 || b.items.length > 16) throw new HttpError(400, 'Between 1 and 16 items are needed.', 'invalid_input');
  const items = b.items.map((t, i) => str(t, `Item ${i + 1}`, { min: 1, max: long ? 2000 : 400 }));
  const className = user.class_name || '';
  const key = await sha256(JSON.stringify([TEACHING_VERSION, kind, subject, lang, className, title, items, context || '']));
  const hit = await env.DB.prepare('SELECT body FROM ai_explanations WHERE key = ?').bind(key).first();
  if (hit) return ok({ explanation: JSON.parse(hit.body), cached: true });
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'Please wait a moment before asking for another explanation.');
  const explanation = await explainItems(env, { kind, subject, lang, title, items, context, className });
  await env.DB.prepare('INSERT OR REPLACE INTO ai_explanations (key, kind, body, created_at) VALUES (?, ?, ?, ?)').bind(key, kind, JSON.stringify(explanation), now()).run();
  return ok({ explanation, cached: false });
}
