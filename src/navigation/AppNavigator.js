import { useEffect } from 'react';
import { Animated, View } from 'react-native';
import { createNavigationContainerRef, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../ui/TabBar';
import { C } from '../ui/tw';
import { useApp } from '../state/store';

import Splash from '../screens/onboarding/Splash';
import Welcome from '../screens/onboarding/Welcome';
import Language from '../screens/onboarding/Language';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Otp from '../screens/auth/Otp';
import Forgot from '../screens/auth/Forgot';
import Reset from '../screens/auth/Reset';
import Role from '../screens/onboarding/Role';
import ExamClass from '../screens/onboarding/ExamClass';
import School from '../screens/onboarding/School';
import Goals from '../screens/onboarding/Goals';
import SetupDone from '../screens/onboarding/SetupDone';
import Guardian from '../screens/onboarding/Guardian';
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
import Paywall from '../screens/me/Paywall';
import Offline from '../screens/me/Offline';
import ParentReport from '../screens/me/ParentReport';
import Notifications from '../screens/me/Notifications';
import Search from '../screens/me/Search';
import Settings from '../screens/me/Settings';
import JoinClass from '../screens/me/JoinClass';
import Legal from '../screens/me/Legal';

export const navRef = createNavigationContainerRef();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// Motion spec: spring (stiffness 300, damping 30); the leaving screen slides
// back by 20% and fades to 0.8.
const SPRING = { animation: 'spring', config: { stiffness: 300, damping: 30, mass: 1, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 } };

function slide({ current, next, layouts }) {
  const w = layouts.screen.width;
  return {
    cardStyle: {
      opacity: next ? next.progress.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) : 1,
      transform: [
        {
          translateX: Animated.add(
            current.progress.interpolate({ inputRange: [0, 1], outputRange: [w, 0], extrapolate: 'clamp' }),
            next ? next.progress.interpolate({ inputRange: [0, 1], outputRange: [0, -w * 0.2], extrapolate: 'clamp' }) : 0
          ),
        },
      ],
    },
  };
}

// Paywall and Offline manager slide up over a dimmed backdrop.
function slideUp({ current, layouts }) {
  return {
    cardStyle: { transform: [{ translateY: current.progress.interpolate({ inputRange: [0, 1], outputRange: [layouts.screen.height, 0], extrapolate: 'clamp' }) }] },
    overlayStyle: { opacity: current.progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolate: 'clamp' }) },
  };
}

const stackOptions = {
  headerShown: false,
  gestureEnabled: true,
  cardStyle: { backgroundColor: C['surface-container-lowest'] },
  cardStyleInterpolator: slide,
  transitionSpec: { open: SPRING, close: SPRING },
};

const modalOptions = {
  presentation: 'transparentModal',
  gestureDirection: 'vertical',
  cardOverlayEnabled: true,
  cardOverlay: () => <View style={{ flex: 1, backgroundColor: 'rgba(15,23,42,0.45)' }} />,
  cardStyleInterpolator: slideUp,
  transitionSpec: { open: SPRING, close: SPRING },
};

function MainTabs() {
  return (
    <Tabs.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        transitionSpec: { animation: 'timing', config: { duration: 150 } },
        sceneStyle: { backgroundColor: C['surface-container-lowest'] },
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

const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: C['surface-container-lowest'], primary: C['primary-container'] } };

export default function AppNavigator() {
  const { auth } = useApp();

  // If the session ends (sign out, revoked, expired), return to sign in.
  useEffect(() => {
    if (auth.status !== 'guest' || !navRef.isReady()) return;
    const route = navRef.getCurrentRoute();
    if (route && !PUBLIC.includes(route.name)) navRef.reset({ index: 0, routes: [{ name: 'Login' }] });
  }, [auth.status]);

  return (
    <NavigationContainer ref={navRef} theme={theme}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={stackOptions}>
        <Stack.Screen name="Splash" component={Splash} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Role" component={Role} options={{ gestureEnabled: false }} />
        <Stack.Screen name="ExamClass" component={ExamClass} />
        <Stack.Screen name="Guardian" component={Guardian} />
        <Stack.Screen name="School" component={School} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="SetupDone" component={SetupDone} options={{ gestureEnabled: false }} />
        <Stack.Screen name="LinkChild" component={LinkChild} />
        <Stack.Screen name="CreateClass" component={CreateClass} />

        <Stack.Screen name="Main" component={MainTabs} options={{ gestureEnabled: false }} />
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
        <Stack.Screen name="MarkAnswer" component={MarkAnswer} />
        <Stack.Screen name="ParentReport" component={ParentReport} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="JoinClass" component={JoinClass} />
        <Stack.Screen name="Legal" component={Legal} />
        <Stack.Screen name="Paywall" component={Paywall} options={modalOptions} />
        <Stack.Screen name="Offline" component={Offline} options={modalOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
