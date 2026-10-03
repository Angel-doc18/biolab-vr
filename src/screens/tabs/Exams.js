// Exams, step 1: choose a subject. Then what to practise for it (ExamMenu),
// then the paper or topic quiz. Work set by a teacher is listed here too.
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { StepLine, SubjectGrid } from '../../ui/hub';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { daysToExam } from '../../state/progress';
import { examLabel } from '../../data/subjects';
import { FREE_MOCKS_PER_WEEK, mocksThisWeek } from '../../data/plan';
import { unitById } from '../../data/units';
import { labById } from '../../data/labs';
import { mockSubject } from '../../lib/exam';
import { useSubjectCards } from '../subjectCards';
import { Section } from './Home';

export default function Exams({ navigation }) {
  const { user, pro, progress, subject, setSubject } = useApp();
  const L = useL();
  const cards = useSubjectCards('exams');
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
  const openAssignment = (a) => {
    if (a.kind === 'mock') {
      const s = mockSubject(a.ref) || subject;
      if (s !== subject) setSubject(s);
      const used = !pro && mocksThisWeek(progress.exams, s) >= FREE_MOCKS_PER_WEEK;
      navigation.navigate(used ? 'Paywall' : 'Paper1', used ? { reason: 'mocks' } : { subject: s });
    } else if (a.kind === 'lab' && labById(a.ref)) navigation.navigate('LabRun', { labId: a.ref });
    else if (unitById(a.ref)) navigation.navigate('Quiz', { unitId: a.ref });
  };

  return (
    <Screen
      header={<TabHeader title={L('Exams', 'Examens')} subtitle={`${examLabel(user, L)}, ${days} ${days === 1 ? L('day', 'jour') : L('days', 'jours')}`} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}
    >
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="gap-space-xs">
          <StepLine step={L('Step 1 of 3', 'Étape 1 sur 3')} text={L('Choose a subject', 'Choisissez une matière')} />
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Tap a subject to see its papers, topic quizzes and your results.', 'Touchez une matière pour voir ses épreuves, ses quiz et vos résultats.')}
          </T>
        </V>

        <SubjectGrid
          items={cards}
          onPick={(id) => navigation.navigate('ExamMenu', { subject: id })}
          manage={L('Add or change subjects', 'Ajouter ou changer de matière')}
          onManage={() => navigation.navigate('ExamClass', { fromSettings: true })}
        />

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
      </V>
    </Screen>
  );
}
