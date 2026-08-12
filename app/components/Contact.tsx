import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { basics } from "@/app/content/basics";
import { socialIconMap } from "@/lib/icons";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";
import { ClientOnly } from "@/app/components/ClientOnly";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="08 · What's next?"
          title="Let's talk"
          description="Whether there's an opportunity you'd like to discuss, a question on your mind, or just a hello — I'll do my best to reply within a day or two."
          align="center"
        />

        <Reveal className="text-center">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
            <Button asChild size="lg" className="group">
              <a href={`mailto:${basics.email}`}>
                Say hello
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {basics.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-primary" />
                {basics.phone}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <ClientOnly>
                {basics.socials.map((social) => {
                  const Icon = socialIconMap[social.key];
                  return (
                    <Tooltip key={social.key}>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          aria-label={social.label}
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {social.label}
                        {social.handle ? ` · ${social.handle}` : ""}
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </ClientOnly>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
