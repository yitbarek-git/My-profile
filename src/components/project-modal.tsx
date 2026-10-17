"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lightbox from "./lightbox";
import { useSound } from "./hooks/use-sound";

type ProjectLink = {
  label?: string;
  href: string;
};

export type ProjectModalData = {
  name: string;
  description: string;
  overview?: string;
  status?: string[];
  links?: ProjectLink[];
  screenshots?: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectModalData | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { play } = useSound();

  const screenshots = project?.screenshots ?? [];

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (activeIndex !== null) setActiveIndex(null);
        else onClose();
      } else if (activeIndex !== null && screenshots.length > 1) {
        if (event.key === "ArrowRight") {
          setActiveIndex((i) =>
            i === null ? i : (i + 1) % screenshots.length,
          );
        } else if (event.key === "ArrowLeft") {
          setActiveIndex((i) =>
            i === null ? i : (i - 1 + screenshots.length) % screenshots.length,
          );
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, activeIndex, screenshots.length]);

  if (!project) return null;

  return (
    <div
      aria-label={project.name}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-1000"
    >
      <button
        type="button"
        aria-label="Close project"
        className="absolute inset-0 animate-fade-in bg-black/50"
        onMouseEnter={() => play("hover")}
        onClick={() => {
          play("close");
          onClose();
        }}
      />
      <div className="absolute inset-0 overflow-hidden px-4 py-8 sm:px-6">
        <div className="mx-auto max-h-[calc(100dvh-4rem)] w-full max-w-2xl animate-fade-in overflow-y-auto rounded border border-foreground/15 bg-card p-5 shadow-lg overscroll-contain sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-mono text-2xl font-bold">{project.name}</h2>
              {project.status && project.status.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.status.map((label) => (
                    <span
                      key={label}
                      className="inline-flex rounded-full border border-primary/40 px-2.5 py-1 text-xs text-primary"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close project"
              className="rounded p-2 transition-colors hover:bg-primary/15 hover:text-primary"
              onMouseEnter={() => play("hover")}
              onClick={() => {
                play("close");
                onClose();
              }}
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-4 text-sm text-foreground/70 sm:text-base">
            {project.overview ?? project.description}
          </p>

          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-sm text-primary transition-colors hover:text-foreground"
                  onMouseEnter={() => play("hover")}
                  onClick={() => play("click")}
                >
                  {link.label ?? link.href}
                </a>
              ))}
            </div>
          )}

          {screenshots.length > 0 && (
            <div className="mt-6">
              <div className="mb-3 flex flex-wrap items-baseline gap-3">
                <h3 className="font-mono text-sm uppercase tracking-wide text-foreground/60">
                  Gallery
                </h3>
                <p className="text-xs text-foreground/40">Tap to zoom</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {screenshots.map((src, i) => (
                  <button
                    key={`${src}-${i}`}
                    type="button"
                    aria-label={`View ${project.name} screenshot ${i + 1}`}
                    className="relative aspect-4/5 cursor-zoom-in overflow-hidden rounded-lg border border-foreground/10 transition-transform duration-200 hover:scale-[1.02]"
                    onMouseEnter={() => play("hover")}
                    onClick={() => {
                      play("click");
                      setActiveIndex(i);
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          name={project.name}
          screenshots={screenshots}
          activeIndex={activeIndex}
          onNavigate={setActiveIndex}
          onClose={() => {
            play("close");
            setActiveIndex(null);
          }}
        />
      )}
    </div>
  );
}
