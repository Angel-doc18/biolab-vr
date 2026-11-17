// app.json holds the settings; this only changes what differs in the Google
// Play build (EXPO_PUBLIC_STORE=play, see .github/workflows/play-bundle.yml):
// its permanent app ID is com.klass8.app. The APK on klass8.com/download keeps
// com.sciaid.app, so phones that installed it keep getting its updates.
module.exports = ({ config }) => {
  if (process.env.EXPO_PUBLIC_STORE !== 'play') return config;
  return {
    ...config,
    android: { ...config.android, package: 'com.klass8.app' },
    ios: { ...config.ios, bundleIdentifier: 'com.klass8.app' },
  };
};
