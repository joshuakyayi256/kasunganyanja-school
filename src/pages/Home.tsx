import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import WaveDivider from "../components/WaveDivider";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import ObjectivesStrip from "../components/ObjectivesStrip";
import DailySchedule from "../components/DailySchedule";
import Testimonials from "../components/Testimonials";
import MissionVisionStrip from "../components/MissionVisionStrip";
import { school } from "../data/school";
import {
  Users,
  GraduationCap,
  Landmark,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Caring",
    text: "Discipline, respect, and character in a secure environment.",
  },
  {
    icon: Sparkles,
    title: "Creative Learning",
    text: "Hands-on literacy, numeracy, and science that spark curiosity.",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    text: "Parents and local leaders supporting every learner.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. HERO: Emotional Hook */}
      <PageHero
        size="xl"
        bgImage="/images/hero-home.jpg"
        tint="navy"
        title={school.name}
        subtitle={`Empowering the next generation in Kasunganyanja. A licensed P1–P7 school committed to "${school.motto}".`}
        right={
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="shadow-xl shadow-navy/20">
                <Link to="/donate">Support Our Mission</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-md border-white/30 text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex gap-4 items-center">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-navy bg-slate-300" />)}
               </div>
               <p className="text-sm text-white/90 font-bold tracking-wide uppercase">✨ {school.enrollment}+ Learners Enrolled</p>
            </div>
          </div>
        }
      />

      {/* 2. THE OVERLAP: Mission & Vision */}
      <div className="-mt-16 relative z-30">
        <MissionVisionStrip mission={school.mission} vision={school.vision} />
      </div>

      {/* 3. IMPACT & TRANSPARENCY: Building Trust */}
      <Section tone="slate" container="section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="navy" className="mb-4">Our Transparency</Badge>
          <h2 className="text-4xl font-black text-navy">Your Gift, Doubled in Impact</h2>
          <p className="text-slate-500 mt-4 text-lg">We ensure every Ugandan Shilling is utilized to provide a world-class foundational education.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3">
             <Reveal>
                <DonationProgress targetUGX={50_000_000} currentUGX={12_500_000} />
             </Reveal>
          </div>
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
               <ImpactCalculator />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 4. KEY STATS: Social Proof */}
      <Section container="section-tight">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: Users, label: "Students", value: school.enrollment },
            { icon: GraduationCap, label: "Level", value: "P1-P7" },
            { icon: Landmark, label: "Founded", value: school.founded },
            { icon: ShieldCheck, label: "Status", value: "Licensed" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1} className="text-center">
              <stat.icon className="size-8 mx-auto text-navy/30 mb-4" />
              <div className="text-4xl font-black text-navy">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. DIFFERENTIATORS: The "Why Us" Section */}
      <Section tone="navy" className="rounded-[4rem] mx-4 my-20 py-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] -mr-48 -mt-48" />
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black mb-6">Why Families Choose Us</h2>
            <p className="text-white/60 text-xl leading-relaxed">We provide more than just a syllabus; we provide a foundation for life.</p>
          </div>
          <Button asChild variant="white" size="lg">
            <Link to="/academics" className="gap-2">Explore Curriculum <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <f.icon className="size-12 text-sky-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-2xl mb-4">{f.title}</h3>
                <p className="text-white/50 leading-relaxed text-lg">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. ACADEMICS & SCHEDULE: The "Proof" */}
  {/* 6. ACADEMICS & SCHEDULE: Stacked Layout */}
<Section container="section-tight" className="space-y-20">
  
  {/* Row 1: Objectives (Focus on the 'Why') */}
  <div className="max-w-4xl mx-auto">
    <ObjectivesStrip />
  </div>

  {/* Row 2: Daily Rhythm (Focus on the 'How') */}
  <Reveal delay={0.1}>
    <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-navy text-white shadow-lg shadow-navy/20">
            <Users className="size-6" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-navy leading-none">Daily Rhythm</h3>
            <p className="text-sm text-slate-400 mt-2 uppercase tracking-widest font-bold">The School Day</p>
          </div>
        </div>
        <div className="hidden md:block">
           <Badge variant="outline" className="border-navy/20 text-navy">8:00 AM — 5:00 PM</Badge>
        </div>
      </div>

      {/* Internal Table Padding Fix */}
      <div className="bg-white rounded-3xl p-2 md:p-6 border border-navy/5 shadow-inner">
        <DailySchedule />
      </div>

      <p className="mt-8 text-center text-sm text-slate-400 italic">
        * Schedule may vary slightly for special events and community outreach days.
      </p>
    </div>
  </Reveal>
</Section>

      {/* 7. CALL TO ACTION: Recruitment */}
      <Section container="section-tight">
        <Reveal>
          <div className="bg-gradient-to-r from-navy to-[#0a2742] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden">
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-sky-400/10 blur-3xl -mb-32 -mr-32" />
             <div className="flex flex-col md:flex-row gap-12 items-center justify-between relative z-10">
                <div className="max-w-lg">
                   <h3 className="text-4xl font-black mb-6">Ready to Join Our Community?</h3>
                   <p className="text-white/60 text-lg leading-relaxed">
                      Enrollment is now open. Secure your child's spot today or book a campus tour to meet our faculty.
                   </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                   <Button asChild size="lg" variant="white" className="px-12">
                      <Link to="/admissions">Apply Now</Link>
                   </Button>
                   <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Link to="/contact">Visit Campus</Link>
                   </Button>
                </div>
             </div>
          </div>
        </Reveal>
      </Section>

      <Testimonials />

      {/* 8. FINAL EXIT CTA: Donor Focused */}
      <Section container="section" className="pb-40">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-6">Our Mission</Badge>
            <h2 className="text-5xl font-black text-navy mb-8 leading-tight">Change a Life in Kasunganyanja</h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Your support directly funds teacher salaries, school meals, and learning materials for children who need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="xl" className="px-14 rounded-full">
                <Link to="/donate">Donate Now</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="px-14 rounded-full">
                <Link to="/sponsor">Sponsor a Child</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}