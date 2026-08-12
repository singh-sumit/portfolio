"use client";

import { Chrono } from "react-chrono";
import { useTheme } from "next-themes";
import * as React from "react";
import { experience } from "@/app/content/experience";
import { Badge } from "@/app/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { withBase } from "@/lib/urls";

import elsightLogo from "@/public/images/company/elsight.jpeg";
import numericLogo from "@/public/images/company/numeric_mind_flat.png";
import nimbleLogo from "@/public/images/company/nimble-flat.png";

const logoMap: Record<string, string> = {
  elsight: elsightLogo.src,
  numeric_minds: numericLogo.src,
  "nimble-cr": nimbleLogo.src,
  simjung: withBase("/images/company/simjung.png"),
  kimbutech: withBase("/images/company/kimbutech.svg"),
};

function formatMonth(iso: string): string {
  const [y, m] = iso.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthIdx = Number(m) - 1;
  const monthLabel = monthNames[monthIdx] ?? m;
  return `${monthLabel} ${y}`;
}

function periodLabel(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;
}

export function WorkTimeline() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const items = experience.map((entry) => ({
    title: periodLabel(entry.period.start, entry.period.end),
    cardTitle: entry.role,
    cardSubtitle: entry.company,
    media: {
      name: entry.company,
      source: { url: logoMap[entry.companyLogoKey] },
      type: "IMAGE" as const,
    },
  }));

  const isDark = mounted && resolvedTheme === "dark";
  const themeVars = isDark
    ? {
        primary: "hsl(152, 76%, 60%)",
        secondary: "hsl(240, 6%, 12%)",
        cardBgColor: "hsl(240, 10%, 6%)",
        cardForeColor: "hsl(0, 0%, 98%)",
        titleColor: "hsl(0, 0%, 98%)",
        titleColorActive: "hsl(152, 76%, 60%)",
        cardTitleColor: "hsl(0, 0%, 98%)",
        cardSubtitleColor: "hsl(240, 5%, 64.9%)",
        cardDetailsColor: "hsl(240, 5%, 84%)",
        detailsColor: "hsl(240, 5%, 84%)",
      }
    : {
        primary: "hsl(158, 66%, 32%)",
        secondary: "hsl(240, 4.8%, 95.9%)",
        cardBgColor: "hsl(0, 0%, 100%)",
        cardForeColor: "hsl(240, 10%, 3.9%)",
        titleColor: "hsl(240, 10%, 3.9%)",
        titleColorActive: "hsl(158, 66%, 32%)",
        cardTitleColor: "hsl(240, 10%, 3.9%)",
        cardSubtitleColor: "hsl(240, 3.8%, 46.1%)",
        cardDetailsColor: "hsl(240, 5%, 20%)",
        detailsColor: "hsl(240, 5%, 20%)",
      };

  if (!mounted) {
    return (
      <div className="h-96 animate-pulse rounded-lg bg-muted/50" aria-hidden />
    );
  }

  return (
    <div className="rounded-xl border bg-card p-2 sm:p-4">
      <Chrono
        key={isDark ? "dark" : "light"}
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardHeight={280}
        disableToolbar
        hideControls
        useReadMore={false}
        theme={themeVars}
        classNames={{
          card: "timeline-card-content",
          cardMedia: "timeline-card-media",
          cardTitle: "timeline-item-title",
        }}
      >
        {experience.map((entry) => (
          <div key={entry.key} className="p-2 text-left">
            {entry.featureLead && (
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
                {entry.featureLead}
              </p>
            )}
            <p className="mb-3 text-sm text-muted-foreground">
              {entry.location}
              {entry.outsourcedVia ? (
                <span className="block text-xs italic">
                  via{" "}
                  {entry.outsourcerUrl ? (
                    <a
                      href={entry.outsourcerUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="not-italic text-primary hover:underline"
                    >
                      {entry.outsourcedVia}
                    </a>
                  ) : (
                    entry.outsourcedVia
                  )}
                </span>
              ) : null}
            </p>
            <p className="mb-3 text-sm">{entry.summary}</p>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/80">
              Key highlights
            </p>
            <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {entry.highlights.slice(0, 5).map((h, i) => (
                <li key={`${entry.key}-h-${i}`}>{h}</li>
              ))}
            </ul>

            <div className="mb-3 flex flex-wrap gap-1.5">
              {entry.techStack.map((t) => (
                <Badge key={`${entry.key}-t-${t}`} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>

            <a
              href={entry.companyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              Visit {entry.company}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ))}
      </Chrono>
    </div>
  );
}
