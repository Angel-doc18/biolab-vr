import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { CLASSES, LEVELS, chosenSubjects, classById, classLevel, examYearFor, subjectsForClass, subjectsForLevel, subjectsInClass } from '../../data/subjects';
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
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const toggle = (id) => setSubjects((list) => (list.includes(id) ? list.filter((s) => s !== id) : [...list, id]));

  const submit = async () => {
    const picked = subjects.filter((id) => choices.some((s) => s.id === id));
    if (!picked.length) return setError(L('Choose at least one subject.', 'Choisissez au moins une matière.'));
    setBusy(true);
    setError(null);
    try {
      await updateMe({ level, examYear: year, className: cls, subjects: picked });
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
          <T c="font-label-lg text-label-lg text-on-surface">{L(`GCE ${levelName} exam`, `Examen GCE ${levelName}`)}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {years.map((y) => (
              <Choice key={y} on={year === y} label={`June ${y}`} onPress={() => setYear(y)} />
            ))}
          </V>
        </V>
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
