import { BookOpenCheck, ShieldCheck, BrainCircuit } from "lucide-react";

const ITEMS = [
  {
    icon: BookOpenCheck,
    title: "Academic Excellence",
    text: "Strong literacy, numeracy, science, and inquiry-based learning.",
  },
  {
    icon: ShieldCheck,
    title: "Character Development",
    text: "Discipline, respect, integrity, and responsibility.",
  },
  {
    icon: BrainCircuit,
    title: "Critical Thinking",
    text: "Solve problems, ask good questions, collaborate with others.",
  },
];

export default function ObjectivesStrip() {
  return (
    <div className="px-4">
      <div
        className={[
          "max-w-6xl mx-auto",
          "rounded-3xl border border-black/10",
          "bg-navy text-white",
          "shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
          "px-6 md:px-10 py-10 md:py-12",
        ].join(" ")}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Our Education Objectives
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className={[
                "rounded-2xl",
                "bg-white/6 backdrop-blur-sm",
                "border border-white/10",
                "p-5 md:p-6",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
                "transition-transform duration-300 hover:-translate-y-0.5",
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-white/85 text-lg leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
