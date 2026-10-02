import { Avatar, Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { iso } from '../../state/progress';
import { accuracyByUnit, gradeFor } from '../../state/selectors';
import { units } from '../../data/units';
import { Section } from './Home';

function MenuRow({ title, sub, onPress, first }) {
  return (
    <P c={`flex-row items-center justify-between gap-space-sm p-space-md ${first ? '' : 'border-t border-surface-container'}`} onPress={onPress} scale={0.99}>
      <V c="flex-1 gap-0.5">
        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }}>
          {title}
        </T>
        {!!sub && (
          <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={2}>
            {sub}
          </T>
        )}
      </V>
      <Ic n="chevron_right" s={20} c="outline" />
    </P>
  );
}

const DAYS_EN = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const DAYS_FR = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export default function Me({ navigation }) {
  const { user, pro, progress, stats, logout, prefs } = useApp();
  const L = useL();
  const student = user?.role === 'student';
  const p1 = progress.exams.filter((e) => e.kind === 'p1');
  const predicted = p1.length ? gradeFor(Math.round(p1.slice(-3).reduce((a, e) => a + e.pct, 0) / Math.min(3, p1.length))) : null;
  const acc = accuracyByUnit(p1);
  // This week, Monday first.
  const monday = new Date();
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { key: iso(d), future: d > new Date(), done: progress.days.includes(iso(d)) };
  });
  const until = user?.proUntil ? new Date(user.proUntil).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', day: 'numeric' }) : null;
  const role = student ? [user?.className, user?.schoolName].filter(Boolean).join(', ') : user?.role === 'teacher' ? [L('Teacher', 'Enseignant'), user?.schoolName].filter(Boolean).join(', ') : L('Parent or guardian', 'Parent ou tuteur');

  return (
    <Screen bg="bg-surface" header={<TabHeader title={L('Me', 'Moi')} subtitle={user?.name || ''} />}>
      <V c="pb-space-lg gap-space-lg pt-space-md">
        <V c="flex-row items-center gap-space-md">
          <Avatar name={user?.name} size={64} />
          <V c="flex-1 gap-0.5">
            <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
              {user?.name}
            </T>
            {!!role && (
              <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                {role}
              </T>
            )}
            <P onPress={() => navigation.navigate('Paywall')} hitSlop={6}>
              <T c="font-body-sm text-body-sm text-primary-container">{pro && until ? `${L('Full course until', 'Cours complet jusqu’au')} ${until}` : L('Free version. See the full course', 'Version gratuite. Voir le cours complet')}</T>
            </P>
          </V>
        </V>

        {student && (
          <Section title={L('This week', 'Cette semaine')}>
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-sm">
              <V c="flex-row justify-between items-center">
                {week.map((d, i) => (
                  <V key={d.key} c="items-center gap-1">
                    <T c="font-label-sm text-label-sm text-on-surface-variant">{(prefs.lang === 'fr' ? DAYS_FR : DAYS_EN)[i]}</T>
                    <V c={`w-8 h-8 rounded-full items-center justify-center ${d.done ? 'bg-secondary' : d.future ? 'border border-outline-variant' : 'bg-surface-container-high'}`} style={{ borderRadius: 16 }}>
                      {d.done ? <Ic n="check" s={16} c="on-secondary" /> : null}
                    </V>
                  </V>
                ))}
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant">
                {stats.streak > 1 ? `${stats.streak} ${L('days in a row', 'jours de suite')}. ` : ''}
                {stats.minutesWeek} {L('minutes of revision this week', 'minutes de révision cette semaine')}
                {predicted ? `. ${L('Recent Paper 1 results suggest grade', 'Les dernières épreuves 1 indiquent la note')} ${predicted}, ${L('target', 'objectif')} ${user?.targetGrade || 'A'}.` : '.'}
              </T>
            </V>
          </Section>
        )}

        {student && (
          <Section title={L('Units', 'Unités')} action={L('Syllabus', 'Programme')} onAction={() => navigation.navigate('Learn')}>
            <V c="bg-surface-container-lowest rounded-xl shadow-sm">
              {units.map((u, i) => {
                const pct = stats.unitPct[u.id] || 0;
                return (
                  <P key={u.id} c={`px-space-md py-space-sm gap-1 ${i ? 'border-t border-surface-container' : ''}`} onPress={() => navigation.navigate('Unit', { unitId: u.id })} scale={0.99}>
                    <V c="flex-row justify-between items-center gap-2">
                      <T c="font-body-md text-body-md text-on-surface flex-1" numberOfLines={1}>
                        {u.n}. {u.short}
                      </T>
                      <T c="font-label-md text-label-md text-on-surface-variant">
                        {pct}%{acc[u.id] != null ? `, ${L('papers', 'épreuves')} ${acc[u.id]}%` : ''}
                      </T>
                    </V>
                    <Bar pct={pct} c="h-1 bg-surface-container-high" fill={pct >= 85 ? 'bg-secondary' : 'bg-primary-container'} />
                  </P>
                );
              })}
            </V>
          </Section>
        )}

        <V c="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          {student && (
            <MenuRow
              first
              title={L('Parent reports', 'Rapports au parent')}
              sub={user?.parentPhone ? `${L('Sent to', 'Envoyés au')} +237 ${user.parentPhone.slice(3, 6)} ••• ${user.parentPhone.slice(-3)}` : L('Share your progress with a parent', 'Partagez vos progrès avec un parent')}
              onPress={() => navigation.navigate('ParentReport')}
            />
          )}
          {student && <MenuRow title={L('Lab workbook', 'Cahier de TP')} sub={`${progress.workbook.length} ${L('recorded results and drawings', 'résultats et dessins notés')}`} onPress={() => navigation.navigate('Workbook')} />}
          {student && <MenuRow title={L('Join a class', 'Rejoindre une classe')} sub={L('With the code from your teacher', 'Avec le code de votre enseignant')} onPress={() => navigation.navigate('JoinClass')} />}
          {user?.role === 'parent' && <MenuRow first title={L('Link a child', 'Lier un enfant')} sub={L('With the code shown in your child’s app', 'Avec le code affiché dans l’application de l’enfant')} onPress={() => navigation.navigate('LinkChild', { fromHome: true })} />}
          {user?.role === 'teacher' && <MenuRow first title={L('My classes', 'Mes classes')} sub={L('Codes, students and work set', 'Codes, élèves et travaux')} onPress={() => navigation.navigate('Main', { screen: 'Home' })} />}
          <MenuRow title={pro ? L('Subscription and payments', 'Abonnement et paiements') : L('Full course and prices', 'Cours complet et prix')} sub={pro && until ? `${L('Active until', 'Actif jusqu’au')} ${until}` : null} onPress={() => navigation.navigate('Paywall')} />
          {student && <MenuRow title={L('Downloads and storage', 'Téléchargements et stockage')} sub={L('3D models and data kept on this phone', '3D et données gardées sur ce téléphone')} onPress={() => navigation.navigate('Offline')} />}
          <MenuRow title={L('Language', 'Langue')} sub={prefs.lang === 'fr' ? 'Français' : 'English'} onPress={() => navigation.navigate('Language', { fromSettings: true })} />
          <MenuRow title={L('Account and settings', 'Compte et réglages')} sub={L('Profile, reminders, password, deleting your account', 'Profil, rappels, mot de passe, suppression du compte')} onPress={() => navigation.navigate('Settings')} />
          <MenuRow title={L('Help, terms and privacy', 'Aide, conditions et confidentialité')} onPress={() => navigation.navigate('Legal', { doc: 'help' })} />
        </V>

        <P c="self-center px-space-md py-space-sm" onPress={logout} hitSlop={8}>
          <T c="font-label-lg text-label-lg text-error">{L('Log out', 'Se déconnecter')}</T>
        </P>
      </V>
    </Screen>
  );
}
