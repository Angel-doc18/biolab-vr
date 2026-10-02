# SciAid: Cameroon GCE Ordinary Level sciences

Mobile app (Expo SDK 57, React Native) for the Cameroon GCE Ordinary Level sciences, with a
Cloudflare Worker API for accounts, progress, classes, parent reports, payments and the AI tutor.
Biology (0510) is complete; Chemistry (0515), Physics (0580) and Human Biology (0565) are being
added and are switched on in `src/data/subjects.js` once their content is finished.

## Download (Android)

Direct download, no GitHub account needed:

**https://github.com/Angel-doc18/biolab-vr/releases/latest/download/SciAid.apk**

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
