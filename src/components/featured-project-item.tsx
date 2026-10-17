"use client";

import Image from "next/image";
import Link from "next/link";

type FeaturedProjectItemProps = {
  name: string;
  description: string;
  src: string;
  alt: string;
  googlePlayUrl?: string;
};

export default function FeaturedProjectItem({
  name,
  description,
  src,
  alt,
  googlePlayUrl,
}: FeaturedProjectItemProps) {
  return (
    <article className="flex w-full flex-col gap-2 py-4">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded">
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h2 className="font-mono font-bold text-2xl leading-none mb-2">
            {name}
          </h2>
          <p className="text-xs sm:text-base">{description}</p>
          {googlePlayUrl && (
            <Link
              href={googlePlayUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block"
            >
              <Image
                src="/google-play-button.webp"
                alt="Get it on Google Play"
                width={189}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
