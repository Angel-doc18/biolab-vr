// A teacher's view of a test given to a class: the average, how the class did
// on each question, and every student's score; tap a student to see their
// answers and the marks for each.
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useL } from '../../i18n';

const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(1));
const short = (t, n = 70) => (t.length > n ? `${t.slice(0, n - 1).trim()}...` : t);

export default function TestResults({ route }) {
  const L = useL();
  const { classId, assignmentId, title } = route.params || {};
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      setData(await get(`/v1/classes/${classId}/assignments/${assignmentId}/results`));
      setError(null);
    } catch (e) {
      setError(e);
    }
  }, [classId, assignmentId]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const header = <StackHeader title={data?.assignment.title || title || L('Test results', 'Résultats')} />;
  if (!data) {
    return (
      <Screen header={header}>
        <V c="pt-space-md">{error ? <ErrorNote error={error} /> : <Spinner />}</V>
      </Screen>
    );
  }

  const handed = data.students.filter((s) => s.submittedAt);
  const left = Math.ceil((data.assignment.dueAt - Date.now()) / 86400000);

  return (
    <Screen header={header} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="rounded-2xl bg-surface-container-low p-space-md flex-row items-center gap-space-md">
          <T c="font-headline-lg text-headline-lg text-primary-container" style={{ fontWeight: '800' }}>
            {data.average == null ? '-' : `${data.average}%`}
          </T>
          <V c="flex-1 gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Class average', 'Moyenne de la classe')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {handed.length} {L('of', 'sur')} {data.students.length} {L('handed in', 'ont rendu')}.{' '}
              {left > 0 ? `${L('Due in', 'À rendre dans')} ${left} ${left === 1 ? L('day', 'jour') : L('days', 'jours')}.` : L('Closed.', 'Terminé.')}
            </T>
          </V>
        </V>

        {handed.length > 0 && (
          <V c="gap-space-xs">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('Question by question', 'Question par question')}
            </T>
            <V c="rounded-2xl border border-surface-container overflow-hidden">
              {data.questions.map((q, i) => {
                const pct = data.perQuestion.find((p) => p.n === q.n)?.pct ?? 0;
                return (
                  <V key={q.n} c={`px-space-md py-space-sm gap-1 ${i ? 'border-t border-surface-container' : ''}`}>
                    <V c="flex-row items-center gap-space-sm">
                      <T c="font-body-sm text-body-sm text-on-surface flex-1" numberOfLines={2}>
                        {q.n}. {short(q.text)}
                      </T>
                      <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
                        {pct}%
                      </T>
                    </V>
                    <Bar pct={pct} c="h-1 bg-surface-container-high" fill={pct >= 70 ? 'bg-secondary' : pct < 40 ? 'bg-error' : 'bg-primary-container'} />
                  </V>
                );
              })}
            </V>
          </V>
        )}

        <V c="gap-space-xs">
          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
            {L('Students', 'Élèves')}
          </T>
          {!data.students.length && (
            <T c="font-body-md text-body-md text-on-surface-variant">{L('No students in this class yet.', 'Aucun élève dans cette classe.')}</T>
          )}
          <V c="rounded-2xl border border-surface-container overflow-hidden">
            {data.students.map((s, i) => (
              <V key={s.id} c={i ? 'border-t border-surface-container' : ''}>
                <P c="px-space-md py-space-sm flex-row items-center gap-space-sm" onPress={() => s.marks && setOpen(open === s.id ? null : s.id)} disabled={!s.marks} scale={0.99}>
                  <T c="font-body-md text-body-md text-on-surface flex-1" numberOfLines={1}>
                    {s.name}
                  </T>
                  {s.submittedAt ? (
                    <>
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                        {s.score}%
                      </T>
                      <Ic n={open === s.id ? 'expand_less' : 'expand_more'} s={20} c="outline" />
                    </>
                  ) : (
                    <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Not handed in', 'Pas rendu')}</T>
                  )}
                </P>
                {open === s.id && <Answers questions={data.questions} student={s} L={L} />}
              </V>
            ))}
          </V>
        </V>
      </V>
    </Screen>
  );
}

// One student's answers and marks, question by question.
function Answers({ questions, student, L }) {
  return (
    <V c="px-space-md pb-space-md gap-space-sm">
      {questions.map((q) => {
        const m = student.marks.find((x) => x.n === q.n);
        const a = student.answers[q.n];
        const right = q.type === 'mcq' && a === q.answer;
        return (
          <V key={q.n} c="gap-0.5">
            <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
              {q.n}. {short(q.text, 90)}
            </T>
            {q.type === 'mcq' ? (
              <T c={`font-body-sm text-body-sm ${right ? 'text-secondary' : 'text-error'}`} style={{ fontWeight: '600' }}>
                {a ? `${L('Chose', 'A choisi')} ${a}` : L('No answer', 'Sans réponse')}
                {right ? '' : `, ${L('answer', 'réponse')} ${q.answer}`}
              </T>
            ) : (
              <>
                <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                  {a || L('No answer', 'Sans réponse')}
                </T>
                {!!m && (
                  <T c="font-body-sm text-body-sm text-primary-container" style={{ fontWeight: '700' }}>
                    {fmt(m.awarded)} / {fmt(m.total)} {L('marks', 'points')}
                    {m.feedback ? <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontWeight: '400' }}>. {m.feedback}</T> : null}
                  </T>
                )}
              </>
            )}
          </V>
        );
      })}
    </V>
  );
}
