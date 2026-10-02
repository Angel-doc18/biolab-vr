// The GCE Ordinary Level sciences the app covers (ids match the app's subjects.js).
export const SUBJECTS = {
  biology: { en: 'Biology', fr: 'biologie' },
  chemistry: { en: 'Chemistry', fr: 'chimie' },
  physics: { en: 'Physics', fr: 'physique' },
  humanbio: { en: 'Human Biology', fr: 'biologie humaine' },
};
export const SUBJECT_IDS = Object.keys(SUBJECTS);
export const subjectOr = (id, fallback = 'biology') => (SUBJECT_IDS.includes(id) ? id : fallback);

// Stored as a comma-separated list on the user; accounts made before subjects
// existed took Biology.
export const userSubjects = (u) => {
  const list = (u?.subjects || '').split(',').filter((s) => SUBJECT_IDS.includes(s));
  return list.length ? list : u?.role === 'student' ? ['biology'] : [];
};
