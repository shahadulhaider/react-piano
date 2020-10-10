import React, { FunctionComponent, ChangeEvent } from 'react';
import { useInstrument } from '../../state/Instrument';
import { InstrumentName } from 'soundfont-player';
import { options } from './options';

export const InstrumentSelector: FunctionComponent = () => {
  const { instrument, setInstrument } = useInstrument();

  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);

  return (
    <select className="instruments" onChange={updateValue} value={instrument}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
