import { useEffect, useMemo, useRef } from 'react';
import { Modal, PanResponder, StatusBar, StyleSheet, View } from 'react-native';
import { Canvas, useFrame, useThree } from './r3f';
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion } from 'expo-sensors';
import * as THREE from 'three';
import { MODELS, realSpec } from './models';
import { useAnatomy } from './anatomy';
import Specimen, { Lights } from './Specimen';
import { Ic, P, T } from '../ui/kit';

// Device-orientation → camera quaternion (same maths as three's DeviceOrientationControls).
const zee = new THREE.Vector3(0, 0, 1);
const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5)); // -90° about X: camera looks out of the back of the phone
const euler = new THREE.Euler();
const q0 = new THREE.Quaternion();
function orientationQuaternion(out, alpha, beta, gamma, screenAngle) {
  euler.set(beta, alpha, -gamma, 'YXZ');
  out.setFromEuler(euler);
  out.multiply(q1);
  out.multiply(q0.setFromAxisAngle(zee, -screenAngle));
}

function StereoRig({ spec, geos, motion, drag }) {
  const { gl, scene, camera, size } = useThree();
  const stereo = useMemo(() => {
    const s = new THREE.StereoCamera();
    s.eyeSep = 0.064;
    return s;
  }, []);
  const partRefs = useRef({});
  const explodeRef = useRef(0);
  const base = useRef(null);
  const raw = THREE.WebGLRenderer.prototype.render;

  useFrame(() => {
    const m = motion.current;
    if (m) {
      orientationQuaternion(camera.quaternion, m.alpha, m.beta, m.gamma, m.screen);
      // Re-centre: the first reading becomes "straight ahead".
      if (!base.current) base.current = camera.quaternion.clone().invert();
      camera.quaternion.premultiply(base.current);
    } else {
      camera.rotation.set(drag.current.x, drag.current.y, 0, 'YXZ');
    }
    camera.updateMatrixWorld();
    stereo.aspect = 0.5;
    stereo.update(camera);

    const w = size.width;
    const h = size.height;
    gl.autoClear = false;
    gl.setScissorTest(false);
    gl.clear();
    gl.setScissorTest(true);
    gl.setScissor(0, 0, w / 2, h);
    gl.setViewport(0, 0, w / 2, h);
    raw.call(gl, scene, stereo.cameraL); // left eye: unwrapped render, no frame present yet
    gl.setScissor(w / 2, 0, w / 2, h);
    gl.setViewport(w / 2, 0, w / 2, h);
    gl.render(scene, stereo.cameraR); // right eye: R3F-native wrapper presents the finished frame
    gl.setScissorTest(false);
  }, 1);

  return (
    <group position={[0, 0, -3.2]} rotation={[spec.rot[0], spec.rot[1], 0]}>
      <Specimen spec={spec} geos={geos} active={null} xray={false} explodeRef={explodeRef} partRefs={partRefs} />
    </group>
  );
}

export default function VRView({ unitId, onClose }) {
  const real = useMemo(() => realSpec(unitId), [unitId]);
  const anat = useAnatomy(real?.real);
  const spec = real && anat.status === 'ready' ? real : MODELS[unitId];
  const geos = spec.real ? anat.parts : null;
  const motion = useRef(null);
  const drag = useRef({ x: 0, y: 0 });

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {});
    let sub;
    DeviceMotion.isAvailableAsync()
      .then((ok) => {
        if (!ok) return;
        DeviceMotion.setUpdateInterval(16);
        sub = DeviceMotion.addListener((d) => {
          if (!d.rotation) return;
          const { alpha: a, beta: b, gamma: g } = d.rotation;
          motion.current = { alpha: a, beta: b, gamma: g, screen: ((d.orientation ?? 90) * Math.PI) / 180 };
        });
      })
      .catch(() => {});
    return () => {
      sub?.remove();
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP).catch(() => {});
    };
  }, []);

  // Fallback when there is no motion sensor: drag to look around.
  const pan = useMemo(() => {
    let s;
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => (s = { ...drag.current }),
      onPanResponderMove: (_, g) => {
        drag.current = { x: s.x + g.dy * 0.005, y: s.y + g.dx * 0.005 };
      },
    });
  }, []);

  return (
    <Modal visible animationType="fade" supportedOrientations={['landscape', 'portrait']} onRequestClose={onClose}>
      <StatusBar hidden />
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Canvas camera={{ position: [0, 0, 0], fov: 80, near: 0.05 }} onCreated={({ gl }) => gl.setClearColor('#0b1a24', 1)} style={StyleSheet.absoluteFill}>
          <Lights />
          <StereoRig key={spec.real || "diagram"} spec={spec} geos={geos} motion={motion} drag={drag} />
        </Canvas>
        <View style={StyleSheet.absoluteFill} {...pan.panHandlers} />
        <View pointerEvents="none" style={styles.divider} />
        <P onPress={onClose} accessibilityLabel="Exit VR" style={styles.close}>
          <Ic n="close" s={20} c="on-primary" />
          <T c="font-label-sm text-label-sm text-on-primary">Exit VR</T>
        </P>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  divider: { position: 'absolute', top: 0, bottom: 0, left: '50%', width: 2, marginLeft: -1, backgroundColor: '#000' },
  close: {
    position: 'absolute', top: 16, left: 16, flexDirection: 'row', alignItems: 'center', gap: 6,
    paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, backgroundColor: 'rgba(3,105,161,0.85)',
  },
});
