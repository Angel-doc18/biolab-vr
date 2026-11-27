// A voice call with the AI, like a phone call: it listens, notices when the
// person has finished (a real pause after speech, not a breath), writes down
// what was said, the AI answers aloud, then it listens again by itself.
//
// In a browser the microphone is opened once for the whole call, with echo
// and noise cancelling, so the start of a sentence is never cut off; it
// records in a format the browser can make (Safari cannot make WebM). While
// the AI speaks it keeps listening for the person's voice: speaking cuts in,
// as on a phone call. In the app each turn is recorded with expo-audio. A tap
// on the call bar also cuts in (or sends at once); the red button ends it.
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Easing, Platform } from 'react-native';
import { setAudioModeAsync, useAudioRecorder, useAudioRecorderState } from 'expo-audio';
import { Ic, P, T, V } from '../../ui/kit';
import { post } from '../../api/client';
import { VOICE_RECORDING, micAllowed, micDone, recordingData } from '../../lib/recordVoice';

const WEB = Platform.OS === 'web';
const QUIET_MS = 1500; // this much quiet after speech ends the turn
const MIN_SPEECH_MS = 350; // shorter sounds (a cough, a click) are not speech
const IDLE_MS = 20000; // nothing said: a fresh recording
const LONGEST_MS = 60000; // a turn is sent after a minute at most
const CUT_IN_MS = 300; // speaking this long over the AI cuts in (browser)

const toBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).replace(/^data:[^,]+,/, ''));
    r.onerror = () => reject(new Error('The recording could not be read.'));
    r.readAsDataURL(blob);
  });

// The browser's microphone for the whole call.
class WebMic {
  async open() {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error('This browser cannot use the microphone. Try Chrome, or type your question.');
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    } catch {
      throw new Error('Allow the microphone to talk with the AI (in the browser’s address bar), or type your question.');
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    if (this.ctx.state === 'suspended') await this.ctx.resume().catch(() => {});
    this.an = this.ctx.createAnalyser();
    this.an.fftSize = 1024;
    this.ctx.createMediaStreamSource(this.stream).connect(this.an);
    this.buf = new Float32Array(this.an.fftSize);
    const can = (t) => typeof window.MediaRecorder !== 'undefined' && window.MediaRecorder.isTypeSupported?.(t);
    this.mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'].find(can) || '';
  }
  // the level now, in decibels (silence is about -90, speech -35 to -15)
  db() {
    this.an.getFloatTimeDomainData(this.buf);
    let sum = 0;
    for (let i = 0; i < this.buf.length; i++) sum += this.buf[i] * this.buf[i];
    const rms = Math.sqrt(sum / this.buf.length);
    return rms > 0 ? 20 * Math.log10(rms) : -160;
  }
  start() {
    this.chunks = [];
    this.rec = new window.MediaRecorder(this.stream, this.mime ? { mimeType: this.mime, audioBitsPerSecond: 48000 } : undefined);
    this.rec.ondataavailable = (e) => e.data?.size && this.chunks.push(e.data);
    this.rec.start(250);
  }
  recording() {
    return this.rec?.state === 'recording';
  }
  stop() {
    return new Promise((resolve) => {
      const r = this.rec;
      if (!r || r.state === 'inactive') return resolve(null);
      r.onstop = () => resolve(new Blob(this.chunks, { type: (r.mimeType || this.mime || 'audio/webm').split(';')[0] }));
      r.stop();
    });
  }
  close() {
    try {
      if (this.rec && this.rec.state !== 'inactive') this.rec.stop();
    } catch {
      // already stopped
    }
    this.stream?.getTracks().forEach((t) => t.stop());
    this.ctx?.close().catch(() => {});
  }
}

