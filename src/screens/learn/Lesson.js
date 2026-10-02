import { useEffect, useMemo, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import { AnimalCell, Mitochondrion } from '../../ui/art';
import { OsmosisCell } from '../../ui/labArt';
import { SpecimenPreview } from '../../ui/previews';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { lessonById, lessonsFor, plain } from '../../data/lessons';
import { unitById } from '../../data/units';
import { lessonLocked } from '../../data/plan';

// Body text with **key terms** in bold.
function Rich({ text, c = 'font-body-lg text-body-lg text-on-surface' }) {
  const parts = text.split('**');
  return (
    <T c={c} style={{ lineHeight: 27 }}>
      {parts.map((s, i) =>
        i % 2 ? (
          <T key={i} c={c} style={{ fontWeight: '700' }}>
            {s}
          </T>
        ) : (
          s
        )
      )}
    </T>
  );
}

function Figure({ lesson, unitId }) {
  if (lesson.figure === 'osmosis') {
    return (
      <V c="flex-row justify-around py-2">
        {[0, 0.12, 1].map((p) => (
          <OsmosisCell key={p} p={p} size={92} />
        ))}
      </V>
    );
  }
  if (lesson.figure === 'cell') return <V c="h-48"><AnimalCell /></V>;
  if (lesson.figure === 'mito') return <V c="h-44 items-center justify-center"><Mitochondrion /></V>;
  return (
    <V c="h-44">
      <SpecimenPreview unitId={unitId} />
    </V>
  );
}

export default function Lesson({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { pro, progress, completeLesson, answer, toggleBookmark } = useApp();
  const L = useL();
  const lang = useLang();
  const lesson = lessonById(route.params?.lessonId) || lessonsFor('cell')[0];
  const unit = unitById(lesson.unit);
  const siblings = lessonsFor(lesson.unit);
  const idx = siblings.indexOf(lesson);
  const nextLesson = siblings[idx + 1];
  const done = !!progress.lessons[lesson.id];
  const saved = !!progress.bookmarks?.[lesson.id];
  const [toast, showToast] = useToast();

  // Read aloud paragraph by paragraph, so it can pause and resume on every platform.
  const script = useMemo(() => [lesson.title, ...lesson.body.map(plain), `Exam tip. ${plain(lesson.tip)}`], [lesson]);
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
    if (lessonLocked(lesson.unit, idx, pro)) navigation.replace('Paywall');
  }, [lesson.unit, idx, pro, navigation]);

  // Check question (options shuffled once per visit).
  const options = useMemo(() => lesson.check.a.map((t, i) => ({ t, ok: i === 0 })).sort(() => Math.random() - 0.5), [lesson]);
  const [pick, setPick] = useState(null);

  const complete = () => {
    const minutes = Math.max(1, Math.min(lesson.minutes * 2, Math.round((Date.now() - started.current) / 60000)));
    completeLesson(lesson.id, minutes);
    showToast(done ? L('Marked as revised again', 'Marquée comme révisée') : L('Lesson marked as read', 'Leçon marquée comme lue'));
  };

  const goNext = () =>
    nextLesson ? navigation.replace(lessonLocked(unit.id, idx + 1, pro) ? 'Paywall' : 'Lesson', { lessonId: nextLesson.id }) : navigation.replace('Quiz', { unitId: unit.id });

  return (
    <V c="flex-1">
      <Screen
        header={
          <StackHeader
            title={`${L('Lesson', 'Leçon')} ${lesson.n}`}
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

          {lang === 'fr' && (
            <T c="font-body-sm text-body-sm text-on-surface-variant">Les leçons sont en anglais, comme l’examen du GCE. Vous pouvez poser vos questions au tuteur en français.</T>
          )}

          <V c="gap-4">
            {lesson.body.map((p, i) => (
              <Rich key={i} text={p} />
            ))}
          </V>

          {lesson.figure && (
            <V c="gap-space-xs">
              <V c="rounded-xl overflow-hidden bg-surface-container-low">
                <Figure lesson={lesson} unitId={unit.id} />
              </V>
              {lesson.stages && (
                <T c="font-body-sm text-body-sm text-on-surface-variant">
                  {lesson.stages.map(([h, s]) => `${h}: ${s.toLowerCase()}`).join('. ')}.
                </T>
              )}
              <P c="self-start py-1" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
                  {L('Open the 3D model', 'Ouvrir le modèle 3D')}: {unit.vr.title}
                </T>
              </P>
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

          <P c="self-start py-1" onPress={() => navigation.navigate('Tutor', { context: `${unit.short}: ${lesson.title}` })} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary-container" style={{ fontWeight: '700' }}>
              {L('Ask the tutor about this lesson', 'Poser une question au tuteur')}
            </T>
          </P>
        </V>
      </Screen>

      <V c="absolute left-0 right-0 bottom-0 bg-surface-container-lowest border-t border-surface-container" style={{ paddingBottom: insets.bottom }}>
        <V c="h-16 px-margin flex-row items-center gap-space-sm">
          <P c="h-11 px-space-sm rounded-lg bg-surface-container flex-row items-center gap-1.5" onPress={toggle} accessibilityLabel={playing ? 'Pause reading' : 'Read aloud'}>
            <Ic n={playing ? 'pause' : 'volume_up'} s={20} c="on-surface" />
            <T c="font-label-md text-label-md text-on-surface">{playing ? L('Pause', 'Pause') : L('Listen', 'Écouter')}</T>
          </P>
          {done ? (
            <P c="flex-1 h-11 rounded-lg bg-primary-container items-center justify-center" onPress={goNext}>
              <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                {nextLesson ? L('Next lesson', 'Leçon suivante') : L('Unit quiz', 'Quiz de l’unité')}
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
