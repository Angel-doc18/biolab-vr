import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Animated, PanResponder, Pressable, StyleSheet, View } from 'react-native';
import { Canvas, useFrame, useThree } from '@react-three/fiber/native';
import * as THREE from 'three';
import { MODELS } from './models';
import Specimen, { Lights } from './Specimen';
import { C, R, alpha } from '../theme';
import { T } from '../components/ui';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const BASE_Z = 4.4;

// Pin looks from the design: [circle bg, ring colour, tag colour]
const PIN_STYLE = [
  [C.primary, alpha('primary-fixed', 0.6), 'primary'],
  [C.primary, alpha('secondary-fixed', 0.8), 'on-primary-container'], // "active focus" pin
  [C.secondary, alpha('secondary-fixed', 0.5), 'secondary'],
  [C['primary-container'], alpha('primary-fixed', 0.5), 'on-surface-variant'],
];

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

  // Turn the selected part toward the viewer — only when it is currently facing away,
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
        onCreated={({ gl }) => gl.setClearColor('#ffffff', 1)}
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
        const [bg, ring, tagColor] = PIN_STYLE[isActive ? 1 : i === 1 ? 0 : i];
        const left = sides[k];
        const size = isActive ? 32 : 28;
        return (
          <Animated.View
            key={k}
            pointerEvents="box-none"
            style={[
              styles.pinAnchor,
              { opacity: pinOpacity[i], zIndex: isActive ? 5 : 2, transform: pinXY[i].getTranslateTransform() },
            ]}
          >
            <Pressable
              accessibilityLabel={`Inspect ${part.list}`}
              onPress={() => onSelect(k)}
              hitSlop={6}
              style={[styles.pin, left ? { right: -size / 2, flexDirection: 'row-reverse' } : { left: -size / 2 }]}
            >
              <View
                style={{
                  width: size, height: size, borderRadius: size / 2, backgroundColor: bg,
                  alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0px 0px 0px 4px ${ring}, ${isActive ? '0px 10px 15px -3px rgba(0,0,0,0.1)' : '0px 4px 6px -1px rgba(0,0,0,0.1)'}`,
                }}
              >
                <T v="label-sm" w={700} c="on-primary">{i + 1}</T>
              </View>
              {notes && (
                <View
                  style={[
                    styles.label,
                    isActive
                      ? { backgroundColor: C['primary-container'], paddingHorizontal: 10, boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }
                      : { backgroundColor: alpha('surface-container-lowest', 0.95) },
                    { alignItems: left ? 'flex-end' : 'flex-start' },
                  ]}
                >
                  <T v="label-sm" w={isActive ? 700 : 600} c={isActive ? 'on-primary' : 'on-surface'} leading="tight" numberOfLines={1}>{part.name}</T>
                  <T v="label-sm" size={10} w={500} c={tagColor} style={{ lineHeight: 11 }} numberOfLines={1}>{part.tag}</T>
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
    borderRadius: R.xl,
    overflow: 'hidden',
    backgroundColor: C['surface-container-lowest'],
  },
  pinAnchor: { position: 'absolute', left: 0, top: 0, width: 0, height: 0 },
  pin: { position: 'absolute', top: -16, flexDirection: 'row', alignItems: 'center', gap: 6, minHeight: 32 },
  label: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: R.lg, boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.05)', maxWidth: 150 },
});
