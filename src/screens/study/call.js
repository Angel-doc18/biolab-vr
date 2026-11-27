// A voice call with the AI, like a phone call: it listens, notices when the
// person has stopped talking (about a second of quiet after speech), sends
// what was said, the AI answers aloud, then it listens again by itself. While
// the AI speaks, a tap cuts in; the call ends with the red button.
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Easing } from 'react-native';
import { setAudioModeAsync, useAudioRecorder, useAudioRecorderState } from 'expo-audio';
import { Ic, P, T, V } from '../../ui/kit';
import { post } from '../../api/client';
import { VOICE_RECORDING, micAllowed, micDone, recordingData } from '../../lib/recordVoice';

const OPTIONS = { ...VOICE_RECORDING, isMeteringEnabled: true };
const QUIET_MS = 1200; // this much quiet after speech ends the turn
const IDLE_MS = 15000; // nothing said: start a fresh recording
const LONGEST_MS = 60000; // a turn is sent after a minute at most

// phase: 'off' | 'starting' | 'listening' | 'thinking' | 'speaking'
export function useCall({ onHeard, onError }) {
  const recorder = useAudioRecorder(OPTIONS);
  const st = useAudioRecorderState(recorder, 100);
  const [phase, setPhase] = useState('off');
  const ref = useRef('off');
  const vad = useRef({ heard: false, lastLoud: 0, start: 0, floor: -50 });
  const [level, setLevel] = useState(0);
  const set = (p) => {
    ref.current = p;
    setPhase(p);
  };

  const listen = async () => {
    if (ref.current === 'off') return;
    try {
      await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
      await recorder.prepareToRecordAsync();
      recorder.record();
      vad.current = { heard: false, lastLoud: Date.now(), start: Date.now(), floor: -50 };
      set('listening');
    } catch (e) {
      onError?.(e);
      end();
    }
  };

  // The end of a turn: send what was said (or, with send false, start again).
  const finish = async (send = true) => {
    if (ref.current !== 'listening') return;
    set('thinking');
    try {
      await recorder.stop();
      await micDone();
      if (!send) return listen();
      const data = await recordingData(recorder.uri);
      const r = await post('/v1/study/transcribe', data, { timeout: 60000 });
      const text = String(r.text || '').trim();
      if (text.length < 2) return listen();
      if (ref.current === 'off') return;
      await onHeard(text); // the chat sends it and speaks the answer, then calls listen()
    } catch (e) {
      if (ref.current === 'off') return;
      if (!['too_short', 'nothing_heard'].includes(e.code)) onError?.(e);
      listen();
    }
  };

  // Noticing speech and the quiet after it, from the microphone's level.
  useEffect(() => {
    if (phase !== 'listening' || !st.isRecording) return;
    const db = typeof st.metering === 'number' ? st.metering : -160;
    const v = vad.current;
    const now = Date.now();
    // the room's quiet level: the lowest heard, rising slowly with noise
    v.floor = db < v.floor ? db : Math.min(v.floor + 0.15, -20);
    const loudAt = Math.min(-28, Math.max(-52, v.floor + 14));
    if (db > loudAt) {
      v.heard = true;
      v.lastLoud = now;
    }
    setLevel(Math.max(0, Math.min(1, (db - v.floor) / 30)));
    if (v.heard && now - v.lastLoud > QUIET_MS) finish(true);
    else if (!v.heard && now - v.start > IDLE_MS) finish(false);
    else if (now - v.start > LONGEST_MS) finish(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st.metering, st.durationMillis, phase]);

  const start = async () => {
    try {
      await micAllowed();
      set('starting');
      await listen();
    } catch (e) {
      onError?.(e);
      set('off');
    }
  };
  const end = async () => {
    set('off');
    try {
      if (recorder.isRecording) await recorder.stop();
    } catch {
      // already stopped
    }
    micDone();
  };
  return { phase, level, start, end, listen, finish, speaking: () => {
      // the AI speaks: the microphone stops, so it never hears itself
      set('speaking');
      if (recorder.isRecording) Promise.resolve().then(() => recorder.stop()).catch(() => {});
      micDone();
    }, thinking: () => set('thinking'), active: () => ref.current !== 'off', phaseNow: () => ref.current };
}

// The bar shown instead of the message box during a call.
export function CallBar({ phase, level, onTap, onEnd, L }) {
  const [ring] = useState(() => new Animated.Value(0));
  useEffect(() => {
    Animated.timing(ring, { toValue: phase === 'listening' ? level : 0, duration: 110, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
  }, [level, phase, ring]);
  const [pulse] = useState(() => new Animated.Value(0));
  useEffect(() => {
    if (phase !== 'speaking') return undefined;
    const loop = Animated.loop(Animated.sequence([Animated.timing(pulse, { toValue: 1, duration: 650, useNativeDriver: true }), Animated.timing(pulse, { toValue: 0, duration: 650, useNativeDriver: true })]));
    loop.start();
    return () => loop.stop();
  }, [phase, pulse]);
  const words = {
    starting: L('Starting the call...', 'Démarrage de l’appel...'),
    listening: L('Listening... speak, I am here', 'Je vous écoute... parlez'),
    thinking: L('Thinking...', 'Réflexion...'),
    speaking: L('Speaking. Tap to cut in', 'Je parle. Touchez pour m’interrompre'),
  }[phase];
  return (
    <V c="px-space-sm pt-1.5" style={{ paddingBottom: 8, backgroundColor: '#ffffff' }}>
      <V c="rounded-3xl flex-row items-center gap-space-sm px-space-sm py-2" style={{ backgroundColor: '#02287B' }}>
        <P c="flex-1 flex-row items-center gap-space-sm" onPress={onTap} disabled={phase === 'thinking' || phase === 'starting'} accessibilityRole="button" accessibilityLabel={phase === 'speaking' ? L('Cut in', 'Interrompre') : L('Send what I said', 'Envoyer ce que j’ai dit')}>
          <V c="w-12 h-12 items-center justify-center">
            <Animated.View
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: '#FBAC02',
                opacity: phase === 'speaking' ? pulse.interpolate({ inputRange: [0, 1], outputRange: [0.25, 0.55] }) : ring.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.6] }),
                transform: [{ scale: phase === 'speaking' ? pulse.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1.15] }) : ring.interpolate({ inputRange: [0, 1], outputRange: [0.75, 1.25] }) }],
              }}
            />
            {phase === 'thinking' || phase === 'starting' ? <ActivityIndicator color="#ffffff" /> : <Ic n={phase === 'speaking' ? 'graphic_eq' : 'mic'} s={24} c="#ffffff" fill />}
          </V>
          <V c="flex-1">
            <T c="font-label-lg text-label-lg" style={{ color: '#ffffff', fontWeight: '700' }} numberOfLines={1}>
              {L('On a call with Klass8', 'En appel avec Klass8')}
            </T>
            <T c="font-body-sm text-body-sm" style={{ color: '#c9d5f0' }} numberOfLines={1}>
              {words}
            </T>
          </V>
        </P>
        <P c="w-12 h-12 rounded-full items-center justify-center" style={{ backgroundColor: '#e5484d' }} onPress={onEnd} accessibilityRole="button" accessibilityLabel={L('End the call', 'Raccrocher')}>
          <Ic n="call_end" s={24} c="#ffffff" fill />
        </P>
      </V>
    </V>
  );
}
