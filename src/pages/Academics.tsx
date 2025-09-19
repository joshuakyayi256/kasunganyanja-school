import { useState } from "react";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import DailySchedule from "../components/DailySchedule";
import Badge from "../components/ui/Badge";
import ObjectivesStrip from "../components/ObjectivesStrip";
import { cn } from "../lib/cn"; // your clsx/tw-merge helper

type Club = { title: string; text: string; img?: string };

const P1_P3 = [
  "English Language",
  "Mathematics",
  "Swahili",
  "Literacy 1 & Literacy 2",
  "Religious Education",
  "Physical Education (compulsory)",
];

const P4_P7 = [
  "English Language",
  "Mathematics",
  "Swahili",
  "Science",
  "Social Studies",
  "Religious Education",
  "Physical Education (compulsory)",
];

const CLUBS: Club[] = [
  {
    title: "Sports",
    text: "Athletics, football, netball—teamwork, health, and discipline.",
    img: "/images/academics/sports.jpg",
  },
  {
    title: "Debate & Public Speaking",
    text: "Build confidence, clear thinking, and persuasive communication.",
    img: "/images/academics/debate.jpg",
  },
  {
    title: "Music, Dance & Drama",
    text: "Creativity, rhythm, and cultural expression through performance.",
    img: "/images/academics/mdd.jpg",
  },
  {
    title: "Reading & Library",
    text: "Love for books, comprehension, and quiet study routines.",
    img: "/images/academics/library.jpg",
  },
];

export default function Academics() {
  const [tab, setTab] = useState<"lower" | "upper">("lower");

  const subjects = tab === "lower" ? P1_P3 : P4_P7;
  const tabTitle = tab === "lower" ? "Curriculum: P1–P3" : "Curriculum: P4–P7";
  const tabBadge = tab === "lower" ? "Lower Primary" : "Upper Primary";
  const tabNote =
    tab === "lower"
      ? "Foundational literacy and numeracy with playful, structured activities."
      : "Inquiry-based learning, exam skills, and preparation for responsible citizenship.";

  return (
    <div className="space-y-10 md:space-y-16">
      <PageHero
        size="xl"
        bgImage="/images/academics.png" // ensure this exists in /public/images/hero/
        tint="light"
        title="Academics"
        subtitle="Strong literacy and numeracy, critical thinking, character, and community."
      />

      {/* Objectives snapshot (glassy navy band) */}
      <Section container="section-tight">
        <ObjectivesStrip />
      </Section>

      {/* Curriculum Tabs */}
      <Section container="section-tight">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-5">
            Curriculum Overview
          </h2>
        </Reveal>

        {/* Tab list */}
        <div className="flex items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setTab("lower")}
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-medium border transition-all",
              tab === "lower"
                ? "bg-navy text-white border-navy shadow"
                : "bg-white hover:bg-black/5 border-black/10 text-black"
            )}
          >
            P1–P3
          </button>
        <button
            type="button"
            onClick={() => setTab("upper")}
            className={cn(
              "rounded-2xl px-4 py-2 text-sm font-medium border transition-all",
              tab === "upper"
                ? "bg-navy text-white border-navy shadow"
                : "bg-white hover:bg-black/5 border-black/10 text-black"
            )}
          >
            P4–P7
          </button>
        </div>

        {/* Tab panel */}
        <Reveal>
          <ColorCard className="card-hover">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-navy">{tabTitle}</h3>
              <Badge>{tabBadge}</Badge>
            </div>

            <ul
              key={tab} // force a tiny transition when tab changes
              className="mt-3 list-disc pl-5 text-black/85 space-y-1 transition-all duration-300"
            >
              {subjects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <p className="mt-3 text-black/70 text-sm">{tabNote}</p>
          </ColorCard>
        </Reveal>
      </Section>

      {/* Daily Schedule (8–5 pm) */}
      <Section container="section-tight">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-4">
            Daily Schedule (8:00 AM — 5:00 PM)
          </h2>
        </Reveal>
        <DailySchedule />
      </Section>

      {/* Clubs & Sports — animated cards */}
      <Section container="section-tight">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-4">
            Clubs & Sports
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {CLUBS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <AnimatedCard club={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Optional photo strip (swap with real images) */}
      <Section container="section-tight">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            "/images/academics/classroom.jpg",
            "/images/academics/science.jpg",
            "/images/academics/reading.jpg",
          ].map((src) => (
            <Reveal key={src}>
              <ColorCard className="p-0 overflow-hidden">
                <img
                  src={src}
                  alt="Learning at Kasunganyanja"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

/** Animated clubs card: subtle 3D tilt + image lift on hover (no extra libs) */
function AnimatedCard({ club }: { club: Club }) {
  return (
    <div
      className={cn(
        "group rounded-2xl border border-black/10 bg-white overflow-hidden",
        "shadow-sm hover:shadow-lg transition-shadow duration-300",
        // 3D-ish tilt
        "will-change-transform transform-gpu",
        "hover:-translate-y-0.5 hover:[transform:rotateX(0.5deg)_rotateY(-0.5deg)]"
      )}
    >
      <div className="relative overflow-hidden">
        {club.img ? (
          <img
            src={club.img}
            alt={club.title}
            loading="lazy"
            className={cn(
              "w-full aspect-[4/3] object-cover transition-transform duration-500",
              "group-hover:scale-[1.03] group-hover:-translate-y-0.5"
            )}
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-navy/10" />
        )}
        {/* subtle top gradient for readability if you overlay text later */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/0" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{club.title}</h3>
        <p className="mt-1 text-black/80">{club.text}</p>
      </div>
    </div>
  );
}
