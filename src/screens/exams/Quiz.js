import { useMemo, useState } from 'react';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { unitById } from '../../data/units';
import { gradeFor } from '../../state/selectors';
import { completeMatchingAssignment } from '../../lib/assignments';
import { unitLocked } from '../../data/plan';

const shuffle = (a) => a.map((x) => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);

// Unit practice quiz with instant feedback and worked explanations.
export default function Quiz({ navigation, route }) {
  const { pro, answer, finishQuiz, resetQuiz, progress } = useApp();
  const L = useL();
  const unit = unitById(route.params?.unitId || 'cell');
  const [round, setRound] = useState(0);
  const questions = useMemo(() => unit.quiz.map((q, qi) => ({ ...q, qi, order: shuffle(q.a.map((_, i) => i)) })), [unit, round]);
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState({});
  const [finished, setFinished] = useState(null);
  const q = questions[i];
  const pick = picks[i];
  const locked = unitLocked(unit.id, pro);

  const choose = (orig) => {
    if (pick != null) return;
    setPicks((p) => ({ ...p, [i]: orig }));
    answer(unit.id, q.qi, orig === 0, orig);
  };
  const finish = () => {
    const correct = Object.values(picks).filter((p) => p === 0).length;
    const pct = Math.round((correct / questions.length) * 100);
    finishQuiz(unit.id, questions.length);
    completeMatchingAssignment('quiz', unit.id, pct);
    setFinished({ correct, pct });
  };
  const restart = () => {
    resetQuiz(unit.id);
    setPicks({});
    setI(0);
    setFinished(null);
    setRound((r) => r + 1);
  };

  if (locked) {
    return (
      <Screen header={<StackHeader title={L('Practice quiz', 'Quiz')} subtitle={unit.short} />}>
        <V c="pt-space-xl items-center gap-space-md">
          <Ic n="lock" s={40} c="primary-container" />
          <T c="font-headline-sm text-headline-sm text-on-surface text-center">{L('This unit is part of Premium', 'Cette unité fait partie du Premium')}</T>
          <Cta label={L('See plans', 'Voir les offres')} onPress={() => navigation.replace('Paywall')} />
        </V>
      </Screen>
    );
  }

  if (finished) {
    const best = progress.quiz[unit.id]?.best;
    return (
      <Screen header={<StackHeader title={L('Quiz results', 'Résultats')} subtitle={unit.short} />}>
        <V c="pt-space-lg gap-space-md">
          <V c="bg-primary-container rounded-xl p-space-lg items-center gap-1">
            <T c="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider">{L('Your score', 'Votre score')}</T>
            <T c="font-display-lg text-display-lg text-on-primary">
              {finished.correct}/{questions.length}
            </T>
            <V c="px-2.5 py-0.5 rounded bg-secondary-fixed">
              <T c="font-label-md text-label-md text-on-secondary-fixed">
                {finished.pct}% · {L('Practice grade', 'Note estimée')} {gradeFor(finished.pct)}
              </T>
            </V>
            {best != null && (
              <T c="font-body-sm text-body-sm text-on-primary-container mt-1">
                {L('Best so far', 'Meilleur score')}: {best}%
              </T>
            )}
          </V>
          <V c="gap-2">
            {questions.map((qq, k) => (
              <V key={k} c="flex-row items-start gap-2 bg-surface-container-lowest p-3 rounded-xl shadow-sm">
                <Ic n={picks[k] === 0 ? 'check_circle' : 'cancel'} s={20} c={picks[k] === 0 ? 'secondary' : 'error'} />
                <V c="flex-1">
                  <T c="font-body-md text-body-md text-on-surface">{qq.q}</T>
                  {picks[k] !== 0 && <T c="font-body-sm text-body-sm text-secondary mt-1">{qq.a[0]}</T>}
                </V>
              </V>
            ))}
          </V>
          <Cta label={L('Try again', 'Recommencer')} icon="replay" onPress={restart} />
          <Cta variant="soft" icon={null} label={L('Back to unit', 'Retour à l’unité')} onPress={() => navigation.goBack()} />
        </V>
      </Screen>
    );
  }

  return (
    <Screen
      header={<StackHeader title={L('Practice quiz', 'Quiz')} subtitle={`${L('Unit', 'Unité')} ${unit.n} · ${unit.short}`} avatar={false} />}
      footer={
        <V c="px-margin py-3 bg-surface-container-lowest flex-row gap-space-sm" style={{ shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 12, elevation: 8 }}>
          <P c="h-12 px-space-md rounded-xl bg-surface-container flex-row items-center gap-1" onPress={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0}>
            <Ic n="arrow_back" s={20} c="primary" />
            <T c="font-label-lg text-label-lg text-primary">{L('Prev', 'Préc.')}</T>
          </P>
          {i < questions.length - 1 ? (
            <P c="flex-1 h-12 rounded-xl bg-primary flex-row items-center justify-center gap-2 shadow-md" onPress={() => setI((x) => x + 1)}>
              <T c="font-label-lg text-label-lg text-on-primary">{L('Next question', 'Question suivante')}</T>
              <Ic n="arrow_forward" s={20} c="on-primary" />
            </P>
          ) : (
            <P c="flex-1 h-12 rounded-xl bg-secondary flex-row items-center justify-center gap-2 shadow-md" onPress={finish}>
              <T c="font-label-lg text-label-lg text-on-secondary">{L('Finish quiz', 'Terminer')}</T>
              <Ic n="task_alt" s={20} c="on-secondary" />
            </P>
          )}
        </V>
      }
    >
      <V c="pt-space-md gap-space-md pb-space-lg">
        <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-xs">
              <T c="font-headline-sm text-headline-sm text-primary" style={{ fontWeight: '700' }}>
                Q {i + 1}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('of', 'sur')} {questions.length}
              </T>
            </V>
            <T c="font-label-sm text-label-sm text-secondary">
              {Object.values(picks).filter((p) => p === 0).length} {L('correct', 'justes')}
            </T>
          </V>
          <Bar pct={((i + 1) / questions.length) * 100} c="h-2 bg-surface-container" fill="bg-primary" />
        </V>
        <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <T c="font-body-lg text-body-lg text-on-surface" style={{ lineHeight: 26 }}>
            {q.q}
          </T>
        </V>
        <V c="gap-space-sm">
          {q.order.map((orig, k) => {
            const chosen = pick === orig;
            const reveal = pick != null;
            const bg = !reveal ? 'bg-surface-container-lowest' : orig === 0 ? 'bg-secondary-container' : chosen ? 'bg-error-container' : 'bg-surface-container-lowest opacity-60';
            return (
              <P key={orig} c={`w-full ${bg} rounded-xl p-space-md shadow-sm flex-row items-start gap-space-sm`} onPress={() => choose(orig)} disabled={reveal} scale={0.99}>
                <V c={`w-6 h-6 rounded-full items-center justify-center mt-0.5 ${reveal && orig === 0 ? 'bg-secondary' : reveal && chosen ? 'bg-error' : 'bg-surface-container'}`}>
                  {reveal && (orig === 0 || chosen) ? (
                    <Ic n={orig === 0 ? 'check' : 'close'} s={16} c="on-primary" />
                  ) : (
                    <T c="font-label-md text-label-md text-on-surface-variant">{String.fromCharCode(65 + k)}</T>
                  )}
                </V>
                <T c={`font-body-md text-body-md flex-1 ${reveal && orig === 0 ? 'text-on-secondary-container' : reveal && chosen ? 'text-on-error-container' : 'text-on-surface'}`}>{q.a[orig]}</T>
              </P>
            );
          })}
        </V>
        {pick != null && (
          <V c="bg-surface-container-low rounded-xl p-space-md gap-1">
            <V c="flex-row items-center gap-1.5">
              <Ic n="lightbulb" s={18} c="tertiary-container" />
              <T c="font-label-md text-label-md text-tertiary-container uppercase tracking-wider">{L('Explanation', 'Explication')}</T>
            </V>
            <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
              {q.why}
            </T>
          </V>
        )}
      </V>
    </Screen>
  );
}
