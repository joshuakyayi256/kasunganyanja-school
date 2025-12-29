import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline" | "ghost" | "white"; // Added white for dark backgrounds
  size?: "sm" | "md" | "lg" | "xl"; // Added xl
};

export default function Button({
  className, variant = "solid", size = "md", asChild, ...props
}: Props) {
  const Comp = asChild ? Slot : "button";
  
  const base =
    "inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-200 " +
    "focus:outline-none focus:ring-4 focus:ring-navy/10 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    solid:   "bg-navy text-white hover:bg-navy/90 active:scale-[0.98] shadow-lg shadow-navy/20",
    outline: "border-2 border-navy/20 text-navy hover:bg-navy hover:border-navy hover:text-white",
    ghost:   "bg-transparent text-navy hover:bg-navy/5",
    white:   "bg-white text-navy hover:bg-slate-50 active:scale-[0.98] shadow-xl",
  }[variant];

  const sizes = { 
    sm: "px-3 py-1.5 text-xs", 
    md: "px-5 py-2.5 text-sm", 
    lg: "px-7 py-3.5 text-base",
    xl: "px-10 py-5 text-lg uppercase tracking-wide" // The "Portfolio" size
  }[size];

  return <Comp className={cn(base, variants, sizes, className)} {...props} />;
}