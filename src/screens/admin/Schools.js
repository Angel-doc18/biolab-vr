// Admin Schools: make a code that opens Klass8 for a school's students, see
// the codes made, and the schools that asked for a licence.
import { useState } from 'react';
import { RefreshControl, Share } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, useToast } from '../../ui/chrome';
import { Field } from '../../ui/form';
import { useL } from '../../i18n';
import { post } from '../../api/adminClient';
import { AdminHeader, Card, Chips, Empty, Loading, Row, Section, date, useAdminLoad } from './kit';

export default function AdminSchools() {
  const L = useL();
  const codes = useAdminLoad('/v1/admin/vouchers');
  const requests = useAdminLoad('/v1/admin/licence-requests');
  const [school, setSchool] = useState('');
  const [students, setStudents] = useState('50');
  const [days, setDays] = useState('365');
  const [made, setMade] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, showToast] = useToast();

  const make = async () => {
    setError(null);
    if (school.trim().length < 3) return setError(L('Write the name of the school.', 'Écrivez le nom de l’école.'));
    const n = parseInt(students, 10);
    if (!(n >= 1)) return setError(L('Write how many students will use the code.', 'Écrivez combien d’élèves utiliseront le code.'));
    setBusy(true);
    try {
      const r = await post('/v1/admin/vouchers', { label: school.trim(), days: parseInt(days, 10), maxUses: n, count: 1 });
      setMade({ code: r.codes[0], school: school.trim(), days: parseInt(days, 10), students: n });
      setSchool('');
      codes.reload();
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  const message = (m) =>
    L(
      `Klass8 school code for ${m.school}: ${m.code}. Each student opens Klass8, goes to Plans, taps "I have a voucher from my school" and enters it. It gives ${m.days} days of everything.`,
      `Code d’école Klass8 pour ${m.school} : ${m.code}. Chaque élève ouvre Klass8, va dans Formules, touche « J’ai un code de mon école » et le saisit. Il donne ${m.days} jours de tout.`
    );
  const copy = async () => {
    try {
      await Clipboard.setStringAsync(made.code);
      showToast(L('Code copied', 'Code copié'));
    } catch {
      // the code is on screen and can be selected
    }
  };

  return (
    <V c="flex-1">
      <Screen
        header={<AdminHeader title={L('Schools', 'Écoles')} subtitle={L('Codes and licences', 'Codes et licences')} />}
        keyboard
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await Promise.all([codes.reload(), requests.reload()]), setRefreshing(false))} />}
      >
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <Section title={L('Make a code for a school', 'Créer un code pour une école')}>
            <Card>
              <V c="p-space-md gap-space-md">
                <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 19 }}>
                  {L('The school gives the code to its students. Each student who enters it gets everything in Klass8, with no mobile money needed.', 'L’école donne le code à ses élèves. Chaque élève qui le saisit obtient tout Klass8, sans mobile money.')}
                </T>
                <Field label={L('School', 'École')} value={school} onChangeText={setSchool} maxLength={120} placeholder={L('e.g. GBHS Bamenda, Form 5', 'ex. GBHS Bamenda, Form 5')} />
                <Field label={L('How many students', 'Combien d’élèves')} value={students} onChangeText={(t) => setStudents(t.replace(/\D/g, '').slice(0, 4))} keyboardType="number-pad" />
                <V c="gap-1.5">
                  <T c="font-label-md text-label-md text-on-surface-variant" style={{ fontWeight: '600' }}>
                    {L('For how long', 'Pour combien de temps')}
                  </T>
                  <Chips
                    value={days}
                    onChange={setDays}
                    items={[
                      ['30', L('1 month', '1 mois')],
                      ['120', L('1 term', '1 trimestre')],
                      ['365', L('1 school year', '1 année scolaire')],
                    ]}
                  />
                </V>
                <ErrorNote error={error} />
                <Cta variant="dark" icon={null} lead="redeem" label={L('Make the code', 'Créer le code')} loading={busy} onPress={make} />
              </V>
              {!!made && (
                <V c="mx-space-md mb-space-md p-space-md rounded-xl gap-space-sm" style={{ backgroundColor: '#e3f4ec' }}>
                  <T c="font-body-sm text-body-sm text-on-surface">
                    {L('The code for', 'Le code pour')} {made.school}. {L('Copy or share it now: it is shown only once.', 'Copiez-le ou partagez-le maintenant : il n’est affiché qu’une fois.')}
                  </T>
                  <T c="font-headline-md text-headline-md text-on-surface tracking-wider text-center" selectable style={{ fontWeight: '700' }}>
                    {made.code}
                  </T>
                  <V c="flex-row gap-2">
                    <P c="flex-1 h-11 rounded-xl bg-surface-container-lowest flex-row items-center justify-center gap-2" onPress={copy}>
                      <Ic n="content_copy" s={18} c="primary-container" />
                      <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>{L('Copy', 'Copier')}</T>
                    </P>
                    <P c="flex-1 h-11 rounded-xl bg-primary flex-row items-center justify-center gap-2" onPress={() => Share.share({ message: message(made) }).catch(() => {})}>
                      <Ic n="share" s={18} c="on-primary" />
                      <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>{L('Share', 'Partager')}</T>
                    </P>
                  </V>
                </V>
              )}
            </Card>
          </Section>

          <Section title={L('Codes made', 'Codes créés')}>
            <ErrorNote error={codes.error} />
            {codes.busy && !codes.data && <Loading />}
            {codes.data && !codes.data.items.length && (
              <Card>
                <Empty icon="redeem" text={L('No codes yet.', 'Aucun code pour l’instant.')} />
              </Card>
            )}
            {codes.data && codes.data.items.length > 0 && (
              <Card>
                {codes.data.items.map((v, i) => (
                  <Row
                    key={`${v.createdAt}-${i}`}
                    first={i === 0}
                    icon="redeem"
                    iconBg="#e3f4ec"
                    iconTint="secondary"
                    title={v.label || L('School code', 'Code d’école')}
                    sub={`${v.uses} ${L('of', 'sur')} ${v.maxUses} ${L('students have used it', 'élèves l’ont utilisé')}, ${v.days} ${L('days each', 'jours chacun')}, ${L('usable until', 'valable jusqu’au')} ${date(v.expiresAt)}`}
                  />
                ))}
              </Card>
            )}
          </Section>

          <Section title={L('Schools asking for a licence', 'Écoles qui demandent une licence')}>
            <ErrorNote error={requests.error} />
            {requests.busy && !requests.data && <Loading />}
            {requests.data && !requests.data.items.length && (
              <Card>
                <Empty icon="school" text={L('No requests yet. Schools ask from the app or the website.', 'Aucune demande. Les écoles demandent depuis l’application ou le site.')} />
              </Card>
            )}
            {requests.data && requests.data.items.length > 0 && (
              <Card>
                {requests.data.items.map((r, i) => (
                  <V key={r.id} c={`px-space-md py-space-sm gap-1 ${i ? 'border-t border-surface-container' : ''}`}>
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
                      {r.schoolName}, {r.students} {L('students', 'élèves')}
                    </T>
                    <T c="font-body-sm text-body-sm text-on-surface" selectable>
                      {r.contact}
                    </T>
                    {!!r.message && <T c="font-body-sm text-body-sm text-on-surface-variant">{r.message}</T>}
                    <T c="font-label-sm text-label-sm text-outline">
                      {date(r.createdAt)}
                      {r.requestedBy ? `, ${L('asked by', 'demandé par')} ${r.requestedBy}` : ''}
                    </T>
                  </V>
                ))}
              </Card>
            )}
          </Section>
        </V>
      </Screen>
      {toast}
    </V>
  );
}
