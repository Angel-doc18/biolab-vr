// The workspace: the tutor solves a question on the board, step by step, writing
// each step and explaining it aloud the way a teacher does in class. Questions are
// typed or taken from the lesson or topic the student has open, and every step can
// be replayed or questioned.
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { prepare, speak, stop as stopVoice } from '../../lib/voice';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader } from '../../ui/chrome';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { contextFor, questionsFor } from '../../lib/tutorContext';
import { unitById, unitsShown } from '../../data/units';
import { lessonById } from '../../data/lessons';
import { focusUnit } from '../../state/selectors';
import { subjectName } from '../../data/subjects';

const BOARD = '#fbfaf5';
const INK = '#1f2a37';
const readTime = (t) => Math.min(9000, Math.max(2500, String(t || '').length * 55));

// A step's lines appearing as if written: letter by letter while it is the step
// being explained, complete once it has been written.
function Written({ text, writing, c, style }) {
  const [n, setN] = useState(writing ? 0 : text.length);
  useEffect(() => {
    if (!writing) {
      setN(text.length);
      return undefined;
    }
    setN(0);
    const per = Math.max(1, Math.ceil(text.length / 70));
    const t = setInterval(
      () =>
        setN((x) => {
          if (x + per >= text.length) {
            clearInterval(t);
            return text.length;
          }
          return x + per;
        }),
      28
    );
    return () => clearInterval(t);
  }, [text, writing]);
  return (
    <T c={c} style={style}>
      {text.slice(0, n)}
    </T>
  );
}

