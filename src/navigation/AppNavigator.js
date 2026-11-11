import { useCallback, useEffect } from 'react';
import { createNavigationContainerRef, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../ui/TabBar';
import { C } from '../ui/tw';
import { useApp } from '../state/store';
import { calmMotion, noSlide } from '../lib/device';

import Splash from '../screens/onboarding/Splash';
import Welcome from '../screens/onboarding/Welcome';
import Language from '../screens/onboarding/Language';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Otp from '../screens/auth/Otp';
import Forgot from '../screens/auth/Forgot';
import Reset from '../screens/auth/Reset';
import Role from '../screens/onboarding/Role';
import { ClassPick, ExamYear, SchoolKind, Series, Subjects } from '../screens/onboarding/ClassSteps';
import School from '../screens/onboarding/School';
import { Grade, Reminder, StudyTime } from '../screens/onboarding/PlanSteps';
import SetupDone from '../screens/onboarding/SetupDone';
import LinkChild from '../screens/onboarding/LinkChild';
import CreateClass from '../screens/onboarding/CreateClass';

import Home from '../screens/tabs/Home';
import Learn from '../screens/tabs/Learn';
import Lab from '../screens/tabs/Lab';
import Exams from '../screens/tabs/Exams';
import Me from '../screens/tabs/Me';

import Unit from '../screens/learn/Unit';
import Lesson from '../screens/learn/Lesson';
import Specimen from '../screens/learn/Specimen';
import LabRun from '../screens/lab/LabRun';
import Workbook from '../screens/lab/Workbook';
import Quiz from '../screens/exams/Quiz';
import Paper1 from '../screens/exams/Paper1';
import Paper2 from '../screens/exams/Paper2';
import Results from '../screens/exams/Results';
import Tutor from '../screens/ai/Tutor';
import MarkAnswer from '../screens/ai/MarkAnswer';
import Workspace from '../screens/ai/Workspace';
import Paywall from '../screens/me/Paywall';
import Pay from '../screens/me/Pay';
import Voucher from '../screens/me/Voucher';
import Admin from '../screens/me/Admin';
import Offline from '../screens/me/Offline';
import ParentReport from '../screens/me/ParentReport';
import Notifications from '../screens/me/Notifications';
import Search from '../screens/me/Search';
import Settings from '../screens/me/Settings';
import JoinClass from '../screens/me/JoinClass';
import Legal from '../screens/me/Legal';
import Topics from '../screens/learn/Topics';
import Models from '../screens/learn/Models';
import LabList from '../screens/lab/LabList';
import ExamMenu from '../screens/exams/ExamMenu';

export const navRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// Screens change with the phone's own transitions, drawn outside JavaScript, so
// they stay smooth on entry-level phones; screens left behind are frozen and do
// not redraw until they are shown again. Anyone who asked their phone to
// reduce motion gets no sliding.
// Functions, so the reduce-motion setting is read each time a screen opens.
const stackOptions = () => ({
  headerShown: false,
  gestureEnabled: true,
  animation: noSlide() ? 'none' : 'slide_from_right',
  contentStyle: { backgroundColor: C['surface-container-lowest'] },
  freezeOnBlur: true,
});

// The platform charges and the Offline manager come up from the bottom.
const modalOptions = () => ({ animation: noSlide() ? 'none' : 'slide_from_bottom', gestureDirection: 'vertical' });
// The first screens after the opening logo fade in over its white.
const fadeIn = () => ({ animation: noSlide() ? 'none' : 'fade' });

function MainTabs() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // A short fade between tabs, left out on entry-level phones.
        animation: calmMotion() ? 'none' : 'fade',
        transitionSpec: { animation: 'timing', config: { duration: 150 } },
        sceneStyle: { backgroundColor: C['surface-container-lowest'] },
        freezeOnBlur: true,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Learn" component={Learn} />
      <Tabs.Screen name="Lab" component={Lab} />
      <Tabs.Screen name="Exams" component={Exams} />
      <Tabs.Screen name="Me" component={Me} />
    </Tabs.Navigator>
  );
}

