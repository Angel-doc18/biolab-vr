import { Component, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Animated, AppState, Easing, PanResponder, Pressable, StyleSheet, View } from 'react-native';
import { Canvas, useFrame, useThree } from './r3f';
import * as THREE from 'three';
import { MODELS, realSpec } from './models';
import { modelOf } from '../data/units';
import { useAnatomy } from './anatomy';
import Specimen, { Centered, Lights, fitDistance } from './Specimen';
import { T } from '../ui/kit';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const FOV = 40;
const near = (a, b) => Math.abs(a - b) < 1e-3;

// The model the viewer shows for a topic: the real anatomy model once it has
// downloaded, otherwise the built-in one.
export function useModelSpec(unitId) {
  const real = useMemo(() => realSpec(modelOf(unitId)), [unitId]);
  const anat = useAnatomy(real?.real);
  const spec = real && anat.status === 'ready' ? real : MODELS[modelOf(unitId)];
  return { spec, geos: spec?.real ? anat.parts : null, real, status: real ? anat.status : 'none' };
}

// Rough size of a name label on screen, to keep labels from covering each other.
const labelWidth = (name) => Math.min(150, 18 + String(name || '').length * 7);
const overlap = (a, b) => a[0] < b[0] + b[2] && b[0] < a[0] + a[2] && a[1] < b[1] + b[3] && b[1] < a[1] + a[3];

function Rig({ spec, geos, ctrl, active, xray, explodeRef, motionRef, pinXY, pinOpacity, onSides, onHidden, widths, invalidateRef, fitKey }) {
  const root = useRef();
  const partRefs = useRef({});
  const { camera, size, invalidate } = useThree();
  invalidateRef.current = invalidate;
  const keys = useMemo(() => Object.keys(spec.parts), [spec]);
  const sides = useRef({});
  const hidden = useRef('');
  const at = useRef([]);
  const v = useMemo(() => new THREE.Vector3(), []);
  const n = useMemo(() => new THREE.Vector3(), []);
  const explodeNow = useRef(0);

  useFrame(() => {
    const c = ctrl.current;
    c.rx = THREE.MathUtils.lerp(c.rx, c.trx, 0.14);
    c.ry = THREE.MathUtils.lerp(c.ry, c.try, 0.14);
    const tz = (c.fit || 4.4) * c.zoom;
    c.z = THREE.MathUtils.lerp(c.z, tz, 0.16);
    if (root.current) root.current.rotation.set(c.rx, c.ry, 0);
    // Pull back while the parts are separated so they stay in frame.
    explodeNow.current = THREE.MathUtils.lerp(explodeNow.current, explodeRef.current, 0.12);
    camera.position.set(0, 0, c.z + explodeNow.current * (c.fit || 4.4) * 0.45);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();

    // Each label goes on the side of its pin away from the nearer edge.
    const want = {};
    keys.forEach((k, i) => {
      const g = partRefs.current[k];
      if (!g || !pinXY[i]) return;
      const a = spec.parts[k].anchor;
      v.set(a[0], a[1], a[2]);
      g.localToWorld(v);
      // Fade pins whose anchor has turned behind the model.
      n.copy(v).normalize();
      pinOpacity[i].setValue(n.z > -0.2 ? 1 : 0.35);
      v.project(camera);
      const x = ((v.x + 1) / 2) * size.width;
      const y = ((1 - v.y) / 2) * size.height;
      pinXY[i].setValue({ x, y });
      at.current[i] = [x, y];
      want[k] = x > size.width * 0.58;
    });

    // A name that would cover another name or a number moves to the other side
    // of its pin; if it still would, it is left out (its number stays). The
    // selected part's name is placed first, so it always shows.
    const off = [];
    if (widths) {
      const order = keys.map((k, i) => i).sort((a, b) => (keys[b] === active) - (keys[a] === active) || a - b);
      const dots = keys.map((k, i) => at.current[i] && [at.current[i][0] - 15, at.current[i][1] - 15, 30, 30]);
      const placed = [];
      for (const i of order) {
        const p = at.current[i];
        const k = keys[i];
        if (!p || !widths[i]) continue;
        const w = widths[i];
        const boxOn = (left) => (left ? [p[0] - 22 - w, p[1] - 10, w, 20] : [p[0] + 22, p[1] - 10, w, 20]);
        const free = (box) => box[0] >= 0 && box[0] + box[2] <= size.width && !placed.some((b) => overlap(box, b)) && !dots.some((d, j) => d && j !== i && overlap(box, d));
        if (free(boxOn(want[k]))) placed.push(boxOn(want[k]));
        else if (free(boxOn(!want[k]))) {
          want[k] = !want[k];
          placed.push(boxOn(want[k]));
        } else if (k === active) placed.push(boxOn(want[k]));
        else off.push(k);
      }
    }
    if (keys.some((k) => want[k] != null && sides.current[k] !== want[k])) {
      sides.current = { ...sides.current, ...want };
      onSides(sides.current);
    }
    const sig = off.join(',');
    if (sig !== hidden.current) {
      hidden.current = sig;
      onHidden(off);
    }

    // Only draw again while something is still moving: saves the battery.
    const settling = !near(c.rx, c.trx) || !near(c.ry, c.try) || !near(c.z, tz) || !near(explodeNow.current, explodeRef.current) || !c.fit;
    if (settling || motionRef.current) invalidate();
  });

  return (
    <group ref={root}>
      <Centered fitKey={fitKey} onSize={(box) => (ctrl.current.fit = fitDistance(box, size.width / Math.max(1, size.height), FOV))}>
        <Specimen spec={spec} geos={geos} active={active} xray={xray} explodeRef={explodeRef} partRefs={partRefs} motionRef={motionRef} />
      </Centered>
    </group>
  );
}

