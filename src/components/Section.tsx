import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Section({
  children, className, tone = "default", container = "section",
}:{
  children: ReactNode;
  className?: string;
  tone?: "default" | "sky" | "navy" | "gold";
  container?: "section" | "section-tight" | "section-loose";
}) {
  const toneCls =
    tone === "sky"  ? "section-sky"  :
    tone === "navy" ? "section-navy" :
    tone === "gold" ? "section-gold" : "";
  return (
    <section className={cn(toneCls)}>
      <div className={cn(container, className)}>{children}</div>
    </section>
  );
}
