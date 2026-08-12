/** @type {import('next').NextConfig} */

// Read basePath / assetPrefix from env so GitHub Pages project sites work:
//   - CI sets NEXT_PUBLIC_BASE_PATH=/portfolio  → assets served from /portfolio/*
//   - Local dev/build leaves it unset           → assets served from /*
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
