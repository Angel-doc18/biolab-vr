// Photographs a handwritten answer (camera or gallery) as compressed base64 JPEG.
import * as ImagePicker from 'expo-image-picker';

const MAX_B64 = 5_000_000;

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
  if (!a.base64) throw new Error('The photo could not be read. Try again.');
  if (a.base64.length > MAX_B64) throw new Error('The photo is too large. Move closer to the page or crop it.');
  const mediaType = a.mimeType && ['image/jpeg', 'image/png', 'image/webp'].includes(a.mimeType) ? a.mimeType : 'image/jpeg';
  return { uri: a.uri, base64: a.base64, mediaType, width: a.width, height: a.height };
}
