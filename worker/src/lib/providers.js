// External providers: SMS (Twilio) and mobile money (Fapshi). Both are optional:
// when their secrets are missing the related features report "not configured"
// instead of pretending to work.
import { HttpError } from './http.js';
import { safeEqual } from './crypto.js';

export const smsConfigured = (env) => Boolean(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM);

export async function sendSms(env, to, body) {
  if (!smsConfigured(env)) throw new HttpError(503, 'SMS delivery is not configured yet.', 'sms_unavailable');
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: {
      authorization: 'Basic ' + btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`),
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: `+${to}`, From: env.TWILIO_FROM, Body: body }),
  });
  if (!res.ok) {
    console.error('sms_failed', res.status);
    throw new HttpError(502, 'We could not send the SMS. Please try again.', 'sms_failed');
  }
}

// ---------- Fapshi ----------
export const paymentsConfigured = (env) => Boolean(env.FAPSHI_API_USER && env.FAPSHI_API_KEY && env.FAPSHI_WEBHOOK_SECRET);
const fapshiBase = (env) => (env.FAPSHI_ENV === 'live' ? 'https://live.fapshi.com' : 'https://sandbox.fapshi.com');

async function fapshi(env, path, init = {}) {
  const res = await fetch(`${fapshiBase(env)}${path}`, {
    ...init,
    headers: {
      apiuser: env.FAPSHI_API_USER,
      apikey: env.FAPSHI_API_KEY,
      ...(init.body ? { 'content-type': 'application/json' } : {}),
    },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('fapshi_error', path.split('/')[1], res.status);
    if (res.status === 429) throw new HttpError(429, 'Checking too often. Wait a few seconds.', 'rate_limited');
    if (res.status === 400) throw new HttpError(400, data?.message || 'The payment request was rejected. Check the number.', 'payment_rejected');
    throw new HttpError(502, 'The payment service is not responding. Please try again.', 'payment_provider');
  }
  return data;
}

// phone is stored as 2376XXXXXXXX; Fapshi expects the 9 local digits.
export async function directPay(env, { amount, phone, medium, userId, externalId, message, name }) {
  if (!paymentsConfigured(env)) throw new HttpError(503, 'Mobile money payments are not open yet.', 'payments_unavailable');
  return fapshi(env, '/direct-pay', {
    method: 'POST',
    body: JSON.stringify({
      amount,
      phone: phone.slice(3),
      medium,
      name: name?.slice(0, 60),
      userId,
      externalId,
      message,
    }),
  });
}

export async function paymentStatus(env, transId) {
  if (!/^[A-Za-z0-9_-]{4,100}$/.test(transId)) throw new HttpError(400, 'Invalid transaction.', 'invalid_input');
  return fapshi(env, `/payment-status/${encodeURIComponent(transId)}`);
}

export function verifyFapshiWebhook(env, request) {
  const given = request.headers.get('x-wh-secret') || '';
  return Boolean(env.FAPSHI_WEBHOOK_SECRET) && safeEqual(given, env.FAPSHI_WEBHOOK_SECRET);
}
