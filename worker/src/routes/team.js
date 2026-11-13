// The Klass8 team on the public website. Anyone can read the people who are
// shown (GET /v1/team and their photos); admins add, edit, order and remove
// them from the app's admin screen.
import { HttpError, json, now, ok, readJson, created } from '../lib/http.js';
import { uuid } from '../lib/crypto.js';
import { bool, str } from '../lib/validate.js';
import { requireAdmin } from '../lib/adminAuth.js';

const TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BASE64 = 350_000; // about 260 KB of image, as for profile pictures
const MAGIC = { 'image/jpeg': '/9j/', 'image/png': 'iVBORw0KGgo', 'image/webp': 'UklGR' };
const MAX_PEOPLE = 40;

const photoUrl = (m) => (m.photo_at ? `/v1/team/${m.id}/photo?v=${m.photo_at}` : null);
const publicMember = (m) => ({ id: m.id, name: m.name, role: m.role, bio: m.bio, link: m.link || null, onHome: Boolean(m.on_home), photo: photoUrl(m) });
const adminMember = (m) => ({ ...publicMember(m), visible: Boolean(m.visible), sort: m.sort, updatedAt: m.updated_at });
const COLUMNS = 'id, name, role, bio, link, photo_at, sort, on_home, visible, updated_at';

