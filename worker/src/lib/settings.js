// Settings an admin changes from the app (the prices, and whether students are
// charged). They live in the settings table and are kept in memory, read again
// at most every 30 seconds and at once when an admin saves. Each falls back to
// the server's environment or the built-in value until it is set.
import { now } from './http.js';

const cache = { values: {}, loadedAt: 0 };

export async function loadSettings(env, force = false) {
  if (!force && Date.now() - cache.loadedAt < 30_000) return cache.values;
  try {
    const { results } = await env.DB.prepare('SELECT key, value FROM settings').all();
    cache.values = Object.fromEntries(results.map((r) => [r.key, r.value]));
  } catch {
    // the table does not exist yet (before its migration): built-in values apply
  }
  cache.loadedAt = Date.now();
  return cache.values;
}

// The saved value of a setting, or undefined when it has never been set.
export const setting = (key) => cache.values[key];

export async function saveSettings(env, changes, by) {
  const t = now();
  const entries = Object.entries(changes);
  if (!entries.length) return;
  await env.DB.batch(
    entries.map(([key, value]) =>
      env.DB.prepare('INSERT INTO settings (key, value, updated_at, updated_by) VALUES (?, ?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at, updated_by = excluded.updated_by').bind(key, String(value), t, by || null)
    )
  );
  await loadSettings(env, true);
}

// The two plans. The price of each can be changed by an admin; the length stays.
export const DEFAULT_PRICES = { month: 350, year: 3500 };
export function currentPlans() {
  const price = (k) => {
    const n = Number(setting(`price_${k}`));
    return Number.isFinite(n) && n > 0 ? Math.round(n) : DEFAULT_PRICES[k];
  };
  return {
    month: { amount: price('month'), days: 30, label: 'Platform charges, 1 month' },
    year: { amount: price('year'), days: 365, label: 'Platform charges, 1 year' },
  };
}
