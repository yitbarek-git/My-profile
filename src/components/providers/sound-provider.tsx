"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * Available sound effects. Drop the matching files into /public/sounds/:
 *   - /public/sounds/click.mp3   (buttons + links)
 *   - /public/sounds/open.mp3    (modal open)
 */
export type SoundName = "click" | "open" | "close" | "hover";

const SOUND_SRC: Record<SoundName, string> = {
  click: "/sounds/click.mp3",
  open: "/sounds/open.mp3",
  close: "/sounds/close.mp3",
  hover: "/sounds/hover.mp3",
};

type SoundContextValue = {
  play: (name: SoundName) => void;
  muted: boolean;
  setMuted: (muted: boolean) => void;
};

export const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(false);
  // Cache one Audio element per sound so repeated plays don't re-fetch.
  const cache = useRef<Partial<Record<SoundName, HTMLAudioElement>>>({});

  useEffect(() => {
    // Preload on the client only.
    (Object.keys(SOUND_SRC) as SoundName[]).forEach((name) => {
      const audio = new Audio(SOUND_SRC[name]);
      audio.preload = "auto";
      audio.volume = 0.4;
      cache.current[name] = audio;
    });
  }, []);

  const play = useCallback(
    (name: SoundName) => {
      if (muted) return;
      const base = cache.current[name];
      if (!base) return;
      // Clone so overlapping plays don't cut each other off.
      const instance = base.cloneNode() as HTMLAudioElement;
      instance.volume = base.volume;
      // Ignore autoplay rejections (before first user gesture).
      instance.play().catch(() => {});
    },
    [muted],
  );

  const value = useMemo<SoundContextValue>(
    () => ({ play, muted, setMuted }),
    [play, muted],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}
