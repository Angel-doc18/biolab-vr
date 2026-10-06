// The 3D models were removed from the app (the labelled diagrams teach better).
// Phones that downloaded models still hold them in the "models" folder; this
// frees that space. It runs at start-up and does nothing once the folder is gone.
import { Platform } from 'react-native';

export function removeOldModels() {
  if (Platform.OS === 'web') return;
  try {
    const { Directory, Paths } = require('expo-file-system');
    const dir = new Directory(Paths.document, 'models');
    if (dir.exists) dir.delete();
  } catch {
    // nothing to remove
  }
}
