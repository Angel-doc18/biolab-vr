// The subjects the app covers (ids match the app's subjects.js). O: Ordinary
// Level (Forms 1 to 5); A: Advanced Level (Lower and Upper Sixth). `gce: false`
// marks a school subject that is not itself a GCE paper.
export const SUBJECTS = {
  biology: { en: 'Biology', fr: 'biologie', level: 'O' },
  chemistry: { en: 'Chemistry', fr: 'chimie', level: 'O' },
  physics: { en: 'Physics', fr: 'physique', level: 'O' },
  humanbio: { en: 'Human Biology', fr: 'biologie humaine', level: 'O' },
  maths: { en: 'Mathematics', fr: 'mathématiques', level: 'O' },
  computer: { en: 'Computer Science', fr: 'informatique', level: 'O' },
  geography: { en: 'Geography', fr: 'géographie', level: 'O' },
  homeec: { en: 'Home Economics', fr: 'économie sociale et familiale', level: 'O', gce: false },
  english: { en: 'English Language', fr: 'anglais', level: 'O' },
  french: { en: 'French', fr: 'français', level: 'O' },
  literature: { en: 'Literature in English', fr: 'littérature anglaise', level: 'O' },
  history: { en: 'History', fr: 'histoire', level: 'O' },
  economics: { en: 'Economics', fr: 'économie', level: 'O' },
  commerce: { en: 'Commerce', fr: 'commerce', level: 'O' },
  citizenship: { en: 'Citizenship Education', fr: 'éducation à la citoyenneté', level: 'O' },
  geology: { en: 'Geology', fr: 'géologie', level: 'O' },
  logic: { en: 'Logic', fr: 'logique', level: 'O' },
  'a-biology': { en: 'Biology', fr: 'biologie', level: 'A' },
  'a-chemistry': { en: 'Chemistry', fr: 'chimie', level: 'A' },
  'a-physics': { en: 'Physics', fr: 'physique', level: 'A' },
};
export const SUBJECT_IDS = Object.keys(SUBJECTS);
export const subjectOr = (id, fallback = 'biology') => (SUBJECT_IDS.includes(id) ? id : fallback);
// "GCE Ordinary Level Physics"
export const subjectTitle = (id) => {
  const s = SUBJECTS[subjectOr(id)];
  if (s.gce === false) return `Secondary school ${s.en}`;
  return `GCE ${s.level === 'A' ? 'Advanced' : 'Ordinary'} Level ${s.en}`;
};

// Stored as a comma-separated list on the user; accounts made before subjects
// existed took Biology.
export const userSubjects = (u) => {
  const list = (u?.subjects || '').split(',').filter((s) => SUBJECT_IDS.includes(s));
  return list.length ? list : u?.role === 'student' ? ['biology'] : [];
};
