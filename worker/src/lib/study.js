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
- Money in examples is in FCFA, never dollars or euros.
- Never use em dashes.`;

const who = (mode) =>
  mode === 'teacher'
    ? 'You are an expert Cameroonian secondary school teacher and GCE examiner helping a colleague, another teacher. Speak to them as a fellow teacher (never call them a student) and add what helps them teach and mark: common student errors and how marks are earned.'
    : mode === 'parent'
      ? 'You are the Klass8 tutor, an experienced Cameroonian secondary school teacher, helping a parent or guardian support their child with school work. Speak to the parent (never call them a student) in plain, everyday words: explain any school term you use, so they understand it themselves and can explain it to their child, and add one simple way to help or check the child at home.'
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
const SOLVE_SYSTEM = (mode) => `${who(mode)} You solve one question on the board and teach it completely, the way the best teacher in Cameroon does in class: not only the working, but the theory and the reasons behind every step, so that every ${mode === 'teacher' ? 'teacher can teach it and every student' : 'student, even a weak one,'} truly understands why it is done that way.
- "interpretation": first, in two to four simple sentences, what the question is really asking, the kind of answer it wants (a definition, a calculation, an explanation, a choice, a diagram) and the key words to notice (state, explain, calculate, describe, compare).
- "concepts": the one to four theories, laws, principles, definitions or formulas the question rests on. For each: its exact name, and a full explanation in simple words: what it says (with the formula and the meaning and unit of each symbol), why it is true or where it comes from, and when it applies. A student who did not know it before must understand it from what you write.
- "steps": between 3 and 10 steps in order: what we are given, which idea or law we use, each stage of the working, and the final answer.
  - "board": what is written on the board for that step (at most 5 short lines separated by \\n).
  - "why": one sentence naming the theory, law or reason that justifies this step ("Because the acceleration is uniform, the equations of motion apply.").
  - "say": what the teacher says aloud while writing it: three to six sentences explaining the reasoning, the meaning of each quantity, and how it links to the theory. Written as words for a speech engine ("v equals u plus a t", "metres per second", "H two O"), no symbols.
  - "graph" (only when the question asks for a graph or sketch, or a graph makes the idea clear): {"title": string, "xLabel": string, "yLabel": string, "functions": [{"expr": string, "label": string}], "points": [{"x": number, "y": number, "label": string}], "xMin": number, "xMax": number, "yMin": number, "yMax": number}. "expr" uses x with + - * / ^, parentheses and sqrt, sin, cos, tan, log, ln, exp, abs, pi (for example "2*x^2 - 3*x + 1").
- Multiple choice: work out the answer from the theory, give the letter and the option, and in one step explain why each other option is wrong.
- Definitions, explanations and essays: the key idea and its theory, the explanation with reasons, an example, then exactly how to write it in the examination for full marks.
- "answer": the final answer in one or two short lines, with units (for multiple choice: the letter and the option).
- "mistakes": two or three mistakes students often make on this kind of question, each with how to avoid it.
- "realLife": one or two sentences linking the idea to everyday life in Cameroon (money in FCFA, local places, foods and jobs; never dollars or euros), or omit it if nothing natural fits.
- "check": one sentence: how to check that the answer is right.
- "similar": one new practice question of the same kind, with different numbers or examples. Do not answer it.${mode === 'teacher' ? '\n- "markingGuide": how marks are earned for this question, as short points with their marks (use the printed marks if shown), the way a GCE marking guide is written.' : ''}
${RULES}
Reply with JSON only: {"interpretation": string, "concepts": [{"name": string, "explanation": string}], "steps": [{"board": string, "why": string, "say": string, "graph"?: object}], "answer": string, "mistakes": [string], "realLife": string, "check": string, "similar": string${mode === 'teacher' ? ', "markingGuide": [{"point": string, "marks": number}]' : ''}}`;

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
  interpretation: s(1500).default(''),
  concepts: z.array(z.object({ name: s(160), explanation: s(2500) })).max(6).catch([]).default([]),
  steps: z
    .array(z.object({ board: z.coerce.string(), why: s(500).default(''), say: z.coerce.string().default(''), graph: Graph.optional().catch(undefined) }))
    .min(2)
    .max(12),
  answer: z.coerce.string(),
  mistakes: z.array(s(500)).max(5).catch([]).default([]),
  realLife: s(600).default(''),
  check: s(600).default(''),
  similar: s(1200).default(''),
  markingGuide: z.array(z.object({ point: s(400), marks: z.coerce.number().catch(1) })).default([]),
});

// On the board a multiplication is written as a teacher writes it: 2 × 5.
const times = (t) => String(t || '').replace(/(?<=[\d)²³½a-z])\s*\*\s*(?=[\d(½a-z])/gi, ' × ');
const spoken = (t) => clean(t).replace(/\*\*|[#`$]/g, '').replace(/\s+/g, ' ').trim();

