# BioLab VR

Offline-first VR/3D biology study companion for secondary school students,
content aligned to the WAEC/GCE Biology syllabus. Same stack as VR-Lab and
BioLab Reference: Vite + React + Tailwind + react-three-fiber/drei/xr.

## Getting started

```bash
npm install
npm run dev          # localhost only
npm run dev:host     # exposes on LAN — needed for QR/cross-device + headset testing
```

Open the LAN URL (not `localhost`) on a phone or headset browser to test
there — `localhost` on your dev machine won't be reachable from another
device on the network.

## Building & installing offline

```bash
npm run build
npm run preview
```

`npm run build` produces a PWA in `dist/`: a service worker precaches the
entire app shell plus all bundled 3D assets, so once a student opens it
once (even over a slow connection), it keeps working with **zero network**
after that — no data bundle burned re-loading it. On a phone, "Add to Home
Screen" from the browser menu installs it like a native app.

Deploy `dist/` to any static host (GitHub Pages, Netlify, a school's local
server, a USB-served static site, etc.) — there's no backend.

## Why some things were built the way they were

- **No CDN dependencies at runtime.** Fonts are system stacks, lighting is
  hand-set instead of a drei `<Environment>` HDRI preset (that fetches
  from a CDN) — see `learnings.md` in the wider project memory: pulling in
  external resources at runtime is exactly what breaks offline-first apps
  the first time a student is truly disconnected.
- **`HashRouter`, not `BrowserRouter`.** Avoids needing server-side
  rewrite rules to keep deep links working when served as a static PWA.
- **Procedural 3D geometry, not imported model files**, for now. Keeps the
  first topic lightweight and dependency-free. See "Adding a topic" below
  for how to bring in real GLTF models later — just remember any imported
  model file needs to land in `public/` or get bundled so the PWA's
  `globPatterns` in `vite.config.js` picks it up for offline caching.
- **IndexedDB via a small hand-written wrapper**, not a library — one less
  dependency, and progress survives fully offline use.

## Content structure

`src/data/topics.js` is the single source of truth for what topics exist,
their WAEC-aligned quiz questions, and their labeled parts. Each topic
declares `hasModel: true/false` — topics without a dedicated 3D model
render with the generic `PlaceholderModel` so the whole app is navigable
today, not just the one built-out topic.

### Adding a topic with a real 3D model

1. Build a new component in `src/components/models/`, following the
   pattern in `CellModel.jsx` — meshes for each part, positions matching
   the topic's `labels` array, a `LeaderLabel` per part.
2. In `src/components/Scene3D.jsx`, add a case to `TopicModel` routing
   that topic's `id` to your new component.
3. Set `hasModel: true` on the topic entry in `topics.js`.

Currently built out: **The Cell** (`cell-structure`). Everything else
(circulatory, respiratory, digestive, excretory, reproductive, genetics,
ecology) has full WAEC-aligned content and quizzes, using the placeholder
viewer until a dedicated model is built — per the "template it out" plan:
get one topic fully right, then repeat the pattern.

## AI Mode

`/ask` lets a student type any Biology question in their own words and get
a detailed explanation from Claude, instead of only browsing the fixed
topic list. This is the one part of the app that is **not** offline —
it needs a live connection.

**Architecture:** the browser never talks to Anthropic directly. It calls
a small proxy server (`/server`), which holds the real API key and
forwards the request. This means:
- The API key is never in the browser, never in the app bundle, never
  visible in DevTools — safe to give a whole class access to.
- The server checks an optional **class passcode** (`APP_PASSCODE`) so
  strangers who find the URL can't spend your quota.
- The server **rate-limits per device** (`MAX_REQUESTS_PER_HOUR`, default
  30/hour) as a second layer of protection.

### Running it locally

```bash
cd server
cp .env.example .env
# edit .env — set ANTHROPIC_API_KEY at minimum
npm install
cd ..
npm run dev:all      # runs the frontend (dev:host) and the AI server together
```

`npm run dev:all` needs the `concurrently` devDependency already in the
root `package.json` — a plain `npm install` at the project root picks
it up. During `npm run dev`/`dev:host` alone, `vite.config.js` proxies
`/api/*` to `http://localhost:8787`, so the frontend's default relative
`/api/ask` just works without any CORS setup, as long as the server is
also running (`npm run server` in another terminal, or use `dev:all`).

### Deploying it

The frontend (this Vite project) and the server (`/server`) are two
separate deployables:
- **Frontend** — any static host (GitHub Pages, Netlify, Vercel, a
  school server) via `npm run build` → deploy `dist/`, same as the rest
  of the app.
- **Server** — anywhere that runs Node (Render, Fly.io, Railway, a
  school's own machine). Set `ANTHROPIC_API_KEY`, `APP_PASSCODE`, and
  `ALLOWED_ORIGINS` (your deployed frontend's URL) as environment
  variables there — never commit `server/.env`.

Once the server has its own public URL, either:
- Put both behind one reverse-proxy domain so `/api/*` reaches the
  server and the relative default keeps working, or
- Set `VITE_AI_PROXY_URL=https://your-server.example.com` before
  `npm run build`, so the frontend calls that URL directly (make sure
  `ALLOWED_ORIGINS` on the server includes the frontend's deployed
  origin so CORS allows it).

Students only ever need the class passcode (if you set one) — never an
API key of their own.

## Testing VR

A real headset (Quest, etc.) is the real test, but Chrome's WebXR emulator
extension can simulate a headset on desktop during development. The
"Enter VR" button only appears when `navigator.xr.isSessionSupported`
resolves true — on a phone with no headset, the app quietly stays in the
touch/drag 3D viewer, which is the intended equal-support path, not a
fallback.
