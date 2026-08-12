import { PackageOpen, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/brands";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { openSourceProjects } from "@/app/content/openSource";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";

export function OpenSource() {
  return (
    <section id="open-source" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="03 · Open source"
          title="Things I've published"
          description="Libraries with real benchmarks, documented architecture, and reproducible tests."
        />

        <div className="space-y-8">
          {openSourceProjects.map((project) => (
            <Reveal key={project.key}>
              <Card className="overflow-hidden border-primary/20">
                <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                        <PackageOpen className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-2xl font-semibold">
                        {project.name}
                      </h3>
                    </div>
                    <p className="mb-5 text-muted-foreground">
                      {project.tagline}
                    </p>
                    <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      {project.description.map((line, i) => (
                        <li key={`${project.key}-d-${i}`}>{line}</li>
                      ))}
                    </ul>
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.techStack.map((t) => (
                        <Badge key={`${project.key}-t-${t}`} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.links.pypi && (
                        <Button asChild size="sm">
                          <a
                            href={project.links.pypi}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <PackageOpen className="h-4 w-4" />
                            View on PyPI
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <GithubIcon className="h-4 w-4" />
                            Source
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 self-start rounded-lg bg-muted/50 p-4">
                    {project.metrics.map((m) => (
                      <div
                        key={`${project.key}-m-${m.label}`}
                        className="rounded-md bg-background p-4"
                      >
                        <p className="font-display text-2xl font-bold text-primary">
                          {m.value}
                        </p>
                        <p className="mt-1 text-xs font-medium text-foreground">
                          {m.label}
                        </p>
                        {m.hint && (
                          <p className="mt-0.5 text-[11px] text-muted-foreground">
                            {m.hint}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
