import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader, StepBar } from './Steps';

export default function Role({ navigation }) {
  const { user, updateMe } = useApp();
  const L = useL();
  const [role, setRole] = useState(user?.role || 'student');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  const ROLES = [
    {
      id: 'student',
      name: L('Student', 'Élève'),
      body: L('Preparing for GCE Ordinary Level Biology, Forms 3 to 5.', 'Préparation du GCE Ordinary Level Biologie, Form 3 à 5.'),
    },
    {
      id: 'parent',
      name: L('Parent or guardian', 'Parent ou tuteur'),
      body: L('Follow your child’s revision, approve their account and receive weekly reports.', 'Suivez les révisions de votre enfant, approuvez son compte et recevez un rapport chaque semaine.'),
    },
    {
      id: 'teacher',
      name: L('Teacher', 'Enseignant'),
      body: L('Create classes, set work and see which topics your students find hardest.', 'Créez des classes, donnez du travail et voyez les sujets les plus difficiles.'),
    },
  ];

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      if (role !== user?.role) await updateMe({ role });
      navigation.navigate(nextStep(role, 'Role'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen
      header={<OnbHeader canBack={false} />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} loading={busy} onPress={submit} />
        </V>
      }
    >
      <StepBar screen="Role" />
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Who will use this account?', 'Qui utilisera ce compte ?')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('This decides what you see first. Students can link a parent or a teacher later.', 'Cela détermine ce que vous voyez d’abord. Les élèves peuvent lier un parent ou un enseignant plus tard.')}</T>
      </V>
      <V c="gap-space-sm" accessibilityRole="radiogroup">
        {ROLES.map((r) => {
          const on = r.id === role;
          return (
            <P
              key={r.id}
              c={`w-full p-space-md rounded-xl flex-row items-center gap-space-sm ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`}
              onPress={() => setRole(r.id)}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
            >
              <V c="flex-1 gap-0.5">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {r.name}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                  {r.body}
                </T>
              </V>
              <V c={`w-6 h-6 rounded-full items-center justify-center ${on ? 'bg-primary-container' : 'border-2 border-outline-variant'}`}>
                {on && <Ic n="check" s={16} c="on-primary" />}
              </V>
            </P>
          );
        })}
      </V>
    </Screen>
  );
}
