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
      className="group flex flex-col rounded bg-card p-4 shadow-sm transition transform hover:scale-105"
      onMouseEnter={() => play("hover")}
    >
      <div className="mb-3 overflow-hidden rounded">
        {src && (
          <Image
            src={src}
            alt={name}
            width={600}
            height={600}
            loading={loading}
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>
      <h2 className="font-mono font-bold mb-2">{name}</h2>
      {/* Full description shown without clamping */}
      <p className="text-xs text-muted-foreground mt-auto">{description}</p>
    </article>
  );
}
