import Parser from "rss-parser";
import type { BlogPost } from "@/app/types";

const MEDIUM_FEED = "https://medium.com/feed/@itstimus";
const SUBSTACK_FEED = "https://archnotes.substack.com/feed";

const FETCH_TIMEOUT_MS = 8_000;

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "Building SSO service with django",
    url: "https://itstimus.medium.com/building-sso-service-with-django-76f6f40e91fe",
    publishedAt: "2022-08-28",
    source: "medium",
    excerpt:
      "Enabling a user to sign in once and then be automatically signed to all of the web apps that share the same centralized directory.",
  },
  {
    title: "100 Days of DevOps — Day 6: Create a Cron Job",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-6-create-a",
    publishedAt: "2025-07-29",
    source: "substack",
  },
  {
    title: "100 Days of DevOps — Day 5: SElinux Installation and Configuration",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-5-day-5-selinux",
    publishedAt: "2025-07-26",
    source: "substack",
  },
  {
    title: "100 Days of DevOps — Day 4: Script Execution Permissions",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-4-script-execution",
    publishedAt: "2025-07-17",
    source: "substack",
  },
  {
    title: "100 Days of DevOps — Day 3: Secure Root SSH Access",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-3-secure-root",
    publishedAt: "2025-07-16",
    source: "substack",
  },
  {
    title: "100 Days of DevOps — Day 2: Temporary User Setup with Expiry",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-2-temporary",
    publishedAt: "2025-07-15",
    source: "substack",
  },
  {
    title: "100 Days of DevOps — Day 1: Linux User Setup with Non-Interactive Shell",
    url: "https://archnotes.substack.com/p/100-days-of-devops-day-1-linux-user",
    publishedAt: "2025-07-14",
    source: "substack",
  },
];

function stripHtml(html: string | undefined, max = 180): string | undefined {
  if (!html) return undefined;
  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd() + "…";
}

async function fetchFeed(
  url: string,
  source: BlogPost["source"]
): Promise<BlogPost[]> {
  const parser = new Parser({
    timeout: FETCH_TIMEOUT_MS,
    headers: { "User-Agent": "portfolio-build-time-rss/1.0" },
  });

  const feed = await parser.parseURL(url);
  return (feed.items ?? [])
    .filter((item) => item.link && item.title)
    .map((item) => ({
      title: (item.title ?? "").trim(),
      url: item.link!,
      publishedAt: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
      source,
      excerpt: stripHtml(item.contentSnippet ?? item.content ?? ""),
    }));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const results = await Promise.allSettled([
      fetchFeed(MEDIUM_FEED, "medium"),
      fetchFeed(SUBSTACK_FEED, "substack"),
    ]);

    const posts: BlogPost[] = results.flatMap((r) =>
      r.status === "fulfilled" ? r.value : []
    );

    if (posts.length === 0) {
      return FALLBACK_POSTS;
    }

    return posts.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return FALLBACK_POSTS;
  }
}
