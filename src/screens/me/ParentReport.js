import { useState } from 'react';
import { Linking } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Avatar, Ic, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { PhoneField, Toggle, validPhone } from '../../ui/form';
import { post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { reportFromStats, reportText, shareReportPdf, whatsappUrl } from '../../lib/report';
import { unitById } from '../../data/units';

const mask = (p) => (p ? `+237 ${p.slice(3, 6)} ••• ${p.slice(-3)}` : '');
const opName = (p) => {
  const d = (p || '').slice(3);
  if (/^6(7|8)/.test(d) || /^65[0-4]/.test(d)) return 'MTN Cameroon';
  if (/^69/.test(d) || /^65[5-9]/.test(d)) return 'Orange Cameroon';
  return '';
};

export default function ParentReport() {
  const { user, stats, progress, updateMe } = useApp();
  const L = useL();
  const [editing, setEditing] = useState(!user?.parentPhone);
  const [phone, setPhone] = useState(user?.parentPhone ? user.parentPhone.slice(3) : '');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);
  const [toast, showToast] = useToast();
  const lang = user?.parentReportLang || 'en';
  const report = reportFromStats(user, stats, progress);
  const text = reportText(report, lang);

  const save = async (fields, msg) => {
    setError(null);
    try {
      await updateMe(fields);
      if (msg) showToast(msg);
    } catch (e) {
      setError(e);
    }
  };
  const savePhone = async () => {
    if (!validPhone(phone)) return setError(L('Enter a 9 digit Cameroon number.', 'Entrez un numéro de 9 chiffres.'));
    setBusy(true);
    await save({ parentPhone: `237${phone}` }, L('Parent number saved', 'Numéro enregistré'));
    setBusy(false);
    setEditing(false);
  };
  const makeCode = async () => {
    setError(null);
    try {
      const r = await post('/v1/parent/link-code');
      setCode(r.code);
    } catch (e) {
      setError(e);
    }
  };

  const freq = user?.parentReportFreq || 'weekly';
  const weakest = report.weakest?.[0];

  return (
    <V c="flex-1">
      <Screen bg="bg-surface" keyboard header={<StackHeader title={L('Parent progress report', 'Rapport pour le parent')} logo />}>
        <V c="pb-10">
          <V c="pt-4 pb-2">
            <V c="self-start flex-row items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container">
              <Ic n="schedule_send" s={16} c="on-secondary-container" />
              <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Weekly WhatsApp report', 'Rapport WhatsApp hebdomadaire')}</T>
            </V>
            <T c="font-headline-sm text-headline-sm text-on-surface mt-1.5">{L('Keep your parent in the loop', 'Tenez votre parent informé')}</T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">
              {L('A reminder appears every Friday. Your parent needs no app: the report opens in WhatsApp.', 'Un rappel chaque vendredi. Le rapport s’ouvre dans WhatsApp, sans application.')}
            </T>
          </V>

          <V c="gap-4">
            <V c="bg-surface-container-lowest rounded-xl p-4 shadow-sm">
              {editing ? (
                <V c="gap-space-sm">
                  <PhoneField label={L("Parent's WhatsApp number", 'Numéro WhatsApp du parent')} value={phone} onChangeText={setPhone} />
                  <Cta h="h-11" label={L('Save number', 'Enregistrer')} icon="check" loading={busy} onPress={savePhone} />
                </V>
              ) : (
                <>
                  <V c="flex-row items-start justify-between gap-3">
                    <V c="flex-row items-center gap-3 flex-1">
                      <V c="w-12 h-12 rounded-full bg-surface-container-high items-center justify-center" style={{ borderRadius: 24 }}>
                        <Ic n="family_restroom" s={24} c="primary" />
                      </V>
                      <V c="flex-1">
                        <T c="font-headline-sm text-headline-sm text-on-surface">{L('Parent or guardian', 'Parent ou tuteur')}</T>
                        <T c="font-body-sm text-body-sm text-on-surface-variant">
                          {mask(user.parentPhone)} <T c="font-body-sm text-outline" style={{ fontSize: 11 }}>({opName(user.parentPhone)})</T>
                        </T>
                      </V>
                    </V>
                  </V>
                  <V c="mt-4 pt-3 flex-row items-center justify-between gap-2 bg-surface-container-low/60 rounded-lg p-2.5">
                    <P c="flex-row items-center gap-1" onPress={() => setEditing(true)}>
                      <Ic n="edit" s={16} c="primary" />
                      <T c="font-label-md text-label-md text-primary">{L('Change number', 'Changer')}</T>
                    </P>
                    <T c="text-outline-variant" style={{ fontSize: 12 }}>
                      •
                    </T>
                    <P c="flex-row items-center gap-1" onPress={makeCode}>
                      <Ic n="link" s={16} c="secondary" />
                      <T c="font-label-md text-label-md text-secondary">{L('Link a parent account', 'Lier un compte parent')}</T>
                    </P>
                  </V>
                </>
              )}
              {code && (
                <V c="mt-3 p-3 rounded-lg bg-primary-fixed/40 gap-1">
                  <T c="font-label-sm text-label-sm text-on-primary-fixed-variant">{L('Parent link code (valid 48 hours)', 'Code parent (valable 48 h)')}</T>
                  <V c="flex-row items-center justify-between">
                    <T c="font-headline-md text-headline-md text-on-surface tracking-widest" style={{ fontWeight: '700' }}>
                      {code}
                    </T>
                    <P
                      c="px-3 py-1.5 rounded-lg bg-primary flex-row items-center gap-1"
                      onPress={async () => {
                        await Clipboard.setStringAsync(code);
                        showToast(L('Code copied', 'Code copié'));
                      }}
                    >
                      <Ic n="content_copy" s={16} c="on-primary" />
                      <T c="font-label-md text-label-md text-on-primary">{L('Copy', 'Copier')}</T>
                    </P>
                  </V>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your parent signs up as “Parent” in BioSpatial VR and enters this code to follow your progress.', 'Votre parent s’inscrit comme « Parent » et saisit ce code.')}</T>
                </V>
              )}
            </V>

            <V>
              <V c="flex-row items-center justify-between mb-2 px-1">
                <T c="font-label-md text-label-md text-on-surface-variant">{L('Report preview', 'Aperçu du rapport')}</T>
                <V c="flex-row items-center gap-1">
                  <V c="w-2 h-2 rounded-full bg-secondary" />
                  <T c="font-label-sm text-label-sm text-secondary">{L('From your real progress', 'Basé sur vos progrès')}</T>
                </V>
              </V>
              <V c="bg-surface-container rounded-xl overflow-hidden shadow-md">
                <V c="bg-primary px-3.5 py-2.5 flex-row items-center justify-between">
                  <V c="flex-row items-center gap-2.5 flex-1">
                    <V c="w-8 h-8 rounded-full bg-primary-container items-center justify-center" style={{ borderRadius: 16 }}>
                      <Ic n="science" s={20} c="on-primary-container" />
                    </V>
                    <V c="flex-1">
                      <T c="font-label-md text-label-md text-on-primary" numberOfLines={1}>
                        {firstName(user?.name)} · BioSpatial VR
                      </T>
                      <T c="font-label-sm text-label-sm text-primary-fixed-dim">{L('Shared from the app', 'Partagé depuis l’application')}</T>
                    </V>
                  </V>
                </V>
                <V c="p-3 bg-surface-container-high/40 gap-3">
                  <V c="items-center">
                    <V c="px-2 py-0.5 rounded-full bg-surface-container-lowest/80">
                      <T c="text-outline" style={{ fontSize: 11 }}>
                        {new Date().toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </T>
                    </V>
                  </V>
                  <V c="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm gap-2" style={{ maxWidth: '96%' }}>
                    <T c="font-label-md text-label-md text-primary">{L('Weekly GCE Biology report', 'Rapport hebdomadaire de biologie')}</T>
                    <T c="font-body-sm text-body-sm text-on-surface-variant" style={{ fontWeight: '500' }}>
                      {L('Student', 'Élève')}: <T c="font-body-sm text-body-sm text-on-surface" style={{ fontWeight: '700' }}>{user?.name}</T>
                      {user?.className ? ` (${user.className}${user?.schoolName ? `, ${user.schoolName}` : ''})` : ''}
                    </T>
                    <V c="flex-row gap-2 py-1.5">
                      <V c="flex-1 bg-surface-container-low p-2 rounded-lg">
                        <T c="font-label-sm text-label-sm text-on-surface-variant">{L('GCE readiness', 'Préparation')}</T>
                        <T c="font-headline-sm text-headline-sm text-primary" style={{ fontWeight: '700' }}>
                          {report.readiness}%
                        </T>
                        <T c="font-label-sm text-label-sm text-secondary">{L('Syllabus mastery', 'Maîtrise')}</T>
                      </V>
                      <V c="flex-1 bg-surface-container-low p-2 rounded-lg">
                        <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Study streak', 'Série')}</T>
                        <T c="font-headline-sm text-headline-sm text-tertiary-container" style={{ fontWeight: '700' }}>
                          {report.streak} {L('days', 'jours')}
                        </T>
                        <T c="font-label-sm text-label-sm text-outline">
                          {report.minutesWeek >= 60 ? `${(report.minutesWeek / 60).toFixed(1)} h` : `${report.minutesWeek} min`} {L('this week', 'cette semaine')}
                        </T>
                      </V>
                    </V>
                    <V>
                      <T c="font-label-md text-label-md text-on-surface mb-1">{L('Milestones', 'Étapes')}:</T>
                      {[
                        report.lastLab && `${report.lastLab.title}: ${report.lastLab.result || ''}`,
                        report.lastExam && `${report.lastExam.kind === 'p1' ? L('Paper 1 mock', 'Épreuve 1') : L('Paper 2', 'Épreuve 2')}: ${report.lastExam.score}/${report.lastExam.total} (${report.lastExam.pct}%)`,
                        report.strongest?.[0] && `${unitById(report.strongest[0].unit)?.short}: ${report.strongest[0].pct}% ${L('mastery', 'maîtrise')}`,
                      ]
                        .filter(Boolean)
                        .map((t) => (
                          <V key={t} c="flex-row items-start gap-1.5 pl-1">
                            <T c="text-secondary" style={{ fontWeight: '700' }}>
                              •
                            </T>
                            <T c="font-body-sm text-body-sm text-on-surface-variant flex-1">{t}</T>
                          </V>
                        ))}
                      {!report.lastLab && !report.lastExam && !report.strongest?.[0] && <T c="font-body-sm text-body-sm text-on-surface-variant pl-1">{L('Complete a lesson, lab or mock to add milestones.', 'Terminez une leçon, un TP ou un examen.')}</T>}
                    </V>
                    {weakest && (
                      <V c="bg-tertiary-fixed/40 p-2.5 rounded-lg">
                        <V c="flex-row items-center gap-1">
                          <Ic n="tips_and_updates" s={15} c="tertiary" />
                          <T c="font-label-sm text-label-sm text-tertiary">{L('Home revision tip', 'Conseil de révision')}</T>
                        </V>
                        <T c="font-body-sm text-body-sm text-on-tertiary-fixed-variant mt-0.5">
                          {L('Revise', 'Réviser')} “{unitById(weakest.unit)?.short}” ({weakest.pct}%) {L('this week.', 'cette semaine.')}
                        </T>
                      </V>
                    )}
                  </V>
                </V>
              </V>
            </V>

            <V c="bg-surface-container-lowest rounded-xl p-4 shadow-sm gap-4">
              <V c="flex-row items-center gap-2">
                <Ic n="tune" s={20} c="primary" />
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('Report preferences', 'Préférences')}</T>
              </V>
              <V>
                <T c="font-label-md text-label-md text-on-surface-variant mb-1.5">{L('Reminder frequency', 'Fréquence du rappel')}</T>
                <V c="flex-row gap-2">
                  {[
                    ['weekly', L('Weekly (Fri)', 'Hebdo (ven.)')],
                    ['mocks', L('After mocks', 'Après examens')],
                    ['monthly', L('Monthly', 'Mensuel')],
                  ].map(([id, label]) => (
                    <P key={id} c={`flex-1 py-2 px-1 items-center rounded-lg ${freq === id ? 'bg-primary shadow-sm' : 'bg-surface-container-low'}`} onPress={() => save({ parentReportFreq: id })}>
                      <T c={`font-label-sm text-label-sm ${freq === id ? 'text-on-primary' : 'text-on-surface'}`}>{label}</T>
                    </P>
                  ))}
                </V>
              </V>
              <V>
                <T c="font-label-md text-label-md text-on-surface-variant mb-1.5">{L('Report language', 'Langue du rapport')}</T>
                <V c="flex-row gap-2">
                  {[
                    ['en', 'English'],
                    ['fr', 'Français'],
                  ].map(([id, label]) => (
                    <P key={id} c={`flex-1 py-2 px-3 rounded-lg flex-row items-center justify-center gap-1.5 ${lang === id ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`} onPress={() => save({ parentReportLang: id })}>
                      {lang === id && <Ic n="check_circle" s={16} c="secondary" />}
                      <T c={`font-label-md text-label-md ${lang === id ? 'text-primary' : 'text-on-surface-variant'}`}>{label}</T>
                    </P>
                  ))}
                </V>
              </V>
              <V c="pt-2">
                <V c="flex-row items-start justify-between gap-3 bg-surface-container-low/70 p-3 rounded-lg">
                  <V c="flex-1">
                    <V c="flex-row items-center gap-1.5">
                      <Ic n="sms" s={16} c="tertiary" />
                      <T c="font-label-md text-label-md text-on-surface">{L('Inactivity SMS to parent', 'SMS d’inactivité au parent')}</T>
                    </V>
                    <T c="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{L('Sends your parent an SMS after 3 and 7 days without revision.', 'Envoie un SMS après 3 et 7 jours sans révision.')}</T>
                  </V>
                  <Toggle on={!!user?.inactivityAlert} onPress={() => save({ inactivityAlert: !user?.inactivityAlert })} accessibilityLabel="Inactivity SMS" />
                </V>
              </V>
            </V>
            <ErrorNote error={error} />
            <V c="gap-2.5 pt-1">
              <P
                c="w-full h-12 bg-primary rounded-lg flex-row items-center justify-center gap-2 shadow-sm"
                onPress={() => Linking.openURL(whatsappUrl(user?.parentPhone, text)).catch(() => showToast(L('WhatsApp is not installed', 'WhatsApp n’est pas installé'), 'error'))}
              >
                <Ic n="send_to_mobile" s={20} c="on-primary" />
                <T c="font-label-lg text-label-lg text-on-primary">{L('Send report on WhatsApp now', 'Envoyer le rapport sur WhatsApp')}</T>
              </P>
              <P
                c="w-full h-12 bg-surface-container-lowest rounded-lg flex-row items-center justify-center gap-2 shadow-sm"
                onPress={async () => {
                  try {
                    await shareReportPdf(report, lang);
                  } catch {
                    showToast(L('Could not create the PDF.', 'Impossible de créer le PDF.'), 'error');
                  }
                }}
              >
                <Ic n="picture_as_pdf" s={20} c="primary" />
                <T c="font-label-lg text-label-lg text-primary">{L('Download printable report (PDF)', 'Télécharger le rapport (PDF)')}</T>
              </P>
            </V>
          </V>
        </V>
      </Screen>
      {toast}
    </V>
  );
}

function firstName(n = '') {
  return n.trim().split(/\s+/)[0] || '';
}
