import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { useIsFocused } from '@react-navigation/native';
import { DIAGRAMS } from '../diagrams';
import { DiagramView } from '../diagrams/Diagram';
import { HEART_TOUR } from '../data/heartTour';
import { TOUR_CLIPS } from '../data/tourClips';
import { Ic, P, T, V } from './kit';
import { useL, useLang } from '../i18n';
import { calmMotion } from '../lib/device';

// The heart on the welcome page, with a button that explains it aloud: the
// voice walks the blood through the heart while each part lights up and the
// pointer moves onto it. No text is shown. The clips ship with the app, so it
// starts at once, needs no account and works offline; if a clip cannot play,
// the phone's own voice reads that step instead.
const SPEC = DIAGRAMS['heart-section'];
const WHOLE = [196, 168]; // where the pointer rests while the whole heart is meant
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export default function HeartTour({ maxHeight = 290 }) {
  const L = useL();
  const lang = useLang() === 'fr' ? 'fr' : 'en';
  const focused = useIsFocused();
  const [step, setStep] = useState(-1);
  const [pulse] = useState(() => new Animated.Value(0));
  const run = useRef(0);
  const players = useRef([]);
  const wake = useRef(null);
  const playing = step >= 0;

  const release = () => {
    for (const p of players.current) {
      try {
        p.pause();
        p.remove();
      } catch {
        // already released
      }
    }
    players.current = [];
    try {
      Speech.stop();
    } catch {
      // no speech engine
    }
  };
  const stop = () => {
    run.current += 1;
    wake.current?.();
    release();
    setStep(-1);
  };

  // Stop when the student leaves the page or the page goes away.
  useEffect(() => {
    if (!focused && run.current) stop();
  }, [focused]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => stop(), []); // eslint-disable-line react-hooks/exhaustive-deps

  // A soft ring round the play button invites a tap while it is idle.
  useEffect(() => {
    if (playing || calmMotion()) return undefined;
    const loop = Animated.loop(Animated.sequence([Animated.timing(pulse, { toValue: 1, duration: 1400, easing: Easing.out(Easing.quad), useNativeDriver: true }), Animated.delay(900)]));
    loop.start();
    return () => {
      loop.stop();
      pulse.setValue(0);
    };
  }, [playing, pulse]);

  const playClip = (player) =>
    new Promise((resolve) => {
      let done = false;
      let sub = null;
      const finish = () => {
        if (done) return;
        done = true;
        clearTimeout(guard);
        try {
          sub?.remove();
        } catch {
          // already removed
        }
        if (wake.current === finish) wake.current = null;
        resolve();
      };
      const guard = setTimeout(finish, 15000);
      wake.current = finish;
      sub = player.addListener('playbackStatusUpdate', (st) => st.didJustFinish && finish());
      player.play();
    });
  const say = (text) =>
    new Promise((resolve) => {
      wake.current = resolve;
      try {
        Speech.speak(text, { language: lang === 'fr' ? 'fr-FR' : 'en-GB', rate: 1, onDone: resolve, onStopped: resolve, onError: resolve });
      } catch {
        resolve();
      }
    });

  const start = async () => {
    if (playing) return stop();
    const mine = ++run.current;
    setStep(0);
    let audio = null;
    try {
      audio = require('expo-audio');
      await audio.setAudioModeAsync({ playsInSilentMode: true, interruptionMode: 'duckOthers', shouldPlayInBackground: false });
    } catch {
      // no audio mode on this platform: play anyway
    }
    try {
      players.current = audio ? TOUR_CLIPS[lang].map((src) => audio.createAudioPlayer(src)) : [];
    } catch {
      players.current = [];
    }
    for (let i = 0; i < HEART_TOUR.length; i += 1) {
      if (run.current !== mine) return undefined;
      setStep(i);
      const p = players.current[i];
      if (p) await playClip(p);
      else await say(HEART_TOUR[i][lang]);
      if (run.current !== mine) return undefined;
      await wait(140);
    }
    release();
    setStep(-1);
    return undefined;
  };

  if (!SPEC) return null;
  const now = playing ? HEART_TOUR[step] : null;
  const active = now?.label ? SPEC.labels.findIndex((l) => l[0] === now.label) : null;
  const point = now && !now.label && step === 0 ? WHOLE : null;

  return (
    <V c="rounded-3xl bg-surface-container-low p-space-md">
      <DiagramView spec={SPEC} maxHeight={maxHeight} active={active != null && active >= 0 ? active : null} point={point} />
      <V c="h-1 rounded-full bg-surface-container-high mt-space-sm overflow-hidden" style={{ opacity: playing ? 1 : 0 }}>
        <V c="h-1 rounded-full bg-tertiary-container" style={{ width: `${playing ? ((step + 1) / HEART_TOUR.length) * 100 : 0}%` }} />
      </V>
      <P
        c="self-center mt-space-sm flex-row items-center gap-1.5 pl-1.5 pr-3.5 h-9 rounded-full bg-primary shadow-md"
        onPress={start}
        accessibilityRole="button"
        accessibilityLabel={playing ? L('Stop the explanation', 'Arrêter l’explication') : L('Hear the heart explained', 'Écouter l’explication du cœur')}
      >
        <V c="w-6 h-6 items-center justify-center">
          {!playing && (
            <Animated.View
              pointerEvents="none"
              style={[
                styles.ring,
                {
                  opacity: pulse.interpolate({ inputRange: [0, 0.2, 1], outputRange: [0, 0.6, 0] }),
                  transform: [{ scale: pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.9] }) }],
                },
              ]}
            />
          )}
          <V c="w-6 h-6 rounded-full bg-tertiary-container items-center justify-center">
            <Ic n={playing ? 'stop' : 'play_arrow'} s={17} c="on-tertiary-container" fill />
          </V>
        </V>
        <T c="font-label-md text-label-md text-on-primary" style={{ fontWeight: '700' }}>
          {playing ? L('Stop', 'Arrêter') : L('Explain the heart', 'Expliquer le cœur')}
        </T>
      </P>
    </V>
  );
}

const styles = StyleSheet.create({
  ring: { position: 'absolute', width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: '#FFB409' },
});
