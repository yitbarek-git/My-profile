"use client";

import { Menu, Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useSound } from "./hooks/use-sound";
import MobileMenu from "./mobile-menu";
import RollingLink from "./rolling-link";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/gear", label: "My Gear" },
  { href: "/blogs", label: "Blogs" },
];

function ToggleButton({
  className,
  onClick,
  ariaLabel,
  children,
}: {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  const { play } = useSound();
  return (
    <button
      aria-label={ariaLabel}
      className={`${className} rounded p-2 transition-colors hover:bg-primary/15 hover:text-primary`}
      onMouseEnter={() => play("hover")}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function SoundToggleButton() {
  const { muted, setMuted, play } = useSound();

  function toggleSound() {
    play("click");
    setMuted(!muted);
  }

  return (
    <ToggleButton
      onClick={toggleSound}
      ariaLabel={muted ? "Turn sound on" : "Turn sound off"}
    >
      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </ToggleButton>
  );
}

function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const { play } = useSound();

  if (!isMounted) {
    return null;
  }

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    play("click");
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const documentWithTransition = document as Document & {
      startViewTransition?: (update: () => void) => unknown;
    };
    const { clientX, clientY } = event;
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY),
    );

    document.documentElement.style.setProperty("--theme-x", `${clientX}px`);
    document.documentElement.style.setProperty("--theme-y", `${clientY}px`);
    document.documentElement.style.setProperty("--theme-radius", `${radius}px`);

    const isTouchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;

    if (documentWithTransition.startViewTransition && !isTouchDevice) {
      documentWithTransition.startViewTransition(() => setTheme(nextTheme));
    } else {
      setTheme(nextTheme);
    }
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      ariaLabel={resolvedTheme === "dark" ? "Use light mode" : "Use dark mode"}
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </ToggleButton>
  );
}

function MenuButton({ onClick }: { onClick: () => void }) {
  const { play } = useSound();
  return (
    <ToggleButton
      className="block sm:hidden"
      onClick={() => {
        play("open");
        onClick();
      }}
      ariaLabel="Open menu"
    >
      <Menu size={16} />
    </ToggleButton>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const previousScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < previousScrollY.current;

      setVisible(currentScrollY < 80 || scrollingUp);
      previousScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`container sticky font-mono top-4 z-999 flex items-center justify-between rounded border border-foreground/15 bg-background/90 px-4 py-3 backdrop-blur transition-transform duration-300 sm:top-6 ${visible ? "translate-y-0" : "-translate-y-[calc(100%+1.5rem)]"}`}
      >
        <RollingLink className="font-bold tracking-tight" href="/">
        Yitbarek.K
        </RollingLink>

        <div className="flex items-center gap-4 sm:gap-6 ">
          <div className="hidden sm:flex items-center gap-3 text-sm sm:gap-5">
            {links.map((link) => (
              <RollingLink href={link.href} key={link.href}>
                {link.label}
              </RollingLink>
            ))}
          </div>

          <div className="flex items-center gap-1 border-l border-foreground/15 pl-3">
            <MenuButton onClick={() => setMenuOpen(true)} />
            <ThemeToggleButton />
            <SoundToggleButton />
          </div>
        </div>
      </nav>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={links}
      />
    </>
  );
}
