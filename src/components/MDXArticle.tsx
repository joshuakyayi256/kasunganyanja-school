"use client";

import { MDXProvider } from "@mdx-js/react";

const components = {
    h1: (p: any) => <h1 className="mt-2 text-2xl font-bold" {...p} />,
    h2: (p: any) => <h2 className="mt-4 text-xl font-semibold" {...p} />,
    h3: (p: any) => <h3 className="mt-4 text-lg font-semibold" {...p} />,
    p: (p: any) => <p className="mt-3 leading-7 text-black/80" {...p} />,
    ul: (p: any) => <ul className="mt-3 list-disc pl-6" {...p} />,
    ol: (p: any) => <ol className="mt-3 list-decimal pl-6" {...p} />,
    a: (p: any) => <a className="underline hover:opacity-80" {...p} />,
    img: (p: any) => (
        <img
            {...p}
            className={`my-4 max-w-full rounded-xl border border-black/10 ${p.className ?? ""}`}
            loading="lazy"
        />
    ),
    blockquote: (p: any) => (
        <blockquote className="mt-3 border-l-4 border-black/20 pl-4 italic text-black/70" {...p} />
    ),
};

export default function MDXArticle({ children }: { children: React.ReactNode }) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