function Control({ icon, label, onPress, disabled, strong }) {
  return (
    <P c={`flex-1 h-12 rounded-lg items-center justify-center gap-0.5 ${strong ? 'bg-primary-container' : 'bg-surface-container-low'} ${disabled ? 'opacity-40' : ''}`} onPress={onPress} disabled={disabled} accessibilityLabel={label}>
      <Ic n={icon} s={20} c={strong ? 'on-primary' : 'on-surface'} fill={strong} />
      <T c={`font-label-sm text-label-sm ${strong ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontSize: 11 }}>
        {label}
      </T>
    </P>
  );
}

export default function Workspace({ navigation, route }) {
  const { user, pro, progress, stats, quota, setQuota, refreshQuota, consentOk, subject: current } = useApp();
  const L = useL();
  const lang = useLang();
  const p = route.params || {};
  const lesson = p.lessonId ? lessonById(p.lessonId) : null;
  const subject = p.subject || unitById(p.unitId || lesson?.unit)?.subject || current;
  const focus = focusUnit(progress, stats.unitPct, pro, subject, unitsShown(subject, user?.className));
  const unitId = p.unitId || lesson?.unit || focus?.id;
  const ctx = contextFor({ lessonId: p.lessonId, unitId });
  const offered = questionsFor({ lessonId: p.lessonId, unitId });
  const name = subjectName(subject, lang);
  const recentKey = `bs:workspace:${user?.id || 'guest'}:${subject}`;

  const [draft, setDraft] = useState(p.question || '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [asked, setAsked] = useState(null);
  const [sol, setSol] = useState(null);
  const [cursor, setCursor] = useState(-1); // step being written; steps.length means the answer is shown
  const [playing, setPlaying] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [recent, setRecent] = useState([]);
  const [askingStep, setAskingStep] = useState(null);
  const [stepDraft, setStepDraft] = useState('');
  const [reply, setReply] = useState(null);
  const [replyBusy, setReplyBusy] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const run = useRef(0);
  const timer = useRef(null);
  const scroller = useRef(null);

  useEffect(() => {
    AsyncStorage.getItem(recentKey)
      .then((raw) => raw && setRecent(JSON.parse(raw)))
      .catch(() => {});
    refreshQuota();
  }, [recentKey, refreshQuota]);
  useEffect(
    () => () => {
      run.current += 1;
      clearTimeout(timer.current);
      stopVoice();
    },
    []
  );

  const halt = useCallback(() => {
    run.current += 1;
    clearTimeout(timer.current);
    stopVoice();
    setPlaying(false);
  }, []);

  // Writes and explains the steps from `from` to the end, one after another, then
  // shows and reads the answer.
  const playFrom = (from, s = sol, voice = voiceOn) => {
    if (!s) return;
    run.current += 1;
    clearTimeout(timer.current);
    stopVoice();
    const mine = run.current;
    const n = s.steps.length;
    setPlaying(true);
    const later = (fn, ms) => {
      if (mine === run.current) timer.current = setTimeout(fn, ms);
    };
    const go = (i) => {
      if (mine !== run.current) return;
      setCursor(i);
      if (i >= n) {
        const end = () => mine === run.current && setPlaying(false);
        if (voice && s.answer) {
          later(end, Math.max(10000, s.answer.length * 150));
          speak(`${L('So the answer is:', 'Donc la réponse est :')} ${s.answer}`, { lang, onDone: end, onError: end, onStopped: end });
        } else end();
        return;
      }
      const say = s.steps[i].say;
      if (voice && say) {
        if (i + 1 < n) prepare(s.steps[i + 1].say, { lang });
        // Moves on once, when the voice finishes, fails, or (if the phone's speech
        // never reports back) after a generous time for the text.
        let moved = false;
        const move = (ms) => {
          if (moved) return;
          moved = true;
          clearTimeout(watch);
          later(() => go(i + 1), ms);
        };
        const watch = setTimeout(() => mine === run.current && move(0), Math.max(15000, say.length * 120));
        speak(say, { lang, onDone: () => move(450), onError: () => move(readTime(say)) });
      } else {
        later(() => go(i + 1), readTime(say || s.steps[i].board));
      }
    };
    go(from);
  };

  const remember = (q, s) =>
    setRecent((list) => {
      const next = [{ q, s, at: Date.now() }, ...list.filter((x) => x.q !== q)].slice(0, 8);
      AsyncStorage.setItem(recentKey, JSON.stringify(next)).catch(() => {});
      return next;
    });

  const solve = async (text = draft) => {
    const q = text.trim();
    if (q.length < 3 || busy) return;
    halt();
    setBusy(true);
    setError(null);
    setReply(null);
    setAskingStep(null);
    setShowAll(false);
    try {
      const r = await post('/v1/ai/solve', { subject, lang, question: q.slice(0, 1500), lesson: ctx ? { title: ctx.title, text: ctx.text } : undefined }, { timeout: 120000 });
      if (typeof r.asksLeft === 'number') setQuota((x) => (x ? { ...x, asksLeft: r.asksLeft } : x));
      setAsked(q);
      setSol(r.solution);
      setDraft('');
      remember(q, r.solution);
      scroller.current?.scrollTo?.({ y: 0, animated: true });
      playFrom(0, r.solution);
    } catch (e) {
      setError(e);
      if (e.code === 'quota') refreshQuota();
    } finally {
      setBusy(false);
    }
  };

  const reopen = (x) => {
    halt();
    setAsked(x.q);
    setSol(x.s);
    setReply(null);
    setAskingStep(null);
    setError(null);
    setCursor(x.s.steps.length);
    scroller.current?.scrollTo?.({ y: 0, animated: true });
  };

  const clearBoard = () => {
    halt();
    setSol(null);
    setAsked(null);
    setReply(null);
    setAskingStep(null);
    setCursor(-1);
  };

  const askStep = async () => {
    const q = stepDraft.trim();
    if (!q || replyBusy || askingStep == null) return;
    const st = sol.steps[askingStep];
    setReplyBusy(true);
    try {
      const r = await post(
        '/v1/ai/ask',
        {
          subject,
          question: `I am working through this question on the board: "${asked.slice(0, 600)}". In step ${askingStep + 1} the tutor wrote: "${st.board.slice(0, 400)}" and explained: "${st.say.slice(0, 500)}". My question about this step: ${q.slice(0, 400)}`,
          history: [],
          context: ctx?.short,
          lesson: ctx ? { title: ctx.title, text: ctx.text } : undefined,
        },
        { timeout: 90000 }
      );
      setReply({ step: askingStep, text: r.text });
      setStepDraft('');
      if (typeof r.asksLeft === 'number') setQuota((x) => (x ? { ...x, asksLeft: r.asksLeft } : x));
    } catch (e) {
      setReply({ step: askingStep, error: e });
    } finally {
      setReplyBusy(false);
    }
  };

  const n = sol?.steps.length || 0;
  const answered = sol && cursor >= n;
  const visible = (i) => showAll || i <= cursor;

  return (
    <Screen bg="bg-surface" keyboard scrollRef={scroller} header={<StackHeader title={L('Workspace', 'Espace de travail')} subtitle={ctx?.short || name} subtitleColor="on-surface-variant" avatar={false} />}>
      <V c="pt-space-md pb-space-xl gap-space-md">
        {!consentOk && (
          <V c="bg-surface-container-low rounded-xl p-space-md gap-1">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('The tutor opens after your parent approves your account', 'Le tuteur s’ouvre après l’accord de votre parent')}
            </T>
            <P onPress={() => navigation.navigate('Guardian', { fromHome: true })} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary-container">{L('Send the approval link', 'Envoyer le lien d’accord')}</T>
            </P>
          </V>
        )}

        {!sol && !busy && (
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L(
              'Give the tutor a question and watch it solved on the board, one step at a time. Each step is written out and explained aloud, as a teacher does in class. Tap a step to hear it again, or ask about it.',
              'Donnez une question au tuteur et regardez-la résolue au tableau, étape par étape. Chaque étape est écrite et expliquée à voix haute, comme en classe. Touchez une étape pour la réentendre ou posez une question dessus.'
            )}
          </T>
        )}

        {busy && (
          <V c="rounded-xl border border-outline-variant p-space-lg items-center gap-space-sm" style={{ backgroundColor: BOARD }}>
            <ActivityIndicator color={C['primary-container']} />
            <T c="font-body-md text-body-md text-on-surface-variant">{L('The tutor is working it out...', 'Le tuteur réfléchit...')}</T>
          </V>
        )}

        {sol && !busy && (
          <>
            <V c="rounded-xl border border-outline-variant overflow-hidden" style={{ backgroundColor: BOARD }}>
              <V c="px-space-md py-space-sm border-b border-outline-variant gap-1">
                <T c="font-label-md text-label-md text-on-surface-variant">{L('Question', 'Question')}</T>
                <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                  {asked}
                </T>
              </V>

              {sol.steps.map((st, i) =>
                !visible(i) ? null : (
                  <V key={i} c={`flex-row gap-space-sm px-space-md py-space-sm ${i === cursor && playing ? 'bg-surface-container-low' : ''}`}>
                    <P c={`w-8 h-8 rounded-full items-center justify-center ${i === cursor && playing ? 'bg-primary-container' : 'border border-outline-variant'}`} onPress={() => playFrom(i)} accessibilityLabel={`${L('Play step', 'Lire l’étape')} ${i + 1}`} hitSlop={6}>
                      <T c={`font-label-md text-label-md ${i === cursor && playing ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                        {i + 1}
                      </T>
                    </P>
                    <V c="flex-1 gap-1.5">
                      <Written text={st.board} writing={i === cursor && playing} c="font-body-lg text-body-lg" style={{ color: INK, lineHeight: 28, fontWeight: '600' }} />
                      {!!st.say && (
                        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                          {st.say}
                        </T>
                      )}
                      {!(i === cursor && playing) && (
                        <V c="flex-row gap-space-md">
                          <P onPress={() => playFrom(i)} hitSlop={6}>
                            <T c="font-label-md text-label-md text-primary-container">{L('Explain again', 'Réexpliquer')}</T>
                          </P>
                          <P
                            onPress={() => {
                              setAskingStep(askingStep === i ? null : i);
                              setReply(null);
                            }}
                            hitSlop={6}
                          >
                            <T c="font-label-md text-label-md text-primary-container">{askingStep === i ? L('Close', 'Fermer') : L('Ask about this step', 'Question sur cette étape')}</T>
                          </P>
                        </V>
                      )}
                      {askingStep === i && (
                        <V c="gap-space-xs pt-1">
                          <V c="flex-row items-end gap-space-xs">
                            <Input c="flex-1 min-h-[44px] max-h-[110px] bg-surface-container-lowest border border-outline-variant px-3 py-2.5 rounded-xl text-body-md" placeholder={L('What is not clear?', 'Qu’est-ce qui n’est pas clair ?')} value={stepDraft} onChangeText={setStepDraft} multiline maxLength={400} />
                            <P c={`w-11 h-11 rounded-xl items-center justify-center ${stepDraft.trim() && !replyBusy ? 'bg-primary-container' : 'bg-surface-container'}`} onPress={askStep} disabled={!stepDraft.trim() || replyBusy} accessibilityLabel={L('Send', 'Envoyer')}>
                              {replyBusy ? <ActivityIndicator size="small" color={C['on-primary']} /> : <Ic n="arrow_upward" s={20} c={stepDraft.trim() ? 'on-primary' : 'outline'} />}
                            </P>
                          </V>
                          {reply?.step === i && reply.text && (
                            <V c="bg-surface-container-lowest rounded-lg p-space-sm gap-1">
                              <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                                {reply.text.replace(/\*\*/g, '')}
                              </T>
                              <P c="self-start" onPress={() => speak(reply.text, { lang })} hitSlop={6}>
                                <T c="font-label-md text-label-md text-primary-container">{L('Listen', 'Écouter')}</T>
                              </P>
                            </V>
                          )}
                          {reply?.step === i && reply.error && <ErrorNote error={reply.error} />}
                        </V>
                      )}
                    </V>
                  </V>
                )
              )}

              {(answered || showAll) && (
                <V c="mx-space-md mb-space-md mt-space-xs p-space-md rounded-lg border-2 border-primary-container gap-1" style={{ backgroundColor: '#ffffff' }}>
                  <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                    {L('Answer', 'Réponse')}
                  </T>
                  <T c="font-body-lg text-body-lg" style={{ color: INK, lineHeight: 26, fontWeight: '700' }}>
                    {sol.answer}
                  </T>
                  {!!sol.check && (
                    <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
                      {sol.check}
                    </T>
                  )}
                </V>
              )}
            </V>

            <V c="flex-row gap-space-xs">
              <Control icon="skip_previous" label={L('Back', 'Retour')} disabled={cursor <= 0} onPress={() => (halt(), setShowAll(false), setCursor((c) => Math.max(0, Math.min(c, n) - 1)))} />
              <Control icon={playing ? 'pause' : 'play_arrow'} label={playing ? L('Pause', 'Pause') : answered ? L('Replay', 'Rejouer') : L('Play', 'Lire')} strong onPress={() => (playing ? halt() : playFrom(answered ? 0 : Math.max(0, cursor)))} />
              <Control icon="skip_next" label={L('Next', 'Suivant')} disabled={answered} onPress={() => (halt(), setCursor((c) => Math.min(n, c + 1)))} />
              <Control
                icon={voiceOn ? 'volume_up' : 'volume_off'}
                label={voiceOn ? L('Sound on', 'Son activé') : L('Sound off', 'Son coupé')}
                onPress={() => {
                  const v = !voiceOn;
                  setVoiceOn(v);
                  if (playing) playFrom(Math.max(0, cursor), sol, v);
                }}
              />
              <Control icon="done_all" label={L('All steps', 'Tout voir')} disabled={answered && !playing} onPress={() => (halt(), setShowAll(true), setCursor(n))} />
            </V>

            {answered && !!sol.similar && (
              <V c="bg-surface-container-lowest rounded-xl border border-outline-variant p-space-md gap-space-sm">
                <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Now try one yourself', 'À vous maintenant')}
                </T>
                <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                  {sol.similar}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Work it out on paper first, then check it on the board.', 'Faites-le d’abord sur papier, puis vérifiez au tableau.')}</T>
                <V c="flex-row gap-space-sm">
                  <P c="flex-1 h-11 rounded-lg bg-primary-container items-center justify-center" onPress={() => solve(sol.similar)}>
                    <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '700' }}>
                      {L('Check on the board', 'Vérifier au tableau')}
                    </T>
                  </P>
                  <P c="flex-1 h-11 rounded-lg bg-surface-container-low items-center justify-center" onPress={clearBoard}>
                    <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
                      {L('New question', 'Nouvelle question')}
                    </T>
                  </P>
                </V>
              </V>
            )}
          </>
        )}

        <ErrorNote error={error} />
        {error?.code === 'quota' && (
          <P c="self-start" onPress={() => navigation.navigate('Paywall', { reason: 'ai' })} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {L('See prices', 'Voir les prix')}
            </T>
          </P>
        )}

        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
            {sol ? L('Another question for the board', 'Une autre question pour le tableau') : L('Your question', 'Votre question')}
          </T>
          <Input
            c="min-h-[96px] max-h-[200px] bg-surface-container-lowest border border-outline-variant px-3 py-3 rounded-xl text-body-md"
            placeholder={L('Type or paste a question, for example a calculation from your exercise book', 'Tapez ou collez une question, par exemple un calcul de votre cahier')}
            value={draft}
            onChangeText={setDraft}
            multiline
            textAlignVertical="top"
            maxLength={1500}
          />
          <Cta label={L('Solve it on the board', 'Résoudre au tableau')} icon="co_present" loading={busy} disabled={draft.trim().length < 3 || !consentOk} onPress={() => solve()} />
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontSize: 11, lineHeight: 16 }}>
            {quota ? `${quota.asksLeft} ${L('questions left today', 'questions restantes aujourd’hui')}. ` : ''}
            {L('A question already solved for your class opens without using one. Solutions are made by AI; check them against your lessons.', 'Une question déjà résolue pour votre classe s’ouvre sans en utiliser. Les solutions sont faites par IA ; vérifiez-les avec vos leçons.')}
          </T>
        </V>

        {offered.length > 0 && (
          <V c="gap-space-xs">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {lesson ? L('Questions from this lesson', 'Questions de cette leçon') : L('Questions from this topic', 'Questions de ce thème')}
            </T>
            <V c="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden">
              {offered.map((x, i) => (
                <P key={x.text} c={`px-space-md py-3 flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} scale={1} onPress={() => solve(x.text)} disabled={busy}>
                  <V c="flex-1 gap-0.5">
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{x.kind === 'example' ? L('Worked example', 'Exemple corrigé') : x.kind === 'check' ? L('Check yourself', 'Vérifiez-vous') : L('Topic quiz', 'Quiz du thème')}</T>
                    <T c="font-body-sm text-body-sm text-on-surface" numberOfLines={3}>
                      {x.text}
                    </T>
                  </V>
                  <Ic n="co_present" s={20} c="primary-container" />
                </P>
              ))}
            </V>
          </V>
        )}

        {recent.length > 0 && (
          <V c="gap-space-xs">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Solved recently', 'Résolues récemment')}
            </T>
            <V c="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden">
              {recent.map((x, i) => (
                <P key={x.at} c={`px-space-md py-3 flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`} scale={1} onPress={() => reopen(x)}>
                  <T c="font-body-sm text-body-sm text-on-surface flex-1" numberOfLines={2}>
                    {x.q}
                  </T>
                  <Ic n="history" s={18} c="on-surface-variant" />
                </P>
              ))}
            </V>
          </V>
        )}
      </V>
    </Screen>
  );
}
