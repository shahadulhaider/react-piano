import { Optional } from "./types";

// eslint-disable-next-line no-undef
export function accessContext(): Optional<AudioContextType> {
  return window.AudioContext || window.webkitAudioContext || null;
}
