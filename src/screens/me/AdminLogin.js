// Admin sign-in: for Klass8's own admin accounts only, which are made on the
// server (make-admin.sh), not in the app. Students, parents and teachers sign
// in on the usual page; their accounts cannot open the admin screens.
import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field } from '../../ui/form';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { adminSignIn } from '../../api/adminClient';
import { NeedsInternet } from '../../ui/Offline';

export default function AdminLogin({ navigation }) {
  const { auth, logout } = useApp();
  const L = useL();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!login.trim() || !password) {
      setError(L('Enter the admin email or phone number and the password.', 'Entrez l’e-mail ou le numéro admin et le mot de passe.'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await adminSignIn(login.trim(), password);
      // One kind of account at a time on this device: the admin console replaces any student session.
      if (auth.status === 'authed') await logout().catch(() => {});
      navigation.reset({ index: 0, routes: [{ name: 'Admin' }] });
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const back = () => (navigation.canGoBack() ? navigation.goBack() : navigation.reset({ index: 0, routes: [{ name: 'Login' }] }));

  return (
    <Screen bg="bg-surface" keyboard header={<AuthHeader onBack={back} />}>
      <V c="pt-space-lg gap-space-md">
        <V c="w-14 h-14 rounded-2xl bg-primary items-center justify-center">
          <Ic n="admin_panel_settings" s={30} c="secondary-fixed" />
        </V>
        <V c="gap-1">
          <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
            {L('Admin sign in', 'Connexion admin')}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {L(
              'For the Klass8 team only. Admin accounts are made by Klass8, not in the app. Students, parents and teachers sign in on the usual page.',
              'Réservé à l’équipe Klass8. Les comptes admin sont créés par Klass8, pas dans l’application. Élèves, parents et enseignants se connectent sur la page habituelle.'
            )}
          </T>
        </V>
        <Field
          label={L('Admin email or phone number', 'E-mail ou numéro admin')}
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="username"
          textContentType="username"
          maxLength={254}
          returnKeyType="next"
        />
        <Field
          label={L('Password', 'Mot de passe')}
          value={password}
          onChangeText={setPassword}
          secure
          autoComplete="current-password"
          textContentType="password"
          maxLength={128}
          returnKeyType="go"
          onSubmitEditing={submit}
        />
        <NeedsInternet what={{ en: 'sign in', fr: 'vous connecter' }} />
        <ErrorNote error={error} />
        <Cta variant="dark" icon={null} label={L('Sign in to the admin', 'Se connecter à l’admin')} loading={busy} onPress={submit} />
        <P c="items-center py-space-sm" onPress={back} hitSlop={8}>
          <T c="font-label-md text-label-md text-primary">{L('Not an admin? Back to the usual sign in', 'Pas admin ? Retour à la connexion habituelle')}</T>
        </P>
      </V>
    </Screen>
  );
}
