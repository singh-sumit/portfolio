// Prepend the deploy basePath (e.g. "/portfolio") to a static-asset URL.
// Use for plain <img>/<a> that don't go through next/image or next/link.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
