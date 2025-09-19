import PageHero from "../components/PageHero";
import ColorCard from "../components/ColorCard";
import Accordion from "../components/Accordion";
import ObjectivesStrip from "../components/ObjectivesStrip";
import DailySchedule from "../components/DailySchedule";
import ImageSplit from "../components/ImageSplit";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { school } from "../data/school";

export default function Academics() {
  const { p1p3, p4p7, note } = school.academics;

  return (
    <div>
      <PageHero
        size="xl"
        bgImage="/images/hero-class.jpg"
        tint="light"
        title="Academics"
        subtitle="Strong foundation in literacy, numeracy, science — with active learning and PE."
      />

      <Section className="space-y-10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ColorCard>
              <h4 className="text-xl font-bold text-navy">
                Primary 1 – Primary 3
              </h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {p1p3.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </ColorCard>
            <ColorCard>
              <h4 className="text-xl font-bold text-navy">
                Primary 4 – Primary 7
              </h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {p4p7.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </ColorCard>
          </div>
        </Reveal>

        <Reveal>
          <ImageSplit
            title="Clubs & Sports"
            text="Pupils build confidence through sports, debate, music, and creative arts. They learn teamwork and discover their talents."
            img="/images/campus-2.jpg"
          />
        </Reveal>

        <Reveal>
          <ColorCard>
            <h4 className="text-xl font-bold text-navy">Co-curricular</h4>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-black/85 text-lg">
              <li>• Sports & Physical Education (compulsory)</li>
              <li>• Debate & Public Speaking</li>
              <li>• Music, Dance & Drama</li>
              <li>• Reading & Literacy Circles</li>
            </ul>
            <p className="mt-3 text-black/70">{note}</p>
          </ColorCard>
        </Reveal>

        <Reveal>
          <ColorCard>
            <h4 className="text-xl font-bold text-navy mb-2">FAQs</h4>
            <Accordion
              items={[
                {
                  q: "Do learners need uniforms?",
                  a: "Yes, uniforms encourage equality and discipline. Details are provided during admission.",
                },
                {
                  q: "How do parents stay involved?",
                  a: "Through scheduled meetings, open days, and regular updates from class teachers.",
                },
                {
                  q: "Are there extra classes?",
                  a: "Targeted support may be offered where helpful and communicated by the school.",
                },
              ]}
            />
          </ColorCard>
        </Reveal>
      </Section>

      <Section container="section-tight">
        <DailySchedule />
      </Section>
      <Section container="section-tight">
        <ObjectivesStrip />
      </Section>
    </div>
  );
}
