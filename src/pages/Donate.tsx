import PageHero from "../components/PageHero"; // Using your improved PageHero
import MobileMoneyOnlyWidget from "../components/MobileMoneyOnlyWidget";
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import { Heart, ShieldCheck, Target, Info } from "lucide-react";
import { cn } from "../lib/cn";

const tiers = [
  { amt: 10000, label: "Exercise books & pencils", popular: false },
  { amt: 30000, label: "Uniform support for one learner", popular: false },
  { amt: 50000, label: "Lunch for a week (pupil)", popular: true },
  { amt: 100000, label: "Teacher materials & training", popular: false },
];

const needs = [
  { label: "School Infrastructure", level: "High", text: "Repairs and maintenance of facilities.", color: "text-red-500 bg-red-50" },
  { label: "Learning Materials", level: "High", text: "Books, stationery, and resources.", color: "text-red-500 bg-red-50" },
  { label: "Teacher Support", level: "Medium", text: "Materials and professional development.", color: "text-amber-500 bg-amber-50" },
  { label: "Student Meals", level: "Medium", text: "Nutritious meals to support learning.", color: "text-amber-500 bg-amber-50" },
  { label: "Scholarships", level: "Ongoing", text: "Keep vulnerable children in school.", color: "text-sky-500 bg-sky-50" },
];

export default function Donate() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 1. HERO: Emotional and Institutional */}
      <PageHero
        size="lg"
        bgImage="/images/child-save.jpg"
        tint="navy"
        title="Fuel a child's learning today"
        subtitle="Your contribution directly funds books, meals, and teacher resources. We are committed to 100% transparency in our community-led mission."
        right={
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
                <ShieldCheck className="size-4 text-sky-400" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Verified NGO Account</span>
             </div>
             <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                Mobile Money donations are received directly by the school administration.
             </p>
          </div>
        }
      />

      {/* 2. CORE INTERACTION: Give & Impact */}
      <Section container="section-tight" className="-mt-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Donation Widget: 3 Columns */}
          <div className="lg:col-span-3">
            <Reveal>
              <div id="donate-now" className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-navy/5 border border-slate-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-navy text-white">
                    <Heart className="size-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-navy leading-none">Give via Mobile Money</h3>
                    <p className="text-sm text-slate-400 mt-2 font-medium">Safe, direct, and instant support.</p>
                  </div>
                </div>
                
                <MobileMoneyOnlyWidget
                  receiverName="Kasunganyanja Parents Primary School"
                  receiverNumber="+256 757 158 407"
                  suggestedTiers={tiers.map((t) => t.amt)}
                />
              </div>
            </Reveal>
          </div>

          {/* Progress & Tools: 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <DonationProgress targetUGX={50_000_000} currentUGX={12_500_000} />
            </Reveal>
            
            <Reveal delay={0.2}>
              <div id="impact">
                <ImpactCalculator />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 3. CONTEXT: Tiers & Needs */}
      <Section container="section-tight">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Tiers with "Popular" anchor */}
          <Reveal>
            <ColorCard className="p-8 bg-white border-none shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                 <Target className="size-5 text-navy" />
                 <h4 className="text-xl font-bold text-navy">Impact Tiers</h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {tiers.map((t) => (
                  <div 
                    key={t.amt} 
                    className={cn(
                      "relative rounded-2xl border p-5 transition-all",
                      t.popular ? "border-navy bg-navy/[0.02] shadow-md" : "border-slate-100 bg-white hover:border-navy/20"
                    )}
                  >
                    {t.popular && (
                      <div className="absolute -top-3 left-4 bg-navy text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        Most Needed
                      </div>
                    )}
                    <div className="text-2xl font-black text-navy">UGX {t.amt.toLocaleString()}</div>
                    <div className="text-sm font-medium text-slate-500 mt-1">{t.label}</div>
                  </div>
                ))}
              </div>
            </ColorCard>
          </Reveal>

          {/* Needs with Priority Badges */}
          <Reveal delay={0.1}>
            <ColorCard className="p-8 bg-white border-none shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                 <Info className="size-5 text-navy" />
                 <h4 className="text-xl font-bold text-navy">Current Priority Needs</h4>
              </div>
              <div className="space-y-4">
                {needs.map((n) => (
                  <div key={n.label} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className={cn("shrink-0 px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter", n.color)}>
                      {n.level}
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">{n.label}</div>
                      <div className="text-xs text-slate-500 leading-relaxed mt-1">{n.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      {/* 4. FINAL TRUST CTA */}
      <Section container="section-tight" className="pb-32 text-center">
         <Reveal>
            <div className="max-w-2xl mx-auto">
               <h4 className="text-2xl font-black text-navy mb-4">Questions about donating?</h4>
               <p className="text-slate-500 mb-8">
                  We welcome visits and calls for those who wish to discuss large infrastructure gifts or scholarship endowments.
               </p>
               <div className="flex justify-center gap-4">
                  <a href="tel:+256757158407" className="text-navy font-bold hover:underline">Call Us</a>
                  <span className="text-slate-300">|</span>
                  <a href="mailto:baniinah@gmail.com" className="text-navy font-bold hover:underline">Email Admin</a>
               </div>
            </div>
         </Reveal>
      </Section>
    </div>
  );
}