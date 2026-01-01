import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title="Privacy Policy" 
        description="Learn how Kasunganyanja Parents Primary School protects student data and donor information." 
        path="/privacy" 
      />

      <PageHero
        size="md"
        tint="navy"
        title="Privacy Policy"
        subtitle="Our commitment to protecting the data of our learners, parents, and partners."
      />

      <Section container="section-tight">
        <div className="max-w-4xl mx-auto space-y-12">
          <Reveal>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-navy/5 text-navy">
                  <ShieldCheck className="size-6" />
                </div>
                <h2 className="text-2xl font-black text-navy">Child Safeguarding & Identity</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                To protect our learners, Kasunganyanja Parents Primary School uses aliases and non-identifiable imagery for public sponsorship profiles. We never publish real names, home locations, or sensitive family backgrounds on the public web without explicit, documented consent from guardians and the School Management Committee.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                title: "Data Collection",
                text: "We collect enrollment data and donor contact info solely for school administration and reporting."
              },
              {
                icon: EyeOff,
                title: "Third-Party Sharing",
                text: "We do not sell or lease your data. Information is shared only with the Ministry of Education as required by law."
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 h-full">
                  <item.icon className="size-6 text-sky-500 mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem]">
              <p className="text-slate-400 text-sm italic">
                Questions regarding your data? Contact our Data Officer at <span className="font-bold text-navy">baniinah@gmail.com</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}