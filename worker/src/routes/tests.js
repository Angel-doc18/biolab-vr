// Tests a teacher gives a class from the Assistant: a quiz made from their
// notes, set as an assignment (kind 'quiz', ref = the test id 't-...'). The
// students answer in the app and hand in once; multiple choice is marked at
// once and written answers by the AI against the marking scheme. The scores
// go to the teacher, with each student's answers.
import { HttpError, created, limit, now, ok, readJson } from '../lib/http.js';
import { requireUser } from '../lib/auth.js';
import { int, str } from '../lib/validate.js';
import { uuid } from '../lib/crypto.js';
import { notify } from '../lib/notify.js';
import { markAnswer } from '../lib/ai.js';

const testId = () => `t-${uuid().replace(/-/g, '')}`;
const total = (marks) => marks.reduce((a, m) => a + m.total, 0);
const got = (marks) => marks.reduce((a, m) => a + m.awarded, 0);
const percent = (marks) => (total(marks) ? Math.round((got(marks) / total(marks)) * 100) : 0);

// POST /v1/classes/:id/tests { chatId, quizId, title?, dueInDays }
export async function giveTest(request, env, classId) {
  const user = await requireUser(request, env, ['teacher']);
  const cls = await env.DB.prepare('SELECT * FROM classes WHERE id = ? AND teacher_id = ?').bind(classId, user.id).first();
  if (!cls) throw new HttpError(404, 'Class not found.', 'not_found');
  await limit(env.WRITE_LIMITER, `assign:${user.id}`);
  const b = await readJson(request);
  const chatId = str(b.chatId, 'Chat', { max: 64 });
  const quizId = str(b.quizId, 'Test', { max: 64 });
  const dueInDays = int(b.dueInDays ?? 7, 'Due in', { min: 1, max: 60 });
  const chat = await env.DB.prepare('SELECT id FROM study_chats WHERE id = ? AND user_id = ?').bind(chatId, user.id).first();
  if (!chat) throw new HttpError(404, 'This chat was not found.', 'not_found');
  const { results } = await env.DB.prepare("SELECT body FROM study_messages WHERE chat_id = ? AND kind = 'quiz'").bind(chatId).all();
  const quiz = results.map((r) => JSON.parse(r.body)).find((x) => x.quizId === quizId);
  if (!quiz?.questions?.length) throw new HttpError(404, 'This test was not found.', 'not_found');
  const title = str(String(b.title || quiz.title || 'Test').slice(0, 120), 'Title', { min: 3, max: 120 });
  const id = testId();
  const t = now();
  const dueAt = t + dueInDays * 86_400_000;
  const assignmentId = uuid();
  await env.DB.prepare('INSERT INTO class_tests (id, teacher_id, title, subject, body, created_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(id, user.id, title, cls.subject || null, JSON.stringify({ title, questions: quiz.questions }), t)
    .run();
  await env.DB.prepare('INSERT INTO assignments (id, class_id, teacher_id, kind, ref, title, due_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(assignmentId, classId, user.id, 'quiz', id, title, dueAt, t)
    .run();
  const { results: members } = await env.DB.prepare('SELECT student_id FROM class_members WHERE class_id = ?').bind(classId).all();
  for (const r of members) {
    await notify(env, r.student_id, 'assignment', `${user.name} set a test`, `${title} for ${cls.name}.`, { assignmentId, kind: 'quiz', ref: id, dueAt });
  }
  return created({ assignment: { id: assignmentId, kind: 'quiz', ref: id, title, dueAt }, students: members.length });
}

// The test of an assignment, for a student of that class.
async function studentTest(env, user, assignmentId) {
  const a = await env.DB.prepare(
    `SELECT a.id, a.title, a.due_at AS dueAt, c.name AS className, t.subject, t.body FROM assignments a
     JOIN class_members m ON m.class_id = a.class_id AND m.student_id = ?
     JOIN classes c ON c.id = a.class_id
     JOIN class_tests t ON t.id = a.ref
     WHERE a.id = ?`
  )
    .bind(user.id, assignmentId)
    .first();
  if (!a) throw new HttpError(404, 'This test was not found.', 'not_found');
  return { ...a, test: JSON.parse(a.body) };
}

// Before handing in, a student sees the questions without the answers.
const forStudent = (q) => (q.type === 'mcq' ? { n: q.n, type: 'mcq', text: q.text, options: q.options } : { n: q.n, type: 'structured', text: q.text, marks: q.marks });

// GET /v1/assignments/:id/test
export async function getTest(request, env, assignmentId) {
  const user = await requireUser(request, env, ['student']);
  const a = await studentTest(env, user, assignmentId);
  const done = await env.DB.prepare('SELECT answers, marks, score, submitted_at AS submittedAt FROM test_answers WHERE assignment_id = ? AND student_id = ?')
    .bind(assignmentId, user.id)
    .first();
  return ok({
    assignment: { id: a.id, title: a.title, dueAt: a.dueAt, className: a.className },
    // once handed in, the answers, explanations and schemes too
    questions: done ? a.test.questions : a.test.questions.map(forStudent),
    result: done ? { answers: JSON.parse(done.answers), marks: JSON.parse(done.marks), score: done.score, submittedAt: done.submittedAt } : null,
  });
}

// POST /v1/assignments/:id/test { answers: { "1": "B", "2": "written answer" } }
export async function submitTest(request, env, assignmentId) {
  const user = await requireUser(request, env, ['student']);
  await limit(env.AI_LIMITER, `ai:${user.id}`, 'You are going too quickly. Wait a moment.');
  const a = await studentTest(env, user, assignmentId);
  const already = await env.DB.prepare('SELECT 1 FROM test_answers WHERE assignment_id = ? AND student_id = ?').bind(assignmentId, user.id).first();
  if (already) throw new HttpError(409, 'You have already handed in this test.', 'already_done');
  const b = await readJson(request, 128 * 1024);
  const given = b.answers && typeof b.answers === 'object' ? b.answers : {};
  const answers = {};
  const marks = [];
  for (const q of a.test.questions) {
    const raw = given[String(q.n)];
    if (q.type === 'mcq') {
      const pick = typeof raw === 'string' && /^[A-D]$/.test(raw) ? raw : null;
      answers[q.n] = pick;
      marks.push({ n: q.n, awarded: pick === q.answer ? 1 : 0, total: 1 });
      continue;
    }
    const text = typeof raw === 'string' ? raw.trim().slice(0, 6000) : '';
    answers[q.n] = text;
    if (!text) {
      marks.push({ n: q.n, awarded: 0, total: q.marks, feedback: 'No answer given.' });
      continue;
    }
    // A marking failure (the AI busy) stops the hand-in: the student's
    // answers stay on their phone and they try again a minute later.
    const m = await markAnswer(env, {
      question: q.text,
      markScheme: q.scheme.map((p) => ({ point: p.point, marks: p.marks })),
      maxMarks: q.marks,
      answerText: text,
      subject: a.subject || 'biology',
    });
    marks.push({ n: q.n, awarded: m.awarded, total: q.marks, feedback: m.feedback, criteria: m.criteria });
  }
  const score = percent(marks);
  const t = now();
  await env.DB.prepare('INSERT INTO test_answers (assignment_id, student_id, answers, marks, score, submitted_at) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(assignmentId, user.id, JSON.stringify(answers), JSON.stringify(marks), score, t)
    .run();
  await env.DB.prepare(
    `INSERT INTO assignment_done (assignment_id, student_id, score, done_at) VALUES (?, ?, ?, ?)
     ON CONFLICT(assignment_id, student_id) DO UPDATE SET score = excluded.score, done_at = excluded.done_at`
  )
    .bind(assignmentId, user.id, score, t)
    .run();
  return ok({ questions: a.test.questions, result: { answers, marks, score, submittedAt: t } });
}

// GET /v1/classes/:id/assignments/:aid/results: every student's score and
// answers, and how the class did on each question.
export async function testResults(request, env, classId, assignmentId) {
  const user = await requireUser(request, env, ['teacher']);
  const a = await env.DB.prepare(
    `SELECT a.id, a.title, a.due_at AS dueAt, t.body FROM assignments a
     JOIN classes c ON c.id = a.class_id AND c.teacher_id = ?
     JOIN class_tests t ON t.id = a.ref
     WHERE a.id = ? AND a.class_id = ?`
  )
    .bind(user.id, assignmentId, classId)
    .first();
  if (!a) throw new HttpError(404, 'This test was not found.', 'not_found');
  const test = JSON.parse(a.body);
  const { results } = await env.DB.prepare(
    `SELECT u.id, u.name, r.answers, r.marks, r.score, r.submitted_at AS submittedAt FROM class_members m
     JOIN users u ON u.id = m.student_id AND u.deleted_at IS NULL
     LEFT JOIN test_answers r ON r.assignment_id = ? AND r.student_id = u.id
     WHERE m.class_id = ? ORDER BY u.name`
  )
    .bind(assignmentId, classId)
    .all();
  const students = results.map((s) => ({
    id: s.id,
    name: s.name,
    score: s.score ?? null,
    submittedAt: s.submittedAt ?? null,
    answers: s.answers ? JSON.parse(s.answers) : null,
    marks: s.marks ? JSON.parse(s.marks) : null,
  }));
  const handed = students.filter((s) => s.marks);
  const perQuestion = test.questions.map((q) => {
    const all = handed.map((s) => s.marks.find((m) => m.n === q.n)).filter(Boolean);
    return { n: q.n, pct: total(all) ? Math.round((got(all) / total(all)) * 100) : null };
  });
  return ok({
    assignment: { id: a.id, title: a.title, dueAt: a.dueAt },
    questions: test.questions,
    students,
    average: handed.length ? Math.round(handed.reduce((x, s) => x + s.score, 0) / handed.length) : null,
    perQuestion,
  });
}
