import { useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
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
  const years = examYears();
  const [year, setYear] = useState(user?.examYear || years[0]);
  const [cls, setCls] = useState(CLASSES.includes(user?.className) ? user.className : 'Form 5');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      await updateMe({ level: 'O', examYear: year, className: cls });
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
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your class and exam', 'Votre classe et votre examen')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('We use this to count down to your exam and plan your revision.', 'Nous l’utilisons pour le compte à rebours et le plan de révision.')}</T>
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
      </V>
    </Screen>
  );
}
