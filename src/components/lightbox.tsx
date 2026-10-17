"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSound } from "./hooks/use-sound";

type LightboxProps = {
  name: string;
  screenshots: string[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
};

export default function Lightbox({
  name,
  screenshots,
  activeIndex,
  onNavigate,
  onClose,
}: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { play } = useSound();

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [activeIndex]);

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={`${name} screenshot ${activeIndex + 1} of ${screenshots.length}`}
      className="fixed inset-0 z-10 flex animate-fade-in items-center justify-center bg-black/80 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 rounded p-2 text-white transition-colors hover:bg-white/15"
        onMouseEnter={() => play("hover")}
        onClick={(event) => {
          event.stopPropagation();
          play("close");
          onClose();
        }}
      >
        <X size={20} />
      </button>

      {screenshots.length > 1 && (
        <button
          type="button"
          aria-label="Previous screenshot"
          className="absolute left-3 z-10 rounded p-2 text-white transition-colors hover:bg-white/15 sm:left-6"
          onMouseEnter={() => play("hover")}
          onClick={(event) => {
            event.stopPropagation();
            onNavigate((activeIndex - 1 + screenshots.length) % screenshots.length);
          }}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      <div className="relative" onClick={(event) => event.stopPropagation()}>
        <Image
          src={screenshots[activeIndex]}
          alt={`${name} screenshot ${activeIndex + 1}`}
          width={1200}
          height={1500}
          className="h-auto max-h-[85vh] w-auto max-w-[92vw] rounded object-contain"
        />
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Next screenshot"
            className="absolute right-3 z-10 rounded p-2 text-white transition-colors hover:bg-white/15 sm:right-6"
            onMouseEnter={() => play("hover")}
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((activeIndex + 1) % screenshots.length);
            }}
          >
            <ChevronRight size={28} />
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-sm text-white/80">
            {activeIndex + 1} / {screenshots.length}
          </p>
        </>
      )}
    </div>
  );
}