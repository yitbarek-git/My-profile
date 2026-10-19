"use client";

import Image from "next/image";
import { useSound } from "./hooks/use-sound";

type GearCardProps = {
  name: string;
  description: string;
  src?: string;
  loading?: "eager" | "lazy";
};

export default function GearCard({
  name,
  description,
  src,
  loading = "lazy",
}: GearCardProps) {
  const { play } = useSound();

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-muted bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
      onMouseEnter={() => play("hover")}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        {src ? (
          <Image
            src={src}
            alt={name}
            width={400}
            height={400}
            loading={loading}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
            No image
          </div>
        )}
        {/* Subtle gradient overlay on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h2 className="font-mono text-sm font-bold tracking-tight text-foreground">
          {name}
        </h2>
        <p className="text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </article>
  );
}
