// Photographs a handwritten answer (camera or gallery) as compressed base64 JPEG,
// and picks a profile picture.
import * as ImagePicker from 'expo-image-picker';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';

const MAX_B64 = 3_000_000;
const MAX_SIDE = 1600;

// The photo resized to at most 1600 pixels on its longer side and saved as a
// JPEG: sharp enough to read handwriting, small enough to send on mobile data.
async function shrink(a) {
  try {
    const ctx = ImageManipulator.manipulate(a.uri);
    const long = Math.max(a.width || 0, a.height || 0);
    if (long > MAX_SIDE) ctx.resize((a.width || 0) >= (a.height || 0) ? { width: MAX_SIDE } : { height: MAX_SIDE });
    const image = await ctx.renderAsync();
    const out = await image.saveAsync({ compress: 0.72, format: SaveFormat.JPEG, base64: true });
    return out?.base64 ? { uri: out.uri, base64: out.base64, mediaType: 'image/jpeg', width: out.width, height: out.height } : null;
  } catch {
    return null;
  }
}

export async function pickAnswerPhoto(source = 'camera') {
  const opts = { mediaTypes: ['images'], quality: 0.5, base64: true, allowsEditing: true, exif: false };
  let res;
  if (source === 'camera') {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) throw new Error('Camera permission is needed to photograph your answer.');
    res = await ImagePicker.launchCameraAsync(opts);
  } else {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) throw new Error('Photo library permission is needed to choose your answer.');
    res = await ImagePicker.launchImageLibraryAsync(opts);
  }
  if (res.canceled || !res.assets?.[0]) return null;
  const a = res.assets[0];
  const small = await shrink(a);
  if (small) return small;
  if (!a.base64) throw new Error('The photo could not be read. Try again.');
  if (a.base64.length > MAX_B64) throw new Error('The photo is too large. Move closer to the page or crop it.');
  const mediaType = a.mimeType && ['image/jpeg', 'image/png', 'image/webp'].includes(a.mimeType) ? a.mimeType : 'image/jpeg';
  return { uri: a.uri, base64: a.base64, mediaType, width: a.width, height: a.height };
}

// A profile picture: cropped square, then shrunk to 480 pixels and saved as a
// JPEG, so it stays far below the server's limit (about 260 KB) whatever the
// size of the phone's camera.
const MAX_AVATAR_B64 = 350_000;
const AVATAR_SIZE = 480;
export async function pickProfilePhoto(source = 'library') {
  const opts = { mediaTypes: ['images'], quality: 0.8, allowsEditing: true, aspect: [1, 1], exif: false };
  let res;
  if (source === 'camera') {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) throw new Error('Camera permission is needed to take your photo.');
    res = await ImagePicker.launchCameraAsync({ ...opts, cameraType: 'front' });
  } else {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) throw new Error('Photo library permission is needed to choose a picture.');
    res = await ImagePicker.launchImageLibraryAsync(opts);
  }
  if (res.canceled || !res.assets?.[0]) return null;
  const a = res.assets[0];
  let small;
  try {
    const ctx = ImageManipulator.manipulate(a.uri);
    if (a.width > AVATAR_SIZE) ctx.resize({ width: AVATAR_SIZE });
    const image = await ctx.renderAsync();
    small = await image.saveAsync({ compress: 0.7, format: SaveFormat.JPEG, base64: true });
  } catch {
    throw new Error('The picture could not be read. Try another one.');
  }
  if (!small?.base64) throw new Error('The picture could not be read. Try another one.');
  if (small.base64.length > MAX_AVATAR_B64) throw new Error('The picture is too large. Crop it closer to your face or choose a smaller one.');
  return { base64: small.base64, mediaType: 'image/jpeg' };
}
