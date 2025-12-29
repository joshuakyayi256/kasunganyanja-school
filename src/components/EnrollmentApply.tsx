import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { FileCheck, UserPlus, Phone, ClipboardList, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/cn";

export default function EnrollmentApply() {
  const requirements = [
    { icon: FileCheck, text: "Birth Certificate Copy" },
    { icon: ClipboardList, text: "Previous School Report" },
    { icon: UserPlus, text: "Passport Sized Photo" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-3xl font-black text-navy tracking-tight">Enrollment P1 — P7</h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Admissions are rolling. We prioritize families within **Kasunganyanja Parish** and surrounding communities to foster local growth.
        </p>
      </div>

      {/* Requirement Icons - Makes it scannable */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {requirements.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-white hover:shadow-md group">
            <item.icon className="size-6 text-navy/40 group-hover:text-navy transition-colors mb-2" />
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-sky-100 p-1 rounded-full">
            <CheckCircle2 className="size-4 text-sky-600" />
          </div>
          <div>
            <p className="font-bold text-navy">Placement Interview</p>
            <p className="text-sm text-slate-500">A gentle reading & numeracy check for students entering P2–P7.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 bg-green-100 p-1 rounded-full">
            <CheckCircle2 className="size-4 text-green-600" />
          </div>
          <div>
            <p className="font-bold text-navy">Financial Assistance</p>
            <p className="text-sm text-slate-500">Need-based support is available for vulnerable families through our scholarship fund.</p>
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="flex-1 shadow-xl shadow-navy/20">
          <a href="mailto:baniinah@gmail.com" className="flex items-center justify-center gap-2">
            Apply Online Now
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="flex-1">
          <a href="tel:+256757158407" className="flex items-center justify-center gap-2 text-navy">
            <Phone className="size-4" /> Call Admissions
          </a>
        </Button>
      </div>

      <p className="text-[10px] text-center text-slate-400 font-medium">
        HAVE QUESTIONS? OUR ADMISSIONS OFFICE IS OPEN MON-FRI, 8AM - 5PM.
      </p>
    </div>
  );
}