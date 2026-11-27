// "Join our community": the Klass8 social media pages, set by the founder or
// the CTO and shown as buttons on every account's profile.
import { HttpError, ok, readJson } from '../lib/http.js';
import { requireAdminCan } from '../lib/adminAuth.js';
import { saveSettings, setting } from '../lib/settings.js';
import { securityEvent } from '../lib/monitor.js';

// The platforms, in the order the buttons appear.
export const PLATFORMS = ['whatsapp', 'facebook', 'tiktok', 'instagram', 'youtube', 'x', 'telegram', 'linkedin'];

function linksNow() {
  try {
    const list = JSON.parse(setting('community_links') || '[]');
    return Array.isArray(list) ? list.filter((l) => PLATFORMS.includes(l?.kind) && /^https:\/\//.test(l?.url || '')) : [];
  } catch {
    return [];
  }
}

// GET /v1/community: open to everyone (the profile shows it to every account).
export async function getCommunity() {
  return ok({ links: linksNow() });
}

// PUT /v1/admin/community { links: [{ kind, url }] }: founder or CTO only.
// An empty url removes that platform.
export async function putCommunity(request, env) {
  const admin = await requireAdminCan(request, env, 'owner');
  const b = await readJson(request);
  if (!Array.isArray(b.links)) throw new HttpError(400, 'Send the list of links.', 'invalid_input');
  const seen = new Set();
  const links = [];
  for (const l of b.links) {
    const kind = String(l?.kind || '');
    const url = String(l?.url || '').trim();
    if (!PLATFORMS.includes(kind) || seen.has(kind) || !url) continue;
    let u;
    try {
      u = new URL(url);
    } catch {
      throw new HttpError(400, `The ${kind} link is not a web address. Copy it from the browser, starting with https://`, 'invalid_input');
    }
    if (u.protocol !== 'https:' || url.length > 300) throw new HttpError(400, `The ${kind} link must start with https:// and be shorter.`, 'invalid_input');
    seen.add(kind);
    links.push({ kind, url: u.toString() });
  }
  links.sort((a, b2) => PLATFORMS.indexOf(a.kind) - PLATFORMS.indexOf(b2.kind));
  await saveSettings(env, { community_links: JSON.stringify(links) }, admin.id || 'operator');
  await securityEvent(env, 'community_links', request, `${admin.name}: ${links.map((l) => l.kind).join(', ') || 'none'}`);
  return ok({ links });
}
