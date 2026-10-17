"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { useSound } from "./hooks/use-sound";
import RollingLink from "./rolling-link";

export type NavLink = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { play } = useSound();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-label="Menu"
      aria-modal="true"
      className="fixed inset-0 z-1000 sm:hidden"
      role="dialog"
    >
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 animate-fade-in bg-black/50"
        onClick={onClose}
      />
      <aside className="absolute inset-y-0 right-0 flex w-72 max-w-[80vw] animate-slide-in flex-col border-l border-foreground/15 bg-background p-5">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono font-bold tracking-tight">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
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
        <nav className="flex flex-col items-start gap-5 text-lg">
          {links.map((link, idx) => (
            <RollingLink
              key={link.href + idx}
              href={link.href}
              onClick={onClose}
              className="font-mono "
            >
              {link.label}
            </RollingLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
