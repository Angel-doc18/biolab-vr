// The CTO's keys: the five AI keys and the Brevo email key, set, replaced
// ("rotated"), tested and removed from System in the app. Only the CTO (or the
// operator token) may use these. A key is checked with its provider before it is
// saved and is never sent back in full.
import { HttpError, ok, readJson } from '../lib/http.js';
import { requireAdminCan } from '../lib/adminAuth.js';
import { email as emailField, str } from '../lib/validate.js';
import { saveSettings } from '../lib/settings.js';
import { hint, setSecret } from '../lib/secrets.js';
import { PROVIDERS, SLOTS, forgetHealth, keyOf, keyProblem, slotHealth, testKey, usageToday } from '../lib/llm.js';
import { brevoKey, checkBrevoKey, mailFrom, sendEmail, simpleEmail } from '../lib/mail.js';
import { securityEvent } from '../lib/monitor.js';

const slotOf = (id) => {
  const s = SLOTS.find((x) => x.id === id);
  if (!s) throw new HttpError(404, 'Unknown key.', 'not_found');
  return s;
};

async function slotView(env, slot, usage) {
  const { value, from } = await keyOf(env, slot);
  const today = (usage || (await usageToday(env)))[slot.id] || null;
  const h = slotHealth(slot.id);
  // used up for the day or refused, even if the server restarted since
  const out = !h.resting && today?.usedUpUntil ? { resting: true, restUntil: today.usedUpUntil, reason: today.reason } : {};
  return { id: slot.id, label: slot.label, provider: slot.provider, providerName: PROVIDERS[slot.provider].name, set: Boolean(value), from, hint: hint(value), ...h, ...out, today };
}

// GET /v1/admin/system/ai-keys
export async function listAiKeys(request, env) {
  await requireAdminCan(request, env, 'system');
  const usage = await usageToday(env);
  return ok({ keys: await Promise.all(SLOTS.map((s) => slotView(env, s, usage))) });
}

// PUT /v1/admin/system/ai-keys/:slot { key }  (an empty key removes the one set in the app)
export async function putAiKey(request, env, id) {
  const admin = await requireAdminCan(request, env, 'system');
  const slot = slotOf(id);
  const b = await readJson(request);
  const key = String(b.key || '').trim();
  let test = null;
  if (key) {
    if (key.length > 300 || /\s/.test(key)) throw new HttpError(400, 'That does not look like an API key. Copy it again from the provider, without spaces.', 'invalid_input');
    const wrong = keyProblem(slot, key);
    if (wrong) throw new HttpError(400, `${wrong} The key was not saved.`, 'invalid_input');
    // the same key twice gives no extra allowance
    for (const other of SLOTS) {
      if (other.id !== slot.id && (await keyOf(env, other)).value === key) throw new HttpError(400, `This key is already saved in ${other.label}. Each place needs a different key (a new key from another account gives more free requests).`, 'invalid_input');
    }
    test = await testKey(env, slot, key);
    if (!test.ok && test.definite) {
      await securityEvent(env, 'ai_key', request, `${admin.name}: ${slot.label} refused (${test.error.slice(0, 120)})`);
      throw new HttpError(400, `${test.error} The key was not saved.`, 'key_refused');
    }
  }
  await setSecret(env, `ai_${slot.id}`, key, admin.id || 'operator');
  forgetHealth(env, slot.id);
  await securityEvent(env, 'ai_key', request, `${admin.name}: ${slot.label} ${key ? `set (${hint(key)})` : 'removed from the app'}`);
  return ok({ key: await slotView(env, slot), test });
}

// POST /v1/admin/system/ai-keys/:slot/test
export async function testAiKey(request, env, id) {
  await requireAdminCan(request, env, 'system');
  const slot = slotOf(id);
  const { value } = await keyOf(env, slot);
  if (!value) throw new HttpError(400, 'No key is set here yet.', 'invalid_input');
  const t = await testKey(env, slot, value);
  if (t.ok) forgetHealth(env, slot.id);
  return ok({ test: t, key: await slotView(env, slot) });
}

async function emailView(env) {
  const { value, from } = await brevoKey(env);
  const sender = mailFrom(env);
  return { set: Boolean(value), from, hint: hint(value), senderEmail: sender.email || null, senderName: sender.name, ready: Boolean(value && sender.email) };
}

// GET /v1/admin/system/email
export async function getEmailSettings(request, env) {
  await requireAdminCan(request, env, 'system');
  return ok({ email: await emailView(env) });
}

// PUT /v1/admin/system/email { apiKey?, senderEmail?, senderName? }
export async function putEmailSettings(request, env) {
  const admin = await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const changes = [];
  if (b.apiKey !== undefined) {
    const key = String(b.apiKey || '').trim();
    if (key) {
      const c = await checkBrevoKey(key);
      if (!c.ok) throw new HttpError(400, `${c.error} The key was not saved.`, 'key_refused');
    }
    await setSecret(env, 'brevo', key, admin.id || 'operator');
    changes.push(key ? `key set (${hint(key)})` : 'key removed');
  }
  const s = {};
  if (b.senderEmail !== undefined) s.mail_from = b.senderEmail ? emailField(b.senderEmail, 'Sender email', { optional: false }) : '';
  if (b.senderName !== undefined) s.mail_from_name = str(b.senderName, 'Sender name', { max: 60, optional: true }) || '';
  if (Object.keys(s).length) {
    await saveSettings(env, s, admin.id || 'operator');
    changes.push('sender changed');
  }
  if (changes.length) await securityEvent(env, 'email_settings', request, `${admin.name}: ${changes.join(', ')}`);
  return ok({ email: await emailView(env) });
}

// POST /v1/admin/system/email/test { to }
export async function testEmail(request, env) {
  await requireAdminCan(request, env, 'system');
  const b = await readJson(request);
  const to = emailField(b.to, 'Email address', { optional: false });
  const m = simpleEmail({ title: 'Klass8 email works', lines: ['This test message was sent from the CTO page of Klass8 through Brevo. Password reset codes will arrive the same way.'] });
  await sendEmail(env, { to, subject: 'Klass8: test email', html: m.html, text: m.text });
  return ok({ sent: true });
}
