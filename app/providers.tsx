"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { TooltipProvider } from "@/app/components/ui/tooltip";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </ThemeProvider>
  );
};
