// AI for the tutor chat and for "Mark my answer". Groq is the primary
// provider; Claude is used only when AI_PROVIDER = "anthropic".
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { HttpError } from './http.js';
import { clean, groqChat, groqConfigured } from './groq.js';
import { subjectTitle } from './subjects.js';

export const aiProvider = (env) => {
  if (env.AI_PROVIDER === 'anthropic' && env.ANTHROPIC_API_KEY) return 'anthropic';
  if (groqConfigured(env)) return 'groq';
  if (env.ANTHROPIC_API_KEY) return 'anthropic';
  return null;
};

const MODEL = 'claude-opus-5-5';
// Server-side fallback: if the model declines on a policy check, the API
// retries on a suitable model inside the same call.
const FALLBACK = { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' };

const TUTOR_SYSTEM = `You are the ScienceAid tutor: an experienced, patient Cameroonian science teacher. You teach secondary school students from Form 1 to Upper Sixth, following the MINESEC syllabuses and preparing them for the GCE Ordinary and Advanced Level examinations.

How you teach:
- Answer the student's actual question first, then explain why, the way a good teacher does in class.
- Pitch every answer at the student's class, which is given below: simple words and everyday examples for the junior classes, fuller and more exact answers for the examination classes. Do not teach beyond their level unless they ask.
- When the lesson the student is studying is given, use it as your main reference: keep to its content, terms and examples and never contradict it. If the question goes beyond the lesson, say so briefly and answer at the right level.
- Calculations: list what is given, write the formula, substitute with units, work through it step by step and give the answer with its unit.
- Definitions: give the exact wording examiners expect, then explain it simply. Processes: numbered steps in order.
- Chemical equations: balanced, with state symbols where they matter.
- Use Cameroonian examples (crops, foods, places, everyday life) where they help understanding.
- Point out common mistakes and what examiners give marks for when useful, especially for Form 5 and Upper Sixth.
- If a question is unclear, answer its most likely meaning and say what you assumed, or ask one short question to clarify.
- If you are not sure of a fact, say so rather than guess. Never invent statistics, past paper references or quotations from the GCE Board.
- Only help with secondary school science and the mathematics it needs. For anything else, kindly steer back to the subject.
- Never use em dashes. Use commas, colons or full stops.
- If the student writes in French or has chosen French, answer in French.`;

// How deep to go for each class.
const CLASS_GUIDE = {
  'Form 1': 'The student is in Form 1, the first year of secondary school (about 11 or 12 years old). Keep to the basic ideas of the Form 1 syllabus, in very simple words with everyday Cameroonian examples. Avoid formulas and terms they have not met; explain any new word.',
  'Form 2': 'The student is in Form 2 (about 12 or 13 years old). Keep to basic ideas in simple language with everyday examples, and explain each scientific term you use.',
  'Form 3': 'The student is in Form 3, the first year of the GCE Ordinary Level course. Explain ideas fully but simply, building on Forms 1 and 2.',
  'Form 4': 'The student is in Form 4, the second year of the GCE Ordinary Level course. Answer at O Level standard.',
  'Form 5': 'The student is in Form 5, the GCE Ordinary Level examination class. Answer at full O Level standard and show how marks are earned.',
  'Lower Sixth': 'The student is in Lower Sixth, the first year of the GCE Advanced Level course. Answer at A Level depth.',
  'Upper Sixth': 'The student is in Upper Sixth, the GCE Advanced Level examination class. Answer at full A Level standard, with exam technique.',
};
const classGuide = (className) => CLASS_GUIDE[className] || null;

// The lesson or topic the student has open: title and text, already trimmed by the route.
const lessonNote = (lesson) => (lesson?.text ? `The student is studying this lesson. Base your answer on it:\n"""\n${lesson.title ? `${lesson.title}\n` : ''}${lesson.text}\n"""` : lesson?.title ? `The student is studying: ${lesson.title}.` : null);

const MARK_SYSTEM = `You are an experienced Cameroon GCE Ordinary Level science examiner marking a single structured answer.

Rules:
- Mark strictly against the mark scheme points provided. Award whole or half marks per point, never more than the point is worth.
- Credit correct science expressed in the student's own words. Do not credit vague or contradictory statements.
- In calculations, credit correct method and substitution as the scheme allows, and check units.
- If an image is supplied, first transcribe the handwriting faithfully (including errors), then mark the transcription.
- If the answer is illegible or blank, award 0 and say so plainly.
- Feedback must be specific and actionable, written to the student, in the language of the question.
- Never use em dashes. Use commas, colons or full stops instead.`;

const client = (env) => {
  if (!env.ANTHROPIC_API_KEY) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  return new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, maxRetries: 2, timeout: 90_000 });
};

