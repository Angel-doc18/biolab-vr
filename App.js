import { useEffect } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Manrope_500Medium, Manrope_600SemiBold, Manrope_700Bold, Manrope_800ExtraBold } from '@expo-google-fonts/manrope';
import { AppProvider, useApp } from './src/state/store';
import { LangContext } from './src/i18n';
import AppNavigator from './src/navigation/AppNavigator';
import { removeOldModels } from './src/lib/cleanup';

SplashScreen.preventAutoHideAsync().catch(() => {});

// Development only: ?gallery in the web preview shows every labelled diagram.
const GALLERY = __DEV__ && Platform.OS === 'web' && typeof window !== 'undefined' && window.location.search.includes('gallery');

function Root() {
  const { prefs } = useApp();
  if (GALLERY) {
    const DiagramGallery = require('./src/dev/DiagramGallery').default;
    return <DiagramGallery />;
  }
  return (
    <LangContext.Provider value={prefs.lang}>
      <AppNavigator />
      <StatusBar style="dark" />
    </LangContext.Provider>
  );
}

export default function App() {
  const [loaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  // Portrait everywhere.
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
    removeOldModels();
  }, []);
  useEffect(() => {
    if (loaded || fontError) SplashScreen.hideAsync().catch(() => {});
  }, [loaded, fontError]);

  if (!loaded && !fontError) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppProvider>
          <Root />
        </AppProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
