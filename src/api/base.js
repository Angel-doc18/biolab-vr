// Where the Klass8 API is. In a browser it is the site the app was opened from
// (klass8.com or the older klass8.ebenesaid.com), so the web app works on either
// address without asking another site. A development server sets
// EXPO_PUBLIC_API_URL; the phone app uses the main address.
import { Platform } from 'react-native';

const MAIN = 'https://klass8.ebenesaid.com';
const fromEnv = process.env.EXPO_PUBLIC_API_URL;
const sameSite = !fromEnv && Platform.OS === 'web' && typeof location !== 'undefined' && location.protocol === 'https:';

export const API_BASE = (sameSite ? location.origin : fromEnv || MAIN).replace(/\/+$/, '');
