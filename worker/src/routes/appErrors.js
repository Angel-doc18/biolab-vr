// Error reports from the app (see src/lib/crashReport.js in the app): no
// account needed, since an app can break before anyone signs in. Limited per
// address, clipped, and only the newest 2000 are kept.
import { HttpError, clientIp, limit, now, ok, readJson } from '../lib/http.js';
import { uuid } from '../lib/crypto.js';
import { problemSig } from '../lib/monitor.js';

const KEEP = 2000;
const clip = (v, n) => (typeof v === 'string' && v.trim() ? v.slice(0, n) : null);

export async function reportAppError(request, env) {
  await limit(env.WRITE_LIMITER, `apperr:${clientIp(request)}`, 'Please wait a moment.');
  const b = await readJson(request, 16 * 1024);
  const message = clip(b.message, 500);
  if (!message) throw new HttpError(400, 'A message is needed.', 'invalid_input');
  await env.DB.prepare(
    'INSERT INTO app_errors (id, created_at, place, fatal, late, platform, os, build, message, stack, sig, device) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  )
    .bind(uuid(), now(), clip(b.where, 40), b.fatal ? 1 : 0, b.late ? 1 : 0, clip(b.platform, 20), clip(b.os, 20), clip(b.build, 20), message, clip(b.stack, 4000), problemSig(clip(b.where, 40), message), clip(b.device, 40))
    .run();
  await env.DB.prepare(`DELETE FROM app_errors WHERE id NOT IN (SELECT id FROM app_errors ORDER BY created_at DESC LIMIT ${KEEP})`).run();
  return ok({ received: true });
}
