import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Section({
  children,
  className,
  tone = "default",
  container = "section",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "sky" | "navy" | "ink" | "gold";
  container?: "section" | "section-tight" | "section-loose";
}) {
  const toneCls =
    tone === "sky"
      ? "section-sky"
      : tone === "navy"
      ? "section-navy"
      : tone === "ink"
      ? "section-ink"
      : tone === "gold"
      ? "section-gold"
      : "";
  return (
    <section className={cn(toneCls)}>
      <div className={cn(container)}>{children}</div>
    </section>
  );
}
