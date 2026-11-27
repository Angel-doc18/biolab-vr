// The AI behind the study space. Every task asks for JSON, checks its shape,
// and tries once more (at temperature 0) when a reply is malformed. Solutions
// are checked by a second, independent "examiner" pass and solved again when
// the check finds a mistake, so what a student reads is correct.
// mode 'teacher' speaks to a teacher (a colleague), not to a student.
import { z } from 'zod';
import { HttpError } from './http.js';
import { clean, groqChat, groqConfigured } from './groq.js';
import { checkSolution, classGuide, plainBoard } from './ai.js';
import { subjectTitle } from './subjects.js';

const RULES = `Rules for everything you write:
- Be correct. Follow the Cameroon GCE (MINESEC) syllabus and the methods taught in Cameroonian secondary schools. Never invent facts, data or numbers the material does not give; if something is missing or unclear, say so and state the assumption you make.
- Write maths and science in plain text with units: v = u + at, x², H₂O, CO₂, √2, ½, →, ⇌, ≤, π. Never use LaTeX, markdown, asterisks or code.
- Never use em dashes.`;

const who = (mode) =>
  mode === 'teacher'
    ? 'You are an expert Cameroonian secondary school teacher and GCE examiner helping a colleague, another teacher. Speak to them as a fellow teacher (never call them a student) and add what helps them teach and mark: common student errors and how marks are earned.'
    : 'You are the Klass8 tutor, a patient, experienced Cameroonian secondary school teacher, working with one student.';

const context = ({ subject, className, lang, mode }) =>
  [subject ? `Subject: ${subjectTitle(subject)}.` : null, mode !== 'teacher' ? classGuide(className) : className ? `The class concerned is ${className}.` : null, `Write in ${lang === 'fr' ? 'French' : 'English'}.`].filter(Boolean).join('\n');

function parseJson(text) {
  return JSON.parse(clean(text).replace(/^```(?:json)?\s*|\s*```$/g, ''));
}

// One JSON task with a shape check and one retry. images: [{ mediaType, data }]
async function task(env, { system, prompt, images = [], schema, maxTokens = 6000, reasoning = 'medium' }) {
  if (!groqConfigured(env)) throw new HttpError(503, 'The AI is not available yet.', 'ai_unavailable');
  const content = images.length ? [{ type: 'text', text: prompt }, ...images.map((im) => ({ type: 'image_url', image_url: { url: `data:${im.mediaType};base64,${im.data}` } }))] : prompt;
  let last = null;
  for (const temperature of [0.2, 0]) {
    const { text } = await groqChat(env, { json: true, vision: images.length > 0, maxTokens, temperature, reasoning, patience: 55_000, messages: [{ role: 'system', content: system }, { role: 'user', content }] });
    try {
      return schema.parse(parseJson(text));
    } catch (e) {
      last = e;
    }
  }
  console.error('study_task_malformed', String(last?.message || last).slice(0, 200));
  throw new HttpError(502, 'The AI could not finish this just now. Please try again.', 'ai_failed');
}

const s = (max) => z.coerce.string().transform((v) => clean(v).slice(0, max));

// ---------- 1. the questions in a document or photos ----------
const FIND_SYSTEM = (mode) => `${who(mode)}
You receive study material: an examination paper, a worksheet, homework, a textbook page or handwritten questions, as text and/or photos. Find every question in it and write each one out exactly as it is, in order, so it can be solved one by one.
- Keep each question whole: its stem, every part ((a), (b), (i), (ii)), every number with its unit, every table, and every option of a multiple choice question.
- If a question refers to a diagram, graph or table you can see, describe what it shows in brackets inside the question, with all its labels and values, so the question can be solved without the picture.
- "type" is "mcq" for multiple choice (options A to D or E), otherwise "structured".
- "marks" is the number of marks printed for the question, or null.
- Skip instructions to candidates, headers, page numbers and answer lines.
- If the material contains no questions at all (for example only notes), return an empty list.
${RULES}
Reply with JSON only: {"title": string (a short name for this material, e.g. "GCE O Level Biology Paper 2, June 2019"), "questions": [{"label": string (the number as printed, e.g. "3" or "2(b)"), "type": "mcq" | "structured", "text": string, "options": [string] (for mcq, each starting with its letter, e.g. "A. 25 cm"), "marks": number | null}]}`;

const Found = z.object({
  title: s(160).default(''),
  questions: z
    .array(
      z.object({
        label: s(20).default(''),
        type: z.enum(['mcq', 'structured']).catch('structured'),
        text: s(6000),
        options: z.array(s(400)).default([]),
        marks: z.coerce.number().nullable().catch(null).default(null),
      })
    )
    .default([]),
});

