import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";

import MissionVisionStrip from "../components/MissionVisionStrip";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import { school } from "../data/school";
import { Award, Users, BookOpen, Heart } from "lucide-react";
import { Milestone } from "../types";

const safeArray = <T,>(v: T[] | undefined | null): T[] =>
  Array.isArray(v) ? v : [];

const FALLBACK_MILESTONES: Milestone[] = [
  { year: "2016", title: "School Founded", text: "Established by Dr Tusiime Ramathan Hamza with an inaugural class of 50 pupils." },
  { year: "2018", title: "PLE Cohort Prepared", text: "Strengthened P4–P7 with targeted literacy, numeracy and science support." },
  { year: "2021", title: "Community Growth", text: "Enrollment reached 150 as parents embraced a values-first model." },
  { year: "2024", title: "Infrastructure Bloom", text: "Upgraded learning spaces and broadened clubs (sports, debate, music)." },
  { year: "Today", title: "200+ Learners", text: "A fully licensed institution focused on transformation and success." },
];

export default function About() {
  const aboutHero = "/images/girlsinfront.jpg";
  const milestones = safeArray<Milestone>((school as any)?.milestones);
  const timelineItems = milestones.length ? milestones : FALLBACK_MILESTONES;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO: The Visual Hook */}
      <PageHero
        size="lg"
        bgImage={aboutHero}
        tint="navy"
        title="Our Story & Legacy"
        subtitle="Discover the foundation of Kasunganyanja Parents Primary School—where character meets academic excellence."
      />

      {/* 2. THE MISSION: Overlapping the Hero for Depth */}
      <div className="-mt-16 relative z-20">
        <MissionVisionStrip mission={school.mission} vision={school.vision} />
      </div>

      {/* 3. HISTORY: The Narrative Journey */}
      <Section tone="slate" container="section">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <Reveal>
              <Badge variant="navy" className="mb-4">Our Heritage</Badge>
              <h2 className="text-4xl font-black text-navy leading-tight mb-6">
                A Journey of <br/> Transformation
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Since 2016, we have been committed to providing more than just an education—we provide a pathway to a better future.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Timeline title="Our Journey" items={timelineItems} />
          </div>
        </div>
      </Section>

      {/* 4. LEADERSHIP: The Human Connection */}
      <Section container="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative group">
               {/* Founder Photo Placeholder */}
               <div className="aspect-[4/5] rounded-[3rem] bg-slate-100 overflow-hidden border border-slate-100 shadow-2xl">
                  <img 
                    src="/images/founder.jpg" 
                    alt="Dr Tusiime Ramathan Hamza" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 p-8 bg-white rounded-[2rem] shadow-xl border border-slate-50">
                  <p className="text-navy font-black text-xl leading-none">Dr Tusiime R. Hamza</p>
                  <p className="text-sky-500 font-bold text-xs uppercase tracking-widest mt-2">Founder & Director</p>
               </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-black text-navy mb-6">Visionary Leadership</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Founded by <strong>Dr Tusiime Ramathan Hamza</strong>, Kasunganyanja Parents Primary School is driven by a deep sense of community service. Dr. Tusiime’s vision was to create an environment where children from all backgrounds could access quality P1–P7 education.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: Users, label: "200+ Students", sub: "Growing Community" },
                   { icon: Award, label: "Licensed", sub: "Govt. Recognized" },
                   { icon: BookOpen, label: "Excellence", sub: "Holistic Model" },
                   { icon: Heart, label: "Integrity", sub: "Values First" },
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-start">
                      <div className="p-2 rounded-xl bg-navy/5 text-navy">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <div className="font-bold text-navy">{item.label}</div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{item.sub}</div>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 5. CAMPUS / VALUES STRIP */}
      <Section tone="navy" className="rounded-[4rem] mx-4 my-16 py-24 text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto">
             <h2 className="text-4xl font-black mb-6">Join a Community that Cares</h2>
             <p className="text-white/60 text-lg mb-10 leading-relaxed">
               Every child at Kasunganyanja is known by name. We are more than a school; we are a family committed to the success of every individual learner.
             </p>
             <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-navy font-black rounded-2xl hover:bg-sky-50 transition-colors">Apply for Admission</button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black rounded-2xl hover:bg-white/20 transition-colors">Our Facilities</button>
             </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}