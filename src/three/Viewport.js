import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, Pressable, StyleSheet, View } from 'react-native';
import { Canvas, useFrame, useThree } from '@react-three/fiber/native';
import * as THREE from 'three';
import { MODELS } from './models';
import Specimen, { Lights } from './Specimen';
import { Ic, T } from '../ui/kit';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const BASE_Z = 4.4;


function Rig({ spec, ctrl, active, xray, explodeRef, pinXY, pinOpacity, onSides }) {
  const root = useRef();
  const partRefs = useRef({});
  const { camera, size } = useThree();
  const keys = useMemo(() => Object.keys(spec.parts), [spec]);
  const sides = useRef({});
  const v = useMemo(() => new THREE.Vector3(), []);
  const n = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const c = ctrl.current;
    c.rx = THREE.MathUtils.lerp(c.rx, c.trx, 0.12);
    c.ry = THREE.MathUtils.lerp(c.ry, c.try, 0.12);
    c.z = THREE.MathUtils.lerp(c.z, c.tz, 0.15);
    if (root.current) root.current.rotation.set(c.rx, c.ry, 0);
    // Pull back while exploded so the spread parts stay in frame.
    c.ez = THREE.MathUtils.lerp(c.ez || 0, explodeRef.current * 1.6, 0.12);
    camera.position.set(0, 0, c.z + c.ez);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();

    let changed = false;
    keys.forEach((k, i) => {
      const g = partRefs.current[k];
      if (!g || !pinXY[i]) return;
      const a = spec.parts[k].anchor;
      v.set(a[0], a[1], a[2]);
      g.localToWorld(v);
      // Fade pins whose anchor has rotated behind the model's centre.
      n.copy(v).normalize();
      const facing = n.z > -0.2;
      pinOpacity[i].setValue(facing ? 1 : 0.35);
      v.project(camera);
      const x = ((v.x + 1) / 2) * size.width;
      const y = ((1 - v.y) / 2) * size.height;
      pinXY[i].setValue({ x, y });
      const left = x > size.width * 0.58;
      if (sides.current[k] !== left) {
        sides.current[k] = left;
        changed = true;
      }
    });
    if (changed) onSides({ ...sides.current });
  });

  return (
    <group ref={root}>
      <Specimen spec={spec} active={active} xray={xray} explodeRef={explodeRef} partRefs={partRefs} />
    </group>
  );
}

/**
 * Touch-driven 3D specimen viewer with numbered pins that track their part.
 * Swipe = rotate, pinch = zoom, tap a pin = select.
 */
