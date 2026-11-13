// Reports students made on an AI answer they thought was wrong. An admin reads
// the question and the answer, fixes what needs fixing, and marks it as checked.
import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { useL } from '../../i18n';
import { post } from '../../api/adminClient';
import { Card, Chips, Empty, Loading, Pill, date, useAdminLoad } from './kit';

function Block({ label, text }) {
  if (!text) return null;
  return (
    <V c="gap-1">
      <T c="font-label-sm text-label-sm text-on-surface-variant" style={{ fontWeight: '700' }}>
        {label}
      </T>
      <T c="font-body-md text-body-md text-on-surface" style={{ lineHeight: 22 }} selectable numberOfLines={12}>
        {text}
      </T>
    </V>
  );
}

export default function AdminReports() {
  const L = useL();
  const { data, error, busy, reload, setData } = useAdminLoad('/v1/admin/ai-reports');
  const [show, setShow] = useState('open');
  const [working, setWorking] = useState(null);
  const [actError, setActError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [toast, showToast] = useToast();

  const all = data?.items || [];
  const open = all.filter((r) => !r.resolvedAt).length;
  const items = all.filter((r) => (show === 'open' ? !r.resolvedAt : show === 'done' ? !!r.resolvedAt : true));

  const resolve = async (r) => {
    setWorking(r.id);
    setActError(null);
    try {
      await post(`/v1/admin/ai-reports/${r.id}/resolve`, {});
      setData((d) => ({ ...d, items: d.items.map((x) => (x.id === r.id ? { ...x, resolvedAt: Date.now() } : x)) }));
      showToast(L('Marked as checked', 'Marqué comme vérifié'));
    } catch (e) {
      setActError(e);
    } finally {
      setWorking(null);
    }
  };

  return (
    <V c="flex-1">
      <Screen
        header={<StackHeader title={L('Reports on AI answers', 'Signalements IA')} avatar={false} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await reload(), setRefreshing(false))} />}
      >
        <V c="gap-space-md pt-space-md pb-space-xl">
          <T c="font-body-md text-body-md text-on-surface-variant" style={{ lineHeight: 22 }}>
            {L('Students report an AI answer when they think it is wrong. Read each one, and mark it as checked when it is dealt with.', 'Les élèves signalent une réponse de l’IA qu’ils jugent fausse. Lisez chacune et marquez-la comme vérifiée une fois traitée.')}
          </T>
          <Chips
            value={show}
            onChange={setShow}
            items={[
              ['open', `${L('To check', 'À vérifier')}${open ? ` (${open})` : ''}`],
              ['done', L('Checked', 'Vérifiés')],
              ['all', L('All', 'Tous')],
            ]}
          />
          <ErrorNote error={error || actError} />
          {busy && !data && <Loading />}
          {!!data && !items.length && (
            <Card>
              <Empty icon="task_alt" text={show === 'open' ? L('Nothing to check. No open reports.', 'Rien à vérifier. Aucun signalement ouvert.') : L('No reports here.', 'Aucun signalement ici.')} />
            </Card>
          )}
          {items.map((r) => (
            <Card key={r.id}>
              <V c="p-space-md gap-space-sm">
                <V c="flex-row items-start gap-space-sm">
                  <V c="flex-1 gap-0.5 min-w-0">
                    <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }} numberOfLines={1}>
                      {r.name || L('Deleted account', 'Compte supprimé')}
                    </T>
                    <T c="font-label-sm text-label-sm text-outline">{date(r.createdAt)}</T>
                  </V>
                  <Pill text={r.resolvedAt ? L('Checked', 'Vérifié') : L('To check', 'À vérifier')} tone={r.resolvedAt ? 'ok' : 'warn'} />
                </V>
                <Block label={L('What is wrong, in their words', 'Le problème, selon l’élève')} text={r.reason} />
                <Block label={L('Their question', 'Sa question')} text={r.question} />
                <Block label={L('The AI answer', 'La réponse de l’IA')} text={r.answer} />
                {!r.resolvedAt && (
                  <P c="h-11 rounded-xl bg-primary flex-row items-center justify-center gap-2" onPress={() => resolve(r)} disabled={working === r.id}>
                    <Ic n="done" s={18} c="on-primary" />
                    <T c="font-label-lg text-label-lg text-on-primary" style={{ fontWeight: '700' }}>
                      {L('Mark as checked', 'Marquer vérifié')}
                    </T>
                  </P>
                )}
              </V>
            </Card>
          ))}
        </V>
      </Screen>
      {toast}
    </V>
  );
}
