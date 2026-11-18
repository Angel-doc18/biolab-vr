# Putting Klass8 on Google Play: what to click and paste

Everything Google asks for is in this folder or below. Do the steps in order.
Signing in, accepting Google's declarations and pressing Publish are yours to do.

## 0. Before Play Console

1. **Upload key and GitHub secrets**: see `PLAYSTORE.md` (OpenSSL commands, then the 4 secrets
   added by the owner of the Angel-doc18 GitHub account). Tell Claude "secrets added": it then
   builds `app-release.aab` (ID `com.klass8.app`), which you download from GitHub > Actions >
   "Google Play bundle" > the run > Artifacts.
2. **Reviewer sign-in** (Google's reviewers cannot sign up, it needs a Cameroonian number). In PowerShell:

   ```
   ssh -t root@72.61.177.234 /opt/klass8-api/play-review.sh
   ```

   It prints a username (review@klass8.com) and a password once. Keep them for step 2 below.
   Run it again any time for a new password. The account is always free and is not counted in
   your figures.

## 1. Create the app

Play Console > **Create app**

| Field | Choose |
|---|---|
| App name | `Klass8: Learn, Practise, Excel` |
| Default language | English (United Kingdom) – en-GB |
| App or game | App |
| Free or paid | Free |
| Declarations | Read and accept (yours to accept) |

## 2. Dashboard > "Set up your app"

| Section | Answer |
|---|---|
| **Privacy policy** | `https://klass8.com/privacy` |
| **App access** | "All or some functionality is restricted". Add instructions: name "Student account", username and password from `play-review.sh`, instructions: *Open the app, tap "I already have an account", sign in with this email and password.* |
| **Ads** | No, my app does not contain ads |
| **Content rating** | Category **All Other App Types**. "Ratings-relevant content in the app package": **Yes**, because the biology lessons cover human reproduction (labelled diagrams), HIV and condoms, and the harm done by drugs, alcohol and tobacco. Sexuality: educational diagrams only, no photos, nothing for entertainment. Controlled substances: references only, in health lessons on their harm, never shown as good. Violence, fear, language, crude humour, gambling: **No**. Users interact or share content with other users: **No** (the tutor is not another user). Shares location: **No**. Digital purchases: **No**. Expect about 12+ / Teen |
| **Target audience** | 13 to 15, 16 to 17, 18 and over. Your decision: including under 13 puts the app under Google's Families policy, which adds requirements (for example for the AI tutor). Starting at 13 and adding younger ages later is simpler. |
| **News app** | No |
| **Data safety** | Use the answers in `PLAYSTORE.md` (section "Data safety form"). Data is encrypted in transit: Yes. Users can request deletion: Yes, deletion URL `https://klass8.com/delete-account` |
| **Account deletion** | `https://klass8.com/delete-account` (and: accounts can be deleted in the app at Me > Settings > Delete my account) |
| **Government app** | No |
| **Financial features** | My app doesn't provide any financial features |
| **Health** | My app does not have any health features |
| **App category** | Category **Education**. Tags: Education, Exam preparation, Science |
| **Contact details** | Your support email (required), phone (optional), website `https://klass8.com` |

## 3. Store listing

Grow users > Store presence > **Main store listing**: paste the English texts from `LISTING.md`,
then upload:

- App icon: `icon-512.png`
- Feature graphic: `feature-graphic-1024x500.png`
- Phone screenshots: the 6 files in `screenshots/`, in order (1 to 6)

Then **Manage translations** > add **French (France) – fr-FR** and paste the French texts.

## 4. Countries

Release > Production > **Countries / regions**: add **Cameroon** (and any others you want).
Do the same on the closed testing track.

## 5. Testing, then production

1. **Internal testing** > Create new release > upload `app-release.aab` > release name is filled in >
   release notes (below) > Save > Review release > **Start rollout**. Add yourself and the team as
   testers (their Gmail addresses) and open the opt-in link on your phones.
2. **Closed testing** > Create track (for example "Klass8 testers") > same `.aab` > add at least
   **12 testers** (Gmail addresses, or a Google Group) > Start rollout. Share the opt-in link.
   New personal developer accounts must keep **12 or more testers opted in for 14 days** before
   Google allows production.
3. After the 14 days: Dashboard > **Apply for production**, answer Google's short questions about
   the test, then create the **Production** release with the latest `.aab`.

Release notes to paste:

```
<en-GB>
First release of Klass8 on Google Play: lessons, labelled diagrams, 3D models with "Watch it work", practicals and GCE past papers, from Form 1 to Upper Sixth.
</en-GB>
<fr-FR>
Première version de Klass8 sur Google Play : leçons, schémas légendés, modèles 3D avec « Voir comment ça marche », travaux pratiques et épreuves du GCE, de la Form 1 à l'Upper Sixth.
</fr-FR>
```

## 6. The day it is public

Tell Claude. On the same day: the download buttons and QR code on klass8.com point to Google Play,
klass8.com/download goes there, the APK builds stop, and phones with the old APK are told in the
app to install Klass8 from Google Play.

## What the Play version does about payment

Nothing is sold inside it (Google's rules for education subscriptions), and it has no Invite and earn (cash earned from other people's payments); partners use klass8.com/app. Students pay with Mobile
Money at **klass8.com/app**, which can also be installed on the phone from the browser; the same
account is then unlocked in the Play app. The Play app and its listing must never tell students to
pay on the website.
