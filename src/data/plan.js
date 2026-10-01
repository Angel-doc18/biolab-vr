// Free vs Premium. AI features are enforced by the server; bundled content is
// gated here so the free tier stays genuinely useful offline.
import { units } from './units';

export const MODEL_COUNT = units.filter((u) => u.vr).length;

// Units 1 to 3 are free in full; later units show their first lesson free.
export const FREE_UNITS = ['cell', 'nutrition', 'transport'];
export const FREE_LABS = ['osmosis', 'food'];
export const FREE_MOCKS_PER_WEEK = 1;

export const PLANS = {
  term: { amount: 1500, days: 120, en: 'Term Pass', fr: 'Pass trimestre' },
  year: { amount: 3500, days: 365, en: 'Academic Year Pass', fr: 'Pass année scolaire' },
};

export const unitLocked = (unitId, pro) => !pro && !FREE_UNITS.includes(unitId);
export const lessonLocked = (unitId, index, pro) => unitLocked(unitId, pro) && index > 0;
export const labLocked = (labId, pro) => !pro && !FREE_LABS.includes(labId);

export function mocksThisWeek(exams) {
  const since = Date.now() - 7 * 86400000;
  return exams.filter((e) => e.kind === 'p1' && e.at >= since).length;
}

// Optional support contact, configured at build time (never hard-coded).
export const SUPPORT_EMAIL = process.env.EXPO_PUBLIC_SUPPORT_EMAIL || '';
export const SUPPORT_WHATSAPP = process.env.EXPO_PUBLIC_SUPPORT_WHATSAPP || '';

export const fcfa = (n) => `${Number(n).toLocaleString('en-US').replace(/,/g, ',')} FCFA`;