// Splits long text at page breaks into pieces of about `size` characters.
function pieces(text, size = 24_000) {
  const pages = String(text || '').split(/(?=--- Page \d+ ---)/);
  const out = [];
  let cur = '';
  for (const p of pages) {
    if (cur && cur.length + p.length > size) {
      out.push(cur);
      cur = '';
    }
    cur += p;
    while (cur.length > size) {
      out.push(cur.slice(0, size));
      cur = cur.slice(size);
    }
  }
  if (cur.trim()) out.push(cur);
  return out;
}

export async function findQuestions(env, { text, images = [], subject, className, lang, mode, onProgress }) {
  const ctx = context({ subject, className, lang, mode });
  const jobs = [...pieces(text).map((t) => ({ prompt: `${ctx}\n\nMaterial:\n"""\n${t}\n"""` })), ...chunk(images, 3).map((ims) => ({ prompt: `${ctx}\n\nThe material is in the photos.`, images: ims }))];
  if (!jobs.length) throw new HttpError(400, 'Add a photo, a document or the questions as text.', 'invalid_input');
  let title = '';
  const questions = [];
  for (let i = 0; i < jobs.length; i++) {
    onProgress?.(i, jobs.length);
    const r = await task(env, { system: FIND_SYSTEM(mode), prompt: jobs[i].prompt, images: jobs[i].images, schema: Found, maxTokens: 12000, reasoning: 'low' });
    title = title || r.title;
    for (const q of r.questions) if (q.text.length >= 3) questions.push(q);
  }
  return { title, questions: questions.slice(0, 120).map((q, i) => ({ n: i + 1, ...q, options: q.type === 'mcq' ? q.options.slice(0, 6) : [] })) };
}
const chunk = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));

// ---------- 2. one question, solved step by step (checked by an examiner) ----------
const SOLVE_SYSTEM = (mode) => `${who(mode)} You solve one question on the board, step by step, the way a good teacher does in class.
- "interpretation": first, in two or three simple sentences, say what the question is really asking and what kind of answer it wants (a definition, a calculation, an explanation, a choice), and any key word to notice.
- "steps": between 3 and 8 steps in order: what we are given, the idea, law or formula needed, each stage of the working, and the final answer. "board" is what is written on the board for that step (at most 5 short lines separated by \\n). "say" is what the teacher says aloud while writing it: two to four short sentences explaining why, written as words for a speech engine ("v equals u plus a t", "metres per second", "H two O"), no symbols.
- A step may carry a "graph" when the question asks for a graph or sketch, or when a graph makes the answer clear: {"title": string, "xLabel": string, "yLabel": string, "functions": [{"expr": string, "label": string}], "points": [{"x": number, "y": number, "label": string}], "xMin": number, "xMax": number, "yMin": number, "yMax": number}. "expr" uses x with + - * / ^, parentheses and sqrt, sin, cos, tan, log, ln, exp, abs, pi (for example "2*x^2 - 3*x + 1"). Use points for plotted data. Omit "graph" otherwise.
- Multiple choice: work out the answer, give the letter and the option, then say in one short step why each other option is wrong.
- Definitions, explanations and essays are also taught in steps: the key idea, the explanation, an example, then how to write it in the examination for full marks.
- "answer": the final answer in one or two short lines, with units (for multiple choice: the letter and the option).
- "check": one sentence: how to check the answer, or the mistake most often made in this kind of question.
- "similar": one new practice question of the same kind, with different numbers or examples. Do not answer it.${mode === 'teacher' ? '\n- "markingGuide": how marks are earned for this question, as short points with their marks (use the printed marks if shown), the way a GCE marking guide is written.' : ''}
${RULES}
Reply with JSON only: {"interpretation": string, "steps": [{"board": string, "say": string, "graph"?: object}], "answer": string, "check": string, "similar": string${mode === 'teacher' ? ', "markingGuide": [{"point": string, "marks": number}]' : ''}}`;

const Graph = z
  .object({
    title: s(120).default(''),
    xLabel: s(60).default('x'),
    yLabel: s(60).default('y'),
    functions: z.array(z.object({ expr: z.coerce.string().transform((v) => v.slice(0, 120)), label: s(60).default('') })).default([]),
    points: z.array(z.object({ x: z.coerce.number(), y: z.coerce.number(), label: s(40).default('') })).default([]),
    xMin: z.coerce.number().optional(),
    xMax: z.coerce.number().optional(),
    yMin: z.coerce.number().optional(),
    yMax: z.coerce.number().optional(),
  })
  .refine((g) => g.functions.length || g.points.length);