export async function solveOne(env, { question, subject, className, lang, mode, images = [] }) {
  const ctx = context({ subject, className, lang, mode });
  let note = null;
  let best = null;
  for (let attempt = 0; attempt < 2; attempt++) {
    const prompt = `${ctx}\n\nQuestion:\n"""\n${question}\n"""${note ? `\n\nA first solution was checked by an examiner and was wrong: ${note}\nSolve it again from the start and get it right.` : ''}`;
    const r = await task(env, { system: SOLVE_SYSTEM(mode), prompt, images, schema: Solved, maxTokens: 10000, reasoning: 'high' });
    const sol = {
      interpretation: r.interpretation,
      concepts: r.concepts.filter((c) => c.name && c.explanation),
      steps: r.steps.map((st) => ({ board: times(plainBoard(st.board)), why: st.why, say: spoken(st.say), ...(st.graph ? { graph: st.graph } : {}) })).filter((st) => st.board || st.say),
      answer: times(plainBoard(r.answer)),
      mistakes: r.mistakes.filter(Boolean),
      realLife: r.realLife,
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

// ---------- 6. for teachers: lesson notes, lesson plans, summaries ----------
// The depth that fits each class: notes for Form 3 must not drift into A Level.
const LEVELS = `Levels in Cameroonian secondary schools: Forms 1 and 2 (6e, 5e) learn the basic ideas in simple words; Forms 3 to 5 (4e, 3e, 2nde) follow the GCE Ordinary Level course, with the examination in Form 5; Lower and Upper Sixth (1ère, Terminale) follow the GCE Advanced Level course. Write at the depth of the class named and no deeper: an O Level class never gets A Level content (for example, O Level photosynthesis is the word and symbol equation, the leaf and where photosynthesis happens in it, the conditions needed, the starch test and limiting factors, not photosystems, NADP or the Calvin cycle). If no class is named, write for Form 4.`;

// The level of the class named in the request ("Photosynthesis, Form 3").
const levelOf = (t) => {
  const x = String(t).toLowerCase();
  if (/(upper|lower) sixth|\bu6\b|\bl6\b|terminale|\btle\b|1(è|e)re|premi(è|e)re/.test(x)) return 'Level: GCE Advanced Level. Write at A Level depth.';
  if (/form\s*[345]\b|\b(4e|3e|2nde|seconde)\b/.test(x)) return 'Level: GCE Ordinary Level. Keep strictly to O Level content: nothing that is only taught at A Level.';
  if (/form\s*[12]\b|\b(6e|5e)\b/.test(x)) return 'Level: first cycle (Forms 1 and 2). Basic ideas in simple words only.';
  return 'Level: no class named, so write for Form 4 (GCE Ordinary Level).';
};

const NOTES_WRITE_SYSTEM = () => `You are an expert Cameroonian secondary school teacher writing the lesson notes for your class.
Write complete lesson notes on the topic given, as a teacher gives them to the class to copy and revise from, following the Cameroon GCE (MINESEC) syllabus for the class named. The notes speak to the students: no mark allocations, marking instructions or remarks to the teacher.
${LEVELS}
- "objectives": 3 to 5 things the students will be able to do after the lesson, each starting with an action verb ("define ...", "explain ...", "calculate ..."), without "By the end of the lesson".
- "introduction": a short, engaging start that links to what students know (an everyday Cameroonian example helps).
- "sections": the content in teaching order (headings without numbers), usually 4 to 7 sections covering the whole topic as the syllabus sets it for that class (no more advanced than that class, nothing left out). For each: a heading, the full content in clear sentences, 120 to 250 words (definitions in the exact wording examiners expect, explanations that give the reasons and the theory behind each idea, laws and formulas with the meaning and unit of each symbol), the key points, and one worked example or illustration.
- "diagrams": the diagrams the teacher should draw on the board for this topic, each with a title and a precise description of what to draw and label.
- "summary": the main ideas in four to six short sentences.
- "exercises": three to five questions for the end of the lesson, from simple to exam standard, each with its short answer.
${RULES}
First, in "scope", list the points the syllabus of this class covers for this topic, and the more advanced points it leaves for a higher class (start those with "Not at this level:"). Then write the notes covering exactly the points in scope.
Reply with JSON only: {"scope": [string], "title": string, "objectives": [string], "introduction": string, "sections": [{"heading": string, "content": string, "keyPoints": [string], "example": string}], "diagrams": [{"title": string, "description": string}], "summary": string, "exercises": [{"question": string, "answer": string}]}`;

const LessonNotes = z.object({
  scope: z.array(s(300)).default([]),
  title: s(160),
  objectives: z.array(s(300)).default([]),
  introduction: s(1500).default(''),
  sections: z.array(z.object({ heading: s(160), content: s(5000), keyPoints: z.array(s(400)).default([]), example: s(1500).default('') })).min(1),
  diagrams: z.array(z.object({ title: s(160), description: s(1000) })).default([]),
  summary: s(1500).default(''),
  exercises: z.array(z.object({ question: s(800), answer: s(1200) })).default([]),
});

export async function lessonNotes(env, { topic, text = '', images = [], subject, className, lang, mode }) {
  const ctx = context({ subject, className, lang, mode });
  if (!String(topic || '').trim() && !String(text).trim() && !images.length) throw new HttpError(400, 'Say the topic for the notes, for example "Photosynthesis, Form 3".', 'invalid_input');
  const prompt = `${ctx}\n\nTopic: ${topic || '(the material below)'}\n${levelOf(`${className || ''} ${topic || ''}`)}${text ? `\n\nBase the notes on this material:\n"""\n${String(text).slice(0, 40_000)}\n"""` : ''}${images.length ? '\n\nBase the notes on the material in the photos.' : ''}`;
  const { scope: _scope, ...notes } = await task(env, { system: NOTES_WRITE_SYSTEM(mode), prompt, images: images.slice(0, 6), schema: LessonNotes, maxTokens: 12000, reasoning: 'medium' });
  return notes;
}

const PLAN_SYSTEM = `You are an experienced Cameroonian secondary school teacher and pedagogic inspector. Write a lesson plan for a colleague, in the format used in Cameroonian secondary schools, for the topic, class and length given, following the MINESEC syllabus.
- "objectives": 3 to 5 specific, measurable objectives, each starting with an action verb ("state ...", "calculate ...", "draw ..."), without the words "By the end of the lesson, students should be able to" (the plan adds them once).
- "prerequisites": what students should already know.
- "materials": the teaching aids and materials (simple ones found in Cameroonian schools; improvised where useful).
- "stages": the lesson in order: Introduction (revision of prerequisites and motivation), Development (the main teaching, usually two or three stages), Conclusion (summary) and Evaluation. For each stage: its name, the minutes (adding up to the lesson length), what the teacher does, what the students do, and short notes (board summary points, questions to ask, common misconceptions).
- "evaluation": 3 to 5 questions to check the objectives were reached, with their expected answers.
- "homework": one short assignment.
- "boardSummary": the summary the students copy from the board at the end.
${LEVELS}
${RULES}
Reply with JSON only: {"title": string, "objectives": [string], "prerequisites": string, "materials": [string], "stages": [{"name": string, "minutes": number, "teacher": string, "students": string, "notes": string}], "evaluation": [{"question": string, "answer": string}], "homework": string, "boardSummary": string}`;

const Plan = z.object({
  title: s(160),
  objectives: z.array(s(300)).min(1),
  prerequisites: s(1000).default(''),
  materials: z.array(s(200)).default([]),
  stages: z.array(z.object({ name: s(80), minutes: z.coerce.number().catch(10), teacher: s(1500), students: s(1000).default(''), notes: s(1200).default('') })).min(2),
  evaluation: z.array(z.object({ question: s(600), answer: s(800) })).default([]),
  homework: s(800).default(''),
  boardSummary: s(2000).default(''),
});

export async function lessonPlan(env, { topic, text = '', images = [], subject, className, lang, minutes = 40 }) {
  if (!String(topic || '').trim() && !String(text).trim() && !images.length) throw new HttpError(400, 'Say the topic of the lesson, for example "Ohm\'s law, Form 4".', 'invalid_input');
  const ctx = context({ subject, className, lang, mode: 'teacher' });
  const prompt = `${ctx}\n\nTopic: ${topic || '(the material below)'}\n${levelOf(`${className || ''} ${topic || ''}`)}\nLesson length: ${minutes} minutes.${text ? `\n\nBase it on this material:\n"""\n${String(text).slice(0, 30_000)}\n"""` : ''}${images.length ? '\n\nBase it on the material in the photos.' : ''}`;
  const r = await task(env, { system: PLAN_SYSTEM, prompt, images: images.slice(0, 6), schema: Plan, maxTokens: 9000, reasoning: 'medium' });
  return { ...r, minutes };
}

const SUMMARY_SYSTEM = (mode) => `${who(mode)}
Summarise the material given (notes, a chapter, a document) for ${mode === 'teacher' ? 'a teacher preparing a lesson' : 'a student revising'}: the essentials only, correct and clear.
- "summary": the whole material in one short paragraph.
- "keyPoints": the 6 to 12 points that matter most, each one sentence.
- "keyTerms": the important terms with their exact meanings.
- "examFocus": what examiners usually ask on this material.
${RULES}
Reply with JSON only: {"title": string, "summary": string, "keyPoints": [string], "keyTerms": [{"term": string, "meaning": string}], "examFocus": [string]}`;

const Summary = z.object({
  title: s(160).default('Summary'),
  summary: s(3000),
  keyPoints: z.array(s(500)).min(1),
  keyTerms: z.array(z.object({ term: s(80), meaning: s(600) })).default([]),
  examFocus: z.array(s(500)).default([]),
});

export async function summarise(env, { text, images = [], subject, className, lang, mode }) {
  const ctx = context({ subject, className, lang, mode });
  const body = String(text || '').slice(0, 60_000);
  if (!body.trim() && !images.length) throw new HttpError(400, 'Add the material to summarise: a photo, a document or the text.', 'invalid_input');
  return task(env, { system: SUMMARY_SYSTEM(mode), prompt: `${ctx}\n\n${body ? `Material:\n"""\n${body}\n"""` : 'The material is in the photos.'}`, images: images.slice(0, 6), schema: Summary, maxTokens: 6000, reasoning: 'low' });
}

// ---------- 5. a conversation about the material ----------
const CHAT_SYSTEM = (mode) => `${who(mode)}
${mode === 'teacher' ? 'Answer the teacher' : mode === 'parent' ? 'Answer the parent' : 'Answer the student'} in a natural conversation. Use the material they shared (shown below when there is some) as your main reference. Answer the actual question first, then explain why, briefly and clearly, then offer the next useful step. Keep answers short unless asked for detail. If a question is outside school subjects, say kindly that you help with school work.
${RULES}`;

export async function chatReply(env, { history = [], message, material = '', subject, className, lang, mode, images = [], spoken = false }) {
  if (!groqConfigured(env)) throw new HttpError(503, 'The AI is not available yet.', 'ai_unavailable');
  const ctx = context({ subject, className, lang, mode });
  const talk = spoken
    ? '\nThis is a spoken conversation, like a phone call: your reply is read aloud. Answer in two to five short, natural sentences, the way a warm teacher talks, then ask one short question to keep the conversation going when it helps. No lists, headings or symbols; say formulas in words.'
    : '';
  const sys = `${CHAT_SYSTEM(mode)}${talk}\n\n${ctx}${material ? `\n\nMaterial shared in this chat:\n"""\n${String(material).slice(0, 24_000)}\n"""` : ''}`;
  const user = images.length ? [{ type: 'text', text: message }, ...images.map((im) => ({ type: 'image_url', image_url: { url: `data:${im.mediaType};base64,${im.data}` } }))] : message;
  const { text } = await groqChat(env, { vision: images.length > 0, maxTokens: 2500, temperature: 0.4, messages: [{ role: 'system', content: sys }, ...history, { role: 'user', content: user }] });
  // Plain text: no markdown emphasis or headings.
  return clean(text)
    .replace(/\*\*/g, '')
    .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s.,;:!?)]|$)/g, '$1$2')
    .replace(/^#{1,4}\s*/gm, '')
    .slice(0, 12_000);
}