// phase: 'off' | 'starting' | 'listening' | 'hearing' | 'thinking' | 'speaking'
export function useCall({ onHeard, onCutIn, onError }) {
  const recorder = useAudioRecorder({ ...VOICE_RECORDING, isMeteringEnabled: true });
  const st = useAudioRecorderState(recorder, 100);
  const [phase, setPhase] = useState('off');
  const ref = useRef('off');
  const mic = useRef(null); // the browser's microphone
  const loop = useRef(null);
  const vad = useRef({});
  const [level, setLevel] = useState(0);
  const set = (p) => {
    ref.current = p;
    setPhase(p);
  };
  const fresh = () => {
    vad.current = { start: Date.now(), speech: 0, lastLoud: 0, last: Date.now(), floor: vad.current.floor ?? -60, loudSince: 0 };
  };

  // One reading of the level: is the person speaking, have they finished?
  const hear = (db) => {
    const v = vad.current;
    const now = Date.now();
    const dt = Math.min(250, now - (v.last || now));
    v.last = now;
    // the room's quiet level: the lowest heard, rising slowly with the noise
    v.floor = db < v.floor ? db : Math.min(v.floor + 0.04, -25);
    const loud = db > Math.min(-30, Math.max(-52, v.floor + 15));
    setLevel(Math.max(0, Math.min(1, (db - v.floor) / 30)));
    if (ref.current === 'listening') {
      if (loud) {
        v.speech += dt;
        v.lastLoud = now;
      }
      const heard = v.speech >= MIN_SPEECH_MS;
      if (heard && now - v.lastLoud > QUIET_MS) finish(true);
      else if (!heard && now - v.start > IDLE_MS) finish(false);
      else if (now - v.start > LONGEST_MS) finish(true);
    } else if (ref.current === 'speaking' && WEB) {
      // the person talks over the AI: cut in (the echo cancelling keeps the
      // AI's own voice out of the microphone)
      const over = db > Math.min(-26, Math.max(-40, v.floor + 22));
      if (over) {
        v.loudSince = v.loudSince || now;
        if (now - v.loudSince > CUT_IN_MS) {
          v.loudSince = 0;
          onCutIn?.();
        }
      } else v.loudSince = 0;
    }
  };

  // in the app, the recorder reports the level
  useEffect(() => {
    if (WEB || phase !== 'listening' || !st.isRecording) return;
    hear(typeof st.metering === 'number' ? st.metering : -160);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [st.metering, st.durationMillis, phase]);

  const listen = async () => {
    if (ref.current === 'off') return;
    try {
      if (WEB) {
        if (!mic.current.recording()) mic.current.start();
      } else {
        await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
        await recorder.prepareToRecordAsync();
        recorder.record();
      }
      fresh();
      set('listening');
    } catch (e) {
      onError?.(e);
      end();
    }
  };

  // The end of a turn: send what was said (or, with send false, start again).
  const finish = async (send = true) => {
    if (ref.current !== 'listening') return;
    set('hearing');
    try {
      let data;
      if (WEB) {
        const blob = await mic.current.stop();
        if (!send || !blob || blob.size < 1500) return listen();
        data = { base64: await toBase64(blob), mime: blob.type || 'audio/webm' };
      } else {
        await recorder.stop();
        await micDone();
        if (!send) return listen();
        data = await recordingData(recorder.uri);
      }
      const r = await post('/v1/study/transcribe', data, { timeout: 60000 });
      const text = String(r.text || '').trim();
      if (ref.current === 'off') return;
      if (text.length < 2) return listen();
      set('thinking');
      await onHeard(text); // the chat sends it and speaks the answer, then calls listen()
    } catch (e) {
      if (ref.current === 'off') return;
      if (!['too_short', 'nothing_heard'].includes(e.code)) onError?.(e);
      listen();
    }
  };

  const start = async () => {
    try {
      set('starting');
      if (WEB) {
        mic.current = new WebMic();
        await mic.current.open();
        clearInterval(loop.current);
        loop.current = setInterval(() => mic.current && ref.current !== 'off' && hear(mic.current.db()), 60);
      } else await micAllowed();
      vad.current = {};
      await listen();
    } catch (e) {
      onError?.(e);
      end();
    }
  };
  const end = () => {
    set('off');
    clearInterval(loop.current);
    if (WEB) {
      mic.current?.close();
      mic.current = null;
    } else {
      try {
        if (recorder.isRecording) Promise.resolve(recorder.stop()).catch(() => {});
      } catch {
        // already stopped
      }
      micDone();
    }
  };
  // The AI speaks: nothing is recorded meanwhile (in the browser the level is
  // still watched, to notice the person cutting in).
  const speaking = () => {
    const wasListening = ref.current === 'listening';
    set('speaking');
    vad.current.loudSince = 0;
    if (WEB) {
      if (mic.current?.recording()) mic.current.stop();
    } else {
      if (wasListening || recorder.isRecording) Promise.resolve().then(() => recorder.stop()).catch(() => {});
      micDone();
    }
  };
  useEffect(() => () => end(), []); // eslint-disable-line react-hooks/exhaustive-deps

  return { phase, level, start, end, listen, finish, speaking, active: () => ref.current !== 'off', phaseNow: () => ref.current };
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
    const anim = Animated.loop(Animated.sequence([Animated.timing(pulse, { toValue: 1, duration: 650, useNativeDriver: true }), Animated.timing(pulse, { toValue: 0, duration: 650, useNativeDriver: true })]));
    anim.start();
    return () => anim.stop();
  }, [phase, pulse]);
  const words = {
    starting: L('Starting the call...', 'Démarrage de l’appel...'),
    listening: L('I am listening. Speak when you are ready', 'Je vous écoute. Parlez quand vous voulez'),
    hearing: L('Writing down what you said...', 'J’écris ce que vous avez dit...'),
    thinking: L('Thinking...', 'Réflexion...'),
    speaking: WEB ? L('Speaking. Talk or tap to cut in', 'Je parle. Parlez ou touchez pour m’interrompre') : L('Speaking. Tap to cut in', 'Je parle. Touchez pour m’interrompre'),
  }[phase];
  const busy = phase === 'thinking' || phase === 'starting' || phase === 'hearing';
  return (
    <V c="px-space-sm pt-1.5" style={{ paddingBottom: 8, backgroundColor: '#ffffff' }}>
      <V c="rounded-3xl flex-row items-center gap-space-sm px-space-sm py-2" style={{ backgroundColor: '#02287B' }}>
        <P c="flex-1 flex-row items-center gap-space-sm" onPress={onTap} disabled={busy} accessibilityRole="button" accessibilityLabel={phase === 'speaking' ? L('Cut in', 'Interrompre') : L('Send what I said', 'Envoyer ce que j’ai dit')}>
          <V c="w-12 h-12 items-center justify-center">
            <Animated.View
              style={{
                position: 'absolute',
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: '#FBAC02',
                opacity: phase === 'speaking' ? pulse.interpolate({ inputRange: [0, 1], outputRange: [0.25, 0.55] }) : ring.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.6] }),
                transform: [{ scale: phase === 'speaking' ? pulse.interpolate({ inputRange: [0, 1], outputRange: [0.9, 1.15] }) : ring.interpolate({ inputRange: [0, 1], outputRange: [0.75, 1.3] }) }],
              }}
            />
            {busy ? <ActivityIndicator color="#ffffff" /> : <Ic n={phase === 'speaking' ? 'graphic_eq' : 'mic'} s={24} c="#ffffff" fill />}
          </V>
          <V c="flex-1">
            <T c="font-label-lg text-label-lg" style={{ color: '#ffffff', fontWeight: '700' }} numberOfLines={1}>
              {L('On a call with Klass8', 'En appel avec Klass8')}
            </T>
            <T c="font-body-sm text-body-sm" style={{ color: '#c9d5f0' }} numberOfLines={2}>
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
