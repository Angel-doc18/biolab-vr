// Free vs full course. AI features are enforced by the server; bundled content is
// gated here so the free tier stays genuinely useful without a connection.
import { units } from './units';
import { LABS } from './labs';

// In every subject, units 1 to 3 are free in full; later units show their first
// lesson free. The first two practicals of each subject are free.
export const FREE_UNITS = units.filter((u) => u.n <= 3).map((u) => u.id);
export const FREE_LABS = Object.values(
  LABS.reduce((acc, l) => {
    (acc[l.subject] = acc[l.subject] || []).push(l.id);
    return acc;
  }, {})
).flatMap((ids) => ids.slice(0, 2));
export const FREE_MOCKS_PER_WEEK = 1;

// Whether the full course is charged for is decided on the server (PAYWALL in
// worker/src/lib/auth.js): `pro` from the server is true for everyone until then.

export const PLANS = {
  month: { amount: 350, days: 30, en: 'Platform charges, 1 month', fr: 'Frais de plateforme, 1 mois' },
  year: { amount: 3500, days: 365, en: 'Platform charges, 1 year', fr: 'Frais de plateforme, 1 an' },
};

export const unitLocked = (unitId, pro) => !pro && !FREE_UNITS.includes(unitId);
export const lessonLocked = (unitId, index, pro) => unitLocked(unitId, pro) && index > 0;
export const labLocked = (labId, pro) => !pro && !FREE_LABS.includes(labId);

// Free Paper 1 attempts are counted per subject.
export function mocksThisWeek(exams, subject) {
  const since = Date.now() - 7 * 86400000;
  return exams.filter((e) => e.kind === 'p1' && e.at >= since && (e.subject || 'biology') === subject).length;
}

// Optional support contact, configured at build time (never hard-coded).
export const SUPPORT_EMAIL = process.env.EXPO_PUBLIC_SUPPORT_EMAIL || '';
export const SUPPORT_WHATSAPP = process.env.EXPO_PUBLIC_SUPPORT_WHATSAPP || '';

export const fcfa = (n) => `${Number(n).toLocaleString('en-US')} FCFA`;
