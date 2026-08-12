import { BookOpen, ExternalLink, Rss } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";
import type { BlogPost } from "@/app/types";

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

interface WritingProps {
  posts: BlogPost[];
}

export function Writing({ posts }: WritingProps) {
  const medium = posts.filter((p) => p.source === "medium").slice(0, 5);
  const substack = posts.filter((p) => p.source === "substack").slice(0, 5);

  return (
    <section id="writing" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="05 · Writing"
          title="From my desk"
          description="Notes on backend systems, Python internals, and DevOps — updated regularly."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FeedColumn
            icon={<BookOpen className="h-4 w-4" />}
            title="Medium"
            handle="@itstimus"
            href="https://medium.com/@itstimus"
            posts={medium}
            emptyMessage="No Medium posts fetched at build time."
          />
          <FeedColumn
            icon={<Rss className="h-4 w-4" />}
            title="Substack · Engineer Journal"
            handle="archnotes.substack.com"
            href="https://archnotes.substack.com"
            posts={substack}
            emptyMessage="No Substack posts fetched at build time."
          />
        </div>
      </div>
    </section>
  );
}

interface FeedColumnProps {
  icon: React.ReactNode;
  title: string;
  handle: string;
  href: string;
  posts: BlogPost[];
  emptyMessage: string;
}

function FeedColumn({
  icon,
  title,
  handle,
  href,
  posts,
  emptyMessage,
}: FeedColumnProps) {
  return (
    <Reveal>
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 font-display text-lg">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
                  {icon}
                </span>
                {title}
              </CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">{handle}</p>
            </div>
            <Button asChild size="sm" variant="ghost">
              <a href={href} target="_blank" rel="noreferrer noopener">
                Visit
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {posts.length === 0 ? (
            <p className="text-sm text-muted-foreground">{emptyMessage}</p>
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.url}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group block rounded-md p-3 transition-colors hover:bg-accent/50"
                  >
                    <p className="mb-1 text-xs text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h4 className="font-medium text-foreground group-hover:text-primary">
                      {post.title}
                    </h4>
                    {post.excerpt && (
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </Reveal>
  );
}
