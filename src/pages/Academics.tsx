import PageHero from "../components/PageHero";
import Card from "../components/ui/Card";
import Accordion from "../components/Accordion";
import ObjectivesStrip from "../components/ObjectivesStrip";
import DailySchedule from "../components/DailySchedule";
import ImageSplit from "../components/ImageSplit";
import Reveal from "../components/Reveal";
import { school } from "../data/school";

export default function Academics() {
  const { p1p3, p4p7, note } = school.academics;

  return (
    <div>
      <PageHero
        size="xl"
        bgImage="/images/hero-class.jpg"
        title="Academic Programs"
        subtitle="Balanced curriculum from P1–P7 with compulsory Physical Education and active learning."
      />

      <section className="section space-y-10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="text-xl font-bold text-navy">Primary 1 – Primary 3</h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {p1p3.map(s => <li key={s}>{s}</li>)}
              </ul>
            </Card>
            <Card>
              <h4 className="text-xl font-bold text-navy">Primary 4 – Primary 7</h4>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1 text-lg">
                {p4p7.map(s => <li key={s}>{s}</li>)}
              </ul>
            </Card>
          </div>
        </Reveal>

        <Reveal>
          <ImageSplit
            title="Learning beyond the classroom"
            text="Clubs and activities grow confidence and teamwork. Pupils engage in sports, music, debate, and creative arts—discovering talents and building friendships."
            img="/images/campus-2.jpg"
          />
        </Reveal>

        <Reveal>
          <Card>
            <h4 className="text-xl font-bold text-navy">Co-curricular</h4>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-black/85 text-lg">
              <li>• Sports & Physical Education (compulsory)</li>
              <li>• Debate & Public Speaking</li>
              <li>• Music, Dance & Drama</li>
              <li>• Reading & Literacy Circles</li>
            </ul>
            <p className="mt-3 text-black/70">{note}</p>
          </Card>
        </Reveal>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h4 className="text-xl font-bold text-navy">Support & Assessment</h4>
              <p className="mt-2 text-black/80 text-lg">
                Teachers monitor progress and provide remedial support where needed. Routine assessments and parent meetings
                help every child stay on track.
              </p>
            </Card>
            <Card>
              <h4 className="text-xl font-bold text-navy">School Day</h4>
              <p className="mt-2 text-black/80 text-lg">
                A structured timetable blends instruction, practice, play, and reflection, ensuring learners grasp core skills and build character.
              </p>
            </Card>
          </div>
        </Reveal>

        <Reveal>
          <Card>
            <h4 className="text-xl font-bold text-navy mb-2">FAQs</h4>
            <Accordion items={[
              { q:"Do learners need uniforms?", a:"Yes, uniforms encourage equality and discipline. Details are provided during admission." },
              { q:"How do parents stay involved?", a:"Through scheduled meetings, open days, and regular updates from class teachers." },
              { q:"Are there extra classes?", a:"Targeted support may be offered where helpful and communicated by the school." },
            ]} />
          </Card>
        </Reveal>
      </section>

      {/* Thematic strips now live here */}
      <ObjectivesStrip />
      <DailySchedule />
    </div>
  );
}