// ---------- 7. one chat that does everything ----------
// What a message asks for, so the chat can do it at once: solve, explain,
// summarise, make questions, write lesson notes or a plan, mark answers, or
// simply answer.
export const INTENTS = ['solve', 'solve_text', 'notes', 'summary', 'quiz', 'lesson_notes', 'lesson_plan', 'mark', 'chat'];
const DECIDE_SYSTEM = `You read one message sent to the Klass8 study assistant (a study app for secondary schools in Cameroon) and decide which task it asks for. Reply with JSON only: {"intent": string, "mcq": number|null, "structured": number|null, "minutes": number|null}.
Intents:
- "solve": solve and explain the questions in the attached material (a past paper, worksheet, homework, photos of questions).
- "solve_text": the message itself is a question, exercise or problem to work out, or asks to explain a concept or topic in depth ("Explain osmosis", "What is Ohm's law?", "Calculate ...", "Balance this equation ...").
- "notes": explain the attached notes, chapter or document.
- "summary": summarise the attached material or the text in the message.
- "quiz": make revision questions, a test or an exercise sheet, from the attached material or on a topic. Put the numbers of multiple choice and written questions asked for in "mcq" and "structured" (null when not said).
- "lesson_notes": write lesson notes on a topic.
- "lesson_plan": write a lesson plan (the length in minutes in "minutes" when said).
- "mark": the message gives answers to the revision questions or test set earlier in this chat ("1 B, 2 C, 3 ...", or a photo of written answers), to be marked.
- "chat": anything else: greetings, thanks, a follow-up about an earlier answer ("why step 2?", "explain it more simply", "and the next one?"), advice, a short factual reply.
When files are attached and the message is general ("help me with this", "do it", "this one"), choose "solve" if the material holds questions, otherwise "notes".`;

