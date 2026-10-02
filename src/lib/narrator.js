// Reads a list of short texts aloud one after another and reports which one is
// being spoken, so the screen can highlight the label or step it belongs to.
import { useCallback, useEffect, useRef, useState } from 'react';
import { prepare, speak, stop as stopVoice } from './voice';

export function useNarrator(lang = 'en') {
  const [index, setIndex] = useState(-1);
  const run = useRef(0);

  const stop = useCallback(() => {
    run.current += 1;
    stopVoice();
    setIndex(-1);
  }, []);

  // segments: [{ text, key }]; starts at `from` and calls onEnd after the last one.
  const play = useCallback(
    (segments, { from = 0, onEnd } = {}) => {
      stopVoice();
      run.current += 1;
      const mine = run.current;
      const say = (i) => {
        if (mine !== run.current) return;
        if (i >= segments.length) {
          setIndex(-1);
          onEnd?.();
          return;
        }
        setIndex(i);
        if (i + 1 < segments.length) prepare(segments[i + 1].text, { lang });
        speak(segments[i].text, {
          lang,
          onDone: () => say(i + 1),
          onError: () => mine === run.current && setIndex(-1),
        });
      };
      say(from);
    },
    [lang]
  );

  // A single text, for example a reading just taken (keep: false) or a result.
  const say = useCallback(
    (text, { keep = true } = {}) => {
      run.current += 1;
      setIndex(-1);
      speak(text, { lang, keep });
    },
    [lang]
  );

  useEffect(
    () => () => {
      run.current += 1;
      stopVoice();
    },
    []
  );

  return { index, playing: index >= 0, play, stop, say };
}
