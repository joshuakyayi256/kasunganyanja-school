import Card from "./ui/Card";
import { cn } from "../lib/cn";
import { div } from "framer-motion/client";

function fmtUGX(n: number) { return "UGX " + n.toLocaleString(); }

export default function DonationProgress({
  targetUGX, currentUGX, className,
}: { targetUGX: number; currentUGX: number; className?: string }) {
  const pct = Math.min(100, Math.round((currentUGX / targetUGX) * 100 || 0));
  return (
    <Card className={cn("p-5", className)}>
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm text-black/70">Raised</div>
          <div className="text-2xl font-extrabold">{fmtUGX(currentUGX)}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-black/70">Goal</div>
          <div className="text-xl font-bold">{fmtUGX(targetUGX)}</div>
        </div>
      </div>
      <div className="mt-3 h-3 w-full rounded-full bg-black/[.06] overflow-hidden">
        <div className="h-full bg-navy transition-[width] duration-700" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 text-sm text-black/70">{pct}% funded</div>
    </Card>
  );
}
