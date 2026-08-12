import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/app/components/motion/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "mb-10",
          align === "center" && "text-center",
          className
        )}
      >
        {eyebrow && (
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base text-muted-foreground",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </Reveal>
  );
}
