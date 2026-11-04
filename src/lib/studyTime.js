// The daily study goals a student can choose, in minutes, from a quarter of an
// hour to four hours (the API accepts 5 to 240), and how each is written.
export const STUDY_TIMES = [15, 30, 45, 60, 90, 120, 180, 240];
export const DEFAULT_STUDY_TIME = 30;

// "45 min", "1 h", "1 h 30": the same in English and French.
export function studyTimeLabel(minutes) {
  const m = Math.round(Number(minutes) || 0);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return rest ? `${h} h ${String(rest).padStart(2, '0')}` : `${h} h`;
}

// A saved goal shown on the closest choice (older accounts chose 10 or 20).
export function nearestStudyTime(minutes) {
  const m = Number(minutes);
  if (!m) return DEFAULT_STUDY_TIME;
  return STUDY_TIMES.reduce((best, t) => (Math.abs(t - m) < Math.abs(best - m) ? t : best), STUDY_TIMES[0]);
}

// The choices in rows of four, for a two-row picker that fits small phones.
export const STUDY_TIME_ROWS = [STUDY_TIMES.slice(0, 4), STUDY_TIMES.slice(4)];
