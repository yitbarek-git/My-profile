import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = SITE_URL.replace(/\/$/, "");
  const now = new Date();

  return [
    {
      url: `${domain}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/gear`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${domain}/blogs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${domain}/blogs/use-ai-dont-get-used-by-ai`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}