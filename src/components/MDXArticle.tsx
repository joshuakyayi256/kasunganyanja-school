"use client";

import { MDXProvider } from "@mdx-js/react";
import { cn } from "../lib/cn";
import { Quote } from "lucide-react";

const components = {
    h1: (p: any) => (
        <h1 className="mt-12 mb-6 text-4xl font-black text-navy tracking-tight leading-tight" {...p} />
    ),
    h2: (p: any) => (
        <h2 className="mt-10 mb-4 text-2xl font-black text-navy/90 tracking-tight" {...p} />
    ),
    h3: (p: any) => (
        <h3 className="mt-8 mb-3 text-xl font-bold text-navy/80" {...p} />
    ),
    p: (p: any) => (
        <p className="mt-4 text-lg leading-relaxed text-slate-600" {...p} />
    ),
    ul: (p: any) => (
        <ul className="mt-6 mb-6 list-disc pl-8 space-y-3 text-slate-600" {...p} />
    ),
    ol: (p: any) => (
        <ol className="mt-6 mb-6 list-decimal pl-8 space-y-3 text-slate-600" {...p} />
    ),
    li: (p: any) => (
        <li className="pl-2" {...p} />
    ),
    a: (p: any) => (
        <a className="font-bold text-navy underline decoration-sky-400 decoration-2 underline-offset-4 hover:text-sky-600 hover:decoration-navy transition-all" {...p} />
    ),
    img: (p: any) => (
        <figure className="my-10 overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-xl shadow-navy/5">
            <img
                {...p}
                className={cn("w-full h-auto object-cover", p.className)}
                loading="lazy"
            />
            {p.alt && (
                <figcaption className="p-4 text-center text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-t border-slate-100">
                    {p.alt}
                </figcaption>
            )}
        </figure>
    ),
    blockquote: (p: any) => (
        <div className="relative my-10 pl-10 pr-6 py-2 border-l-4 border-sky-400 bg-slate-50 rounded-r-3xl italic">
            <Quote className="absolute left-3 top-3 size-5 text-sky-400/30" />
            <div className="text-xl leading-relaxed text-navy/70 font-medium" {...p} />
        </div>
    ),
};

export default function MDXArticle({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-prose mx-auto">
            <MDXProvider components={components}>{children}</MDXProvider>
        </div>
    );
}