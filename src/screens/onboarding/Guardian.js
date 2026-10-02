// Date of birth and, for students under 18, the parent or guardian who approves
// the account (Cameroon Law No. 2024/017). The server sends the parent a link by
// WhatsApp or SMS when it can; the student can always share it on WhatsApp too.
import { useState } from 'react';
import { Linking, Share } from 'react-native';
import { Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen } from '../../ui/chrome';
import { Field, PhoneField, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { nextStep } from '../../navigation/routes';
import { OnbHeader, StepBar } from './Steps';

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_FR = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

export function ageOn(year, month, at = new Date()) {
  let age = at.getFullYear() - year;
  if (at.getMonth() + 1 < month) age -= 1;
  return age;
}

export default function Guardian({ navigation, route }) {
  const { user, applyUser, prefs } = useApp();
  const L = useL();
  const fromHome = route.params?.fromHome;
  const thisYear = new Date().getFullYear();
  const [month, setMonth] = useState(user?.birthMonth || null);
  const [year, setYear] = useState(user?.birthYear ? String(user.birthYear) : '');
  const [gName, setGName] = useState(user?.guardianName || '');
  const [gPhone, setGPhone] = useState(user?.parentPhone ? user.parentPhone.replace(/^237/, '') : '');
  const [sent, setSent] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const y = Number(year);
  const validYear = /^\d{4}$/.test(year) && y >= thisYear - 80 && y <= thisYear - 8;
  const minor = validYear && month ? ageOn(y, month) < 18 : null;
  const months = prefs.lang === 'fr' ? MONTHS_FR : MONTHS_EN;

  const goOn = () => (fromHome ? navigation.goBack() : navigation.navigate(nextStep('student', 'Guardian')));

  const submit = async () => {
    if (!month || !validYear) return setError(L('Choose your birth month and type your birth year.', 'Choisissez votre mois de naissance et tapez votre année.'));
    if (minor) {
      if (gName.trim().length < 2) return setError(L('Enter your parent’s or guardian’s name.', 'Entrez le nom de votre parent ou tuteur.'));
      if (!validPhone(gPhone)) return setError(L('Enter their 9 digit number starting with 6.', 'Entrez son numéro à 9 chiffres commençant par 6.'));
      if (`237${gPhone}` === user?.phone) return setError(L('Enter your parent’s number, not your own.', 'Entrez le numéro de votre parent, pas le vôtre.'));
    }
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/me/consent', { birthYear: y, birthMonth: month, ...(minor ? { guardianName: gName.trim(), guardianPhone: `237${gPhone}` } : {}) });
      await applyUser(r.user, r.pro);
      if (r.status === 'pending') setSent({ link: r.link, via: r.sentVia, name: gName.trim(), phone: gPhone });
      else goOn();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const message = (link) =>
    L(
      `Hello, I registered on SciAid to revise for the GCE science papers. Because I am under 18 the app needs your approval. Please read what it stores and reply here: ${link}`,
      `Bonjour, je me suis inscrit(e) sur SciAid pour réviser les sciences du GCE. Comme j’ai moins de 18 ans, l’application a besoin de votre accord. Lisez ce qui est enregistré et répondez ici : ${link}`
    );
  const whatsapp = () => Linking.openURL(`https://wa.me/237${sent.phone}?text=${encodeURIComponent(message(sent.link))}`).catch(() => {});
  const share = () => Share.share({ message: message(sent.link) }).catch(() => {});

  if (sent) {
    return (
      <Screen
        header={<OnbHeader canBack={false} />}
        footer={
          <V c="px-margin pt-space-sm gap-space-xs" style={{ paddingBottom: 12 }}>
            <Cta variant="dark" icon={null} label={L('Send it on WhatsApp', 'Envoyer sur WhatsApp')} onPress={whatsapp} />
            <P c="items-center py-2" onPress={goOn} hitSlop={8}>
              <T c="font-label-md text-label-md text-on-surface-variant">{fromHome ? L('Done', 'Terminé') : L('Continue setting up', 'Continuer')}</T>
            </P>
          </V>
        }
      >
        <V c="pt-space-xl gap-space-md">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Ask your parent to approve', 'Demandez l’accord de votre parent')}</T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {sent.via
              ? `${L('We sent', 'Nous avons envoyé')} ${sent.name} ${L('a link', 'un lien')} ${sent.via === 'whatsapp' ? L('on WhatsApp', 'sur WhatsApp') : L('by SMS', 'par SMS')}. ${L('You can also send it yourself so it arrives from your number.', 'Vous pouvez aussi l’envoyer vous-même depuis votre numéro.')}`
              : `${L('Send', 'Envoyez à')} ${sent.name} ${L('the approval link. It opens a short page explaining what the app stores, with a button to approve.', 'le lien d’approbation. Il ouvre une courte page qui explique ce que l’application enregistre, avec un bouton pour approuver.')}`}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Until they approve, lessons, quizzes and practicals work and your progress stays on this phone. Saving to your account, the tutor, classes and payments start after approval.', 'En attendant, les leçons, quiz et TP fonctionnent et votre progression reste sur ce téléphone. L’enregistrement sur votre compte, le tuteur, les classes et les paiements commencent après l’accord.')}
          </T>
          <P c="self-start py-1" onPress={share} hitSlop={8}>
            <T c="font-label-md text-label-md text-primary" style={{ fontWeight: '700' }}>
              {L('Share the link another way', 'Partager le lien autrement')}
            </T>
          </P>
        </V>
      </Screen>
    );
  }

  return (
    <Screen
      keyboard
      header={<OnbHeader canBack={!fromHome || navigation.canGoBack()} />}
      footer={
        <V c="px-margin pt-space-sm" style={{ paddingBottom: 12 }}>
          <ErrorNote error={error} c="mb-space-sm" />
          <Cta variant="dark" icon={null} label={minor ? L('Send for approval', 'Envoyer pour accord') : L('Continue', 'Continuer')} loading={busy} onPress={submit} />
        </V>
      }
    >
      {!fromHome && <StepBar screen="Guardian" />}
      <V c="gap-space-xs mb-space-lg">
        <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Your date of birth', 'Votre date de naissance')}</T>
        <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
          {L('The law in Cameroon requires a parent or guardian to approve the account of anyone under 18.', 'La loi au Cameroun exige l’accord d’un parent ou tuteur pour le compte de toute personne de moins de 18 ans.')}
        </T>
      </V>

      <V c="gap-space-lg pb-space-lg">
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Month', 'Mois')}</T>
          <V c="flex-row flex-wrap gap-1.5" accessibilityRole="radiogroup">
            {months.map((m, i) => {
              const on = month === i + 1;
              return (
                <P key={m} c={`h-10 rounded-lg items-center justify-center ${on ? 'bg-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} style={{ width: '23.5%' }} onPress={() => setMonth(i + 1)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                  <T c={`font-label-md text-label-md ${on ? 'text-on-primary' : 'text-on-surface'}`}>{m}</T>
                </P>
              );
            })}
          </V>
        </V>
        <V c="gap-space-sm">
          <T c="font-label-lg text-label-lg text-on-surface">{L('Year', 'Année')}</T>
          <Input
            c="h-[52px] px-4 rounded-xl bg-surface-container-lowest border border-outline-variant text-body-lg"
            value={year}
            onChangeText={(t) => setYear(t.replace(/\D/g, '').slice(0, 4))}
            keyboardType="number-pad"
            placeholder={String(thisYear - 16)}
            maxLength={4}
          />
        </V>

        {minor && (
          <V c="gap-space-md pt-space-xs">
            <V c="gap-space-xs">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Parent or guardian', 'Parent ou tuteur')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                {L('They receive a link to a page that explains what the app stores, and approve it there. They can also approve by linking to you from their own SciAid account.', 'Il ou elle reçoit un lien vers une page qui explique ce que l’application enregistre, et l’approuve là. Il ou elle peut aussi approuver en se liant à vous depuis son propre compte SciAid.')}
              </T>
            </V>
            <Field label={L('Their full name', 'Son nom complet')} value={gName} onChangeText={setGName} autoCapitalize="words" maxLength={80} bg="bg-surface-container-lowest" />
            <PhoneField label={L('Their phone number', 'Son numéro de téléphone')} value={gPhone} onChangeText={setGPhone} bg="bg-surface-container-lowest" hint={L('Preferably the number they use on WhatsApp.', 'De préférence le numéro utilisé sur WhatsApp.')} />
          </V>
        )}
      </V>
    </Screen>
  );
}