export async function tutorReply(env, history, question, { lang, context, lesson, level, subject } = {}) {
  const notes = [
    `Subject: ${subjectTitle(subject)}.`,
    classGuide(level) || (level ? `The student is in ${level}.` : null),
    lang === 'fr' ? 'The student has chosen French: answer in French unless they write in English.' : null,
    context ? `Topic open on the student's screen: ${context}.` : null,
    lessonNote(lesson),
  ].filter(Boolean);
  const system = `${TUTOR_SYSTEM}\n\n${notes.join('\n')}`;
  const provider = aiProvider(env);
  if (!provider) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  if (provider === 'groq') {
    const { text } = await groqChat(env, {
      messages: [{ role: 'system', content: `${system}\n\nKeep answers under 350 words unless the student asks for more detail or a full worked solution needs more. Format for a phone chat: short paragraphs, numbered steps and **bold** key terms only. Never use tables, headings with #, horizontal rules or LaTeX; write formulas in plain text such as v = u + at, x² and H₂O.` }, ...history, { role: 'user', content: question }],
      maxTokens: 2000,
      temperature: 0.3,
    });
    return clean(text) || 'I could not produce an answer this time. Please rephrase your question.';
  }
  const response = await client(env).beta.messages.create({
    model: MODEL,
    max_tokens: 4000,
    system,
    output_config: { effort: 'low' },
    ...FALLBACK,
    messages: [...history, { role: 'user', content: question }],
  });
  if (response.stop_reason === 'refusal') {
    return 'I can only help with secondary school science questions. Try asking about a topic from your syllabus.';
  }
  const text = response.content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n')
    .replace(/—/g, ', ');
  return text || 'I could not produce an answer this time. Please rephrase your question.';
}

const MarkResult = z.object({
  transcription: z.string(),
  criteria: z.array(
    z.object({
      point: z.string(),
      awarded: z.number(),
      max: z.number(),
      comment: z.string(),
    })
  ),
  awarded: z.number(),
  feedback: z.string(),
  modelAnswer: z.string(),
});

// Never lets a model slip inflate a score: every point is clamped to the scheme.
function finalize(result, { markScheme, maxMarks }, transcription) {
  const criteria = markScheme.map((p, i) => {
    const c = result.criteria?.[i] || { awarded: 0, comment: 'Not addressed.' };
    const awarded = Math.max(0, Math.min(p.marks, Math.round((Number(c.awarded) || 0) * 2) / 2));
    return { point: p.point, max: p.marks, awarded, comment: clean(c.comment) };
  });
  const awarded = Math.min(maxMarks, criteria.reduce((a, c) => a + c.awarded, 0));
  return {
    transcription: clean(transcription ?? result.transcription ?? ''),
    criteria,
    awarded,
    maxMarks,
    feedback: clean(result.feedback),
    modelAnswer: clean(result.modelAnswer),
  };
}

const schemeLines = (markScheme) => markScheme.map((p, i) => `${i + 1}. [${p.marks} mark${p.marks === 1 ? '' : 's'}] ${p.point}`).join('\n');

const GroqMark = z.object({
  criteria: z.array(z.object({ awarded: z.coerce.number(), comment: z.coerce.string().default('') }).passthrough()),
  feedback: z.coerce.string(),
  modelAnswer: z.coerce.string(),
});

const subjectLine = (subject) => `Subject: ${subjectTitle(subject)}.`;

