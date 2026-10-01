import { useState } from 'react';
import { Ic, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { PhoneField, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useL } from '../../i18n';

// Step 1 of 2 of password recovery: request an SMS code.
export default function Forgot({ navigation }) {
  const L = useL();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!validPhone(phone)) {
      setError(L('Enter the 9 digit number you registered with.', 'Entrez le numéro à 9 chiffres utilisé à l’inscription.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await post('/v1/auth/password/forgot', { phone: `237${phone}` }, { auth: false });
      navigation.navigate('Otp', { purpose: 'reset', phone: `237${phone}` });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<AuthHeader title={L('Reset Password', 'Mot de passe')} />}>
      <V c="flex-row items-center gap-space-xs mt-space-md mb-space-sm">
        <V c="px-space-sm py-0.5 rounded-full bg-surface-container-high flex-row items-center gap-1.5">
          <V c="w-1.5 h-1.5 rounded-full bg-secondary" />
          <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Account recovery · Step 1 of 2', 'Récupération · Étape 1 sur 2')}</T>
        </V>
      </V>
      <V c="mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">{L('Forgot your password?', 'Mot de passe oublié ?')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">
          {L('Enter the phone number on your account. We will text you a 6 digit code.', 'Entrez le numéro de votre compte. Nous vous enverrons un code à 6 chiffres.')}
        </T>
      </V>
      <V c="gap-space-md">
        <PhoneField label={L('Phone number', 'Numéro de téléphone')} value={phone} onChangeText={setPhone} />
        <V c="bg-surface-container-low rounded-xl p-space-md flex-row items-start gap-space-sm">
          <Ic n="info" s={18} c="primary" />
          <T c="font-body-sm text-body-sm text-on-surface-variant flex-1" style={{ lineHeight: 18 }}>
            {L(
              'For your security we show the same message whether or not an account exists for this number.',
              'Par sécurité, le même message s’affiche que le compte existe ou non.'
            )}
          </T>
        </V>
        <ErrorNote error={error} />
        <Cta label={L('Send code', 'Envoyer le code')} loading={busy} onPress={submit} />
      </V>
    </Screen>
  );
}
