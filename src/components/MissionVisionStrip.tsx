import type { ReactNode } from "react";
import { Target, Telescope, Sparkles } from "lucide-react";
import { cn } from "../lib/cn";
import Reveal from "./Reveal";

export default function MissionVisionStrip({
  mission,
  vision,
}: {
  mission: ReactNode;
  vision: ReactNode;
}) {
  return (
    <section className="px-4 relative z-10">
      <Reveal y={30}>
        <div
          className={cn(
            "max-w-6xl mx-auto rounded-[2.5rem] relative overflow-hidden",
            "bg-gradient-to-br from-navy via-[#0a2742] to-navy",
            "text-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]",
            "border border-white/10"
          )}
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/10 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-light/20 blur-[80px] -ml-32 -mb-32" />

          <div className="relative grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Mission Section */}
            <div className="p-10 md:p-14 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-sky-400 group-hover:scale-110 transition-transform duration-500">
                  <Target className="size-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Purpose</div>
                  <h3 className="text-3xl font-black tracking-tight">Mission</h3>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed font-medium italic">
                "{mission}"
              </p>
            </div>

            {/* Vision Section */}
            <div className="p-10 md:p-14 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#F5B301] group-hover:scale-110 transition-transform duration-500">
                  <Telescope className="size-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">Aspiration</div>
                  <h3 className="text-3xl font-black tracking-tight">Vision</h3>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed font-medium italic">
                "{vision}"
              </p>
            </div>
          </div>
          
          {/* Bottom decorative bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-sky-400/30 to-transparent opacity-50" />
        </div>
      </Reveal>
    </section>
  );
}