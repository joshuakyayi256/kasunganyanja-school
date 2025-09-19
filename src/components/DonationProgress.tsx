// src/components/DonationProgress.tsx
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
  const pct = Math.max(
    0,
    Math.min(100, Math.round((currentUGX / Math.max(targetUGX, 1)) * 100))
  );

  const fmt = (n: number) =>
    `UGX ${n.toLocaleString("en-UG", { maximumFractionDigits: 0 })}`;

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 md:p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg md:text-xl font-bold text-navy">{title}</h3>
        <div className="text-sm text-black/70">{pct}%</div>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="mt-3 h-3 w-full rounded-full bg-black/10 overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-navy transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-black/10 bg-black/5 px-3 py-2">
          <div className="text-black/60">Raised</div>
          <div className="font-semibold">{fmt(currentUGX)}</div>
        </div>
        <div className="rounded-xl border border-black/10 bg-black/5 px-3 py-2">
          <div className="text-black/60">Goal</div>
          <div className="font-semibold">{fmt(targetUGX)}</div>
        </div>
      </div>

      <p className="mt-3 text-xs text-black/60">{note}</p>
    </div>
  );
}