const Viewport = forwardRef(function Viewport({ unitId, parts, active, onSelect, xray, explode, notes, onInteract }, ref) {
  const spec = MODELS[unitId];
  const keys = Object.keys(spec.parts);
  const ctrl = useRef(null);
  if (!ctrl.current) ctrl.current = { rx: spec.rot[0], ry: spec.rot[1], trx: spec.rot[0], try: spec.rot[1], z: BASE_Z, tz: BASE_Z };
  const explodeRef = useRef(0);
  explodeRef.current = explode ? 1 : 0;
  const pinXY = useMemo(() => keys.map(() => new Animated.ValueXY({ x: -100, y: -100 })), [unitId]);
  const pinOpacity = useMemo(() => keys.map(() => new Animated.Value(1)), [unitId]);
  const [sides, setSides] = useState({});

  const reset = () => {
    Object.assign(ctrl.current, { trx: spec.rot[0], try: spec.rot[1], tz: BASE_Z });
  };
  useImperativeHandle(ref, () => ({ reset }));

  // Turn the selected part toward the viewer, only when it is currently facing away,
  // so the default three-quarter view is kept whenever the part is already visible.
  useEffect(() => {
    if (!active) return;
    const a = spec.parts[active].anchor;
    const c = ctrl.current;
    const seen = new THREE.Vector3(...a).applyEuler(new THREE.Euler(c.trx, c.try, 0));
    if (seen.z > 0.05) return;
    const yaw = -Math.atan2(a[0], a[2]);
    // shortest path from the current yaw
    let d = yaw - c.try;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    c.try += d;
    c.trx = clamp(Math.atan2(a[1], Math.hypot(a[0], a[2])) * 0.6, -0.9, 0.9);
  }, [active, unitId]);

  const pan = useMemo(() => {
    let start = null;
    const dist = (t) => Math.hypot(t[0].pageX - t[1].pageX, t[0].pageY - t[1].pageY);
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        onInteract?.(true);
        const c = ctrl.current;
        start = { rx: c.trx, ry: c.try, z: c.tz, pinch: null };
      },
      onPanResponderMove: (e, g) => {
        const c = ctrl.current;
        const t = e.nativeEvent.touches;
        if (t && t.length >= 2) {
          const d = dist(t);
          if (!start.pinch) start.pinch = { d, z: c.tz };
          c.tz = clamp(start.pinch.z * (start.pinch.d / d), 2.6, 8);
          return;
        }
        c.try = start.ry + g.dx * 0.01;
        c.trx = clamp(start.rx + g.dy * 0.01, -1.3, 1.3);
      },
      onPanResponderRelease: () => onInteract?.(false),
      onPanResponderTerminate: () => onInteract?.(false),
    });
  }, [unitId]);

  return (
    <View style={styles.frame}>
      <Canvas
        key={unitId}
        camera={{ position: [0, 0, BASE_Z], fov: 40 }}
        onCreated={({ gl }) => gl.setClearColor('#ecf4ff', 1)}
        style={StyleSheet.absoluteFill}
      >
        <Lights />
        <Rig
          spec={spec}
          ctrl={ctrl}
          active={active}
          xray={xray}
          explodeRef={explodeRef}
          pinXY={pinXY}
          pinOpacity={pinOpacity}
          onSides={setSides}
        />
      </Canvas>
      <View style={StyleSheet.absoluteFill} {...pan.panHandlers} />
      {keys.map((k, i) => {
        const part = parts[i];
        const isActive = active === k;
        const left = sides[k];
        return (
          <Animated.View
            key={k}
            pointerEvents="box-none"
            style={[styles.pinAnchor, { opacity: pinOpacity[i], zIndex: isActive ? 5 : 2, transform: pinXY[i].getTranslateTransform() }]}
          >
            <Pressable
              accessibilityLabel={`Inspect ${part.list}`}
              onPress={() => onSelect(k)}
              hitSlop={6}
              style={[styles.pin, left ? { right: -16, flexDirection: 'row-reverse' } : { left: -16 }]}
            >
              <View style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center' }}>
                {isActive && <View style={styles.ping} />}
                <View style={[styles.dot, isActive ? styles.dotOn : null]}>
                  <T c={`font-label-sm text-label-sm ${isActive ? 'text-on-primary' : 'text-primary'}`}>{i + 1}</T>
                </View>
              </View>
              {(notes || isActive) && (
                <View style={[styles.label, isActive ? styles.labelOn : null]}>
                  <T c={`font-label-sm text-label-sm ${isActive ? 'text-on-primary' : 'text-on-surface'}`} numberOfLines={1}>
                    {part.name}
                  </T>
                  {isActive && <View style={styles.tealDot} />}
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
    aspectRatio: 4 / 3,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ecf4ff',
  },
  pinAnchor: { position: 'absolute', left: 0, top: 0, width: 0, height: 0 },
  pin: { position: 'absolute', top: -16, flexDirection: 'row', alignItems: 'center', gap: 6, minHeight: 32 },
  dot: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 4, shadowOffset: { width: 0, height: 2 }, elevation: 4 },
  dotOn: { backgroundColor: '#00507d' },
  ping: { position: 'absolute', width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(79,219,200,0.55)' },
  label: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.92)', maxWidth: 150 },
  labelOn: { backgroundColor: '#0369a1' },
  tealDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#6df5e1' },
});
