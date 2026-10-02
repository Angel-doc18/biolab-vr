// AI for the tutor chat and for "Mark my answer". Groq is the primary
// provider; Claude is used only when AI_PROVIDER = "anthropic".
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { HttpError } from './http.js';
import { clean, groqChat, groqConfigured } from './groq.js';
import { SUBJECTS, subjectOr } from './subjects.js';

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

const TUTOR_SYSTEM = `You are the SciAid science tutor: patient, precise and friendly for secondary school students preparing for the Cameroon GCE Ordinary Level science examinations (Biology, Chemistry, Physics and Human Biology).

How to answer:
- Explain clearly in language a teenager can follow, without oversimplifying to the point of being wrong.
- Use short paragraphs or numbered steps when a process has stages. Put key scientific terms in bold with **asterisks**.
- Where it helps, point out how an examiner awards marks and common mistakes that lose marks.
- Keep answers focused and exam relevant. Do not pad.
- Only answer science questions at secondary school level: Biology, Chemistry, Physics, Human Biology and the mathematics they need. For anything else, politely steer back to the student's subject.
- In calculations, show the formula, the substitution with units and the answer with its unit, as examiners expect.
- For chemical equations, give balanced equations with state symbols where they matter.
- Never invent statistics, past paper references or quotations from the GCE Board.
- Never use em dashes in your writing. Use commas, colons or full stops instead.
- If the student writes in French, answer in French.`;

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

export async function tutorReply(env, history, question, { lang, context, level, subject } = {}) {
  const notes = [
    `The student is revising GCE Ordinary Level ${SUBJECTS[subjectOr(subject)].en}.`,
    lang === 'fr' ? 'The student has chosen French: answer in French unless they write in English.' : null,
    level ? `The student is in ${level}.` : null,
    context ? `The student is currently studying: ${context}.` : null,
  ].filter(Boolean);
  const system = notes.length ? `${TUTOR_SYSTEM}\n\n${notes.join(' ')}` : TUTOR_SYSTEM;
  const provider = aiProvider(env);
  if (!provider) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  if (provider === 'groq') {
    const { text } = await groqChat(env, {
      messages: [{ role: 'system', content: `${system}\n\nKeep answers under 350 words unless the student asks for more detail. Format for a phone chat: short paragraphs, numbered steps and **bold** key terms only. Never use tables, headings with #, horizontal rules or LaTeX.` }, ...history, { role: 'user', content: question }],
      maxTokens: 1500,
      temperature: 0.4,
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

const subjectLine = (subject) => `Subject: GCE Ordinary Level ${SUBJECTS[subjectOr(subject)].en}.`;

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
