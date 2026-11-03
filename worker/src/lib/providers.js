// Mobile money (Fapshi). Optional: without its secrets, payments report
// "not configured" instead of pretending to work. Messaging is in messaging.js.
import { HttpError } from './http.js';
import { safeEqual } from './crypto.js';

// ---------- Fapshi ----------
export const paymentsConfigured = (env) => Boolean(env.FAPSHI_API_USER && env.FAPSHI_API_KEY && env.FAPSHI_WEBHOOK_SECRET);
const fapshiBase = (env) => (env.FAPSHI_ENV === 'live' ? 'https://live.fapshi.com' : 'https://sandbox.fapshi.com');

async function fapshi(env, path, init = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20_000);
  let res;
  try {
    res = await fetch(`${fapshiBase(env)}${path}`, {
      ...init,
      signal: ctrl.signal,
      headers: {
        apiuser: env.FAPSHI_API_USER,
        apikey: env.FAPSHI_API_KEY,
        ...(init.body ? { 'content-type': 'application/json' } : {}),
      },
    });
  } catch {
    // No answer: the request may still have reached Fapshi (it keeps no
    // idempotency key), so the caller looks the payment up instead of retrying.
    throw new HttpError(504, 'The payment service did not answer. Please wait a moment.', 'payment_timeout');
  } finally {
    clearTimeout(timer);
  }
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

// Fapshi's own payment page, where the student picks MTN or Orange and pays.
// Used until Fapshi switches on Direct Pay for the account (it is off by
// default on live). The link lasts 24 hours.
export async function payLink(env, { amount, userId, externalId, message, redirectUrl }) {
  if (!paymentsConfigured(env)) throw new HttpError(503, 'Mobile money payments are not open yet.', 'payments_unavailable');
  return fapshi(env, '/initiate-pay', {
    method: 'POST',
    body: JSON.stringify({ amount, userId, externalId, message, redirectUrl }),
  });
}

// A student's payments as Fapshi has them: finds one whose start timed out.
export async function paymentsOf(env, userId) {
  if (!/^[A-Za-z0-9_-]{1,100}$/.test(userId)) throw new HttpError(400, 'Invalid user.', 'invalid_input');
  const data = await fapshi(env, `/transaction/${encodeURIComponent(userId)}`);
  return Array.isArray(data) ? data : [];
}

export async function paymentStatus(env, transId) {
  if (!/^[A-Za-z0-9_-]{4,100}$/.test(transId)) throw new HttpError(400, 'Invalid transaction.', 'invalid_input');
  return fapshi(env, `/payment-status/${encodeURIComponent(transId)}`);
}

export function verifyFapshiWebhook(env, request) {
  const given = request.headers.get('x-wh-secret') || '';
  return Boolean(env.FAPSHI_WEBHOOK_SECRET) && safeEqual(given, env.FAPSHI_WEBHOOK_SECRET);
}
