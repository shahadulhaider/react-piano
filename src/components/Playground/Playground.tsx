import React, { FunctionComponent } from "react";
import { InstrumentContextProvider } from "../../state/Instrument";
import { KeyboardWithInstrument } from "../Keyboard";
import { InstrumentSelector } from "../InstrumentSelector";

export const PlayGround: FunctionComponent = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
