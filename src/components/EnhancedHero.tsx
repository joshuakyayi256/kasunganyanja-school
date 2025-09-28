// src/components/EnhancedHero.tsx (Vite/React version)
"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, ArrowDown } from "lucide-react";

type Stat = { label: string; value: string };
type Props = {
    eyebrow?: string;
    title: string;
    subtitle: string;
    ctaPrimary?: { label: string; href: string };
    ctaSecondary?: { label: string; href: string };
    stats?: Stat[];
    imageSrc?: string;
    imageAlt?: string;
    reverse?: boolean;
};

const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function EnhancedHero({
    eyebrow = "Every child deserves a fair start",
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    stats = [],
    imageSrc,
    imageAlt = "Hero image",
    reverse = false,
}: Props) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/90" />
                <div
                    aria-hidden
                    className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:24px_24px]"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                    }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                />
                <motion.div
                    aria-hidden
                    className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                    {/* Text */}
                    <motion.div variants={fadeUp} initial="initial" animate="animate">
                        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs backdrop-blur">
                            <ShieldCheck className="h-4 w-4" />
                            {eyebrow}
                        </div>

                        <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h1>
                        <p className="mt-3 max-w-xl text-black/70 md:text-lg">{subtitle}</p>

                        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
                            {ctaPrimary && (
                                <a
                                    href={ctaPrimary.href}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-white shadow-sm transition hover:opacity-90"
                                >
                                    <Sparkles className="h-4 w-4" />
                                    {ctaPrimary.label}
                                </a>
                            )}
                            {ctaSecondary && (
                                <a
                                    href={ctaSecondary.href}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm text-black hover:bg-black/5"
                                >
                                    <HeartHandshake className="h-4 w-4" />
                                    {ctaSecondary.label}
                                </a>
                            )}
                        </div>

                        {stats.length > 0 && (
                            <motion.ul
                                className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.25 } }}
                            >
                                {stats.map((s) => (
                                    <li key={s.label} className="rounded-xl border border-black/10 bg-white px-4 py-3">
                                        <div className="text-xl font-bold">{s.value}</div>
                                        <div className="text-xs text-black/60">{s.label}</div>
                                    </li>
                                ))}
                            </motion.ul>
                        )}

                        <ArrowDown className="mt-8 h-6 w-6 animate-bounce text-black/50" aria-hidden />
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 18, rotate: -1 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {imageSrc ? (
                            <div className="relative">
                                <div className="absolute -inset-3 rounded-3xl bg-black/5 blur-xl" aria-hidden />
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={880}
                                    height={660}
                                    loading="eager"
                                    className="relative max-w-full rounded-3xl border border-black/10 bg-white object-cover shadow-sm"
                                />
                                <motion.div
                                    aria-hidden
                                    className="absolute -top-3 -right-3 rounded-xl border border-black/10 bg-white/90 px-3 py-1 text-xs backdrop-blur"
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                >
                                    Mobile Money only
                                </motion.div>
                            </div>
                        ) : (
                            <div className="aspect-[4/3] w-full rounded-3xl border border-black/10 bg-white/60" />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
