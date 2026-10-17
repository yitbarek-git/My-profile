"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Load immediately on client without unnecessary loading wrappers if possible,
// or use a lightweight skeleton.
const DitherReveal = dynamic(
  () => import("./dither-image-reveal").then((mod) => mod.DitherReveal),
  { ssr: false },
);

function ShimmerLoader() {
  return (
    <div className="h-[320px] w-[320px] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
  );
}

export default function MyImage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent layout mismatch during SSR/hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <ShimmerLoader />;
  }

  const isDark = resolvedTheme === "dark";

  const image = {
    src: isDark ? "image.jpeg" : "me.webp",
    url: isDark ? "image.jpeg" : "me.webp",
    alt: isDark
      ? "My cosplay image in dark theme"
      : "My real image in light theme",
  };

  return (
    <DitherReveal
      image={image}
      style={{ height: 320, width: 320 }}
      color1={isDark ? "#123223" : "#0e0e0e"}
      color2={isDark ? "#bc84f8" : "#ffffff"}
    />
  );
}
