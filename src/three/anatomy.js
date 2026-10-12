// Real anatomy models (BodyParts3D, CC BY-SA 2.1 Japan), built by tools/models
// and served by the API. Each model is downloaded once, kept on the phone, and
// turned into one three.js geometry per part.
import { useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import * as THREE from 'three';
import META from './anatomy.json';
import { get } from '../api/client';

export const ANATOMY = META.models;
export const ANATOMY_CREDIT = META.credit;
export const UNIT_MODEL = { transport: 'heart', gas: 'lungs', nutrition: 'digestive', kidney: 'urinary', nervous: 'brain', locomotion: 'arm' };

const memory = new Map(); // name -> Promise<{ [part]: BufferGeometry }>

const fileName = (name) => `${name}-${META.version}.glb`;

function modelsDir() {
  const { Directory, Paths } = require('expo-file-system');
  const dir = new Directory(Paths.document, 'models');
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}

// True when the model file is already on this phone.
export function isDownloaded(name) {
  if (Platform.OS === 'web' || !ANATOMY[name]) return false;
  try {
    const { File } = require('expo-file-system');
    const f = new File(modelsDir(), fileName(name));
    return f.exists && f.size === ANATOMY[name].bytes;
  } catch {
    return false;
  }
}

// Files kept on this phone, for the storage screen.
export function downloadedModels() {
  if (Platform.OS === 'web') return [];
  try {
    const dir = modelsDir();
    return dir.list().map((f) => ({ name: f.name, size: f.size || 0, file: f }));
  } catch {
    return [];
  }
}

export function deleteDownloads() {
  memory.clear();
  for (const m of downloadedModels()) {
    try {
      m.file.delete();
    } catch {
      // already gone
    }
  }
}

export async function modelLink(name) {
  const r = await get(`/v1/models/${name}/link`);
  return r.url;
}

async function bytesFor(name) {
  if (Platform.OS === 'web') {
    const res = await fetch(await modelLink(name));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return new Uint8Array(await res.arrayBuffer());
  }
  const { File } = require('expo-file-system');
  const dir = modelsDir();
  const file = new File(dir, fileName(name));
  if (file.exists && file.size === ANATOMY[name].bytes) return file.bytes();
  // Remove older versions and any partial file before downloading.
  for (const f of dir.list()) if (f.name.startsWith(`${name}-`)) f.delete();
  const got = await File.downloadFileAsync(await modelLink(name), file);
  return got.bytes();
}

// ---------- GLB reading (the layout tools/models writes) ----------
const ascii = (u8) => {
  let s = '';
  for (let i = 0; i < u8.length; i += 4096) s += String.fromCharCode.apply(null, u8.subarray(i, i + 4096));
  return s;
};
const TYPES = { 5126: Float32Array, 5125: Uint32Array, 5123: Uint16Array };
const SIZES = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4 };

export function parseGlb(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (dv.getUint32(0, true) !== 0x46546c67) throw new Error('not a glb file');
  let off = 12;
  let json = null;
  let bin = null;
  while (off + 8 <= u8.byteLength) {
    const len = dv.getUint32(off, true);
    const type = dv.getUint32(off + 4, true);
    const chunk = u8.subarray(off + 8, off + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(ascii(chunk));
    else if (type === 0x004e4942) bin = chunk;
    off += 8 + len;
  }
  if (!json || !bin) throw new Error('incomplete glb file');
  const read = (i) => {
    const a = json.accessors[i];
    const view = json.bufferViews[a.bufferView];
    const Ctor = TYPES[a.componentType];
    const size = SIZES[a.type];
    const elem = size * Ctor.BYTES_PER_ELEMENT;
    const start = (view.byteOffset || 0) + (a.byteOffset || 0);
    const stride = view.byteStride || elem;
    if (stride === elem) return new Ctor(bin.slice(start, start + a.count * elem).buffer); // aligned copy
    // Interleaved attributes: gather each element.
    const out = new Ctor(a.count * size);
    for (let k = 0; k < a.count; k++) out.set(new Ctor(bin.slice(start + k * stride, start + k * stride + elem).buffer), k * size);
    return out;
  };
  const parts = {};
  for (const node of json.nodes || []) {
    if (node.mesh == null) continue;
    const prim = json.meshes[node.mesh].primitives[0];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(read(prim.attributes.POSITION), 3));
    if (prim.attributes.NORMAL != null) g.setAttribute('normal', new THREE.BufferAttribute(read(prim.attributes.NORMAL), 3));
    else g.computeVertexNormals();
    if (prim.indices != null) g.setIndex(new THREE.BufferAttribute(read(prim.indices), 1));
    g.computeBoundingSphere();
    parts[node.name] = g;
  }
  return parts;
}

export function loadAnatomy(name) {
  if (!memory.has(name)) {
    const p = bytesFor(name).then(parseGlb);
    p.catch(() => memory.delete(name));
    memory.set(name, p);
  }
  return memory.get(name);
}

// { status: 'loading' | 'ready' | 'error', parts, error }
export function useAnatomy(name) {
  const [state, setState] = useState({ status: name ? 'loading' : 'none', parts: null, error: null });
  useEffect(() => {
    if (!name) return undefined;
    let live = true;
    setState({ status: 'loading', parts: null, error: null });
    loadAnatomy(name).then(
      (parts) => live && setState({ status: 'ready', parts, error: null }),
      (error) => live && setState({ status: 'error', parts: null, error })
    );
    return () => {
      live = false;
    };
  }, [name]);
  return state;
}

// Opens the model in augmented reality with Google's Scene Viewer (Android with
// ARCore). Falls back to Scene Viewer's 3D mode on phones without AR.
export async function openInAR(name, title) {
  const url = await modelLink(name);
  const params = `file=${encodeURIComponent(url)}&mode=ar_preferred&title=${encodeURIComponent(title || '')}`;
  const intent = `intent://arvr.google.com/scene-viewer/1.2?${params}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(url)};end;`;
  await Linking.openURL(intent);
}
export const arSupported = Platform.OS === 'android';
