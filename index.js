import 'react-native-gesture-handler';
import './src/polyfills';
import { installCrashReporter } from './src/lib/crashReport';
import { registerRootComponent } from 'expo';

import App from './App';

installCrashReporter();
registerRootComponent(App);
