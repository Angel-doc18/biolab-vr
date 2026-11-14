// My account, for each admin: the photo, name, title, short bio, link and
// phone (the same details make their card on the website's team section,
// which they can show or hide), then the email they sign in with and their
// password, each confirmed with the current password.
import { useState } from 'react';
import { Avatar, Ic, Input, P, T, V } from '../../ui/kit';
import { Cta, ErrorNote, Screen, StackHeader, useToast } from '../../ui/chrome';
import { Field, Label, Toggle } from '../../ui/form';
import { useL } from '../../i18n';
import { API_BASE } from '../../api/client';
import { del, patch, post, put } from '../../api/adminClient';
import { pickProfilePhoto } from '../../lib/photo';
import { Card, Loading, Section, date, useAdminLoad } from './kit';

function Form({ p, L, showToast, onSaved }) {
  const [name, setName] = useState(p.name);
  const [title, setTitle] = useState(p.title);
  const [bio, setBio] = useState(p.bio);
  const [link, setLink] = useState(p.link);
  const [phone, setPhone] = useState(p.phone ? p.phone.replace(/^237/, '') : '');
  const [onSite, setOnSite] = useState(p.onSite);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const r = await patch('/v1/admin/account', { name: name.trim(), title: title.trim(), bio: bio.trim(), link: link.trim(), phone: phone ? `237${phone}` : '', onSite });
      onSaved(r);
      showToast(L('Your details are saved', 'Vos informations sont enregistrées'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card>
      <V c="p-space-md gap-space-md">
        <Field label={L('Full name', 'Nom complet')} value={name} onChangeText={setName} maxLength={80} autoCapitalize="words" />
        <Field label={L('Title', 'Titre')} value={title} onChangeText={setTitle} maxLength={80} hint={L('Shown under your name on the website.', 'Affiché sous votre nom sur le site.')} />
        <V c="gap-1.5">
          <Label right={<T c="font-label-sm text-label-sm text-outline">{`${bio.length}/280`}</T>}>{L('Short bio', 'Courte biographie')}</Label>
          <Input
            c="min-h-[96px] px-4 py-3 rounded-xl bg-surface-container-low shadow-sm text-body-md font-body-md text-on-surface"
            value={bio}
            onChangeText={setBio}
            maxLength={280}
            multiline
            textAlignVertical="top"
            placeholder={L('One or two sentences about you and your work at Klass8.', 'Une ou deux phrases sur vous et votre rôle chez Klass8.')}
          />
        </V>
        <Field label={L('Link (optional)', 'Lien (facultatif)')} value={link} onChangeText={setLink} maxLength={200} autoCapitalize="none" keyboardType="url" placeholder="https://" />
        <Field label={L('Phone (optional)', 'Téléphone (facultatif)')} value={phone} onChangeText={(t) => setPhone(t.replace(/\D/g, '').slice(0, 9))} keyboardType="phone-pad" placeholder="6XX XX XX XX" />
        <V c="flex-row items-center gap-space-sm">
          <V c="flex-1 gap-0.5">
            <T c="font-label-lg text-label-lg text-on-surface" style={{ fontWeight: '700' }}>
              {L('Show me on the website', 'M’afficher sur le site')}
            </T>
            <T c="font-body-sm text-body-sm text-on-surface-variant">{L('Your photo, name, title and bio in the team section.', 'Votre photo, nom, titre et bio dans la section équipe.')}</T>
          </V>
          <Toggle on={onSite} onPress={() => setOnSite((v) => !v)} accessibilityLabel={L('Show me on the website', 'M’afficher sur le site')} />
        </V>
        <ErrorNote error={error} />
        <Cta variant="dark" icon="check" label={L('Save my details', 'Enregistrer')} loading={busy} onPress={save} />
      </V>
    </Card>
  );
}

function SignIn({ p, L, showToast, onSaved }) {
  const [login, setLogin] = useState(p.login);
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      const r = await post('/v1/admin/account/login', { login: login.trim(), password });
      setPassword('');
      onSaved(r);
      showToast(L('You now sign in with this', 'Vous vous connectez désormais avec ceci'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card>
      <V c="p-space-md gap-space-md">
        <Field label={L('Email or phone you sign in with', 'E-mail ou téléphone de connexion')} value={login} onChangeText={setLogin} autoCapitalize="none" keyboardType="email-address" maxLength={254} />
        <Field label={L('Your current password', 'Votre mot de passe actuel')} secure value={password} onChangeText={setPassword} autoCapitalize="none" maxLength={128} />
        <ErrorNote error={error} />
        <Cta variant="soft" icon={null} lead="alternate_email" label={L('Change how I sign in', 'Changer ma connexion')} loading={busy} onPress={save} disabled={login.trim() === p.login} />
      </V>
    </Card>
  );
}

function Password({ L, showToast }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [again, setAgain] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const save = async () => {
    setError(null);
    if (next.length < 10) return setError(L('Use at least 10 characters, with letters and numbers.', 'Au moins 10 caractères, avec des lettres et des chiffres.'));
    if (next !== again) return setError(L('The two new passwords are not the same.', 'Les deux nouveaux mots de passe sont différents.'));
    setBusy(true);
    try {
      await post('/v1/admin/account/password', { currentPassword: current, newPassword: next });
      setCurrent('');
      setNext('');
      setAgain('');
      showToast(L('Password changed. Other devices were signed out.', 'Mot de passe changé. Les autres appareils sont déconnectés.'));
    } catch (e) {
      setError(e);
    } finally {
      setBusy(false);
    }
  };
  return (
    <Card>
      <V c="p-space-md gap-space-md">
        <Field label={L('Current password', 'Mot de passe actuel')} secure value={current} onChangeText={setCurrent} autoCapitalize="none" maxLength={128} />
        <Field label={L('New password', 'Nouveau mot de passe')} secure value={next} onChangeText={setNext} autoCapitalize="none" maxLength={128} hint={L('At least 10 characters, with letters and numbers.', 'Au moins 10 caractères, avec des lettres et des chiffres.')} />
        <Field label={L('New password again', 'Nouveau mot de passe, encore')} secure value={again} onChangeText={setAgain} autoCapitalize="none" maxLength={128} />
        <ErrorNote error={error} />
        <Cta variant="soft" icon={null} lead="lock_reset" label={L('Change my password', 'Changer mon mot de passe')} loading={busy} onPress={save} />
      </V>
    </Card>
  );
}

export default function AdminAccount() {
  const L = useL();
  const { data, error, busy, setData } = useAdminLoad('/v1/admin/account');
  const [toast, showToast] = useToast();
  const [photoBusy, setPhotoBusy] = useState(false);
  const [photoError, setPhotoError] = useState(null);
  const p = data?.profile;

  const choosePhoto = async () => {
    setPhotoError(null);
    try {
      const photo = await pickProfilePhoto('library');
      if (!photo) return;
      setPhotoBusy(true);
      let cardId = p.cardId;
      if (!cardId) cardId = (await patch('/v1/admin/account', { onSite: p.onSite })).profile.cardId;
      const r = await put(`/v1/admin/team/${cardId}/photo`, photo);
      setData((d) => ({ ...d, profile: { ...d.profile, cardId, photo: r.member.photo } }));
      showToast(L('Photo saved', 'Photo enregistrée'));
    } catch (e) {
      setPhotoError(e);
    } finally {
      setPhotoBusy(false);
    }
  };
  const removePhoto = async () => {
    setPhotoBusy(true);
    try {
      await del(`/v1/admin/team/${p.cardId}/photo`);
      setData((d) => ({ ...d, profile: { ...d.profile, photo: null } }));
    } catch (e) {
      setPhotoError(e);
    } finally {
      setPhotoBusy(false);
    }
  };

  return (
    <V c="flex-1">
      <Screen header={<StackHeader title={L('My account', 'Mon compte')} avatar={false} />} keyboard>
        <V c="gap-space-lg pt-space-md pb-space-xl">
          <ErrorNote error={error} />
          {busy && !p && <Loading />}
          {!!p && (
            <>
              <V c="items-center gap-space-sm">
                <P onPress={choosePhoto} disabled={photoBusy} accessibilityLabel={L('Change my photo', 'Changer ma photo')}>
                  <Avatar name={p.name} size={104} uri={p.photo ? `${API_BASE}${p.photo}` : undefined} />
                  <V c="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-primary items-center justify-center border-2 border-surface-container-lowest">
                    <Ic n="photo_camera" s={18} c="on-primary" />
                  </V>
                </P>
                <V c="items-center gap-0.5">
                  <T c="font-headline-md text-headline-md text-on-surface" style={{ fontWeight: '700' }}>
                    {p.name}
                  </T>
                  <T c="font-body-md text-body-md text-on-surface-variant">{p.title}</T>
                  {!!p.lastLoginAt && (
                    <T c="font-label-sm text-label-sm text-outline">
                      {L('Last sign-in', 'Dernière connexion')} {date(p.lastLoginAt)}
                    </T>
                  )}
                </V>
                {!!p.photo && (
                  <P onPress={removePhoto} hitSlop={8} disabled={photoBusy}>
                    <T c="font-label-md text-label-md text-error">{L('Remove the photo', 'Retirer la photo')}</T>
                  </P>
                )}
                <ErrorNote error={photoError} />
              </V>

              <Section title={L('About you', 'À propos de vous')}>
                <Form p={p} L={L} showToast={showToast} onSaved={(r) => setData(() => r)} />
              </Section>
              <Section title={L('How you sign in', 'Votre connexion')}>
                <SignIn p={p} L={L} showToast={showToast} onSaved={(r) => setData(() => r)} />
              </Section>
              <Section title={L('Password', 'Mot de passe')}>
                <Password L={L} showToast={showToast} />
              </Section>
            </>
          )}
        </V>
      </Screen>
      {toast}
    </V>
  );
}
