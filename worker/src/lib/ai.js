// Claude calls for the tutor chat and for "Mark my answer".
import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { HttpError } from './http.js';

const MODEL = 'claude-opus-5-5';
// Server-side fallback: if the model declines on a policy check, the API
// retries on a suitable model inside the same call.
const FALLBACK = { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' };

const TUTOR_SYSTEM = `You are Dr. Nkwenti, a patient and precise Biology tutor for secondary school students preparing for the Cameroon GCE Biology examinations (Ordinary and Advanced Level).

How to answer:
- Explain clearly in language a teenager can follow, without oversimplifying to the point of being wrong.
- Use short paragraphs or numbered steps when a process has stages. Put key scientific terms in bold with **asterisks**.
- Where it helps, point out how an examiner awards marks and common mistakes that lose marks.
- Keep answers focused and exam relevant. Do not pad.
- Only answer Biology questions at secondary school level. For anything else, politely steer back to Biology.
- Never invent statistics, past paper references or quotations from the GCE Board.
- Never use em dashes in your writing. Use commas, colons or full stops instead.
- If the student writes in French, answer in French.`;

const MARK_SYSTEM = `You are an experienced Cameroon GCE Biology examiner marking a single structured answer.

Rules:
- Mark strictly against the mark scheme points provided. Award whole or half marks per point, never more than the point is worth.
- Credit correct biology expressed in the student's own words. Do not credit vague or contradictory statements.
- If an image is supplied, first transcribe the handwriting faithfully (including errors), then mark the transcription.
- If the answer is illegible or blank, award 0 and say so plainly.
- Feedback must be specific and actionable, written to the student, in the language of the question.
- Never use em dashes. Use commas, colons or full stops instead.`;

const client = (env) => {
  if (!env.ANTHROPIC_API_KEY) throw new HttpError(503, 'The AI tutor is not available yet.', 'ai_unavailable');
  return new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, maxRetries: 2, timeout: 90_000 });
};

export async function tutorReply(env, history, question, { lang, context, level } = {}) {
  const notes = [
    lang === 'fr' ? 'The student has chosen French: answer in French unless they write in English.' : null,
    level ? `The student is in ${level}.` : null,
    context ? `The student is currently studying: ${context}.` : null,
  ].filter(Boolean);
  const response = await client(env).beta.messages.create({
    model: MODEL,
    max_tokens: 4000,
    system: notes.length ? `${TUTOR_SYSTEM}

${notes.join(' ')}` : TUTOR_SYSTEM,
    output_config: { effort: 'low' },
    ...FALLBACK,
    messages: [...history, { role: 'user', content: question }],
  });
  if (response.stop_reason === 'refusal') {
    return 'I can only help with secondary school Biology questions. Try asking about a topic from your syllabus.';
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

export async function markAnswer(env, { question, markScheme, maxMarks, answerText, image }) {
  const schemeText = markScheme.map((p, i) => `${i + 1}. [${p.marks} mark${p.marks === 1 ? '' : 's'}] ${p.point}`).join('\n');
  const content = [];
  if (image) content.push({ type: 'image', source: { type: 'base64', media_type: image.mediaType, data: image.data } });
  content.push({
    type: 'text',
    text: `Question (${maxMarks} marks):\n${question}\n\nMark scheme:\n${schemeText}\n\n${
      image ? 'The student\'s handwritten answer is in the image above.' : `Student answer:\n${answerText}`
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
  // Clamp to the scheme so a model slip can never inflate a score.
  const criteria = markScheme.map((p, i) => {
    const c = result.criteria[i] || { awarded: 0, comment: 'Not addressed.' };
    const awarded = Math.max(0, Math.min(p.marks, Math.round((Number(c.awarded) || 0) * 2) / 2));
    return { point: p.point, max: p.marks, awarded, comment: String(c.comment || '').replace(/—/g, ', ') };
  });
  const awarded = Math.min(maxMarks, criteria.reduce((a, c) => a + c.awarded, 0));
  return {
    transcription: result.transcription,
    criteria,
    awarded,
    maxMarks,
    feedback: result.feedback.replace(/—/g, ', '),
    modelAnswer: result.modelAnswer.replace(/—/g, ', '),
  };
}