// If the phone cannot draw 3D (no GL context, a driver fault), the screen is
// told and shows the labelled diagram instead of a blank or a crash.
class GLBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error) {
    this.props.onFail?.(error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// The pointer on the part being taught: a ring that keeps pulsing out from the pin.
function Ping() {
  const [t] = useState(() => new Animated.Value(0));
  useEffect(() => {
    const loop = Animated.loop(Animated.timing(t, { toValue: 1, duration: 1100, easing: Easing.out(Easing.quad), useNativeDriver: true }));
    loop.start();
    return () => loop.stop();
  }, [t]);
  const scale = t.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.9] });
  const opacity = t.interpolate({ inputRange: [0, 1], outputRange: [0.7, 0] });
  return <Animated.View pointerEvents="none" style={[styles.ping, { opacity, transform: [{ scale }] }]} />;
}

/**
 * Touch-driven 3D viewer with numbered pins that follow their part.
 * Swipe = turn, pinch = zoom, tap a pin = select.
 * labels: 'names' (numbers and names) or 'numbers' (numbers only, for testing yourself).
 */
const Viewport = forwardRef(function Viewport(
  { unitId, model, parts, active, onSelect, xray, explode, labels = 'names', motion = false, onInteract, onFail, aspect = 4 / 3 },
  ref
) {
  const { spec, geos } = model;
  const keys = Object.keys(spec.parts);
  const ctrl = useRef(null);
  if (!ctrl.current) ctrl.current = { rx: spec.rot[0], ry: spec.rot[1], trx: spec.rot[0], try: spec.rot[1], z: 4.4, zoom: 1, fit: 0 };
  const explodeRef = useRef(0);
  explodeRef.current = explode ? 1 : 0;
  const motionRef = useRef(false);
  motionRef.current = !!motion;
  const invalidateRef = useRef(() => {});
  const specKey = `${unitId}:${spec.real || 'built-in'}`;
  const pinXY = useMemo(() => keys.map(() => new Animated.ValueXY({ x: -100, y: -100 })), [specKey]);
  const pinOpacity = useMemo(() => keys.map(() => new Animated.Value(1)), [specKey]);
  const [sides, setSides] = useState({});
  const [hiddenNames, setHiddenNames] = useState([]);
  const widths = useMemo(() => (labels === 'names' ? keys.map((k) => labelWidth(parts.find((p) => p.key === k)?.name)) : null), [labels, parts, specKey]);
  // A new GL surface after the app comes back from the background: some phones
  // lose the old one and would show an empty frame.
  const [surface, setSurface] = useState(0);
  useEffect(() => {
    let last = AppState.currentState;
    const sub = AppState.addEventListener('change', (next) => {
      if (last === 'background' && next === 'active') setSurface((s) => s + 1);
      last = next;
    });
    return () => sub.remove();
  }, []);

  useEffect(() => {
    Object.assign(ctrl.current, { trx: spec.rot[0], try: spec.rot[1], fit: 0 });
    invalidateRef.current();
  }, [specKey]);
  // Redraw when anything shown changes.
  useEffect(() => {
    invalidateRef.current();
  }, [active, xray, explode, motion, labels]);

  const reset = () => {
    Object.assign(ctrl.current, { trx: spec.rot[0], try: spec.rot[1], zoom: 1 });
    invalidateRef.current();
  };
  useImperativeHandle(ref, () => ({ reset }));

  // Turn the selected part towards the viewer, only when it is facing away, so
  // the default three-quarter view is kept whenever the part is already visible.
  useEffect(() => {
    if (!active || !spec.parts[active]) return;
    const a = spec.parts[active].anchor;
    const c = ctrl.current;
    const seen = new THREE.Vector3(...a).applyEuler(new THREE.Euler(c.trx, c.try, 0));
    if (seen.z > 0.05) return;
    // Built-in models are laid out to be read from their default view, so go back
    // to it instead of turning a flat layout edge-on towards the part.
    if (!spec.real) {
      Object.assign(c, { trx: spec.rot[0], try: spec.rot[1] });
    } else {
      let d = -Math.atan2(a[0], a[2]) - c.try;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      c.try += d;
      c.trx = clamp(Math.atan2(a[1], Math.hypot(a[0], a[2])) * 0.6, -0.9, 0.9);
    }
    invalidateRef.current();
  }, [active, specKey]);

  const pan = useMemo(() => {
    let start = null;
    const dist = (t) => Math.hypot(t[0].pageX - t[1].pageX, t[0].pageY - t[1].pageY);
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        onInteract?.(true);
        const c = ctrl.current;
        start = { rx: c.trx, ry: c.try, zoom: c.zoom, pinch: null };
      },
      onPanResponderMove: (e, g) => {
        const c = ctrl.current;
        const t = e.nativeEvent.touches;
        if (t && t.length >= 2) {
          const d = dist(t);
          if (!start.pinch) start.pinch = d;
          c.zoom = clamp(start.zoom * (start.pinch / d), 0.45, 1.8);
        } else {
          c.try = start.ry + g.dx * 0.01;
          c.trx = clamp(start.rx + g.dy * 0.01, -1.3, 1.3);
        }
        invalidateRef.current();
      },
      onPanResponderRelease: () => onInteract?.(false),
      onPanResponderTerminate: () => onInteract?.(false),
    });
  }, [unitId]);

  return (
    <View style={[styles.frame, { aspectRatio: aspect }]}>
      <GLBoundary onFail={onFail}>
        <Canvas
          key={`${specKey}:${surface}`}
          frameloop="demand"
          camera={{ position: [0, 0, 4.4], fov: FOV, near: 0.05, far: 100 }}
          onCreated={({ gl }) => gl.setClearColor('#ecf4ff', 1)}
          style={StyleSheet.absoluteFill}
        >
          <Lights />
          <Rig
            spec={spec}
            geos={geos}
            ctrl={ctrl}
            active={active}
            xray={xray}
            explodeRef={explodeRef}
            motionRef={motionRef}
            pinXY={pinXY}
            pinOpacity={pinOpacity}
            onSides={setSides}
            onHidden={setHiddenNames}
            widths={widths}
            invalidateRef={invalidateRef}
            fitKey={`${specKey}:${surface}`}
          />
        </Canvas>
      </GLBoundary>
      <View style={StyleSheet.absoluteFill} {...pan.panHandlers} />
      {keys.map((k, i) => {
        const part = parts.find((p) => p.key === k);
        if (!part) return null;
        const isActive = active === k;
        const left = sides[k];
        const showName = labels === 'names' && (isActive || (parts.length <= 8 && !hiddenNames.includes(k)));
        return (
          <Animated.View
            key={k}
            pointerEvents="box-none"
            style={[styles.pinAnchor, { opacity: pinOpacity[i], zIndex: isActive ? 5 : 2, transform: pinXY[i].getTranslateTransform() }]}
          >
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={labels === 'names' ? part.name : `Part ${i + 1}`}
              onPress={() => onSelect(k)}
              hitSlop={8}
              style={[styles.pin, left ? { right: -16, flexDirection: 'row-reverse' } : { left: -16 }]}
            >
              <View style={styles.dotBox}>
                {isActive && <Ping />}
                <View style={[styles.dot, isActive ? styles.dotOn : null]}>
                  <T c={`font-label-sm text-label-sm ${isActive ? 'text-on-primary' : 'text-primary'}`}>{i + 1}</T>
                </View>
              </View>
              {showName && (
                <View style={[styles.label, isActive ? styles.labelOn : null]}>
                  <T c={`font-label-sm text-label-sm ${isActive ? 'text-on-primary' : 'text-on-surface'}`} numberOfLines={1}>
                    {part.name}
                  </T>
                </View>
              )}
            </Pressable>
          </Animated.View>
        );
      })}
    </View>
  );
});

export default Viewport;

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ecf4ff',
  },
  pinAnchor: { position: 'absolute', left: 0, top: 0, width: 0, height: 0 },
  pin: { position: 'absolute', top: -16, flexDirection: 'row', alignItems: 'center', gap: 6, minHeight: 32 },
  dotBox: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 4 },
  dotOn: { backgroundColor: '#00507d' },
  ping: { position: 'absolute', width: 32, height: 32, borderRadius: 16, borderWidth: 3, borderColor: '#4fdbc8' },
  label: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.92)', maxWidth: 150 },
  labelOn: { backgroundColor: '#0369a1' },
});
