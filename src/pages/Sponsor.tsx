import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import { User, ShieldCheck, Heart, Sparkles, GraduationCap } from "lucide-react";
import { cn } from "../lib/cn";

const MOCK = [
  {
    id: "L-101",
    name: "Aisha",
    class: "P3",
    need: "Meals & Books",
    monthly: 50000,
  },
  {
    id: "L-102",
    name: "Brian",
    class: "P5",
    need: "Uniform & Fees Support",
    monthly: 90000,
  },
  { id: "L-103", name: "Hope", class: "P2", need: "Daily Meals", monthly: 40000 },
];

export default function Sponsor() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO: Setting the Emotional Tone */}
      <PageHero
        size="lg"
        bgImage="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000"
        tint="navy"
        title="Sponsor a Child"
        subtitle="Your steady monthly support ensures a child stays in school, receives nutritious meals, and has the materials to succeed."
      />

      {/* 2. SPONSORSHIP CARDS: Empathy-driven UI */}
      <Section container="section-tight" className="-mt-16 relative z-10">
        <div className="text-center mb-12">
            <Badge variant="navy" className="mb-4">Immediate Opportunity</Badge>
            <h2 className="text-3xl font-black text-navy">Learners Awaiting Support</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {MOCK.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.1}>
              <div className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-navy/5 hover:shadow-2xl transition-all duration-300">
                {/* Visual Placeholder for Child Identity (Privacy Safe) */}
                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:scale-110 transition-transform">
                    <User className="size-8" />
                </div>
                
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-navy">{s.name}</span>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-sky-50 text-sky-600 text-[10px] font-black uppercase tracking-widest">
                            <GraduationCap className="size-3" /> {s.class}
                        </div>
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Urgent Need: {s.need}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50">
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-2xl font-black text-navy">UGX {s.monthly.toLocaleString()}</span>
                        <span className="text-xs font-medium text-slate-400">/ month</span>
                    </div>
                    
                    <Button
                        className="w-full py-6 rounded-2xl shadow-lg shadow-navy/10"
                        onClick={() =>
                            alert("This action triggers the school's manual subscription guide.")
                        }
                    >
                        Sponsor {s.name}
                    </Button>
                </div>

                {/* Privacy Badge on Card */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] font-bold text-slate-300 uppercase tracking-tighter">
                    <ShieldCheck className="size-3" /> Privacy-Safe Alias Used
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. SAFEGUARDING: Building Trust */}
      <Section container="section-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
                <div className="space-y-6">
                    <div className="p-3 rounded-2xl bg-navy text-white w-fit">
                        <ShieldCheck className="size-6" />
                    </div>
                    <h3 className="text-4xl font-black text-navy leading-tight">Safeguarding <br/> & Privacy Policy</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        To protect our learners, we publish anonymized profiles with community consent. Personal details are 
                        protected according to Ugandan data privacy standards; updates focus purely on school progress and wellbeing.
                    </p>
                </div>
            </Reveal>

            <div className="grid gap-4">
                {[
                    { icon: Heart, label: "100% Impact", text: "Every cent goes toward student welfare." },
                    { icon: Sparkles, label: "Termly Updates", text: "Receive reports on their academic growth." },
                    { icon: GraduationCap, label: "Direct Support", text: "Funds are used for meals, fees, and books." }
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                        <div className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-50 shadow-sm">
                            <div className="p-2 rounded-xl bg-navy/5 text-navy">
                                <item.icon className="size-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy">{item.label}</h4>
                                <p className="text-sm text-slate-400">{item.text}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </Section>
    </div>
  );
}