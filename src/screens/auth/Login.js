import { useState } from 'react';
import { BrandLogo, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, Label } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { routeAfterAuth } from '../../navigation/routes';
import { NeedsInternet } from '../../ui/Offline';

// Password reset needs codes sent by SMS or WhatsApp; it stays hidden until a
// sender is set up on the server.
const FORGOT_OPEN = false;

// Accepts 6XXXXXXXX, +237 6XX..., or an email address.
function normaliseIdentifier(v) {
  const s = v.trim();
  if (s.includes('@')) return s.toLowerCase();
  const d = s.replace(/\D/g, '');
  return d.length === 9 ? `237${d}` : d;
}

export default function Login({ navigation }) {
  const { login } = useApp();
  const L = useL();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!identifier.trim() || !password) {
      setError(L('Enter your phone number or email and your password.', 'Entrez votre numéro ou e-mail et votre mot de passe.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      const r = await login(normaliseIdentifier(identifier), password);
      navigation.reset(routeAfterAuth(r.user));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  // Back always leads somewhere: the previous page, or the welcome page when
  // the app opened here (after signing out, or on a return visit).
  const toWelcome = () => (navigation.canGoBack() ? navigation.goBack() : navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] }));
  const create = () => navigation.navigate(navigation.getState().routeNames.includes('Language') ? 'Language' : 'Register');

  return (
    <Screen keyboard header={<AuthHeader back onBack={toWelcome} logo={false} />}>
      <V c="items-center pt-space-lg pb-space-lg gap-space-md">
        <BrandLogo layout="stack" height={96} />
        <V c="items-center gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight text-center">{L('Welcome back', 'Bon retour')}</T>
          <V c="w-10 h-1 rounded-full bg-tertiary-container my-1" />
          <T c="font-body-md text-body-md text-on-surface-variant text-center">{L('Log in with your phone number or email.', 'Connectez-vous avec votre numéro ou votre e-mail.')}</T>
        </V>
      </V>

      <V c="gap-space-md">
        <Field
          label={L('Phone number or email', 'Téléphone ou e-mail')}
          leftIcon="person"
          bg="bg-surface-container-lowest"
          placeholder={L('6XX XX XX XX or email', '6XX XX XX XX ou e-mail')}
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
          textContentType="username"
          autoComplete="username"
          keyboardType="email-address"
          returnKeyType="next"
          maxLength={254}
        />
        <V c="gap-1.5">
          <Label
            right={
              FORGOT_OPEN ? (
                <P onPress={() => navigation.navigate('Forgot')} hitSlop={8}>
                  <T c="font-label-md text-label-md text-primary py-0.5">{L('Forgot password?', 'Mot de passe oublié ?')}</T>
                </P>
              ) : null
            }
          >
            {L('Password', 'Mot de passe')}
          </Label>
          <Field
            leftIcon="lock"
            bg="bg-surface-container-lowest"
            secure
            placeholder={L('Your password', 'Votre mot de passe')}
            value={password}
            onChangeText={setPassword}
            textContentType="password"
            autoComplete="password"
            autoCapitalize="none"
            onSubmitEditing={submit}
            returnKeyType="go"
            maxLength={128}
          />
        </V>
        <NeedsInternet what={{ en: 'log in', fr: 'vous connecter' }} />
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Log in', 'Se connecter')} loading={busy} onPress={submit} c="mt-space-xs" />
      </V>

      <V c="mt-space-xl gap-space-md pb-space-lg">
        <V c="flex-row items-center gap-space-sm">
          <V c="flex-1 h-px bg-surface-container" />
          <T c="font-label-md text-label-md text-on-surface-variant">{L('New to Klass8?', 'Nouveau sur Klass8 ?')}</T>
          <V c="flex-1 h-px bg-surface-container" />
        </V>
        <Cta variant="white" icon={null} label={L('Create an account', 'Créer un compte')} onPress={create} />
        <P c="items-center pt-space-xs" onPress={() => navigation.navigate('Legal', { doc: 'help' })} hitSlop={8}>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Help and contact', 'Aide et contact')}</T>
        </P>
        <P c="items-center" onPress={() => navigation.navigate('AdminLogin')} hitSlop={8}>
          <T c="font-body-sm text-body-sm text-outline">{L('Klass8 team? Admin sign in', 'Équipe Klass8 ? Connexion admin')}</T>
        </P>
      </V>
    </Screen>
  );
}
