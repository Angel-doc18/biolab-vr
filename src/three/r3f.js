// React Three Fiber for phones (expo-gl). The web build uses r3f.web.js.
// useFrame is wrapped so an error in a frame shows the diagram instead of closing the app.
import { useFrame as rawUseFrame } from '@react-three/fiber/native';
import { safeUseFrame } from './glFail';

export { Canvas, useThree } from '@react-three/fiber/native';
export const useFrame = safeUseFrame(rawUseFrame);
