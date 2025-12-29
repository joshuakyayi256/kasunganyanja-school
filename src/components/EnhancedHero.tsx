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
    eyebrow = "A community-led path to excellence",
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    stats = [],
    imageSrc,
    imageAlt = "Kasunganyanja Learners",
    reverse = false,
}: Props) {
    return (
        <section className="relative overflow-hidden bg-slate-50">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50/90" />
                <div
                    aria-hidden
                    className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,46,74,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,46,74,0.03)_1px,transparent_1px)] [background-size:32px_32px]"
                />
                
                {/* Floating Blur Blobs */}
                <motion.div
                    aria-hidden
                    className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-navy/5 blur-[100px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-20 md:py-32">
                <div className={`grid items-center gap-12 md:grid-cols-2 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                    
                    {/* Text Content */}
                    <motion.div variants={fadeUp} initial="initial" animate="animate">
                        <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-4 py-1.5 text-xs font-bold text-navy backdrop-blur-sm">
                            <ShieldCheck className="h-4 w-4 text-sky-500" />
                            <span className="tracking-wide uppercase">{eyebrow}</span>
                        </div>

                        <h1 className="mt-6 text-4xl font-black leading-[1.1] text-navy md:text-6xl tracking-tight">
                            {title}
                        </h1>
                        <p className="mt-6 max-w-xl text-slate-600 md:text-xl leading-relaxed">
                            {subtitle}
                        </p>

                        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
                            {ctaPrimary && (
                                <a
                                    href={ctaPrimary.href}
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-navy px-8 py-4 text-white font-bold shadow-lg shadow-navy/20 transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95"
                                >
                                    <Sparkles className="h-5 w-5 text-sky-300" />
                                    {ctaPrimary.label}
                                </a>
                            )}
                            {ctaSecondary && (
                                <a
                                    href={ctaSecondary.href}
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-navy/10 bg-white px-8 py-4 text-sm font-bold text-navy transition-all hover:bg-slate-50 hover:border-navy/20"
                                >
                                    <HeartHandshake className="h-5 w-5" />
                                    {ctaSecondary.label}
                                </a>
                            )}
                        </div>

                        {stats.length > 0 && (
                            <motion.ul
                                className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.4 } }}
                            >
                                {stats.map((s) => (
                                    <li key={s.label} className="group cursor-default">
                                        <div className="text-3xl font-black text-navy">{s.value}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-sky-500 transition-colors">{s.label}</div>
                                    </li>
                                ))}
                            </motion.ul>
                        )}
                    </motion.div>

                    {/* Hero Image Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {imageSrc ? (
                            <div className="relative">
                                {/* Decorative elements behind image */}
                                <div className="absolute -inset-4 rounded-[2.5rem] bg-navy/5 blur-2xl" aria-hidden />
                                
                                <img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="relative z-10 w-full rounded-[2rem] border-4 border-white bg-white object-cover shadow-2xl aspect-[4/3]"
                                />

                                {/* Floating Badge */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 z-20 rounded-2xl border-4 border-white bg-navy p-4 text-white shadow-xl"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                >
                                    <div className="text-xs font-black uppercase tracking-tighter opacity-60">Direct Support</div>
                                    <div className="text-lg font-bold">Mobile Money Only</div>
                                </motion.div>
                            </div>
                        ) : (
                            <div className="aspect-[4/3] w-full rounded-[2rem] bg-slate-200 animate-pulse border-4 border-white shadow-xl" />
                        )}
                    </motion.div>
                </div>
                
                <div className="mt-16 flex justify-center md:mt-24">
                    <ArrowDown className="h-8 w-8 animate-bounce text-slate-300" aria-hidden />
                </div>
            </div>
        </section>
    );
}