// A student's school, class, exam and subjects: one question per screen.
// Each step saves its answer, then moves on (useStepNav); the same screens
// make the short runs opened from Home, Me and Settings.
import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { CLASSES, LEVELS, SERIES, STREAMS, chosenSubjects, classById, classLevel, examYearFor, seriesLine, streamById, subjectsForClass, subjectsForLevel, subjectsInClass } from '../../data/subjects';
import { Chip, Choice, StepScreen, useStepNav } from './Steps';

// The exam year that follows from the class, and the two after it for students
// repeating a year or sitting later.
const examYears = (cls) => {
  const first = examYearFor(cls);
  return [first, first + 1, first + 2];
};

const rows = (list, n) => list.reduce((out, x, i) => (i % n ? out[out.length - 1].push(x) : out.push([x]), out), []);

// Saves a step's answers, then goes on to the next step.
function useSave(screen) {
  const { updateMe } = useApp();
  const { flow, advance } = useStepNav(screen);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const save = async (changes, params) => {
    setBusy(true);
    setError(null);
    try {
      await updateMe(changes);
      advance(changes, params);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return { flow, busy, error, setError, save };
}

export function SchoolKind() {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const [kind, setKind] = useState(user?.schoolType === 'technical' ? 'technical' : 'general');
  const [stream, setStream] = useState(user?.stream || null);
  const [specialty, setSpecialty] = useState(user?.specialty || null);
  const { flow, busy, error, setError, save } = useSave('SchoolKind');
  const technical = kind === 'technical';

  const submit = () => {
    if (technical && !stream) return setError(L('Choose your stream.', 'Choisissez votre filière.'));
    save({ schoolType: kind, stream: technical ? stream : null, specialty: technical ? specialty : null });
  };

  return (
    <StepScreen
      screen="SchoolKind"
      flow={flow}
      title={L('What kind of school do you attend?', 'Quel type d’établissement fréquentez-vous ?')}
      sub={L('Klass8 follows the programme of your school.', 'Klass8 suit le programme de votre établissement.')}
      onContinue={submit}
      busy={busy}
      error={error}
    >
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        <Choice full icon="school" on={!technical} label={L('General school', 'Enseignement général')} sub={L('GCE Ordinary and Advanced Level', 'GCE Ordinary et Advanced Level')} onPress={() => setKind('general')} />
        <Choice full icon="engineering" on={technical} label={L('Technical school', 'Enseignement technique')} sub={L('ITC and ATC', 'ITC et ATC')} onPress={() => setKind('technical')} />
      </V>
      {technical && (
        <V c="gap-space-sm pt-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Your stream', 'Votre filière')}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {STREAMS.map((x) => (
              <Choice
                key={x.id}
                on={stream === x.id}
                label={lang === 'fr' ? x.fr : x.en}
                onPress={() => {
                  if (x.id !== stream) setSpecialty(null);
                  setStream(x.id);
                }}
              />
            ))}
          </V>
          {!!stream && (
            <V c="gap-space-xs">
              <T c="font-label-lg text-label-lg text-on-surface">{L('Your specialty', 'Votre spécialité')}</T>
              <V c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
                {streamById(stream).specialties.map((x) => (
                  <Chip key={x.id} on={specialty === x.id} label={lang === 'fr' ? x.fr : x.en} onPress={() => setSpecialty(x.id)} />
                ))}
              </V>
            </V>
          )}
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
            {L('Klass8 teaches your general and related subjects. The workshop subjects of your specialty are not in Klass8 yet.', 'Klass8 enseigne vos matières générales et connexes. Les matières d’atelier de votre spécialité ne sont pas encore dans Klass8.')}
          </T>
        </V>
      )}
    </StepScreen>
  );
}

