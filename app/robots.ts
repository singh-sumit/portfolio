import type { MetadataRoute } from "next";

const siteOrigin = "https://singh-sumit.github.io";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = `${siteOrigin}${basePath}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
