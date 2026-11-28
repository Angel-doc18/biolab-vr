// Email: password reset codes and the CTO's test message. Two ways, both set
// by the CTO in the app (encrypted in the database), or on the server:
//   Gmail: a Gmail (or Google Workspace) address and an app password, sent
//     through Google's mail server; free, about 500 emails a day. The emails
//     come from that address. (GMAIL_USER / GMAIL_APP_PASSWORD)
//   Brevo: transactional email API; free plan about 300 a day; the sender is
//     an address verified in Brevo. (BREVO_API_KEY / MAIL_FROM)
// When both are set, Gmail sends and Brevo takes over when Gmail fails.
import nodemailer from 'nodemailer';
import { HttpError } from './http.js';
import { secret } from './secrets.js';
import { setting } from './settings.js';

export const brevoKey = (env) => secret(env, 'brevo', 'BREVO_API_KEY');
export const mailFrom = (env) => ({
  email: setting('mail_from') || env.MAIL_FROM || '',
  name: setting('mail_from_name') || env.MAIL_FROM_NAME || 'Klass8',
});

const senderName = (env) => setting('mail_from_name') || env.MAIL_FROM_NAME || 'Klass8';

// ---------- Gmail ----------
export const gmailUser = (env) => String(setting('gmail_user') || env.GMAIL_USER || '').trim().toLowerCase();
export const gmailPassword = (env) => secret(env, 'gmail', 'GMAIL_APP_PASSWORD');
// Google shows an app password as four groups of four letters.
export const cleanAppPassword = (s) => String(s || '').replace(/\s+/g, '');
export const looksLikeAppPassword = (s) => /^[a-z]{16}$/i.test(cleanAppPassword(s));

// Google's mail server (a test server can be set on the server for tests).
function gmailTransport(env, user, pass) {
  const host = env.GMAIL_SMTP_HOST || 'smtp.gmail.com';
  const port = Number(env.GMAIL_SMTP_PORT || 465);
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    ignoreTLS: Boolean(env.GMAIL_SMTP_HOST) && port !== 465,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
}

// A plain reason for a Gmail failure.
function gmailError(e) {
  const code = e?.code || '';
  const said = `${e?.responseCode || ''} ${e?.response || e?.message || ''}`;
  if (code === 'EAUTH' || /\b53[45]\b/.test(said)) return 'Google refused the address or app password. Check the Gmail address, and create a new app password (2-Step Verification must be on).';
  if (/daily (user )?sending (quota|limit)|5\.4\.5/i.test(said)) return 'Gmail’s daily sending limit is reached. It starts again within 24 hours.';
  if (/ETIMEDOUT|ECONNECTION|ESOCKET|ECONNREFUSED|ENOTFOUND|EDNS/.test(code)) return 'Google’s mail server could not be reached. Try again in a moment.';
  return `Gmail refused the email (${String(said).trim().slice(0, 120) || code || 'unknown error'}).`;
}

// Checks an address and app password with Google before they are saved.
// Returns { ok, error? }.
export async function checkGmail(env, user, pass) {
  const t = gmailTransport(env, user, cleanAppPassword(pass));
  try {
    await t.verify();
    return { ok: true };
  } catch (e) {
    return { ok: false, error: gmailError(e) };
  } finally {
    t.close();
  }
}

async function gmailReady(env) {
  const user = gmailUser(env);
  const { value } = await gmailPassword(env);
  return user && value ? { user, pass: cleanAppPassword(value) } : null;
}

async function sendWithGmail(env, g, { to, toName, subject, html, text }) {
  const t = gmailTransport(env, g.user, g.pass);
  try {
    await t.sendMail({ from: { name: senderName(env), address: g.user }, to: toName ? { name: toName, address: to } : to, subject, html, text });
  } finally {
    t.close();
  }
}

// ---------- which way ----------
async function brevoReady(env) {
  const { value } = await brevoKey(env);
  const from = mailFrom(env);
  return value && from.email ? { key: value, from } : null;
}

// 'gmail' | 'brevo' | null: the way emails go first.
export async function mailWay(env) {
  if (await gmailReady(env)) return 'gmail';
  if (await brevoReady(env)) return 'brevo';
  return null;
}

export async function mailConfigured(env) {
  return Boolean(await mailWay(env));
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

async function sendWithBrevo(b, { to, toName, subject, html, text }) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': b.key, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({ sender: b.from, to: [{ email: to, ...(toName ? { name: toName } : {}) }], subject, htmlContent: html, textContent: text }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error('brevo_error', res.status, body.slice(0, 300));
    throw new Error(`Brevo answered ${res.status}.`);
  }
}

// Sends one email: by Gmail when it is set up, else (or when Gmail fails) by
// Brevo. Returns the way it went ('gmail' | 'brevo'). Throws an HttpError when
// email is not set up or every way failed; `reason` says why, for the CTO.
export async function sendEmail(env, msg) {
  const g = await gmailReady(env);
  const b = await brevoReady(env);
  if (!g && !b) throw new HttpError(503, 'Email is not set up yet.', 'mail_unavailable');
  const reasons = [];
  if (g) {
    try {
      await sendWithGmail(env, g, msg);
      return 'gmail';
    } catch (e) {
      const why = gmailError(e);
      console.error('gmail_error', e?.code || '', e?.responseCode || '', String(e?.response || e?.message || '').slice(0, 200));
      reasons.push(`Gmail: ${why}`);
    }
  }
  if (b) {
    try {
      await sendWithBrevo(b, msg);
      return 'brevo';
    } catch (e) {
      reasons.push(`Brevo: ${e?.message || e}`);
    }
  }
  const err = new HttpError(502, 'The email could not be sent. Please try again.', 'mail_failed');
  err.reason = reasons.join(' ');
  throw err;
}
