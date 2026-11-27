// Getting study material into a chat: photos (camera or several from the
// gallery, shrunk to a sharp but light JPEG) and documents (PDF, Word, text),
// each as base64 for the server.
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';

const MAX_SIDE = 1800;
const MAX_DOC_BYTES = 5 * 1024 * 1024;
export const DOC_TYPES = {
  'application/pdf': 'PDF',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word',
  'text/plain': 'Text',
};

async function shrink(a) {
  const ctx = ImageManipulator.manipulate(a.uri);
  const long = Math.max(a.width || 0, a.height || 0);
  if (long > MAX_SIDE) ctx.resize((a.width || 0) >= (a.height || 0) ? { width: MAX_SIDE } : { height: MAX_SIDE });
  const image = await ctx.renderAsync();
  const out = await image.saveAsync({ compress: 0.75, format: SaveFormat.JPEG, base64: true });
  return { name: `photo-${Date.now()}.jpg`, mime: 'image/jpeg', base64: out.base64, uri: out.uri };
}

// source 'camera' (one photo) or 'library' (up to 10)
export async function pickStudyPhotos(source = 'camera') {
  const opts = { mediaTypes: ['images'], quality: 0.7, exif: false, ...(source === 'library' ? { allowsMultipleSelection: true, selectionLimit: 10 } : { allowsEditing: false }) };
  let res;
  if (source === 'camera') {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) throw new Error('Camera permission is needed to photograph the page.');
    res = await ImagePicker.launchCameraAsync(opts);
  } else {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) throw new Error('Photo library permission is needed to choose the pages.');
    res = await ImagePicker.launchImageLibraryAsync(opts);
  }
  if (res.canceled || !res.assets?.length) return [];
  const out = [];
  for (const a of res.assets.slice(0, 10)) out.push(await shrink(a));
  return out;
}

const toBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).replace(/^data:[^,]+,/, ''));
    r.onerror = () => reject(new Error('The file could not be read.'));
    r.readAsDataURL(blob);
  });

// One or more documents: [{ name, mime, base64 }]
export async function pickStudyDocuments() {
  const res = await DocumentPicker.getDocumentAsync({ type: Object.keys(DOC_TYPES), multiple: true, copyToCacheDirectory: true });
  if (res.canceled || !res.assets?.length) return [];
  const out = [];
  for (const a of res.assets.slice(0, 5)) {
    const name = a.name || 'document';
    const mime = a.mimeType || (/\.pdf$/i.test(name) ? 'application/pdf' : /\.docx$/i.test(name) ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : /\.txt$/i.test(name) ? 'text/plain' : '');
    if (!DOC_TYPES[mime]) throw new Error(`"${name}" cannot be read. Send a PDF, a Word document (.docx) or a text file.`);
    if (a.size && a.size > MAX_DOC_BYTES) throw new Error(`"${name}" is larger than 5 MB. Send a smaller file, or photos of the pages.`);
    let base64;
    if (Platform.OS === 'web') base64 = await toBase64(a.file || (await (await fetch(a.uri)).blob()));
    else {
      const { File } = require('expo-file-system');
      base64 = await new File(a.uri).base64();
    }
    out.push({ name, mime, base64 });
  }
  return out;
}
