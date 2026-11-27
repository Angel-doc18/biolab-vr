// One child, the whole picture for their parent: the charges, this week, each
// subject, the work their teachers set with the scores, where they are strong
// and how to help, and the PDF report.
import { useCallback, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Bar, Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { get } from '../../api/client';
import { useL, useLang } from '../../i18n';
import { unitById } from '../../data/units';
import { subjectName } from '../../data/subjects';
import { firstName } from '../../state/selectors';
import { shareReportPdf } from '../../lib/report';
import { Section } from './Home';
import { ChildAccess, Tag, lastRevised, overall, workState } from './ParentHome';

const DAY = 86400000;

export default function ChildDetail({ navigation, route }) {
  const L = useL();
  const lang = useLang();
  const { studentId, name } = route.params || {};
  const [r, setR] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await get('/v1/parent/children');
      setR(res.items.find((x) => x.student.id === studentId) || null);
      setError(null);
    } catch (e) {
      setError(e);
    }
  }, [studentId]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const header = <StackHeader title={r?.student.name || name || L('Your child', 'Votre enfant')} subtitle={r ? [r.student.className, r.student.schoolName].filter(Boolean).join(', ') : undefined} />;
  if (!r) {
    return (
      <Screen header={header}>
        <V c="pt-space-md">{error ? <ErrorNote error={error} /> : <Spinner />}</V>
      </Screen>
    );
  }

  const first = firstName(r.student.name);
  const subjects = r.student.subjects?.length ? r.student.subjects : ['biology'];
  const { open, late } = workState(r);
  const weak = (r.weakest || []).map((w) => ({ ...w, u: unitById(w.unit) })).filter((w) => w.u);
  const strong = (r.strongest || []).map((w) => ({ ...w, u: unitById(w.unit) })).filter((w) => w.u && w.pct >= 50);

  return (
    <Screen header={header} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
      <V c="pt-space-md pb-space-xl gap-space-lg">
        <ChildAccess r={r} L={L} onPay={() => navigation.navigate('Paywall', { for: [r.student.id] })} />

        <V c="rounded-2xl bg-surface-container-low p-space-md gap-space-sm">
          <V c="flex-row">
            <Big value={lastRevised(r, L)} label={L('Last revised', 'Dernière révision')} />
            <Big value={`${r.minutesWeek}`} label={L('Minutes this week', 'Minutes cette semaine')} />
            <Big value={`${overall(r)}%`} label={L('Mastered', 'Maîtrisé')} />
          </V>
          <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 20 }}>
            {r.streak > 1 ? `${first} ${L('has revised', 'a révisé')} ${r.streak} ${L('days in a row', 'jours de suite')}. ` : ''}
            {r.labsDone} {r.labsDone === 1 ? L('practical done', 'TP fait') : L('practicals done', 'TP faits')}, {r.mocksDone} {r.mocksDone === 1 ? L('timed paper', 'épreuve chronométrée') : L('timed papers', 'épreuves chronométrées')}.
          </T>
        </V>

        <Section title={L('Subjects', 'Matières')}>
          <V c="gap-space-sm">
            {subjects.map((id) => {
              const s = r.subjects?.[id] || (id === 'biology' ? { mastery: r.readiness, bestMock: r.bestMock } : { mastery: 0 });
              return (
                <V key={id} c="gap-1">
                  <V c="flex-row justify-between gap-2">
                    <T c="font-label-lg text-label-lg text-on-surface flex-1" style={{ fontWeight: '600' }}>
                      {subjectName(id, lang)}
                    </T>
                    <T c="font-label-md text-label-md text-on-surface-variant">
                      {s.mastery ?? 0}%{s.bestMock != null ? `, ${L('Paper 1', 'épreuve 1')} ${s.bestMock}%` : ''}
                    </T>
                  </V>
                  <Bar pct={s.mastery ?? 0} c="h-1.5 bg-surface-container" fill={(s.mastery ?? 0) >= 70 ? 'bg-secondary' : (s.mastery ?? 0) < 40 ? 'bg-error' : 'bg-primary-container'} />
                </V>
              );
            })}
          </V>
        </Section>

        <Section title={L('From the teachers', 'Des enseignants')}>
          {!(r.work || []).length ? (
            <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
              {L(`No work set yet. When ${first}'s teacher uses Klass8, the work and test results show here.`, `Aucun travail pour l’instant. Quand l’enseignant de ${first} utilise Klass8, les travaux et les notes s’affichent ici.`)}
            </T>
          ) : (
            <V c="gap-space-xs">
              {(late.length > 0 || open.length > 0) && (
                <V c="flex-row gap-1.5 flex-wrap">
                  {late.length > 0 && <Tag icon="schedule" text={`${late.length} ${L('late', 'en retard')}`} warn />}
                  {open.length > 0 && <Tag icon="assignment" text={`${open.length} ${L('to do', 'à faire')}`} />}
                </V>
              )}
              <V c="rounded-2xl border border-surface-container overflow-hidden">
                {r.work.map((w, i) => {
                  const left = Math.ceil((w.dueAt - Date.now()) / DAY);
                  const status = w.doneAt
                    ? `${L('Done', 'Fait')}${w.score != null ? `, ${w.score}%` : ''}`
                    : left > 0
                      ? `${L('Due in', 'Dans')} ${left} ${left === 1 ? L('day', 'jour') : L('days', 'jours')}`
                      : L('Not done', 'Pas fait');
                  return (
                    <V key={w.id} c={`px-space-md py-space-sm flex-row items-center gap-space-sm ${i ? 'border-t border-surface-container' : ''}`}>
                      <Ic n={w.doneAt ? 'check_circle' : left > 0 ? 'radio_button_unchecked' : 'error'} s={20} c={w.doneAt ? 'secondary' : left > 0 ? 'outline' : 'error'} fill={!!w.doneAt} />
                      <V c="flex-1 min-w-0">
                        <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '600' }} numberOfLines={1}>
                          {w.title}
                        </T>
                        <T c="font-body-sm text-body-sm text-on-surface-variant" numberOfLines={1}>
                          {w.className}
                        </T>
                      </V>
                      <T c={`font-label-md text-label-md ${!w.doneAt && left <= 0 ? 'text-error' : 'text-on-surface'}`} style={{ fontWeight: '700' }}>
                        {status}
                      </T>
                    </V>
                  );
                })}
              </V>
            </V>
          )}
        </Section>

        {(weak.length > 0 || strong.length > 0) && (
          <Section title={L('How you can help', 'Comment aider')}>
            <V c="gap-space-sm">
              {weak.some((w) => !w.pct) && (
                <V c="flex-row gap-space-sm">
                  <Ic n="flag" s={20} c="primary-container" />
                  <T c="font-body-md text-body-md text-on-surface flex-1" style={{ lineHeight: 22 }}>
                    {L('Not started yet', 'Pas encore commencé')}: {weak.filter((w) => !w.pct).map((w) => `“${w.u.short}” (${subjectName(w.u.subject, lang)})`).join(L(' and ', ' et '))}. {weak.filter((w) => !w.pct).length > 1
                      ? L(`Encourage ${first} to open them in Learn this week.`, `Encouragez ${first} à les ouvrir dans Cours cette semaine.`)
                      : L(`Encourage ${first} to open it in Learn this week.`, `Encouragez ${first} à l’ouvrir dans Cours cette semaine.`)}
                  </T>
                </V>
              )}
              {weak.filter((w) => w.pct > 0).map((w) => (
                <V key={w.unit} c="flex-row gap-space-sm">
                  <Ic n="lightbulb" s={20} c="primary-container" />
                  <T c="font-body-md text-body-md text-on-surface flex-1" style={{ lineHeight: 22 }}>
                    {L('Ask', 'Demandez à')} {first} {L('to explain', 'd’expliquer')} “{w.u.short}” ({subjectName(w.u.subject, lang)}, {w.pct}%). {L('Listening to them explain it is one of the best ways to help.', 'L’écouter expliquer est l’une des meilleures façons d’aider.')}
                  </T>
                </V>
              ))}
              {strong.length > 0 && (
                <V c="flex-row gap-space-sm">
                  <Ic n="star" s={20} c="secondary" fill />
                  <T c="font-body-md text-body-md text-on-surface flex-1" style={{ lineHeight: 22 }}>
                    {L('Doing well in', 'Réussit bien en')} {strong.map((w) => `“${w.u.short}” (${w.pct}%)`).join(L(' and ', ' et '))}. {L('A word of praise goes a long way.', 'Un mot d’encouragement compte beaucoup.')}
                  </T>
                </V>
              )}
            </V>
          </Section>
        )}

        <V c="gap-space-xs">
          <Cta variant="soft" icon={null} lead="picture_as_pdf" label={busy ? L('Preparing the report...', 'Préparation du rapport...') : L('Download the PDF report', 'Télécharger le rapport PDF')} disabled={busy} onPress={async () => {
            setBusy(true);
            try {
              await shareReportPdf(r, lang);
            } catch (e) {
              setError(e);
            } finally {
              setBusy(false);
            }
          }} />
          <P c="self-center py-2" hitSlop={8} onPress={() => navigation.navigate('StudyChat', { intent: 'ask' })}>
            <T c="font-label-lg text-label-lg text-primary-container" style={{ fontWeight: '700' }}>
              {L('Ask the Assistant how to help', 'Demander à l’Assistant comment aider')}
            </T>
          </P>
          <ErrorNote error={error} />
        </V>
      </V>
    </Screen>
  );
}

function Big({ value, label }) {
  return (
    <V c="flex-1 gap-0.5">
      <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '800' }} numberOfLines={1}>
        {value}
      </T>
      <T c="font-body-sm text-body-sm text-on-surface-variant">{label}</T>
    </V>
  );
}
