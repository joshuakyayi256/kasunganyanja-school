import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { 
  History, 
  ShieldCheck, 
  FileSpreadsheet, 
  CalendarCheck,
  TrendingUp,
  Download,
  Users,
  Utensils,
  BookOpen
} from "lucide-react";
import { cn } from "../lib/cn";

export default function Impact() {
  // Update these manually after school administrative audits
  const lastUpdated = "Dec 2025"; 
  const currentRaised = 12500000;
  const goalRaised = 50000000;

  const stats = [
    { label: "Students Supported", value: "85", icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Meals Served", value: "12,400", icon: Utensils, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Books Purchased", value: "1,150", icon: BookOpen, color: "text-green-500", bg: "bg-green-50" },
  ];

  const transparency = [
    { label: "Learning Materials", pct: 42, color: "bg-navy" },
    { label: "Meals & Welfare", pct: 33, color: "bg-sky-500" },
    { label: "Teacher Support", pct: 15, color: "bg-amber-500" },
    { label: "Operations", pct: 10, color: "bg-slate-400" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO: Setting the Standard */}
      <PageHero
        size="lg"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000"
        tint="navy"
        title="Accountability & Impact"
        subtitle="We provide manual, termly audits of all community contributions to ensure 100% of your support reaches our learners."
      />

      {/* 2. PROGRESS: Manual Tracking */}
      <Section container="section-tight" className="-mt-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-navy/5 border border-slate-50">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-navy leading-none">Term 3 Progress</h3>
                    <p className="text-[10px] text-slate-400 mt-2 font-black uppercase tracking-[0.2em]">
                      Last Audit: {lastUpdated}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-navy border-navy/20 bg-navy/5">
                    <History className="size-3 mr-1" /> Manual Reconciliation
                  </Badge>
                </div>
                <DonationProgress targetUGX={goalRaised} currentUGX={currentRaised} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50">
                <h3 className="text-xl font-black text-navy mb-2">Impact Calculator</h3>
                <p className="text-xs text-slate-500 mb-6">Estimate the reach of your contribution.</p>
                <ImpactCalculator />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 3. VERIFIED STATS: The Proof */}
      <Section container="section-tight">
        <Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon, color, bg }) => (
              <div key={label} className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={cn("inline-flex p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110", bg, color)}>
                  <Icon className="size-6" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</div>
                <div className="text-4xl font-black text-navy">{value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* 4. ALLOCATION: Transparency Bars */}
      <Section container="section-tight">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="bg-navy text-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-navy/20">
              <div className="flex items-center gap-3 mb-8">
                <FileSpreadsheet className="size-6 text-sky-400" />
                <h3 className="text-3xl font-black">Fund Allocation</h3>
              </div>
              <div className="space-y-6">
                {transparency.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span className="text-white/60">{item.label}</span>
                      <span className="text-sky-400">{item.pct}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={cn("h-full rounded-full transition-all duration-1000", item.color)}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-[10px] text-white/40 leading-relaxed italic">
                * Allocation percentages are determined by the School Management Committee based on termly priority needs.
              </p>
            </div>
          </Reveal>

          {/* Verification & Reports */}
          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <CalendarCheck className="size-6 text-green-500" />
                  <h4 className="text-xl font-bold text-navy">Transaction Verification</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Since Mobile Money donations are manual, please forward your transaction confirmation to our admin office to receive an official school receipt.
                </p>
                <Button asChild className="w-full py-6 rounded-2xl">
                    <a href="https://wa.me/256757158407" target="_blank" rel="noreferrer">
                        Verify via WhatsApp
                    </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-slate-100 p-8 rounded-[2.5rem] border border-slate-200 border-dashed">
                <h4 className="font-bold text-navy mb-4">Audited Reports</h4>
                <div className="space-y-2">
                  <DownloadRow label="Term 2 Financial Summary" />
                  <DownloadRow label="2024 Annual Impact Audit" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
}

function DownloadRow({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-white text-xs font-bold text-navy border border-slate-200 hover:border-navy transition-all group">
      <span>{label}</span>
      <Download className="size-3 opacity-30 group-hover:opacity-100" />
    </button>
  );
}