"use client";

import { useState } from "react";

type SocialActionsProps = {
  title: string;
};

export default function SocialActions({ title }: SocialActionsProps) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this article link:", window.location.href);
    }
  }

  async function sharePost() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          await copyLink();
        }
      }
    } else {
      await copyLink();
    }
  }

  return (
    <div className="my-8 flex flex-wrap items-center gap-3 border-y border-neutral-200 py-4 dark:border-neutral-800">
      <button
        type="button"
        onClick={() => setLiked((previous) => !previous)}
        aria-pressed={liked}
        className="rounded-full border px-4 py-2 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        {liked ? "♥ Liked" : "♡ Like"}
      </button>

      <button
        type="button"
        onClick={sharePost}
        className="rounded-full border px-4 py-2 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        ↗ Share
      </button>

      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border px-4 py-2 text-sm transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        {copied ? "✓ Copied!" : "▢ Copy link"}
      </button>
    </div>
  );
}
