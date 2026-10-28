// Development only: every labelled diagram on one page, for checking the
// drawings in the web preview (open the app with ?gallery or ?gallery=key).
// Add &tour to walk the teacher's pointer through each diagram's facts.
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DIAGRAMS } from '../diagrams';
import { DiagramView } from '../diagrams/Diagram';

export default function DiagramGallery() {
  const q = (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('gallery')) || '';
  const keys = Object.keys(DIAGRAMS).filter((k) => !q || q.split(',').some((p) => k === p || (p.endsWith('*') && k.startsWith(p.slice(0, -1)))));
  const width = Number(typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('w')) || 380;
  const tour = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('tour');
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!tour) return undefined;
    const t = setInterval(() => setStep((s) => s + 1), 1600);
    return () => clearInterval(t);
  }, [tour]);
  const factOf = (spec) => (spec.points?.length ? step % spec.points.length : null);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#e9edf1' }} contentContainerStyle={{ padding: 12, gap: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
      {keys.map((k) => (
        <View key={k} nativeID={`d-${k}`} style={{ width, backgroundColor: '#fff', padding: 8, borderRadius: 8 }}>
          <Text style={{ fontSize: 12, fontWeight: '700', marginBottom: 4 }}>{k}</Text>
          <DiagramView spec={DIAGRAMS[k]} point={tour && factOf(DIAGRAMS[k]) != null ? DIAGRAMS[k].points[factOf(DIAGRAMS[k])] : null} />
          <Text style={{ fontSize: 11, color: '#555', marginTop: 4 }}>{tour && factOf(DIAGRAMS[k]) != null ? DIAGRAMS[k].facts[factOf(DIAGRAMS[k])] : DIAGRAMS[k].title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
