import { useState } from "react";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import DailySchedule from "../components/DailySchedule";
import Badge from "../components/ui/Badge";
import ObjectivesStrip from "../components/ObjectivesStrip";
import { cn } from "../lib/cn";
import { Book, ArrowRight, Star, Users, Award, GraduationCap } from "lucide-react";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";

type Club = { title: string; text: string; img?: string };

const P1_P3 = [
  "English Language",
  "Mathematics",
  "Swahili",
  "Literacy 1 & 2",
  "Religious Education",
  "Physical Education",
];

const P4_P7 = [
  "English Language",
  "Mathematics",
  "Swahili",
  "Integrated Science",
  "Social Studies",
  "Religious Education",
  "Physical Education",
];

/**
 * Updated CLUBS with your local school images.
 * I've selected the best matching files from your list.
 */
const CLUBS: Club[] = [
  {
    title: "Sports & Athletics",
    text: "Football, netball, and track events fostering teamwork and health.",
    img: "/images/field.jpg", // Using your sports field image
  },
  {
    title: "Debate Society",
    text: "Building confidence and critical thinking through public speaking.",
    img: "/images/girls-linedup.jpg", // Representing formal student gathering
  },
  {
    title: "Music & Drama",
    text: "Cultural expression through traditional dance and performance.",
    img: "/images/smiles1.jpg", // Representing joyful performance
  },
  {
    title: "Library Club",
    text: "Fostering a lifelong love for reading and quiet comprehension.",
    img: "/images/learning.jpg", // Showing students focused on study
  },
];

export default function Academics() {
  const [tab, setTab] = useState<"lower" | "upper">("lower");

  const subjects = tab === "lower" ? P1_P3 : P4_P7;
  const tabNote =
    tab === "lower"
      ? "Foundational literacy and numeracy with playful, structured activities."
      : "Inquiry-based learning, exam skills, and preparation for responsible citizenship.";

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Curriculum & Learning" 
        description="Explore our P1–P7 national curriculum, daily school schedule, and extracurricular clubs including sports and debate." 
        path="/academics" 
      />

      {/* HERO: Using girlsinfront.jpg for a strong academic portrait */}
      <PageHero
        size="lg"
        bgImage="/images/academics.png"
        tint="navy"
        title="Academic Excellence"
        subtitle="Fostering critical thinking, character, and community through a balanced, holistic curriculum."
      />

      {/* Objectives Strip - Overlapping the Hero for depth */}
      <div className="-mt-12 relative z-20">
        <Section container="section-tight">
          <ObjectivesStrip />
        </Section>
      </div>

      {/* Curriculum Section */}
      <Section container="section-tight">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <Reveal>
              <Badge variant="navy" className="mb-4 uppercase tracking-widest">Ugandan National Curriculum</Badge>
              <h2 className="text-4xl font-black text-navy leading-tight mb-6">
                Learning That <br/> Lasts a Lifetime
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We provide a structured learning path from foundational literacy to advanced primary inquiry.
              </p>
              
              <div className="flex flex-col gap-3">
                {[
                  { id: "lower", label: "Lower Primary", range: "P1 - P3", icon: Star },
                  { id: "upper", label: "Upper Primary", range: "P4 - P7", icon: GraduationCap }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id as "lower" | "upper")}
                    className={cn(
                      "flex items-center justify-between px-6 py-5 rounded-[1.5rem] font-bold transition-all text-left border",
                      tab === t.id 
                        ? "bg-navy text-white shadow-xl shadow-navy/20 translate-x-2 border-navy" 
                        : "bg-white text-slate-500 border-slate-100 hover:border-navy/20"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <t.icon className={cn("size-5", tab === t.id ? "text-sky-400" : "text-slate-300")} />
                      <div>
                        <div className="text-xs opacity-60 uppercase tracking-widest">{t.range}</div>
                        <div>{t.label}</div>
                      </div>
                    </div>
                    <ArrowRight className={cn("size-4 transition-transform", tab === t.id ? "translate-x-1" : "opacity-0")} />
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Subject Display */}
          <div className="lg:col-span-8">
            <Reveal key={tab} y={20}>
              <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden">
                {/* Visual anchor for the subject card */}
                <img 
                  src="/images/chalkboard.jpg" 
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 grayscale" 
                  alt="Chalkboard background"
                />
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy">
                      <Book className="size-7" />
                    </div>
                    <h3 className="text-3xl font-black text-navy tracking-tight">Core Subjects</h3>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                  {subjects.map((s) => (
                    <div key={s} className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-navy/5 group hover:border-navy/20 transition-colors">
                      <div className="size-3 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                      <span className="font-bold text-navy/80">{s}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-white/50 rounded-3xl border border-navy/10 border-dashed text-center relative z-10">
                  <p className="text-navy/70 text-lg font-medium italic leading-relaxed">
                    "{tabNote}"
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

{/* Daily Schedule - Centered & High Contrast Section */}
<Section className="bg-navy text-white py-24 rounded-[4rem] mx-4 overflow-hidden">
  {/* The 'mx-auto' on this div ensures the text block stays centered */}
  <div className="max-w-4xl mx-auto text-center mb-16 px-6">
    <Reveal>
      <h2 className="text-4xl md:text-5xl font-black mb-6">The Daily Rhythm</h2>
      {/* Changed text-black/60 to white/60 for better contrast on Navy */}
      <p className="text-white/60 text-lg mx-auto max-w-2xl">
        A balanced day of academic rigor, physical activity, and character development at Kasunganyanja Parents Primary School.
      </p>
    </Reveal>
  </div>
  
  {/* The DailySchedule component already handles its own internal centering 
      if wrapped correctly in the section */}
  <div className="max-w-5xl mx-auto px-4 md:px-8">
    <DailySchedule />
  </div>
</Section>

      {/* Clubs & Co-Curricular */}
      <Section container="section-tight">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <Reveal>
            <div className="max-w-xl">
               <h2 className="text-4xl font-black text-navy mb-4">Holistic Development</h2>
               <p className="text-slate-500 text-lg font-medium">Education at Kasunganyanja extends far beyond textbooks and exams.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-navy font-bold">
              <Users className="size-5" />
              <span>{CLUBS.length} Active Clubs</span>
            </div>
          </Reveal>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLUBS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <AnimatedCard club={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Final Call to Action */}
      <Section container="section-tight" className="pb-32">
        <Reveal>
          <div className="bg-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px] -mr-32 -mt-32" />
            <h3 className="text-3xl font-black mb-6">Ready to start their journey?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="white">
                <a href="/admissions">Apply for Enrollment</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="/contact">Inquire Now</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

function AnimatedCard({ club }: { club: Club }) {
  return (
    <div className="group rounded-[2rem] border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative overflow-hidden aspect-[4/3]">
        {club.img ? (
          <img
            src={club.img}
            alt={club.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-navy/5 flex items-center justify-center">
            <Award className="size-8 text-navy/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-2">{club.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{club.text}</p>
      </div>
    </div>
  );
}