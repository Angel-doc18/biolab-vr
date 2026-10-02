// Reads a list of short texts aloud one after another and reports which one is
// being spoken, so the screen can highlight the label or step it belongs to.
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Speech from 'expo-speech';

export function useNarrator(lang = 'en') {
  const [index, setIndex] = useState(-1);
  const run = useRef(0);

  const stop = useCallback(() => {
    run.current += 1;
    Speech.stop();
    setIndex(-1);
  }, []);

  // segments: [{ text, key }]; starts at `from` and calls onEnd after the last one.
  const play = useCallback(
    (segments, { from = 0, onEnd } = {}) => {
      run.current += 1;
      const mine = run.current;
      Speech.stop();
      const say = (i) => {
        if (mine !== run.current) return;
        if (i >= segments.length) {
          setIndex(-1);
          onEnd?.();
          return;
        }
        setIndex(i);
        Speech.speak(segments[i].text, {
          language: lang === 'fr' ? 'fr-FR' : 'en-GB',
          rate: 0.92,
          onDone: () => say(i + 1),
          onError: () => mine === run.current && setIndex(-1),
        });
      };
      say(from);
    },
    [lang]
  );

  // A single sentence, for example a reading just taken.
  const say = useCallback(
    (text) => {
      run.current += 1;
      Speech.stop();
      setIndex(-1);
      Speech.speak(text, { language: lang === 'fr' ? 'fr-FR' : 'en-GB', rate: 0.95 });
    },
    [lang]
  );

  useEffect(() => () => {
    run.current += 1;
    Speech.stop();
  }, []);

  return { index, playing: index >= 0, play, stop, say };
}
