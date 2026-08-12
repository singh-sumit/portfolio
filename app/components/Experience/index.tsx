"use client";

import dynamic from "next/dynamic";
import { SectionHeading } from "@/app/components/SectionHeading";

const WorkTimeline = dynamic(
  () => import("./WorkTimeline").then((m) => m.WorkTimeline),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 animate-pulse rounded-lg bg-muted/50" aria-hidden />
    ),
  }
);

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="01 · Where I've worked"
          title="Experience"
          description="From clinical research to defence-grade drone connectivity — four production roles, 5+ years."
        />
        <WorkTimeline />
      </div>
    </section>
  );
}
