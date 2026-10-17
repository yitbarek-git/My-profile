"use client";

import { useSound } from "./hooks/use-sound";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export default function Button({
  children,
  onClick,
  size = "md",
  className = "",
}: ButtonProps) {
  const { play } = useSound();

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-1.5 text-base",
    lg: "px-4 py-2 text-lg",
    xl: "px-5 py-3 text-xl",
  };

  return (
    <button
      onMouseOver={() => play("hover")}
      onClick={() => {
        play("click");
        onClick?.();
      }}
      className={`rounded border border-foreground ${sizeClasses[size]} transition-colors hover:bg-primary/15 hover:text-primary ${className}`}
    >
      {children}
    </button>
  );
}
