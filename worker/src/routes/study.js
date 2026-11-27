// The study space: chats a student (or a teacher) keeps and comes back to, with
// photos and documents, questions found and solved one by one, notes explained,
// revision quizzes and their marking. Everything belongs to the signed-in user.
import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { isPro, requireAccess, requireUser } from '../lib/auth.js';
import { int, oneOf, str } from '../lib/validate.js';
import { uuid } from '../lib/crypto.js';
import { today } from '../lib/notify.js';
import { subjectOr } from '../lib/subjects.js';
import { markAnswer } from '../lib/ai.js';
import { KINDS, looksScanned, readDocument } from '../lib/docs.js';
import { askWhatToDo, chatReply, decide, explainNotes, findQuestions, lessonNotes, lessonPlan, makeQuestions, readAnswers, solveOne, summarise } from '../lib/study.js';
import { AUDIO_TYPES, transcribe } from '../lib/llm.js';

// Daily study actions (each answer, solution, explanation, quiz or marking).
export const STUDY_LIMIT = { pro: 150, free: 10 };
const MAX_FILES = 40;
const MAX_FILE_BYTES = 5 * 1024 * 1024;

const modeOf = (user) => (user.role === 'teacher' ? 'teacher' : user.role === 'parent' ? 'parent' : 'student');
const parse = (row) => ({ id: row.id, role: row.role, kind: row.kind, body: JSON.parse(row.body), createdAt: row.created_at });

async function chatOf(env, user, id) {
  const chat = await env.DB.prepare('SELECT * FROM study_chats WHERE id = ? AND user_id = ? AND deleted_at IS NULL').bind(id, user.id).first();
  if (!chat) throw new HttpError(404, 'This chat was not found.', 'not_found');
  return chat;
}

async function addMessage(env, chatId, role, kind, body) {
  const id = uuid();
  const t = now();
  await env.DB.batch([
    env.DB.prepare('INSERT INTO study_messages (id, chat_id, role, kind, body, created_at) VALUES (?, ?, ?, ?, ?, ?)').bind(id, chatId, role, kind, JSON.stringify(body), t),
    env.DB.prepare('UPDATE study_chats SET updated_at = ? WHERE id = ?').bind(t, chatId),
  ]);
  return { id, role, kind, body, createdAt: t };
}

async function useOne(env, user) {
  const tier = isPro(user, env) ? 'pro' : 'free';
  const row = await env.DB.prepare('SELECT study FROM ai_usage WHERE user_id = ? AND day = ?').bind(user.id, today()).first();
  if ((row?.study || 0) >= STUDY_LIMIT[tier]) throw new HttpError(402, 'You have reached today’s study limit. It starts again tomorrow.', 'quota');
  await env.DB.prepare(
    `INSERT INTO ai_usage (user_id, day, asks, marks, photos, study) VALUES (?, ?, 0, 0, 0, 1)
     ON CONFLICT(user_id, day) DO UPDATE SET study = study + 1`
  )
    .bind(user.id, today())
    .run();
}