const num = (x) => (Number.isFinite(Number(x)) && Number(x) > 0 ? Math.round(Number(x)) : null);

export async function decide(env, { text, files, role, quizOpen, lastAnswer, spoken = false }) {
  const facts = [
    `The person is a ${role}.`,
    spoken
      ? 'The message was spoken aloud in a voice conversation. Choose "chat" for conversation, definitions and explanations of ideas ("what is osmosis", "why does ice float"). Choose "solve_text" only for an exercise to work out step by step on the board: a calculation, an equation, a problem with numbers or an exam question.'
      : null,
    files?.list?.length
      ? `Attached: ${files.list.map((f) => `${f.name} (${f.kind})`).join(', ')}.${files.text ? `\nStart of the attached text:\n"""\n${files.text.slice(0, 900)}\n"""` : ''}`
      : 'Nothing attached.',
    quizOpen ? `Revision questions were set earlier in this chat: "${quizOpen}".` : null,
    lastAnswer ? `The assistant's last message began: "${String(lastAnswer).slice(0, 300)}"` : null,
    `Message: """${String(text || '').slice(0, 2000)}"""`,
  ]
    .filter(Boolean)
    .join('\n');
  try {
    const { text: out } = await groqChat(env, { json: true, maxTokens: 400, temperature: 0, reasoning: 'low', patience: 20_000, messages: [{ role: 'system', content: DECIDE_SYSTEM }, { role: 'user', content: facts }] });
    const r = parseJson(out);
    if (INTENTS.includes(r.intent)) return { intent: r.intent, mcq: num(r.mcq), structured: num(r.structured), minutes: num(r.minutes) };
  } catch (e) {
    console.error('study_decide', String(e?.message || e).slice(0, 200));
  }
  return null;
}

