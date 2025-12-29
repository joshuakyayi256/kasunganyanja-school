import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Section({
  children, 
  className, 
  tone = "default", 
  container = "section",
}:{
  children: ReactNode;
  className?: string;
  tone?: "default" | "sky" | "navy" | "gold" | "slate";
  container?: "section" | "section-tight" | "section-loose" | "none";
}) {
  const tones = {
    default: "bg-white",
    sky: "bg-sky-50",
    navy: "bg-navy text-white",
    gold: "bg-amber-50",
    slate: "bg-slate-50"
  };

  const containers = {
    section: "max-w-6xl mx-auto px-6 py-20 md:py-32",
    "section-tight": "max-w-6xl mx-auto px-6 py-12 md:py-16",
    "section-loose": "max-w-7xl mx-auto px-6 py-24 md:py-40",
    none: ""
  };

  return (
    <section className={cn("relative overflow-hidden", tones[tone])}>
      <div className={cn(containers[container], className)}>
        {children}
      </div>
    </section>
  );
}