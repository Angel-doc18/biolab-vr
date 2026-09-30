import { uuid } from './crypto.js';
import { now } from './http.js';

export async function notify(env, userId, kind, title, body, data = null) {
  await env.DB.prepare(
    'INSERT INTO notifications (id, user_id, kind, title, body, data, read, created_at) VALUES (?, ?, ?, ?, ?, ?, 0, ?)'
  )
    .bind(uuid(), userId, kind, title.slice(0, 140), body.slice(0, 500), data ? JSON.stringify(data) : null, now())
    .run();
}

export const today = () => new Date().toISOString().slice(0, 10);
