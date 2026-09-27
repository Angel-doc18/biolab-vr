# BioSpatial VR — Cameroon GCE Biology

Offline-first mobile app (Expo SDK 57, React Native) for Cameroon GCE O-Level Biology:
interactive 3D specimens, a stereoscopic VR mode, virtual practicals and timed mock exams.

## Download (Android)

Latest APK: **https://github.com/Angel-doc18/biolab-vr/releases/latest** → `BioSpatial-VR.apk`.
Every push to `main` builds a new APK and publishes it as release `v1.0.<build>`
(`.github/workflows/android-release.yml`).

## Screens

| Tab | What it does |
| --- | --- |
| **Curriculum** | Streak, weighted syllabus mastery, XP, GCE countdown, today's focus, 10 syllabus units with filters and live status. |
| **3D Cell VR** | Real 3D model per unit (swipe to rotate, pinch to zoom), numbered pins that track their part, X-Ray / Explode / Notes / voice narration tools, EN/FR, 10-question mastery practice with examiner feedback. |
| **Virtual Lab** | Osmosis & plasmolysis, food tests, and amylase/temperature practicals with dual optical fields, reagent rack, time slider and a recorded workbook. |
| **Exam Arena** | 20 random questions from the 100-question bank, 15-minute timer, instant mark scheme, live scorecard, review of incorrect answers, per-unit performance. |
| **Enter VR Immersion** | Side-by-side stereo view with gyroscope head-tracking for phone VR viewers (drag to look if no gyro). |

Everything except **Ask AI** works with no network: fonts, icons, images and 3D models are bundled,
and progress is stored on the device.

## Develop

```bash
npm install
npx expo start          # scan the QR with Expo Go (SDK 57) on Android or iPhone
npx expo start --tunnel # when the phone is not on the same Wi-Fi
```

Content lives in `src/data/units.js` (the correct option is always written first; options are shuffled at display time).
3D specimens are procedural specs in `src/three/models.js`.

## Ask AI

The app never contains an API key. Deploy the proxy in `server/` (see `server/.env.example`), then set the
repository variable `AI_PROXY_URL` (or `EXPO_PUBLIC_AI_PROXY_URL` locally) to its public URL and rebuild.
