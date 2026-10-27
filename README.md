# Klass8: Cameroon secondary school courses

Mobile app (Expo SDK 57, React Native) for Cameroon secondary school students from Form 1 to
Upper Sixth, following the MINESEC programmes and the 2026/2027 schemes of work, for class
(term) exams and the GCE, with a Cloudflare Worker API for accounts, progress, classes, parent
reports, payments and the AI tutor. Subjects are switched on in `src/data/subjects.js` once their
content is finished.

## Download (Android)

Direct download, no GitHub account needed:

**https://github.com/Angel-doc18/biolab-vr/releases/latest/download/Klass8.apk**

Every push to `main` builds a new APK and publishes it as release `v1.0.<build>`
(`.github/workflows/android-release.yml`).

## What is in the app

| Area | Screens |
| --- | --- |
| Start | Splash, welcome, language (English / Français), register, login, SMS or WhatsApp code, forgot and reset password |
| Onboarding | Role (student, parent, teacher), class, exam year and subjects, parental approval for under-18s, school, goals and reminder |
| Home | Countdown to the exam, subject mastery, next lesson with its labelled diagram, tutor, work from the teacher. Parents see their children's progress; teachers see their classes |
| Learn | Units and lessons per subject with labelled diagrams and read-aloud, 3D models (real anatomy from BodyParts3D), unit quizzes |
| Lab | Practicals with labelled apparatus, method, results and a workbook with drawing and PDF export |
| Exams | Timed Paper 1 and Paper 2 per subject, results analysis, answer marking from typed text or a photo |
| Me | Subjects, parent reports, downloads and storage, join a class, full course, settings, help, terms and privacy |

## Project layout

- `src/ui`: design system (tokens from the Stitch config in `tw.js`, primitives in `kit.js`, headers, tab bar)
- `src/screens`: screens by area (`onboarding`, `auth`, `tabs`, `learn`, `lab`, `exams`, `ai`, `me`)
- `src/data`: units and practice questions, lessons, labs, Paper 2 questions, plan limits
- `src/state`: app store (session, progress, sync), progress maths, selectors
- `src/three`: procedural 3D models, touch viewer and stereo VR
- `worker`: the API and the voice server (Docker on Klass8's own server)

## Develop

```bash
npm install
npx expo start          # scan the QR with Expo Go (SDK 57)
```

Point the app at a local API with `EXPO_PUBLIC_API_URL=http://localhost:8787`.

## API (Klass8's own server)

Live at https://klass8.ebenesaid.com/v1/ (`GET /v1/health` shows which services are configured).
It runs on the Hostinger VPS in Docker, beside the ebenesaid sites (never change those):

- `worker/src`: the routes; `worker/server`: Node with SQLite (`/opt/klass8-api/data/klass8.db`,
  migrations applied on start, a backup every night in `data/backups`, 14 kept)
- `worker/voice`: the tutor's voice (Kokoro-82M), which also speaks the lesson notes ahead of time overnight

```bash
sh worker/deploy.sh api      # or: sh worker/deploy.sh voice
```

Settings are in `worker/server/settings.env`. Secrets live only in `/opt/klass8-api/.env` on the
server (chmod 600) and are never committed or bundled in the app; the list is at the top of
`settings.env`. After changing them, run `sh worker/deploy.sh api` again.

Fapshi webhook URL: `https://klass8.ebenesaid.com/v1/billing/fapshi-webhook`.

Local API: create `worker/.dev.vars` with `JWT_SECRET` and `ALLOWED_ORIGINS`, then in `worker`
run `DATA_DIR=.data npm run dev` (port 8787).
