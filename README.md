# BioSpatial VR: Cameroon GCE Biology

Offline-first mobile app (Expo SDK 57, React Native) for Cameroon GCE Ordinary Level Biology,
with a Cloudflare Worker API for accounts, progress sync, classes, parent reports, payments and AI.

## Download (Android)

Direct download, no GitHub account needed:

**https://github.com/Angel-doc18/biolab-vr/releases/latest/download/BioSpatial-VR.apk**

Every push to `main` builds a new APK and publishes it as release `v1.0.<build>`
(`.github/workflows/android-release.yml`).

## What is in the app

| Area | Screens |
| --- | --- |
| Start | Animated splash, welcome carousel, language (English / Français), register, login, SMS code, forgot and reset password |
| Onboarding | Role (student, parent, teacher), exam and class, school search or class code, goals and daily reminder, setup complete |
| Home | Streak, syllabus mastery, XP, GCE countdown, today's lesson, tutor shortcut, teacher assignments. Parents see their children's reports; teachers see the classroom portal |
| Learn | 10 units, 30 lessons with read-aloud narration, 3D specimen viewer with stereo VR, unit quizzes |
| Lab | Osmosis, food tests, enzyme, photosynthesis and transpiration practicals, workbook with drawing and labelling, PDF export |
| Exams | Timed Paper 1 (50 questions, 90 minutes, flag, eliminate, matrix), Paper 2 structured questions with mark schemes, results analysis, Mark my answer from a photo |
| Me | Profile and analytics, offline manager, parent WhatsApp report and PDF, join a class, Premium, settings, help, terms and privacy |

Course content ships inside the app and works without data. The AI tutor, marking, payments and sync need a connection.

## Project layout

- `src/ui`: design system (tokens from the Stitch config in `tw.js`, primitives in `kit.js`, headers, tab bar)
- `src/screens`: screens by area (`onboarding`, `auth`, `tabs`, `learn`, `lab`, `exams`, `ai`, `me`)
- `src/data`: units and practice questions, lessons, labs, Paper 2 questions, plan limits
- `src/state`: app store (session, progress, sync), progress maths, selectors
- `src/three`: procedural 3D models, touch viewer and stereo VR
- `worker`: the API (Cloudflare Worker + D1)

## Develop

```bash
npm install
npx expo start          # scan the QR with Expo Go (SDK 57)
```

Point the app at a local API with `EXPO_PUBLIC_API_URL=http://localhost:8787`.

## API (Cloudflare Worker)

Live at https://biospatial-vr-ai.biospatial-vr.workers.dev (`GET /v1/health` shows which services are configured).
Secrets are set with Wrangler and are never committed or bundled in the app:

```bash
cd worker
npx wrangler deploy
npx wrangler secret put GROQ_API_KEY            # AI tutor and marking
npx wrangler secret put FAPSHI_API_USER         # mobile money payments
npx wrangler secret put FAPSHI_API_KEY
npx wrangler secret put FAPSHI_WEBHOOK_SECRET   # also set FAPSHI_ENV = "live" in wrangler.toml
npx wrangler secret put TWILIO_ACCOUNT_SID      # SMS codes and parent alerts
npx wrangler secret put TWILIO_AUTH_TOKEN
npx wrangler secret put TWILIO_FROM
npx wrangler d1 migrations apply biospatial-db --remote
```

Fapshi webhook URL: `https://biospatial-vr-ai.biospatial-vr.workers.dev/v1/billing/fapshi-webhook`.

Local API: create `worker/.dev.vars` with `JWT_SECRET` and `ALLOWED_ORIGINS`, then
`npx wrangler d1 migrations apply biospatial-db --local` and `npx wrangler dev --local`.
