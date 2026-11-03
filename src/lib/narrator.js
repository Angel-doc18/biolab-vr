// Reads a list of short texts aloud one after another and reports which one is
// being spoken, so the screen can highlight the label or step it belongs to.
// say() reads a single text and reports it under a key, so its button can
// show that it is playing.
import { useCallback, useEffect, useRef, useState } from 'react';
import { speak, stop as stopVoice, voiceSession, warmVoice } from './voice';

export function useNarrator(lang = 'en') {
  const [index, setIndex] = useState(-1);
  const [saying, setSaying] = useState(null);
  const run = useRef(0);

  const stop = useCallback(() => {
    run.current += 1;
    stopVoice();
    setIndex(-1);
    setSaying(null);
  }, []);

  // segments: [{ text, key }]; starts at `from` and calls onEnd after the last one.
  // session: the voice of an explanation this one carries on from (for example
  // the lesson before its diagram), so the voice stays the same. after: the
  // text spoken next (or a function giving it), asked for ahead of time.
  // Returns the session, for whatever follows.
  const play = useCallback(
    (segments, { from = 0, onEnd, session = voiceSession(), after } = {}) => {
      stopVoice();
      run.current += 1;
      const mine = run.current;
      setSaying(null);
      const say = (i) => {
        if (mine !== run.current) return;
        if (i >= segments.length) {
          setIndex(-1);
          onEnd?.();
          return;
        }
        setIndex(i);
        const next = i + 1 < segments.length ? segments[i + 1].text : typeof after === 'function' ? after() : after;
        speak(segments[i].text, {
          lang,
          session,
          // The first words of a new explanation start with a short piece.
          quick: i === from && !session.heard,
          next,
          onDone: () => say(i + 1),
          // Another part of the screen started speaking.
          onStopped: () => mine === run.current && setIndex(-1),
          onError: () => mine === run.current && setIndex(-1),
        });
      };
      say(from);
      return session;
    },
    [lang]
  );

  // A single text, for example a reading just taken (keep: false) or a result.
  const say = useCallback(
    (text, { keep = true, key = 'say' } = {}) => {
      stopVoice();
      run.current += 1;
      const mine = run.current;
      setIndex(-1);
      setSaying(key);
      const end = () => mine === run.current && setSaying(null);
      speak(text, { lang, keep, quick: true, onDone: end, onStopped: end, onError: end });
    },
    [lang]
  );

  useEffect(() => {
    warmVoice();
    return () => {
      run.current += 1;
      stopVoice();
    };
  }, []);

  return { index, playing: index >= 0, saying, play, stop, say };
}
