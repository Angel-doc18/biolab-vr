import { useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { C, S, R, SH, alpha, type } from '../theme';
import { Btn, Icon, Row, T } from '../components/ui';
import { Card, Screen } from '../components/chrome';

// The Anthropic key never ships in the app: questions go to the proxy in /server.
const PROXY = (process.env.EXPO_PUBLIC_AI_PROXY_URL || '').replace(/\/$/, '');

const SUGGESTIONS = [
  'Why do plant cells need a cell wall but animal cells don’t?',
  'What’s the difference between arteries and veins?',
  'Explain osmosis with a simple example',
  'Why is the surface area of the small intestine important?',
];

export default function AskAI({ onClose }) {
  const insets = useSafeAreaInsets();
  const [thread, setThread] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput('');
    setError(null);
    const history = thread;
    setThread([...history, { role: 'user', content: q }]);
    if (!PROXY) {
      setError('Ask AI is not connected yet: the app was built without an AI server address.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${PROXY}/api/ask`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: q, history }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `AI server error (${res.status}).`);
      setThread((t) => [...t, { role: 'assistant', content: data.text }]);
    } catch (e) {
      setError(e.message === 'Network request failed' ? 'Ask AI needs an internet connection — the rest of the app works offline.' : e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Screen bottomPad={S.md}>
        <Row style={{ justifyContent: 'space-between', marginTop: S.sm }}>
          <View style={{ flex: 1 }}>
            <T v="label-md" c="on-surface-variant" upper>Biology Tutor</T>
            <T v="headline-lg-mobile">Ask AI</T>
          </View>
          <Btn onPress={onClose} accessibilityLabel="Close Ask AI" style={{ width: 44, height: 44, borderRadius: R['2xl'], backgroundColor: C['surface-container-low'], alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="close" size={22} color={C['on-surface-variant']} />
          </Btn>
        </Row>
        <T v="body-sm" c="on-surface-variant">Ask any Biology question in your own words. Needs internet — everything else stays offline.</T>

        {thread.length === 0 && (
          <View style={{ gap: 8 }}>
            <T v="label-sm" c="on-surface-variant" upper>Try asking</T>
            {SUGGESTIONS.map((s) => (
              <Btn key={s} onPress={() => send(s)} style={{ padding: 14, borderRadius: R['2xl'], backgroundColor: C['surface-container-lowest'], boxShadow: SH.sm, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Icon name="auto_awesome" size={18} color={C.primary} />
                <T v="body-sm" style={{ flex: 1 }}>{s}</T>
              </Btn>
            ))}
          </View>
        )}

        {thread.map((m, i) =>
          m.role === 'user' ? (
            <View key={i} style={{ alignSelf: 'flex-end', maxWidth: '85%', paddingHorizontal: 14, paddingVertical: 10, borderRadius: R['2xl'], backgroundColor: C['primary-container'] }}>
              <T v="body-sm" c="on-primary">{m.content}</T>
            </View>
          ) : (
            <Card key={i} radius={R['2xl']}>
              <Row style={{ gap: 6, marginBottom: 6 }}>
                <Icon name="lightbulb" size={18} color={C.primary} />
                <T v="label-sm" c="primary">Tutor</T>
              </Row>
              <Rich text={m.content} />
            </Card>
          )
        )}
        {loading && <T v="body-sm" c="on-surface-variant">Thinking…</T>}
        {error && (
          <View style={{ padding: 12, borderRadius: R.xl, backgroundColor: alpha('error-container', 0.6) }}>
            <T v="body-sm" c="on-error-container">{error}</T>
          </View>
        )}
      </Screen>
      <Row style={{ position: 'absolute', left: 0, right: 0, bottom: 64 + insets.bottom, paddingHorizontal: S.md, paddingVertical: 10, gap: 8, backgroundColor: alpha('surface-container-lowest', 0.95), boxShadow: '0px -2px 12px rgba(0,0,0,0.04)' }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          onSubmitEditing={() => send()}
          placeholder="Ask a Biology question…"
          placeholderTextColor={C.outline}
          returnKeyType="send"
          style={[type('body-sm'), { flex: 1, minHeight: 44, paddingHorizontal: 14, borderRadius: R.full, backgroundColor: C['surface-container-low'], color: C['on-surface'] }]}
        />
        <Btn onPress={() => send()} disabled={loading || !input.trim()} accessibilityLabel="Send" style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: C['primary-container'], alignItems: 'center', justifyContent: 'center', opacity: loading || !input.trim() ? 0.5 : 1 }}>
          <Icon name="send" size={20} color={C['on-primary']} />
        </Btn>
      </Row>
    </KeyboardAvoidingView>
  );
}

// **bold** and "- " bullets, like the old MarkdownLite
function Rich({ text }) {
  return (
    <View style={{ gap: 8 }}>
      {text.split(/\n\s*\n/).map((block, bi) => (
        <View key={bi} style={{ gap: 4 }}>
          {block.split('\n').filter(Boolean).map((line, li) => {
            const bullet = /^\s*([-*]|\d+\.)\s+/.test(line);
            const body = line.replace(/^\s*[-*]\s+/, '');
            return (
              <Row key={li} style={{ alignItems: 'flex-start', gap: 6 }}>
                {bullet && /^\s*[-*]/.test(line) && <T v="body-sm" c="primary">•</T>}
                <T v="body-sm" c="on-surface-variant" leading="relaxed" style={{ flex: 1 }}>
                  {body.split(/(\*\*[^*]+\*\*)/g).map((part, pi) =>
                    part.startsWith('**') && part.endsWith('**') ? (
                      <T key={pi} v="body-sm" w={600} c="on-surface">{part.slice(2, -2)}</T>
                    ) : (
                      part
                    )
                  )}
                </T>
              </Row>
            );
          })}
        </View>
      ))}
    </View>
  );
}
