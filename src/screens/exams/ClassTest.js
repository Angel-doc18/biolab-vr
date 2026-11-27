// A test from the teacher. The student answers every question and hands in
// once; multiple choice is marked at once and written answers by the AI
// against the teacher's scheme. Then the marks, the right answers and the
// feedback on each written answer.
import { useEffect, useState } from 'react';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useL } from '../../i18n';

const letter = (o) => String(o).trim().charAt(0).toUpperCase();
const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(1));

export default function ClassTest({ route }) {
  const L = useL();
  const id = route.params?.assignmentId;
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    get(`/v1/assignments/${id}/test`).then(setData).catch(setError);
  }, [id]);

  const header = <StackHeader title={data?.assignment.title || L('Test', 'Devoir')} subtitle={data?.assignment.className} />;
  if (!data) {
    return (
      <Screen header={header}>
        <V c="pt-space-md">{error ? <ErrorNote error={error} /> : <Spinner />}</V>
      </Screen>
    );
  }

  const done = data.result;
  const pick = (n, v) => setAnswers((a) => ({ ...a, [n]: v }));
  const answered = data.questions.filter((q) => String(answers[q.n] || '').trim()).length;
  const written = data.questions.some((q) => q.type === 'structured' && String(answers[q.n] || '').trim());
  const handIn = async () => {
    setSending(true);
    setError(null);
    try {
      const r = await post(`/v1/assignments/${id}/test`, { answers }, { timeout: 175000 });
      setData((d) => ({ ...d, questions: r.questions, result: r.result }));
      setConfirm(false);
    } catch (e) {
      setError(e);
    } finally {
      setSending(false);
    }
  };

  return (
    <Screen header={header} keyboard>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        {done ? (
          <Score result={done} L={L} />
        ) : (
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Answer every question, then hand in. You can hand in only once, so check your answers first.', 'Répondez à chaque question, puis rendez. Vous ne pouvez rendre qu’une fois : vérifiez vos réponses avant.')}
          </T>
        )}

        {data.questions.map((q) => {
          const mark = done?.marks.find((m) => m.n === q.n);
          return (
            <V key={q.n} c="gap-space-xs">
              <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22, fontWeight: '600' }}>
                {q.n}. {q.text}
                {q.type === 'structured' ? <T c="font-body-sm text-body-sm text-on-surface-variant"> ({q.marks} {L('marks', 'points')})</T> : null}
              </T>
              {q.type === 'mcq' ? (
                <Choices q={q} chosen={done ? done.answers[q.n] : answers[q.n]} done={!!done} onPick={(l) => pick(q.n, l)} L={L} />
              ) : done ? (
                <Written q={q} answer={done.answers[q.n]} mark={mark} L={L} />
              ) : (
                <Input
                  c="min-h-[110px] px-3 py-2 rounded-xl bg-surface-container-low text-body-md"
                  placeholder={L('Write your answer here', 'Écrivez votre réponse ici')}
                  value={answers[q.n] || ''}
                  onChangeText={(t) => pick(q.n, t)}
                  multiline
                  textAlignVertical="top"
                  maxLength={6000}
                />
              )}
            </V>
          );
        })}

        <ErrorNote error={error} />
        {!done &&
          (confirm ? (
            <V c="rounded-2xl border border-surface-container p-space-md gap-space-sm">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Hand in your answers?', 'Rendre vos réponses ?')}
              </T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L(`You answered ${answered} of ${data.questions.length} questions. You cannot change them after.`, `Vous avez répondu à ${answered} questions sur ${data.questions.length}. Vous ne pourrez plus les changer.`)}
              </T>
              <Cta variant="dark" icon={null} label={sending ? (written ? L('Marking your answers...', 'Correction de vos réponses...') : L('Handing in...', 'Envoi...')) : L('Hand in', 'Rendre')} disabled={sending} onPress={handIn} />
              {!sending && <Cta variant="soft" icon={null} label={L('Go back to my answers', 'Revenir à mes réponses')} onPress={() => setConfirm(false)} />}
            </V>
          ) : (
            <Cta variant="dark" icon={null} label={L('Hand in', 'Rendre')} disabled={!answered} onPress={() => setConfirm(true)} />
          ))}
      </V>
    </Screen>
  );
}

