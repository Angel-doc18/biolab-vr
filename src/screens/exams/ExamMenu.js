// Step 2 of Exams: everything to practise for one subject, as large cards,
// then where the student stands and the papers they have done.
import { useEffect } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { StepLine, SUBJECT_LOOK, SubjectIcon } from '../../ui/hub';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { examSubject } from '../../state/progress';
import { accuracyByUnit, gradeFor, weakestUnit } from '../../state/selectors';
import { FREE_MOCKS_PER_WEEK, mocksThisWeek } from '../../data/plan';
import { p1For } from '../../lib/exam';
import { paper2Config } from '../../data/paper2';
import { labsFor } from '../../data/labs';
import { unitsFor } from '../../data/units';
import { minutesLabel, subjectById, subjectName } from '../../data/subjects';
import { Section } from '../tabs/Home';

function Choice({ icon, title, sub, note, tint, onPress }) {
  return (
    <P c="bg-surface-container-lowest rounded-xl p-space-md flex-row items-center gap-space-sm shadow-sm border border-surface-container" onPress={onPress} scale={0.99} accessibilityRole="button" accessibilityLabel={title}>
      <V c="w-12 h-12 rounded-xl items-center justify-center" style={{ backgroundColor: `${tint}1f` }}>
        <Ic n={icon} s={26} c={tint} fill />
      </V>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {title}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>
        {!!note && <T c="font-body-sm text-body-sm text-primary-container">{note}</T>}
      </V>
      <Ic n="chevron_right" s={24} c="outline" />
    </P>
  );
}

