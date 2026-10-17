"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const DitherReveal = dynamic(
  () => import("./dither-image-reveal").then((mod) => mod.DitherReveal),
  {
    ssr: false,
    loading: () => <ShimmerLoader />,
  },
);

function ShimmerLoader() {
  return (
    <div
      className="bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse"
      style={{
        height: 320,
        width: 320,
        backgroundSize: "200% 100%",
        animation: "shimmer 2s infinite",
      }}
    />
  );
}

export default function MyImage() {
  const { resolvedTheme } = useTheme();

  const image =
    resolvedTheme === "dark"
      ? {
          src: "image.jpeg",
          url: "image.jpeg",
          alt: "My cosplay image in dark theme",
        }
      : {
          src: "me.jpg",
          url: "me.jpg",
          alt: "My real image in light theme",
        };
  const color1 = resolvedTheme === "dark" ? "#123223" : "#0e0e0e";
  const color2 = resolvedTheme === "dark" ? "#bc84f8" : "#ffffff";

  return (
    <DitherReveal
      image={image}
      style={{ height: 320, width: 320 }}
      color1={color1}
      color2={color2}
    />
  );
}
