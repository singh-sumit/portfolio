"use client";

import { useEffect, useState } from "react";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  rootMargin: "-30% 0px -60% 0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "");

  // Join into a stable dep string so array identity churn doesn't reattach the observer.
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = idsKey.split("|").filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        visible.set(entry.target.id, entry.intersectionRatio);
      }

      let topId = ids[0] ?? "";
      let topRatio = 0;
      for (const [id, ratio] of visible) {
        if (ratio > topRatio) {
          topRatio = ratio;
          topId = id;
        }
      }
      setActive(topId);
    }, OBSERVER_OPTIONS);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return active;
}
