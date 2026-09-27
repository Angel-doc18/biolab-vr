// Node-only APIs some libraries touch at import time; React Native's `process` lacks them.
if (typeof process !== 'undefined' && typeof process.emitWarning !== 'function') {
  process.emitWarning = () => {};
}
