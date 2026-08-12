"use client";

import * as React from "react";

/**
 * Renders children only after the component has mounted client-side.
 * Prevents Radix useId SSR/CSR ID-mismatch warnings for interactive primitives.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
