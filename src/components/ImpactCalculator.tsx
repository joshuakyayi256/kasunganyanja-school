import { useState } from "react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button"; // Re-using your improved button
import { Utensils, Shirt, BookOpen, Heart } from "lucide-react";
import { cn } from "../lib/cn";

const PRESETS = [50000, 150000, 300000];

export default function ImpactCalculator() {
  const [amt, setAmt] = useState(50000);
  
  const impacts = [
    { label: "Daily Meals", count: Math.floor(amt / 5000), icon: Utensils, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "School Uniforms", count: Math.floor(amt / 30000), icon: Shirt, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Stationery Packs", count: Math.floor(amt / 10000), icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
  ];

  return (
    <Card className="p-6 border-none shadow-2xl shadow-navy/5 bg-white rounded-[2rem]">
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-2 mb-2">
           <Heart className="size-4 text-red-500 fill-red-500" />
           <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Calculate Your Impact</span>
        </div>
        <h4 className="text-2xl font-black text-navy leading-tight">
          See the difference <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-600">
            UGX {amt.toLocaleString()}
          </span> makes
        </h4>
      </div>

      {/* Preset Buttons for Quick Interaction */}
      <div className="flex gap-2 mb-6">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            onClick={() => setAmt(preset)}
            className={cn(
              "flex-1 py-2 text-xs font-bold rounded-xl border transition-all",
              amt === preset 
                ? "bg-navy text-white border-navy shadow-md shadow-navy/20" 
                : "bg-white text-slate-500 border-slate-100 hover:border-navy/20"
            )}
          >
            UGX {preset / 1000}k
          </button>
        ))}
      </div>

      <input
        type="range"
        min={10000}
        max={500000}
        step={10000}
        value={amt}
        onChange={(e) => setAmt(Number(e.target.value))}
        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-navy mb-8"
      />

      <div className="space-y-3">
        {impacts.map((item) => (
          <div 
            key={item.label}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:scale-[1.02] hover:bg-white hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className={cn("p-3 rounded-xl", item.bg, item.color)}>
                <item.icon className="size-5" />
              </div>
              <div>
                <div className="text-xl font-black text-navy leading-none">
                  {item.count}
                </div>
                <div className="text-sm font-medium text-slate-500 mt-1">
                  {item.label}
                </div>
              </div>
            </div>
            
            {/* Visual indicator of "scale" */}
            <div className="flex gap-1">
              {[...Array(Math.min(item.count, 5))].map((_, i) => (
                <div key={i} className={cn("h-1.5 w-1.5 rounded-full", item.color, "opacity-40")} />
              ))}
              {item.count > 5 && <span className="text-[10px] font-bold text-slate-300">+</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50">
        <p className="text-[11px] leading-relaxed text-slate-400 italic text-center">
          "Every gift, no matter the size, helps us provide quality education in Kasunganyanja."
        </p>
      </div>
    </Card>
  );
}