async function groqMark(env, input) {
  const { question, markScheme, maxMarks, answerText, image, subject } = input;
  let answer = answerText;
  if (image) {
    const { text } = await groqChat(env, {
      vision: true,
      maxTokens: 1200,
      temperature: 0,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Transcribe the handwritten answer in this photo exactly as written, including spelling mistakes. Output only the transcription. If there is no readable writing, output exactly: [ILLEGIBLE]',
            },
            { type: 'image_url', image_url: { url: `data:${image.mediaType};base64,${image.data}` } },
          ],
        },
      ],
    });
    answer = clean(text);
  }
  const prompt = `${subjectLine(subject)}\n\nQuestion (${maxMarks} marks):\n${question}\n\nMark scheme:\n${schemeLines(markScheme)}\n\nStudent answer:\n${answer || '[NO ANSWER]'}\n\nReply with JSON only, in exactly this shape:\n{"criteria":[{"awarded":number,"comment":string}],"feedback":string,"modelAnswer":string}\n"criteria" must have exactly ${markScheme.length} entries, one per mark scheme point in order. "awarded" is the marks for that point (whole or half). "comment" says briefly why marks were given or lost. "feedback" is two or three sentences to the student. "modelAnswer" is a short full-mark answer.`;
  for (const temperature of [0.2, 0]) {
    const { text } = await groqChat(env, {
      json: true,
      maxTokens: 1800,
      temperature,
      messages: [
        { role: 'system', content: MARK_SYSTEM },
        { role: 'user', content: prompt },
      ],
    });
    try {
      const parsed = GroqMark.parse(JSON.parse(clean(text)));
      return finalize(parsed, input, answer);
    } catch {
      // malformed JSON: retry once with temperature 0
    }
  }
  throw new HttpError(422, 'This answer could not be marked. Try a clearer photo or type your answer.', 'mark_failed');
}

export async function markAnswer(env, input) {
  const provider = aiProvider(env);
  if (!provider) throw new HttpError(503, 'Marking is not available yet.', 'ai_unavailable');
  if (provider === 'groq') return groqMark(env, input);
  const { question, markScheme, maxMarks, answerText, image, subject } = input;
  const content = [];
  if (image) content.push({ type: 'image', source: { type: 'base64', media_type: image.mediaType, data: image.data } });
  content.push({
    type: 'text',
    text: `${subjectLine(subject)}\n\nQuestion (${maxMarks} marks):\n${question}\n\nMark scheme:\n${schemeLines(markScheme)}\n\n${
      image ? "The student's handwritten answer is in the image above." : `Student answer:\n${answerText}`
    }\n\nReturn the marking. "criteria" must contain one entry per mark scheme point in order, "awarded" is the total.`,
  });
  const response = await client(env).beta.messages.parse({
    model: MODEL,
    max_tokens: 6000,
    system: MARK_SYSTEM,
    output_config: { effort: 'medium', format: betaZodOutputFormat(MarkResult) },
    ...FALLBACK,
    messages: [{ role: 'user', content }],
  });
  const result = response.parsed_output;
  if (response.stop_reason === 'refusal' || !result) {
    throw new HttpError(422, 'This answer could not be marked. Try a clearer photo or type your answer.', 'mark_failed');
  }
  return finalize(result, input);
}

// ---------- spoken explanations of diagrams and practicals ----------

const EXPLAIN_SYSTEM = `You are the ScienceAid science tutor explaining something out loud to a Cameroon GCE Ordinary Level student while they look at it on their phone.

How to speak:
- Short, simple sentences that anyone can follow, as in a friendly lesson. Explain any technical word the first time you use it.
- Be accurate to the GCE syllabus. Never invent facts, numbers or quotations.
- Everything is read aloud by a speech engine, so write words, not symbols: "degrees Celsius", "centimetres cubed", "carbon dioxide", "H two O". No lists, no markdown, no brackets, no emojis.
- Never use em dashes. Use commas or full stops.`;

const Explained = z.object({
  intro: z.coerce.string(),
  items: z.array(z.coerce.string()),
  summary: z.coerce.string(),
});

