import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import ColorCard from "../components/ColorCard";
import ImageSplit from "../components/ImageSplit";
import CTAWide from "../components/CTAWide";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import WaveDivider from "../components/WaveDivider";
import GradientHighlight from "../components/GradientHighlight";
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
    text: "We foster discipline, respect, and character—children learn in a secure, loving environment.",
  },
  {
    icon: Sparkles,
    title: "Creative Learning",
    text: "Active literacy, numeracy, and science with hands-on activities that spark curiosity.",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    text: "Parents, teachers, and local leaders partner to support each learner’s journey.",
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
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/donate">Donate</Link>
            </Button>
            <Badge>Founded {school.founded}</Badge>
            <Badge>{school.enrollment}+ learners</Badge>
          </div>
        }
      />

      <WaveDivider color="bg-skyline" position="bottom" />

      {/* Quick stats on a subtle sky band for separation */}
      <Section tone="sky" container="section-tight">
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

      {/* Differentiators on a navy slice */}
      <Section tone="navy">
        <Reveal>
          <h2 className="text-3xl font-bold mb-5">What Makes Us Different</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <ColorCard tone="navy" className="card-hover bg-white/5">
                <div className="p-2 rounded-xl bg-white/10 inline-block mb-2">
                  <f.icon className="size-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-white">{f.title}</h3>
                <p className="mt-2 text-white/85 text-lg">{f.text}</p>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sponsor CTA inside a subtle gold frame */}
      <Section container="section-tight">
        <Reveal>
          <GradientHighlight>
            <CTAWide />
          </GradientHighlight>
        </Reveal>
      </Section>

      {/* One strong image story */}
      <Section container="section-tight">
        <Reveal>
          <ImageSplit
            title="Learning that shapes character"
            text="Academic excellence grows alongside values: responsibility, honesty, and service. Teachers model strong character and nurture children to be confident, curious, and kind."
            img="/images/campus-1.jpg"
          />
        </Reveal>
      </Section>
    </>
  );
}
