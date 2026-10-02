import { useState } from 'react';
import { Linking } from 'react-native';
import { P, T, V } from '../../ui/kit';
import { Screen, StackHeader } from '../../ui/chrome';
import { useL } from '../../i18n';
import { SUPPORT_EMAIL, SUPPORT_WHATSAPP } from '../../data/plan';
import { ANATOMY_CREDIT } from '../../three/anatomy';

const UPDATED = '2 October 2026';

const TERMS = [
  ['Using SciAid', 'SciAid is a revision app for the Cameroon GCE Ordinary Level sciences: Biology, Chemistry, Physics and Human Biology. You may use it for your own study. Give accurate details when you register and keep your password private. If you are under 18, a parent or guardian must approve your account before your progress is stored on our servers or you use the tutor.'],
  ['Content', 'Lessons, diagrams, questions, mark schemes and practicals were written for this app to follow the GCE syllabuses. They are not official GCE Board papers, and grades shown in the app are practice estimates, not exam results. The 3D anatomy models are based on BodyParts3D (credit below); the molecule, apparatus and other models are drawn for this app.'],
  ['AI tutor and marking', 'The tutor and answer marking are produced by an AI system. They can contain mistakes. Check important facts against your lessons and your teacher, and use "Report" on any answer that is wrong or inappropriate. Do not include other people’s personal information in questions or photos.'],
  ['Full course and payments', 'The full course is a one-off pass for a fixed number of days, paid by MTN Mobile Money or Orange Money through our payment provider, Fapshi. Passes do not renew automatically. If a payment fails, no days are added. Contact support within 14 days if you were charged but the course did not open.'],
  ['School codes and vouchers', 'Class codes and licence vouchers are issued by schools and teachers. A voucher can be used once per account and cannot be exchanged for money.'],
  ['Fair use', 'Do not copy the app, interfere with our servers, share accounts, or use automated tools against the service. Daily limits on tutor questions and marking apply. We may suspend accounts that break these terms.'],
  ['Changes', 'We may update the app and these terms. Important changes are shown in the app.'],
];

const PRIVACY = [
  ['Who is responsible', 'SciAid processes your personal data under Cameroon Law No. 2024/017 on personal data protection.'],
  ['What we collect', 'Your name, phone number, optional email, role (student, parent or teacher), school, class, exam year, the subjects you take and study preferences. For students under 18 we also keep the birth month and year and the parent or guardian’s name and phone number, with the record of their approval. For students we store the study record: lessons read, quiz and paper scores, practicals completed and study minutes. Drawings and tutor conversations stay on your phone.'],
  ['Parents and guardians', 'Students under 18 need a parent’s or guardian’s approval. Until it is given, progress stays on the phone and the tutor, classes and payments are off. A parent can approve from the link we send, or by linking to the child from a parent account, and can withdraw approval at any time by contacting us.'],
  ['Why we use it', 'To sign you in, keep progress safe across phones, show progress to a teacher whose class you joined or a parent you linked, send codes and alerts you turn on, mark answers, and process payments.'],
  ['Who processes it', 'Cloudflare hosts the app’s server and database. Groq runs the AI tutor and marking: only the question, answer or photo is sent, never your name or phone number, and marking photos are not stored. Fapshi handles mobile money payments. WhatsApp (Meta) or an SMS provider delivers codes and messages. Some of these servers are outside Cameroon.'],
  ['Sharing', 'We do not sell data and the app shows no advertising. Teachers see progress summaries of students in their classes. Linked parents see their child’s progress report.'],
  ['Security', 'Passwords are stored as salted hashes, never in plain text. Your session is kept in the phone’s secure storage and all traffic is encrypted.'],
  ['Your rights', 'You can see and correct your details in Settings, turn off saving progress to your account in Downloads and storage, and delete your account in Settings, which removes your personal data from our servers. You can ask us for a copy of your data or object to its use by contacting support.'],
];

