import React, { FunctionComponent } from "react";
import { useAudioContext } from "../../hooks/useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage";
import { PlayGround } from "../Playground";

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return AudioContext ? <PlayGround /> : <NoAudioMessage />;
};
