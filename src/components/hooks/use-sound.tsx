import { useContext } from "react";
import { SoundContext } from "../providers/sound-provider";

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound must be used within a <SoundProvider>");
  }
  return ctx;
}
