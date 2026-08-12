"use client";

import { ExternalLink, GraduationCap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { education } from "@/app/content/education";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";
import { ClientOnly } from "@/app/components/ClientOnly";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading eyebrow="06 · Foundations" title="Education" />

        <Reveal>
          <div className="mx-auto max-w-3xl rounded-xl border bg-card">
            <ClientOnly
              fallback={
                <div className="h-40 animate-pulse rounded-xl bg-muted/50" />
              }
            >
              <Accordion
                type="multiple"
                defaultValue={education.map((e) => e.key)}
                className="w-full"
              >
              {education.map((entry) => (
                <AccordionItem
                  key={entry.key}
                  value={entry.key}
                  className="px-6 last:border-b-0"
                >
                  <AccordionTrigger>
                    <div className="flex flex-1 flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                          <GraduationCap className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="font-semibold">{entry.institution}</p>
                          <p className="text-xs text-muted-foreground">
                            {entry.level} · {entry.faculty}
                          </p>
                        </div>
                      </div>
                      <div className="pl-12 text-xs text-muted-foreground sm:pl-0 sm:text-right">
                        <p>
                          {entry.period.start} — {entry.period.end ?? "Present"}
                        </p>
                        <p className="text-primary">
                          {entry.score} {entry.scoreSuffix}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-12">
                      <p className="mb-2 text-sm text-muted-foreground">
                        {entry.location}
                      </p>
                      {entry.highlights && entry.highlights.length > 0 && (
                        <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          {entry.highlights.map((h, i) => (
                            <li key={`${entry.key}-h-${i}`}>{h}</li>
                          ))}
                        </ul>
                      )}
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        {entry.url}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              </Accordion>
            </ClientOnly>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
