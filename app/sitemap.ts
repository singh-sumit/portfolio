import type { MetadataRoute } from "next";

const siteOrigin = "https://singh-sumit.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = `${siteOrigin}${basePath}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
  ];
}
