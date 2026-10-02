import { ActivityIndicator } from 'react-native';
import { C, Ic, P, T, V } from './kit';
import Waveform from './Waveform';

// The one way to start or stop spoken audio anywhere in the app: a solid teal
// button with a white speaker disc, so a student always knows where to tap to
// listen. size 'lg' fills the width and can carry a second line; 'sm' sits
// inline under a message or an answer.
export default function ListenButton({ label, sub, playing, busy, busyLabel, stopLabel, onPress, size = 'lg', c = '' }) {
  const small = size === 'sm';
  const text = busy ? busyLabel || label : playing ? stopLabel || label : label;
  return (
    <P
      c={`${small ? 'self-start h-11 pl-1.5 pr-4' : 'w-full min-h-[64px] px-3 py-2.5'} flex-row items-center gap-3 rounded-xl bg-secondary shadow-md ${c}`}
      onPress={onPress}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{ busy: !!busy }}
    >
      <V c={`${small ? 'w-8 h-8' : 'w-11 h-11'} rounded-full bg-surface-container-lowest items-center justify-center`}>
        {busy ? <ActivityIndicator size="small" color={C.secondary} /> : <Ic n={playing ? 'stop' : 'volume_up'} s={small ? 20 : 26} c="secondary" fill />}
      </V>
      <V c={small ? '' : 'flex-1 gap-0.5'}>
        <T c={`font-label-lg ${small ? 'text-label-md' : 'text-label-lg'} text-on-primary`} style={{ fontWeight: '700' }}>
          {text}
        </T>
        {!small && !!sub && !busy && (
          <T c="font-body-sm text-body-sm text-on-primary" style={{ opacity: 0.9 }}>
            {sub}
          </T>
        )}
      </V>
      {!small && playing && <Waveform playing bars={6} height={20} color="#ffffff" />}
    </P>
  );
}
