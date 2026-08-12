import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/brands";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { projects } from "@/app/content/projects";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="04 · Selected work"
          title="Personal Projects"
          description="Side projects I built to explore full-stack ownership end-to-end."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.key} delay={idx * 0.06}>
              <Card className="group flex h-full flex-col transition-colors hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-display text-xl">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-1">
                      {project.links.github && (
                        <Button
                          asChild
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                        >
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} on GitHub`}
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.live && (
                        <Button
                          asChild
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                        >
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} live site`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                    {project.description.map((line, i) => (
                      <li key={`${project.key}-d-${i}`}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <Badge key={`${project.key}-t-${t}`} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
