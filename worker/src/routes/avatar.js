// Profile pictures. The app crops the picture square and saves it at low JPEG
// quality, so it is small; the server checks its type and size and keeps it as
// base64 in D1. Students under 18 need a parent's approval first, as for all
// personal data.
import { HttpError, now, ok, readJson } from '../lib/http.js';
import { publicUser, requireUser, requireConsent } from '../lib/auth.js';

const TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BASE64 = 350_000; // about 260 KB of image
const MAGIC = { 'image/jpeg': '/9j/', 'image/png': 'iVBORw0KGgo', 'image/webp': 'UklGR' };

// PUT /v1/me/avatar  { base64, mediaType }
export async function putAvatar(request, env) {
  const user = await requireUser(request, env);
  requireConsent(user);
  const b = await readJson(request, 400 * 1024);
  const mime = TYPES.includes(b.mediaType) ? b.mediaType : null;
  const data = typeof b.base64 === 'string' ? b.base64.replace(/\s+/g, '') : '';
  if (!mime) throw new HttpError(400, 'Choose a JPEG, PNG or WebP picture.', 'invalid');
  if (!data || !/^[A-Za-z0-9+/]+=*$/.test(data) || !data.startsWith(MAGIC[mime])) throw new HttpError(400, 'The picture could not be read. Try another one.', 'invalid');
  if (data.length > MAX_BASE64) throw new HttpError(413, 'The picture is too large. Crop it closer to your face or choose a smaller one.', 'too_large');
  const t = now();
  await env.DB.batch([
    env.DB.prepare('INSERT INTO avatars (user_id, mime, data, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET mime = excluded.mime, data = excluded.data, updated_at = excluded.updated_at').bind(user.id, mime, data, t),
    env.DB.prepare('UPDATE users SET avatar_at = ?, updated_at = ? WHERE id = ?').bind(t, t, user.id),
  ]);
  return ok({ user: publicUser({ ...user, avatar_at: t }) });
}

// GET /v1/me/avatar -> { mediaType, base64, at } or 404
export async function getAvatar(request, env) {
  const user = await requireUser(request, env);
  const row = await env.DB.prepare('SELECT mime, data, updated_at FROM avatars WHERE user_id = ?').bind(user.id).first();
  if (!row) throw new HttpError(404, 'No profile picture.', 'not_found');
  return ok({ mediaType: row.mime, base64: row.data, at: row.updated_at });
}

// DELETE /v1/me/avatar
export async function deleteAvatar(request, env) {
  const user = await requireUser(request, env);
  const t = now();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM avatars WHERE user_id = ?').bind(user.id),
    env.DB.prepare('UPDATE users SET avatar_at = NULL, updated_at = ? WHERE id = ?').bind(t, user.id),
  ]);
  return ok({ user: publicUser({ ...user, avatar_at: null }) });
}
