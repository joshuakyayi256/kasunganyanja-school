import { Clock } from "lucide-react";
import { cn } from "../lib/cn";

const ROWS = [
  ["08:00 – 08:30", "Arrival & Morning Prep"],
  ["08:30 – 10:30", "Lessons (Literacy / Numeracy / Science)"],
  ["10:30 – 11:00", "Break"],
  ["11:00 – 13:00", "Lessons (Social Studies / RE / Swahili)"],
  ["13:00 – 14:00", "Lunch & Play"],
  ["14:00 – 15:30", "Practice / Clubs / Reading"],
  ["15:30 – 16:30", "Physical Education / Sports"],
  ["16:30 – 17:00", "Reflection & Dismissal"],
];

export default function DailySchedule() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Container adjusted to 'glass' effect. 
        Using white/10 background to look premium against the Navy Section.
      */}
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/10">
              <th className="py-5 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-sky-400 border-b border-white/10">
                Time Slot
              </th>
              <th className="py-5 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-sky-400 border-b border-white/10">
                Planned Activity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {ROWS.map(([time, activity]) => (
              <tr 
                key={time} 
                className="group hover:bg-white/10 transition-all duration-300"
              >
                <td className="py-5 px-8 text-sm font-bold text-white whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Clock className="size-3.5 text-sky-400/50 group-hover:text-sky-400 transition-colors" />
                    {time}
                  </div>
                </td>
                <td className="py-5 px-8 text-sm text-white/80 group-hover:text-white transition-colors">
                  {activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Visual Footer Note */}
      <div className="mt-6 flex justify-center items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
        <span className="h-px w-8 bg-white/10" />
        Standard School Hours
        <span className="h-px w-8 bg-white/10" />
      </div>
    </div>
  );
}