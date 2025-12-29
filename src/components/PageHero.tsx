import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

/** size: md ~55svh, lg ~65svh, xl ~75svh */
const SIZE_MAP = {
  md: "min-h-[60svh]", // Increased slightly to give more room for text
  lg: "min-h-[75svh]",
  xl: "min-h-[85svh]",
};

export default function PageHero({
  title,
  subtitle,
  right,
  bgImage,
  className,
  size = "xl",
  tint = "navy",
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  bgImage?: string;
  className?: string;
  size?: "md" | "lg" | "xl";
  tint?: "light" | "navy" | "gold";
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col justify-center overflow-hidden", 
        SIZE_MAP[size], 
        className
      )}
    >
      {/* 1. IMAGE & SMART OVERLAYS */}
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Use a radial gradient or vignette for a more premium look than a flat overlay */}
          <div className={cn(
            "absolute inset-0 transition-opacity duration-700",
            tint === "navy" && "bg-gradient-to-r from-navy/90 via-navy/40 to-transparent",
            tint === "gold" && "bg-gradient-to-r from-amber-900/80 via-transparent to-transparent",
            tint === "light" && "bg-gradient-to-r from-white/90 via-white/20 to-transparent"
          )} />
          
          {/* Top Fade - protects the NavBar readability */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent opacity-60" />
        </>
      )}

      {/* 2. CONTENT CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Optional: Small "Eyebrow" text for context */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6",
              tint === "navy" ? "bg-white/10 text-white/80" : "bg-navy/10 text-navy"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Admissions Open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "text-5xl md:text-7xl font-black tracking-tight leading-[1.1]",
              tint === "navy" ? "text-white" : "text-navy"
            )}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "mt-6 max-w-2xl text-lg md:text-xl leading-relaxed",
                tint === "navy" ? "text-white/80" : "text-slate-600"
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {/* 3. CTA AREA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10"
          >
            {right}
          </motion.div>
        </div>
      </div>
    </section>
  );
}