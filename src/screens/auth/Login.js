import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
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
    <Screen keyboard header={<AuthHeader title={L('Sign In', 'Connexion')} back={navigation.canGoBack()} />}>
      <V c="pt-space-md pb-space-sm items-center">
        <V c="w-16 h-16 rounded-full bg-surface-container-low items-center justify-center shadow-sm mb-space-md">
          <V c="absolute inset-0 rounded-full bg-secondary/10" />
          <Ic n="view_in_ar" s={32} c="primary" fill />
          <V c="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary items-center justify-center shadow-sm">
            <Ic n="sync" s={12} c="on-secondary" />
          </V>
        </V>
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">{L('Welcome back', 'Bon retour')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant text-center" style={{ maxWidth: 320, lineHeight: 22 }}>
          {L('Log in to continue your GCE Biology revision and syllabus tracker.', 'Connectez-vous pour reprendre vos révisions de biologie.')}
        </T>
      </V>
      <V c="w-full bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-lg flex-row items-start gap-space-sm">
        <V c="w-8 h-8 rounded-lg bg-surface-container items-center justify-center">
          <Ic n="cloud_done" s={20} c="primary" fill />
        </V>
        <V c="flex-1">
          <V c="flex-row items-center gap-space-xs mb-0.5">
            <T c="font-label-md text-label-md text-primary">{L('Offline ready', 'Disponible hors ligne')}</T>
            <V c="px-1.5 rounded-full bg-secondary-container">
              <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Log in once', 'Une connexion')}</T>
            </V>
          </V>
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 17 }}>
            {L(
              'You only need internet to log in. Lessons, 3D models, labs and practice questions then work without data.',
              'Internet est nécessaire seulement pour la connexion. Cours, modèles 3D, TP et questions fonctionnent ensuite sans données.'
            )}
          </T>
        </V>
      </V>
      <V c="gap-space-md">
        <Field
          label={L('Phone number or email', 'Téléphone ou e-mail')}
          leftIcon="person_outline"
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
              <P onPress={() => navigation.navigate('Forgot')}>
                <T c="font-label-md text-label-md text-primary py-0.5">{L('Forgot password?', 'Mot de passe oublié ?')}</T>
              </P>
            }
          >
            {L('Password', 'Mot de passe')}
          </Label>
          <Field
            leftIcon="lock_outline"
            bg="bg-surface-container-lowest"
            secure
            placeholder={L('Enter your password', 'Entrez votre mot de passe')}
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
        <V c="flex-row items-center justify-between pt-0.5">
          <V c="flex-row items-center gap-space-sm">
            <V c="w-5 h-5 rounded-lg bg-primary items-center justify-center shadow-sm">
              <Ic n="check" s={14} c="on-primary" />
            </V>
            <T c="font-label-md text-label-md text-on-surface">{L('Stay signed in on this device', 'Rester connecté')}</T>
          </V>
          <V c="flex-row items-center gap-1">
            <Ic n="offline_bolt" s={14} c="secondary" />
            <T c="font-label-sm text-label-sm text-secondary">{L('Secure storage', 'Stockage sécurisé')}</T>
          </V>
        </V>
        <ErrorNote error={error} />
        <Cta variant="dark" label={L('Log in', 'Se connecter')} loading={busy} onPress={submit} c="mt-space-xs" />
      </V>
      <V c="mt-space-xl items-center gap-space-sm pb-space-lg">
        <V c="flex-row items-center">
          <T c="font-body-md text-body-md text-on-surface-variant">{L('New here?', 'Nouveau ?')} </T>
          <P onPress={() => navigation.navigate(navigation.getState().routeNames.includes('Language') ? 'Language' : 'Register')}>
            <T c="font-label-lg text-label-lg text-primary ml-1" style={{ fontWeight: '700' }}>
              {L('Create an account', 'Créer un compte')}
            </T>
          </P>
        </V>
        <P c="flex-row items-center gap-1.5 pt-space-xs" onPress={() => navigation.navigate('Legal', { doc: 'help' })}>
          <Ic n="support_agent" s={16} c="outline" />
          <T c="font-label-sm text-label-sm text-outline uppercase tracking-wider">{L('Need help? Contact support', 'Besoin d’aide ? Support')}</T>
        </P>
      </V>
    </Screen>
  );
}
