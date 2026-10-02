import { useState } from 'react';
import { Modal, ScrollView } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ic, P, T, V } from '../../ui/kit';
import { Cta, Screen, StackHeader, useToast } from '../../ui/chrome';
import DrawPad, { Drawing } from '../../ui/DrawPad';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';
import { LABS, labById } from '../../data/labs';
import { unitById } from '../../data/units';
import { firstName } from '../../state/selectors';

const RUBRIC_EN = ['Title and magnification written', 'Clean continuous lines, no shading', 'Label lines ruled, not crossing', 'Labels written horizontally', 'Drawing uses at least half the space'];
const RUBRIC_FR = ['Titre et grossissement notés', 'Traits nets et continus, sans ombrage', 'Traits de légende à la règle, sans croisement', 'Légendes écrites horizontalement', 'Le dessin occupe au moins la moitié de l’espace'];

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
function drawingSvg(d) {
  if (!d) return '';
  const strokes = (d.strokes || []).map((p) => `<path d="${esc(p)}" stroke="#001e31" stroke-width="2.2" fill="none" stroke-linecap="round"/>`).join('');
  const lines = (d.lines || []).map(([a, b, c, e]) => `<line x1="${a}" y1="${b}" x2="${c}" y2="${e}" stroke="#001e31" stroke-width="1.4"/>`).join('');
  const labels = (d.labels || []).map((l) => `<text x="${l.x}" y="${l.y}" font-size="13">${esc(l.text)}</text>`).join('');
  return `<svg viewBox="0 0 300 300" width="220" height="220" style="border:1px solid #d7eaff;border-radius:8px">${strokes}${lines}${labels}</svg>`;
}

function DrawSheet({ entry, onClose, onSave, L, rubricList }) {
  const insets = useSafeAreaInsets();
  const [drawing, setDrawing] = useState(entry.drawing || null);
  const [rubric, setRubric] = useState(entry.rubric || []);
  return (
    <Modal visible animationType="slide" onRequestClose={onClose}>
      <V c="flex-1 bg-surface-container-lowest" style={{ paddingTop: insets.top }}>
        <V c="h-14 px-margin flex-row items-center justify-between">
          <P c="w-11 h-11 items-center justify-center" onPress={onClose} accessibilityLabel="Close">
            <Ic n="close" s={24} c="on-surface" />
          </P>
          <T c="font-headline-sm text-headline-sm text-on-surface flex-1 text-center" numberOfLines={1}>
            {L('Draw and label', 'Dessiner et légender')}
          </T>
          <V c="w-11" />
        </V>
        <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 24, gap: 16 }} keyboardShouldPersistTaps="handled">
          <T c="font-label-lg text-label-lg text-on-surface">{entry.title}</T>
          <DrawPad initial={drawing} onChange={setDrawing} L={L} />
          <V c="bg-surface-container-low rounded-xl p-space-md gap-space-sm">
            <T c="font-label-sm text-label-sm text-on-surface-variant">{L('Check your drawing', 'Vérifiez votre dessin')}</T>
            {rubricList.map((r, i) => {
              const on = rubric.includes(i);
              return (
                <P key={r} c="flex-row items-center gap-space-sm" scale={1} onPress={() => setRubric((x) => (on ? x.filter((y) => y !== i) : [...x, i]))}>
                  <V c={`w-5 h-5 rounded-full items-center justify-center ${on ? 'bg-secondary-container' : 'bg-surface-container'}`}>{on && <Ic n="check" s={14} c="on-secondary-container" />}</V>
                  <T c="font-body-md text-body-md text-on-surface flex-1">{r}</T>
                </P>
              );
            })}
          </V>
          <Cta label={L('Save drawing', 'Enregistrer le dessin')} icon="check" onPress={() => onSave({ drawing, rubric })} />
        </ScrollView>
      </V>
    </Modal>
  );
}