export default function Legal({ route }) {
  const L = useL();
  const [doc, setDoc] = useState(route.params?.doc || 'help');
  const docs = { terms: TERMS, privacy: PRIVACY };

  const HELP = [
    [L('Lessons', 'Leçons'), L('Read lessons unit by unit, or press Listen to hear them. Mastery grows as you read lessons and improve your quiz scores.', 'Lisez les leçons unité par unité, ou appuyez sur Écouter. La maîtrise progresse avec les leçons lues et les scores aux quiz.')],
    [L('3D models', 'Modèles 3D'), L('Drag to turn a model, pinch to zoom and tap the numbers. "See inside" makes the other parts see-through. On Android, "View in your room" opens the model in augmented reality. Each model downloads once, then opens without data.', 'Glissez pour tourner, pincez pour zoomer et touchez les numéros. « Voir dedans » rend les autres parties transparentes. Sur Android, « Voir dans votre pièce » ouvre le modèle en réalité augmentée. Chaque modèle se télécharge une fois.')],
    [L('Practicals', 'Travaux pratiques'), L('Change the condition, move the time slider and compare the results, then record your observation in the lab workbook.', 'Changez la condition, déplacez le curseur de temps, comparez, puis notez votre observation dans le cahier.')],
    [L('Papers', 'Épreuves'), L('Paper 1 is 50 questions in 1 hour 30 minutes, marked at once. Paper 2 is 2 hours in two sections, marked against a mark scheme.', 'L’épreuve 1 compte 50 questions en 1 h 30, corrigées tout de suite. L’épreuve 2 dure 2 heures en deux sections, corrigée selon un barème.')],
    [L('Without data', 'Sans données'), L('Lessons, quizzes, papers, practicals and downloaded 3D models work without a connection. The tutor, marking and saving to your account need one.', 'Leçons, quiz, épreuves, TP et modèles 3D téléchargés marchent sans connexion. Le tuteur, la correction et l’enregistrement sur le compte en ont besoin.')],
  ];

  return (
    <Screen header={<StackHeader title={L('Help and legal', 'Aide et mentions')} avatar={false} />}>
      <V c="pt-space-md pb-space-xl gap-space-md">
        <V c="flex-row border-b border-surface-container">
          {[
            ['help', L('Help', 'Aide')],
            ['terms', L('Terms', 'Conditions')],
            ['privacy', L('Privacy', 'Confidentialité')],
          ].map(([id, label]) => (
            <P key={id} c={`flex-1 pb-2 items-center ${doc === id ? 'border-b-2 border-primary-container' : ''}`} scale={1} onPress={() => setDoc(id)} accessibilityRole="tab" accessibilityState={{ selected: doc === id }}>
              <T c={`font-label-lg text-label-lg ${doc === id ? 'text-on-surface' : 'text-on-surface-variant'}`} style={{ fontWeight: doc === id ? '700' : '500' }}>
                {label}
              </T>
            </P>
          ))}
        </V>

        {doc === 'help' ? (
          <V c="gap-space-md">
            {HELP.map(([title, body]) => (
              <V key={title} c="gap-1">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {title}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {body}
                </T>
              </V>
            ))}
            {(SUPPORT_WHATSAPP || SUPPORT_EMAIL) && (
              <V c="gap-space-xs pt-space-sm">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Contact support', 'Contacter le support')}
                </T>
                {!!SUPPORT_WHATSAPP && (
                  <P c="h-11 rounded-lg bg-surface-container-low px-space-md justify-center" onPress={() => Linking.openURL(`https://wa.me/${SUPPORT_WHATSAPP.replace(/\D/g, '')}`)}>
                    <T c="font-label-lg text-label-lg text-on-surface">WhatsApp: {SUPPORT_WHATSAPP}</T>
                  </P>
                )}
                {!!SUPPORT_EMAIL && (
                  <P c="h-11 rounded-lg bg-surface-container-low px-space-md justify-center" onPress={() => Linking.openURL(`mailto:${SUPPORT_EMAIL}`)}>
                    <T c="font-label-lg text-label-lg text-on-surface">{SUPPORT_EMAIL}</T>
                  </P>
                )}
              </V>
            )}
            <V c="gap-1 pt-space-sm">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('Credits', 'Crédits')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                {ANATOMY_CREDIT} (https://creativecommons.org/licenses/by-sa/2.1/jp/)
              </T>
            </V>
          </V>
        ) : (
          <V c="gap-space-md">
            <V c="gap-1">
              <T c="font-headline-lg text-headline-lg text-on-surface">{doc === 'terms' ? L('Terms of Service', 'Conditions d’utilisation') : L('Privacy Policy', 'Politique de confidentialité')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {L('Last updated', 'Mise à jour')}: {UPDATED}
              </T>
            </V>
            {docs[doc].map(([h, p]) => (
              <V key={h} c="gap-1">
                <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                  {h}
                </T>
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
