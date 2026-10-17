"use client";
import { GITHUB_PROFILE } from "@/constants";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { useSound } from "../hooks/use-sound";

export default function Contributions() {
  const { play } = useSound();
  return (
    <Section id="github" sectionNumber={5} sectionTitle="contributions">
      <Link
        onMouseEnter={() => play("hover")}
        onClick={() => play("click")}
        href={GITHUB_PROFILE}
      >
        <div className="relative aspect-3/1 w-full">
          <Image
            src="https://ghchart.rshah.org/7a40b8/shyuuun"
            alt="GitHub contribution chart for shyuuun"
            fill
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain"
          />
        </div>
      </Link>
    </Section>
  );
}
