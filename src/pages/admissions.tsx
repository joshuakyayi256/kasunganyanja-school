import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import EnrollmentApply from "../components/EnrollmentApply";
import VisitScheduler from "../components/VisitScheduler";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";
import { FileText, Coins, ClipboardCheck, Calendar, ShieldCheck, MapPin } from "lucide-react";
import SEO from "../components/SEO";

export default function Admissions() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Admissions & Enrollment" 
        description="Apply to Kasunganyanja Parents Primary School. View our P1–P7 admission process, requirements, and schedule a campus visit in Bunyangabu." 
        path="/admissions" 
      />

      {/* HERO: Using girls-linedup.jpg to show school discipline and community */}
      <PageHero
        size="lg"
        bgImage="/images/girls-linedup.jpg"
        tint="navy"
        title="Join Our Community"
        subtitle="Start your child's journey at Kasunganyanja. We are now accepting applications for the 2025/26 academic year."
      />

      {/* Primary Actions: Apply & Visit */}
      <Section container="section-tight" className="-mt-12 relative z-20">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
             <Reveal>
                <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-navy/5 border border-slate-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-navy text-white shadow-lg shadow-navy/20">
                      <FileText className="size-6" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-navy">Online Application</h2>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Enrollment for P1 – P7</p>
                    </div>
                  </div>
                  <EnrollmentApply />
                </div>
             </Reveal>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-navy/5">
                <div className="flex items-center gap-3 mb-6 text-navy">
                  <Calendar className="size-5 text-sky-500" />
                  <h3 className="text-xl font-bold">Schedule a Visit</h3>
                </div>
                <VisitScheduler />
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 flex items-start gap-3">
                  <MapPin className="size-4 text-slate-400 mt-1" />
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    Located in Kasunganyanja, Bunyangabu District. We welcome parents every weekday from 9:00 AM.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ColorCard tone="navy">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="size-5 text-sky-400" />
                  <h3 className="text-xl font-bold">Fees & Scholarships</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  We believe quality education should be accessible. We keep fees modest and offer support for vulnerable families through our community sponsorship fund.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="white" className="w-full py-6 rounded-2xl font-black shadow-lg">Download Fee Guide</Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-2xl">Financial Assistance</Button>
                </div>
              </ColorCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Trust & Campus Section */}
      <Section container="section-tight">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-[4rem] p-8 md:p-16 border border-slate-100 shadow-sm">
           <Reveal>
              <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                 <img 
                    src="/images/mainBuilding.jpg" 
                    alt="Kasunganyanja Main Campus" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                 <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                    <ShieldCheck className="size-5 text-sky-400" />
                    <span className="text-xs font-black uppercase tracking-widest">Licensed Ministry School</span>
                 </div>
              </div>
           </Reveal>
           <Reveal delay={0.1}>
              <div className="space-y-6">
                 <h3 className="text-4xl font-black text-navy leading-tight">A Safe Haven <br/> for Excellence</h3>
                 <p className="text-slate-500 text-lg leading-relaxed">
                    Our campus is designed to provide a secure and stimulating environment. From well-ventilated classrooms to 
                    expansive play fields, every inch of our facility supports student wellbeing.
                 </p>
                 <ul className="grid gap-4">
                    {[
                      "Dedicated P1–P7 learning blocks",
                      "Safe & secure play areas",
                      "Sanitary & health-focused facilities",
                      "Community-monitored campus"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-navy font-bold text-sm">
                        <div className="size-2 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </Reveal>
        </div>
      </Section>

      {/* The Process: Horizontal Steps */}
      <Section container="section-tight" className="py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="p-4 rounded-2xl bg-navy/5 text-navy inline-block mb-6">
             <ClipboardCheck className="size-6" />
          </div>
          <h2 className="text-4xl font-black text-navy mb-4 tracking-tight">How to Enroll</h2>
          <p className="text-slate-500 text-lg">Four simple steps to becoming a part of the Kasunganyanja family.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Apply", text: "Submit the online form or visit our front office." },
            { step: "02", title: "Document", text: "Provide birth certificate and previous school reports." },
            { step: "03", title: "Assess", text: "A gentle literacy and numeracy check for P2–P7." },
            { step: "04", title: "Welcome", text: "Official enrollment and student orientation." },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-navy/10 hover:shadow-2xl transition-all duration-500">
                <div className="text-6xl font-black text-navy/5 absolute top-6 right-8 group-hover:text-sky-500/10 transition-colors">{item.step}</div>
                <h4 className="text-2xl font-black text-navy mb-3 relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed relative z-10">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}