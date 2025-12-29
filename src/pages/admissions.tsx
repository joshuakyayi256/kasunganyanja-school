import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import EnrollmentApply from "../components/EnrollmentApply";
import VisitScheduler from "../components/VisitScheduler";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";
import { FileText, Coins, ClipboardCheck, Calendar } from "lucide-react";
import SEO from "../components/SEO";

<SEO 
  title="Admissions & Enrollment" 
  description="Apply to Kasunganyanja Parents Primary School. View our P1–P7 admission process, requirements, and schedule a campus visit in Bunyangabu." 
  path="/admissions" 
/>

export default function Admissions() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageHero
        size="lg"
        bgImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
        tint="navy"
        title="Join Our Community"
        subtitle="Start your child's journey at Kasunganyanja. We are now accepting applications for the 2025/26 academic year."
      />

      {/* Primary Actions: Apply & Visit */}
      <Section container="section-tight">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
             <Reveal>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-2xl bg-navy text-white shadow-lg shadow-navy/20">
                      <FileText className="size-6" />
                    </div>
                    <h2 className="text-3xl font-black text-navy">Online Application</h2>
                  </div>
                  <EnrollmentApply />
                </div>
             </Reveal>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-3 mb-4 text-navy">
                  <Calendar className="size-5" />
                  <h3 className="text-xl font-bold">Schedule a Visit</h3>
                </div>
                <VisitScheduler />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ColorCard tone="navy">
                <div className="flex items-center gap-3 mb-4">
                  <Coins className="size-5 text-sky-400" />
                  <h3 className="text-xl font-bold">Fees & Scholarships</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We believe quality education should be accessible. We keep fees modest and offer support for vulnerable families.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="white" className="w-full">Download Fee Guide (PDF)</Button>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Request Assistance</Button>
                </div>
              </ColorCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* The Process: Horizontal Steps */}
      <Section container="section-tight" className="bg-white rounded-[3rem] mx-4 py-20 px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="p-3 rounded-full bg-navy/5 text-navy inline-block mb-4">
             <ClipboardCheck className="size-6" />
          </div>
          <h2 className="text-4xl font-black text-navy mb-4">The Enrollment Process</h2>
          <p className="text-slate-500">Four simple steps to becoming a part of the Kasunganyanja family.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Apply", text: "Submit the online form or visit our front office." },
            { step: "02", title: "Document", text: "Provide birth certificate and previous school reports." },
            { step: "03", title: "Assess", text: "A gentle literacy and numeracy check for P2–P7." },
            { step: "04", title: "Welcome", text: "Official enrollment and student orientation." },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                <div className="text-5xl font-black text-navy/10 absolute top-4 right-4">{item.step}</div>
                <h4 className="text-xl font-bold text-navy mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-500 relative z-10">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}