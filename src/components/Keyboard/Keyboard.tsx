/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { FunctionComponent } from "react";
import { OctavesRange, selectKey } from "../../domain/keyboard";
import { notes, MidiValue } from "../../domain/note";
import { Key } from "../Key";
import "./style.css";

export interface KeyboardProps {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
}

export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  play,
  stop,
}) => {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave as OctavesRange, index);

        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
