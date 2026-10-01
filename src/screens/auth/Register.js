import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Pulse, Screen } from '../../ui/chrome';
import { Check, Field, PhoneField, StrengthMeter, passwordValid, validPhone } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { MODEL_COUNT } from '../../data/plan';

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
    <Screen keyboard header={<AuthHeader title={L('Create Account', 'Créer un compte')} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="flex-row items-center justify-between">
          <V c="flex-row items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high">
            <Pulse c="w-2 h-2 rounded-full bg-secondary-container" />
            <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Get started · GCE Biology', 'Commencer · GCE Biologie')}</T>
          </V>
          <V c="flex-row items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low">
            <Ic n="wifi_off" s={15} c="secondary" />
            <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
              {L('Offline ready', 'Hors ligne')}
            </T>
          </V>
        </V>
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Create your account', 'Créez votre compte')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Revise GCE Biology from Form 3 to Form 5 with 3D specimens, virtual practicals and timed mocks.', 'Révisez la biologie du GCE avec des spécimens 3D, des TP virtuels et des examens chronométrés.')}
          </T>
        </V>
        <V c="gap-space-md">
          <Field
            label={L('Full name', 'Nom complet')}
            icon="badge"
            placeholder="e.g. Brenda Enow"
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
            right={<T c="font-label-sm text-label-sm text-secondary">MTN / Orange</T>}
            value={phone}
            onChangeText={setPhone}
            hint={L('Used to sign in, reset your password and pay by mobile money', 'Pour vous connecter, réinitialiser le mot de passe et payer')}
            error={errors.phone}
          />
          <Field
            label={L('Email address', 'Adresse e-mail')}
            right={<T c="font-label-sm text-label-sm text-outline">{L('Optional', 'Facultatif')}</T>}
            icon="alternate_email"
            placeholder="brenda@example.cm"
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
              label={L('Create password', 'Créer un mot de passe')}
              secure
              value={password}
              onChangeText={setPassword}
              textContentType="newPassword"
              autoComplete="password-new"
              autoCapitalize="none"
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
              {L(' and ', ' et la ')}
              <T c="font-body-sm text-body-sm text-primary underline" style={{ fontWeight: '600' }} onPress={() => navigation.navigate('Legal', { doc: 'privacy' })}>
                {L('Privacy Policy', 'Politique de confidentialité')}
              </T>
            </T>
          </Check>
          <ErrorNote error={error} />
          <Cta variant="dark" label={L('Create account', 'Créer le compte')} icon="arrow_forward" loading={busy} onPress={submit} />
          <V c="p-3.5 rounded-xl bg-surface-container flex-row items-center gap-3 shadow-sm">
            <V c="w-12 h-12 rounded-lg bg-surface-container-lowest items-center justify-center shadow-sm">
              <Ic n="view_in_ar" s={24} c="primary" />
            </V>
            <V c="flex-1">
              <V c="flex-row items-center gap-1.5">
                <T c="font-label-md text-label-md text-on-surface" numberOfLines={1}>
                  {L('3D specimens and VR view', 'Spécimens 3D et vue VR')}
                </T>
                <V c="px-1.5 rounded bg-secondary">
                  <T c="font-label-sm text-on-secondary" style={{ fontSize: 9 }}>
                    {L('FREE', 'GRATUIT')}
                  </T>
                </V>
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {MODEL_COUNT} {L('interactive syllabus models included', 'modèles interactifs inclus')}
              </T>
            </V>
          </V>
        </V>
        <V c="flex-row items-center justify-center pt-2">
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Already have an account?', 'Vous avez déjà un compte ?')} </T>
          <P onPress={() => navigation.navigate('Login')}>
            <T c="font-body-md text-body-md text-primary" style={{ fontWeight: '700' }}>
              {L('Log in', 'Se connecter')}
            </T>
          </P>
        </V>
        <V c="items-center gap-1.5 pt-2">
          <V c="flex-row items-center gap-1.5">
            <Ic n="lock" s={16} c="outline" />
            <T c="font-label-sm text-label-sm text-outline uppercase tracking-wide">{L('Encrypted connection', 'Connexion chiffrée')}</T>
          </V>
          <T c="font-body-sm text-body-sm text-outline text-center">{L('Premium can be paid with MTN MoMo or Orange Money', 'Premium payable par MTN MoMo ou Orange Money')}</T>
        </V>
      </V>
    </Screen>
  );
}
