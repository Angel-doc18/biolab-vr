// Every labelled diagram in the app, by key. Lessons name one in `figure`,
// units in `diagram`, Paper 2 questions in `figure`.
import { T, V } from '../ui/kit';
import { DiagramView } from './Diagram';
import { BIOLOGY } from './biology';
import { BIOLOGY_MORE } from './biology2';
import { CHEMISTRY } from './chemistry';
import { PHYSICS } from './physics';

export const DIAGRAMS = { ...BIOLOGY, ...BIOLOGY_MORE, ...CHEMISTRY, ...PHYSICS };

export function Diagram({ id, caption = true, maxHeight }) {
  const spec = DIAGRAMS[id];
  if (!spec) return null;
  return (
    <V c="gap-1">
      <DiagramView spec={spec} maxHeight={maxHeight} />
      {caption && !!spec.title && (
        <T c="font-body-sm text-body-sm text-on-surface-variant text-center" style={{ lineHeight: 18 }}>
          {spec.title}
        </T>
      )}
    </V>
  );
}

// The labelled diagram that represents a unit on cards and unit pages.
export function UnitPicture({ unit, maxHeight = 230 }) {
  if (!unit?.diagram || !DIAGRAMS[unit.diagram]) return null;
  return <Diagram id={unit.diagram} caption={false} maxHeight={maxHeight} />;
}
