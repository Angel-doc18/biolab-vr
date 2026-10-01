import { useState } from 'react';
import { Linking } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { SUPPORT_EMAIL, SUPPORT_WHATSAPP } from '../../data/plan';

const UPDATED = '30 September 2026';

const TERMS = [
  ['Using BioSpatial VR', 'BioSpatial VR is a revision app for Cameroon GCE Ordinary Level Biology. You may use it for your own study. You must give accurate details when you register and keep your password private. If you are under 18, use the app with the knowledge of a parent or guardian.'],
  ['Content', 'Lessons, questions, mark schemes, 3D models and practicals were written for this app to follow the GCE syllabus. They are not official GCE Board papers, and grades shown in the app are practice estimates, not exam results.'],
  ['AI tutor and marking', 'Dr. Nkwenti is an AI system. Its answers and marks can contain mistakes. Always check important facts against your lessons and your teacher. Do not submit other people’s personal information in questions or photos.'],
  ['Premium and payments', 'Premium is a one-off pass for a fixed number of days. Payments are made by MTN Mobile Money or Orange Money through our payment provider. Passes do not renew automatically. If a payment fails, no Premium time is added. Contact support within 14 days if you were charged but did not receive Premium.'],
  ['School codes and vouchers', 'Class codes and licence vouchers are issued by schools and teachers. Vouchers are single use per account and cannot be exchanged for money.'],
  ['Fair use', 'Do not attempt to copy the app, interfere with our servers, share accounts, or use automated tools against the service. We may suspend accounts that break these terms.'],
  ['Changes', 'We may update the app and these terms. Important changes will be shown in the app.'],
];

const PRIVACY = [
  ['What we collect', 'Your name, phone number, optional email, your role (student, parent or teacher), school, class and study preferences. For students we store your study record: lessons read, quiz and mock scores, practicals completed, streak and study minutes. Drawings and chat history stay on your phone.'],
  ['Why we use it', 'To sign you in, keep your progress safe across phones, show your progress to a teacher whose class you joined or a parent you linked, send SMS codes and alerts you turn on, and process Premium payments.'],
  ['AI features', 'Questions you ask the tutor, and answers or photos you submit for marking, are sent securely to our AI provider to generate a reply. We do not use them to build profiles or for advertising. Marking photos are not stored on our servers.'],
  ['Sharing', 'We do not sell your data. We share only what is needed with service providers: the AI provider, the SMS provider for codes and alerts, and the payment provider for mobile money. Teachers see progress summaries of students in their classes. Linked parents see their child’s progress report.'],
  ['Security', 'Passwords are stored as salted hashes, never in plain text. Your session is kept in the phone’s secure storage and all traffic is encrypted. Only the minimum data needed is sent to our servers.'],
  ['Your choices', 'You can turn off progress backup in the Offline manager, change report and alert settings, or delete your account in Account and security. Deleting your account removes your progress, notifications, class memberships and parent links.'],
];

export default function Legal({ route }) {
  const L = useL();
  const [doc, setDoc] = useState(route.params?.doc || 'help');
  const docs = { terms: TERMS, privacy: PRIVACY };

  return (
    <Screen header={<StackHeader title={L('Help and legal', 'Aide et mentions')} avatar={false} />}>
      <V c="pt-space-md pb-space-xl gap-space-md">
        <V c="flex-row p-1 bg-surface-container rounded-xl gap-1">
          {[
            ['help', L('Help', 'Aide')],
            ['terms', L('Terms', 'Conditions')],
            ['privacy', L('Privacy', 'Confidentialité')],
          ].map(([id, label]) => (
            <P key={id} c={`flex-1 py-2 rounded-lg items-center ${doc === id ? 'bg-surface-container-lowest shadow-sm' : ''}`} onPress={() => setDoc(id)}>
              <T c={`font-label-md text-label-md ${doc === id ? 'text-primary' : 'text-on-surface-variant'}`}>{label}</T>
            </P>
          ))}
        </V>

        {doc === 'help' ? (
          <V c="gap-space-md">
            {[
              ['menu_book', L('Learn', 'Cours'), L('Read lessons unit by unit. Tap play to hear Dr. Nkwenti read them aloud. Your mastery grows as you read lessons and improve your quiz score.', 'Lisez les leçons unité par unité. Touchez lecture pour les écouter.')],
              ['view_in_ar', L('3D and VR', '3D et VR'), L('Swipe to rotate a model, pinch to zoom and tap the numbered pins. VR mode splits the screen for a cardboard viewer.', 'Glissez pour tourner, pincez pour zoomer. Le mode VR divise l’écran.')],
              ['biotech', L('Lab', 'Labo'), L('Change the solution or condition, move the time slider and compare the two microscopes, then record your observation in the workbook.', 'Changez la condition, déplacez le curseur et notez vos observations.')],
              ['assignment', L('Exams', 'Examens'), L('Paper 1 is timed and marked instantly. Paper 2 is marked against a mark scheme. Results show which unit to revise next.', 'L’épreuve 1 est chronométrée. L’épreuve 2 suit un barème.')],
              ['wifi_off', L('Offline', 'Hors ligne'), L('After you sign in once, lessons, 3D models, labs and practice questions work without internet. The AI tutor and marking need a connection.', 'Après une connexion, tout fonctionne hors ligne sauf l’IA.')],
            ].map(([icon, title, body]) => (
              <V key={title} c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex-row gap-space-sm">
                <V c="w-10 h-10 rounded-xl bg-surface-container-low items-center justify-center">
                  <Ic n={icon} s={22} c="primary-container" />
                </V>
                <V c="flex-1 gap-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface">{title}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 18 }}>
                    {body}
                  </T>
                </V>
              </V>
            ))}
            {(SUPPORT_WHATSAPP || SUPPORT_EMAIL) && (
              <V c="bg-surface-container-low rounded-xl p-space-md gap-space-sm">
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Contact support', 'Contacter le support')}</T>
                {!!SUPPORT_WHATSAPP && (
                  <P c="h-11 rounded-xl bg-secondary flex-row items-center justify-center gap-2" onPress={() => Linking.openURL(`https://wa.me/${SUPPORT_WHATSAPP.replace(/\D/g, '')}`)}>
                    <Ic n="chat" s={18} c="on-secondary" />
                    <T c="font-label-lg text-label-lg text-on-secondary">WhatsApp</T>
                  </P>
                )}
                {!!SUPPORT_EMAIL && (
                  <P c="h-11 rounded-xl bg-surface-container-lowest flex-row items-center justify-center gap-2" onPress={() => Linking.openURL(`mailto:${SUPPORT_EMAIL}`)}>
                    <Ic n="mail" s={18} c="primary" />
                    <T c="font-label-lg text-label-lg text-primary">{SUPPORT_EMAIL}</T>
                  </P>
                )}
              </V>
            )}
          </V>
        ) : (
          <V c="gap-space-md">
            <T c="font-headline-lg text-headline-lg text-on-surface">{doc === 'terms' ? L('Terms of Service', 'Conditions d’utilisation') : L('Privacy Policy', 'Politique de confidentialité')}</T>
            <T c="font-label-sm text-label-sm text-on-surface-variant">
              {L('Last updated', 'Mise à jour')}: {UPDATED}
            </T>
            {docs[doc].map(([h, p]) => (
              <V key={h} c="gap-1">
                <T c="font-headline-sm text-headline-sm text-on-surface">{h}</T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {p}
                </T>
              </V>
            ))}
          </V>
        )}
      </V>
    </Screen>
  );
}
