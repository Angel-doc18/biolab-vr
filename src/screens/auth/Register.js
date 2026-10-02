import { useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Check, Field, PhoneField, StrengthMeter, passwordValid, validPhone } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

export default function Register({ navigation }) {
  const { register } = useApp();
  const L = useL();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    const e = {};
    if (name.trim().length < 2) e.name = L('Enter your full name.', 'Entrez votre nom complet.');
    if (!validPhone(phone)) e.phone = L('Enter a 9 digit Cameroon number starting with 6.', 'Entrez un numéro de 9 chiffres commençant par 6.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = L('This email address is not valid.', 'Adresse e-mail invalide.');
    if (!passwordValid(password)) e.password = L('Use 8+ characters with a capital letter, a small letter and a number.', 'Au moins 8 caractères avec majuscule, minuscule et chiffre.');
    if (!agree) e.agree = true;
    setErrors(e);
    if (Object.keys(e).length) {
      if (e.agree && Object.keys(e).length === 1) setError(L('Please accept the Terms of Service and Privacy Policy.', 'Veuillez accepter les conditions et la politique de confidentialité.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const r = await register({ name: name.trim(), phone: `237${phone}`, email: email.trim() || undefined, password });
      if (r.otpAvailable) navigation.reset({ index: 0, routes: [{ name: 'Otp', params: { purpose: 'verify', phone: r.user.phone, next: 'Role' } }] });
      else navigation.reset({ index: 0, routes: [{ name: 'Role' }] });
    } catch (err) {
      setError(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen keyboard header={<AuthHeader />}>
      <V c="pt-space-lg pb-space-xl gap-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Create your account', 'Créez votre compte')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Your account keeps your progress, marks and class work in one place.', 'Votre compte garde vos progrès, vos notes et vos devoirs au même endroit.')}
          </T>
        </V>
        <V c="gap-space-md">
          <Field
            label={L('Full name', 'Nom complet')}
            placeholder={L('As written on your school register', 'Comme sur le registre de l’école')}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            textContentType="name"
            autoComplete="name"
            error={errors.name}
            maxLength={80}
          />
          <PhoneField
            label={L('Phone number', 'Numéro de téléphone')}
            value={phone}
            onChangeText={setPhone}
            hint={L('You sign in with this number. Codes and payment requests are sent to it.', 'Vous vous connectez avec ce numéro. Les codes et demandes de paiement y sont envoyés.')}
            error={errors.phone}
          />
          <Field
            label={L('Email address', 'Adresse e-mail')}
            right={<T c="font-label-sm text-label-sm text-on-surface-variant">{L('Optional', 'Facultatif')}</T>}
            placeholder="name@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            textContentType="emailAddress"
            autoComplete="email"
            error={errors.email}
            maxLength={254}
          />
          <V>
            <Field
              label={L('Password', 'Mot de passe')}
              secure
              value={password}
              onChangeText={setPassword}
              textContentType="newPassword"
              autoComplete="password-new"
              autoCapitalize="none"
              hint={L('At least 8 characters, with a capital letter, a small letter and a number.', 'Au moins 8 caractères, avec une majuscule, une minuscule et un chiffre.')}
              error={errors.password}
              maxLength={128}
            />
            {!!password && <StrengthMeter password={password} L={L} />}
          </V>
          <Check on={agree} onPress={() => setAgree((a) => !a)}>
            <T c={`font-body-sm text-body-sm ${errors.agree ? 'text-error' : 'text-on-surface-variant'}`} style={{ lineHeight: 18 }}>
              {L('I agree to the ', 'J’accepte les ')}
              <T c="font-body-sm text-body-sm text-primary underline" style={{ fontWeight: '600' }} onPress={() => navigation.navigate('Legal', { doc: 'terms' })}>
                {L('Terms of Service', 'Conditions d’utilisation')}
              </T>
              {L(' and the ', ' et la ')}
              <T c="font-body-sm text-body-sm text-primary underline" style={{ fontWeight: '600' }} onPress={() => navigation.navigate('Legal', { doc: 'privacy' })}>
                {L('Privacy Policy', 'Politique de confidentialité')}
              </T>
            </T>
          </Check>
          <ErrorNote error={error} />
          <Cta variant="dark" icon={null} label={L('Create account', 'Créer le compte')} loading={busy} onPress={submit} />
        </V>
        <V c="flex-row items-center justify-center pt-2">
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Already registered?', 'Déjà inscrit ?')} </T>
          <P onPress={() => navigation.navigate('Login')} hitSlop={8}>
            <T c="font-body-md text-body-md text-primary" style={{ fontWeight: '700' }}>
              {L('Log in', 'Se connecter')}
            </T>
          </P>
        </V>
      </V>
    </Screen>
  );
}