export function ClassPick() {
  const { user } = useApp();
  const L = useL();
  const [cls, setCls] = useState(classById(user?.className) ? user.className : null);
  const { flow, busy, error, setError, save } = useSave('ClassPick');

  const submit = () => {
    if (!cls) return setError(L('Choose your class.', 'Choisissez votre classe.'));
    const years = examYears(cls);
    save({
      className: cls,
      level: classLevel(cls),
      examYear: years.includes(user?.examYear) ? user.examYear : years[0],
      // Chemistry becomes A Level Chemistry on moving into the Sixth Form, and back.
      ...(user?.subjects?.length ? { subjects: subjectsInClass(user.subjects, cls) } : {}),
    });
  };

  const group = (level, title) => (
    <V c="gap-space-xs">
      <T c="font-label-lg text-label-lg text-on-surface">{title}</T>
      {rows(CLASSES.filter((k) => k.level === level), 3).map((row) => (
        <V key={row[0].id} c="flex-row gap-space-xs">
          {row.map((k) => (
            <Choice key={k.id} on={cls === k.id} label={k.id} onPress={() => setCls(k.id)} />
          ))}
          {row.length < 3 && Array.from({ length: 3 - row.length }, (_, i) => <V key={i} c="flex-1" />)}
        </V>
      ))}
    </V>
  );

  return (
    <StepScreen
      screen="ClassPick"
      flow={flow}
      title={L('Which class are you in this school year?', 'En quelle classe êtes-vous cette année ?')}
      sub={L('Your lessons and papers follow the programme of this class.', 'Vos leçons et épreuves suivent le programme de cette classe.')}
      onContinue={submit}
      busy={busy}
      error={error}
    >
      <V c="gap-space-md" accessibilityRole="radiogroup">
        {group('O', L('Secondary school', 'Premier cycle'))}
        {group('A', L('Sixth Form', 'Second cycle'))}
      </V>
    </StepScreen>
  );
}

export function ExamYear() {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const cls = classById(user?.className) ? user.className : 'Form 5';
  const years = examYears(cls);
  const [year, setYear] = useState(years.includes(user?.examYear) ? user.examYear : years[0]);
  const { flow, busy, error, save } = useSave('ExamYear');
  const level = classLevel(cls);
  const technical = user?.schoolType === 'technical';
  const examName = technical ? (level === 'A' ? 'ATC' : 'ITC') : `GCE ${LEVELS[level][lang === 'fr' ? 'fr' : 'en']}`;
  const notes = [L('The usual year for your class', 'L’année habituelle pour votre classe'), L('One year later', 'Un an plus tard'), L('Two years later', 'Deux ans plus tard')];

  return (
    <StepScreen
      screen="ExamYear"
      flow={flow}
      title={L(`When do you sit the ${examName}?`, `Quand passez-vous le ${examName} ?`)}
      sub={L('Klass8 counts down to it and plans your revision.', 'Klass8 fait le compte à rebours et planifie vos révisions.')}
      onContinue={() => save({ examYear: year })}
      busy={busy}
      error={error}
    >
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        {years.map((y, i) => (
          <Choice full key={y} icon="event" on={year === y} label={L(`June ${y}`, `Juin ${y}`)} sub={notes[i]} onPress={() => setYear(y)} />
        ))}
      </V>
    </StepScreen>
  );
}

export function Series() {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const choices = subjectsForClass(user?.className);
  const [series, setSeries] = useState(user?.series || null);
  const { flow, busy, error, setError, save } = useSave('Series');

  const submit = () => {
    if (!series) return setError(L('Choose your series, or Other.', 'Choisissez votre série, ou Autre.'));
    const found = SERIES.find((x) => x.id === series);
    const allowed = found ? found.subjects.filter((id) => choices.some((c) => c.id === id)) : [];
    // A new series fills in its subjects; they can still be changed on the next screen.
    const fill = allowed.length && (series !== user?.series || !user?.subjects?.length);
    save({ series, ...(fill ? { subjects: allowed } : {}) });
  };

  return (
    <StepScreen
      screen="Series"
      flow={flow}
      title={L('Which series are you in?', 'Dans quelle série êtes-vous ?')}
      sub={L('Your series gives your Advanced Level subjects. You can change them on the next screen.', 'Votre série donne vos matières de l’Advanced Level. Vous pourrez les modifier à l’écran suivant.')}
      onContinue={submit}
      busy={busy}
      error={error}
    >
      {[
        ['arts', L('Arts', 'Lettres')],
        ['science', L('Science', 'Sciences')],
      ].map(([kind, name]) => (
        <V key={kind} c="gap-space-xs">
          <T c="font-label-lg text-label-lg text-on-surface">{name}</T>
          <V c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
            {SERIES.filter((x) => x.kind === kind).map((x) => (
              <Chip key={x.id} on={series === x.id} label={x.id} onPress={() => setSeries(x.id)} />
            ))}
            {kind === 'science' && <Chip on={series === 'other'} label={L('Other', 'Autre')} onPress={() => setSeries('other')} />}
          </V>
        </V>
      ))}
      {!!series && series !== 'other' && (
        <V c="p-space-md rounded-xl bg-surface-container-low">
          <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
            {series}: {seriesLine(series, lang)}
          </T>
        </V>
      )}
    </StepScreen>
  );
}

