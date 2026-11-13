// Reads an MP3 file's audio frames and their length in seconds, from the frame
// headers alone (no tools needed). build.js uses it to join the tutor's
// sentence clips into one file per language and to know where each sentence
// starts, so the captions follow the voice.
const fs = require('fs');

const BITRATES = {
  // Layer III, in kbit/s: MPEG 1, then MPEG 2 and 2.5
  1: [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320],
  2: [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
};
const RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };

function readMp3(file) {
  const b = fs.readFileSync(file);
  let i = 0;
  // An ID3v2 tag at the start is not audio.
  if (b.toString('latin1', 0, 3) === 'ID3') i = 10 + (((b[6] & 0x7f) << 21) | ((b[7] & 0x7f) << 14) | ((b[8] & 0x7f) << 7) | (b[9] & 0x7f));
  const frames = [];
  let seconds = 0;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff || (b[i + 1] & 0xe0) !== 0xe0) {
      i++;
      continue;
    }
    const ver = (b[i + 1] >> 3) & 3; // 3 = MPEG 1, 2 = MPEG 2, 0 = MPEG 2.5
    const layer = (b[i + 1] >> 1) & 3; // 1 = Layer III
    const br = (b[i + 2] >> 4) & 15;
    const sr = (b[i + 2] >> 2) & 3;
    const pad = (b[i + 2] >> 1) & 1;
    if (ver === 1 || layer !== 1 || br === 0 || br === 15 || sr === 3) {
      i++;
      continue;
    }
    const rate = RATES[ver][sr];
    const samples = ver === 3 ? 1152 : 576;
    const len = Math.floor(((samples / 8) * BITRATES[ver === 3 ? 1 : 2][br] * 1000) / rate) + pad;
    const frame = b.subarray(i, i + len);
    // The first frame may be a Xing/Info/VBRI header describing this file only;
    // it holds no sound and would give a joined file the wrong length.
    const head = frame.toString('latin1', 4, 48);
    const isInfo = !frames.length && /Xing|Info|VBRI/.test(head);
    if (!isInfo && frame.length === len) {
      frames.push(frame);
      seconds += samples / rate;
    }
    i += len;
  }
  return { frames, seconds };
}

module.exports = (file) => readMp3(file).seconds;
module.exports.readMp3 = readMp3;
