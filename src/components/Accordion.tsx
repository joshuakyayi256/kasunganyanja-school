import { useState } from "react";
import type { ReactNode } from "react";
import { Plus, Minus } from "lucide-react"; // Using Plus/Minus for a cleaner educational look
import { cn } from "../lib/cn";

export function AccordionItem({ q, a }: { q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className={cn(
      "group mb-3 rounded-2xl border transition-all duration-300",
      open ? "border-navy/20 bg-navy/[0.02] shadow-sm" : "border-slate-100 bg-white hover:border-navy/10"
    )}>
      <button 
        onClick={() => setOpen(v => !v)} 
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className={cn(
          "font-bold text-lg transition-colors",
          open ? "text-navy" : "text-slate-700"
        )}>{q}</span>
        
        <div className={cn(
          "size-8 rounded-full flex items-center justify-center transition-all",
          open ? "bg-navy text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-navy/5"
        )}>
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </div>
      </button>

      <div className={cn(
        "grid transition-all duration-500 ease-in-out", 
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed max-w-3xl">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  return <div className="max-w-4xl mx-auto">{items.map((it, i) => <AccordionItem key={i} {...it} />)}</div>;
}