import { useEffect, useState } from 'react';
import { BackHandler, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { StoreProvider, useStore } from './src/store/store';
import { AppHeader, BottomNav, TABS } from './src/components/chrome';
import Curriculum from './src/screens/Curriculum';
import CellVR from './src/screens/CellVR';
import VirtualLab from './src/screens/VirtualLab';
import ExamArena from './src/screens/ExamArena';
import VRView from './src/three/VRView';
import AskAI from './src/screens/AskAI';
import ProfileSheet from './src/components/ProfileSheet';
import { C } from './src/theme';

function Shell() {
  const { ready, set } = useStore();
  const [tab, setTab] = useState('curriculum');
  const [vr, setVr] = useState(false);
  const [ask, setAsk] = useState(false);
  const [profile, setProfile] = useState(false);

  // Portrait everywhere; VR immersion switches to landscape itself.
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
  }, []);

  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (ask) {
        setAsk(false);
        return true;
      }
      if (tab === 'curriculum') return false;
      setTab('curriculum');
      return true;
    });
    return () => sub.remove();
  }, [tab, ask]);

  if (!ready) return <View style={{ flex: 1, backgroundColor: C.surface }} />;

  const openUnit = (id) => {
    set({ unitId: id });
    setAsk(false);
    setTab('cell');
  };
  const label = TABS.find((t) => t.id === tab).label;

  return (
    <View style={{ flex: 1, backgroundColor: C.surface }}>
      {!ask && tab === 'curriculum' && <Curriculum openUnit={openUnit} enterVR={() => setVr(true)} editProfile={() => setProfile(true)} />}
      {!ask && tab === 'cell' && <CellVR openUnit={openUnit} />}
      {!ask && tab === 'lab' && <VirtualLab />}
      {!ask && tab === 'exam' && <ExamArena openUnit={openUnit} />}
      {ask && <AskAI onClose={() => setAsk(false)} />}
      <AppHeader section={ask ? 'Ask AI' : label === '3D Cell VR' ? '3D Cell Vr' : label} onAskAI={() => setAsk(true)} onProfile={() => setProfile(true)} />
      <BottomNav active={ask ? null : tab} onChange={(t) => { setAsk(false); setTab(t); }} />
      {vr && <VRView unitId="cell" onClose={() => setVr(false)} />}
      {profile && <ProfileSheet onClose={() => setProfile(false)} />}
      <StatusBar style="dark" />
    </View>
  );
}

export default function App() {
  const [loaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold });
  if (!loaded) return null;
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <Shell />
      </StoreProvider>
    </SafeAreaProvider>
  );
}
