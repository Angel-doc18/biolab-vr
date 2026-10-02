// Builds the app's anatomy models from BodyParts3D meshes.
//
// Source: BodyParts3D, (c) The Database Center for Life Science (DBCLS),
// licensed CC BY-SA 2.1 Japan. Release 4.3 OBJ meshes (mirrored at
// github.com/olivercase/body_parts_3d_api) and release 3.0 STL meshes (mirrored at
// github.com/Kevin-Mattheus-Moerman/BodyParts3D) share one body coordinate system
// in millimetres. The derived models are distributed under the same licence.
//
// For each model: download the listed meshes (cached), merge them into the labelled
// parts, weld, simplify to a triangle budget, compute smooth normals, turn the body
// axes into three.js axes (Y up, anterior facing +Z), centre and scale, and write
//   ../../worker/assets/models/<name>.glb   (served to the app and to AR viewers)
//   ../../src/three/anatomy.json            (part anchors, colours and sizes)
//
// Run: npm run build   (needs network the first time; later runs use the cache)
import fs from 'node:fs';
import path from 'node:path';
import { Document, NodeIO, VertexLayout } from '@gltf-transform/core';
import { compactPrimitive, prune, simplifyPrimitive, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';

const ROOT = path.resolve(import.meta.dirname, '../..');
const CACHE = process.env.BP3D_CACHE || path.resolve(ROOT, '../bp3d/cache');
const OUT = path.join(ROOT, 'worker/assets/models');
const META = path.join(ROOT, 'src/three/anatomy.json');
const V43 = 'https://media.githubusercontent.com/media/olivercase/body_parts_3d_api/main/';
const V30 = 'https://raw.githubusercontent.com/Kevin-Mattheus-Moerman/BodyParts3D/main/assets/BodyParts3D_data/stl/';
const MANIFEST_URL = 'https://raw.githubusercontent.com/olivercase/body_parts_3d_api/main/MANIFEST.csv';
const TREE_URL = 'https://api.github.com/repos/olivercase/body_parts_3d_api/git/trees/main?recursive=1';
const SIZE = 2.6; // longest side of every model, in scene units

fs.mkdirSync(CACHE, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

// ---------- sources ----------
// v43(regex on the English name), v30(FMA id). A regex matches every mesh with that name.
const v43 = (re) => ({ kind: 'v43', re: new RegExp(`^(${re})$`, 'i') });
const v30 = (fma) => ({ kind: 'v30', fma });

const BRAIN_LOBES = {
  frontal: 'superior frontal gyrus|middle frontal gyrus|inferior frontal gyrus|precentral gyrus|anterior orbital gyrus|lateral orbital gyrus|medial orbital gyrus|posterior orbital gyrus|straight gyrus',
  parietal: 'postcentral gyrus|superior parietal lobule|supramarginal gyrus|angular gyrus|precuneus',
  temporal: 'superior temporal gyrus|anterior part of (left|right) superior temporal gyrus|posterior part of (left|right) superior temporal gyrus|middle temporal gyrus|inferior temporal gyrus|fusiform gyrus|parahippocampal gyrus',
  occipital: 'lateral occipital gyrus|superior occipital gyrus|cuneus|lingual gyrus',
};
const both = (list) => list.split('|').map((n) => (/^(anterior|posterior) part of/.test(n) ? n : `(left|right) ${n}`)).join('|');

export const MODELS = {
  heart: {
    view: [0.15, -0.35],
    focus: ['lv', 'atria'],
    margin: 0.2,
    parts: [
      { key: 'lv', color: '#a3302b', tris: 9000, pin: { y: 0.22, side: [0.4, 0, 1] }, src: [v43('Wall of ventricle')] },
      { key: 'atria', color: '#c4534a', tris: 5000, pin: { y: 0.55, side: [-1, 0, 0.6] }, src: [v43('Wall of left atrium|Wall of right atrium')] },
      { key: 'aorta', color: '#d8433a', tris: 2600, pin: { y: 0.95, side: [0.3, 0, 1] }, src: [v43('Ascending aorta|Arch of aorta|Descending aorta')] },
      { key: 'venacava', color: '#3f5b9e', tris: 1800, pin: { y: 0.82, side: [-1, 0, 0.3] }, src: [v43('Superior vena cava|Inferior vena cava')] },
      { key: 'pulmonary', color: '#5a73b8', tris: 2400, label: false, src: [v43('Pulmonary trunk|Trunk of left pulmonary artery|Trunk of right pulmonary artery')] },
      { key: 'pulmveins', color: '#c9564c', tris: 1200, label: false, src: [v43('Trunk of left superior pulmonary vein|Trunk of left inferior pulmonary vein|Trunk of right superior pulmonary vein|Trunk of right inferior pulmonary vein')] },
    ],
  },
  lungs: {
    view: [0.1, -0.25],
    parts: [
      { key: 'trachea', color: '#e6d6c2', tris: 2500, pin: { y: 0.95, side: [0, 0, 1] }, src: [v30('FMA7394')] },
      { key: 'bronchi', color: '#d6bfa5', tris: 3000, pin: { y: 0.7, side: [-1, 0, 0.8] }, src: [v43('Left main bronchus|Right main bronchus')] },
      { key: 'alveoli', color: '#e59a94', opacity: 0.62, tris: 16000, pin: { y: 0.5, side: [1, 0, 0.4] }, src: [v30('FMA7333'), v30('FMA7383'), v30('FMA7337'), v30('FMA7370'), v30('FMA7371')] },
      { key: 'diaphragm', color: '#b0584a', tris: 5000, pin: { y: 0.12, side: [-1, 0, 1] }, src: [v43('Diaphragm')] },
    ],
  },
  digestive: {
    view: [0.15, -0.3],
    focus: ['stomach', 'liver', 'pancreas', 'villi', 'colon'],
    margin: 0.12,
    parts: [
      { key: 'stomach', color: '#d98673', tris: 2200, pin: { y: 0.72, side: [1, 0, 0.6] }, src: [v43('Stomach')] },
      { key: 'liver', color: '#7d2f27', tris: 6500, pin: { y: 0.78, side: [-1, 0, 0.6] }, src: [v30('FMA7197'), v43('Gallbladder')] },
      { key: 'pancreas', color: '#e6bd6c', tris: 2500, pin: { y: 0.62, side: [0.2, 0, 1] }, src: [v43('Parenchyma of pancreas')] },
      { key: 'villi', color: '#e7a291', tris: 9000, pin: { y: 0.35, side: [0, 0, 1] }, src: [v43('Duodenum|(Proximal|Middle|Distal) part of (jejunum|ileum)')] },
      { key: 'colon', color: '#9a5641', tris: 6000, pin: { y: 0.3, side: [-1, 0, 0.5] }, src: [v43('Ascending colon|Transverse colon|Descending colon|Sigmoid colon|Rectum|Appendix|Caecum|Cecum')] },
      { key: 'esophagus', color: '#d98673', tris: 600, label: false, src: [v43('Esophagus')] },
    ],
  },
  urinary: {
    view: [0.1, 0.3],
    focus: ['kidney', 'ureter', 'bladder'],
    margin: 0.08,
    parts: [
      { key: 'kidney', color: '#8c3a3a', tris: 6000, pin: { y: 0.82, side: [-1, 0, 0.3] }, src: [v43('Left kidney|Right kidney')] },
      { key: 'vessels', color: '#cf4a3d', tris: 5000, pin: { y: 0.76, side: [0.5, 0, 1] }, src: [v43('Trunk of left renal artery|Trunk of right renal artery|Left renal vein|Right renal vein')] },
      { key: 'ureter', color: '#e3c26b', tris: 3200, pin: { y: 0.42, side: [1, 0, 0.3] }, src: [v43('Left ureter|Right ureter')] },
      { key: 'bladder', color: '#d8a37c', tris: 1200, pin: { y: 0.06, side: [0, 0, 1] }, src: [v43('Urinary bladder')] },
      { key: 'aorta', color: '#d8433a', tris: 1800, label: false, src: [v43('Descending aorta')] },
      { key: 'ivc', color: '#3f5b9e', tris: 1600, label: false, src: [v43('Inferior vena cava')] },
    ],
  },
  brain: {
    view: [0.05, -0.9],
    focus: ['cerebrum', 'cerebellum', 'brainstem'],
    margin: 0.35,
    parts: [
      { key: 'cerebrum', color: '#e4b5ab', tris: 32000, pin: { y: 0.92, side: [0, 0.3, 1] }, src: [v43(Object.values(BRAIN_LOBES).map(both).join('|'))] },
      { key: 'cerebellum', color: '#d4958a', tris: 6000, pin: { y: 0.4, side: [-0.6, 0, -1] }, src: [v43('Cerebellum')] },
      { key: 'brainstem', color: '#e2c1a3', tris: 4000, pin: { y: 0.33, side: [0, 0, 1] }, src: [v43('Pons|Medulla oblongata')] },
      { key: 'cord', color: '#efd8b2', tris: 2500, pin: { y: 0.05, side: [0, 0, 1] }, src: [v43('Neural tissue of spinal cord')] },
    ],
  },
  arm: {
    view: [0.1, -0.6],
    parts: [
      { key: 'humerus', color: '#ece2cc', tris: 4000, pin: { y: 0.6, side: [-1, 0, 0.2] }, src: [v43('Right humerus')] },
      { key: 'biceps', color: '#b1433a', tris: 3600, pin: { y: 0.72, side: [0, 0, 1] }, src: [v43('Long head of right biceps brachii|Short head of right biceps brachii')] },
      { key: 'triceps', color: '#97382f', tris: 4500, pin: { y: 0.66, side: [-0.4, 0, -1] }, src: [v43('Long head of right triceps brachii|Lateral head of right triceps brachii|Medial head of right triceps brachii')] },
      { key: 'elbow', color: '#e3d6b8', tris: 3000, pin: { y: 0.4, side: [0, 0, 1] }, src: [v43('Right radius|Right ulna')] },
      { key: 'brachialis', color: '#a6463c', tris: 1500, label: false, src: [v43('Right brachialis')] },
      { key: 'scapula', color: '#ece2cc', tris: 3500, label: false, src: [v43('Right scapula')] },
    ],
  },
};

// ---------- downloading ----------
async function fetchCached(url, file) {
  const dest = path.join(CACHE, file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return fs.readFileSync(dest);
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'biospatial-model-builder' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      return buf;
    } catch (e) {
      console.warn(`  retry ${attempt} ${file}: ${e.message}`);
      await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
  throw new Error(`could not download ${url}`);
}

let index43 = null;
async function meshIndex() {
  if (index43) return index43;
  const tree = JSON.parse((await fetchCached(TREE_URL, 'v43-tree.json')).toString('utf8'));
  index43 = tree.tree
    .filter((t) => t.path.startsWith('meshes/') && t.path.endsWith('.obj'))
    .map((t) => {
      const base = t.path.slice('meshes/'.length, -4);
      const [fj, bp, fma, ...rest] = base.split('_');
      return { path: t.path, fj, bp, fma, name: rest.join('_') };
    });
  await fetchCached(MANIFEST_URL, 'v43-manifest.csv');
  return index43;
}

// ---------- parsing ----------
function parseObj(text) {
  const pos = [];
  const idx = [];
  for (const line of text.split('\n')) {
    if (line.startsWith('v ')) {
      const p = line.trim().split(/\s+/);
      pos.push(+p[1], +p[2], +p[3]);
    } else if (line.startsWith('f ')) {
      const f = line.trim().split(/\s+/).slice(1).map((t) => parseInt(t, 10) - 1);
      for (let i = 1; i + 1 < f.length; i++) idx.push(f[0], f[i], f[i + 1]);
    }
  }
  return { pos, idx };
}

function parseStl(buf) {
  const n = buf.readUInt32LE(80);
  const pos = [];
  const idx = [];
  for (let i = 0; i < n; i++) {
    const o = 84 + i * 50 + 12;
    for (let k = 0; k < 3; k++) {
      pos.push(buf.readFloatLE(o + k * 12), buf.readFloatLE(o + k * 12 + 4), buf.readFloatLE(o + k * 12 + 8));
      idx.push(i * 3 + k);
    }
  }
  return { pos, idx };
}

// Some source meshes are wound inwards, which hides them behind back-face culling.
function orient(mesh) {
  const { pos, idx } = mesh;
  let vol = 0;
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
    vol += pos[a] * (pos[b + 1] * pos[c + 2] - pos[b + 2] * pos[c + 1]) - pos[a + 1] * (pos[b] * pos[c + 2] - pos[b + 2] * pos[c]) + pos[a + 2] * (pos[b] * pos[c + 1] - pos[b + 1] * pos[c]);
  }
  if (vol < 0) for (let t = 0; t < idx.length; t += 3) [idx[t + 1], idx[t + 2]] = [idx[t + 2], idx[t + 1]];
  return mesh;
}

async function loadSource(src) {
  if (src.kind === 'v30') {
    const buf = await fetchCached(`${V30}${src.fma}.stl`, `v30-${src.fma}.stl`);
    return [orient(parseStl(buf))];
  }
  const all = (await meshIndex()).filter((m) => src.re.test(m.name));
  if (!all.length) throw new Error(`no BodyParts3D 4.3 mesh matches ${src.re}`);
  const out = [];
  for (const m of all) {
    const buf = await fetchCached(V43 + m.path.split('/').map(encodeURIComponent).join('/'), `v43-${m.fj}.obj`);
    out.push(orient(parseObj(buf.toString('utf8'))));
  }
  return out;
}

// glTF colours are linear; the palette above is sRGB.
const linear = (hex) => [1, 3, 5].map((i) => {
  const c = parseInt(hex.slice(i, i + 2), 16) / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
});

// Body axes (x: left, y: posterior, z: up, in mm) to three.js (y up, anterior +Z).
const toScene = (x, y, z) => [x, z, -y];

// ---------- building ----------
async function buildModel(name, cfg) {
  console.log(`\n${name}`);
  const doc = new Document();
  const buffer = doc.createBuffer();
  const scene = doc.createScene(name);
  const parts = [];
  const raw = [];
  for (const part of cfg.parts) {
    const pieces = [];
    for (const src of part.src) pieces.push(...(await loadSource(src)));
    const positions = [];
    let indices = [];
    for (const p of pieces) {
      const base = positions.length / 3;
      for (let i = 0; i < p.pos.length; i += 3) positions.push(...toScene(p.pos[i], p.pos[i + 1], p.pos[i + 2]));
      for (const i of p.idx) indices.push(base + i);
    }
    raw.push({ part, pieces, positions, indices });
  }

  // Vessels and other long structures are cut to stubs around the focus organs, the
  // way textbook diagrams show them.
  if (cfg.focus) {
    const lo = [Infinity, Infinity, Infinity];
    const hi = [-Infinity, -Infinity, -Infinity];
    for (const r of raw.filter((x) => cfg.focus.includes(x.part.key))) {
      for (let i = 0; i < r.positions.length; i += 3) for (let k = 0; k < 3; k++) {
        lo[k] = Math.min(lo[k], r.positions[i + k]);
        hi[k] = Math.max(hi[k], r.positions[i + k]);
      }
    }
    const pad = lo.map((l, k) => (hi[k] - l) * (cfg.margin ?? 0.3));
    const inside = (pos, i) => [0, 1, 2].every((k) => pos[i * 3 + k] >= lo[k] - pad[k] && pos[i * 3 + k] <= hi[k] + pad[k]);
    for (const r of raw) {
      if (cfg.focus.includes(r.part.key)) continue;
      const kept = [];
      for (let t = 0; t < r.indices.length; t += 3) {
        const tri3 = [r.indices[t], r.indices[t + 1], r.indices[t + 2]];
        if (tri3.every((i) => inside(r.positions, i))) kept.push(...tri3);
      }
      r.indices = kept;
    }
  }

  for (const { part, pieces, positions, indices } of raw) {
    if (!indices.length) throw new Error(`${name}/${part.key} is empty after clipping`);
    const tri = indices.length / 3;
    const prim = doc
      .createPrimitive()
      .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(new Float32Array(positions)).setBuffer(buffer))
      .setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(indices)).setBuffer(buffer));
    const mat = doc
      .createMaterial(part.key)
      .setBaseColorFactor([...linear(part.color), part.opacity || 1])
      .setRoughnessFactor(0.62)
      .setMetallicFactor(0);
    if (part.opacity) mat.setAlphaMode('BLEND');
    prim.setMaterial(mat);
    const mesh = doc.createMesh(part.key).addPrimitive(prim);
    const node = doc.createNode(part.key).setMesh(mesh).setExtras({ label: part.label !== false });
    scene.addChild(node);
    parts.push({ part, prim, node, tri, pieces: pieces.length });
  }

  await doc.transform(weld());
  await MeshoptSimplifier.ready;
  for (const p of parts) {
    const before = p.prim.getIndices().getCount() / 3;
    if (before > p.part.tris) simplifyPrimitive(p.prim, { simplifier: MeshoptSimplifier, ratio: p.part.tris / before, error: 0.02, lockBorder: false });
    // Drop vertices no longer referenced, then use 16-bit indices where they fit.
    compactPrimitive(p.prim);
    const ind = p.prim.getIndices();
    if (p.prim.getAttribute('POSITION').getCount() < 65536) ind.setArray(new Uint16Array(ind.getArray()));
    p.after = ind.getCount() / 3;
    console.log(`  ${p.part.key.padEnd(11)} ${String(p.pieces).padStart(3)} meshes  ${String(Math.round(before)).padStart(7)} -> ${Math.round(p.after)} triangles`);
  }

  // Centre and scale the whole model.
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const p of parts) {
    const a = p.prim.getAttribute('POSITION');
    for (let i = 0; i < a.getCount(); i++) {
      const v = a.getElement(i, []);
      for (let k = 0; k < 3; k++) {
        min[k] = Math.min(min[k], v[k]);
        max[k] = Math.max(max[k], v[k]);
      }
    }
  }
  const centre = min.map((m, k) => (m + max[k]) / 2);
  const scale = SIZE / Math.max(...max.map((m, k) => m - min[k]));
  for (const p of parts) {
    const a = p.prim.getAttribute('POSITION');
    const arr = a.getArray();
    for (let i = 0; i < arr.length; i += 3) for (let k = 0; k < 3; k++) arr[i + k] = (arr[i + k] - centre[k]) * scale;
    a.setArray(arr);
  }
  // Smooth vertex normals (area-weighted), keeping the mesh indexed.
  for (const p of parts) {
    const pos = p.prim.getAttribute('POSITION').getArray();
    const ind = p.prim.getIndices().getArray();
    const nrm = new Float32Array(pos.length);
    for (let i = 0; i < ind.length; i += 3) {
      const [a, b, c] = [ind[i] * 3, ind[i + 1] * 3, ind[i + 2] * 3];
      const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
      const vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      for (const o of [a, b, c]) {
        nrm[o] += nx;
        nrm[o + 1] += ny;
        nrm[o + 2] += nz;
      }
    }
    for (let i = 0; i < nrm.length; i += 3) {
      const l = Math.hypot(nrm[i], nrm[i + 1], nrm[i + 2]) || 1;
      nrm[i] /= l;
      nrm[i + 1] /= l;
      nrm[i + 2] /= l;
    }
    p.prim.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(nrm).setBuffer(buffer));
  }
  await doc.transform(prune());

  // Anchor of each labelled part: its surface point furthest out in the direction of
  // the part's centre (biased towards the viewer), so the pin sits on the outside.
  const meta = { view: cfg.view, size: [0, 1, 2].map((k) => +((max[k] - min[k]) * scale).toFixed(3)), parts: {} };
  for (const p of parts) {
    const arr = p.prim.getAttribute('POSITION').getArray();
    const c = [0, 0, 0];
    const n = arr.length / 3;
    for (let i = 0; i < arr.length; i += 3) for (let k = 0; k < 3; k++) c[k] += arr[i + k] / n;
    // part.pin = { y, side }: the pin goes on the part's surface at height y (a
    // fraction of the whole model), on the side facing `side`.
    const pin = p.part.pin || { y: null, side: [c[0], c[1], c[2] + 0.6] };
    const len = Math.hypot(...pin.side) || 1;
    const lowY = (min[1] - centre[1]) * scale;
    const span = (max[1] - min[1]) * scale;
    const target = pin.y == null ? null : lowY + pin.y * span;
    let best = -Infinity;
    let anchor = c;
    for (let pass = 0; pass < 2 && best === -Infinity; pass++) {
      const band = (pass === 0 ? 0.04 : 0.15) * span;
      for (let i = 0; i < arr.length; i += 3) {
        if (target != null && Math.abs(arr[i + 1] - target) > band) continue;
        const d = (arr[i] * pin.side[0] + arr[i + 1] * pin.side[1] + arr[i + 2] * pin.side[2]) / len;
        if (d > best) {
          best = d;
          anchor = [arr[i], arr[i + 1], arr[i + 2]];
        }
      }
    }
    meta.parts[p.part.key] = {
      label: p.part.label !== false,
      color: p.part.color,
      opacity: p.part.opacity || 1,
      anchor: anchor.map((x) => +x.toFixed(3)),
      centre: c.map((x) => +x.toFixed(3)),
      triangles: Math.round(p.after),
    };
  }

  // Separate (non-interleaved) attributes keep the app's GLB reader simple.
  const glb = await new NodeIO().setVertexLayout(VertexLayout.SEPARATE).writeBinary(doc);
  fs.writeFileSync(path.join(OUT, `${name}.glb`), glb);
  meta.bytes = glb.byteLength;
  console.log(`  -> ${name}.glb ${(glb.byteLength / 1024).toFixed(0)} KB`);
  return meta;
}

const only = process.argv.slice(2);
const existing = fs.existsSync(META) ? JSON.parse(fs.readFileSync(META, 'utf8')) : { models: {} };
existing.credit = 'BodyParts3D, (c) The Database Center for Life Science, licensed CC BY-SA 2.1 Japan. Simplified and coloured for SciAid.';
for (const [name, cfg] of Object.entries(MODELS)) {
  if (only.length && !only.includes(name)) continue;
  existing.models[name] = await buildModel(name, cfg);
  existing.version = new Date().toISOString().slice(0, 10);
  // Saved after every model, so a failed download later keeps the earlier ones.
  fs.writeFileSync(META, JSON.stringify(existing, null, 2) + '\n');
}
console.log(`\nwrote ${path.relative(ROOT, META)}`);