// kind: 'diagram' (items are the labels) or 'practical' (items are the method steps).
export async function explainItems(env, { kind, subject, lang, title, items, context }) {
  const what = kind === 'diagram' ? 'a labelled diagram' : 'a practical experiment';
  const each =
    kind === 'diagram'
      ? 'For each label say what the structure is, what it does, and how it helps the whole work.'
      : 'For each method step say what to do and why it is done, and what to watch for so the result is accurate and safe.';
  const prompt = `${subjectLine(subject)}
You are explaining ${what}: "${title}".${context ? `\nAbout it: ${context}` : ''}
${kind === 'diagram' ? 'Labels' : 'Method steps'}, in order:
${items.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Write in ${lang === 'fr' ? 'French' : 'English'}.
"intro": two or three sentences saying what this ${kind === 'diagram' ? 'diagram shows' : 'experiment finds out'} and why it matters.
"items": exactly ${items.length} entries, one per ${kind === 'diagram' ? 'label' : 'step'} in the same order, each two or three sentences. ${each}
"summary": two or three sentences pulling it together${kind === 'practical' ? ', including what the results show' : ''}, and one thing examiners look for.
Reply with JSON only: {"intro": string, "items": [string], "summary": string}`;
  const provider = aiProvider(env);
  if (!provider) throw new HttpError(503, 'The tutor is not available yet.', 'ai_unavailable');
  for (const temperature of [0.3, 0]) {
    let text;
    if (provider === 'groq') {
      ({ text } = await groqChat(env, { json: true, maxTokens: 3500, temperature, messages: [{ role: 'system', content: EXPLAIN_SYSTEM }, { role: 'user', content: prompt }] }));
    } else {
      const response = await client(env).beta.messages.create({ model: MODEL, max_tokens: 6000, system: EXPLAIN_SYSTEM, output_config: { effort: 'low' }, ...FALLBACK, messages: [{ role: 'user', content: prompt }] });
      text = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    }
    try {
      const raw = clean(text).replace(/^```(?:json)?\s*|\s*```$/g, '');
      const parsed = Explained.parse(JSON.parse(raw));
      if (parsed.items.length !== items.length) continue;
      const tidy = (t) => clean(t).replace(/\*\*/g, '');
      return { intro: tidy(parsed.intro), items: parsed.items.map(tidy), summary: tidy(parsed.summary) };
    } catch {
      // malformed reply: try once more at temperature 0
    }
  }
  throw new HttpError(502, 'The tutor could not prepare this explanation. Try again.', 'explain_failed');
}

// ---------- the workspace: solving a question on the board, step by step ----------

const SOLVE_SYSTEM = `You are the ScienceAid tutor, an experienced Cameroonian science teacher, solving a question on the board in front of your class. You write a few short lines on the board for each step and explain aloud what you are writing and why, exactly as a good teacher does.

Rules:
- Solve the question completely and correctly, at the level of the student's class and in the method their syllabus uses.
- Teach in steps, in order: what the question asks, what we are given, the idea, law or formula we need, each stage of the working, and the final answer. Use between 3 and 8 steps.
- "board": what you write on the board for that step: at most 4 short lines separated by \\n. Write maths in plain text with units, for example: v = u + at, = 0 + 2 × 5, = 10 m/s, x², H₂O, CO₂, →, ⇌. Never use LaTeX, markdown or asterisks.
- "say": what you say aloud while writing that step: two to four short spoken sentences that explain why, not only what. It is read by a speech engine, so write words, not symbols: "v equals u plus a t", "metres per second", "carbon dioxide", "H two O". No brackets, no lists, no markdown.
- Questions that are not calculations (definitions, explanations, descriptions, comparisons, diagrams) are also taught in steps: the key idea, the explanation, an example, then how to write it in the examination.
- For a multiple-choice question, work out the answer, then say why each wrong option is wrong in one short step.
- "answer": the final answer in one or two short lines, with units.
- "check": one sentence: a quick way to check the answer, or the mistake students most often make in this kind of question.
- "similar": a new practice question of the same kind, with different numbers or a different example, for the student to try. Do not answer it.
- Never invent data that the question does not give; if something is missing, state the assumption you make.
- Never use em dashes.

Reply with JSON only, in exactly this shape:
{"title": string, "steps": [{"board": string, "say": string}], "answer": string, "check": string, "similar": string}`;

const Solved = z.object({
  title: z.coerce.string(),
  steps: z.array(z.object({ board: z.coerce.string(), say: z.coerce.string() }).passthrough()).min(2).max(10),
  answer: z.coerce.string(),
  check: z.coerce.string().default(''),
  similar: z.coerce.string().default(''),
});

