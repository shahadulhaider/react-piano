import { useRef } from "react";
import { Optional } from "../domain/types";
import { accessContext } from "../domain/audio";

// eslint-disable-next-line no-undef
export function useAudioContext(): Optional<AudioContextType> {
  const AudioCtx = useRef(accessContext());
  return AudioCtx.current;
}
