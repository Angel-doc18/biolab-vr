// React Three Fiber for the web preview (WebGL canvas).
// useFrame is wrapped so an error in a frame shows the diagram instead of a broken view.
import { useFrame as rawUseFrame } from '@react-three/fiber';
import { safeUseFrame } from './glFail';

export { Canvas, useThree } from '@react-three/fiber';
export const useFrame = safeUseFrame(rawUseFrame);
