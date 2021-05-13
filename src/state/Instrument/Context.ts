import { InstrumentName } from "soundfont-player";
import { useContext, createContext } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";

export interface ContextValue {
  instrument: InstrumentName;
  // eslint-disable-next-line no-unused-vars
  setInstrument: (instrument: InstrumentName) => void;
}

export const InstrumentContext = createContext<ContextValue>({
  instrument: DEFAULT_INSTRUMENT,
  setInstrument() {},
});

export const InstrumentContextConsumer = InstrumentContext.Consumer;

export const useInstrument = () => useContext(InstrumentContext);
