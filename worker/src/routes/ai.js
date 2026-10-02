import { HttpError, limit, now, ok, readJson } from '../lib/http.js';
import { isPro, requireUser, requireConsent } from '../lib/auth.js';
import { int, oneOf, str } from '../lib/validate.js';
import { uuid } from '../lib/crypto.js';
import { markAnswer, tutorReply } from '../lib/ai.js';
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
  const context = str(b.context, 'Context', { max: 200, optional: true });
  const subject = subjectOr(b.subject);
  const text = await tutorReply(env, history, question, { lang: user.lang, context, level: user.class_name, subject });
  await consume(env, user.id, 'asks');
  return ok({ text, asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks - 1) });
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
