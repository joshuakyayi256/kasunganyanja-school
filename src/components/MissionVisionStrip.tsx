import type { ReactNode } from "react";
import { Target, Telescope } from "lucide-react";

/** Navy card-band with rounded corners + subtle gradient */
export default function MissionVisionStrip({
  mission,
  vision,
}: {
  mission: ReactNode;
  vision: ReactNode;
}) {
  return (
    <section className="px-4">
      <div
        className={[
          "max-w-6xl mx-auto",
          "rounded-3xl border border-white/10",
          "bg-gradient-to-br from-navy to-[#0a2742]",
          "text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]",
          "px-6 md:px-10 py-10 md:py-12",
        ].join(" ")}
      >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-10 rounded-full bg-white/80" />
              <h3 className="text-2xl font-bold tracking-tight">Mission</h3>
              <Target className="size-5 opacity-90" />
            </div>
            <p className="mt-3 text-white/90 text-lg leading-relaxed">
              {mission}
            </p>
          </div>

          {/* Vision */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-10 rounded-full bg-[#F5B301]" />
              <h3 className="text-2xl font-bold tracking-tight">Vision</h3>
              <Telescope className="size-5 opacity-90" />
            </div>
            <p className="mt-3 text-white/90 text-lg leading-relaxed">
              {vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
