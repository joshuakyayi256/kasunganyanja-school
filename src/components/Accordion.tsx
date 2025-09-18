import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/cn";

export function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-black/10 py-3">
            <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between text-left">
                <span className="font-medium">{q}</span>
                <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
            </button>
            <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                    <p className="mt-2 text-black/80">{a}</p>
                </div>
            </div>
        </div>
    );
}
export default function Accordion({ items }: { items: { q: string; a: React.ReactNode }[] }) {
    return <div className="divide-y divide-black/5">{items.map((it, i) => <AccordionItem key={i} {...it} />)}</div>;
}
