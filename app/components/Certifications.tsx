import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { certifications } from "@/app/content/certifications";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="07 · Continued learning"
          title="Certifications & Training"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => {
            const Wrapper = cert.url
              ? ({ children }: { children: React.ReactNode }) => (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block h-full"
                  >
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => (
                  <div className="h-full">{children}</div>
                );

            return (
              <Reveal key={cert.key} delay={idx * 0.05}>
                <Wrapper>
                  <Card className="h-full transition-colors hover:border-primary/40">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
                          <Award className="h-4 w-4" />
                        </span>
                        {cert.url && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <h3 className="mb-1 font-semibold leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                        {cert.year ? ` · ${cert.year}` : ""}
                      </p>
                      {cert.summary && (
                        <p className="mt-3 text-sm text-muted-foreground">
                          {cert.summary}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
