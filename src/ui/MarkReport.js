// Examiner-style breakdown of an AI (or self) marked answer.
import { useEffect, useState } from 'react';
import * as Speech from 'expo-speech';
import { C, Ic, P, Ring, T, V } from './kit';
import Waveform from './Waveform';

export function CriterionRow({ c, n, L }) {
  const full = c.awarded >= c.max;
  const none = c.awarded <= 0;
  const icon = full ? 'check_circle' : none ? 'cancel' : 'change_circle';
  const col = full ? 'secondary' : none ? 'error' : 'tertiary-container';
  return (
    <V c="bg-surface-container-low rounded-xl p-space-sm gap-space-xs">
      <V c="flex-row items-start justify-between gap-space-sm">
        <V c="flex-row items-start gap-2 flex-1">
          <Ic n={icon} s={20} c={col} fill={full} style={{ marginTop: 2 }} />
          <V c="flex-1">
            <T c="font-label-md text-label-md text-on-surface">
              {L('Point', 'Point')} {n}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{c.point}</T>
          </V>
        </V>
        <V c="bg-surface-container-lowest px-2 py-0.5 rounded-lg">
          <T c={`font-label-md text-label-md text-${col}`}>
            {c.awarded.toFixed(1)} / {c.max.toFixed(1)}
          </T>
        </V>
      </V>
      {!full && !!c.comment && (
        <V c="bg-tertiary-fixed/40 rounded-lg p-2.5 flex-row items-start gap-2">
          <Ic n="info" s={16} c="tertiary-container" style={{ marginTop: 1 }} />
          <T c="font-body-sm text-body-sm text-on-tertiary-fixed-variant flex-1">
            <T c="font-body-sm text-body-sm text-on-tertiary-fixed-variant" style={{ fontWeight: '700' }}>
              {L('Deduction note', 'Note')}:
            </T>{' '}
            {c.comment}
          </T>
        </V>
      )}
    </V>
  );
}

export function ScoreCard({ awarded, max, L }) {
  const pct = max ? Math.round((awarded / max) * 100) : 0;
  return (
    <V c="flex-row items-center justify-between bg-surface-container-low rounded-xl p-space-md">
      <V>
        <T c="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{L('Your mark', 'Votre note')}</T>
        <V c="flex-row items-end gap-1 mt-0.5">
          <T c="font-display-lg text-display-lg text-primary" style={{ lineHeight: 36 }}>
            {awarded.toFixed(1)}
          </T>
          <T c="font-headline-sm text-headline-sm text-on-surface-variant">/ {max.toFixed(1)}</T>
        </V>
        <V c="flex-row items-center gap-1 mt-1">
          <Ic n="grade" s={16} c="secondary" />
          <T c="font-label-md text-label-md text-secondary">
            {pct}% {L('of the marks', 'des points')}
          </T>
        </V>
      </V>
      <Ring size={64} stroke={6} pct={pct} track={C['surface-container-high']} tint={C.secondary}>
        <T c="font-headline-sm text-headline-sm text-on-surface">{pct}%</T>
      </Ring>
    </V>
  );
}

export function VoiceFeedback({ text, L, lang }) {
  const [on, setOn] = useState(false);
  useEffect(() => () => Speech.stop(), []);
  const secs = Math.max(5, Math.round(text.split(/\s+/).length / 2.4));
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
      <V c="flex-row items-center justify-between">
        <V c="flex-row items-center gap-2">
          <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center">
            <T c="font-headline-sm text-headline-sm text-on-primary-container">N</T>
          </V>
          <V>
            <T c="font-label-md text-label-md text-on-surface">{L('Dr. Nkwenti’s feedback', 'Commentaire du Dr Nkwenti')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your AI Biology examiner', 'Votre examinateur IA')}</T>
          </V>
        </V>
        <V c="bg-surface-container-high px-2 py-0.5 rounded-full">
          <T c="font-label-sm text-label-sm text-secondary">{secs} sec</T>
        </V>
      </V>
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 21 }}>
        {text}
      </T>
      <V c="bg-surface-container-low rounded-xl p-space-sm flex-row items-center gap-space-sm">
        <P c="w-10 h-10 rounded-full bg-primary-container items-center justify-center shadow-sm" onPress={toggle} accessibilityLabel={on ? 'Stop' : 'Listen'} scale={0.95}>
          <Ic n={on ? 'pause' : 'play_arrow'} s={22} c="on-primary" />
        </P>
        <V c="flex-1 items-center">
          <Waveform playing={on} bars={16} height={22} color={C['primary-container']} />
        </V>
        <V c="w-9 h-9 rounded-lg bg-surface-container items-center justify-center">
          <Ic n="volume_up" s={18} />
        </V>
      </V>
    </V>
  );
}

export function ModelAnswer({ text, L }) {
  if (!text) return null;
  return (
    <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
      <V c="flex-row items-center gap-2">
        <Ic n="menu_book" s={20} c="secondary" />
        <T c="font-headline-sm text-headline-sm text-on-surface">{L('Model answer', 'Réponse modèle')}</T>
      </V>
      <V c="bg-surface-container rounded-xl p-space-md">
        <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
          {text}
        </T>
      </V>
    </V>
  );
}
