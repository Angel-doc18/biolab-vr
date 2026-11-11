// The contact form on the public website. No account needed; limited per
// address. Admins read the messages at GET /v1/admin/contact-messages.
import { clientIp, limit, now, ok, readJson } from '../lib/http.js';
import { uuid } from '../lib/crypto.js';
import { oneOf, str } from '../lib/validate.js';

export async function sendContact(request, env) {
  await limit(env.WRITE_LIMITER, `contact:${clientIp(request)}`, 'Please wait a moment before sending another message.');
  const b = await readJson(request, 16 * 1024);
  const name = str(b.name, 'Your name', { min: 2, max: 80 });
  const contact = str(b.contact, 'Phone number or email', { min: 5, max: 120 });
  const topic = oneOf(b.topic || 'other', 'Topic', ['app', 'payment', 'school', 'account', 'other']);
  const message = str(b.message, 'Your message', { min: 5, max: 3000 });
  await env.DB.prepare('INSERT INTO contact_messages (id, created_at, name, contact, topic, message) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(uuid(), now(), name, contact, topic, message)
    .run();
  return ok({ sent: true });
}