// Is a message a question to solve and explain (a problem, a definition, an
// explanation asked for), rather than small talk or a follow-up about what was
// just said (which gets a conversational answer)?
const SMALL_TALK = /^(hi|hello|hey|thanks|thank you|ok|okay|good|great|nice|cool|yes|no|bye|merci|bonjour|salut|d'accord|oui|non)\b[\s!.?]*$/i;
const FOLLOW_UP = /\b(step \d+|this step|that step|previous|above|you said|again|repeat|slower|simpler|what do you mean|i don'?t understand|je ne comprends pas|encore|l'étape)\b/i;
export const looksLikeQuestion = (t) => String(t || '').trim().length >= 12 && !SMALL_TALK.test(String(t).trim()) && !FOLLOW_UP.test(String(t));

// Each message in a few words, so the AI knows what was already done in the
// chat (a solution, revision questions, notes...), not only what was typed.
function brief(kind, body) {
  const b = typeof body === 'string' ? JSON.parse(body) : body;
  switch (kind) {
    case 'text':
      return String(b.text || '').replace(/^…$/, '(sent files)');
    case 'solution':
      return `[I solved and explained: ${String(b.question).slice(0, 300)} Answer: ${String(b.answer).slice(0, 200)}]`;
    case 'questions':
      return `[I found ${b.questions.length} questions in ${b.title || 'the paper'} and solved them one by one]`;
    case 'notes':
      return `[I explained the notes: ${b.title}]`;
    case 'summary':
      return `[I summarised: ${b.title}]`;
    case 'lessonNotes':
      return `[I wrote lesson notes: ${b.title}]`;
    case 'lessonPlan':
      return `[I wrote a ${b.minutes} minute lesson plan: ${b.title}]`;
    case 'quiz':
      return `[I set revision questions, "${b.title}": ${b.questions.map((q) => `${q.n}. ${String(q.text).slice(0, 120)}`).join(' ')}]`;
    case 'marked_all':
      return `[I marked the answers: ${b.got}/${b.total} (${b.score}%)]`;
    case 'marked':
      return `[I marked an answer: ${b.awarded}/${b.total}]`;
    default:
      return '';
  }
}

const shortTitle = (t) => String(t || '').replace(/\s+/g, ' ').trim().slice(0, 60) || 'New chat';
const settingsOf = (user, chat) => ({ subject: chat.subject || null, className: user.class_name, lang: user.lang === 'fr' ? 'fr' : 'en', mode: modeOf(user) });

// Files of a chat: their text joined (for context) and photos (for vision).
async function filesOf(env, chatId, ids) {
  const { results } = ids?.length
    ? await env.DB.prepare(`SELECT * FROM study_files WHERE chat_id = ? AND id IN (${ids.map(() => '?').join(',')}) ORDER BY created_at`).bind(chatId, ...ids).all()
    : await env.DB.prepare('SELECT * FROM study_files WHERE chat_id = ? ORDER BY created_at').bind(chatId).all();
  return {
    text: results.filter((f) => f.text).map((f) => `[${f.name}]\n${f.text}`).join('\n\n'),
    images: results.filter((f) => f.kind === 'image' && f.image).map((f) => ({ mediaType: f.mime, data: f.image })),
    list: results.map((f) => ({ id: f.id, name: f.name, kind: f.kind })),
  };
}

// ---------- chats ----------
export async function listChats(request, env) {
  const user = await requireUser(request, env);
  const { results } = await env.DB.prepare('SELECT id, title, subject, updated_at FROM study_chats WHERE user_id = ? AND deleted_at IS NULL ORDER BY updated_at DESC LIMIT 200').bind(user.id).all();
  return ok({ chats: results.map((c) => ({ id: c.id, title: c.title, subject: c.subject, updatedAt: c.updated_at })) });
}

export async function createChat(request, env) {
  const user = await requireUser(request, env);
  const b = await readJson(request);
  const id = uuid();
  const t = now();
  const subject = b.subject ? subjectOr(b.subject) : null;
  await env.DB.prepare('INSERT INTO study_chats (id, user_id, title, mode, subject, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .bind(id, user.id, shortTitle(b.title || 'New chat'), modeOf(user), subject, t, t)
    .run();
  return created({ chat: { id, title: shortTitle(b.title || 'New chat'), subject, updatedAt: t } });
}

export async function getChat(request, env, id) {
  const user = await requireUser(request, env);
  const chat = await chatOf(env, user, id);
  const { results } = await env.DB.prepare('SELECT * FROM study_messages WHERE chat_id = ? ORDER BY created_at').bind(chat.id).all();
  const files = await env.DB.prepare('SELECT id, name, kind, pages, size FROM study_files WHERE chat_id = ? ORDER BY created_at').bind(chat.id).all();
  return ok({ chat: { id: chat.id, title: chat.title, subject: chat.subject, updatedAt: chat.updated_at }, messages: results.map(parse), files: files.results });
}

export async function patchChat(request, env, id) {
  const user = await requireUser(request, env);
  const chat = await chatOf(env, user, id);
  const b = await readJson(request);
  const title = b.title !== undefined ? shortTitle(str(b.title, 'Title', { max: 80 })) : chat.title;
  const subject = b.subject !== undefined ? (b.subject ? subjectOr(b.subject) : null) : chat.subject;
  await env.DB.prepare('UPDATE study_chats SET title = ?, subject = ?, updated_at = ? WHERE id = ?').bind(title, subject, now(), chat.id).run();
  return ok({ chat: { id: chat.id, title, subject } });
}

export async function deleteChat(request, env, id) {
  const user = await requireUser(request, env);
  const chat = await chatOf(env, user, id);
  await env.DB.batch([
    env.DB.prepare('UPDATE study_chats SET deleted_at = ? WHERE id = ?').bind(now(), chat.id),
    env.DB.prepare('DELETE FROM study_files WHERE chat_id = ?').bind(chat.id),
    env.DB.prepare('DELETE FROM study_messages WHERE chat_id = ?').bind(chat.id),
  ]);
  return ok({ deleted: true });
}

// ---------- files ----------
// POST /v1/study/chats/:id/files { name, mime, base64 }
export async function addFile(request, env, id) {
  const user = await requireUser(request, env);
  requireAccess(user, env);
  const chat = await chatOf(env, user, id);
  const b = await readJson(request, 7 * 1024 * 1024);
  const name = str(b.name, 'File name', { min: 1, max: 160 });
  const mime = oneOf(b.mime, 'File type', Object.keys(KINDS));
  const data = String(b.base64 || '').replace(/^data:[^,]+,/, '');
  const bytes = Uint8Array.from(Buffer.from(data, 'base64'));
  if (!bytes.length) throw new HttpError(400, 'The file is empty.', 'invalid_input');
  if (bytes.length > MAX_FILE_BYTES) throw new HttpError(413, 'This file is larger than 5 MB. Send a smaller file, or photos of the pages.', 'too_large');
  const count = await env.DB.prepare('SELECT COUNT(*) AS n FROM study_files WHERE chat_id = ?').bind(chat.id).first();
  if ((count?.n || 0) >= MAX_FILES) throw new HttpError(400, 'This chat has many files already. Start a new chat for new material.', 'too_many');
  const doc = await readDocument(mime, bytes);
  const fid = uuid();
  await env.DB.prepare('INSERT INTO study_files (id, chat_id, user_id, name, mime, kind, size, pages, text, image, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(fid, chat.id, user.id, name, mime, doc.kind, bytes.length, doc.pages, doc.text, doc.kind === 'image' ? data : null, now())
    .run();
  const words = doc.text ? doc.text.split(/\s+/).filter(Boolean).length : 0;
  return created({ file: { id: fid, name, kind: doc.kind, pages: doc.pages, words, scanned: looksScanned(doc) } });
}

// ---------- asking ----------
// POST /v1/study/chats/:id/ask { action, text?, fileIds?, setId?, n?, quizId?, answer?, mcq?, structured? }
export async function ask(request, env, id) {
  const user = await requireUser(request, env);
  requireAccess(user, env);
  const chat = await chatOf(env, user, id);
  const b = await readJson(request, 64 * 1024);
  let action = oneOf(b.action || 'chat', 'Action', ['auto', 'chat', 'find', 'solve', 'solve_text', 'notes', 'quiz', 'mark', 'mark_all', 'lesson_notes', 'lesson_plan', 'summary']);
  if (action === 'lesson_plan' && user.role !== 'teacher') throw new HttpError(403, 'Lesson plans are for teachers.', 'forbidden');
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'You are going too quickly. Wait a moment.');
  const opts = settingsOf(user, chat);
  let fileIds = Array.isArray(b.fileIds) ? b.fileIds.filter((x) => typeof x === 'string').slice(0, 20) : [];
  const text = b.text ? str(b.text, 'Message', { max: 8000 }) : '';
  // What the person asked, shown in the chat (find, notes and quiz)
  let note = b.note ? str(b.note, 'Note', { max: 300 }) : '';
  const out = [];
  // The person's message is saved only once the AI has answered, so a failed
  // attempt leaves nothing half done in the chat.
  // A question about one step of a solution: kept with that step.
  const stepOf = b.stepOf && typeof b.stepOf === 'object' ? { id: str(b.stepOf.id, 'Solution', { max: 64 }), step: int(b.stepOf.step, 'Step', { min: 0, max: 20 }) } : null;
  const said = async (t, files) => t && out.push(await addMessage(env, chat.id, 'user', 'text', { text: t, files: fileIds.length ? files.list : [], ...(stepOf ? { stepOf } : {}) }));

  // The first message names the chat.
  const first = !(await env.DB.prepare('SELECT 1 FROM study_messages WHERE chat_id = ? LIMIT 1').bind(chat.id).first());

  // One chat that does everything: what the message asks for decides the task.
  let plan = null;
  let earlier = ''; // what the chat was about, for "a test on it", "the same topic"
  if (action === 'auto') {
    const { results: before } = await env.DB.prepare('SELECT role, kind, body FROM study_messages WHERE chat_id = ? ORDER BY created_at DESC LIMIT 6').bind(chat.id).all();
    earlier = before
      .reverse()
      .map((m) => `${m.role === 'assistant' ? 'Assistant' : 'Person'}: ${brief(m.kind, m.body).slice(0, 600)}`)
      .filter((l) => !l.endsWith(': '))
      .join('\n');
    if (!text && !fileIds.length) throw new HttpError(400, 'Write a message or add a file.', 'invalid_input');
    const last = await env.DB.prepare("SELECT kind, body FROM study_messages WHERE chat_id = ? AND role = 'assistant' ORDER BY created_at DESC LIMIT 1").bind(chat.id).first();
    const lastBody = last ? JSON.parse(last.body) : null;
    // files sent last time, waiting for the instruction now given
    if (!fileIds.length && lastBody?.pendingFiles?.length) fileIds = lastBody.pendingFiles;
    if (fileIds.length && !text) {
      // nothing said with them: ask what to do first
      const files = await filesOf(env, chat.id, fileIds);
      await said('…', files);
      out.push(await addMessage(env, chat.id, 'assistant', 'text', { text: askWhatToDo(files.list, opts.mode, opts.lang), pendingFiles: fileIds }));
      return ok({ messages: out });
    }
    const files = fileIds.length ? await filesOf(env, chat.id, fileIds) : null;
    const quizRow = await env.DB.prepare("SELECT body FROM study_messages WHERE chat_id = ? AND kind = 'quiz' ORDER BY created_at DESC LIMIT 1").bind(chat.id).first();
    const quizOpen = quizRow ? JSON.parse(quizRow.body).title || 'Revision questions' : null;
    plan = (await decide(env, { text, files, role: user.role, quizOpen, lastAnswer: lastBody?.text || lastBody?.title || lastBody?.question })) || {
      intent: files ? (/note|explain|summar/i.test(text) ? 'notes' : 'solve') : looksLikeQuestion(text) ? 'solve_text' : 'chat',
    };
    if (plan.intent === 'lesson_plan' && user.role !== 'teacher') plan.intent = 'lesson_notes';
    if (plan.intent === 'mark' && !quizRow) plan.intent = 'chat';
    if ((plan.intent === 'notes' || plan.intent === 'summary' || plan.intent === 'solve') && !files) plan.intent = plan.intent === 'solve' ? 'solve_text' : plan.intent === 'notes' ? 'solve_text' : 'summary';
    action = { solve: 'find', solve_text: 'solve_text', notes: 'notes', summary: 'summary', quiz: 'quiz', lesson_notes: 'lesson_notes', lesson_plan: 'lesson_plan', mark: 'mark_all', chat: 'chat' }[plan.intent];
    note = text.slice(0, 300) === text ? text : `${text.slice(0, 297)}...`;
  }

  if (action === 'chat') {
    if (!text && !fileIds.length) throw new HttpError(400, 'Write a message or add a file.', 'invalid_input');
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const { results } = await env.DB.prepare('SELECT role, kind, body FROM study_messages WHERE chat_id = ? ORDER BY created_at DESC LIMIT 14').bind(chat.id).all();
    const history = results
      .reverse()
      .map((m) => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: brief(m.kind, m.body).slice(0, 4000) }))
      .filter((m) => m.content);
    while (history.length && history[0].role !== 'user') history.shift();
    const all = await filesOf(env, chat.id, null);
    // Asked in the middle of a spoken explanation: what was being explained.
    const during = b.context ? str(b.context, 'Context', { max: 3000 }) : '';
    if (!during && !stepOf && !plan && looksLikeQuestion(text)) {
      // A real question (a problem, a definition, an explanation to give):
      // solved and explained step by step, not just answered in a line.
      const sol = await solveOne(env, { question: text, images: fileIds.length ? files.images.slice(0, 2) : [], ...opts });
      await said(text, files);
      out.push(await addMessage(env, chat.id, 'assistant', 'solution', { question: text, ...sol }));
    } else {
      const message = during
        ? `${opts.mode === 'teacher' ? 'The teacher' : 'The student'} interrupted your spoken explanation to ask a question. You were explaining this:\n"""\n${during}\n"""\nAnswer the question briefly and clearly (it will be read aloud), then stop: the explanation continues after your answer.\n\nQuestion: ${text}`
        : text || 'Explain what is in the file I just shared.';
      const reply = await chatReply(env, { history, message, material: all.text, images: fileIds.length ? files.images.slice(0, 4) : [], ...opts });
      await said(text || '…', files);
      out.push(await addMessage(env, chat.id, 'assistant', 'text', { text: reply, ...(stepOf ? { stepOf } : {}) }));
    }
    if (first && text) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(text), chat.id).run();
  } else if (action === 'find') {
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const source = text ? `${text}\n\n${files.text}` : files.text;
    if (!source.trim() && !files.images.length) throw new HttpError(400, 'Add a photo or a document with the questions first.', 'invalid_input');
    const found = await findQuestions(env, { text: source, images: files.images.slice(0, 12), ...opts });
    if (!found.questions.length && plan) {
      // no questions in it: these are notes, so they are explained instead
      const r = await explainNotes(env, { text: [text, files.text].filter(Boolean).join('\n\n'), images: files.images, ...opts });
      await said(note, files);
      out.push(await addMessage(env, chat.id, 'assistant', 'notes', r));
      if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(r.title), chat.id).run();
      return ok({ messages: out });
    }
    if (!found.questions.length) throw new HttpError(422, 'No questions were found in this material. If it is notes, choose "Explain these notes" instead.', 'no_questions');
    await said(note, files);
    out.push(await addMessage(env, chat.id, 'assistant', 'questions', { setId: uuid(), title: found.title, fileIds: files.list.map((f) => f.id), questions: found.questions }));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(found.title), chat.id).run();
  } else if (action === 'solve') {
    const setId = str(b.setId, 'Question set', { max: 64 });
    const n = int(b.n, 'Question', { min: 1, max: 200 });
    const { results } = await env.DB.prepare("SELECT body FROM study_messages WHERE chat_id = ? AND kind = 'questions'").bind(chat.id).all();
    const set = results.map((r) => JSON.parse(r.body)).find((x) => x.setId === setId);
    const q = set?.questions.find((x) => x.n === n);
    if (!q) throw new HttpError(404, 'This question was not found.', 'not_found');
    await useOne(env, user);
    // A question about a picture: show the model the photos it came from.
    const imgs = /diagram|figure|graph|table|shown|below|above/i.test(q.text) ? (await filesOf(env, chat.id, set.fileIds || [])).images.slice(0, 2) : [];
    const full = q.options?.length ? `${q.text}\n${q.options.join('\n')}` : q.text;
    const sol = await solveOne(env, { question: full, images: imgs, ...opts });
    out.push(await addMessage(env, chat.id, 'assistant', 'solution', { setId, n, label: q.label, type: q.type, question: full, ...sol }));
  } else if (action === 'solve_text') {
    if (!text) throw new HttpError(400, 'Write the question to solve.', 'invalid_input');
    await useOne(env, user);
    const files = fileIds.length ? await filesOf(env, chat.id, fileIds) : { list: [], images: [] };
    const sol = await solveOne(env, { question: text, images: files.images.slice(0, 2), ...opts });
    await said(text, files);
    out.push(await addMessage(env, chat.id, 'assistant', 'solution', { question: text, ...sol }));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(text), chat.id).run();
  } else if (action === 'notes') {
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const r = await explainNotes(env, { text: [text, files.text].filter(Boolean).join('\n\n'), images: files.images, ...opts });
    await said(note, files);
    out.push(await addMessage(env, chat.id, 'assistant', 'notes', r));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(r.title), chat.id).run();
  } else if (action === 'quiz') {
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const r = await makeQuestions(env, { text: [text, files.text, !fileIds.length && earlier ? `Earlier in this chat:\n${earlier}` : ''].filter(Boolean).join('\n\n'), images: files.images, mcq: plan?.mcq ?? b.mcq ?? (opts.mode === 'teacher' ? 10 : 5), structured: plan?.structured ?? b.structured ?? (opts.mode === 'teacher' ? 5 : 3), ...opts });
    await said(note, files);
    out.push(await addMessage(env, chat.id, 'assistant', 'quiz', { quizId: uuid(), ...r }));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(r.title), chat.id).run();
  } else if (action === 'lesson_notes' || action === 'lesson_plan') {
    // From the topic typed, or the notes and photos just added.
    const topic = [text, !fileIds.length && earlier ? `(Earlier in this chat:\n${earlier})` : ''].filter(Boolean).join('\n');
    if (!topic && !fileIds.length) throw new HttpError(400, 'Say the topic and the class, for example "Photosynthesis, Form 3".', 'invalid_input');
    const minutes = int(plan?.minutes ? Math.min(180, Math.max(20, plan.minutes)) : (b.minutes ?? 40), 'Lesson length', { min: 20, max: 180 });
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const material = fileIds.length ? { text: files.text, images: files.images } : {};
    const r = action === 'lesson_notes' ? await lessonNotes(env, { topic, ...material, ...opts }) : await lessonPlan(env, { topic, ...material, minutes, ...opts });
    await said(note || text, files);
    out.push(await addMessage(env, chat.id, 'assistant', action === 'lesson_notes' ? 'lessonNotes' : 'lessonPlan', r));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(r.title), chat.id).run();
  } else if (action === 'summary') {
    await useOne(env, user);
    const files = await filesOf(env, chat.id, fileIds.length ? fileIds : null);
    const r = await summarise(env, { text: [text, files.text, !fileIds.length && earlier ? `Earlier in this chat:\n${earlier}` : ''].filter(Boolean).join('\n\n'), images: files.images, ...opts });
    await said(note, files);
    out.push(await addMessage(env, chat.id, 'assistant', 'summary', r));
    if (first) await env.DB.prepare('UPDATE study_chats SET title = ? WHERE id = ?').bind(shortTitle(r.title), chat.id).run();
  } else if (action === 'mark') {
    const quizId = str(b.quizId, 'Quiz', { max: 64 });
    const n = int(b.n, 'Question', { min: 1, max: 100 });
    const { results } = await env.DB.prepare("SELECT body FROM study_messages WHERE chat_id = ? AND kind = 'quiz'").bind(chat.id).all();
    const quiz = results.map((r) => JSON.parse(r.body)).find((x) => x.quizId === quizId);
    const q = quiz?.questions.find((x) => x.n === n && x.type === 'structured');
    if (!q) throw new HttpError(404, 'This question was not found.', 'not_found');
    const answer = str(b.answer, 'Answer', { min: 1, max: 6000 });
    await useOne(env, user);
    const m = await markAnswer(env, { question: q.text, markScheme: q.scheme.map((p) => ({ point: p.point, marks: p.marks })), maxMarks: q.marks, answerText: answer, subject: opts.subject || 'biology' });
    out.push(await addMessage(env, chat.id, 'assistant', 'marked', { quizId, n, answer, ...m, total: q.marks }));
  } else if (action === 'mark_all') {
    const row = await env.DB.prepare("SELECT body FROM study_messages WHERE chat_id = ? AND kind = 'quiz' ORDER BY created_at DESC LIMIT 1").bind(chat.id).first();
    if (!row) throw new HttpError(404, 'There are no questions to mark in this chat yet.', 'not_found');
    const quiz = JSON.parse(row.body);
    await useOne(env, user);
    const files = fileIds.length ? await filesOf(env, chat.id, fileIds) : { list: [], images: [], text: '' };
    const read = await readAnswers(env, { quiz, text: [text, files.text].filter(Boolean).join('\n'), images: files.images });
    const marks = [];
    for (const q of quiz.questions) {
      const a = String(read.answers.find((x) => x.n === q.n)?.answer || '').trim();
      if (q.type === 'mcq') {
        const pick = (a.match(/^\(?([A-D])\b/i) || a.match(/\b([A-D])\b/))?.[1]?.toUpperCase() || null;
        marks.push({ n: q.n, type: 'mcq', answer: pick, correct: q.answer, explanation: q.explanation, awarded: pick === q.answer ? 1 : 0, total: 1 });
      } else if (!a) {
        marks.push({ n: q.n, type: 'structured', answer: '', awarded: 0, total: q.marks, feedback: opts.lang === 'fr' ? 'Pas de réponse.' : 'Not answered.' });
      } else {
        const m = await markAnswer(env, { question: q.text, markScheme: q.scheme.map((p) => ({ point: p.point, marks: p.marks })), maxMarks: q.marks, answerText: a, subject: opts.subject || 'biology' });
        marks.push({ n: q.n, type: 'structured', answer: a, awarded: m.awarded, total: q.marks, feedback: m.feedback, criteria: m.criteria });
      }
    }
    const got = marks.reduce((x, m) => x + m.awarded, 0);
    const total = marks.reduce((x, m) => x + m.total, 0);
    await said(text || note || '…', files);
    out.push(await addMessage(env, chat.id, 'assistant', 'marked_all', { quizId: quiz.quizId, got, total, score: total ? Math.round((got / total) * 100) : 0, marks }));
  }
  return ok({ messages: out });
}

// POST /v1/study/transcribe { base64, mime }: what the person said, as text
// (Whisper). The recording is not kept.
export async function transcribeSpeech(request, env) {
  const user = await requireUser(request, env);
  requireAccess(user, env);
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'You are going too quickly. Wait a moment.');
  const b = await readJson(request, 6 * 1024 * 1024);
  const mime = oneOf(String(b.mime || '').split(';')[0], 'Recording type', AUDIO_TYPES);
  const bytes = Uint8Array.from(Buffer.from(String(b.base64 || '').replace(/^data:[^,]+,/, ''), 'base64'));
  if (bytes.length < 800) throw new HttpError(400, 'Nothing was heard. Hold the phone closer and speak again.', 'too_short');
  if (bytes.length > 4 * 1024 * 1024) throw new HttpError(413, 'That recording is too long. Keep it under two minutes.', 'too_large');
  const text = await transcribe(env, bytes, mime, user.lang === 'fr' ? 'fr' : 'en');
  if (!text || text.length < 2) throw new HttpError(422, 'Nothing was heard. Speak again a little louder.', 'nothing_heard');
  return ok({ text: text.slice(0, 4000) });
}
