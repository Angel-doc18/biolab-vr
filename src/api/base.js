// Where the Klass8 API is. In a browser it is the site the app was opened from
// (klass8.com, or the older klass8.ebenesaid.com, which still answers for phones
// installed before the move), so the web app never calls another site. A
// development server sets EXPO_PUBLIC_API_URL; the phone app uses klass8.com.
import { Platform } from 'react-native';

const MAIN = 'https://klass8.com';
const fromEnv = process.env.EXPO_PUBLIC_API_URL;
const sameSite = !fromEnv && Platform.OS === 'web' && typeof location !== 'undefined' && location.protocol === 'https:';

export const API_BASE = (sameSite ? location.origin : fromEnv || MAIN).replace(/\/+$/, '');