// The fields an admin can set; on an update, only the ones sent change.
function fields(b, partial) {
  const out = {};
  if (!partial || b.name !== undefined) out.name = str(b.name, 'Name', { min: 2, max: 80 });
  if (!partial || b.role !== undefined) out.role = str(b.role, 'Role', { min: 2, max: 80 });
  if (b.bio !== undefined) out.bio = str(b.bio, 'Short bio', { max: 280, optional: true }) || '';
  if (b.link !== undefined) {
    const link = str(b.link, 'Link', { max: 200, optional: true });
    if (link && !/^https:\/\/[^\s/$.?#][^\s]*$/i.test(link)) throw new HttpError(400, 'The link must start with https://', 'invalid');
    out.link = link || null;
  }
  if (b.onHome !== undefined) out.on_home = bool(b.onHome, 'Show on the home page') ? 1 : 0;
  if (b.visible !== undefined) out.visible = bool(b.visible, 'Show on the website') ? 1 : 0;
  return out;
}

async function findMember(env, id) {
  const m = await env.DB.prepare(`SELECT ${COLUMNS} FROM team_members WHERE id = ?`).bind(id).first();
  if (!m) throw new HttpError(404, 'This person is no longer on the team.', 'not_found');
  return m;
}

// GET /v1/team -> { members } (only the people shown on the website, in order)
export async function listTeam(request, env) {
  const { results } = await env.DB.prepare(`SELECT ${COLUMNS} FROM team_members WHERE visible = 1 ORDER BY sort, created_at`).all();
  return json({ members: results.map(publicMember) }, 200, { 'cache-control': 'public, max-age=120' });
}

// GET /v1/team/:id/photo -> the image (cached for a year: its address changes with the photo)
export async function teamPhoto(request, env, id) {
  const row = await env.DB.prepare('SELECT photo_mime, photo FROM team_members WHERE id = ? AND visible = 1').bind(id).first();
  if (!row?.photo) throw new HttpError(404, 'No photo.', 'not_found');
  return new Response(Uint8Array.from(atob(row.photo), (ch) => ch.charCodeAt(0)), {
    headers: { 'content-type': row.photo_mime, 'cache-control': 'public, max-age=31536000, immutable', 'x-content-type-options': 'nosniff' },
  });
}

// GET /v1/admin/team -> { members } (everyone, shown or not)
export async function adminListTeam(request, env) {
  await requireAdmin(request, env);
  const { results } = await env.DB.prepare(`SELECT ${COLUMNS} FROM team_members ORDER BY sort, created_at`).all();
  return ok({ members: results.map(adminMember) });
}

// POST /v1/admin/team { name, role, bio?, link?, onHome?, visible? }
export async function addTeamMember(request, env) {
  await requireAdmin(request, env);
  const f = fields(await readJson(request), false);
  const count = await env.DB.prepare('SELECT COUNT(*) AS n, COALESCE(MAX(sort), 0) AS last FROM team_members').first();
  if (count.n >= MAX_PEOPLE) throw new HttpError(400, `The team page shows at most ${MAX_PEOPLE} people.`, 'too_many');
  const t = now();
  const id = uuid();
  await env.DB.prepare('INSERT INTO team_members (id, name, role, bio, link, sort, on_home, visible, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(id, f.name, f.role, f.bio || '', f.link || null, count.last + 1, f.on_home ?? 1, f.visible ?? 1, t, t)
    .run();
  return created({ member: adminMember(await findMember(env, id)) });
}

// PATCH /v1/admin/team/:id { any of the fields }
export async function editTeamMember(request, env, id) {
  await requireAdmin(request, env);
  await findMember(env, id);
  const f = fields(await readJson(request), true);
  const keys = Object.keys(f);
  if (keys.length) {
    await env.DB.prepare(`UPDATE team_members SET ${keys.map((k) => `${k} = ?`).join(', ')}, updated_at = ? WHERE id = ?`)
      .bind(...keys.map((k) => f[k]), now(), id)
      .run();
  }
  return ok({ member: adminMember(await findMember(env, id)) });
}

// DELETE /v1/admin/team/:id
export async function removeTeamMember(request, env, id) {
  await requireAdmin(request, env);
  await findMember(env, id);
  await env.DB.prepare('DELETE FROM team_members WHERE id = ?').bind(id).run();
  return ok();
}

// POST /v1/admin/team/:id/move { dir: 'up' | 'down' } swaps the person with the one before or after.
export async function moveTeamMember(request, env, id) {
  await requireAdmin(request, env);
  const b = await readJson(request);
  if (b.dir !== 'up' && b.dir !== 'down') throw new HttpError(400, 'Choose up or down.', 'invalid');
  const { results } = await env.DB.prepare('SELECT id, sort FROM team_members ORDER BY sort, created_at').all();
  const i = results.findIndex((m) => m.id === id);
  if (i < 0) throw new HttpError(404, 'This person is no longer on the team.', 'not_found');
  const j = b.dir === 'up' ? i - 1 : i + 1;
  if (j >= 0 && j < results.length) {
    // Number everyone in order first, so equal sort values cannot block a swap.
    const order = results.map((m) => m.id);
    [order[i], order[j]] = [order[j], order[i]];
    await env.DB.batch(order.map((mid, k) => env.DB.prepare('UPDATE team_members SET sort = ? WHERE id = ?').bind(k + 1, mid)));
  }
  return adminListTeam(request, env);
}

// PUT /v1/admin/team/:id/photo { base64, mediaType }
export async function putTeamPhoto(request, env, id) {
  await requireAdmin(request, env);
  await findMember(env, id);
  const b = await readJson(request, 400 * 1024);
  const mime = TYPES.includes(b.mediaType) ? b.mediaType : null;
  const data = typeof b.base64 === 'string' ? b.base64.replace(/\s+/g, '') : '';
  if (!mime) throw new HttpError(400, 'Choose a JPEG, PNG or WebP picture.', 'invalid');
  if (!data || !/^[A-Za-z0-9+/]+=*$/.test(data) || !data.startsWith(MAGIC[mime])) throw new HttpError(400, 'The picture could not be read. Try another one.', 'invalid');
  if (data.length > MAX_BASE64) throw new HttpError(413, 'The picture is too large. Crop it closer or choose a smaller one.', 'too_large');
  const t = now();
  await env.DB.prepare('UPDATE team_members SET photo_mime = ?, photo = ?, photo_at = ?, updated_at = ? WHERE id = ?').bind(mime, data, t, t, id).run();
  return ok({ member: adminMember(await findMember(env, id)) });
}

// DELETE /v1/admin/team/:id/photo
export async function deleteTeamPhoto(request, env, id) {
  await requireAdmin(request, env);
  await findMember(env, id);
  await env.DB.prepare('UPDATE team_members SET photo_mime = NULL, photo = NULL, photo_at = NULL, updated_at = ? WHERE id = ?').bind(now(), id).run();
  return ok({ member: adminMember(await findMember(env, id)) });
}
