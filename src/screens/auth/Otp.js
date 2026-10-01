import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Pulse, Screen } from '../../ui/chrome';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

const KEYS = [
  ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
  ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
  ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'],
  [null], ['0', '+'], ['back'],
];

const mask = (p = '') => {
  const d = p.replace(/\D/g, '').replace(/^237/, '');
  return `+237 ${d.slice(0, 1)}•• •• •• ${d.slice(-2)}`;
};

// purpose 'verify': confirms the signed-in user's phone.
// purpose 'reset': collects the code, which Reset submits with the new password.
export default function Otp({ navigation, route }) {
  const insets = useSafeAreaInsets();
  const { refreshMe } = useApp();
  const L = useL();
  const { purpose = 'verify', phone, next = 'Role' } = route.params || {};
  const [digits, setDigits] = useState('');
  const [left, setLeft] = useState(60);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(purpose === 'reset');

  const send = async () => {
    setError(null);
    try {
      if (purpose === 'verify') await post('/v1/auth/otp/send');
      else await post('/v1/auth/password/forgot', { phone }, { auth: false });
      setSent(true);
      setLeft(60);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    if (purpose === 'verify') send();
  }, []);

  useEffect(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);

  const press = (k) => {
    setError(null);
    if (k === 'back') setDigits((d) => d.slice(0, -1));
    else if (k) setDigits((d) => (d.length < 6 ? d + k : d));
  };

  const submit = async () => {
    if (digits.length !== 6) {
      setError(L('Enter the 6 digit code from the SMS.', 'Entrez le code à 6 chiffres reçu par SMS.'));
      return;
    }
    if (purpose === 'reset') {
      navigation.navigate('Reset', { phone, code: digits });
      return;
    }
    setBusy(true);
    try {
      await post('/v1/auth/otp/verify', { code: digits });
      await refreshMe().catch(() => {});
      navigation.reset({ index: 0, routes: [{ name: next }] });
    } catch (e) {
      setError(e);
      setDigits('');
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen
      header={<AuthHeader title={L('Verify Identity', 'Vérification')} back={purpose === 'reset'} />}
      footer={
        <V c="pt-space-md px-margin bg-surface-container-low rounded-t-xl shadow-lg items-center" style={{ paddingBottom: 8 }}>
          <V c="w-10 h-1 bg-outline-variant/60 rounded-full mb-space-sm" />
          <V c="flex-row flex-wrap w-full" style={{ maxWidth: 340, gap: 8 }}>
            {KEYS.map(([k, sub], i) => (
              <V key={i} style={{ width: '31.5%' }}>
                {k === null ? (
                  <V c="h-12" />
                ) : k === 'back' ? (
                  <P c="h-12 items-center justify-center rounded-xl" onPress={() => press('back')} accessibilityLabel="Delete">
                    <Ic n="backspace" s={24} c="on-surface" />
                  </P>
                ) : (
                  <P c="h-12 bg-surface-container-lowest rounded-xl items-center justify-center shadow-sm" onPress={() => press(k)}>
                    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700', lineHeight: 20 }}>
                      {k}
                    </T>
                    <T c="font-label-sm text-on-surface-variant uppercase tracking-widest" style={{ fontSize: 8, lineHeight: 9 }}>
                      {sub || ' '}
                    </T>
                  </P>
                )}
              </V>
            ))}
          </V>
        </V>
      }
    >
      <V c="pt-space-md items-center">
        <V c="mb-space-md items-center justify-center">
          <V c="w-20 h-20 rounded-full bg-surface-container items-center justify-center shadow-sm">
            <Ic n="sms" s={38} c="primary" />
          </V>
          <V c="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-secondary items-center justify-center shadow-md">
            <Ic n="check" s={16} c="on-secondary" fill />
          </V>
          <V c="absolute -top-1 -left-2 px-2 py-0.5 rounded-full bg-secondary-container">
            <T c="font-label-sm text-label-sm text-on-secondary-container">{L('SECURE', 'SÉCURISÉ')}</T>
          </V>
        </V>
        <T c="font-headline-lg text-headline-lg text-on-surface text-center tracking-tight">{L('Verify your phone', 'Vérifiez votre numéro')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant text-center mt-space-xs" style={{ maxWidth: 280 }}>
          {sent ? L('We sent a 6 digit code by SMS to:', 'Nous avons envoyé un code à 6 chiffres par SMS au :') : L('Sending a 6 digit code by SMS to:', 'Envoi d’un code à 6 chiffres par SMS au :')}
        </T>
        <V c="mt-space-md flex-row items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-2.5 rounded-full w-full shadow-sm" style={{ maxWidth: 340 }}>
          <V c="flex-row items-center gap-space-xs">
            <Ic n="verified_user" s={18} c="primary" />
            <T c="font-label-lg text-label-lg text-on-surface tracking-wide">{mask(phone)}</T>
          </V>
          {purpose === 'reset' && (
            <P onPress={() => navigation.goBack()}>
              <T c="font-label-md text-label-md text-primary">{L('Change number', 'Changer')}</T>
            </P>
          )}
        </V>
        <V c="mt-space-lg w-full" style={{ maxWidth: 340 }}>
          <V c="flex-row justify-between items-center gap-1.5">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const filled = i < digits.length;
              const active = i === digits.length;
              return (
                <V
                  key={i}
                  c={`w-12 h-14 rounded-xl items-center justify-center ${filled || active ? 'bg-surface-container-lowest' : 'bg-surface-container-low opacity-80'} ${active ? 'shadow-md' : 'shadow-sm'}`}
                >
                  {active && <V c="absolute inset-0 rounded-xl bg-primary/10" />}
                  {filled ? (
                    <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                      {digits[i]}
                    </T>
                  ) : active ? (
                    <Pulse c="w-0.5 h-6 bg-primary rounded-full" />
                  ) : (
                    <V c="w-2 h-2 rounded-full bg-outline-variant" />
                  )}
                </V>
              );
            })}
          </V>
          <V c="flex-row items-center justify-between mt-space-sm px-1">
            <V c="flex-row items-center gap-1">
              <Ic n="lock" s={14} c="secondary" />
              <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Code expires in 10 minutes', 'Code valable 10 minutes')}</T>
            </V>
            <P onPress={() => setDigits('')}>
              <T c="font-label-sm text-label-sm text-primary">{L('Clear all', 'Effacer')}</T>
            </P>
          </V>
        </V>
        <V c="mt-space-md w-full bg-surface-container-low rounded-xl p-space-sm shadow-sm gap-2" style={{ maxWidth: 340 }}>
          <V c="flex-row items-center justify-between">
            <V c="flex-row items-center gap-1.5">
              <Ic n="schedule" s={18} />
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Resend code in', 'Renvoyer dans')}</T>
            </V>
            <T c={`font-label-md text-label-md ${left > 0 ? 'text-on-surface' : 'text-secondary'}`} style={{ fontWeight: '700', fontVariant: ['tabular-nums'] }}>
              00:{String(Math.max(0, left)).padStart(2, '0')}
            </T>
          </V>
          <P c="flex-row items-center gap-1 pt-1" onPress={send} disabled={left > 0}>
            <Ic n="chat" s={16} c="primary" />
            <T c="font-label-md text-label-md text-primary">{L('Resend via SMS', 'Renvoyer par SMS')}</T>
          </P>
        </V>
        <ErrorNote error={error} c="mt-space-sm w-full" />
        <V c="w-full mt-space-md" style={{ maxWidth: 340 }}>
          <Cta label={L('Verify & continue', 'Vérifier et continuer')} loading={busy} onPress={submit} />
        </V>
        {purpose === 'verify' && (
          <P c="mt-space-sm py-2" onPress={() => navigation.reset({ index: 0, routes: [{ name: next }] })}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Verify later in Settings', 'Vérifier plus tard')}</T>
          </P>
        )}
      </V>
    </Screen>
  );
}
