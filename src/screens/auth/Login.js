import { useState } from 'react';
import { P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, Label } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { routeAfterAuth } from '../../navigation/routes';

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

  return (
    <Screen keyboard header={<AuthHeader back={navigation.canGoBack()} />}>
      <V c="pt-space-lg pb-space-lg gap-space-xs">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Log in', 'Connexion')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant">
          {L('Use the phone number or email you registered with.', 'Utilisez le numéro ou l’e-mail de votre inscription.')}
        </T>
      </V>
      <V c="gap-space-md">
        <Field
          label={L('Phone number or email', 'Téléphone ou e-mail')}
          bg="bg-surface-container-lowest"
          placeholder={L('6XX XX XX XX or email', '6XX XX XX XX ou e-mail')}
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
          textContentType="username"
          autoComplete="username"
          keyboardType="email-address"
          maxLength={254}
        />
        <V c="gap-1.5">
          <Label
            right={
              <P onPress={() => navigation.navigate('Forgot')} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary py-0.5">{L('Forgot password?', 'Mot de passe oublié ?')}</T>
              </P>
            }
          >
            {L('Password', 'Mot de passe')}
          </Label>
          <Field
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
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Log in', 'Se connecter')} loading={busy} onPress={submit} c="mt-space-xs" />
      </V>
      <V c="mt-space-xl gap-space-md pb-space-lg">
        <V c="flex-row items-center justify-center">
          <T c="font-body-md text-body-md text-on-surface-variant">{L('No account yet?', 'Pas encore de compte ?')} </T>
          <P onPress={() => navigation.navigate(navigation.getState().routeNames.includes('Language') ? 'Language' : 'Register')} hitSlop={8}>
            <T c="font-label-lg text-label-lg text-primary ml-1" style={{ fontWeight: '700' }}>
              {L('Create one', 'Créer un compte')}
            </T>
          </P>
        </V>
        <P c="items-center" onPress={() => navigation.navigate('Legal', { doc: 'help' })} hitSlop={8}>
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Help and contact', 'Aide et contact')}</T>
        </P>
      </V>
    </Screen>
  );
}