export function Subjects() {
  const { user } = useApp();
  const L = useL();
  const lang = useLang();
  const cls = classById(user?.className) ? user.className : 'Form 5';
  const level = classLevel(cls);
  const levelName = LEVELS[level][lang === 'fr' ? 'fr' : 'en'];
  const choices = subjectsForClass(cls);
  const interim = choices.filter((s) => s.level !== level);
  const comingSoon = subjectsForLevel(level).filter((s) => !s.available);
  const [subjects, setSubjects] = useState(() => {
    const allowed = (list) => list.filter((id) => choices.some((c) => c.id === id));
    if (user?.subjects?.length || user?.onboarded) return allowed(chosenSubjects(user));
    // A technical stream suggests its subjects at Ordinary Level.
    const stream = user?.schoolType === 'technical' && level === 'O' ? streamById(user?.stream) : null;
    return stream ? allowed(stream.subjects) : [];
  });
  const { flow, busy, error, setError, save } = useSave('Subjects');
  const toggle = (id) => setSubjects((list) => (list.includes(id) ? list.filter((s) => s !== id) : [...list, id]));

  const submit = () => {
    const picked = subjects.filter((id) => choices.some((s) => s.id === id));
    if (!picked.length) return setError(L('Choose at least one subject.', 'Choisissez au moins une matière.'));
    save({ subjects: picked });
  };

  return (
    <StepScreen
      screen="Subjects"
      flow={flow}
      title={L('Which subjects are you taking?', 'Quelles matières présentez-vous ?')}
      sub={L('Tick every subject you take. You can change them at any time.', 'Cochez chaque matière que vous présentez. Vous pourrez les changer à tout moment.')}
      onContinue={submit}
      busy={busy}
      error={error}
    >
      {!!interim.length && (
        <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
          {L('Where an Advanced Level course is still being written, study the Ordinary Level subject it builds on until it is ready.', 'Quand un cours de l’Advanced Level est encore en préparation, étudiez en attendant la matière de l’Ordinary Level sur laquelle il repose.')}
        </T>
      )}
      <V c="bg-surface-container-lowest rounded-xl border border-outline-variant">
        {choices.map((s, i) => {
          const on = subjects.includes(s.id);
          return (
            <P key={s.id} c={`flex-row items-center gap-space-sm px-space-md py-space-sm min-h-[52px] ${i ? 'border-t border-surface-container' : ''}`} onPress={() => toggle(s.id)} scale={1} accessibilityRole="checkbox" accessibilityState={{ checked: on }} aria-checked={on} accessibilityLabel={lang === 'fr' ? s.fr : s.en}>
              <V c={`w-6 h-6 rounded items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
              <T c="font-label-lg text-label-lg text-on-surface flex-1">{lang === 'fr' ? s.fr : s.en}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{!s.code ? L('School subject', 'Matière scolaire') : s.level === level ? s.code : `${LEVELS[s.level].short} ${s.code}`}</T>
            </P>
          );
        })}
      </V>
      {!!comingSoon.length && (
        <V c="gap-1">
          <T c="font-label-md text-label-md text-on-surface-variant">{L(`Being written for the ${levelName}`, `En préparation pour l’${levelName}`)}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">{comingSoon.map((s) => `${lang === 'fr' ? s.fr : s.en} (${s.code})`).join(', ')}.</T>
        </V>
      )}
    </StepScreen>
  );
}
