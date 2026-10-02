import { useState } from 'react';
import { Ic, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, passwordChecks, passwordValid } from '../../ui/form';
import { post } from '../../api/client';
import { useL } from '../../i18n';

function Rule({ ok, children }) {
  return (
    <V c="flex-row items-center gap-space-xs">
      <Ic n={ok ? 'check' : 'remove'} s={16} c={ok ? 'secondary' : 'outline'} />
      <T c={`font-body-sm text-body-sm ${ok ? 'text-on-surface' : 'text-on-surface-variant'}`}>{children}</T>
    </V>
  );
}

// Second step of password recovery: the new password, sent with the code from Otp.
export default function Reset({ navigation, route }) {
  const L = useL();
  const { phone, code } = route.params || {};
  const [pw, setPw] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const checks = passwordChecks(pw);

  const submit = async () => {
    if (!passwordValid(pw)) return setError(L('Your password does not meet the rules below.', 'Le mot de passe ne respecte pas les règles.'));
    if (pw !== confirm) return setError(L('The two passwords do not match.', 'Les deux mots de passe ne correspondent pas.'));
    setBusy(true);
    setError(null);
    try {
      await post('/v1/auth/password/reset', { phone, code, password: pw }, { auth: false });
      setDone(true);
    } catch (e) {
      if (e.code === 'otp_invalid' || e.code === 'otp_expired') {
        setError(e);
        setTimeout(() => navigation.goBack(), 1600);
      } else setError(e);
    } finally {
      setBusy(false);
    }
  };

  const toLogin = () => navigation.reset({ index: 0, routes: [{ name: 'Login' }] });

  if (done) {
    return (
      <Screen header={<AuthHeader back={false} />}>
        <V c="pt-space-lg gap-space-md">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Password changed', 'Mot de passe modifié')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {L('Your other devices have been signed out. Your progress is unchanged. Log in with the new password.', 'Vos autres appareils ont été déconnectés. Votre progression est conservée. Connectez-vous avec le nouveau mot de passe.')}
          </T>
          <Cta variant="dark" icon={null} label={L('Log in', 'Se connecter')} onPress={toLogin} />
        </V>
      </Screen>
    );
  }

  return (
    <Screen keyboard header={<AuthHeader />}>
      <V c="pt-space-lg gap-space-lg pb-space-xl">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Choose a new password', 'Nouveau mot de passe')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('You will use it the next time you log in.', 'Vous l’utiliserez à la prochaine connexion.')}</T>
        </V>
        <V c="gap-space-md">
          <Field label={L('New password', 'Nouveau mot de passe')} secure value={pw} onChangeText={setPw} autoCapitalize="none" textContentType="newPassword" maxLength={128} />
          <Field label={L('Type it again', 'Confirmez-le')} secure value={confirm} onChangeText={setConfirm} autoCapitalize="none" textContentType="newPassword" maxLength={128} />
          <V c="gap-1.5">
            <Rule ok={checks.length}>{L('At least 8 characters', 'Au moins 8 caractères')}</Rule>
            <Rule ok={checks.number}>{L('At least one number', 'Au moins un chiffre')}</Rule>
            <Rule ok={checks.upper && checks.lower}>{L('Capital and small letters', 'Majuscules et minuscules')}</Rule>
            <Rule ok={!!confirm && pw === confirm}>{L('Both entries match', 'Les deux saisies correspondent')}</Rule>
          </V>
          <ErrorNote error={error} />
          <Cta variant="dark" icon={null} label={L('Save password', 'Enregistrer')} loading={busy} onPress={submit} />
          <P c="items-center py-2" onPress={toLogin} hitSlop={8}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
          </P>
        </V>
      </V>
    </Screen>
  );
}
