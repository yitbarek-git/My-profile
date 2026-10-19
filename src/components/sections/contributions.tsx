"use client";

import { GITHUB_PROFILE } from "@/constants";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { useSound } from "../hooks/use-sound";

const GITHUB_USERNAME = "yitbarek-git";

export default function Contributions() {
  const { play } = useSound();

  return (
    <Section id="github" sectionNumber={5} sectionTitle="contributions">
      <Link
        href={GITHUB_PROFILE}
        aria-label="View my GitHub profile"
        title="View my GitHub profile"
        onMouseEnter={() => play("hover")}
        onClick={() => play("click")}
        className="block rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <div className="relative aspect-[3/1] w-full">
          <Image
            src={`https://ghchart.rshah.org/green/${GITHUB_USERNAME}`}
            alt={`GitHub contribution activity for ${GITHUB_USERNAME}`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </Link>
    </Section>
  );
}
