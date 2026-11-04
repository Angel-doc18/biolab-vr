import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { CLASSES, LEVELS, SERIES, STREAMS, chosenSubjects, classById, classLevel, examYearFor, seriesLine, streamById, subjectsForClass, subjectsForLevel, subjectsInClass } from '../../data/subjects';
import { OnbHeader, StepBar } from './Steps';

// The exam year that follows from the class, and the two after it for students
// repeating a year or sitting later.
const examYears = (cls) => {
  const first = examYearFor(cls);
  return [first, first + 1, first + 2];
};

function Choice({ on, label, sub, onPress }) {
  return (
    <P
      c={`flex-1 min-h-[56px] px-space-sm py-2 rounded-xl items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
    >
      <T c={`font-label-lg text-label-lg ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
      {!!sub && <T c={`font-body-sm text-body-sm ${on ? 'text-on-primary' : 'text-on-surface-variant'}`}>{sub}</T>}
    </P>
  );
}

// A small toggle for lists of options (series, specialties).
function Chip({ on, label, onPress }) {
  return (
    <P
      c={`px-3 h-10 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ checked: on }}
    >
      <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
        {label}
      </T>
    </P>
  );
}

export default function ExamClass({ navigation, route }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const lang = useLang();
  const [cls, setCls] = useState(classById(user?.className) ? user.className : 'Form 5');
  const years = examYears(cls);
  const [year, setYear] = useState(years.includes(user?.examYear) ? user.examYear : years[0]);
  const level = classLevel(cls);
  const levelName = LEVELS[level][lang === 'fr' ? 'fr' : 'en'];
  // The subjects this class can take. Sixth Form students keep an Ordinary Level
  // subject while its Advanced Level course is being written.
  const choices = subjectsForClass(cls);
  const interim = choices.filter((s) => s.level !== level);
  const comingSoon = subjectsForLevel(level).filter((s) => !s.available);
  const [subjects, setSubjects] = useState(user?.subjects?.length || user?.onboarded ? chosenSubjects(user) : []);
  const pickClass = (k) => {
    setCls(k);
    setYear(examYears(k)[0]);
    // Chemistry becomes A Level Chemistry on moving into the Sixth Form, and back.
    setSubjects((list) => subjectsInClass(list, k));
  };
  // How the school organises studies: a technical school has a stream and a
  // specialty; a general Sixth Form has a series of Advanced Level subjects.
  const [schoolType, setSchoolType] = useState(user?.schoolType === 'technical' ? 'technical' : 'general');
  const [stream, setStream] = useState(user?.stream || null);
  const [specialty, setSpecialty] = useState(user?.specialty || null);
  const [series, setSeries] = useState(user?.series || null);
  const technical = schoolType === 'technical';
  const examName = technical ? (level === 'A' ? 'ATC' : 'ITC') : `GCE ${levelName}`;
  const allowed = (list) => list.filter((id) => choices.some((c) => c.id === id));
  const pickSeries = (id) => {
    setSeries(id);
    const found = SERIES.find((x) => x.id === id);
    if (found) setSubjects(allowed(found.subjects));
  };
  const pickStream = (id) => {
    if (id === stream) return;
    setStream(id);
    setSpecialty(null);
    const found = streamById(id);
    if (found && level === 'O') setSubjects(allowed(found.subjects));
  };
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const toggle = (id) => setSubjects((list) => (list.includes(id) ? list.filter((s) => s !== id) : [...list, id]));

  const submit = async () => {
    const picked = subjects.filter((id) => choices.some((s) => s.id === id));
    if (!picked.length) return setError(L('Choose at least one subject.', 'Choisissez au moins une matière.'));
    if (technical && !stream) return setError(L('Choose your stream.', 'Choisissez votre filière.'));
    setBusy(true);
    setError(null);
    try {
      await updateMe({
        level,
        examYear: year,
        className: cls,
        subjects: picked,
        schoolType,
        stream: technical ? stream : null,
        specialty: technical ? specialty : null,
        series: !technical && level === 'A' ? series : null,
      });
      if (route.params?.fromSettings) navigation.goBack();
      else navigation.navigate(nextStep('student', 'ExamClass'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen
      header={<OnbHeader />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={route.params?.fromSettings ? L('Save', 'Enregistrer') : L('Continue', 'Continuer')} loading={busy} onPress={submit} />
        </V>
      }
    >
      {!route.params?.fromSettings && <StepBar screen="ExamClass" />}
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your class, exam and subjects', 'Votre classe, votre examen et vos matières')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('We use this to count down to your exam and show the syllabus of each subject you take.', 'Nous l’utilisons pour le compte à rebours et pour afficher le programme de chaque matière.')}</T>
      </V>

      <V c="gap-space-lg">
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Your school', 'Votre établissement')}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            <Choice on={!technical} label={L('General', 'Général')} sub={L('GCE O and A Level', 'GCE O et A Level')} onPress={() => setSchoolType('general')} />
            <Choice on={technical} label={L('Technical', 'Technique')} sub={L('ITC and ATC', 'ITC et ATC')} onPress={() => setSchoolType('technical')} />
          </V>
          {technical && (
            <V c="gap-space-sm pt-space-xs">
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Stream', 'Filière')}</T>
              <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
                {STREAMS.map((x) => (
                  <Choice key={x.id} on={stream === x.id} label={lang === 'fr' ? x.fr : x.en} onPress={() => pickStream(x.id)} />
                ))}
              </V>
              {!!stream && (
                <V c="gap-space-xs">
                  <T c="font-label-md text-label-md text-on-surface-variant">{L('Specialty', 'Spécialité')}</T>
                  <V c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
                    {streamById(stream).specialties.map((x) => (
                      <Chip key={x.id} on={specialty === x.id} label={lang === 'fr' ? x.fr : x.en} onPress={() => setSpecialty(x.id)} />
                    ))}
                  </V>
                </V>
              )}
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L(
                  'Klass8 teaches your general and related subjects. The workshop subjects of your specialty are not in Klass8 yet.',
                  'Klass8 enseigne vos matières générales et connexes. Les matières d’atelier de votre spécialité ne sont pas encore dans Klass8.'
                )}
              </T>
            </V>
          )}
        </V>
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Class this school year', 'Classe cette année')}</T>
          <V c="gap-space-xs" accessibilityRole="radiogroup">
            <V c="flex-row gap-space-xs">
              {CLASSES.filter((k) => k.level === 'O').map((k) => (
                <Choice key={k.id} on={cls === k.id} label={k.id} onPress={() => pickClass(k.id)} />
              ))}
            </V>
            <V c="flex-row gap-space-xs">
              {CLASSES.filter((k) => k.level === 'A').map((k) => (
                <Choice key={k.id} on={cls === k.id} label={k.id} onPress={() => pickClass(k.id)} />
              ))}
            </V>
          </V>
        </V>
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L(`${examName} exam`, `Examen ${examName}`)}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {years.map((y) => (
              <Choice key={y} on={year === y} label={`June ${y}`} onPress={() => setYear(y)} />
            ))}
          </V>
        </V>
        {!technical && level === 'A' && (
          <V c="gap-space-sm">
            <T c="font-label-lg text-label-lg text-on-surface">{L('Your series', 'Votre série')}</T>
            {['arts', 'science'].map((kind) => (
              <V key={kind} c="flex-row flex-wrap gap-space-xs" accessibilityRole="radiogroup">
                {SERIES.filter((x) => x.kind === kind).map((x) => (
                  <Chip key={x.id} on={series === x.id} label={x.id} onPress={() => pickSeries(x.id)} />
                ))}
                {kind === 'science' && <Chip on={series === 'other'} label={L('Other', 'Autre')} onPress={() => setSeries('other')} />}
              </V>
            ))}
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {series && series !== 'other'
                ? `${series}: ${seriesLine(series, lang)}. ${L('Combinations vary between schools: change the subjects below if yours differ.', 'Les combinaisons varient selon les établissements : modifiez les matières ci-dessous si besoin.')}`
                : L('Choosing your series fills in its subjects; you can still change them below.', 'Le choix de la série remplit ses matières ; vous pouvez encore les modifier ci-dessous.')}
            </T>
          </V>
        )}
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">
            {L('Subjects you are taking', 'Matières que vous présentez')}
          </T>
          {!!interim.length && (
            <T c="font-body-md text-body-md text-on-surface-variant">
              {L(
                'Where an Advanced Level course is still being written, study the Ordinary Level subject it builds on until it is ready.',
                'Quand un cours de l’Advanced Level est encore en préparation, étudiez en attendant la matière de l’Ordinary Level sur laquelle il repose.'
              )}
            </T>
          )}
          <V c="bg-surface-container-lowest rounded-xl border border-outline-variant">
            {choices.map((s, i) => {
              const on = subjects.includes(s.id);
              return (
                <P key={s.id} c={`flex-row items-center gap-space-sm px-space-md py-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => toggle(s.id)} scale={1} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
                  <V c={`w-6 h-6 rounded items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
                  <T c="font-label-lg text-label-lg text-on-surface flex-1">{lang === 'fr' ? s.fr : s.en}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{!s.code ? L('School subject', 'Matière scolaire') : s.level === level ? s.code : `${LEVELS[s.level].short} ${s.code}`}</T>
                </P>
              );
            })}
          </V>
          {!!comingSoon.length && (
            <V c="gap-1 pt-space-xs">
              <T c="font-label-md text-label-md text-on-surface-variant">{L(`Being written for the ${levelName}`, `En préparation pour l’${levelName}`)}</T>
              <T c="font-body-md text-body-md text-on-surface-variant">
                {comingSoon.map((s) => `${lang === 'fr' ? s.fr : s.en} (${s.code})`).join(', ')}.
              </T>
            </V>
          )}
        </V>
      </V>
    </Screen>
  );
}
