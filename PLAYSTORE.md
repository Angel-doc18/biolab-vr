# Publishing Klass8 on Google Play

What is ready in the code, and what only the owner can do.

## Ready in the code

- **Store build.** `.github/workflows/play-bundle.yml` (Actions tab, "Google Play bundle", Run workflow) builds a signed `.aab` with `EXPO_PUBLIC_STORE=play`:
  - nothing is sold inside the app, which is Play's payments policy; students unlock with a school voucher
  - each run gets a higher version code (100 + run number)
- **Android levels.** targetSdk 36, minSdk 24 (React Native 0.88 defaults), so it meets Play's current target API rule. 64-bit builds are included (arm64-v8a, x86_64). Native code is built for 16 KB memory pages.
- **Permissions.** Only CAMERA (photo of a handwritten answer for marking), POST_NOTIFICATIONS (study reminders) and RECEIVE_BOOT_COMPLETED (keep reminders after a restart). Microphone and storage are blocked. Photos are chosen with the system picker.
- **Account deletion in the app.** Me > Settings > "Delete my account" calls `DELETE /v1/me`.
- **Reporting AI answers.** The tutor's answers can be reported as wrong or harmful (`POST /v1/ai/report`), as Play's AI-generated content policy asks.
- **Error reports** (`POST /v1/app/errors`, read at `GET /v1/admin/app-errors`). They carry no personal data.
- **Privacy policy text** (Me > Legal) is up to date: own server, Groq, Fapshi, error reports.

## Only the owner can do

1. **Developer account.** Create a Google Play Console developer account (one-time fee) and verify the identity it asks for.
2. **App ID.** Decide it before the first upload, because it can never change afterwards. Today it is `com.sciaid.app`; a new one would be something like `com.klass8.app`. Tell Claude the choice so it can be changed in `app.json`.
3. **Upload key.** Make it on your own computer and keep the file and passwords safe. If they are lost, a key reset has to be requested from Google.

   ```
   keytool -genkeypair -v -keystore klass8-upload.keystore -alias klass8 -keyalg RSA -keysize 2048 -validity 10000
   ```

   Then add four repository secrets (GitHub > Settings > Secrets and variables > Actions):

   | Secret | Value |
   |---|---|
   | `KLASS8_UPLOAD_KEYSTORE` | output of `base64 -w0 klass8-upload.keystore` |
   | `KLASS8_UPLOAD_STORE_PASSWORD` | the keystore password |
   | `KLASS8_UPLOAD_KEY_ALIAS` | `klass8` |
   | `KLASS8_UPLOAD_KEY_PASSWORD` | the key password |

   Turn on Play App Signing when creating the app, so Google keeps the final signing key.
4. **Build and upload.** Run "Google Play bundle" and download the `.aab` from the run. Upload it to an internal testing track first, then closed testing.
   - New personal developer accounts must run a closed test with at least 12 testers for 14 days before production.
5. **Store listing.**
   - Title: Klass8
   - Short description: up to 80 characters
   - Full description: up to 4000 characters
   - App icon: 512 x 512 PNG
   - Feature graphic: 1024 x 500
   - At least 2 phone screenshots
   - Category: Education
   - Contact email
6. **Public pages Play asks for.** These must be web addresses outside the app, served from the public website:
   - a privacy policy URL
   - an account deletion page: how to delete in the app, plus how to ask by WhatsApp or email
7. **Data safety form.** Suggested answers:
   - **Personal info:**
     - name and phone number: required, for account management and app functionality
     - email: optional
   - **App activity:** lessons, scores and study time, for app functionality.
   - **Photos:** answer photos for marking. Processed ephemerally, not stored.
   - **App info and performance:** crash logs and diagnostics.
   - **Encryption and deletion:** data is encrypted in transit, and users can delete their data (in the app or by asking).
   - **Sharing:** no data is sold or shared for advertising. Groq, Fapshi and the SMS or WhatsApp provider are service providers working for Klass8.
   - **Ads:** the app shows none.
8. **Content rating and target audience.** Form 1 students can be under 13. If the target audience includes children under 13, the app falls under Play's Families policy:
   - no ads SDKs
   - a clear privacy policy
   - AI chat answers kept to school subjects, which the tutor already does
   - possibly extra review
   Choose the age groups honestly in the Console.
9. **Installs from the website.** The APK from klass8.ebenesaid.com is signed with a different key than the Play version. A phone with the website APK must uninstall it before installing from Play, and data saved on the account comes back after signing in. Say so in the release notes.