function Score({ result, L }) {
  const got = result.marks.reduce((a, m) => a + m.awarded, 0);
  const total = result.marks.reduce((a, m) => a + m.total, 0);
  return (
    <V c="rounded-2xl bg-surface-container-low p-space-md flex-row items-center gap-space-md">
      <T c="font-headline-lg text-headline-lg text-primary-container" style={{ fontWeight: '800' }}>
        {result.score}%
      </T>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {L('Handed in', 'Rendu')}
        </T>
        <T c="font-body-sm text-body-sm text-on-surface-variant">
          {fmt(got)} {L('of', 'sur')} {fmt(total)} {L('marks. Your teacher sees this result.', 'points. Votre enseignant voit ce résultat.')}
        </T>
      </V>
    </V>
  );
}

// The four options: chosen before handing in; after, the right one in green.
function Choices({ q, chosen, done, onPick, L }) {
  return (
    <V c="gap-1.5">
      {q.options.map((o) => {
        const l = letter(o);
        const on = chosen === l;
        const right = done && l === q.answer;
        const wrong = done && on && l !== q.answer;
        return (
          <P
            key={o}
            c={`px-space-sm py-2.5 rounded-xl border ${right ? 'border-secondary bg-surface-container-low' : wrong ? 'border-error' : on ? 'border-primary-container bg-surface-container-low' : 'border-outline-variant'}`}
            onPress={() => !done && onPick(l)}
            disabled={done}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
          >
            <V c="flex-row items-center gap-2">
              <T c="font-body-md text-body-md text-on-surface flex-1">{o}</T>
              {right && <Ic n="check_circle" s={18} c="secondary" fill />}
              {wrong && <Ic n="cancel" s={18} c="error" fill />}
              {!done && on && <Ic n="radio_button_checked" s={18} c="primary-container" />}
            </V>
          </P>
        );
      })}
      {done && (
        <T c={`font-body-sm text-body-sm ${chosen === q.answer ? 'text-secondary' : 'text-error'}`} style={{ lineHeight: 20 }}>
          {chosen === q.answer ? L('Correct. ', 'Correct. ') : chosen ? `${L('The answer is', 'La réponse est')} ${q.answer}. ` : `${L('Not answered. The answer is', 'Sans réponse. La réponse est')} ${q.answer}. `}
          <T c="font-body-sm text-body-sm text-on-surface-variant">{q.explanation}</T>
        </T>
      )}
    </V>
  );
}

// A written answer after marking: what was written, the marks, the feedback
// and the point-by-point marking, then the model answer.
function Written({ q, answer, mark, L }) {
  return (
    <V c="gap-1.5">
      <V c="rounded-xl bg-surface-container-low px-space-sm py-2">
        <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
          {answer || L('No answer given.', 'Sans réponse.')}
        </T>
      </V>
      {!!mark && (
        <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
          {fmt(mark.awarded)} / {fmt(mark.total)} {L('marks', 'points')}
        </T>
      )}
      {!!mark?.feedback && (
        <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
          {mark.feedback}
        </T>
      )}
      {(mark?.criteria || []).map((c, i) => (
        <V key={i} c="flex-row gap-2">
          <Ic n={c.awarded >= c.max ? 'check_circle' : c.awarded > 0 ? 'adjust' : 'radio_button_unchecked'} s={16} c={c.awarded >= c.max ? 'secondary' : 'outline'} />
          <T c="font-body-sm text-body-sm text-on-surface-variant flex-1" style={{ lineHeight: 20 }}>
            {c.point} ({fmt(c.awarded)}/{fmt(c.max)}){c.comment ? `: ${c.comment}` : ''}
          </T>
        </V>
      ))}
      {!!q.modelAnswer && (
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
          <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
            {L('Model answer', 'Réponse modèle')}:{' '}
          </T>
          {q.modelAnswer}
        </T>
      )}
    </V>
  );
}
