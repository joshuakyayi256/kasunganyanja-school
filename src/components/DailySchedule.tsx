import Card from "./ui/Card";
import { Clock } from "lucide-react";

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
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="size-5 text-navy opacity-50" />
        <h3 className="text-xl font-bold text-navy">
          The School Day (8:00 AM – 5:00 PM)
        </h3>
      </div>
      
      <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Time</th>
              <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Activity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {ROWS.map(([time, activity]) => (
              <tr key={time} className="group hover:bg-navy/[0.02] transition-colors">
                <td className="py-4 px-6 text-sm font-bold text-navy whitespace-nowrap">
                  {time}
                </td>
                <td className="py-4 px-6 text-sm text-slate-600 group-hover:text-navy transition-colors">
                  {activity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}