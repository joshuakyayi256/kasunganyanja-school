// src/pages/Home.tsx
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import WaveDivider from "../components/WaveDivider";
import GradientHighlight from "../components/GradientHighlight";
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
    text: "Hands-on literacy, numeracy, science that spark curiosity.",
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
      <PageHero
        size="xl"
        bgImage="/images/hero-main.jpg"
        tint="navy"
        title={school.name}
        subtitle={`A licensed mixed day school (P1–P7) committed to “${school.motto}”.`}
        right={
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/sponsor">Sponsor a Child</Link>
            </Button>
            <Badge>Founded {school.founded}</Badge>
            <Badge>{school.enrollment}+ learners</Badge>
          </div>
        }
      />

      <WaveDivider color="bg-skyline" position="bottom" />

      {/* Progress + Calculator upfront for transparency */}
      <Section container="section-tight">
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <DonationProgress targetUGX={50_000_000} currentUGX={12_500_000} />
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard className="card-hover">
              <ImpactCalculator />
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      {/* Stats */}
      <Section container="section-tight">
        <div className="grid sm:grid-cols-3 gap-4">
          <Reveal>
            <ColorCard className="card-hover">
              <div className="flex items-center gap-3">
                <Users className="size-5 text-navy" />
                <div>
                  <div className="text-3xl font-extrabold">
                    {school.enrollment}+
                  </div>
                  <div className="text-sm text-black/70">Students</div>
                </div>
              </div>
            </ColorCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard className="card-hover">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-5 text-navy" />
                <div>
                  <div className="text-3xl font-extrabold">P1–P7</div>
                  <div className="text-sm text-black/70">Full Primary</div>
                </div>
              </div>
            </ColorCard>
          </Reveal>
          <Reveal delay={0.1}>
            <ColorCard className="card-hover">
              <div className="flex items-center gap-3">
                <Landmark className="size-5 text-navy" />
                <div>
                  <div className="text-3xl font-extrabold">
                    {school.founded}
                  </div>
                  <div className="text-sm text-black/70">Founded</div>
                </div>
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      {/* Differentiators */}
      <Section container="section-tight">
        <Reveal>
          <h2 className="text-3xl font-bold text-navy mb-5">
            What Makes Us Different
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <ColorCard className="card-hover">
                <div className="p-2 rounded-xl bg-navy/10 inline-block mb-2">
                  <f.icon className="size-5 text-navy" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-black/80 text-lg">{f.text}</p>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mission & Vision strip */}
      <MissionVisionStrip mission={school.mission} vision={school.vision} />

      {/* Academics snapshot */}
      <Section container="section-tight">
        <ObjectivesStrip />
      </Section>

      {/* Admissions teaser */}
      <Section container="section-tight">
        <Reveal>
          <GradientHighlight>
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
                  Admissions
                </h3>
                <p className="mt-2 text-black/80">
                  Apply online in minutes or book a campus visit. Financial
                  assistance is available.
                </p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button asChild size="lg">
                  <Link to="/admissions">Apply Online</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/admissions#visit">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </GradientHighlight>
        </Reveal>
      </Section>

      {/* Daily schedule */}
      <Section container="section-tight">
        <DailySchedule />
      </Section>

      {/* Testimonials */}
      <Testimonials />

      {/* === Replaced “Location” note with a strong site-wide CTA === */}
      <Section container="section-tight">
        <Reveal>
          <GradientHighlight>
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
                  Join Our Mission
                </h3>
                <p className="mt-2 text-black/80">
                  Help us deliver quality primary education in
                  Kasunganyanja—every gift and every sponsor changes a life.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button asChild size="lg">
                  <Link to="/donate">Donate</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/sponsor">Sponsor a Child</Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link to="/impact">See Impact</Link>
                </Button>
              </div>
            </div>
          </GradientHighlight>
        </Reveal>
      </Section>
    </>
  );
}
