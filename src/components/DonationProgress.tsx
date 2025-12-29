import { motion } from "framer-motion";

type Props = {
  targetUGX: number;
  currentUGX: number;
  title?: string;
  note?: string;
};

export default function DonationProgress({
  targetUGX,
  currentUGX,
  title = "Campaign Progress",
  note = "Every gift helps us reach more learners.",
}: Props) {
  const pct = Math.max(0, Math.min(100, Math.round((currentUGX / Math.max(targetUGX, 1)) * 100)));
  const fmt = (n: number) => `UGX ${n.toLocaleString("en-UG")}`;

  return (
    <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-2xl shadow-navy/5 border border-slate-50">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h3 className="text-2xl font-black text-navy leading-none">{title}</h3>
          <p className="mt-2 text-sm text-slate-500 font-medium">{note}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-navy">{pct}%</span>
          <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Complete</div>
        </div>
      </div>

      {/* Premium Progress Bar */}
      <div className="relative h-4 w-full rounded-full bg-slate-100 overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full rounded-full bg-gradient-to-r from-navy to-blue-500 relative"
        >
          {/* Subtle "shimmer" effect */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-navy/[0.03] border border-navy/5">
          <div className="text-[10px] uppercase tracking-wider font-bold text-navy/50 mb-1">Raised</div>
          <div className="text-lg font-black text-navy">{fmt(currentUGX)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">Goal</div>
          <div className="text-lg font-black text-slate-600">{fmt(targetUGX)}</div>
        </div>
      </div>
    </div>
  );
}