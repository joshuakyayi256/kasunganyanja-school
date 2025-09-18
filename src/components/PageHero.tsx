// src/components/PageHero.tsx
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

/** size: md ~65vh, lg ~75vh, xl ~75vh */
const SIZE_MAP = { md: "min-h-[65svh]", lg: "min-h-[75svh]", xl: "min-h-[75svh]" };

export default function PageHero({
    title, subtitle, right, bgImage, className, size = "xl",
}: {
    title: string;
    subtitle?: string;
    right?: ReactNode;
    bgImage?: string;
    className?: string;
    size?: "md" | "lg" | "xl";
}) {
    return (
        <section className={cn("relative overflow-hidden", SIZE_MAP[size], className)}>
            {bgImage && (
                <>
                    <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-white/55" />
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
                </>
            )}

            <div className="relative max-w-6xl mx-auto px-4 pt-[96px] pb-12 md:pb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight text-black"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6, delay: .05 }}
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
