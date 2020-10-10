/// <reference types="react-scripts" />

type SondFonttype = typeof SoundFont;
type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
