// The admin console: its own five tabs at the bottom, like the student app
// (Home, People, Money, Schools, More). Only an admin account signed in on the
// usual sign-in page reaches it; when the admin session ends it is the sign-in
// page again.
import { useCallback, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../ui/TabBar';
import { C } from '../../ui/tw';
import { V } from '../../ui/kit';
import { calmMotion } from '../../lib/device';
import { loadAdminSession, onAdminSignedOut } from '../../api/adminClient';
import { Loading } from './kit';
import AdminHome from './Home';
import AdminPeople from './People';
import AdminMoney from './Money';
import AdminSchools from './Schools';
import AdminMore from './More';

export const ADMIN_TABS = [
  { name: 'AdminHome', icon: 'home', en: 'Home', fr: 'Accueil' },
  { name: 'AdminPeople', icon: 'group', en: 'People', fr: 'Comptes' },
  { name: 'AdminMoney', icon: 'payments', en: 'Money', fr: 'Argent' },
  { name: 'AdminSchools', icon: 'school', en: 'Schools', fr: 'Écoles' },
  { name: 'AdminMore', icon: 'more_horiz', en: 'More', fr: 'Plus' },
];

const Tabs = createBottomTabNavigator();

export default function AdminTabs({ navigation }) {
  const [ready, setReady] = useState(false);
  const toSignIn = useCallback(() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }), [navigation]);
  useEffect(() => {
    let live = true;
    loadAdminSession().then((sess) => {
      if (!live) return;
      if (!sess) toSignIn();
      else setReady(true);
    });
    const off = onAdminSignedOut(toSignIn);
    return () => {
      live = false;
      off();
    };
  }, [toSignIn]);

  if (!ready) {
    return (
      <V c="flex-1 bg-surface-container-lowest items-center justify-center">
        <Loading />
      </V>
    );
  }
  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} tabs={ADMIN_TABS} />}
      screenOptions={{
        headerShown: false,
        animation: calmMotion() ? 'none' : 'fade',
        transitionSpec: { animation: 'timing', config: { duration: 150 } },
        sceneStyle: { backgroundColor: C['surface-container-lowest'] },
        freezeOnBlur: true,
      }}
    >
      <Tabs.Screen name="AdminHome" component={AdminHome} />
      <Tabs.Screen name="AdminPeople" component={AdminPeople} />
      <Tabs.Screen name="AdminMoney" component={AdminMoney} />
      <Tabs.Screen name="AdminSchools" component={AdminSchools} />
      <Tabs.Screen name="AdminMore" component={AdminMore} />
    </Tabs.Navigator>
  );
}
