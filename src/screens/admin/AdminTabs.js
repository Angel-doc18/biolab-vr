// The admin console: its own five tabs at the bottom, like the student app.
// The founder and other admins have Home, People, Money, Schools and More; the
// CTO has System in place of Schools (Schools is still under More). Only an
// admin account signed in on the usual sign-in page reaches it; when the admin
// session ends it is the sign-in page again.
import { useCallback, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../../ui/TabBar';
import { C } from '../../ui/tw';
import { V } from '../../ui/kit';
import { calmMotion } from '../../lib/device';
import { get, loadAdminSession, onAdminSignedOut, setCurrentAdmin } from '../../api/adminClient';
import { Loading } from './kit';
import AdminHome from './Home';
import AdminPeople from './People';
import AdminMoney from './Money';
import AdminSchools from './Schools';
import AdminSystem from './System';
import AdminMore from './More';

const TAB = {
  AdminHome: { icon: 'home', en: 'Home', fr: 'Accueil', component: AdminHome },
  AdminPeople: { icon: 'group', en: 'People', fr: 'Comptes', component: AdminPeople },
  AdminMoney: { icon: 'payments', en: 'Money', fr: 'Argent', component: AdminMoney },
  AdminSchools: { icon: 'school', en: 'Schools', fr: 'Écoles', component: AdminSchools },
  AdminSystem: { icon: 'monitor_heart', en: 'System', fr: 'Système', component: AdminSystem },
  AdminMore: { icon: 'more_horiz', en: 'More', fr: 'Plus', component: AdminMore },
};
const tabsFor = (role) =>
  (role === 'cto' ? ['AdminHome', 'AdminPeople', 'AdminMoney', 'AdminSystem', 'AdminMore'] : ['AdminHome', 'AdminPeople', 'AdminMoney', 'AdminSchools', 'AdminMore']).map((name) => ({ name, ...TAB[name] }));
// Every tab name, so the app's sign-in guard lets them all through.
export const ADMIN_TABS = Object.keys(TAB).map((name) => ({ name }));

const Tabs = createBottomTabNavigator();

export default function AdminTabs({ navigation }) {
  const [role, setRole] = useState(null);
  const toSignIn = useCallback(() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] }), [navigation]);
  useEffect(() => {
    let live = true;
    (async () => {
      const sess = await loadAdminSession();
      if (!live) return;
      if (!sess) return toSignIn();
      setRole(sess.admin?.role || 'admin');
      // The role may have changed since this session began (or the session is
      // older than roles): ask the server once.
      try {
        const r = await get('/v1/admin/me');
        await setCurrentAdmin(r.admin);
        if (live) setRole(r.admin?.role || 'admin');
      } catch {
        // offline: the role kept with the session is used
      }
    })();
    const off = onAdminSignedOut(toSignIn);
    return () => {
      live = false;
      off();
    };
  }, [toSignIn]);

  if (!role) {
    return (
      <V c="flex-1 bg-surface-container-lowest items-center justify-center">
        <Loading />
      </V>
    );
  }
  const tabs = tabsFor(role);
  return (
    <Tabs.Navigator
      key={role}
      tabBar={(props) => <TabBar {...props} tabs={tabs} />}
      screenOptions={{
        headerShown: false,
        animation: calmMotion() ? 'none' : 'fade',
        transitionSpec: { animation: 'timing', config: { duration: 150 } },
        sceneStyle: { backgroundColor: C['surface-container-lowest'] },
        freezeOnBlur: true,
      }}
    >
      {tabs.map((t) => (
        <Tabs.Screen key={t.name} name={t.name} component={t.component} />
      ))}
    </Tabs.Navigator>
  );
}
