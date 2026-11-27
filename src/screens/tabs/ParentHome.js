import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, TabHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { firstName, greeting } from '../../state/selectors';
import { Section, Shortcut } from './Home';
import ChargesCard from '../../ui/ChargesCard';
import { STORE_BUILD } from '../../lib/payments';

const DAY = 86400000;
const longDay = (t) => new Date(t).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// When the child last revised, in words.
export const lastRevised = (r, L) => {
  const idle = r.lastActive ? Math.floor((Date.now() - r.lastActive) / DAY) : null;
  return idle == null ? L('Not yet', 'Pas encore') : idle === 0 ? L('Today', 'Aujourd’hui') : `${idle} ${idle === 1 ? L('day ago', 'jour') : L('days ago', 'jours')}`;
};
// A child's overall mastery: the average over the subjects they take.
export const overall = (r) => {
  const ids = r.student.subjects?.length ? r.student.subjects : ['biology'];
  const list = ids.map((id) => r.subjects?.[id]?.mastery ?? (id === 'biology' ? r.readiness : 0) ?? 0);
  return Math.round(list.reduce((a, b) => a + b, 0) / list.length);
};
// Teacher-set work still to do, late work, and the latest test score.
export const workState = (r) => {
  const work = r.work || [];
  const open = work.filter((w) => !w.doneAt && w.dueAt > Date.now());
  const late = work.filter((w) => !w.doneAt && w.dueAt <= Date.now() && w.dueAt > Date.now() - 30 * DAY);
  const test = work.find((w) => w.doneAt && w.score != null && String(w.ref).startsWith('t-'));
  return { open, late, test };
};

// Where the child stands with the platform charges, and a button to pay for them.
export function ChildAccess({ r, L, onPay }) {
  const a = r.access;
  if (!a || !a.charging) return null;
  const due = !a.open;
  return (
    <V c="flex-row items-center gap-space-sm p-space-sm rounded-xl" style={{ backgroundColor: due ? '#fdecea' : a.paidUntil ? '#e3f4ec' : '#eef3fa' }}>
      <Ic n={due ? 'lock' : a.paidUntil ? 'verified' : 'schedule'} s={20} c={due ? 'error' : a.paidUntil ? 'secondary' : 'primary-container'} fill={!due} />
      <T c="flex-1 font-body-sm text-body-sm text-on-surface" style={{ lineHeight: 19 }}>
        {due
          ? STORE_BUILD
            ? L('Access has ended: lessons are locked.', 'L’accès est terminé : les leçons sont bloquées.')
            : L('Platform charges due: lessons are locked.', 'Frais à payer : les leçons sont bloquées.')
          : a.paidUntil
            ? `${STORE_BUILD ? L('Full access until', 'Accès complet jusqu’au') : L('Paid until', 'Payé jusqu’au')} ${longDay(a.paidUntil)}`
            : `${L('Free month until', 'Mois gratuit jusqu’au')} ${longDay(a.until)}`}
      </T>
      {!STORE_BUILD && (
        <P c={`h-9 px-3 rounded-lg items-center justify-center ${due ? 'bg-primary' : 'bg-surface-container-lowest'}`} onPress={onPay} accessibilityLabel={`${L('Pay for', 'Payer pour')} ${r.student.name}`}>
          <T c={`font-label-md text-label-md ${due ? 'text-on-primary' : 'text-primary-container'}`} style={{ fontWeight: '700' }}>
            {due ? L('Pay now', 'Payer') : L('Add time', 'Prolonger')}
          </T>
        </P>
      )}
    </V>
  );
}

