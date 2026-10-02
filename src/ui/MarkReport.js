// Point-by-point breakdown of a marked answer (by the app or by the student).
import { useEffect, useState } from 'react';
import * as Speech from 'expo-speech';
import { Ic, P, T, V } from './kit';

const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

export function CriterionRow({ c, L }) {
  const full = c.awarded >= c.max;
  const none = c.awarded <= 0;
  return (
    <V c="flex-row items-start gap-2 py-1.5">
      <Ic n={full ? 'check' : none ? 'close' : 'remove'} s={18} c={full ? 'secondary' : none ? 'error' : 'tertiary-container'} style={{ marginTop: 2 }} />
      <V c="flex-1 gap-0.5">
        <T c="font-body-sm text-body-sm text-on-surface">{c.point}</T>
        {!full && !!c.comment && <T c="font-body-sm text-body-sm text-on-surface-variant">{c.comment}</T>}
      </V>
      <T c="font-label-md text-label-md text-on-surface-variant" style={{ fontVariant: ['tabular-nums'] }}>
        {fmt(c.awarded)}/{fmt(c.max)}
      </T>
    </V>
  );
}

export function ScoreCard({ awarded, max, L }) {
  const pct = max ? Math.round((awarded / max) * 100) : 0;
  return (
    <V c="bg-surface-container-low rounded-xl p-space-md gap-1">
      <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your mark', 'Votre note')}</T>
      <T c="font-headline-lg text-headline-lg text-on-surface" style={{ fontVariant: ['tabular-nums'] }}>
        {fmt(awarded)} / {fmt(max)}
        <T c="font-headline-sm text-headline-sm text-on-surface-variant"> ({pct}%)</T>
      </T>
    </V>
  );
}

// Reads the feedback aloud with the phone's own voice.
export function VoiceFeedback({ text, L, lang }) {
  const [on, setOn] = useState(false);
  useEffect(() => () => Speech.stop(), []);
  const toggle = () => {
    if (on) {
      Speech.stop();
      setOn(false);
      return;
    }
    setOn(true);
    Speech.speak(text, { language: lang === 'fr' ? 'fr-FR' : 'en-GB', rate: 0.95, onDone: () => setOn(false), onStopped: () => setOn(false), onError: () => setOn(false) });
  };
  return (
    <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
      <V c="flex-row items-center justify-between gap-space-sm">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
          {L('Feedback', 'Commentaire')}
        </T>
        <P c="flex-row items-center gap-1" onPress={toggle} accessibilityLabel={on ? 'Stop reading' : 'Read aloud'} hitSlop={8}>
          <Ic n={on ? 'stop' : 'volume_up'} s={18} c="primary-container" />
          <T c="font-label-md text-label-md text-primary-container">{on ? L('Stop', 'Arrêter') : L('Listen', 'Écouter')}</T>
        </P>
      </V>
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 21 }}>
        {text}
      </T>
    </V>
  );
}

export function ModelAnswer({ text, L }) {
  if (!text) return null;
  return (
    <V c="bg-surface-container-low rounded-lg p-space-sm gap-1">
      <T c="font-label-md text-label-md text-on-surface">{L('A full-mark answer', 'Une réponse à la note maximale')}</T>
      <T c="font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 20 }}>
        {text}
      </T>
    </V>
  );
}
