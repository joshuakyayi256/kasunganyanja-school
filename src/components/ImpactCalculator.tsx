import { useState } from "react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

export default function ImpactCalculator() {
  const [amt, setAmt] = useState(50000);
  const meals = Math.floor(amt / 5000);
  const uniforms = Math.floor(amt / 30000);
  const books = Math.floor(amt / 10000);

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Impact Calculator</h4>
        <Badge>UGX {amt.toLocaleString()}</Badge>
      </div>
      <input
        type="range"
        min={10000}
        max={300000}
        step={10000}
        value={amt}
        onChange={(e) => setAmt(Number(e.target.value))}
        className="mt-4 w-full"
      />
      <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
        <li className="rounded-xl border border-black/10 p-3">
          <div className="font-bold">{meals}</div>
          <div className="text-black/70">meals</div>
        </li>
        <li className="rounded-xl border border-black/10 p-3">
          <div className="font-bold">{uniforms}</div>
          <div className="text-black/70">uniforms</div>
        </li>
        <li className="rounded-xl border border-black/10 p-3">
          <div className="font-bold">{books}</div>
          <div className="text-black/70">stationery packs</div>
        </li>
      </ul>
      <p className="mt-2 text-xs text-black/60">
        Estimates for illustration. Funds are used where the need is greatest.
      </p>
    </Card>
  );
}
