import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL, useLang } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OPEN_SUBJECTS as SUBJECTS, chosenSubjects } from '../../data/subjects';
import { OnbHeader, StepBar } from './Steps';

const CLASSES = ['Form 3', 'Form 4', 'Form 5'];

function examYears() {
  const now = new Date();
  const first = now.getMonth() >= 5 ? now.getFullYear() + 1 : now.getFullYear();
  return [first, first + 1, first + 2];
}

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
  const years = examYears();
  const [year, setYear] = useState(user?.examYear || years[0]);
  const [cls, setCls] = useState(CLASSES.includes(user?.className) ? user.className : 'Form 5');
  const [subjects, setSubjects] = useState(user?.subjects?.length || user?.onboarded ? chosenSubjects(user) : []);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const toggle = (id) => setSubjects((list) => (list.includes(id) ? list.filter((s) => s !== id) : [...list, id]));

  const submit = async () => {
    if (!subjects.length) return setError(L('Choose at least one subject.', 'Choisissez au moins une matière.'));
    setBusy(true);
    setError(null);
    try {
      await updateMe({ level: 'O', examYear: year, className: cls, subjects });
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
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {CLASSES.map((k) => (
              <Choice key={k} on={cls === k} label={k} onPress={() => setCls(k)} />
            ))}
          </V>
        </V>
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('GCE Ordinary Level exam', 'Examen GCE Ordinary Level')}</T>
          <V c="flex-row gap-space-xs" accessibilityRole="radiogroup">
            {years.map((y) => (
              <Choice key={y} on={year === y} label={`June ${y}`} onPress={() => setYear(y)} />
            ))}
          </V>
        </V>
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Science subjects you are taking', 'Matières scientifiques que vous présentez')}</T>
          <V c="bg-surface-container-lowest rounded-xl border border-outline-variant">
            {SUBJECTS.map((s, i) => {
              const on = subjects.includes(s.id);
              return (
                <P key={s.id} c={`flex-row items-center gap-space-sm px-space-md py-space-sm ${i ? 'border-t border-surface-container' : ''}`} onPress={() => toggle(s.id)} scale={1} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
                  <V c={`w-6 h-6 rounded items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>{on && <Ic n="check" s={16} c="on-primary" />}</V>
                  <T c="font-label-lg text-label-lg text-on-surface flex-1">{lang === 'fr' ? s.fr : s.en}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{s.code}</T>
                </P>
              );
            })}
          </V>
        </V>
      </V>
    </Screen>
  );
}
