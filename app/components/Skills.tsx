import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { skillGroups } from "@/app/content/skills";
import { skillIconMap } from "@/lib/icons";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="02 · What I work with"
          title="Skills & Stack"
          description="A senior Python backend focus, with the systems and glue that go around it."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => {
            const Icon = skillIconMap[group.icon];
            return (
              <Reveal key={group.key} delay={idx * 0.04}>
                <Card className="h-full transition-colors hover:border-primary/40">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      {Icon && (
                        <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                      )}
                      <h3 className="font-semibold">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
