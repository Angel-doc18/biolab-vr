// Email through Brevo (transactional email API). The API key is set by the CTO
// in the app (encrypted in the database) or as BREVO_API_KEY on the server; the
// sender address must be one verified in Brevo (Senders, domains).
import { HttpError } from './http.js';
import { secret } from './secrets.js';
import { setting } from './settings.js';

export const brevoKey = (env) => secret(env, 'brevo', 'BREVO_API_KEY');
export const mailFrom = (env) => ({
  email: setting('mail_from') || env.MAIL_FROM || '',
  name: setting('mail_from_name') || env.MAIL_FROM_NAME || 'Klass8',
});

export async function mailConfigured(env) {
  return Boolean((await brevoKey(env)).value && mailFrom(env).email);
}

// Checks a key with Brevo before it is saved. Returns { ok, account?, error? }.
export async function checkBrevoKey(key) {
  try {
    const res = await fetch('https://api.brevo.com/v3/account', { headers: { 'api-key': key, accept: 'application/json' } });
    if (res.status === 401 || res.status === 403) return { ok: false, error: 'Brevo refused this key.' };
    if (!res.ok) return { ok: false, error: `Brevo answered ${res.status}.` };
    const a = await res.json().catch(() => ({}));
    return { ok: true, account: a.email || a.companyName || null };
  } catch (e) {
    return { ok: false, error: `Brevo could not be reached (${e?.message || e}).` };
  }
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// A plain, readable email in the Klass8 colours. `lines` are paragraphs; `code`
// (optional) is shown large.
export function simpleEmail({ title, lines = [], code }) {
  const html = `<!doctype html><html><body style="margin:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;color:#101b36">
<div style="max-width:520px;margin:0 auto;padding:28px 20px">
<div style="font-size:22px;font-weight:800;color:#02287b">Klass<span style="color:#fbac02">8</span></div>
<div style="background:#ffffff;border-radius:14px;padding:24px;margin-top:16px">
<h1 style="font-size:20px;margin:0 0 12px">${esc(title)}</h1>
${lines.map((l) => `<p style="font-size:15px;line-height:22px;margin:0 0 12px">${esc(l)}</p>`).join('')}
${code ? `<div style="font-size:32px;font-weight:800;letter-spacing:8px;color:#02287b;margin:8px 0 16px">${esc(code)}</div>` : ''}
</div>
<p style="font-size:12px;color:#4e5b77;margin-top:16px">Klass8, the study app for secondary schools in Cameroon. klass8.com</p>
</div></body></html>`;
  const text = [title, '', ...lines, ...(code ? ['', code] : [])].join('\n');
  return { html, text };
}

// Sends one email. Throws an HttpError when email is not set up or Brevo refuses.
export async function sendEmail(env, { to, toName, subject, html, text }) {
  const { value: key } = await brevoKey(env);
  const from = mailFrom(env);
  if (!key || !from.email) throw new HttpError(503, 'Email is not set up yet.', 'mail_unavailable');
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({ sender: from, to: [{ email: to, ...(toName ? { name: toName } : {}) }], subject, htmlContent: html, textContent: text }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('brevo_error', res.status, body.slice(0, 300));
    throw new HttpError(502, 'The email could not be sent. Please try again.', 'mail_failed');
  }
  return true;
}
