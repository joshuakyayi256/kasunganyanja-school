import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { Gavel, Copyright, RefreshCcw, AlertCircle } from "lucide-react";

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title="Terms of Use" 
        description="Website terms and conditions for Kasunganyanja Parents Primary School." 
        path="/terms" 
      />

      <PageHero
        size="md"
        tint="navy"
        title="Terms of Use"
        subtitle="Standard guidelines for interacting with our digital school platform."
      />

      <Section container="section-tight">
        <div className="max-w-4xl mx-auto space-y-8">
          <Reveal>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <Gavel className="size-6 text-navy" />
                <h2 className="text-2xl font-black text-navy">Acceptance of Terms</h2>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  By accessing this website, you agree to comply with our community standards and Ugandan digital regulations.
                </p>
                
                <h3 className="text-lg font-bold text-navy">Donations & Refunds</h3>
                <p>
                  Contributions made via Mobile Money are considered voluntary gifts for student welfare. While we maintain a strict 100% impact policy, refunds are generally not possible once the funds have been allocated to school requirements.
                </p>

                <h3 className="text-lg font-bold text-navy">Intellectual Property</h3>
                <p>
                  The official school badge, student stories, and campus photography are the property of Kasunganyanja Parents Primary School. Unauthorized use of student imagery is strictly prohibited under our Safeguarding Policy.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="bg-navy text-white p-8 rounded-[2.5rem] flex items-start gap-4 shadow-xl">
               <AlertCircle className="size-6 text-sky-400 shrink-0 mt-1" />
               <div>
                  <h4 className="font-bold mb-2">Notice of Changes</h4>
                  <p className="text-white/60 text-sm">
                    We reserve the right to update these terms to reflect changes in school policy or Ugandan Law.
                  </p>
               </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}