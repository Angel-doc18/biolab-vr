import { useEffect, useMemo, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from '../../lib/voice';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import ListenButton from '../../ui/ListenButton';
import { Diagram } from '../../diagrams';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { lessonById, lessonNumber, lessonsFor, plain } from '../../data/lessons';
import { unitById } from '../../data/units';
import { lessonLocked } from '../../data/plan';

// Body text with **key terms** in bold and *scientific names* in italics.
function Rich({ text, c = 'font-body-lg text-body-lg text-on-surface' }) {
  const italics = (s, k) =>
    s.split('*').map((b, j) =>
      j % 2 ? (
        <T key={`${k}-${j}`} c={c} style={{ fontStyle: 'italic' }}>
          {b}
        </T>
      ) : (
        b
      )
    );
  const parts = text.split('**');
  return (
    <T c={c} style={{ lineHeight: 27 }}>
      {parts.map((s, i) =>
        i % 2 ? (
          <T key={i} c={c} style={{ fontWeight: '700' }}>
            {italics(s, i)}
          </T>
        ) : (
          italics(s, i)
        )
      )}
    </T>
  );
}

export default function Lesson({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { pro, progress, completeLesson, answer, toggleBookmark } = useApp();
  const L = useL();
  const lang = useLang();
  const lesson = lessonById(route.params?.lessonId) || lessonsFor('cell')[0];
  // A shared lesson is read inside the unit it was opened from.
  const unit = unitById(route.params?.unitId) || unitById(lesson.unit);
  const siblings = lessonsFor(unit.id);
  const idx = siblings.indexOf(lesson);
  const nextLesson = siblings[idx + 1];
  const done = !!progress.lessons[lesson.id];
  const saved = !!progress.bookmarks?.[lesson.id];
  const [toast, showToast] = useToast();

  // Read aloud paragraph by paragraph, so it can pause and resume on every platform.
  const script = useMemo(
    () => [lesson.title, ...lesson.body.map(plain), ...(lesson.examples || []).map((e) => `Worked example. ${plain(e.q)} ${e.steps.map(plain).join('. ')}.`), `Exam tip. ${plain(lesson.tip)}`],
    [lesson]
  );
  const [playing, setPlaying] = useState(false);
  const [para, setPara] = useState(0);
  const playRef = useRef(false);
  const started = useRef(Date.now());

  const speakFrom = (i) => {
    if (i >= script.length) {
      playRef.current = false;
      setPlaying(false);
      setPara(0);
      return;
    }
    setPara(i);
    if (i + 1 < script.length) Speech.prepare(script[i + 1], { language: 'en-GB' });
    Speech.speak(script[i], {
      language: 'en-GB',
      rate: 0.92,
      onDone: () => playRef.current && speakFrom(i + 1),
      onError: () => {
        playRef.current = false;
        setPlaying(false);
      },
    });
  };
  const toggle = () => {
    if (playRef.current) {
      playRef.current = false;
      setPlaying(false);
      Speech.stop();
    } else {
      playRef.current = true;
      setPlaying(true);
      speakFrom(para);
    }
  };
  useEffect(
    () => () => {
      playRef.current = false;
      Speech.stop();
    },
    []
  );
  useEffect(() => {
    if (lessonLocked(unit.id, idx, pro)) navigation.replace('Paywall');
  }, [unit.id, idx, pro, navigation]);

  // Check question (options shuffled once per visit).
  const options = useMemo(() => lesson.check.a.map((t, i) => ({ t, ok: i === 0 })).sort(() => Math.random() - 0.5), [lesson]);
  const [pick, setPick] = useState(null);

  const complete = () => {
    const minutes = Math.max(1, Math.min(lesson.minutes * 2, Math.round((Date.now() - started.current) / 60000)));
    completeLesson(lesson.id, minutes);
    showToast(done ? L('Marked as revised again', 'Marquée comme révisée') : L('Lesson marked as read', 'Leçon marquée comme lue'));
  };

  const goNext = () =>
    nextLesson ? navigation.replace(lessonLocked(unit.id, idx + 1, pro) ? 'Paywall' : 'Lesson', { lessonId: nextLesson.id, unitId: unit.id }) : navigation.replace('Quiz', { unitId: unit.id });

  return (
    <V c="flex-1">
      <Screen
        header={
          <StackHeader
            title={`${L('Lesson', 'Leçon')} ${lessonNumber(unit.id, lesson)}`}
            subtitle={unit.short}
            subtitleColor="on-surface-variant"
            avatar={false}
            right={
              <P c="w-11 h-11 items-center justify-center rounded-full" onPress={() => toggleBookmark(lesson.id)} accessibilityLabel={saved ? 'Remove bookmark' : 'Bookmark'}>
                <Ic n={saved ? 'bookmark' : 'bookmark_border'} s={22} c="on-surface" fill={saved} />
              </P>
            }
          />
        }
        contentStyle={{ paddingBottom: insets.bottom + 90 }}
      >
        <V c="pb-6 gap-space-lg pt-space-md">
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface" style={{ lineHeight: 32 }}>
              {lesson.title}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {lesson.minutes} min, {lesson.paper}
            </T>
          </V>

          <ListenButton
            label={L('Listen to this lesson', 'Écouter cette leçon')}
            sub={L('The tutor reads it to you; follow the highlighted paragraph', 'Le tuteur la lit ; suivez le paragraphe surligné')}
            stopLabel={L('Pause listening', 'Mettre en pause')}
            playing={playing}
            onPress={toggle}
          />

          {lang === 'fr' && (
            <T c="font-body-sm text-body-sm text-on-surface-variant">Les leçons sont en anglais, comme l’examen du GCE. Vous pouvez poser vos questions au tuteur en français.</T>
          )}

          <V c="gap-4">
            {lesson.body.map((p, i) => (
              <V key={i} c={playing && para === i + 1 ? 'p-space-sm rounded-lg bg-surface-container-low border-l-4 border-secondary' : ''}>
                <Rich text={p} />
              </V>
            ))}
          </V>

          {lesson.figure && (
            <V c="gap-space-xs">
              {[].concat(lesson.figure).map((id) => (
                <V key={id} c="rounded-xl overflow-hidden bg-surface-container-lowest border border-surface-container p-space-sm">
                  <Diagram id={id} maxHeight={360} explain subject={unit.subject} />
                </V>
              ))}
              {!!unit.vr && (
                <P c="self-start py-1" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })} hitSlop={8}>
                  <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                    {L('Open the 3D model', 'Ouvrir le modèle 3D')}: {(lang === 'fr' && unit.vr.fr?.title) || unit.vr.title}
                  </T>
                </P>
              )}
            </V>
          )}

          {!!lesson.examples?.length && (
            <V c="gap-space-sm">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {lesson.examples.length === 1 ? L('Worked example', 'Exemple corrigé') : L('Worked examples', 'Exemples corrigés')}
              </T>
              {lesson.examples.map((e, i) => (
                <V key={i} c="p-space-md rounded-xl bg-surface-container-lowest border border-surface-container gap-space-xs">
                  <Rich text={e.q} c="font-body-md text-body-md text-on-surface" />
                  {e.steps.map((st, j) => (
                    <V key={j} c="flex-row gap-space-xs">
                      <T c="font-label-lg text-label-lg text-secondary" style={{ fontWeight: '700', minWidth: 18 }}>
                        {j + 1}.
                      </T>
                      <V c="flex-1">
                        <Rich text={st} c="font-body-md text-body-md text-on-surface" />
                      </V>
                    </V>
                  ))}
                </V>
              ))}
            </V>
          )}

          <V c="p-space-md rounded-xl bg-surface-container-low gap-1">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Exam tip', 'Conseil pour l’examen')}
            </T>
            <Rich text={lesson.tip} c="font-body-md text-body-md text-on-surface" />
          </V>

          <V c="gap-space-sm">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('Check yourself', 'Vérifiez-vous')}
            </T>
            <T c="font-body-md text-body-md text-on-surface">{lesson.check.q}</T>
            <V c="gap-2">
              {options.map((o, i) => {
                const chosen = pick === i;
                const reveal = pick != null;
                const style = !reveal
                  ? 'bg-surface-container-lowest border border-outline-variant'
                  : o.ok
                  ? 'bg-secondary-container/60 border border-secondary'
                  : chosen
                  ? 'bg-error-container border border-error'
                  : 'bg-surface-container-lowest border border-outline-variant opacity-60';
                return (
                  <P
                    key={i}
                    c={`w-full p-3 rounded-lg flex-row items-center justify-between gap-2 ${style}`}
                    disabled={reveal}
                    scale={0.99}
                    onPress={() => {
                      setPick(i);
                      answer(`lesson-${lesson.id}`, 0, o.ok, i);
                    }}
                  >
                    <T c="font-body-md text-body-md text-on-surface flex-1">
                      {String.fromCharCode(65 + i)}. {o.t}
                    </T>
                    {reveal && (chosen || o.ok) && <Ic n={o.ok ? 'check' : 'close'} s={20} c={o.ok ? 'secondary' : 'error'} />}
                  </P>
                );
              })}
            </V>
            {pick != null && (
              <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
                <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {options[pick].ok ? L('Correct. ', 'Correct. ') : L('Not quite. ', 'Pas tout à fait. ')}
                </T>
                {lesson.check.why}
              </T>
            )}
          </V>

          <V c="gap-space-xs">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('Key terms', 'Mots clés')}
            </T>
            {lesson.terms.map(([term, def]) => (
              <T key={term} c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '700' }}>
                  {term}:
                </T>{' '}
                {def}
              </T>
            ))}
          </V>

          <P c="rounded-xl bg-surface-container-low p-space-md flex-row items-center gap-space-sm" onPress={() => navigation.navigate('Workspace', { lessonId: lesson.id, unitId: unit.id, subject: unit.subject })} scale={0.99}>
            <V c="flex-1 gap-0.5">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Solve questions on the board', 'Résoudre des questions au tableau')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('The tutor works through a question from this lesson, or your own, step by step and explains each step aloud.', 'Le tuteur résout une question de cette leçon, ou la vôtre, étape par étape et explique chaque étape à voix haute.')}
              </T>
            </V>
            <Ic n="co_present" s={24} c="primary-container" />
          </P>

          <P c="self-start py-1" onPress={() => navigation.navigate('Tutor', { lessonId: lesson.id, unitId: unit.id, subject: unit.subject })} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {L('Ask the tutor about this lesson', 'Poser une question au tuteur')}
            </T>
          </P>
        </V>
      </Screen>

      <V c="absolute left-0 right-0 bottom-0 bg-surface-container-lowest border-t border-surface-container" style={{ paddingBottom: insets.bottom }}>
        <V c="h-16 px-margin flex-row items-center gap-space-sm">
          <P c="h-11 pl-1.5 pr-3 rounded-lg bg-secondary flex-row items-center gap-2" onPress={toggle} accessibilityLabel={playing ? L('Pause listening', 'Mettre en pause') : L('Listen to this lesson', 'Écouter cette leçon')}>
            <V c="w-8 h-8 rounded-full bg-surface-container-lowest items-center justify-center">
              <Ic n={playing ? 'pause' : 'volume_up'} s={20} c="secondary" fill />
            </V>
            <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '700' }}>
              {playing ? L('Pause', 'Pause') : L('Listen', 'Écouter')}
            </T>
          </P>
          {done ? (
            <P c="flex-1 h-11 rounded-lg bg-primary-container items-center justify-center" onPress={goNext}>
              <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                {nextLesson ? L('Next lesson', 'Leçon suivante') : L('Topic quiz', 'Quiz du thème')}
              </T>
            </P>
          ) : (
            <P c="flex-1 h-11 rounded-lg bg-primary-container items-center justify-center" onPress={complete}>
              <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                {L('Mark as read', 'Marquer comme lue')}
              </T>
            </P>
          )}
        </V>
      </V>
      {toast}
    </V>
  );
}
