import { HttpError, limit, now, ok, readJson } from '../lib/http.js';
import { isPro, requireUser } from '../lib/auth.js';
import { int, str } from '../lib/validate.js';
import { markAnswer, tutorReply } from '../lib/ai.js';
import { today } from '../lib/notify.js';

export const AI_LIMITS = { free: { asks: 5, marks: 0 }, pro: { asks: 100, marks: 30 } };

async function usage(env, userId) {
  const row = await env.DB.prepare('SELECT asks, marks FROM ai_usage WHERE user_id = ? AND day = ?').bind(userId, today()).first();
  return row || { asks: 0, marks: 0 };
}

async function consume(env, userId, column) {
  await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, day, asks, marks) VALUES (?, ?, ?, ?)
     ON CONFLICT(user_id, day) DO UPDATE SET ${column} = ${column} + 1`
  )
    .bind(userId, today(), column === 'asks' ? 1 : 0, column === 'marks' ? 1 : 0)
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
    limits: AI_LIMITS[tier],
  });
}

export async function ask(request, env) {
  const user = await requireUser(request, env);
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
  const text = await tutorReply(env, history, question);
  await consume(env, user.id, 'asks');
  return ok({ text, asksLeft: Math.max(0, AI_LIMITS[tier].asks - used.asks - 1) });
}

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export async function mark(request, env) {
  const user = await requireUser(request, env);
  if (!isPro(user)) throw new HttpError(402, 'Mark my answer is part of Premium.', 'premium_required');
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'Please wait a moment before marking another answer.');
  const used = await usage(env, user.id);
  if (used.marks >= AI_LIMITS.pro.marks) throw new HttpError(402, 'You have reached today\'s marking limit.', 'quota');
  const b = await readJson(request, 6 * 1024 * 1024);
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
  const result = await markAnswer(env, { question, markScheme, maxMarks, answerText, image });
  await consume(env, user.id, 'marks');
  return ok({ result, marksLeft: Math.max(0, AI_LIMITS.pro.marks - used.marks - 1), markedAt: now() });
}
