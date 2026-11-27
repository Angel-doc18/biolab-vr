// Recording what the student says, for the AI to hear: small mono AAC (m4a)
// on phones and WebM in browsers, both read well by Whisper, then base64.
import { Platform } from 'react-native';
import { AudioQuality, IOSOutputFormat, requestRecordingPermissionsAsync, setAudioModeAsync } from 'expo-audio';

export const VOICE_RECORDING = {
  extension: '.m4a',
  sampleRate: 16000,
  numberOfChannels: 1,
  bitRate: 32000,
  android: { extension: '.m4a', outputFormat: 'mpeg4', audioEncoder: 'aac' },
  ios: { extension: '.m4a', outputFormat: IOSOutputFormat.MPEG4AAC, audioQuality: AudioQuality.MEDIUM, linearPCMBitDepth: 16, linearPCMIsBigEndian: false, linearPCMIsFloat: false },
  web: { mimeType: 'audio/webm', bitsPerSecond: 32000 },
};

export async function micAllowed() {
  const perm = await requestRecordingPermissionsAsync();
  if (!perm.granted) throw new Error('Allow the microphone to talk to the AI. You can still type your question.');
  await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
}

// After recording: playback mode again, so the AI's voice is loud and clear.
export async function micDone() {
  await setAudioModeAsync({ allowsRecording: false, playsInSilentMode: true }).catch(() => {});
}

const toBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).replace(/^data:[^,]+,/, ''));
    r.onerror = () => reject(new Error('The recording could not be read.'));
    r.readAsDataURL(blob);
  });

// { base64, mime } of a finished recording.
export async function recordingData(uri) {
  if (Platform.OS === 'web') {
    const blob = await (await fetch(uri)).blob();
    return { base64: await toBase64(blob), mime: (blob.type || 'audio/webm').split(';')[0] };
  }
  const { File } = require('expo-file-system');
  return { base64: await new File(uri).base64(), mime: 'audio/m4a' };
}
