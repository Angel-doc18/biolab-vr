import { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, TextInput, View } from 'react-native';
import { C, S, R, type } from '../theme';
import { Btn, T } from './ui';
import { useStore } from '../store/store';

// Opened from the avatar or the school chip's edit icon.
export default function ProfileSheet({ onClose }) {
  const { state, setProfile } = useStore();
  const [draft, setDraft] = useState(state.profile);
  const field = (key, label) => (
    <View style={{ gap: 4 }}>
      <T v="label-sm" c="on-surface-variant" upper>{label}</T>
      <TextInput
        value={draft[key]}
        onChangeText={(v) => setDraft((d) => ({ ...d, [key]: v }))}
        style={[type('body-md'), { minHeight: 44, paddingHorizontal: 14, borderRadius: R.xl, backgroundColor: C['surface-container-low'], color: C['on-surface'] }]}
      />
    </View>
  );
  const save = () => {
    setProfile({ name: draft.name.trim() || state.profile.name, school: draft.school.trim(), form: draft.form.trim() });
    onClose();
  };
  return (
    <Modal transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Pressable onPress={onClose} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)' }} />
        <View style={{ backgroundColor: C['surface-container-lowest'], borderTopLeftRadius: R['3xl'], borderTopRightRadius: R['3xl'], padding: S.lg, paddingBottom: S.xl, gap: S.md }}>
          <T v="headline-sm">Student Profile</T>
          {field('name', 'Full name')}
          {field('school', 'School')}
          {field('form', 'Class')}
          <View style={{ flexDirection: 'row', gap: 8, justifyContent: 'flex-end' }}>
            <Btn onPress={onClose} style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: R.xl, backgroundColor: C['surface-container'] }}>
              <T v="label-md">Cancel</T>
            </Btn>
            <Btn onPress={save} style={{ paddingHorizontal: 20, paddingVertical: 10, borderRadius: R.xl, backgroundColor: C.primary }}>
              <T v="label-md" c="on-primary">Save</T>
            </Btn>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
