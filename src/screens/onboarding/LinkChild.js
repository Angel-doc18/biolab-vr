import { useState } from 'react';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { post } from '../../api/client';
import { useL } from '../../i18n';
import { OnbHeader, StepBar } from './Steps';

// Parent onboarding (and later from the parent dashboard): link a child with the
// 8 character code the student generates in Me > Parent reports.
export default function LinkChild({ navigation, route }) {
  const L = useL();
  const fromHome = route.params?.fromHome;
  const [code, setCode] = useState('');
  const [child, setChild] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (code.length !== 8) return setError(L('The code has 8 characters.', 'Le code comporte 8 caractères.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/parent/link', { code });
      setChild(r.child);
      setCode('');
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<OnbHeader onSkip={fromHome ? undefined : () => navigation.navigate('SetupDone')} />}>
      {!fromHome && <StepBar screen="LinkChild" />}
      <V c="gap-space-xs mb-space-lg pt-space-sm">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Link your child', 'Liez votre enfant')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
          {L('On your child’s phone, open Me, then Parent reports, then Link a parent. Type the 8 character code shown there. A code works for 48 hours.', 'Sur le téléphone de votre enfant, ouvrez Moi, puis Rapports parent, puis Lier un parent. Saisissez le code à 8 caractères affiché. Un code est valable 48 heures.')}
        </T>
      </V>
      <V c="p-space-md rounded-xl bg-surface-container-low gap-space-sm mb-space-md">
        <T c="font-label-md text-label-md text-on-surface">{L('Link code', 'Code de liaison')}</T>
        <Input
          c="h-14 px-4 rounded-xl bg-surface-container-lowest text-headline-md font-headline-md tracking-widest text-center"
          value={code}
          onChangeText={(t) => setCode(t.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8))}
          autoCapitalize="characters"
          placeholder="XXXXXXXX"
          maxLength={8}
        />
        <ErrorNote error={error} />
        <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
          {L(
            'Your child finds this code in their app: Me, then Parent reports. Once linked, you see their class, study progress and weekly report.',
            'Votre enfant trouve ce code dans son application : Moi, puis Rapports au parent. Une fois lié, vous voyez sa classe, sa progression et son rapport de la semaine.'
          )}
        </T>
        <Cta h="h-12" variant="dark" icon={null} label={L('Link my child', 'Lier mon enfant')} loading={busy} onPress={submit} />
      </V>
      {child && (
        <V c="p-space-md rounded-xl bg-surface-container-low flex-row items-center gap-space-sm mb-space-md">
          <V c="flex-1">
            <T c="font-label-lg text-label-lg text-on-surface">
              {child.name} {L('is linked', 'est lié(e)')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{[child.className, child.schoolName].filter(Boolean).join(', ')}</T>
          </V>
        </V>
      )}
      <V c="gap-space-sm pb-8">
        {fromHome ? (
          <Cta variant={child ? 'primary' : 'soft'} icon={null} label={L('Done', 'Terminé')} onPress={() => navigation.goBack()} />
        ) : (
          <>
            <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} disabled={!child} onPress={() => navigation.navigate('SetupDone')} />
            <P c="items-center py-2" onPress={() => navigation.navigate('SetupDone')}>
              <T c="font-label-md text-label-md text-on-surface-variant">{L('I will link later', 'Je lierai plus tard')}</T>
            </P>
          </>
        )}
      </V>
    </Screen>
  );
}
