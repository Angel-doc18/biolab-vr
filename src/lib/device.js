// What the phone can comfortably draw. Phones with little memory (most
// entry-level Android phones) get the light look: flat cards instead of
// shadows, and no decorative motion such as pulsing dots or bouncing pointers.
// Anyone who asked their phone to reduce motion gets no decorative motion and
// no sliding between screens either.
import { AccessibilityInfo, Platform } from 'react-native';
import * as Device from 'expo-device';

const GB = 1024 ** 3;
const memory = Number(Device.totalMemory) || 0; // what Android reports, a little under the box figure
const year = Number(Device.deviceYearClass) || 0;
// EXPO_PUBLIC_LIGHT_LOOK=1 shows the light look on any phone, to check it.
export const LOW_END =
  process.env.EXPO_PUBLIC_LIGHT_LOOK === '1' || (Platform.OS === 'android' && ((memory > 0 && memory < 3.3 * GB) || (year > 0 && year < 2016)));

let reduceMotion = false;
try {
  const asked = AccessibilityInfo?.isReduceMotionEnabled?.();
  if (asked && typeof asked.then === 'function') asked.then((v) => (reduceMotion = !!v)).catch(() => {});
  AccessibilityInfo?.addEventListener?.('reduceMotionChanged', (v) => (reduceMotion = !!v));
} catch {
  // no accessibility settings here (tests): full motion
}

// True when decorative motion should be left out.
export const calmMotion = () => LOW_END || reduceMotion;
// True when the user asked for less motion: screens change without sliding.
export const noSlide = () => reduceMotion;
