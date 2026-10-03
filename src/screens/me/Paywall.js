import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { OPEN_FOR_TESTING, PLANS as LOCAL_PLANS, fcfa } from '../../data/plan';

// Builds published on Google Play sell nothing inside the app (Play's payments
// policy); students there unlock the course with a voucher from their school.
const STORE_BUILD = process.env.EXPO_PUBLIC_STORE === 'play';

const PROVIDERS = [
  { id: 'mobile money', name: 'MTN MoMo', ussd: '*126#', prefix: '67X, 68X, 650 to 654' },
  { id: 'orange money', name: 'Orange Money', ussd: '#150#', prefix: '69X, 655 to 659' },
];

// Cameroon mobile numbers: MTN 67/68/650-654, Orange 69/655-659.
export function operatorFor(d) {
  if (/^6(7|8)\d{7}$/.test(d) || /^65[0-4]\d{6}$/.test(d)) return 'mobile money';
  if (/^69\d{7}$/.test(d) || /^65[5-9]\d{6}$/.test(d)) return 'orange money';
  return null;
}

function Compare({ title, free, full }) {
  return (
    <V c="flex-row gap-space-sm py-2 border-t border-surface-container">
      <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ fontWeight: '600' }}>
        {title}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ width: '28%' }}>
        {free}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface" style={{ width: '28%' }}>
        {full}
      </T>
    </V>
  );
}