// Board text is plain: if the model slips into LaTeX, turn it into ordinary
// symbols (½, x², H₂O, θ) so nothing looks like code on the board.
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
const SUB = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
const GREEK = { alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', Delta: 'Δ', theta: 'θ', lambda: 'λ', mu: 'µ', rho: 'ρ', pi: 'π', omega: 'ω', Omega: 'Ω', sigma: 'σ', phi: 'φ', eta: 'η' };
const fraction = (a, b) => (a === '1' && b === '2' ? '½' : a === '1' && b === '4' ? '¼' : `${/^\w+$/.test(a) ? a : `(${a})`}/${/^\w+$/.test(b) ? b : `(${b})`}`);
const plainBoard = (t) =>
  clean(t)
    .replace(/\*\*/g, '')
    .replace(/\\n/g, '\n')
    .replace(/\$+/g, '')
    .replace(/\\(left|right)\b/g, '')
    .replace(/\\(times|cdot)/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\(rightarrow|to)\b/g, '→')
    .replace(/\\(rightleftharpoons|leftrightharpoons)/g, '⇌')
    .replace(/\\(approx)/g, '≈')
    .replace(/\\(geq|ge)\b/g, '≥')
    .replace(/\\(leq|le)\b/g, '≤')
    .replace(/\\degree|\^\\circ|\^\{\\circ\}/g, '°')
    .replace(/\\d?frac\{([^{}]*)\}\{([^{}]*)\}/g, (m, a, b) => fraction(a.trim(), b.trim()))
    .replace(/\\sqrt\{([^{}]*)\}/g, '√($1)')
    .replace(/\\(?:text|mathrm|mathbf)\{([^{}]*)\}/g, '$1')
    .replace(/\\([A-Za-z]+)/g, (m, w) => GREEK[w] || '')
    .replace(/\^\{?(-?\d+)\}?/g, (m, d) => [...d].map((c) => SUP[c] || c).join(''))
    .replace(/([A-Za-z)])_\{?(\d+)\}?/g, (m, a, d) => a + [...d].map((c) => SUB[c] || c).join(''))
    .replace(/[{}]/g, '')
    .split('\n')
    .map((l) => l.replace(/ {2,}/g, ' ').trim())
    .filter(Boolean)
    .slice(0, 6)
    .join('\n');
const spoken = (t) => clean(t).replace(/\*\*|[#`$]/g, '').replace(/\s+/g, ' ').trim();

export async function solveQuestion(env, { subject, lang, className, question, lesson }) {
  const provider = aiProvider(env);
  if (!provider) throw new HttpError(503, 'The tutor is not available yet.', 'ai_unavailable');
  const prompt = [
    `Subject: ${subjectTitle(subject)}.`,
    classGuide(className),
    lessonNote(lesson),
    `Write in ${lang === 'fr' ? 'French' : 'English'}.`,
    `Question to solve on the board:\n"""\n${question}\n"""`,
  ]
    .filter(Boolean)
    .join('\n\n');
  for (const temperature of [0.2, 0]) {
    let text;
    if (provider === 'groq') {
      ({ text } = await groqChat(env, { json: true, maxTokens: 3500, temperature, messages: [{ role: 'system', content: SOLVE_SYSTEM }, { role: 'user', content: prompt }] }));
    } else {
      const response = await client(env).beta.messages.create({ model: MODEL, max_tokens: 6000, system: SOLVE_SYSTEM, output_config: { effort: 'medium' }, ...FALLBACK, messages: [{ role: 'user', content: prompt }] });
      if (response.stop_reason === 'refusal') throw new HttpError(422, 'The tutor can only solve secondary school science questions.', 'solve_refused');
      text = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    }
    try {
      const raw = clean(text).replace(/^```(?:json)?\s*|\s*```$/g, '');
      const s = Solved.parse(JSON.parse(raw));
      const steps = s.steps.map((st) => ({ board: plainBoard(st.board), say: spoken(st.say) })).filter((st) => st.board || st.say);
      if (steps.length < 2) continue;
      return { title: spoken(s.title).slice(0, 160), steps, answer: plainBoard(s.answer), check: spoken(s.check), similar: spoken(s.similar) };
    } catch {
      // malformed reply: try once more at temperature 0
    }
  }
  throw new HttpError(502, 'The tutor could not solve this question just now. Try again or rephrase it.', 'solve_failed');
}
