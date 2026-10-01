import { Avatar, Bar, Ic, P, T, V } from '../../ui/kit';
import { Screen, TabHeader } from '../../ui/chrome';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { daysToExam, iso } from '../../state/progress';
import { accuracyByUnit, gradeFor, levelFromXp } from '../../state/selectors';
import { units } from '../../data/units';

function MenuRow({ icon, iconBg = 'bg-surface-container', iconC = 'primary', title, sub, badge, onPress }) {
  return (
    <P c="flex-row items-center justify-between p-space-md rounded-lg" onPress={onPress} scale={0.99}>
      <V c="flex-row items-center gap-space-sm flex-1">
        <V c={`w-10 h-10 rounded-xl items-center justify-center ${iconBg}`}>
          <Ic n={icon} s={22} c={iconC} />
        </V>
        <V c="flex-1">
          <V c="flex-row items-center gap-space-xs flex-wrap">
            <T c="font-label-lg text-label-lg text-on-surface" numberOfLines={1}>
              {title}
            </T>
            {badge && (
              <V c="px-1.5 py-0.5 rounded-full bg-secondary-fixed">
                <T c="font-label-sm text-label-sm text-on-secondary-fixed-variant">{badge}</T>
              </V>
            )}
          </V>
          {!!sub && (
            <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
              {sub}
            </T>
          )}
        </V>
      </V>
      <Ic n="chevron_right" s={20} c="outline-variant" />
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
  const accuracy = p1.length ? Math.round(p1.reduce((a, e) => a + e.pct, 0) / p1.length) : null;
  const predicted = p1.length ? gradeFor(Math.round(p1.slice(-3).reduce((a, e) => a + e.pct, 0) / Math.min(3, p1.length))) : null;
  const acc = accuracyByUnit(p1);
  const assessed = units.filter((u) => (stats.unitPct[u.id] || 0) > 0);
  // This week, Monday first.
  const monday = new Date();
  monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return { key: iso(d), future: d > new Date(), done: progress.days.includes(iso(d)) };
  });
  const perfect = week.filter((d) => !d.future).every((d) => d.done);
  const labMinutes = progress.workbook.reduce((a, w) => a + (w.minutes || 0), 0);
  const until = user?.proUntil ? new Date(user.proUntil).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', day: 'numeric' }) : null;
  const level = levelFromXp(progress.xp);

  const band = (pct) =>
    pct >= 85 ? [L('Mastered', 'Maîtrisé'), 'secondary', 'bg-secondary'] : pct >= 70 ? [L('Strong', 'Solide'), 'primary-container', 'bg-primary-container'] : pct >= 50 ? [L('Good', 'Bien'), 'primary', 'bg-primary'] : pct >= 30 ? [L('Needs work', 'À travailler'), 'tertiary-container', 'bg-tertiary-container'] : [L('Review needed', 'À revoir'), 'outline', 'bg-outline'];

  const help = () => navigation.navigate('Legal', { doc: 'help' });

  return (
    <Screen bg="bg-surface" header={<TabHeader title={L('My profile', 'Mon profil')} subtitle={L('Cameroon GCE Biology', 'GCE Biologie')} chip={false} />}>
      <V c="pb-space-lg gap-space-md pt-space-md">
        <V c="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
          <V c="flex-row items-start gap-space-md">
            <V>
              <Avatar name={user?.name} size={80} />
              {user?.phoneVerified && (
                <V c="absolute bottom-0 right-0 bg-secondary w-6 h-6 rounded-full items-center justify-center shadow-sm" style={{ borderRadius: 12 }}>
                  <Ic n="verified" s={14} c="on-secondary" />
                </V>
              )}
            </V>
            <V c="flex-1">
              <V c="flex-row items-center gap-space-xs flex-wrap">
                <T c="font-headline-md text-headline-md text-on-surface" numberOfLines={1}>
                  {user?.name}
                </T>
                {pro && (
                  <V c="flex-row items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-secondary-container">
                    <Ic n="stars" s={12} c="on-secondary-container" fill />
                    <T c="font-label-sm text-label-sm text-on-secondary-container">Premium</T>
                  </V>
                )}
              </V>
              <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5" numberOfLines={1}>
                {student ? `GCE O-Level · ${user?.className || ''}` : user?.role === 'teacher' ? L('Biology teacher', 'Enseignant') : L('Parent or guardian', 'Parent')}
              </T>
              {!!user?.schoolName && (
                <V c="flex-row items-center gap-1 mt-1">
                  <Ic n="school" s={14} c="primary" />
                  <T c="font-body-sm text-body-sm text-on-surface-variant flex-1" style={{ fontWeight: '500' }} numberOfLines={1}>
                    {user.schoolName}
                  </T>
                </V>
              )}
              <P onPress={() => navigation.navigate('Paywall')}>
                <T c="font-label-sm text-label-sm text-primary mt-1">{pro && until ? `${L('Premium active until', 'Premium jusqu’au')} ${until}` : L('Free plan · see Premium', 'Offre gratuite · voir Premium')}</T>
              </P>
            </V>
          </V>
          {student && (
            <V c="flex-row gap-space-xs mt-space-md bg-surface-container-low rounded-xl p-space-sm">
              {[
                ['hourglass_top', 'primary', `${daysToExam(user?.examYear)}d`, L('To finals', 'Avant l’examen')],
                ['target', 'secondary', accuracy != null ? `${accuracy}%` : '-', L('Mock accuracy', 'Précision')],
                ['military_tech', 'tertiary-container', `${L('Lvl', 'Niv.')} ${level}`, `${progress.xp.toLocaleString('en-US')} XP`],
              ].map(([i, c, v, l]) => (
                <V key={l} c="flex-1 items-center p-space-xs">
                  <Ic n={i} s={20} c={c} />
                  <T c="font-headline-sm text-headline-sm text-on-surface mt-0.5">{v}</T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant">{l}</T>
                </V>
              ))}
            </V>
          )}
        </V>

        {student && (
          <V c="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
            <V c="flex-row items-center justify-between p-space-md bg-surface-container rounded-xl">
              <V c="flex-row items-center gap-space-sm flex-1">
                <V c="w-12 h-12 rounded-xl bg-primary-container items-center justify-center">
                  <T c="font-display-lg text-display-lg text-on-primary-container">{predicted || '?'}</T>
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface">{predicted ? `${L('Grade', 'Note')} ${predicted} (${L('practice estimate', 'estimation')})` : L('No prediction yet', 'Pas encore d’estimation')}</T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">
                    {L('Target', 'Objectif')}: {L('Grade', 'Note')} {user?.targetGrade || 'A'}
                    {!predicted ? ` · ${L('sit a Paper 1 mock', 'passez une épreuve 1')}` : ''}
                  </T>
                </V>
              </V>
            </V>
            <V c="gap-space-sm">
              <V c="flex-row items-center justify-between">
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Syllabus mastery', 'Maîtrise du programme')}</T>
                <T c="font-label-sm text-label-sm text-primary">
                  {assessed.length} {L('units started', 'unités commencées')}
                </T>
              </V>
              {(assessed.length ? assessed : units.slice(0, 3)).map((u) => {
                const pct = stats.unitPct[u.id] || 0;
                const [label, col, bar] = band(pct);
                return (
                  <P key={u.id} c="p-space-sm bg-surface-container-low rounded-xl gap-1" onPress={() => navigation.navigate('Unit', { unitId: u.id })} scale={0.99}>
                    <V c="flex-row justify-between items-center gap-2">
                      <T c="font-body-md text-body-md text-on-surface flex-1" style={{ fontWeight: '500' }} numberOfLines={1}>
                        {u.short}
                      </T>
                      <T c={`font-label-md text-label-md text-${col}`}>
                        {pct}% · {label}
                        {acc[u.id] != null ? ` · ${L('mocks', 'examens')} ${acc[u.id]}%` : ''}
                      </T>
                    </V>
                    <Bar pct={pct} c="h-2 bg-surface-container-highest" fill={bar} />
                  </P>
                );
              })}
            </V>
          </V>
        )}

        {student && (
          <V c="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm gap-space-md">
            <V c="flex-row items-center justify-between">
              <V c="flex-row items-center gap-space-xs">
                <T c="font-headline-sm text-headline-sm text-on-surface">
                  {stats.streak}
                  {L('-day revision streak', ' jours de série')}
                </T>
                <Ic n="local_fire_department" s={20} c="tertiary-container" fill={stats.streak > 0} />
              </V>
              {perfect && (
                <T c="font-label-sm text-label-sm text-secondary uppercase tracking-wider">{L('Perfect week', 'Semaine parfaite')}</T>
              )}
            </V>
            <V c="flex-row justify-between items-center px-space-xs py-space-sm bg-surface-container-low rounded-xl">
              {week.map((d, i) => (
                <V key={d.key} c="items-center gap-1">
                  <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                    {(prefs.lang === 'fr' ? DAYS_FR : DAYS_EN)[i]}
                  </T>
                  <V c={`w-8 h-8 rounded-full items-center justify-center ${d.done ? 'bg-secondary shadow-sm' : d.future ? 'bg-surface-container' : 'bg-surface-container-high'}`} style={{ borderRadius: 16 }}>
                    {d.done ? <Ic n="check" s={16} c="on-secondary" /> : null}
                  </V>
                </V>
              ))}
            </V>
            <V c="flex-row gap-space-sm">
              <V c="flex-1 p-space-sm bg-surface-container rounded-xl flex-row items-center gap-space-sm">
                <V c="w-10 h-10 rounded-xl bg-primary-container items-center justify-center">
                  <Ic n="view_in_ar" s={20} c="on-primary" />
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface">{labMinutes >= 60 ? `${(labMinutes / 60).toFixed(1)} h` : `${labMinutes} min`}</T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant" numberOfLines={1}>
                    {L('Virtual lab time', 'Temps au labo')}
                  </T>
                </V>
              </V>
              <V c="flex-1 p-space-sm bg-surface-container rounded-xl flex-row items-center gap-space-sm">
                <V c="w-10 h-10 rounded-xl bg-secondary items-center justify-center">
                  <Ic n="assignment_turned_in" s={20} c="on-secondary" />
                </V>
                <V c="flex-1">
                  <T c="font-headline-sm text-headline-sm text-on-surface">
                    {progress.exams.length} {L('tests', 'tests')}
                  </T>
                  <T c="font-label-sm text-label-sm text-on-surface-variant" numberOfLines={1}>
                    {L('Mock papers done', 'Examens blancs faits')}
                  </T>
                </V>
              </V>
            </V>
          </V>
        )}

        <V c="w-full bg-surface-container-lowest rounded-xl p-space-xs shadow-sm overflow-hidden">
          {student && <MenuRow icon="cloud_sync" title={L('Offline content manager', 'Contenu hors ligne')} sub={L('All 10 units stored on this phone', 'Les 10 unités sur ce téléphone')} onPress={() => navigation.navigate('Offline')} />}
          {student && (
            <MenuRow
              icon="forum"
              iconBg="bg-secondary-container"
              iconC="on-secondary-container"
              title={L('Parent reports', 'Rapports parent')}
              badge={user?.parentPhone ? L('Active', 'Actif') : null}
              sub={user?.parentPhone ? `+237 ${user.parentPhone.slice(3, 6)} ••• ${user.parentPhone.slice(-3)} · ${user.parentReportFreq === 'monthly' ? L('Monthly', 'Mensuel') : user.parentReportFreq === 'mocks' ? L('After mocks', 'Après examens') : L('Fridays', 'Le vendredi')}` : L('Share progress with a parent on WhatsApp', 'Partagez vos progrès sur WhatsApp')}
              onPress={() => navigation.navigate('ParentReport')}
            />
          )}
          {student && <MenuRow icon="picture_as_pdf" iconC="primary-container" title={L('Practical workbook', 'Cahier de TP')} sub={`${progress.workbook.length} ${L('observations and drawings', 'observations et dessins')}`} onPress={() => navigation.navigate('Workbook')} />}
          {student && <MenuRow icon="group_add" title={L('Join a class', 'Rejoindre une classe')} sub={L('Enter your teacher’s class code', 'Code de classe de l’enseignant')} onPress={() => navigation.navigate('JoinClass')} />}
          {user?.role === 'parent' && <MenuRow icon="person_add" title={L('Link a child', 'Lier un enfant')} sub={L('Use the code from your child’s app', 'Code de l’application de l’enfant')} onPress={() => navigation.navigate('LinkChild', { fromHome: true })} />}
          {user?.role === 'teacher' && <MenuRow icon="co_present" title={L('Classroom portal', 'Portail de classe')} sub={L('Classes, codes and assignments', 'Classes, codes et devoirs')} onPress={() => navigation.navigate('Main', { screen: 'Home' })} />}
          <MenuRow icon="workspace_premium" iconC="tertiary" title={pro ? L('Premium and payments', 'Premium et paiements') : L('Go Premium', 'Passer à Premium')} sub={pro ? until && `${L('Active until', 'Jusqu’au')} ${until}` : L('From 1,500 FCFA per term', 'Dès 1 500 FCFA par trimestre')} onPress={() => navigation.navigate('Paywall')} />
          <MenuRow icon="translate" iconC="on-surface" title={L('Language', 'Langue')} sub={prefs.lang === 'fr' ? 'Français' : 'English'} onPress={() => navigation.navigate('Language', { fromSettings: true })} />
          <MenuRow icon="manage_accounts" iconC="on-surface" title={L('Account and security', 'Compte et sécurité')} sub={L('Profile, reminders, password', 'Profil, rappels, mot de passe')} onPress={() => navigation.navigate('Settings')} />
          <MenuRow icon="support_agent" iconC="on-surface" title={L('Help, terms and privacy', 'Aide, conditions et confidentialité')} sub={L('How the app works and your data', 'Fonctionnement et vos données')} onPress={help} />
        </V>

        <V c="items-center pt-space-xs pb-space-sm">
          <P c="flex-row items-center gap-1.5 px-space-md py-space-sm rounded-xl" onPress={logout}>
            <Ic n="logout" s={18} c="primary" />
            <T c="font-label-md text-label-md text-primary">{L('Sign out', 'Se déconnecter')}</T>
          </P>
          <T c="font-label-sm text-label-sm text-outline mt-1 text-center">BioSpatial VR · {L('Cameroon GCE Biology', 'Biologie GCE Cameroun')}</T>
        </V>
      </V>
    </Screen>
  );
}
