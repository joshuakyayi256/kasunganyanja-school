import PageHero from "../components/PageHero";
import ColorCard from "../components/ColorCard";
import ImageSplit from "../components/ImageSplit";
import Timeline, { type Milestone } from "../components/Timeline";
import MissionVisionStrip from "../components/MissionVisionStrip";
import Testimonials from "../components/Testimonials";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { school } from "../data/school";

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "School Founded",
    text: "Established by Dr Tusiime Ramathan Hamza with an inaugural class of 50 pupils.",
  },
  {
    year: "2018",
    title: "First PLE Cohort Prepared",
    text: "Strengthened P4–P7 with targeted literacy, numeracy and science support.",
  },
  {
    year: "2021",
    title: "Community Growth",
    text: "Enrollment reached 150 as parents embraced a values-first model.",
  },
  {
    year: "2024",
    title: "Facilities & Co-curricular",
    text: "Better classrooms and more clubs (sports, debate, music).",
  },
  {
    year: "Today",
    title: "200+ Learners",
    text: "Fully licensed, focused on transformation and success.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero
        size="xl"
        bgImage="/images/hero-kids.jpg"
        tint="light"
        title="About the School"
        subtitle={`Founded in ${school.founded} by ${school.founder}. We prepare young minds for responsible citizenship and lifelong achievement.`}
      />

      <Section className="space-y-10">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ColorCard>
              <h4 className="text-xl font-bold text-navy">Mission</h4>
              <p className="mt-2 text-black/80 text-lg">{school.mission}</p>
            </ColorCard>
            <ColorCard>
              <h4 className="text-xl font-bold text-navy">Vision</h4>
              <p className="mt-2 text-black/80 text-lg">{school.vision}</p>
            </ColorCard>
            <ColorCard>
              <h4 className="text-xl font-bold text-navy">Motto</h4>
              <p className="mt-2 text-black/80 text-lg">“{school.motto}”</p>
            </ColorCard>
          </div>
        </Reveal>

        <Reveal>
          <ImageSplit
            title="Leadership & Culture"
            text="Our leadership team sets a strong standard for integrity, accountability, and care. We cultivate a professional, nurturing culture that inspires learners and staff alike."
            img="/images/learning-1.jpg"
          />
        </Reveal>

        {/* Facilities carousel placeholder — integrate your gallery later */}
        <Reveal>
          <ColorCard>
            <h3 className="text-2xl font-bold text-navy mb-2">Facilities</h3>
            <p className="text-black/80">
              Spacious classrooms, safe play areas, and a clean environment
              conducive to learning.
            </p>
          </ColorCard>
        </Reveal>

        {/* Transparency / reports link */}
        <Reveal>
          <ColorCard>
            <h3 className="text-2xl font-bold text-navy mb-2">Transparency</h3>
            <p className="text-black/80">
              View our budgets, audit notes, and annual impact summaries in the
              Impact page.
            </p>
          </ColorCard>
        </Reveal>

        <Reveal>
          <ColorCard>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-navy">
              Our Journey
            </h3>
            <Timeline items={milestones} />
          </ColorCard>
        </Reveal>
      </Section>

      <MissionVisionStrip mission={school.mission} vision={school.vision} />
      <Testimonials />
    </div>
  );
}
