// The subject cards shown at the top of Home, Learn, Lab and Exams: one per
// subject the student takes, with what is inside and how far they have got.
import { useApp } from '../state/store';
import { useL, useLang } from '../i18n';
import { formFor, unitsForForm } from '../data/units';
import { lessonsFor } from '../data/lessons';
import { labsFor } from '../data/labs';
import { examSubject } from '../state/progress';
import { subjectById, subjectName } from '../data/subjects';

export function useSubjectCards(mode = 'learn') {
  const { subjects, subject, stats, progress, user } = useApp();
  const L = useL();
  const lang = useLang();
  return subjects.map((id) => {
    // Subjects organised by class count the topics of the student's class.
    const form = formFor(id, user?.className);
    const units = unitsForForm(id, form);
    const forClass = form ? `${form}: ` : '';
    const base = { id, name: subjectName(id, lang), code: `GCE ${subjectById(id).code}`, current: id === subject };
    if (mode === 'lab') {
      const labs = labsFor(id);
      const done = labs.filter((l) => progress.labs[l.id]).length;
      return { ...base, line: `${labs.length} ${L('practicals', 'travaux pratiques')}`, pct: labs.length ? Math.round((done / labs.length) * 100) : 0, pctLabel: `${done} ${L('of', 'sur')} ${labs.length} ${L('done', 'faits')}` };
    }
    if (mode === 'exams') {
      const papers = progress.exams.filter((e) => examSubject(e) === id).length;
      return {
        ...base,
        line: `${L('Papers 1 and 2', 'Épreuves 1 et 2')}, ${forClass}${units.length} ${L('topic quizzes', 'quiz par thème')}. ${papers ? `${papers} ${papers === 1 ? L('paper done', 'épreuve faite') : L('papers done', 'épreuves faites')}` : L('No papers done yet', 'Aucune épreuve faite')}`,
        pct: null,
      };
    }
    const lessons = units.reduce((a, u) => a + lessonsFor(u.id).length, 0);
    const pct = stats.bySubject[id]?.mastery || 0;
    return { ...base, line: `${forClass}${units.length} ${L('topics', 'thèmes')}, ${lessons} ${L('lessons', 'leçons')}`, pct, pctLabel: `${pct}% ${L('mastered', 'maîtrisé')}` };
  });
}
