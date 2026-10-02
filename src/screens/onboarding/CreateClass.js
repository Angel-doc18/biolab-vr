import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { post } from '../../api/client';
import { useL } from '../../i18n';
import { OnbHeader, StepBar } from './Steps';

const SUGGESTED = ['Form 5 Biology', 'Form 4 Biology', 'Form 3 Biology'];

// Teachers create a class; students join it with the generated code.
export default function CreateClass({ navigation, route }) {
  const L = useL();
  const fromPortal = route.params?.fromPortal;
  const [name, setName] = useState('');
  const [made, setMade] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const submit = async () => {
    if (name.trim().length < 2) return setError(L('Give the class a name.', 'Donnez un nom à la classe.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/classes', { name: name.trim() });
      setMade(r.class);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<OnbHeader />}>
      {!fromPortal && <StepBar screen="CreateClass" />}
      <V c="gap-space-xs mb-space-lg pt-space-sm">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Create a class', 'Créer une classe')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">{L('Each class gets a join code for your students.', 'Chaque classe reçoit un code pour vos élèves.')}</T>
      </V>
      {!made ? (
        <V c="gap-space-md">
          <Input c="h-[52px] px-4 rounded-xl bg-surface-container-lowest border border-outline-variant text-body-md" placeholder={L('Class name, for example Form 5 Science A', 'Nom de la classe, par exemple Form 5 Science A')} value={name} onChangeText={setName} maxLength={60} />
          <V c="flex-row flex-wrap gap-2">
            {SUGGESTED.map((s) => (
              <P key={s} c="px-3 py-1.5 rounded-full bg-surface-container-low" onPress={() => setName(s)}>
                <T c="font-label-md text-label-md text-primary-container">{s}</T>
              </P>
            ))}
          </V>
          <ErrorNote error={error} />
          <Cta variant="dark" icon={null} label={L('Create class', 'Créer la classe')} loading={busy} onPress={submit} />
          {!fromPortal && (
            <P c="items-center py-2" onPress={() => navigation.navigate('SetupDone')}>
              <T c="font-label-md text-label-md text-on-surface-variant">{L('Later', 'Plus tard')}</T>
            </P>
          )}
        </V>
      ) : (
        <V c="gap-space-md">
          <V c="p-space-md rounded-xl bg-primary-container gap-2">
            <T c="font-label-md text-label-md text-on-primary" style={{ opacity: 0.85 }}>{made.name}</T>
            <V c="flex-row items-center justify-between">
              <T c="font-display-lg text-display-lg text-on-primary tracking-widest">{made.joinCode}</T>
              <P
                c="h-10 px-3 rounded-lg bg-on-primary/15 flex-row items-center gap-1.5"
                onPress={async () => {
                  await Clipboard.setStringAsync(made.joinCode);
                  setCopied(true);
                }}
              >
                <Ic n={copied ? 'check' : 'content_copy'} s={18} c="on-primary" />
                <T c="font-label-md text-label-md text-on-primary">{copied ? L('Copied', 'Copié') : L('Copy', 'Copier')}</T>
              </P>
            </V>
            <T c="font-body-sm text-body-sm text-on-primary-container">{L('Students type this code when they register, or later from Me, then Join a class.', 'Les élèves saisissent ce code à l’inscription, ou plus tard depuis Moi, puis Rejoindre une classe.')}</T>
          </V>
          <Cta variant="dark" icon={null} label={fromPortal ? L('Done', 'Terminé') : L('Continue', 'Continuer')} onPress={() => (fromPortal ? navigation.goBack() : navigation.navigate('SetupDone'))} />
        </V>
      )}
    </Screen>
  );
}
