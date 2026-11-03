import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, AppState, Linking, Modal, Platform } from 'react-native';
import { C, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { PLANS as LOCAL_PLANS, fcfa } from '../../data/plan';
import { NeedsInternet } from '../../ui/Offline';

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

function Included({ text }) {
  return (
    <V c="flex-row items-start gap-space-sm py-1.5">
      <Ic n="check_circle" s={18} c="primary-container" />
      <T c="font-body-sm text-body-sm text-on-surface flex-1" style={{ lineHeight: 20 }}>
        {text}
      </T>
    </V>
  );
}

const longDate = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// The platform charges. With route.params.gate it is the only screen a student
// whose free month has ended can use (see AppNavigator), so it has no way back.
export default function Paywall({ navigation, route }) {
  const { user, pro, refreshMe, refreshQuota, logout } = useApp();
  const gate = !!route.params?.gate;
  const L = useL();
  const [plans, setPlans] = useState(null);
  const [open, setOpen] = useState(true);
  // From the server: whether the course is charged for yet, and how Fapshi
  // takes the money ('prompt' on the phone, or 'link' to its payment page).
  const [paywall, setPaywall] = useState(!pro);
  const [checkout, setCheckout] = useState('link');
  const [plan, setPlan] = useState('year');
  const [provider, setProvider] = useState('mobile money');
  const [phone, setPhone] = useState(user?.phone ? user.phone.replace(/^237/, '') : '');
  const [voucher, setVoucher] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null); // { id, status, amount, link }
  const [licence, setLicence] = useState(false);
  const [toast, showToast] = useToast();
  const poll = useRef(null);

  useEffect(() => {
    get('/v1/billing/plans', { auth: false })
      .then((r) => {
        setPlans(r.plans);
        setOpen(r.paymentsOpen);
        setPaywall(r.paywall !== false);
        setCheckout(r.checkout === 'prompt' ? 'prompt' : 'link');
      })
      .catch(() => setPlans(null));
    const op = operatorFor(phone);
    if (op) setProvider(op);
    return () => clearTimeout(poll.current);
  }, []);

  const P_ = plans || Object.fromEntries(Object.entries(LOCAL_PLANS).map(([k, v]) => [k, { amount: v.amount, days: v.days }]));
  const amount = P_[plan]?.amount;
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
    // About 4 minutes for a request on the phone, 15 on the payment page.
    if (tries < (checkout === 'link' ? 150 : 40)) poll.current = setTimeout(() => check(id, tries + 1), 6000);
    else setPayment((p) => ({ ...p, status: 'TIMEOUT' }));
  };

  // Back from Fapshi's payment page (or from approving on the phone): look at
  // once instead of waiting for the next check.
  const pendingId = payment?.status === 'PENDING' ? payment.id : null;
  const latestCheck = useRef(check);
  useEffect(() => {
    latestCheck.current = check;
  });
  useEffect(() => {
    if (!pendingId) return undefined;
    const sub = AppState.addEventListener('change', (s) => {
      if (s !== 'active') return;
      clearTimeout(poll.current);
      latestCheck.current(pendingId);
    });
    return () => sub.remove();
  }, [pendingId]);

  const openPage = (link) => Linking.openURL(link).catch(() => setError(L('The payment page could not be opened. Try again.', 'La page de paiement n’a pas pu s’ouvrir. Réessayez.')));

  const pay = async () => {
    const d = phone.replace(/\D/g, '');
    if (checkout === 'prompt') {
      if (!/^6\d{8}$/.test(d)) return setError(L('Enter your 9 digit mobile money number.', 'Entrez votre numéro mobile money (9 chiffres).'));
      const op = operatorFor(d);
      if (op && op !== provider) return setError(L('This number belongs to the other network. Choose the matching one.', 'Ce numéro appartient à l’autre réseau. Choisissez le bon.'));
    }
    setBusy(true);
    setError(null);
    try {
      const body = checkout === 'prompt' ? { plan, phone: `237${d}`, medium: provider } : { plan };
      const r = await post('/v1/billing/pay', body);
      const link = r.payment.link || null;
      setPayment({ id: r.payment.id, status: 'PENDING', amount: r.payment.amount, link });
      // A browser only opens a new tab straight from a tap, so on the web the
      // student taps "Open the payment page" in the next sheet.
      if (link && Platform.OS !== 'web') openPage(link);
      poll.current = setTimeout(() => check(r.payment.id), 8000);
    } catch (e) {
      setError(
        e.code === 'payment_timeout'
          ? L('The payment service did not answer. If a payment request appears on your phone, approve it: the course opens by itself once it is confirmed.', 'Le service de paiement n’a pas répondu. Si une demande apparaît sur votre téléphone, validez-la : le cours s’ouvrira dès sa confirmation.')
          : e
      );
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
      showToast(`${r.label || L('Code', 'Code')} ${L('applied. Klass8 is open.', 'appliqué. Klass8 est ouvert.')}`);
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };

  const now = Date.now();
  const paidUntil = user?.proUntil && user.proUntil > now ? user.proUntil : null;
  const trialUntil = user?.trialUntil && user.trialUntil > now ? user.trialUntil : null;
  const intro = !paywall && pro
    ? L('Everything is open while Klass8 is being tested, so you do not need to pay yet.', 'Tout est ouvert pendant les tests de Klass8, vous n’avez donc pas encore besoin de payer.')
    : paidUntil
    ? `${L('Klass8 is open on your account until', 'Klass8 est ouvert sur votre compte jusqu’au')} ${longDate(paidUntil)}. ${L('Paying again adds the days to this date.', 'Un nouveau paiement ajoute ses jours à cette date.')}`
    : trialUntil
    ? `${L('Your free month runs until', 'Votre mois gratuit court jusqu’au')} ${longDate(trialUntil)}. ${L('A year paid now counts from the day you joined, with the free month as its first month, so it runs until', 'Une année payée maintenant compte depuis votre inscription, le mois gratuit étant son premier mois : elle court jusqu’au')} ${longDate(user.createdAt + 365 * 86_400_000)}. ${L('A month paid now starts when the free month ends.', 'Un mois payé maintenant commence à la fin du mois gratuit.')}`
    : gate
    ? L('Pay the platform charges to keep using Klass8. Everything you have done so far is kept.', 'Payez les frais de plateforme pour continuer à utiliser Klass8. Tout ce que vous avez fait est conservé.')
    : L('Your free month has ended. Pay the platform charges to keep using Klass8.', 'Votre mois gratuit est terminé. Payez les frais de plateforme pour continuer à utiliser Klass8.');

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader close noBack={gate && !pro} title={L('Platform charges', 'Frais de plateforme')} avatar={false} />}>
        <V c="pb-space-xl gap-space-lg pt-space-md">
          <V c="gap-space-xs">
            <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{gate ? L('Your free month has ended', 'Votre mois gratuit est terminé') : L('Platform charges', 'Frais de plateforme')}</T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {intro}
            </T>
          </V>

          <V c="bg-surface-container-lowest rounded-xl px-space-md py-space-sm shadow-sm">
            <T c="font-label-lg text-label-lg text-on-surface pb-1" style={{ fontWeight: '700' }}>
              {L('The platform charges open everything in Klass8', 'Les frais de plateforme ouvrent tout Klass8')}
            </T>
            <Included text={L('Every subject you take, from Form 1 to Upper Sixth', 'Toutes vos matières, de la Form 1 à l’Upper Sixth')} />
            <Included text={L('Every lesson, with its labelled diagrams and the teacher’s explanations', 'Toutes les leçons, avec leurs schémas et les explications du professeur')} />
            <Included text={L('Every practical and 3D model', 'Tous les TP et modèles 3D')} />
            <Included text={L('Papers 1, 2 and 3 as often as you like, with marking', 'Les épreuves 1, 2 et 3 sans limite, avec correction')} />
            <Included text={L('The tutor (30 questions a day) and answer marking (30 typed and 6 photos a day)', 'Le tuteur (30 questions par jour) et la correction (30 tapées et 6 photos par jour)')} />
          </V>

          {!STORE_BUILD && paywall && (
            <V c="gap-space-sm">
              <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                {L('Choose how long', 'Choisissez la durée')}
              </T>
              {[
                ['year', L('One year', 'Un an'), L('Two months free compared with paying each month', 'Deux mois offerts par rapport au paiement mensuel')],
                ['month', L('One month', 'Un mois'), L('Pay again each month', 'À payer chaque mois')],
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
                        {p?.days} {L('days', 'jours')}. {sub}. {L('No automatic renewal.', 'Sans renouvellement automatique.')}
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
              {checkout === 'link' ? (
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                  {L('You pay on the payment page of Fapshi, Klass8’s payment service, with MTN MoMo or Orange Money. Approve the payment on your phone with your PIN; never type your PIN in this app.', 'Vous payez sur la page de paiement de Fapshi, le service de paiement de Klass8, avec MTN MoMo ou Orange Money. Validez le paiement sur votre téléphone avec votre code PIN ; ne tapez jamais votre PIN dans l’application.')}
                </T>
              ) : (
              <>
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
              </>
              )}
              {!open && <T c="font-body-sm text-body-sm text-error">{L('Mobile money payments are not open yet. A school voucher works now.', 'Les paiements mobile money ne sont pas encore ouverts. Un code d’école fonctionne déjà.')}</T>}
              <NeedsInternet what={{ en: 'pay', fr: 'payer' }} />
              <ErrorNote error={error} />
              <Cta variant="dark" icon={null} label={`${L('Pay', 'Payer')} ${amount ? fcfa(amount) : ''}`} loading={busy && !voucher} disabled={!open} onPress={pay} />
            </V>
          )}

          {paywall && (
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

          {gate && (
            <V c="flex-row gap-space-md">
              <P c="py-space-xs" onPress={() => navigation.navigate('Settings')} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container">{L('Settings', 'Paramètres')}</T>
              </P>
              <P c="py-space-xs" onPress={logout} hitSlop={8}>
                <T c="font-label-md text-label-md text-primary-container">{L('Sign out', 'Se déconnecter')}</T>
              </P>
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

      <Modal visible={!!payment} transparent animationType="slide" onRequestClose={() => (payment?.status !== 'PENDING' || payment?.link) && setPayment(null)}>
        <V c="flex-1 justify-end" style={{ backgroundColor: 'rgba(15,23,42,0.45)' }}>
          <V c="bg-surface-container-lowest rounded-t-xl p-space-lg gap-space-md">
            {payment?.status === 'SUCCESSFUL' ? (
              <>
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Payment received', 'Paiement reçu')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant">{L('Klass8 is now open on your account, on any phone you log in to.', 'Klass8 est maintenant ouvert sur votre compte, sur tout téléphone où vous vous connectez.')}</T>
                <Cta
                  variant="dark"
                  icon={null}
                  label={L('Continue', 'Continuer')}
                  onPress={() => (setPayment(null), gate || !navigation.canGoBack() ? navigation.reset({ index: 0, routes: [{ name: 'Main' }] }) : navigation.goBack())}
                />
              </>
            ) : payment?.status === 'PENDING' && payment.link ? (
              <>
                <ActivityIndicator size="large" color={C['primary-container']} />
                <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                  {L('Pay on the Fapshi page', 'Payez sur la page Fapshi')}
                </T>
                <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                  {L('Choose MTN MoMo or Orange Money there, enter your number and approve the request for', 'Choisissez MTN MoMo ou Orange Money, entrez votre numéro et validez la demande de')} {fcfa(payment.amount)} {L('on your phone. Then come back here: this screen updates by itself.', 'sur votre téléphone. Revenez ensuite ici : cet écran se met à jour seul.')}
                </T>
                <Cta variant="dark" icon={null} label={L('Open the payment page', 'Ouvrir la page de paiement')} onPress={() => openPage(payment.link)} />
                <Cta
                  variant="soft"
                  icon={null}
                  label={L('Close: the course opens by itself once paid', 'Fermer : le cours s’ouvre seul une fois payé')}
                  onPress={() => (clearTimeout(poll.current), setPayment(null))}
                />
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
