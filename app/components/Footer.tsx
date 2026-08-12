import { basics } from "@/app/content/basics";
import { socialIconMap } from "@/lib/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {year} {basics.name}. Built with Next.js, shadcn/ui, and
          framer-motion.
        </p>
        <div className="flex items-center gap-3">
          {basics.socials
            .filter((s) => ["github", "linkedin", "medium", "substack"].includes(s.key))
            .map((social) => {
              const Icon = socialIconMap[social.key];
              return (
                <a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="rounded-md p-2 transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
