// src/pages/About.tsx
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import type { Milestone } from "../components/Timeline";
import MissionVisionStrip from "../components/MissionVisionStrip";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import { school } from "../data/school";


const safeArray = <T,>(v: T[] | undefined | null): T[] =>
  Array.isArray(v) ? v : [];

const FALLBACK_MILESTONES: Milestone[] = [
  {
    year: "2016",
    title: "School Founded",
    text:
      "Established by Dr Tusiime Ramathan Hamza with an inaugural class of 50 pupils.",
  },
  {
    year: "2018",
    title: "First PLE Cohort Prepared",
    text:
      "Strengthened P4–P7 with targeted literacy, numeracy and science support.",
  },
  {
    year: "2021",
    title: "Community Growth",
    text:
      "Enrollment reached 150 as parents embraced a values-first model.",
  },
  {
    year: "2024",
    title: "Infrastructure & Co-curricular",
    text:
      "Upgraded learning spaces and broadened clubs (sports, debate, music).",
  },
  {
    year: "Today",
    title: "200+ Learners",
    text:
      "Fully licensed, focused on transformation and success.",
  },
];

export default function About() {
  // Use a direct public path for hero image (no images.ts dependency)
  const aboutHero = "/images/girlsinfront.jpg"; // ensure this exists in /public/images/hero/

  // Prefer milestones from data if present; else fallback
  const milestones = safeArray<Milestone>((school as any)?.milestones);
  const timelineItems = milestones.length ? milestones : FALLBACK_MILESTONES;

  return (
    <div className="space-y-10 md:space-y-16">
      <PageHero
        size="xl"
        bgImage={aboutHero}
        title="About the School"
        subtitle="Our story, values, leadership and facilities."
      />

      {/* Animated, rounded timeline */}
      <Section container="section-tight">
        <Timeline title="Our Journey" items={timelineItems} />
      </Section>

      {/* Mission / Vision */}
      <Section container="section-tight">
        <MissionVisionStrip mission={school.mission} vision={school.vision} />
      </Section>

      {/* Leadership (simple, safe) */}
      <Section container="section-tight">
        <Reveal>
          <ColorCard>
            <h3 className="text-2xl font-bold text-navy">Leadership</h3>
            <p className="mt-2 text-black/80">
              Kasunganyanja Parents Primary School was founded by{" "}
              <strong>Dr Tusiime Ramathan Hamza</strong> and is supported by a dedicated
              team of administrators and teachers committed to excellence, integrity, and
              community service.
            </p>
          </ColorCard>
        </Reveal>
      </Section>
    </div>
  );
}
