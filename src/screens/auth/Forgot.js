import { useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, PhoneField, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useL } from '../../i18n';

const validEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s).trim());

// First step of password recovery: a 6 digit code to the account's email (by
// Brevo) or phone (by SMS or WhatsApp). It opens on the way that works (Log in
// passes which ones do) and offers the other only when it works too.
export default function Forgot({ navigation, route }) {
  const L = useL();
  const ways = route?.params?.ways || { email: true, phone: true };
  const [byEmail, setByEmail] = useState(!ways.phone);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [note, setNote] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setError(null);
    if (byEmail ? !validEmail(email) : !validPhone(phone)) {
      setError(byEmail ? L('Enter the email address on your account.', 'Entrez l’adresse e-mail de votre compte.') : L('Enter the 9 digit number you registered with.', 'Entrez le numéro à 9 chiffres utilisé à l’inscription.'));
      return;
    }
    setBusy(true);
    try {
      if (byEmail) {
        const em = email.trim().toLowerCase();
        await post('/v1/auth/password/forgot', { email: em }, { auth: false });
        navigation.navigate('Otp', { purpose: 'reset', email: em, channel: 'email' });
      } else {
        const r = await post('/v1/auth/password/forgot', { phone: `237${phone}` }, { auth: false });
        navigation.navigate('Otp', { purpose: 'reset', phone: `237${phone}`, channel: r?.channel });
      }
    } catch (e) {
      if (e.code === 'use_email') {
        setByEmail(true);
        setNote(L('Codes by SMS are not available yet. Enter the email address on your account instead.', 'Les codes par SMS ne sont pas encore disponibles. Entrez plutôt l’adresse e-mail de votre compte.'));
      } else setError(e);
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
            {byEmail
              ? L('Enter the email address on your account. If it is registered, we email you a 6 digit code.', 'Entrez l’adresse e-mail de votre compte. Si elle est enregistrée, nous vous envoyons un code à 6 chiffres.')
              : L('Enter the number on your account. If it is registered, we send a 6 digit code to it.', 'Entrez le numéro de votre compte. S’il est enregistré, nous y envoyons un code à 6 chiffres.')}
          </T>
        </V>
        {!!note && (
          <V c="p-space-sm rounded-xl bg-surface-container-low">
            <T c="font-body-sm text-body-sm text-on-surface">{note}</T>
          </V>
        )}
        {byEmail ? (
          <Field label={L('Email address', 'Adresse e-mail')} value={email} onChangeText={setEmail} placeholder="name@gmail.com" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
        ) : (
          <PhoneField label={L('Phone number', 'Numéro de téléphone')} value={phone} onChangeText={setPhone} />
        )}
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Send code', 'Envoyer le code')} loading={busy} onPress={submit} />
        {ways.email && ways.phone ? (
          <P c="self-center py-space-xs" onPress={() => (setByEmail((x) => !x), setError(null), setNote(null))} hitSlop={8}>
            <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
              {byEmail ? L('Use my phone number instead', 'Utiliser mon numéro de téléphone') : L('Use my email instead', 'Utiliser mon e-mail')}
            </T>
          </P>
        ) : (
          <T c="font-body-sm text-body-sm text-on-surface-variant text-center" style={{ lineHeight: 20 }}>
            {byEmail
              ? L('The code goes to the email address on your account. If you never added one, contact Klass8 support.', 'Le code est envoyé à l’adresse e-mail de votre compte. Si vous n’en avez jamais ajouté, contactez le support Klass8.')
              : null}
          </T>
        )}
      </V>
    </Screen>
  );
}