// A student's answers to the questions set in the chat, per question number,
// from their message or a photo of their work.
const READ_SYSTEM = `You read a student's answers to numbered questions and write them out per question number, exactly as the student gave them. For multiple choice, "answer" is the letter only (A, B, C or D). For written questions, copy the student's answer as written (from the message or the photos), without correcting it. Leave out questions the student did not answer.
Reply with JSON only: {"answers": [{"n": number, "answer": string}]}`;
const Answers = z.object({ answers: z.array(z.object({ n: z.coerce.number(), answer: s(6000) })).default([]) });

export async function readAnswers(env, { quiz, text, images = [] }) {
  const qs = quiz.questions.map((q) => `${q.n}. (${q.type === 'mcq' ? 'multiple choice' : 'written'}) ${String(q.text).slice(0, 220)}`).join('\n');
  const prompt = `Questions:\n${qs}\n\nThe student's reply:\n"""\n${text || '(the answers are in the photos)'}\n"""`;
  return task(env, { system: READ_SYSTEM, prompt, images: images.slice(0, 4), schema: Answers, maxTokens: 4000, reasoning: 'low' });
}

// Files sent with no instruction: say what came in and ask what to do.
export function askWhatToDo(list, mode, lang) {
  const fr = lang === 'fr';
  const imgs = list.filter((f) => f.kind === 'image').length;
  const docs = list.filter((f) => f.kind !== 'image');
  const what =
    docs.length === 1 && !imgs
      ? `"${docs[0].name}"`
      : !docs.length
        ? fr
          ? `vos ${imgs} photo${imgs > 1 ? 's' : ''}`
          : `your ${imgs === 1 ? 'photo' : `${imgs} photos`}`
        : fr
          ? `vos ${list.length} fichiers`
          : `your ${list.length} files`;
  const can =
    mode === 'teacher'
      ? fr
        ? 'résoudre et expliquer chaque question avec un guide de correction, expliquer ou résumer le contenu, en faire un devoir avec le barème, ou en tirer des notes de cours ou une fiche de préparation'
        : 'solve and explain every question in it with a marking guide, explain or summarise it, make a test from it with the marking scheme, or turn it into lesson notes or a lesson plan'
      : mode === 'parent'
        ? fr
          ? 'résoudre et expliquer les questions simplement pour que vous puissiez aider votre enfant, expliquer les notes, ou en faire des questions pour votre enfant'
          : 'solve and explain the questions in plain words so you can help your child, explain the notes, or make questions from it for your child'
        : fr
          ? 'résoudre et expliquer chaque question, expliquer les notes, les résumer, ou en faire des questions de révision'
          : 'solve and explain every question in it, explain the notes, summarise them, or make revision questions from them';
  return fr ? `J’ai bien reçu ${what}. Que voulez-vous que j’en fasse ? Je peux ${can}. Dites-le-moi, ou posez votre question.` : `I have ${what}. What would you like me to do with it? I can ${can}. Just tell me, or ask your question.`;
}

