import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { daysToExam } from '../../state/progress';
import { accuracyByUnit, gradeFor, weakestUnit } from '../../state/selectors';
import { FREE_MOCKS_PER_WEEK, mocksThisWeek } from '../../data/plan';
import { unitById } from '../../data/units';
import { labById } from '../../data/labs';
import { P1 } from '../../lib/exam';
import { P2 } from '../../data/paper2';
import { Section } from './Home';

function PaperRow({ title, sub, note, onPress, first }) {
  return (
    <P c={`p-space-md flex-row items-center gap-space-sm ${first ? '' : 'border-t border-surface-container'}`} onPress={onPress} scale={0.99}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {title}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">{sub}</T>
        {!!note && <T c="font-body-sm text-body-sm text-primary-container">{note}</T>}
      </V>
      <Ic n="chevron_right" s={20} c="outline" />
    </P>
  );
}

export default function Exams({ navigation }) {
  const { user, pro, progress, stats } = useApp();
  const L = useL();
  const [assignments, setAssignments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await get('/v1/me/assignments');
      setAssignments(r.items.filter((a) => !a.doneAt && a.dueAt > Date.now()));
    } catch {
      // no connection: keep the last list
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const days = daysToExam(user?.examYear);
  const p1 = progress.exams.filter((e) => e.kind === 'p1');
  const history = [...progress.exams].sort((a, b) => b.at - a.at);
  const lastThree = p1.slice(-3);
  const recent = lastThree.length ? Math.round(lastThree.reduce((a, e) => a + e.pct, 0) / lastThree.length) : null;
  const weak = weakestUnit(p1, stats.unitPct);
  const acc = weak ? accuracyByUnit(p1)[weak.unit.id] : null;
  const usedFree = !pro && mocksThisWeek(progress.exams) >= FREE_MOCKS_PER_WEEK;

  const startP1 = () => navigation.navigate(usedFree ? 'Paywall' : 'Paper1', usedFree ? { reason: 'mocks' } : undefined);
  const openAssignment = (a) => {
    if (a.kind === 'mock') startP1();
    else if (a.kind === 'lab' && labById(a.ref)) navigation.navigate('LabRun', { labId: a.ref });
    else if (unitById(a.ref)) navigation.navigate('Quiz', { unitId: a.ref });
  };

  return (
    <Screen header={<TabHeader title={L('Exams', 'Examens')} subtitle={`GCE ${L('June', 'juin')} ${user?.examYear || ''}, ${days} ${L('days', 'jours')}`} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="gap-space-lg pt-space-md pb-space-xl">
        <Section title={L('Practice papers', 'Épreuves d’entraînement')}>
          <V c="bg-surface-container-lowest rounded-xl shadow-sm">
            <PaperRow
              first
              title={L('Paper 1, multiple choice', 'Épreuve 1, QCM')}
              sub={`${P1.count} ${L('questions in 1 hour 30 minutes. A new paper each time.', 'questions en 1 h 30. Une nouvelle épreuve à chaque fois.')}`}
              note={usedFree ? L('This week’s free paper is used. The full course gives unlimited papers.', 'L’épreuve gratuite de la semaine est utilisée. Le cours complet donne des épreuves illimitées.') : !pro ? L('One free paper each week.', 'Une épreuve gratuite par semaine.') : null}
              onPress={startP1}
            />
            <PaperRow
              title={L('Paper 2, structured questions', 'Épreuve 2, questions structurées')}
              sub={`${L('2 hours. Section A: three questions. Section B: two of four. 20 marks each.', '2 heures. Section A : trois questions. Section B : deux sur quatre. 20 points chacune.')}`}
              note={pro ? L('Marked point by point against the mark scheme.', 'Corrigée point par point selon le barème.') : L('You mark it yourself with the mark scheme.', 'Vous la corrigez vous-même avec le barème.')}
              onPress={() => navigation.navigate('Paper2')}
            />
            <PaperRow title={L('Practicals', 'Travaux pratiques')} sub={L('The standard practicals, with results to record and explain.', 'Les TP du programme, avec résultats à noter et expliquer.')} onPress={() => navigation.navigate('Lab')} />
            <PaperRow title={L('Mark a written answer', 'Corriger une réponse écrite')} sub={L('Type an answer or photograph your handwriting.', 'Tapez une réponse ou photographiez votre écriture.')} onPress={() => navigation.navigate('MarkAnswer')} />
          </V>
        </Section>

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
                    {L('Weakest unit:', 'Unité la plus faible :')} <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '700' }}>{weak.unit.short}</T>
                    {acc != null ? ` (${acc}% ${L('correct in papers', 'de réussite aux épreuves')})` : ` (${weak.pct}% ${L('mastered', 'maîtrisé')})`}.
                  </T>
                  <P c="h-11 rounded-lg bg-surface-container-low items-center justify-center" onPress={() => navigation.navigate('Quiz', { unitId: weak.unit.id })}>
                    <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                      {L('Practise this unit', 'S’entraîner sur cette unité')}
                    </T>
                  </P>
                </>
              )}
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Grades here are practice estimates, not GCE Board results.', 'Ces notes sont des estimations, pas des résultats du GCE Board.')}</T>
            </V>
          </Section>
        )}

        <Section title={L('From your teacher', 'De votre enseignant')} action={assignments.length ? null : L('Join a class', 'Rejoindre une classe')} onAction={() => navigation.navigate('JoinClass')}>
          {assignments.length ? (
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              {assignments.slice(0, 5).map((a, i) => {
                const d = Math.ceil((a.dueAt - Date.now()) / 86400000);
                return (
                  <P key={a.id} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => openAssignment(a)} scale={0.99}>
                    <V c="flex-1 gap-0.5">
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                        {a.title}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {a.className}, {L('due in', 'dans')} {d} {d === 1 ? L('day', 'jour') : L('days', 'jours')}
                      </T>
                    </V>
                    <Ic n="chevron_right" s={20} c="outline" />
                  </P>
                );
              })}
            </V>
          ) : (
            <T c="font-body-md text-body-md text-on-surface-variant">{L('No work set right now. Join your class with the code from your teacher to receive it here.', 'Aucun travail pour le moment. Rejoignez votre classe avec le code de votre enseignant pour le recevoir ici.')}</T>
          )}
        </Section>

        <Section title={L('Your papers', 'Vos épreuves')}>
          {history.length ? (
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              {history.slice(0, 8).map((e, i) => (
                <P key={e.id || i} c={`p-space-md flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => (e.kind === 'p1' ? navigation.navigate('Results', { exam: e }) : navigation.navigate('Paper2'))} scale={0.99}>
                  <V c="flex-1 gap-0.5">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {e.kind === 'p1' ? L('Paper 1', 'Épreuve 1') : L('Paper 2', 'Épreuve 2')}, {e.score} / {e.total}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant">
                      {new Date(e.at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}, {L('grade', 'note')} {gradeFor(e.pct)}
                      {e.kind === 'p2' ? `, ${e.marked === 'ai' ? L('marked by the app', 'corrigée par l’application') : L('self-marked', 'auto-corrigée')}` : ''}
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
  );
}
