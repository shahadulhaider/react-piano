import React, { FunctionComponent, useEffect } from 'react';
import { useSoundfont } from '../../adaters/Soundfont';
import { useAudioContext } from '../../hooks/useAudioContext';
import { useInstrument } from '../../state/Instrument';
import { Keyboard } from '../Keyboard';
import './style.css';

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, load, current, play, stop } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) {
      load(instrument);
    }
  }, [load, loading, current, instrument]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
