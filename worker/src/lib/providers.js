// Mobile money (Fapshi). Optional: without its secrets, payments report
// "not configured" instead of pretending to work. Messaging is in messaging.js.
import { HttpError } from './http.js';
import { safeEqual } from './crypto.js';

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
