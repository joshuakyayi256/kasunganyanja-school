import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function ColorCard({
  children, tone = "tinted", className,
}:{
  children: ReactNode;
  tone?: "tinted" | "navy" | "plain";
  className?: string;
}) {
  const toneCls =
    tone === "navy"   ? "card-navy" :
    tone === "tinted" ? "card-tinted" : "rounded-2xl border border-black/10 bg-white";
  return <div className={cn(toneCls, "p-5", className)}>{children}</div>;
}
