// app.json holds the settings; this only changes what differs in the Google
// Play build (EXPO_PUBLIC_STORE=play, see .github/workflows/play-bundle.yml):
// its permanent app ID is com.klass8.app. The APK on klass8.com/download keeps
// com.sciaid.app, so phones that installed it keep getting its updates.
const { withAndroidManifest } = require('expo/config-plugins');

// The network check (NetInfo) asks for ACCESS_WIFI_STATE, from which Google
// Play infers that a phone MUST have Wi-Fi and hides the app from phones
// without it. Klass8 works on mobile data too, so Wi-Fi is declared optional.
const withOptionalWifi = (config) =>
  withAndroidManifest(config, (c) => {
    const m = c.modResults.manifest;
    const others = (m['uses-feature'] || []).filter((f) => f.$?.['android:name'] !== 'android.hardware.wifi');
    m['uses-feature'] = [...others, { $: { 'android:name': 'android.hardware.wifi', 'android:required': 'false' } }];
    return c;
  });

module.exports = ({ config }) => {
  const base = withOptionalWifi(config);
  if (process.env.EXPO_PUBLIC_STORE !== 'play') return base;
  return {
    ...base,
    android: { ...base.android, package: 'com.klass8.app' },
    ios: { ...base.ios, bundleIdentifier: 'com.klass8.app' },
  };
};
