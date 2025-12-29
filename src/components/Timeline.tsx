import { Milestone } from "../types"; // Or keep your inline type
import { cn } from "../lib/cn";
import { History } from "lucide-react";

export default function Timeline({
  title = "Our Journey",
  items,
}: {
  title?: string;
  items: Milestone[];
}) {
  return (
    <div className="relative p-10 md:p-16 rounded-[3.5rem] bg-navy text-white overflow-hidden shadow-2xl shadow-navy/20">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />

      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl bg-white/10 text-sky-400">
          <History className="size-6" />
        </div>
        <h2 className="text-4xl font-black tracking-tight">{title}</h2>
      </div>

      <ol className="relative ml-4 border-l-2 border-white/10 space-y-12">
        {items?.map((m, i) => (
          <li key={i} className="relative pl-10 group">
            {/* Timeline Indicator */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-navy bg-amber-400 ring-4 ring-white/5 group-hover:scale-125 transition-transform duration-300" />
            
            {/* Year Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/50 mb-3">
              {m.year}
            </div>

            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
              {m.title}
            </h4>
            
            {m.text && (
              <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
                {m.text}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}