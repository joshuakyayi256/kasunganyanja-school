import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

/** size: md ~55svh, lg ~65svh, xl ~75svh */
const SIZE_MAP = {
  md: "min-h-[55svh]",
  lg: "min-h-[65svh]",
  xl: "min-h-[75svh]",
};

export default function PageHero({
  title,
  subtitle,
  right,
  bgImage,
  className,
  size = "xl",
  tint = "light",
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
      className={cn("relative overflow-hidden", SIZE_MAP[size], className)}
    >
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {tint === "navy" && <div className="absolute inset-0 bg-navy/30" />}
          {tint === "gold" && (
            <div className="absolute inset-0 bg-[#F5B301]/25" />
          )}
          {tint === "light" && <div className="absolute inset-0 bg-white/55" />}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-skywash to-transparent" />
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-4 pt-[96px] pb-12 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-black"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-3xl text-lg md:text-xl text-black/80"
          >
            {subtitle}
          </motion.p>
        )}
        {right && <div className="mt-6">{right}</div>}
      </div>
    </section>
  );
}
