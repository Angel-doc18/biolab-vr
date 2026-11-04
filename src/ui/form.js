import { useState } from 'react';
import { Ic, Input, P, T, V } from './kit';

export function Label({ children, right }) {
  return (
    <V c="flex-row items-center justify-between">
      <T c="font-label-md text-label-md text-on-surface">{children}</T>
      {right}
    </V>
  );
}

export function Field({ label, right, icon, leftIcon, hint, error, secure, bg = 'bg-surface-container-low', c = '', inputC = '', ...input }) {
  const [show, setShow] = useState(false);
  return (
    <V c={`gap-1.5 ${c}`}>
      {!!label && <Label right={right}>{label}</Label>}
      <V c={`flex-row items-center h-[52px] rounded-xl ${bg} shadow-sm ${error ? 'border border-error' : ''}`}>
        {leftIcon && (
          <V c="pl-3.5">
            <Ic n={leftIcon} s={20} c="outline" />
          </V>
        )}
        <Input
          c={`flex-1 h-full px-4 text-body-md font-body-md text-on-surface ${leftIcon ? 'pl-2.5' : ''} ${inputC}`}
          secureTextEntry={secure && !show}
          autoCorrect={false}
          {...input}
        />
        {secure ? (
          <P c="w-11 h-11 items-center justify-center mr-1 rounded-lg" onPress={() => setShow((s) => !s)} accessibilityLabel="Show or hide password">
            <Ic n={show ? 'visibility_off' : 'visibility'} s={20} c="outline" />
          </P>
        ) : icon ? (
          <V c="pr-4">
            <Ic n={icon} s={20} c="outline" />
          </V>
        ) : null}
      </V>
      {!!hint && !error && (
        <T c="font-body-sm text-body-sm text-on-surface-variant pt-0.5">{hint}</T>
      )}
      {!!error && <T c="font-body-sm text-body-sm text-error">{error}</T>}
    </V>
  );
}

// +237 prefix and national number, formatted as 6XX XX XX XX.
export function PhoneField({ label, right, value, onChangeText, hint, error, bg = 'bg-surface-container-low', placeholder = '6XX XX XX XX' }) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 9);
  const shown = digits.replace(/^(\d{3})(\d{0,2})(\d{0,2})(\d{0,2}).*/, (m, a, b, c2, d) => [a, b, c2, d].filter(Boolean).join(' '));
  return (
    <V c="gap-1.5">
      {!!label && <Label right={right}>{label}</Label>}
      <V c={`flex-row items-center h-[52px] rounded-xl ${bg} shadow-sm overflow-hidden ${error ? 'border border-error' : ''}`}>
        <V c="h-full px-3.5 flex-row items-center bg-surface-container">
          <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
            +237
          </T>
        </V>
        <Input
          c="flex-1 h-full px-3.5 text-body-md text-on-surface"
          keyboardType="phone-pad"
          value={digits.length > 3 ? shown : digits}
          onChangeText={(t) => onChangeText(t.replace(/\D/g, '').replace(/^237/, '').slice(0, 9))}
          placeholder={placeholder}
          textContentType="telephoneNumber"
          autoComplete="tel"
          maxLength={12}
        />
      </V>
      {!!hint && !error && (
        <T c="font-body-sm text-body-sm text-on-surface-variant pt-0.5">{hint}</T>
      )}
      {!!error && <T c="font-body-sm text-body-sm text-error">{error}</T>}
    </V>
  );
}

export const validPhone = (d) => /^6\d{8}$/.test(String(d || ''));

// Mirrors the server rule: any password that is not empty.
export const passwordValid = (pw) => !!String(pw || '').trim() && String(pw).length <= 128;

export function Check({ on, onPress, children }) {
  return (
    <P c="flex-row items-start gap-3 pt-1" onPress={onPress} scale={1} accessibilityRole="checkbox" accessibilityState={{ checked: on }}>
      <V c={`w-5 h-5 mt-0.5 rounded-lg items-center justify-center shadow-sm ${on ? 'bg-primary' : 'bg-surface-container'}`}>
        {on && <Ic n="check" s={16} c="on-primary" />}
      </V>
      <V c="flex-1">{children}</V>
    </P>
  );
}

export function Toggle({ on, onPress, accessibilityLabel }) {
  return (
    <P
      c={`w-11 h-6 rounded-full justify-center px-0.5 ${on ? 'bg-secondary' : 'bg-surface-container-highest'}`}
      onPress={onPress}
      scale={1}
      accessibilityRole="switch"
      accessibilityState={{ checked: on }}
      accessibilityLabel={accessibilityLabel}
    >
      <V c="w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm" style={{ alignSelf: on ? 'flex-end' : 'flex-start' }} />
    </P>
  );
}
