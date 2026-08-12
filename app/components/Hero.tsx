"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon } from "@/app/components/icons/brands";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { basics } from "@/app/content/basics";
import { withBase } from "@/lib/urls";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="accent" className="mb-6">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
              Available for senior remote roles
            </Badge>

            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">{basics.name}</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {basics.title} · {basics.headline}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I build backend systems for defence tech, IoT drone connectivity,
              and clinical research. Currently leading a{" "}
              <span className="text-foreground">
                GPS-denied drone positioning system
              </span>{" "}
              at Elsight — sole architect of{" "}
              <span className="text-foreground">HeatSight</span> serving ~50
              enterprise customers, and author of{" "}
              <span className="text-foreground">xmlrpc-extended</span> on PyPI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://github.com/singh-sumit"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {basics.location}
              </span>
              <span>
                <span className="text-foreground font-semibold">
                  {basics.yearsOfExperience}+ years
                </span>{" "}
                production experience
              </span>
              <span>
                <span className="text-foreground font-semibold">~50</span>{" "}
                enterprise customers served
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/40 to-transparent blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl">
              <div className="aspect-[3/4] w-full">
                <Image
                  src={withBase(basics.profileImage)}
                  alt={`Portrait of ${basics.name}`}
                  width={864}
                  height={1200}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 p-3 backdrop-blur">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground font-semibold">
                  SS
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">
                    {basics.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {basics.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
