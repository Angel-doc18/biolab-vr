import { useState } from 'react';
import { Ic, Input, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader } from '../../ui/chrome';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { longDate } from '../../lib/payments';

// A code from the student's school opens Klass8 for the days it carries.
export default function Voucher({ navigation }) {
  const { user, refreshMe, refreshQuota } = useApp();
  const L = useL();
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(null); // { label, until }

  const redeem = async () => {
    const value = code.trim().toUpperCase();
    if (value.replace(/[^A-Z0-9]/g, '').length < 12) return setError(L('Voucher codes have 12 characters.', 'Les codes ont 12 caractères.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/billing/redeem', { code: value });
      const me = await refreshMe();
      refreshQuota();
      setDone({ label: r.label, until: me?.user?.proUntil || user?.proUntil });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen
      bg="bg-surface"
      keyboard
      header={<StackHeader title={L('School voucher', 'Code de l’école')} avatar={false} />}
      footer={
        <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
          {!done && <ErrorNote error={error} />}
          {done ? (
            <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Main' }] })} />
          ) : (
            <Cta variant="dark" icon={null} label={L('Apply the code', 'Appliquer le code')} loading={busy} onPress={redeem} />
          )}
        </V>
      }
    >
      <V c="pt-space-md pb-space-xl gap-space-lg">
        {done ? (
          <V c="gap-space-sm">
            <V c="w-14 h-14 rounded-full bg-surface-container-low items-center justify-center">
              <Ic n="verified" s={30} c="primary-container" fill />
            </V>
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Code applied', 'Code appliqué')}</T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {done.label ? `${done.label}. ` : ''}
              {done.until ? `${L('Klass8 is open on your account until', 'Klass8 est ouvert sur votre compte jusqu’au')} ${longDate(done.until)}.` : L('Klass8 is open on your account.', 'Klass8 est ouvert sur votre compte.')}
            </T>
          </V>
        ) : (
          <>
            <V c="gap-space-xs">
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Enter your school’s code', 'Entrez le code de votre école')}</T>
              <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                {L('Your school gives each student a code of 12 letters and numbers. It opens Klass8 for the time your school paid for.', 'Votre école donne à chaque élève un code de 12 lettres et chiffres. Il ouvre Klass8 pour la durée payée par l’école.')}
              </T>
            </V>
            <Input
              c="h-14 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant text-headline-sm"
              value={code}
              onChangeText={(t) => setCode(t.toUpperCase())}
              placeholder="XXXX-XXXX-XXXX"
              autoCapitalize="characters"
              autoCorrect={false}
              maxLength={20}
              accessibilityLabel={L('Voucher code', 'Code')}
            />
          </>
        )}
      </V>
    </Screen>
  );
}
