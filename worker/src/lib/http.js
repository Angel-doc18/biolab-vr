// Small HTTP helpers shared by every route.

const SECURITY_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'x-content-type-options': 'nosniff',
  'x-frame-options': 'DENY',
  'referrer-policy': 'no-referrer',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
};

export class HttpError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code || 'error';
  }
}

export const json = (body, status = 200, extra = {}) =>
  new Response(JSON.stringify(body), { status, headers: { ...SECURITY_HEADERS, ...extra } });

export const ok = (body = { ok: true }) => json(body, 200);
export const created = (body) => json(body, 201);

export async function readJson(request, maxBytes = 64 * 1024) {
  const type = request.headers.get('content-type') || '';
  if (!type.includes('application/json')) throw new HttpError(415, 'Expected application/json.');
  const len = Number(request.headers.get('content-length') || 0);
  if (len > maxBytes) throw new HttpError(413, 'Request body too large.');
  const text = await request.text();
  if (text.length > maxBytes) throw new HttpError(413, 'Request body too large.');
  try {
    const value = JSON.parse(text || '{}');
    if (value === null || typeof value !== 'object' || Array.isArray(value)) throw new Error();
    return value;
  } catch {
    throw new HttpError(400, 'Invalid JSON body.');
  }
}

export const clientIp = (request) => request.headers.get('cf-connecting-ip') || 'unknown';

export async function limit(binding, key, message = 'Too many requests. Try again shortly.') {
  if (!binding) return;
  const { success } = await binding.limit({ key });
  if (!success) throw new HttpError(429, message, 'rate_limited');
}

export const now = () => Date.now();
