import { BookOpenCheck, ShieldCheck, BrainCircuit, Sparkles } from "lucide-react";
import { cn } from "../lib/cn";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: BookOpenCheck,
    title: "Academic Excellence",
    text: "Strong literacy, numeracy, science, and inquiry-based learning.",
    color: "text-sky-400",
    bg: "bg-sky-400/10"
  },
  {
    icon: ShieldCheck,
    title: "Character Development",
    text: "Discipline, respect, integrity, and responsibility in every action.",
    color: "text-amber-400",
    bg: "bg-amber-400/10"
  },
  {
    icon: BrainCircuit,
    title: "Critical Thinking",
    text: "Solve problems, ask good questions, and collaborate with others.",
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
];

export default function ObjectivesStrip() {
  return (
    <div className="px-4">
      <div className={cn(
        "max-w-6xl mx-auto rounded-[3rem] relative overflow-hidden",
        "bg-gradient-to-br from-navy via-[#0a2742] to-navy",
        "text-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10",
        "px-6 md:px-12 py-12 md:py-16"
      )}>
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20" />

        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="size-4 text-sky-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Educational Objectives
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm font-medium leading-relaxed">
            Our curriculum is designed to nurture the whole child—academically, socially, and ethically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {ITEMS.map(({ icon: Icon, title, text, color, bg }, i) => (
            <Reveal key={title} delay={i * 0.1} y={20}>
              <div className="group h-full rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                <div className={cn("inline-flex p-3 rounded-2xl mb-6 transition-transform group-hover:scale-110", bg, color)}>
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
                <p className="text-white/60 text-base leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}