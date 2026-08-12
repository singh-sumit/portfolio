"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "open-source", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const NAV_IDS = NAV_ITEMS.map((n) => n.id);

export function Navbar() {
  const activeId = useActiveSection(NAV_IDS);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-transparent transition-all",
        scrolled &&
          "border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="#about"
          className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            SS
          </span>
          <span className="hidden sm:inline">Sumit Singh</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                activeId === item.id && "text-foreground bg-accent/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={cn(
                        "rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                        activeId === item.id &&
                          "bg-accent text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