const Solved = z.object({
  interpretation: s(1200).default(''),
  steps: z
    .array(z.object({ board: z.coerce.string(), say: z.coerce.string().default(''), graph: Graph.optional().catch(undefined) }))
    .min(2)
    .max(10),
  answer: z.coerce.string(),
  check: s(600).default(''),
  similar: s(1200).default(''),
  markingGuide: z.array(z.object({ point: s(400), marks: z.coerce.number().catch(1) })).default([]),
});

const spoken = (t) => clean(t).replace(/\*\*|[#`$]/g, '').replace(/\s+/g, ' ').trim();

export async function solveOne(env, { question, subject, className, lang, mode, images = [] }) {
  const ctx = context({ subject, className, lang, mode });
  let note = null;
  let best = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    const prompt = `${ctx}\n\nQuestion:\n"""\n${question}\n"""${note ? `\n\nA first solution was checked by an examiner and was wrong: ${note}\nSolve it again from the start and get it right.` : ''}`;
    const r = await task(env, { system: SOLVE_SYSTEM(mode), prompt, images, schema: Solved, maxTokens: 7000, reasoning: 'high' });
    const sol = {
      interpretation: r.interpretation,
      steps: r.steps.map((st) => ({ board: plainBoard(st.board), say: spoken(st.say), ...(st.graph ? { graph: st.graph } : {}) })).filter((st) => st.board || st.say),
      answer: plainBoard(r.answer),
      check: r.check,
      similar: r.similar,
      ...(mode === 'teacher' ? { markingGuide: r.markingGuide.slice(0, 15).map((p) => ({ point: p.point, marks: Math.max(0.5, Math.min(20, p.marks)) })) } : {}),
    };
    best = best || sol;
    const verdict = await checkSolution(env, { subject, className, question, solution: sol });
    if (verdict.correct) return { ...sol, checked: true };
    note = verdict.problems || 'The working or the final answer is not right.';
    best = sol;
  }
  return { ...best, checked: false };
}

// ---------- 3. notes explained ----------
const NOTES_SYSTEM = (mode) => `${who(mode)}
You receive ${mode === 'teacher' ? 'a set of notes' : "the student's notes"} (text and/or photos). Explain them fully and clearly, section by section, so ${mode === 'teacher' ? 'the teacher can teach them well' : 'the student truly understands them'}.
- Follow the order of the notes. For each section: a clear heading, a full explanation in simple words (as a good teacher explains in class), the key points to remember, and one concrete example (Cameroonian everyday examples where they help).
- Correct any mistake in the notes and say so plainly in that section ("Note: the notes say ..., but the correct fact is ...").
- "keyTerms": the important words with their exact meanings, as examiners expect them.
- "examTips": how these topics are usually asked in the GCE and how to earn full marks.${mode === 'teacher' ? '\n- "teaching": short advice on teaching these notes: the order, a demonstration or activity, and the misconceptions to watch for.' : ''}
${RULES}
Reply with JSON only: {"title": string, "summary": string (3 to 5 sentences), "sections": [{"heading": string, "explanation": string, "keyPoints": [string], "example": string}], "keyTerms": [{"term": string, "meaning": string}], "examTips": [string]${mode === 'teacher' ? ', "teaching": [string]' : ''}}`;

const Notes = z.object({
  title: s(160).default('Your notes explained'),
  summary: s(1500).default(''),
  sections: z.array(z.object({ heading: s(160), explanation: s(4000), keyPoints: z.array(s(400)).default([]), example: s(1200).default('') })).min(1),
  keyTerms: z.array(z.object({ term: s(80), meaning: s(600) })).default([]),
  examTips: z.array(s(500)).default([]),
  teaching: z.array(s(600)).default([]),
});

export async function explainNotes(env, { text, images = [], subject, className, lang, mode }) {
  const ctx = context({ subject, className, lang, mode });
  const body = String(text || '').slice(0, 60_000);
  if (!body.trim() && !images.length) throw new HttpError(400, 'Add your notes: a photo, a document or the text.', 'invalid_input');
  return task(env, { system: NOTES_SYSTEM(mode), prompt: `${ctx}\n\n${body ? `Notes:\n"""\n${body}\n"""` : 'The notes are in the photos.'}`, images: images.slice(0, 6), schema: Notes, maxTokens: 12000, reasoning: 'medium' });
}

// ---------- 4. revision questions from notes ----------
const QUIZ_SYSTEM = (mode, n) => `${who(mode)}
From the material given (notes, a lesson or a past paper), write ${n.mcq} multiple choice questions and ${n.structured} structured questions${mode === 'teacher' ? ' for the teacher to give their class' : ' for the student to revise with'}, in the style of the Cameroon GCE.
- Every question must be answerable from the material and the syllabus at this level. Cover the important ideas, not trivia. Vary them: recall, understanding, application and calculation where the topic has them.
- Multiple choice: 4 options (A to D), exactly one correct, with plausible wrong options built on common mistakes. "answer" is the letter. "explanation" says why the answer is right and why the others are wrong, briefly.
- Structured: a question with parts where natural ((a), (b)), the marks for it (2 to 12), and a mark scheme written the way GCE examiners write it: one point for each creditable fact, step or skill, each point worth 1 mark (2 only for a substantial step), so a question worth 6 marks has about 5 or 6 points, adding up exactly to the marks. Then a model answer that would earn full marks.
${RULES}
Reply with JSON only: {"title": string, "questions": [{"type": "mcq", "text": string, "options": [string, string, string, string], "answer": "A"|"B"|"C"|"D", "explanation": string} | {"type": "structured", "text": string, "marks": number, "scheme": [{"point": string, "marks": number}], "modelAnswer": string}]}`;

const Quiz = z.object({
  title: s(160).default('Revision questions'),
  questions: z
    .array(
      z.discriminatedUnion('type', [
        z.object({ type: z.literal('mcq'), text: s(1500), options: z.array(s(400)).length(4), answer: z.enum(['A', 'B', 'C', 'D']), explanation: s(1500).default('') }),
        z.object({ type: z.literal('structured'), text: s(2000), marks: z.coerce.number(), scheme: z.array(z.object({ point: s(400), marks: z.coerce.number() })).min(1), modelAnswer: s(3000).default('') }),
      ])
    )
    .min(1),
});

export async function makeQuestions(env, { text, images = [], subject, className, lang, mode, mcq = 5, structured = 3 }) {
  const ctx = context({ subject, className, lang, mode });
  const body = String(text || '').slice(0, 60_000);
  if (!body.trim() && !images.length) throw new HttpError(400, 'Add your notes first: a photo, a document or the text.', 'invalid_input');
  const n = { mcq: Math.max(0, Math.min(20, mcq)), structured: Math.max(0, Math.min(10, structured)) };
  if (!n.mcq && !n.structured) throw new HttpError(400, 'Ask for at least one question.', 'invalid_input');
  const r = await task(env, { system: QUIZ_SYSTEM(mode, n), prompt: `${ctx}\n\n${body ? `Material:\n"""\n${body}\n"""` : 'The material is in the photos.'}`, images: images.slice(0, 6), schema: Quiz, maxTokens: 12000, reasoning: 'medium' });
  return {
    title: r.title,
    questions: r.questions.map((q, i) => {
      if (q.type === 'mcq') return { n: i + 1, ...q };
      const scheme = q.scheme.slice(0, 12).map((p) => ({ point: p.point, marks: Math.max(0.5, Math.min(10, p.marks)) }));
      return { n: i + 1, ...q, scheme, marks: scheme.reduce((a, p) => a + p.marks, 0) };
    }),
  };
}

// ---------- 5. a conversation about the material ----------
const CHAT_SYSTEM = (mode) => `${who(mode)}
${mode === 'teacher' ? 'Answer the teacher' : 'Answer the student'} in a natural conversation. Use the material they shared (shown below when there is some) as your main reference. Answer the actual question first, then explain why, briefly and clearly, then offer the next useful step. Keep answers short unless asked for detail. If a question is outside school subjects, say kindly that you help with school work.
${RULES}`;

export async function chatReply(env, { history = [], message, material = '', subject, className, lang, mode, images = [] }) {
  if (!groqConfigured(env)) throw new HttpError(503, 'The AI is not available yet.', 'ai_unavailable');
  const ctx = context({ subject, className, lang, mode });
  const sys = `${CHAT_SYSTEM(mode)}\n\n${ctx}${material ? `\n\nMaterial shared in this chat:\n"""\n${String(material).slice(0, 24_000)}\n"""` : ''}`;
  const user = images.length ? [{ type: 'text', text: message }, ...images.map((im) => ({ type: 'image_url', image_url: { url: `data:${im.mediaType};base64,${im.data}` } }))] : message;
  const { text } = await groqChat(env, { vision: images.length > 0, maxTokens: 2500, temperature: 0.4, messages: [{ role: 'system', content: sys }, ...history, { role: 'user', content: user }] });
  // Plain text: no markdown emphasis or headings.
  return clean(text)
    .replace(/\*\*/g, '')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1$2')
    .replace(/^#{1,4}\s*/gm, '')
    .slice(0, 12_000);
}
