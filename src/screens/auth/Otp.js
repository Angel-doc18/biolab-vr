import { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { P, T, V } from '../../ui/kit';
import { AuthHeader, Cta, ErrorNote, Screen } from '../../ui/chrome';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

const mask = (p = '') => {
  const d = p.replace(/\D/g, '').replace(/^237/, '');
  return `+237 ${d.slice(0, 1)}•• •• •• ${d.slice(-2)}`;
};

// purpose 'verify': confirms the signed-in user's phone.
// purpose 'reset': collects the code, which Reset submits with the new password.
export default function Otp({ navigation, route }) {
  const { refreshMe } = useApp();
  const L = useL();
  const { purpose = 'verify', phone, next = 'Role', channel: firstChannel } = route.params || {};
  const input = useRef(null);
  const [digits, setDigits] = useState('');
  const [left, setLeft] = useState(60);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [channel, setChannel] = useState(purpose === 'reset' ? firstChannel || null : null);
  const [sent, setSent] = useState(purpose === 'reset');

  const send = async () => {
    setError(null);
    try {
      const r = purpose === 'verify' ? await post('/v1/auth/otp/send') : await post('/v1/auth/password/forgot', { phone }, { auth: false });
      setChannel(r?.channel || null);
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

  const submit = async (code = digits) => {
    if (code.length !== 6) {
      setError(L('Enter the 6 digit code.', 'Entrez le code à 6 chiffres.'));
      return;
    }
    if (purpose === 'reset') {
      navigation.navigate('Reset', { phone, code });
      return;
    }
    setBusy(true);
    try {
      await post('/v1/auth/otp/verify', { code });
      await refreshMe().catch(() => {});
      navigation.reset({ index: 0, routes: [{ name: next }] });
    } catch (e) {
      setError(e);
      setDigits('');
    } finally {
      setBusy(false);
    }
  };

  const onChange = (t) => {
    const d = t.replace(/\D/g, '').slice(0, 6);
    setError(null);
    setDigits(d);
    if (d.length === 6) submit(d);
  };

  const via = channel === 'whatsapp' ? L('on WhatsApp', 'sur WhatsApp') : channel === 'sms' ? L('by SMS', 'par SMS') : '';

  return (
    <Screen keyboard header={<AuthHeader back={purpose === 'reset'} />}>
      <V c="pt-space-lg gap-space-lg">
        <V c="gap-space-xs">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{purpose === 'reset' ? L('Enter your code', 'Entrez votre code') : L('Confirm your number', 'Confirmez votre numéro')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant">
            {sent
              ? `${L('We sent a 6 digit code', 'Nous avons envoyé un code à 6 chiffres')}${via ? ` ${via}` : ''} ${L('to', 'au')} ${mask(phone)}.`
              : `${L('Sending a code to', 'Envoi d’un code au')} ${mask(phone)}...`}
          </T>
        </V>

        <P c="flex-row justify-between gap-1.5" scale={1} onPress={() => input.current?.focus()} accessibilityLabel={L('Code', 'Code')}>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const active = i === digits.length;
            return (
              <V key={i} c={`flex-1 h-14 rounded-xl items-center justify-center bg-surface-container-lowest ${active ? 'border-2 border-primary' : 'border border-outline-variant'}`}>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {digits[i] || ''}
                </T>
              </V>
            );
          })}
        </P>
        <TextInput
          ref={input}
          value={digits}
          onChangeText={onChange}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          maxLength={6}
          autoFocus
          caretHidden
          style={{ position: 'absolute', opacity: 0, height: 1, width: 1 }}
        />

        <V c="flex-row items-center justify-between">
          <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Valid for 10 minutes.', 'Valable 10 minutes.')}</T>
          {left > 0 ? (
            <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontVariant: ['tabular-nums'] }}>
              {L('Resend in', 'Renvoyer dans')} 0:{String(left).padStart(2, '0')}
            </T>
          ) : (
            <P onPress={send} hitSlop={8}>
              <T c="font-label-md text-label-md text-primary" style={{ fontWeight: '700' }}>
                {L('Send a new code', 'Nouveau code')}
              </T>
            </P>
          )}
        </V>

        <ErrorNote error={error} />
        <Cta icon={null} label={purpose === 'reset' ? L('Continue', 'Continuer') : L('Confirm', 'Confirmer')} loading={busy} onPress={() => submit()} />

        {purpose === 'reset' && (
          <P c="items-center py-2" onPress={() => navigation.goBack()} hitSlop={8}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Use a different number', 'Utiliser un autre numéro')}</T>
          </P>
        )}
        {purpose === 'verify' && (
          <P c="items-center py-2" onPress={() => navigation.reset({ index: 0, routes: [{ name: next }] })} hitSlop={8}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Do this later in Settings', 'Plus tard dans les réglages')}</T>
          </P>
        )}
      </V>
    </Screen>
  );
}