export default function Paywall({ navigation, route }) {
  const { user, pro, refreshMe, refreshQuota } = useApp();
  const L = useL();
  const [plans, setPlans] = useState(null);
  const [open, setOpen] = useState(true);
  const [plan, setPlan] = useState('year');
  const [provider, setProvider] = useState('mobile money');
  const [phone, setPhone] = useState(user?.phone ? user.phone.replace(/^237/, '') : '');
  const [voucher, setVoucher] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null); // { id, status, amount }
  const [licence, setLicence] = useState(false);
  const [toast, showToast] = useToast();
  const poll = useRef(null);

  useEffect(() => {
    get('/v1/billing/plans', { auth: false })
      .then((r) => {
        setPlans(r.plans);
        setOpen(r.paymentsOpen);
      })
      .catch(() => setPlans(null));
    const op = operatorFor(phone);
    if (op) setProvider(op);
    return () => clearTimeout(poll.current);
  }, []);

  const P_ = plans || Object.fromEntries(Object.entries(LOCAL_PLANS).map(([k, v]) => [k, { amount: v.amount, days: v.days }]));
  const amount = P_[plan]?.amount;
  const reason = route.params?.reason;
  const prov = PROVIDERS.find((p) => p.id === provider);

  const check = async (id, tries = 0) => {
    try {
      const r = await get(`/v1/billing/payments/${id}`);
      setPayment((p) => ({ ...p, status: r.payment.status }));
      if (r.payment.status === 'SUCCESSFUL') {
        await refreshMe();
        refreshQuota();
        return;
      }
      if (['FAILED', 'EXPIRED', 'REVIEW'].includes(r.payment.status)) return;
    } catch (e) {
      if (e.code !== 'rate_limited' && e.code !== 'offline') {
        setPayment((p) => ({ ...p, error: e.message }));
        return;
      }
    }
    if (tries < 40) poll.current = setTimeout(() => check(id, tries + 1), 6000);
    else setPayment((p) => ({ ...p, status: 'TIMEOUT' }));
  };

  const pay = async () => {
    const d = phone.replace(/\D/g, '');
    if (!/^6\d{8}$/.test(d)) return setError(L('Enter your 9 digit mobile money number.', 'Entrez votre numéro mobile money (9 chiffres).'));
    const op = operatorFor(d);
    if (op && op !== provider) return setError(L('This number belongs to the other network. Choose the matching one.', 'Ce numéro appartient à l’autre réseau. Choisissez le bon.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/billing/pay', { plan, phone: `237${d}`, medium: provider });
      setPayment({ id: r.payment.id, status: 'PENDING', amount: r.payment.amount });
      poll.current = setTimeout(() => check(r.payment.id), 8000);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const redeem = async () => {
    const code = voucher.trim().toUpperCase();
    if (code.replace(/[^A-Z0-9]/g, '').length < 12) return setError(L('Voucher codes have 12 characters.', 'Les codes ont 12 caractères.'));
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/billing/redeem', { code });
      await refreshMe();
      refreshQuota();
      setVoucher('');
      showToast(`${r.label || L('Voucher', 'Code')} ${L('applied. The full course is unlocked.', 'appliqué. Le cours complet est débloqué.')}`);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const until = user?.proUntil ? new Date(user.proUntil).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : null;
  const intro = pro && until
    ? `${L('Your full course runs until', 'Votre cours complet court jusqu’au')} ${until}. ${L('Another pass adds its days to this date.', 'Un autre pass ajoute ses jours à cette date.')}`
    : pro
    ? L('Everything is open while ScienceAid is being tested, so you do not need a pass yet.', 'Tout est ouvert pendant les tests de ScienceAid, vous n’avez donc pas encore besoin d’un pass.')
    : reason === 'mocks'
    ? L('You have used this week’s free Paper 1. The full course has no weekly limit.', 'Vous avez utilisé l’épreuve 1 gratuite de la semaine. Le cours complet n’a pas de limite.')
    : reason === 'mark' || reason === 'ai'
    ? L('Answer marking and more tutor questions each day come with the full course.', 'La correction des réponses et plus de questions au tuteur viennent avec le cours complet.')
    : L('Every unit and practical in Biology, Chemistry, Physics and Human Biology, unlimited papers and answer marking. One pass covers all four.', 'Toutes les unités et tous les TP en biologie, chimie, physique et biologie humaine, des épreuves illimitées et la correction des réponses. Un seul pass couvre les quatre.');

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader close title={L('Full course', 'Cours complet')} avatar={false} />}>
        <V c="pb-space-xl gap-space-lg pt-space-md">
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{pro ? L('You have the full course', 'Vous avez le cours complet') : L('The full ScienceAid course', 'Le cours complet ScienceAid')}</T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {intro}
            </T>
          </V>

          <V c="bg-surface-container-lowest rounded-xl px-space-md pb-space-xs pt-space-sm shadow-sm">
            <V c="flex-row gap-space-sm pb-2">
              <V c="flex-1" />
              <T c="font-label-md text-label-md text-on-surface-variant" style={{ width: '28%' }}>
                {L('Free', 'Gratuit')}
              </T>
              <T c="font-label-md text-label-md text-on-surface" style={{ width: '28%', fontWeight: '700' }}>
                {L('Full course', 'Complet')}
              </T>
            </V>
            <Compare title={L('Units', 'Unités')} free={L('1 to 3 in each subject, and first lessons', '1 à 3 par matière, et premières leçons')} full={L('All, in all four subjects', 'Toutes, dans les quatre matières')} />
            <Compare title={L('Practicals', 'TP')} free={L('2 in each subject', '2 par matière')} full={L('All', 'Tous')} />
            <Compare title={L('Paper 1', 'Épreuve 1')} free={L('1 a week in each subject', '1 par semaine et par matière')} full={L('Unlimited', 'Illimitée')} />
            <Compare title={L('Paper 2 marking', 'Correction épreuve 2')} free={L('Yourself', 'Vous-même')} full={L('By the app', 'Par l’application')} />
            <Compare title={L('Tutor questions', 'Questions au tuteur')} free={L('5 a day', '5 par jour')} full={L('30 a day', '30 par jour')} />
            <Compare title={L('Answer marking', 'Correction de réponses')} free="-" full={L('30 typed and 6 photos a day', '30 tapées et 6 photos par jour')} />
          </V>

          {!STORE_BUILD && !OPEN_FOR_TESTING && (
            <V c="gap-space-sm">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Choose a pass', 'Choisissez un pass')}
              </T>
              {[
                ['year', L('School year pass', 'Pass année scolaire'), L('Until your exam season', 'Jusqu’à la session d’examen')],
                ['term', L('Term pass', 'Pass trimestre'), L('About one school term', 'Environ un trimestre')],
              ].map(([id, name, sub]) => {
                const on = plan === id;
                const p = P_[id];
                return (
                  <P key={id} c={`rounded-xl p-space-md flex-row items-center gap-space-sm ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setPlan(id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                    <V c="flex-1 gap-0.5">
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                        {name}
                      </T>
                      <T c="font-body-sm text-body-sm text-on-surface-variant">
                        {sub}, {p?.days} {L('days', 'jours')}. {L('Paid once, no automatic renewal.', 'Payé une fois, sans renouvellement.')}
                      </T>
                    </V>
                    <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                      {p ? fcfa(p.amount) : '-'}
                    </T>
                  </P>
                );
              })}

              <T c="font-label-lg text-label-lg text-on-surface pt-space-sm" style={{ fontWeight: '700' }}>
                {L('Pay with mobile money', 'Payer par mobile money')}
              </T>
              <V c="flex-row gap-space-xs">
                {PROVIDERS.map((p) => {
                  const on = provider === p.id;
                  return (
                    <P key={p.id} c={`flex-1 h-12 items-center justify-center rounded-xl ${on ? 'bg-surface-container-low border-2 border-primary-container' : 'bg-surface-container-lowest border border-outline-variant'}`} onPress={() => setProvider(p.id)} accessibilityRole="radio" accessibilityState={{ checked: on }}>
                      <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: on ? '700' : '500' }}>
                        {p.name}
                      </T>
                    </P>
                  );
                })}
              </V>
              <V c="flex-row items-center h-[52px] rounded-xl bg-surface-container-lowest border border-outline-variant overflow-hidden">
                <V c="h-full px-3.5 justify-center bg-surface-container">
                  <T c="font-label-md text-label-md text-on-surface" style={{ fontWeight: '700' }}>
                    +237
                  </T>
                </V>
                <Input
                  c="flex-1 h-full px-3.5 text-body-lg"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={(t) => {
                    const d = t.replace(/\D/g, '').replace(/^237/, '').slice(0, 9);
                    setPhone(d);
                    const op = operatorFor(d);
                    if (op) setProvider(op);
                  }}
                  placeholder={provider === 'orange money' ? '690 12 34 56' : '670 12 34 56'}
                  maxLength={9}
                />
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                {L('A payment request appears on this phone. Approve it there with your PIN; never type your PIN in this app. Payments are handled by Fapshi.', 'Une demande de paiement apparaît sur ce téléphone. Validez-la avec votre code PIN ; ne tapez jamais votre PIN dans l’application. Paiements traités par Fapshi.')}
              </T>
              {!open && <T c="font-body-sm text-body-sm text-error">{L('Mobile money payments are not open yet. A school voucher works now.', 'Les paiements mobile money ne sont pas encore ouverts. Un code d’école fonctionne déjà.')}</T>}
              <ErrorNote error={error} />
              <Cta variant="dark" icon={null} label={`${L('Pay', 'Payer')} ${amount ? fcfa(amount) : ''}`} loading={busy && !voucher} disabled={!open} onPress={pay} />
            </V>
          )}

          {!OPEN_FOR_TESTING && (
          <V c="gap-space-sm">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Voucher from your school', 'Code de votre école')}
            </T>
            <V c="flex-row items-center gap-2">
              <Input
                c="flex-1 h-12 bg-surface-container-lowest border border-outline-variant px-3 rounded-lg font-label-md text-label-md tracking-wider"
                placeholder="XXXX-XXXX-XXXX"
                value={voucher}
                onChangeText={(t) => setVoucher(t.toUpperCase().replace(/[^A-Z0-9-]/g, ''))}
                autoCapitalize="characters"
                maxLength={14}
              />
              <P c="h-12 px-4 rounded-lg bg-surface-container items-center justify-center" onPress={redeem} disabled={busy}>
                <T c="font-label-md text-label-md text-on-surface">{L('Apply', 'Appliquer')}</T>
              </P>
            </V>
            {STORE_BUILD && <ErrorNote error={error} />}
          </V>
          )}

          <P c="flex-row items-center justify-between gap-space-sm py-space-xs" onPress={() => setLicence(true)}>
            <V c="flex-1 gap-0.5">
              <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                {L('For a whole class or school', 'Pour une classe ou une école')}
              </T>
              <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Request a school licence and we will contact you.', 'Demandez une licence d’école et nous vous contacterons.')}</T>
            </V>
            <Ic n="chevron_right" s={20} c="outline" />
          </P>
        </V>
      </Screen>

      <Modal visible={!!payment} transparent animationType="slide" onRequestClose={() => payment?.status !== 'PENDING' && setPayment(null)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-md">
            {payment?.status === 'SUCCESSFUL' ? (
              <>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Payment received', 'Paiement reçu')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant">{L('The full course is now open on your account, on any phone you log in to.', 'Le cours complet est ouvert sur votre compte, sur tout téléphone où vous vous connectez.')}</T>
                <Cta variant="dark" icon={null} label={L('Continue', 'Continuer')} onPress={() => (setPayment(null), navigation.goBack())} />
              </>
            ) : payment?.status === 'PENDING' ? (
              <>
                <ActivityIndicator size="large" color={C['primary-container']} />
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Approve the payment on your phone', 'Validez le paiement sur votre téléphone')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {L('A request for', 'Une demande de')} {fcfa(payment.amount)} {L('was sent to', 'a été envoyée au')} +237 {phone}. {L('If it does not appear, dial', 'Si elle n’apparaît pas, composez le')} {prov.ussd} {L('to see pending approvals. This screen updates by itself.', 'pour voir les validations en attente. Cet écran se met à jour seul.')}
                </T>
              </>
            ) : (
              <>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {payment?.status === 'REVIEW' ? L('Payment under review', 'Paiement en vérification') : payment?.status === 'TIMEOUT' ? L('Still waiting for confirmation', 'Toujours en attente de confirmation') : L('Payment not completed', 'Paiement non abouti')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {payment?.error ||
                    (payment?.status === 'TIMEOUT'
                      ? L('If you approved it, the course opens by itself once the confirmation arrives.', 'Si vous l’avez validé, le cours s’ouvrira dès réception de la confirmation.')
                      : payment?.status === 'REVIEW'
                      ? L('The amount received did not match. Contact support with your payment reference.', 'Le montant reçu ne correspond pas. Contactez le support avec votre référence.')
                      : L('It was declined or expired, and no money was taken. You can try again.', 'Il a été refusé ou a expiré, et aucun argent n’a été pris. Vous pouvez réessayer.'))}
                </T>
                <Cta variant="soft" icon={null} label={L('Close', 'Fermer')} onPress={() => setPayment(null)} />
              </>
            )}
          </V>
        </V>
      </Modal>

      {licence && <LicenceSheet onClose={() => setLicence(false)} onSent={() => (setLicence(false), showToast(L('Request sent. We will contact you.', 'Demande envoyée. Nous vous contacterons.')))} L={L} user={user} />}
      {toast}
    </V>
  );
}

function LicenceSheet({ onClose, onSent, L, user }) {
  const [school, setSchool] = useState(user?.schoolName || '');
  const [students, setStudents] = useState('');
  const [contact, setContact] = useState(user?.phone ? `+${user.phone}` : '');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const send = async () => {
    setBusy(true);
    setError(null);
    try {
      await post('/v1/billing/licence-request', { schoolName: school.trim(), students: parseInt(students, 10), contact: contact.trim(), message: message.trim() || undefined });
      onSent();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Modal visible transparent animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
        <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-sm">
          <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
            {L('School licence request', 'Demande de licence d’école')}
          </T>
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('School name', 'Nom de l’école')} value={school} onChangeText={setSchool} maxLength={120} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Number of students', 'Nombre d’élèves')} value={students} onChangeText={(t) => setStudents(t.replace(/\D/g, ''))} keyboardType="number-pad" maxLength={4} />
          <Input c="h-12 px-3 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Phone or email to reach you', 'Téléphone ou e-mail')} value={contact} onChangeText={setContact} maxLength={120} />
          <Input c="h-20 px-3 py-2 rounded-lg bg-surface-container-low text-body-md" placeholder={L('Anything else (optional)', 'Autre chose (facultatif)')} value={message} onChangeText={setMessage} multiline maxLength={500} />
          <ErrorNote error={error} />
          <Cta variant="dark" icon={null} label={L('Send request', 'Envoyer la demande')} loading={busy} onPress={send} />
          <P c="items-center py-2" onPress={onClose}>
            <T c="font-label-md text-label-md text-on-surface-variant">{L('Cancel', 'Annuler')}</T>
          </P>
        </V>
      </V>
    </Modal>
  );
}
