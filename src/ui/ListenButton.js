import { ActivityIndicator } from 'react-native';
import { C, Ic, P, T, V } from './kit';
import Waveform from './Waveform';

// The one way to start or stop spoken audio anywhere in the app: a compact teal
// pill with a white speaker disc and a short label, so a student always knows
// where to tap to listen without the button taking over the screen. 'lg' is the
// main button of a screen (a little taller); 'sm' sits under a message or an
// answer. `sub` is kept for callers but no longer shown: the label says it all.
export default function ListenButton({ label, playing, busy, busyLabel, stopLabel, onPress, size = 'lg', c = '' }) {
  const small = size === 'sm';
  const text = busy ? busyLabel || label : playing ? stopLabel || label : label;
  return (
    <P
      c={`self-start ${small ? 'h-10 pl-1 pr-3.5' : 'h-12 pl-1.5 pr-5'} flex-row items-center gap-2.5 rounded-full bg-secondary ${c}`}
      onPress={onPress}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={text}
      accessibilityState={{ busy: !!busy }}
    >
      <V c={`${small ? 'w-8 h-8' : 'w-9 h-9'} rounded-full bg-surface-container-lowest items-center justify-center`}>
        {busy ? <ActivityIndicator size="small" color={C.secondary} /> : <Ic n={playing ? 'stop' : 'volume_up'} s={small ? 18 : 20} c="secondary" fill />}
      </V>
      <T c={`font-label-lg ${small ? 'text-label-md' : 'text-label-lg'} text-on-primary`} style={{ fontWeight: '700' }} numberOfLines={1}>
        {text}
      </T>
      {playing && <Waveform playing bars={4} height={14} color="#ffffff" />}
    </P>
  );
}