const PUBLIC = ['Splash', 'Welcome', 'Language', 'Register', 'Login', 'Otp', 'Forgot', 'Reset', 'Legal'];
// What a student whose free month has ended (and who has not paid) can still
// open: signing in and out, setting up the account, the platform charges and
// settings. Anything else leads to the platform charges.
const OPEN_WHEN_LOCKED = [...PUBLIC, 'Role', 'SchoolKind', 'ClassPick', 'ExamYear', 'Series', 'Subjects', 'School', 'Grade', 'StudyTime', 'Reminder', 'SetupDone', 'Paywall', 'Pay', 'Voucher', 'Settings', 'Offline'];

const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: C['surface-container-lowest'], primary: C['primary-container'] } };

export default function AppNavigator() {
  const { auth, pro } = useApp();
  const locked = auth.status === 'authed' && auth.user?.role === 'student' && !pro;
  const enforce = useCallback(() => {
    if (!locked || !navRef.isReady()) return;
    const route = navRef.getCurrentRoute();
    if (route && !OPEN_WHEN_LOCKED.includes(route.name)) navRef.reset({ index: 0, routes: [{ name: 'Paywall', params: { gate: true } }] });
  }, [locked]);
  useEffect(enforce, [enforce]);

  // If the session ends: after signing out, back to the welcome page; if it
  // was revoked or expired, straight to sign in.
  useEffect(() => {
    if (auth.status !== 'guest' || !navRef.isReady()) return;
    const route = navRef.getCurrentRoute();
    if (route && !PUBLIC.includes(route.name)) navRef.reset({ index: 0, routes: [{ name: auth.reason === 'logout' ? 'Welcome' : 'Login' }] });
  }, [auth.status, auth.reason]);

  return (
    <NavigationContainer ref={navRef} theme={theme} onReady={enforce} onStateChange={enforce}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={stackOptions}>
        <Stack.Screen name="Splash" component={Splash} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={fadeIn} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} options={fadeIn} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Role" component={Role} options={{ gestureEnabled: false }} />
        <Stack.Screen name="SchoolKind" component={SchoolKind} />
        <Stack.Screen name="ClassPick" component={ClassPick} />
        <Stack.Screen name="ExamYear" component={ExamYear} />
        <Stack.Screen name="Series" component={Series} />
        <Stack.Screen name="Subjects" component={Subjects} />
        <Stack.Screen name="School" component={School} />
        <Stack.Screen name="Grade" component={Grade} />
        <Stack.Screen name="StudyTime" component={StudyTime} />
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="SetupDone" component={SetupDone} options={{ gestureEnabled: false }} />
        <Stack.Screen name="LinkChild" component={LinkChild} />
        <Stack.Screen name="CreateClass" component={CreateClass} />

        <Stack.Screen name="Main" component={MainTabs} options={() => ({ ...fadeIn(), gestureEnabled: false })} />
        <Stack.Screen name="Topics" component={Topics} />
        <Stack.Screen name="Models" component={Models} />
        <Stack.Screen name="LabList" component={LabList} />
        <Stack.Screen name="ExamMenu" component={ExamMenu} />
        <Stack.Screen name="Unit" component={Unit} />
        <Stack.Screen name="Lesson" component={Lesson} />
        <Stack.Screen name="Specimen" component={Specimen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="LabRun" component={LabRun} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Workbook" component={Workbook} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Paper1" component={Paper1} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Paper2" component={Paper2} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Tutor" component={Tutor} />
        <Stack.Screen name="Workspace" component={Workspace} />
        <Stack.Screen name="MarkAnswer" component={MarkAnswer} />
        <Stack.Screen name="ParentReport" component={ParentReport} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="JoinClass" component={JoinClass} />
        <Stack.Screen name="Legal" component={Legal} />
        <Stack.Screen name="Paywall" component={Paywall} options={modalOptions} />
        <Stack.Screen name="Pay" component={Pay} />
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Offline" component={Offline} options={modalOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