function Stat({ value, label, warn }) {
  return (
    <V c="flex-1 gap-0.5">
      <T c={`font-label-lg text-label-lg ${warn ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '800' }} numberOfLines={1}>
        {value}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
        {label}
      </T>
    </V>
  );
}

export function Tag({ icon, text, warn }) {
  return (
    <V c={`flex-row items-center gap-1 px-2 py-1 rounded-lg ${warn ? 'bg-error-container' : 'bg-surface-container-low'}`}>
      <Ic n={icon} s={14} c={warn ? 'error' : 'primary-container'} />
      <T c={`font-label-sm text-label-sm ${warn ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
        {text}
      </T>
    </V>
  );
}

// One child at a glance; the whole picture is a tap away.
function ChildCard({ r, L, onOpen }) {
  const idle = r.lastActive ? Math.floor((Date.now() - r.lastActive) / DAY) : null;
  const { open, late, test } = workState(r);
  const due = r.access?.charging && !r.access.open;
  return (
    <P c="bg-surface-container-lowest rounded-2xl border border-surface-container p-space-md gap-space-sm" onPress={onOpen} scale={0.99} accessibilityLabel={r.student.name}>
      <V c="flex-row items-center gap-space-sm">
        <V c="flex-1 gap-0.5">
          <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
            {r.student.name}
          </T>
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
            {[r.student.className, r.student.schoolName].filter(Boolean).join(', ') || L('Secondary school student', 'Élève du secondaire')}
          </T>
        </V>
        <Ic n="chevron_right" s={22} c="outline" />
      </V>
      <V c="flex-row gap-space-sm">
        <Stat value={lastRevised(r, L)} label={L('Last revised', 'Dernière révision')} warn={idle == null || idle >= 3} />
        <Stat value={`${r.minutesWeek} min`} label={L('This week', 'Cette semaine')} />
        <Stat value={`${overall(r)}%`} label={L('Mastered', 'Maîtrisé')} />
      </V>
      {(due || late.length > 0 || open.length > 0 || !!test) && (
        <V c="flex-row items-center gap-1.5 flex-wrap">
          {due && <Tag icon="lock" text={STORE_BUILD ? L('Access ended', 'Accès terminé') : L('Charges due', 'Frais à payer')} warn />}
          {late.length > 0 && <Tag icon="schedule" text={`${late.length} ${L('late', 'en retard')}`} warn />}
          {open.length > 0 && <Tag icon="assignment" text={`${open.length} ${L('to do', 'à faire')}`} />}
          {!!test && <Tag icon="grading" text={`${L('Last test', 'Dernier devoir')} ${test.score}%`} />}
        </V>
      )}
    </P>
  );
}

// A parent's Home: each child at a glance (tap for the whole picture), what
// needs paying, and the Assistant to help with homework.
export default function ParentHome({ navigation }) {
  const { user, refreshUnread } = useApp();
  const L = useL();
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    refreshUnread();
    try {
      const r = await get('/v1/parent/children');
      setItems(r.items);
      setError(null);
    } catch (e) {
      setError(e);
      setItems((x) => x || []);
    }
  }, [refreshUnread]);

  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );
  // Children whose free month or paid time has ended.
  const due = (items || []).filter((r) => r.access?.charging && !r.access.open);
  const payFor = (ids) => navigation.navigate('Paywall', { for: ids });

  return (
    <Screen header={<TabHeader subtitle={L('Parent or guardian', 'Parent ou tuteur')} />} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <V c="gap-1">
          <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight" numberOfLines={1}>
            {greeting(L)}, {firstName(user?.name)}
          </T>
          <T c="font-body-md text-body-md text-on-surface-variant">{L('Your children’s school work, updated as they study.', 'Le travail scolaire de vos enfants, mis à jour pendant qu’ils étudient.')}</T>
        </V>
        <ChargesCard user={user} quiet onPress={() => navigation.navigate('Paywall')} />
        {!!due.length && !STORE_BUILD && (
          <V c="p-space-md rounded-xl gap-space-sm" style={{ backgroundColor: '#fff3d6' }}>
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {due.length === 1
                ? `${firstName(due[0].student.name)} ${L('needs the platform charges to keep learning.', 'a besoin des frais de plateforme pour continuer.')}`
                : `${due.length} ${L('of your children need the platform charges to keep learning.', 'de vos enfants ont besoin des frais de plateforme.')}`}
            </T>
            <Cta variant="dark" icon={null} lead="payments" label={due.length === 1 ? `${L('Pay for', 'Payer pour')} ${firstName(due[0].student.name)}` : L('Pay for all of them at once', 'Payer pour tous en une fois')} onPress={() => payFor(due.map((r) => r.student.id))} />
          </V>
        )}
        <ErrorNote error={error} />
        {items === null ? (
          <Spinner />
        ) : items.length ? (
          <Section title={items.length === 1 ? L('Your child', 'Votre enfant') : L('Your children', 'Vos enfants')}>
            <V c="gap-space-sm">
              {items.map((r) => (
                <ChildCard key={r.student.id} r={r} L={L} onOpen={() => navigation.navigate('ChildDetail', { studentId: r.student.id, name: r.student.name })} />
              ))}
            </V>
          </Section>
        ) : (
          <V c="gap-space-xs">
            <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
              {L('No child linked yet', 'Aucun enfant lié')}
            </T>
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {L('Ask your child for the 8 character code in Me, then Parent reports.', 'Demandez à votre enfant le code à 8 caractères dans Moi, puis Rapports au parent.')}
            </T>
          </V>
        )}
        <Cta variant={items?.length ? 'soft' : 'dark'} icon={null} label={L('Link a child', 'Lier un enfant')} onPress={() => navigation.navigate('LinkChild', { fromHome: true })} />

        <Section title={L('Help with homework', 'Aider aux devoirs')}>
          <V c="flex-row">
            <Shortcut icon="photo_camera" label={L('A question', 'Une question')} onPress={() => navigation.navigate('StudyChat', { intent: 'solve' })} />
            <Shortcut icon="description" label={L('The notes', 'Les notes')} onPress={() => navigation.navigate('StudyChat', { intent: 'notes' })} />
            <Shortcut icon="forum" label={L('Ask', 'Demander')} onPress={() => navigation.navigate('StudyChat', { intent: 'ask' })} />
            <Shortcut icon="local_library" label={L('Lessons', 'Leçons')} onPress={() => navigation.navigate('Learn')} />
          </V>
        </Section>
      </V>
    </Screen>
  );
}
