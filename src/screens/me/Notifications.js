import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ic, P, T, V } from '../../ui/kit';
import { ErrorNote, Screen, Spinner, StackHeader } from '../../ui/chrome';
import { StaticTabBar } from '../../ui/TabBar';
import { del, get, post } from '../../api/client';
import { useApp } from '../../state/store';
import { useL } from '../../i18n';

const KIND = {
  assignment: { icon: 'assignment', bg: 'bg-secondary-container/40', fg: 'secondary', group: 'academic' },
  class: { icon: 'school', bg: 'bg-surface-container', fg: 'primary-container', group: 'academic' },
  report: { icon: 'insights', bg: 'bg-surface-container', fg: 'primary-container', group: 'reports' },
  parent: { icon: 'family_restroom', bg: 'bg-surface-container', fg: 'primary-container', group: 'reports' },
  payment: { icon: 'workspace_premium', bg: 'bg-tertiary-fixed/50', fg: 'tertiary', group: 'account' },
};

function ago(at, L) {
  const m = Math.round((Date.now() - at) / 60000);
  if (m < 1) return L('now', 'maintenant');
  if (m < 60) return `${m}m`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.round(h / 24);
  return `${d}d`;
}

export default function Notifications({ navigation }) {
  const { setUnread, user } = useApp();
  const L = useL();
  const [items, setItems] = useState(null);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    try {
      const r = await get('/v1/notifications');
      setItems(r.items);
      setUnread(r.items.filter((n) => !n.read).length);
      setError(null);
    } catch (e) {
      setError(e);
      setItems((x) => x || []);
    }
  }, [setUnread]);
  useFocusEffect(
    useCallback(() => {
      load();
    }, [load])
  );

  const markAll = async () => {
    setItems((x) => x.map((n) => ({ ...n, read: true })));
    setUnread(0);
    post('/v1/notifications/read', { all: true }).catch(() => {});
  };
  const clearAll = async () => {
    setItems([]);
    setUnread(0);
    del('/v1/notifications').catch(() => {});
  };
  const open = (n) => {
    if (!n.read) {
      setItems((x) => x.map((i) => (i.id === n.id ? { ...i, read: true } : i)));
      setUnread((u) => Math.max(0, u - 1));
      post('/v1/notifications/read', { ids: [n.id] }).catch(() => {});
    }
    if (n.kind === 'assignment') navigation.navigate('Main', { screen: 'Exams' });
    else if (n.kind === 'payment') navigation.navigate('Main', { screen: 'Me' });
    else if (n.kind === 'report') navigation.navigate(user?.role === 'parent' ? 'Main' : 'ParentReport');
    else if (n.kind === 'class' && user?.role === 'teacher') navigation.navigate('Main', { screen: 'Home' });
  };

  const unread = (items || []).filter((n) => !n.read).length;
  const list = (items || []).filter((n) => filter === 'all' || (KIND[n.kind]?.group || 'account') === filter);
  const today = list.filter((n) => Date.now() - n.createdAt < 86400000);
  const earlier = list.filter((n) => Date.now() - n.createdAt >= 86400000);

  const Item = ({ n }) => {
    const k = KIND[n.kind] || { icon: 'notifications', bg: 'bg-surface-container', fg: 'primary-container' };
    return (
      <P c="flex-row items-start gap-3.5 p-3.5 bg-surface-container-lowest rounded-xl shadow-sm" onPress={() => open(n)} scale={0.99}>
        <V c={`w-11 h-11 rounded-xl items-center justify-center ${k.bg}`}>
          <Ic n={k.icon} s={24} c={k.fg} />
        </V>
        <V c="flex-1 pr-2">
          <V c="flex-row items-baseline justify-between gap-1 mb-0.5">
            <T c="font-headline-sm text-headline-sm text-on-surface flex-1" numberOfLines={1}>
              {n.title}
            </T>
            <T c="font-label-sm text-label-sm text-outline">{ago(n.createdAt, L)}</T>
          </V>
          <T c="font-body-md text-body-md text-on-surface-variant" numberOfLines={2} style={{ lineHeight: 21 }}>
            {n.body}
          </T>
          {n.kind === 'assignment' && n.data?.dueAt && (
            <V c="mt-2.5 flex-row items-center gap-2">
              <V c="flex-row items-center gap-1 px-2 py-0.5 rounded-lg bg-secondary-container/50">
                <Ic n="timer" s={14} c="on-secondary-container" />
                <T c="font-label-sm text-label-sm text-on-secondary-container">
                  {L('Due', 'Pour le')} {new Date(n.data.dueAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </T>
              </V>
            </V>
          )}
        </V>
        {!n.read && <V c="w-2.5 h-2.5 rounded-full bg-primary-container mt-1.5 shadow-sm" />}
      </P>
    );
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('Notifications', 'Notifications')} />} pad="" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => (setRefreshing(true), await load(), setRefreshing(false))} />}>
        <V c="pb-8">
          <V c="px-margin pt-space-md pb-space-sm flex-row items-center justify-between">
            <V c="flex-row items-center gap-space-sm">
              <T c="font-headline-lg text-headline-lg text-on-surface tracking-tight">{L('Notifications', 'Notifications')}</T>
              {unread > 0 && (
                <V c="bg-primary-container px-2 py-0.5 rounded-full shadow-sm">
                  <T c="font-label-sm text-label-sm text-on-primary">
                    {unread} {L('new', 'nouv.')}
                  </T>
                </V>
              )}
            </V>
            {unread > 0 ? (
              <P c="py-1 px-1" onPress={markAll}>
                <T c="font-label-lg text-label-lg text-primary-container">{L('Mark all as read', 'Tout marquer lu')}</T>
              </P>
            ) : items?.length ? (
              <P c="py-1 px-1" onPress={clearAll}>
                <T c="font-label-lg text-label-lg text-primary-container">{L('Clear all', 'Tout effacer')}</T>
              </P>
            ) : null}
          </V>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 4, paddingBottom: 16, paddingTop: 4 }}>
            {[
              ['all', `${L('All', 'Toutes')} (${items?.length || 0})`],
              ['academic', L('Academic', 'Scolaire')],
              ['reports', L('Reports', 'Rapports')],
              ['account', L('Account', 'Compte')],
            ].map(([id, label]) => (
              <P key={id} c={`px-3.5 py-1.5 rounded-full ${filter === id ? 'bg-primary-container shadow-sm' : 'bg-surface-container-low'}`} onPress={() => setFilter(id)}>
                <T c={`font-label-md text-label-md ${filter === id ? 'text-on-primary' : 'text-on-surface-variant'}`}>{label}</T>
              </P>
            ))}
          </ScrollView>
          <V c="px-margin gap-space-lg">
            <ErrorNote error={error} />
            {items === null ? (
              <Spinner />
            ) : !list.length ? (
              <V c="items-center gap-2 py-space-xl">
                <V c="w-16 h-16 rounded-2xl bg-surface-container-low items-center justify-center">
                  <Ic n="notifications_off" s={32} c="outline" />
                </V>
                <T c="font-headline-sm text-headline-sm text-on-surface">{L('You are all caught up', 'Rien de nouveau')}</T>
                <T c="font-body-sm text-body-sm text-on-surface-variant text-center">{L('Work from your teacher, reports and payments will appear here.', 'Devoirs, rapports et paiements apparaîtront ici.')}</T>
              </V>
            ) : (
              [
                [L('Today', 'Aujourd’hui'), today],
                [L('Earlier', 'Plus tôt'), earlier],
              ]
                .filter(([, l]) => l.length)
                .map(([label, l]) => (
                  <V key={label} c="gap-space-sm">
                    <T c="font-label-sm text-label-sm text-outline">{label}</T>
                    {l.map((n) => (
                      <Item key={n.id} n={n} />
                    ))}
                  </V>
                ))
            )}
          </V>
        </V>
      </Screen>
      <StaticTabBar active="Home" />
    </V>
  );
}
