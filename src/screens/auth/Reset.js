import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, Label, passwordChecks, passwordValid, StrengthMeter } from '../../ui/form';
import { post } from '../../api/client';
import { useL } from '../../i18n';

function Rule({ ok, children }) {
  return (
    <V c="flex-row items-center gap-space-sm">
      <V c={`w-5 h-5 rounded-full items-center justify-center ${ok ? 'bg-secondary-container' : 'bg-surface-container'}`}>
        <Ic n={ok ? 'check' : 'remove'} s={14} c={ok ? 'on-secondary-container' : 'outline'} />
      </V>
      <T c={`font-body-md text-body-md ${ok ? 'text-on-surface' : 'text-on-surface-variant'}`}>{children}</T>
    </V>
  );
}

function Success({ onDone, L }) {
  const ping = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(ping, { toValue: 1, duration: 1400, easing: Easing.out(Easing.ease), useNativeDriver: true })).start();
  }, [ping]);
  return (
    <V c="absolute inset-0 z-20 items-center justify-center bg-surface-container-lowest/95 p-space-md">
      <V c="w-full bg-surface-container-lowest rounded-xl p-space-lg items-center shadow-lg">
        <V c="w-20 h-20 mb-space-md items-center justify-center">
          <Animated.View
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: 'rgba(109,245,225,0.4)',
              opacity: ping.interpolate({ inputRange: [0, 1], outputRange: [0.75, 0] }),
              transform: [{ scale: ping.interpolate({ inputRange: [0, 1], outputRange: [1, 1.6] }) }],
            }}
          />
          <V c="w-20 h-20 rounded-full bg-secondary-container items-center justify-center shadow-sm" style={{ borderRadius: 40 }}>
            <Ic n="check_circle" s={40} c="secondary" fill />
          </V>
        </V>
        <T c="font-headline-lg text-headline-lg text-on-surface mb-space-xs">{L('Password changed!', 'Mot de passe modifié !')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant mb-space-lg text-center" style={{ lineHeight: 22 }}>
          {L('Your password has been updated and every other device has been signed out. Log in with your new password.', 'Votre mot de passe a été modifié et les autres appareils ont été déconnectés.')}
        </T>
        <V c="w-full bg-surface-container-low rounded-xl p-space-sm mb-space-lg flex-row items-center gap-space-sm">
          <V c="w-9 h-9 rounded-lg bg-surface-container items-center justify-center">
            <Ic n="sync_saved_locally" s={20} c="primary" />
          </V>
          <V c="flex-1">
            <T c="font-label-md text-label-md text-on-surface">{L('Your progress is safe', 'Votre progression est conservée')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Nothing is lost when you reset a password', 'Rien n’est perdu')}</T>
          </V>
          <Ic n="verified" s={18} c="secondary" />
        </V>
        <Cta label={L('Back to log in', 'Retour à la connexion')} onPress={onDone} />
      </V>
    </V>
  );
}

// Step 2 of 2: new password, submitted with the SMS code from Otp.
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
    if (!passwordValid(pw)) return setError(L('Your password does not meet the requirements below.', 'Le mot de passe ne respecte pas les règles.'));
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

  return (
    <V c="flex-1">
      <Screen keyboard header={<AuthHeader title={L('Reset Password', 'Mot de passe')} />}>
        <V c="flex-row items-center gap-space-xs mt-space-md mb-space-sm">
          <V c="px-space-sm py-0.5 rounded-full bg-surface-container-high flex-row items-center gap-1.5">
            <V c="w-1.5 h-1.5 rounded-full bg-secondary" />
            <T c="font-label-sm text-label-sm text-primary uppercase tracking-wider">{L('Account recovery · Step 2 of 2', 'Récupération · Étape 2 sur 2')}</T>
          </V>
        </V>
        <V c="mb-space-lg">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">{L('Reset password', 'Nouveau mot de passe')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Choose a strong new password for your BioSpatial VR account.', 'Choisissez un nouveau mot de passe solide.')}</T>
        </V>
        <V c="gap-space-md mb-space-xl">
          <V c="gap-space-xs">
            <Label
              right={
                <V c="flex-row items-center gap-1">
                  <Ic n="lock" s={14} c="secondary" />
                  <T c="font-label-sm text-label-sm text-secondary">{L('Stored hashed', 'Stocké chiffré')}</T>
                </V>
              }
            >
              {L('New password', 'Nouveau mot de passe')}
            </Label>
            <Field secure value={pw} onChangeText={setPw} autoCapitalize="none" textContentType="newPassword" maxLength={128} />
            <StrengthMeter password={pw} L={L} compact />
          </V>
          <V c="gap-space-xs">
            <Label>{L('Confirm new password', 'Confirmer le mot de passe')}</Label>
            <Field secure value={confirm} onChangeText={setConfirm} autoCapitalize="none" textContentType="newPassword" maxLength={128} />
          </V>
          <V c="bg-surface-container-low rounded-xl p-space-md gap-space-sm shadow-sm">
            <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-0.5">{L('Password requirements', 'Exigences')}</T>
            <Rule ok={checks.length}>{L('At least 8 characters', 'Au moins 8 caractères')}</Rule>
            <Rule ok={checks.number}>{L('Contains at least 1 number', 'Au moins 1 chiffre')}</Rule>
            <Rule ok={checks.upper && checks.lower}>{L('Upper and lower case letters', 'Majuscules et minuscules')}</Rule>
            <Rule ok={!!confirm && pw === confirm}>{L('Both passwords match', 'Les deux correspondent')}</Rule>
          </V>
          <ErrorNote error={error} />
          <Cta label={L('Save new password', 'Enregistrer')} loading={busy} onPress={submit} />
          <P c="w-full py-space-sm items-center" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel and return to sign in', 'Annuler et revenir à la connexion')}</T>
          </P>
        </V>
      </Screen>
      {done && <Success L={L} onDone={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })} />}
    </V>
  );
}
