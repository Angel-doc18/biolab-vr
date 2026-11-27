// The AI chat used by every feature. It used to be Groq only; it now goes
// through llm.js, which tries up to five keys (Groq x2, Google Gemini x2,
// Mistral) and moves to the next one at once when a key is used up or fails.
// The names stay so the callers do not change.
import { setting } from './settings.js';
import { SLOTS, aiChat } from './llm.js';

// True when at least one key is set, on the server or in the CTO's System page.
export const groqConfigured = (env) => SLOTS.some((s) => Boolean(env[s.env]) || String(setting(`secret_ai_${s.id}`) || '').startsWith('v1:'));

// Removes hidden reasoning some models emit, and em dashes and special
// hyphens from all output.
export const clean = (s) =>
  String(s || '')
    .replace(/<think>[\s\S]*?<\/think>/g, '')
    .replace(/\s*—\s*/g, ', ')
    .replace(/[‐‑‒–―]/g, '-')
    .trim();

// { messages, vision, json, maxTokens, temperature, reasoning } -> { text, model, provider, slot }
export async function groqChat(env, opts) {
  return aiChat(env, opts);
}
