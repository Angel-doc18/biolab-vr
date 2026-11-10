import { createContext, useContext } from 'react';

// Code that runs every frame of a 3D view (and the drawing itself) runs outside
// React, so an error boundary never sees its errors, and on a phone an uncaught
// error closes the app. The viewers provide a handler through this context
// (react-three-fiber passes context into the Canvas), and every frame callback
// is wrapped so an error goes to the handler, which swaps in the diagram.
export const GLFail = createContext((error) => console.warn('3D view error', error));

export const safeUseFrame = (raw) =>
  function useFrame(callback, priority) {
    const fail = useContext(GLFail);
    return raw((state, delta, frame) => {
      try {
        return callback(state, delta, frame);
      } catch (error) {
        fail(error);
        return undefined;
      }
    }, priority);
  };

// Wraps the renderer's draw call the same way. Called from a Canvas onCreated.
export function guardRender(gl, fail) {
  const draw = gl.render.bind(gl);
  gl.render = (scene, camera) => {
    try {
      draw(scene, camera);
    } catch (error) {
      fail(error);
    }
  };
}
