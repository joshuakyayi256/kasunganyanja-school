import PageHero from "../components/PageHero";
import Card from "../components/ui/Card";
import ImageSplit from "../components/ImageSplit";
import Timeline, { type Milestone } from "../components/Timeline";
import MissionVisionStrip from "../components/MissionVisionStrip";
import Testimonials from "../components/Testimonials";
import Reveal from "../components/Reveal";
import { school } from "../data/school";

const milestones: Milestone[] = [
  { year: "2016", title: "School Founded", text: "Established by Dr Tusiime Ramathan Hamza with an inaugural class of 50 pupils." },
  { year: "2018", title: "First PLE Cohort Prepared", text: "Strengthened P4–P7 with targeted literacy, numeracy and science support." },
  { year: "2021", title: "Community Growth", text: "Enrollment reached 150 as parents embraced a values-first model." },
  { year: "2024", title: "Infrastructure & Co-curricular", text: "Upgraded learning spaces and broadened clubs (sports, debate, music)." },
  { year: "Today", title: "200+ Learners", text: "Fully licensed, with a clear focus on transformation and success." },
];

export default function About() {
  return (
    <div>
      <PageHero
        size="xl"
        bgImage="/images/hero-kids.jpg"
        title="Transforming Lives Through Education"
        subtitle={`Founded in ${school.founded} by ${school.founder}. We prepare young minds for responsible citizenship and lifelong achievement.`}
      />

      <section className="section space-y-10">
        <Reveal>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-navy">Our Story</h2>
            <p className="text-lg text-black/85">
              {school.name} began with a simple conviction: children in Kasunganyanja deserve access to high-quality
              education close to home. From 50 learners to over {school.enrollment}, our mission remains the same:
              nurture knowledge, skills, and values for a brighter Uganda.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            <Card><h4 className="text-xl font-bold text-navy">Mission</h4><p className="mt-2 text-black/80 text-lg">{school.mission}</p></Card>
            <Card><h4 className="text-xl font-bold text-navy">Vision</h4><p className="mt-2 text-black/80 text-lg">{school.vision}</p></Card>
            <Card><h4 className="text-xl font-bold text-navy">Motto</h4><p className="mt-2 text-black/80 text-lg">“{school.motto}”</p></Card>
          </div>
        </Reveal>

        <Reveal>
          <ImageSplit
            title="A culture of care and excellence"
            text="We maintain a safe, respectful environment where every child is known and supported. Our teachers model positive discipline and growth mindset, inspiring learners to aim high."
            img="/images/learning-1.jpg"
          />
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="text-xl font-bold text-navy">Objectives</h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {school.objectives.map(o => <li key={o}>{o}</li>)}
              </ul>
            </Card>
            <Card>
              <h4 className="text-xl font-bold text-navy">Core Values</h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {school.coreValues.map(v => <li key={v}>{v}</li>)}
              </ul>
            </Card>
          </div>
        </Reveal>

        <Reveal>
          <ImageSplit
            reverse
            title="Community engagement"
            text="Parents, local leaders, and friends of the school partner with us through open days, service projects, and ongoing dialogue. Together we raise the next generation."
            img="/images/learning-2.jpg"
          />
        </Reveal>

        <Reveal>
          <Card>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3">Our Journey</h3>
            <Timeline items={milestones} />
          </Card>
        </Reveal>
      </section>

      {/* Mission/Vision strip + Testimonials moved here */}
      <MissionVisionStrip mission={school.mission} vision={school.vision} />
      <Testimonials />
    </div>
  );
}