export default function ExamMenu({ navigation, route }) {
  const { pro, progress, stats, setSubject } = useApp();
  const L = useL();
  const lang = useLang();
  const subject = route.params?.subject || 'biology';
  useEffect(() => setSubject(subject), [subject, setSubject]);
  const tint = (SUBJECT_LOOK[subject] || SUBJECT_LOOK.biology).tint;
  const name = subjectName(subject, lang);
  const P1 = p1For(subject);
  const P2 = paper2Config(subject);
  const labs = labsFor(subject);
  const usedFree = !pro && mocksThisWeek(progress.exams, subject) >= FREE_MOCKS_PER_WEEK;

  const mine = progress.exams.filter((e) => examSubject(e) === subject);
  const p1 = mine.filter((e) => e.kind === 'p1');
  const history = [...mine].sort((a, b) => b.at - a.at);
  const lastThree = p1.slice(-3);
  const recent = lastThree.length ? Math.round(lastThree.reduce((a, e) => a + e.pct, 0) / lastThree.length) : null;
  const weak = weakestUnit(p1, stats.unitPct);
  const acc = weak ? accuracyByUnit(p1)[weak.unit.id] : null;

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={`${name}: ${L('exams', 'examens')}`} subtitle={`GCE Ordinary Level (${subjectById(subject).code})`} subtitleColor="on-surface-variant" avatar={false} />}>
        <V c="pt-space-md pb-space-xl gap-space-lg">
          <V c="flex-row items-center gap-space-sm">
            <SubjectIcon id={subject} size={52} />
            <V c="flex-1">
              <StepLine step={L('Step 2 of 3', 'Étape 2 sur 3')} text={L('Choose what to practise', 'Choisissez quoi pratiquer')} />
            </V>
          </V>

          <V c="gap-space-sm">
            <Choice
              icon="timer"
              tint={tint}
              title={L('Paper 1: multiple choice', 'Épreuve 1 : QCM')}
              sub={`${P1.count} ${L('questions in', 'questions en')} ${minutesLabel(P1.minutes, L)}, ${L('timed like the exam. A new paper each time.', 'chronométrée comme à l’examen. Une nouvelle épreuve à chaque fois.')}`}
              note={usedFree ? L('This week’s free paper is used.', 'L’épreuve gratuite de la semaine est utilisée.') : null}
              onPress={() => navigation.navigate(usedFree ? 'Paywall' : 'Paper1', usedFree ? { reason: 'mocks' } : { subject })}
            />
            <Choice
              icon="edit_note"
              tint={tint}
              title={L('Paper 2: structured questions', 'Épreuve 2 : questions structurées')}
              sub={`${minutesLabel(P2.minutes, L)}. ${L('Section A', 'Section A')}: ${P2.a} ${L('questions', 'questions')}; ${L('Section B', 'Section B')}: ${P2.b.answer < P2.b.offered ? `${P2.b.answer} ${L('of', 'sur')} ${P2.b.offered}` : P2.b.answer}. ${L('20 marks each.', '20 points chacune.')}`}
              note={pro ? L('Marked point by point against the mark scheme.', 'Corrigée point par point selon le barème.') : null}
              onPress={() => navigation.navigate('Paper2', { subject })}
            />
            <Choice
              icon="quiz"
              tint={tint}
              title={L('Topic quizzes', 'Quiz par thème')}
              sub={`${unitsFor(subject).length} ${L('topics, ten questions each, with explanations', 'thèmes, dix questions chacun, avec explications')}`}
              onPress={() => navigation.navigate('Topics', { subject, mode: 'quiz' })}
            />
            {labs.length > 0 && (
              <Choice
                icon="experiment"
                tint={tint}
                title={L('Practicals (Paper 3 skills)', 'Travaux pratiques (épreuve 3)')}
                sub={`${labs.length} ${L('practicals: readings, tables, graphs and conclusions', 'TP : mesures, tableaux, graphiques et conclusions')}`}
                onPress={() => navigation.navigate('Topics', { subject, mode: 'lab' })}
              />
            )}
            <Choice
              icon="grading"
              tint={tint}
              title={L('Mark a written answer', 'Corriger une réponse écrite')}
              sub={L('Type your answer or photograph your handwriting; see the marks you got and missed.', 'Tapez votre réponse ou photographiez-la ; voyez les points obtenus et manqués.')}
              onPress={() => navigation.navigate('MarkAnswer', { subject })}
            />
          </V>

          {(weak || recent != null) && (
            <Section title={L('Where you stand', 'Où vous en êtes')}>
              <V c="bg-surface-container-lowest rounded-xl shadow-sm p-space-md gap-space-sm">
                {recent != null && (
                  <T c="font-body-md text-body-md text-on-surface">
                    {L('Your last', 'Vos')} {lastThree.length} {L('Paper 1 scores average', 'dernières notes à l’épreuve 1 font en moyenne')} {recent}%, {L('around grade', 'environ la note')} {gradeFor(recent)}.
                  </T>
                )}
                {weak && (
                  <>
                    <T c="font-body-md text-body-md text-on-surface">
                      {L('Weakest topic:', 'Thème le plus faible :')} <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '700' }}>{weak.unit.short}</T>
                      {acc != null ? ` (${acc}% ${L('correct in papers', 'de réussite aux épreuves')})` : ` (${weak.pct}% ${L('mastered', 'maîtrisé')})`}.
                    </T>
                    <P c="h-11 rounded-lg bg-surface-container-low items-center justify-center" onPress={() => navigation.navigate('Quiz', { unitId: weak.unit.id })}>
                      <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                        {L('Practise this topic', 'S’entraîner sur ce thème')}
                      </T>
                    </P>
                  </>
                )}
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Grades here are practice estimates, not GCE Board results.', 'Ces notes sont des estimations, pas des résultats du GCE Board.')}</T>
              </V>
            </Section>
          )}

          <Section title={L('Your papers', 'Vos épreuves')}>
            {history.length ? (
              <V c="bg-surface-container-lowest rounded-xl shadow-sm">
                {history.slice(0, 8).map((e, i) => (
                  <P key={e.id || i} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => (e.kind === 'p1' ? navigation.navigate('Results', { exam: e }) : navigation.navigate('Paper2', { subject }))} scale={0.99}>
                    <V c="flex-1 gap-0.5">
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                        {e.kind === 'p1' ? L('Paper 1', 'Épreuve 1') : L('Paper 2', 'Épreuve 2')}, {e.score} / {e.total}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {new Date(e.at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}, {L('grade', 'note')} {gradeFor(e.pct)}
                      </T>
                    </V>
                    <Ic n="chevron_right" s={20} c="outline" />
                  </P>
                ))}
              </V>
            ) : (
              <T c="font-body-md text-body-md text-on-surface-variant">{L('Papers you finish appear here, with your answers and the explanations.', 'Les épreuves terminées apparaissent ici, avec vos réponses et les explications.')}</T>
            )}
          </Section>
        </V>
      </Screen>
      <StaticTabBar active="Exams" />
    </V>
  );
}