export default function Workbook({ navigation }) {
  const { user, pro, progress, updateWorkbook, prefs } = useApp();
  const L = useL();
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(false);
  const [toast, showToast] = useToast();
  const rubricList = prefs.lang === 'fr' ? RUBRIC_FR : RUBRIC_EN;
  const entries = [...progress.workbook].sort((a, b) => b.at - a.at);
  const drawings = entries.filter((e) => e.drawing).length;
  const labsDone = LABS.filter((l) => progress.labs[l.id]).length;
  const labsTotal = LABS.length;

  const exportPdf = async () => {
    if (!pro) return navigation.navigate('Paywall');
    setBusy(true);
    try {
      const rows = entries
        .map(
          (e) => `<div class="e"><h3>${esc(e.title)}</h3><div class="m">${new Date(e.at).toLocaleString('en-GB')} · ${esc(e.condition || '')}</div>
          <p><b>${L('Observation', 'Observation')}:</b> ${esc(e.observation)}</p><p><b>${L('Conclusion', 'Conclusion')}:</b> ${esc(e.conclusion)}</p>${drawingSvg(e.drawing)}</div>`
        )
        .join('');
      const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Helvetica,Arial;color:#001e31;margin:28px}h1{color:#0369a1;font-size:20px}.e{border-bottom:1px solid #e2efff;padding:12px 0;page-break-inside:avoid}h3{margin:0 0 4px;font-size:15px}.m{color:#707881;font-size:11px}p{font-size:12px;line-height:1.5}.sign{margin-top:36px;font-size:12px}</style></head><body>
      <h1>${L('Practical workbook', 'Cahier de travaux pratiques')}</h1><div class="m">${esc(user?.name)} · ${esc(user?.className || '')} · ${esc(user?.schoolName || '')}</div>${rows}
      <div class="sign">${L('Teacher signature', 'Signature de l’enseignant')}: ______________________ &nbsp; ${L('Date', 'Date')}: ____________</div></body></html>`;
      const { uri } = await Print.printToFileAsync({ html });
      if (await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri, { mimeType: 'application/pdf', UTI: 'com.adobe.pdf' });
    } catch (e) {
      showToast(e.message || L('Could not create the PDF.', 'Impossible de créer le PDF.'), 'error');
    } finally {
      setBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Lab workbook & drawings', 'Cahier de TP et dessins')} subtitle={L('Virtual lab practical', 'TP virtuel')} subtitleColor="primary-container" avatar={false} />}>
        <V c="gap-space-md pb-space-xl">
          <V c="flex-row items-center justify-between py-space-xs mt-space-sm">
            <V c="flex-row items-center gap-space-xs">
              <V c="w-8 h-8 rounded-full bg-surface-container items-center justify-center">
                <Ic n="menu_book" s={18} c="primary" />
              </V>
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('Workbook & observations', 'Cahier et observations')}</T>
            </V>
            <P c="flex-row items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high shadow-sm" onPress={exportPdf} disabled={busy || !entries.length}>
              <Ic n="military_tech" s={16} c="tertiary-container" fill />
              <T c="font-label-md text-label-md text-primary-container">{pro ? L('Export PDF', 'Exporter PDF') : L('Export PDF (full course)', 'PDF (cours complet)')}</T>
            </P>
          </V>

          <V c="rounded-xl bg-surface-container-low p-space-md shadow-sm">
            <V c="flex-row items-start justify-between">
              <V c="flex-1 gap-1">
                <V c="self-start flex-row items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/60">
                  <V c="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <T c="font-label-sm text-label-sm text-on-secondary-container">{L('Paper 3 portfolio', 'Portfolio épreuve 3')}</T>
                </V>
                <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {firstName(user?.name)}
                  {L('’s practical workbook', ' : cahier de TP')}
                </T>
                <T c="font-body-sm text-body-sm text-on-surface-variant">{[user?.className, user?.schoolName].filter(Boolean).join(' · ')}</T>
              </V>
              <V c="w-10 h-10 rounded-xl bg-primary-container items-center justify-center shadow-sm">
                <Ic n="biotech" s={22} c="on-primary" />
              </V>
            </V>
            <V c="flex-row gap-2 mt-space-md bg-surface-container-lowest/80 rounded-xl p-2.5">
              <V c="flex-1 items-center p-1">
                <T c="font-display-lg text-primary" style={{ fontSize: 22, lineHeight: 28 }}>
                  {entries.length}
                </T>
                <T c="font-label-sm text-label-sm text-on-surface-variant text-center">{L('Observations', 'Observations')}</T>
              </V>
              <V c="flex-1 items-center p-1 bg-surface-container/50 rounded-lg">
                <T c="font-display-lg text-secondary" style={{ fontSize: 22, lineHeight: 28 }}>
                  {drawings}
                </T>
                <T c="font-label-sm text-label-sm text-on-surface-variant text-center">{L('Drawings', 'Dessins')}</T>
              </V>
              <V c="flex-1 items-center p-1">
                <T c="font-headline-sm text-headline-sm text-secondary" style={{ fontWeight: '700' }}>
                  {labsDone}/{labsTotal}
                </T>
                <T c="font-label-sm text-label-sm text-on-surface-variant text-center">{L('Practicals done', 'TP faits')}</T>
              </V>
            </V>
          </V>

          <V c="flex-row items-center justify-between pt-space-xs">
            <V c="flex-row items-center gap-1.5">
              <Ic n="history_edu" s={20} c="primary" />
              <T c="font-headline-sm text-headline-sm text-on-surface">{L('Recorded observations', 'Observations notées')}</T>
            </V>
          </V>

          {!entries.length && (
            <V c="bg-surface-container-lowest rounded-xl p-space-md shadow-sm items-center gap-space-sm">
              <Ic n="science" s={32} c="primary-container" />
              <T c="font-label-lg text-label-lg text-on-surface">{L('No observations yet', 'Aucune observation')}</T>
              <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Run a practical and tap “Record observation” to add it here.', 'Faites un TP puis touchez « Noter » pour l’ajouter ici.')}</T>
              <Cta h="h-11" label={L('Go to the lab', 'Aller au labo')} onPress={() => navigation.navigate('Main', { screen: 'Lab' })} />
            </V>
          )}

          {entries.map((e) => {
            const lab = labById(e.labId);
            const unit = unitById(e.unit);
            const idx = LABS.findIndex((l) => l.id === e.labId) + 1;
            return (
              <V key={e.id} c="bg-surface-container-lowest rounded-xl p-space-md shadow-md gap-space-md">
                <V c="flex-row items-start justify-between gap-2">
                  <V c="flex-1 gap-1">
                    <V c="flex-row items-center gap-2">
                      <V c="px-2 py-0.5 rounded bg-primary-fixed">
                        <T c="font-label-sm text-label-sm text-on-primary-fixed">
                          Exp {unit?.n || 0}.{idx}
                        </T>
                      </V>
                      <V c="flex-row items-center gap-1">
                        <Ic n="schedule" s={14} />
                        <T c="font-label-sm text-label-sm text-on-surface-variant">
                          {new Date(e.at).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                        </T>
                      </V>
                    </V>
                    <T c="font-headline-md text-headline-md text-on-surface" style={{ lineHeight: 26 }}>
                      {e.title}
                    </T>
                  </V>
                  {!!e.result && (
                    <V c="px-2.5 py-1 rounded-full bg-secondary-container flex-row items-center gap-1">
                      <Ic n="check_circle" s={14} c="on-secondary-container" />
                      <T c="font-label-sm text-label-sm text-on-secondary-container">{e.result}</T>
                    </V>
                  )}
                </V>
                <V c="flex-row flex-wrap gap-1.5">
                  {!!e.condition && (
                    <V c="px-2.5 py-1 rounded-full bg-surface-container flex-row items-center gap-1">
                      <V c="w-1.5 h-1.5 rounded-full bg-primary-container" />
                      <T c="font-label-sm text-label-sm text-on-surface-variant">{e.condition}</T>
                    </V>
                  )}
                  {e.time != null && (
                    <V c="px-2.5 py-1 rounded-full bg-surface-container flex-row items-center gap-1">
                      <Ic n="timer" s={14} />
                      <T c="font-label-sm text-label-sm text-on-surface-variant">
                        {e.time} {e.timeUnit}
                      </T>
                    </V>
                  )}
                </V>
                <V c="bg-surface-container-low rounded-xl p-3 gap-1.5">
                  <V c="flex-row items-center gap-1">
                    <Ic n="edit_note" s={16} c="primary" />
                    <T c="font-label-md text-label-md text-primary">{L('Findings', 'Résultats')}</T>
                  </V>
                  <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }}>
                    {e.observation}
                  </T>
                  <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
                    {e.conclusion}
                  </T>
                </V>
                {e.drawing ? (
                  <V c="gap-2">
                    <V c="flex-row items-center justify-between">
                      <V c="flex-row items-center gap-1">
                        <Ic n="draw" s={16} c="secondary" />
                        <T c="font-label-md text-label-md text-on-surface">{L('Saved line drawing', 'Dessin enregistré')}</T>
                      </V>
                      <T c="font-label-sm text-label-sm text-secondary">
                        {(e.rubric || []).length}/{rubricList.length} {L('checks', 'critères')}
                      </T>
                    </V>
                    <V c="bg-surface-bright rounded-xl p-3 items-center">
                      <Drawing data={e.drawing} size={200} />
                    </V>
                  </V>
                ) : null}
                <V c="flex-row gap-2 pt-space-xs">
                  <P c="flex-1 h-12 px-3 rounded-lg bg-surface-container flex-row items-center justify-center gap-1.5" onPress={() => setEditing(e)}>
                    <Ic n="draw" s={18} c="primary" />
                    <T c="font-label-lg text-label-lg text-primary">{e.drawing ? L('Edit drawing', 'Modifier') : L('Draw & label', 'Dessiner')}</T>
                  </P>
                  <P c="flex-1 h-12 px-3 rounded-lg bg-primary-container flex-row items-center justify-center gap-1.5 shadow-sm" onPress={() => lab && navigation.navigate('LabRun', { labId: lab.id })}>
                    <Ic n="replay" s={18} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary">{L('Re-run', 'Refaire')}</T>
                  </P>
                </V>
              </V>
            );
          })}

          {entries.length > 0 && (
            <V c="rounded-xl bg-surface-container-highest p-space-md shadow-xl gap-3">
              <V c="flex-row items-start gap-3">
                <V c="w-10 h-10 rounded-full bg-primary-container items-center justify-center">
                  <Ic n="picture_as_pdf" s={20} c="on-primary" />
                </V>
                <V c="flex-1 gap-0.5">
                  <T c="font-headline-sm text-headline-sm text-on-surface" style={{ fontWeight: '700' }}>
                    {L('Export your Paper 3 workbook (PDF)', 'Exporter le cahier (PDF)')}
                  </T>
                  <T c="font-body-sm text-body-sm text-on-surface-variant">{L('A printable copy with a signature line for your teacher.', 'Une copie imprimable avec une ligne de signature.')}</T>
                </V>
              </V>
              <Cta h="h-12" icon="download" label={L('Download lab portfolio', 'Télécharger le portfolio')} loading={busy} onPress={exportPdf} />
            </V>
          )}
        </V>
      </Screen>
      {editing && (
        <DrawSheet
          entry={editing}
          L={L}
          rubricList={rubricList}
          onClose={() => setEditing(null)}
          onSave={(patch) => {
            updateWorkbook(editing.id, patch);
            setEditing(null);
            showToast(L('Drawing saved', 'Dessin enregistré'));
          }}
        />
      )}
      {toast}
    </V>
  );
}
