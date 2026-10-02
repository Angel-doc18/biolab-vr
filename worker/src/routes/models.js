// 3D anatomy models (GLB files in worker/assets/models, built by tools/models).
//
// The app asks for a link; the link is signed and expires after an hour, so the
// same URL works for the app's download and for Android's AR viewer (Scene
// Viewer), which fetches the file itself without our login. Models for the free
// units are open to every signed-in user; the rest need the full course.
import { HttpError, json, now } from '../lib/http.js';
import { isPro, requireUser } from '../lib/auth.js';
import { hmac, safeEqual } from '../lib/crypto.js';

// model -> syllabus unit, and the units that are free (keep in step with src/data/plan.js)
const MODEL_UNIT = { heart: 'transport', lungs: 'gas', digestive: 'nutrition', urinary: 'kidney', brain: 'nervous', arm: 'locomotion' };
const FREE_UNITS = ['cell', 'nutrition', 'transport'];
const TTL = 3600;

const base = (request, env) => (env.PUBLIC_API_URL || new URL(request.url).origin).replace(/\/+$/, '');
const secret = (env) => {
  if (!env.JWT_SECRET) throw new HttpError(503, 'Models are not available yet.', 'unavailable');
  return `models:${env.JWT_SECRET}`;
};

// GET /v1/models/:name/link
export async function modelLink(request, env, name) {
  const user = await requireUser(request, env);
  const unit = MODEL_UNIT[name];
  if (!unit) throw new HttpError(404, 'Model not found.', 'not_found');
  if (!FREE_UNITS.includes(unit) && !isPro(user)) throw new HttpError(402, 'This 3D model is part of the full course.', 'premium_required');
  const exp = Math.floor(now() / 1000) + TTL;
  const sig = await hmac(secret(env), `${name}:${exp}`);
  return json({ url: `${base(request, env)}/v1/models/${name}.glb?e=${exp}&s=${sig}`, expires: exp * 1000 });
}

// GET /v1/models/:name.glb?e=&s=
export async function modelFile(request, env, name) {
  const url = new URL(request.url);
  const exp = Number(url.searchParams.get('e'));
  const sig = url.searchParams.get('s') || '';
  if (!MODEL_UNIT[name] || !exp || exp < Math.floor(now() / 1000)) throw new HttpError(403, 'This link has expired.', 'expired');
  const expected = await hmac(secret(env), `${name}:${exp}`);
  if (!safeEqual(sig, expected)) throw new HttpError(403, 'This link is not valid.', 'forbidden');
  if (!env.ASSETS) throw new HttpError(503, 'Models are not available yet.', 'unavailable');
  const file = await env.ASSETS.fetch(new Request(`${url.origin}/models/${name}.glb`));
  if (!file.ok) throw new HttpError(404, 'Model not found.', 'not_found');
  return new Response(file.body, {
    headers: {
      'content-type': 'model/gltf-binary',
      'cache-control': 'private, max-age=3600',
      // Scene Viewer and web viewers fetch the model cross-origin.
      'access-control-allow-origin': '*',
      'x-content-type-options': 'nosniff',
    },
  });
}
