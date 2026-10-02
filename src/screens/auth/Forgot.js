import { useState } from 'react';
import { T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { PhoneField, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useL } from '../../i18n';

// First step of password recovery: a code is sent to the account's phone.
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
      const r = await post('/v1/auth/password/forgot', { phone: `237${phone}` }, { auth: false });
      navigation.navigate('Otp', { purpose: 'reset', phone: `237${phone}`, channel: r?.channel });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<AuthHeader />}>
      <V c="pt-space-lg gap-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Reset your password', 'Réinitialiser le mot de passe')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {L('Enter the number on your account. If it is registered, we send a 6 digit code to it.', 'Entrez le numéro de votre compte. S’il est enregistré, nous y envoyons un code à 6 chiffres.')}
          </T>
        </V>
        <PhoneField label={L('Phone number', 'Numéro de téléphone')} value={phone} onChangeText={setPhone} />
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Send code', 'Envoyer le code')} loading={busy} onPress={submit} />
      </V>
    </Screen>
  );
}
