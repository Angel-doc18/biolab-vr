import { useEffect, useMemo, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import { Avatar, Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader, useToast } from '../../ui/chrome';
import Waveform from '../../ui/Waveform';
import { AnimalCell, Mitochondrion } from '../../ui/art';
import { OsmosisCell } from '../../ui/labArt';
import { SpecimenPreview } from '../../ui/previews';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { lessonById, lessonsFor, plain } from '../../data/lessons';
import { unitById } from '../../data/units';
import { lessonLocked } from '../../data/plan';

const SPEEDS = [1, 1.25, 1.5];
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// Body text with **key terms** in bold teal.
function Rich({ text, c = 'font-body-lg text-body-lg text-on-surface' }) {
  const parts = text.split('**');
  return (
    <T c={c} style={{ lineHeight: 26 }}>
      {parts.map((s, i) =>
        i % 2 ? (
          <T key={i} c={`${c} text-secondary`} style={{ fontWeight: '700' }}>
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
  const { pro, progress, completeLesson, answer, toggleBookmark, user } = useApp();
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

  // Narration by paragraph, so it can pause and resume on every platform.
  const script = useMemo(() => [lesson.title, ...lesson.body.map(plain), `Examiner tip. ${plain(lesson.tip)}`], [lesson]);
  const words = useMemo(() => script.map((s) => s.split(/\s+/).length), [script]);
  const [playing, setPlaying] = useState(false);
  const [para, setPara] = useState(0);
  const [speed, setSpeed] = useState(0);
  const playRef = useRef(false);
  const started = useRef(Date.now());
  const total = words.reduce((a, b) => a + b, 0) / 2.4 / SPEEDS[speed];
  const elapsed = words.slice(0, para).reduce((a, b) => a + b, 0) / 2.4 / SPEEDS[speed];

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
      rate: 0.92 * SPEEDS[speed],
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
  const skip = (d) => {
    const n = Math.max(0, Math.min(script.length - 1, para + d));
    setPara(n);
    if (playRef.current) {
      Speech.stop();
      setTimeout(() => speakFrom(n), 60);
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

  // Check-your-mastery question (options shuffled once per visit).
  const options = useMemo(() => lesson.check.a.map((t, i) => ({ t, ok: i === 0 })).sort(() => Math.random() - 0.5), [lesson]);
  const [pick, setPick] = useState(null);

  const complete = () => {
    const minutes = Math.max(1, Math.min(lesson.minutes * 2, Math.round((Date.now() - started.current) / 60000)));
    completeLesson(lesson.id, minutes);
    showToast(done ? L('Lesson reviewed', 'Leçon revue') : L('Lesson completed: +15 XP', 'Leçon terminée : +15 XP'));
  };

  return (
    <V c="flex-1">
      <Screen
        header={
          <StackHeader
            title={L('Lesson reader', 'Lecture')}
            subtitle={L('Offline ready', 'Hors ligne')}
            subtitleColor="secondary"
            avatar
            right={
              <P c="w-11 h-11 items-center justify-center rounded-full" onPress={() => toggleBookmark(lesson.id)} accessibilityLabel="Bookmark">
                <Ic n={saved ? 'bookmark' : 'bookmark_border'} s={22} c="primary-container" fill={saved} />
              </P>
            }
          />
        }
        contentStyle={{ paddingBottom: insets.bottom + 90 }}
      >
        <V c="pb-6 gap-space-lg">
          <V c="gap-space-xs pt-2">
            <V c="flex-row items-center gap-2 mt-0.5 flex-wrap">
              <Ic n="schedule" s={16} c="secondary" />
              <T c="font-label-sm text-label-sm text-on-surface-variant">
                {lesson.minutes} min {L('read', 'de lecture')} · {L('Unit', 'Unité')} {unit.n} · {L('Lesson', 'Leçon')} {lesson.n}
              </T>
              <V c="w-1 h-1 rounded-full bg-outline-variant" />
              <T c="font-label-sm text-label-sm text-secondary">{lesson.paper}</T>
            </V>
          </V>
          <V c="gap-space-md">
            <T c="font-headline-lg text-headline-lg text-on-surface" style={{ lineHeight: 30 }}>
              {lesson.title}
            </T>
            <P c="flex-row items-center gap-space-sm p-3 bg-surface-container rounded-xl" onPress={() => navigation.navigate('Specimen', { unitId: unit.id })}>
              <V c="w-10 h-10 rounded-full bg-secondary/10 items-center justify-center">
                <Ic n="biotech" s={22} c="secondary" />
              </V>
              <V c="flex-1">
                <T c="font-label-md text-label-md text-on-surface">{L('3D specimen ready', 'Spécimen 3D prêt')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                  {unit.vr.title}
                </T>
              </V>
              <V c="w-9 h-9 rounded-full bg-secondary items-center justify-center shadow-sm">
                <Ic n="view_in_ar" s={18} c="on-secondary" />
              </V>
            </P>
            {lang === 'fr' && (
              <V c="flex-row items-center gap-2 p-2.5 rounded-lg bg-surface-container-low">
                <Ic n="translate" s={16} c="primary" />
                <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">Les cours sont en anglais, comme l’examen du GCE. Posez vos questions au Dr Nkwenti en français.</T>
              </V>
            )}
            <V c="gap-4">
              {lesson.body.map((p, i) => (
                <Rich key={i} text={p} />
              ))}
            </V>
          </V>

          {lesson.figure && (
            <V c="gap-space-sm bg-surface-container-low rounded-xl p-space-md shadow-sm">
              <V c="flex-row items-center justify-between">
                <V c="flex-row items-center gap-2">
                  <Ic n="schema" s={20} c="primary" />
                  <T c="font-headline-sm text-headline-sm text-on-surface">{L('Figure', 'Figure')}</T>
                </V>
                <V c="px-2 py-0.5 rounded-full bg-surface-container-high">
                  <T c="font-label-sm text-label-sm text-primary tracking-wide">FIG {lesson.n}</T>
                </V>
              </V>
              <V c="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
                <Figure lesson={lesson} unitId={unit.id} />
              </V>
              {lesson.stages && (
                <V c="flex-row gap-2 pt-1">
                  {lesson.stages.map(([h, s], i) => (
                    <V key={h} c="flex-1 p-2 rounded-lg bg-surface-container-lowest items-center">
                      <V c={`w-2 h-2 rounded-full mb-1 ${['bg-primary', 'bg-secondary', 'bg-tertiary'][i]}`} />
                      <T c="font-label-sm text-label-sm text-on-surface text-center">{h}</T>
                      <T c="font-body-sm text-on-surface-variant text-center" style={{ fontSize: 11, lineHeight: 14 }}>
                        {s}
                      </T>
                    </V>
                  ))}
                </V>
              )}
            </V>
          )}

          <V c="p-space-md rounded-xl bg-surface-container-high/60 shadow-sm flex-row gap-space-sm items-start">
            <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center mt-0.5">
              <Ic n="verified" s={18} c="on-primary" />
            </V>
            <V c="flex-1 gap-1">
              <V c="flex-row items-center gap-2">
                <T c="font-label-md text-label-md text-primary" style={{ fontWeight: '700' }}>
                  {L('GCE exam alert', 'Alerte examen GCE')}
                </T>
                <V c="w-1.5 h-1.5 rounded-full bg-primary" />
                <T c="font-label-sm text-label-sm text-outline">{L('Examiner tip', 'Conseil')}</T>
              </V>
              <Rich text={lesson.tip} c="font-body-md text-body-md text-on-surface" />
            </V>
          </V>

          <V c="gap-space-sm bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-1.5">
                <Ic n="psychology" s={20} c="secondary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Check your mastery', 'Vérifiez vos acquis')}</T>
              </V>
              <T c="font-label-sm text-label-sm text-secondary">+10 XP</T>
            </V>
            <T c="font-body-md text-body-md text-on-surface">{lesson.check.q}</T>
            <V c="gap-2 mt-1">
              {options.map((o, i) => {
                const chosen = pick === i;
                const reveal = pick != null;
                const style = !reveal
                  ? 'bg-surface-container-low'
                  : chosen && o.ok
                  ? 'bg-secondary-container shadow-sm'
                  : chosen
                  ? 'bg-error-container'
                  : o.ok
                  ? 'bg-secondary-container/40'
                  : 'bg-surface-container-low opacity-60';
                return (
                  <P
                    key={i}
                    c={`w-full p-3 rounded-lg flex-row items-center justify-between ${style}`}
                    disabled={reveal}
                    scale={0.99}
                    onPress={() => {
                      setPick(i);
                      answer(`lesson-${lesson.id}`, 0, o.ok, i);
                    }}
                  >
                    <T c={`font-body-md text-body-md flex-1 ${reveal && chosen && o.ok ? 'text-on-secondary-container' : reveal && chosen ? 'text-on-error-container' : 'text-on-surface'}`} style={reveal && o.ok ? { fontWeight: '600' } : null}>
                      {String.fromCharCode(65 + i)}. {o.t}
                    </T>
                    {reveal && (chosen || o.ok) && <Ic n={o.ok ? 'check_circle' : 'cancel'} s={20} c={o.ok ? 'secondary' : 'error'} />}
                  </P>
                );
              })}
            </V>
            {pick != null && (
              <V c="mt-2 p-3 rounded-lg bg-surface-container">
                <V c="flex-row items-center gap-1.5 mb-0.5">
                  <Ic n={options[pick].ok ? 'task_alt' : 'info'} s={16} c={options[pick].ok ? 'secondary' : 'primary'} />
                  <T c={`font-body-sm text-body-sm ${options[pick].ok ? 'text-secondary' : 'text-primary'}`} style={{ fontWeight: '700' }}>
                    {options[pick].ok ? L('Correct!', 'Correct !') : L('Not quite.', 'Pas tout à fait.')}
                  </T>
                </V>
                <T c="font-body-sm text-body-sm text-on-surface">{lesson.check.why}</T>
              </V>
            )}
          </V>

          <V c="bg-surface-container rounded-xl p-space-md shadow-sm gap-space-sm">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-space-sm flex-1">
                <V>
                  <V c="w-11 h-11 rounded-xl bg-primary-container items-center justify-center shadow-sm">
                    <Ic n="psychology" s={24} c="on-primary" />
                  </V>
                  <V c="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-secondary items-center justify-center" style={{ borderRadius: 7 }}>
                    <Ic n="mic" s={10} c="on-secondary" />
                  </V>
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface" numberOfLines={1}>
                    Dr. Nkwenti: {L('lesson narration', 'narration')}
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">
                    {L('Read aloud on your phone', 'Lu à voix haute')} · {fmt(elapsed)} / {fmt(total)}
                  </T>
                </V>
              </V>
              <P c="px-2.5 py-1 rounded-full bg-surface-container-highest" onPress={() => setSpeed((s) => (s + 1) % SPEEDS.length)}>
                <T c="font-label-sm text-label-sm text-primary">{SPEEDS[speed].toFixed(SPEEDS[speed] % 1 ? 2 : 1)}x</T>
              </P>
            </V>
            <V c="gap-1.5">
              <Bar pct={(para / script.length) * 100} c="h-2 bg-surface-container-highest" />
              <V c="flex-row justify-between items-center">
                <T c="font-label-sm text-label-sm text-outline">{fmt(elapsed)}</T>
                <Waveform playing={playing} bars={14} height={16} />
                <T c="font-label-sm text-label-sm text-outline">{fmt(total)}</T>
              </V>
            </V>
            <V c="flex-row items-center justify-between pt-1">
              <V c="flex-row items-center gap-1">
                <P c="w-10 h-10 rounded-full items-center justify-center" onPress={() => skip(-1)} accessibilityLabel="Previous paragraph">
                  <Ic n="replay_10" s={22} />
                </P>
                <P c="w-12 h-12 rounded-full bg-primary-container items-center justify-center shadow-md" onPress={toggle} accessibilityLabel={playing ? 'Pause narration' : 'Play narration'} scale={0.95}>
                  <Ic n={playing ? 'pause' : 'play_arrow'} s={28} c="on-primary" />
                </P>
                <P c="w-10 h-10 rounded-full items-center justify-center" onPress={() => skip(1)} accessibilityLabel="Next paragraph">
                  <Ic n="forward_10" s={22} />
                </P>
              </V>
              <P c={`h-11 px-4 rounded-xl flex-row items-center gap-2 shadow-sm ${done ? 'bg-primary' : 'bg-secondary'}`} onPress={complete} scale={0.95}>
                <Ic n={done ? 'verified' : 'check_circle'} s={20} c="on-primary" />
                <T c="font-label-lg text-label-lg text-on-primary">{done ? L('Completed', 'Terminée') : L('Mark completed (+15 XP)', 'Terminer (+15 XP)')}</T>
              </P>
            </V>
          </V>

          <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
            <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Key terms', 'Mots clés')}</T>
            {lesson.terms.map(([term, def]) => (
              <V key={term} c="flex-row gap-2">
                <V c="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                <T c="font-body-md text-body-md text-on-surface flex-1">
                  <T c="font-body-md text-body-md text-on-surface" style={{ fontWeight: '700' }}>
                    {term}:
                  </T>{' '}
                  {def}
                </T>
              </V>
            ))}
          </V>

          <V c="flex-row gap-2">
            <P c="flex-1 h-12 rounded-xl bg-surface-container-low flex-row items-center justify-center gap-1.5" onPress={() => navigation.navigate('Tutor', { context: `${unit.short}: ${lesson.title}` })}>
              <Ic n="forum" s={18} c="primary-container" />
              <T c="font-label-lg text-label-lg text-primary-container">{L('Ask Dr. Nkwenti', 'Demander')}</T>
            </P>
            {nextLesson ? (
              <P c="flex-1 h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-1.5 shadow-sm" onPress={() => navigation.replace(lessonLocked(unit.id, idx + 1, pro) ? 'Paywall' : 'Lesson', { lessonId: nextLesson.id })}>
                <T c="font-label-lg text-label-lg text-on-primary">{L('Next lesson', 'Leçon suivante')}</T>
                <Ic n="arrow_forward" s={18} c="on-primary" />
              </P>
            ) : (
              <P c="flex-1 h-12 rounded-xl bg-primary-container flex-row items-center justify-center gap-1.5 shadow-sm" onPress={() => navigation.replace('Quiz', { unitId: unit.id })}>
                <T c="font-label-lg text-label-lg text-on-primary">{L('Unit quiz', 'Quiz de l’unité')}</T>
                <Ic n="quiz" s={18} c="on-primary" />
              </P>
            )}
          </V>
        </V>
      </Screen>

      <V
        c="absolute left-0 right-0 bottom-0 bg-surface-container-lowest/95"
        style={{ paddingBottom: insets.bottom, shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 16, shadowOffset: { width: 0, height: -4 }, elevation: 8 }}
      >
        <V c="h-16 px-margin flex-row items-center justify-between gap-space-md">
          <V c="flex-row items-center gap-space-sm flex-1">
            <P c="w-11 h-11 rounded-full bg-primary-container items-center justify-center shadow-sm" onPress={toggle} accessibilityLabel={playing ? 'Pause' : 'Play'} scale={0.95}>
              <Ic n={playing ? 'pause' : 'play_arrow'} s={24} c="on-primary" />
            </P>
            <V c="flex-1">
              <T c="font-label-md text-label-md text-on-surface" numberOfLines={1}>
                {L('Audio lesson', 'Leçon audio')} ({SPEEDS[speed]}x)
              </T>
              <V c="mt-1">
                <Bar pct={(para / script.length) * 100} c="h-1.5 bg-surface-container-high" />
              </V>
            </V>
          </V>
          <T c="font-label-sm text-label-sm text-outline">{fmt(total - elapsed)}</T>
        </V>
      </V>
      {toast}
    </V>
  );
}
