// The GCE sciences the app covers (ids match the app's subjects.js). O: Ordinary
// Level (Forms 1 to 5); A: Advanced Level (Lower and Upper Sixth).
export const SUBJECTS = {
  biology: { en: 'Biology', fr: 'biologie', level: 'O' },
  chemistry: { en: 'Chemistry', fr: 'chimie', level: 'O' },
  physics: { en: 'Physics', fr: 'physique', level: 'O' },
  humanbio: { en: 'Human Biology', fr: 'biologie humaine', level: 'O' },
  'a-biology': { en: 'Biology', fr: 'biologie', level: 'A' },
  'a-chemistry': { en: 'Chemistry', fr: 'chimie', level: 'A' },
  'a-physics': { en: 'Physics', fr: 'physique', level: 'A' },
};
export const SUBJECT_IDS = Object.keys(SUBJECTS);
export const subjectOr = (id, fallback = 'biology') => (SUBJECT_IDS.includes(id) ? id : fallback);
// "GCE Ordinary Level Physics"
export const subjectTitle = (id) => {
  const s = SUBJECTS[subjectOr(id)];
  return `GCE ${s.level === 'A' ? 'Advanced' : 'Ordinary'} Level ${s.en}`;
};

// Stored as a comma-separated list on the user; accounts made before subjects
// existed took Biology.
export const userSubjects = (u) => {
  const list = (u?.subjects || '').split(',').filter((s) => SUBJECT_IDS.includes(s));
  return list.length ? list : u?.role === 'student' ? ['biology'] : [];
};
