const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// three.js ships a CommonJS build that calls `process.emitWarning`, which does not exist
// in React Native (it crashed Expo Go on iOS). Resolve every `three` import — ours and
// @react-three/fiber's `require('three')` — to the single ES-module build instead.
const threeModule = path.resolve(__dirname, 'node_modules/three/build/three.module.js');
const defaultResolve = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'three') return { type: 'sourceFile', filePath: threeModule };
  return (defaultResolve || context.resolveRequest)(context, moduleName, platform);
};

module.exports = config;
