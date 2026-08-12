import type { MetadataRoute } from "next";

const siteUrl = "https://singh-sumit.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
    },
  ];
}
