import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function ColorCard({
    children, 
    tone = "plain", 
    className,
    hover = true,
}:{
    children: ReactNode;
    tone?: "tinted" | "navy" | "plain" | "glass";
    className?: string;
    hover?: boolean;
}) {
    const tones = {
        plain: "bg-white border-slate-100 shadow-sm",
        tinted: "bg-slate-50 border-slate-100",
        navy: "bg-navy text-white border-navy/10 shadow-navy/20 shadow-xl",
        glass: "bg-white/70 backdrop-blur-md border-white/20 shadow-lg"
    };

    return (
        <div className={cn(
            "relative p-6 rounded-[2rem] border transition-all duration-300",
            tones[tone],
            hover && "hover:-translate-y-1 hover:shadow-xl hover:border-navy/10",
            className
        )}>
            {children}
        </div>
    );
}