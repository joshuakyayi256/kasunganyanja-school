import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import EnrollmentApply from "../components/EnrollmentApply";
import VisitScheduler from "../components/VisitScheduler";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";

export default function Admissions() {
  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Admissions"
        subtitle="Apply online, explore fees & scholarships, and schedule a visit."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <EnrollmentApply />
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard>
              <h3 className="text-xl font-bold text-navy">
                Fees & Scholarships
              </h3>
              <p className="mt-2 text-black/80">
                We keep fees modest and offer support for vulnerable families
                through donor-funded scholarships.
              </p>
              <ul className="mt-3 list-disc pl-5 text-black/85 space-y-1">
                <li>Transparent fee structure shared upon application.</li>
                <li>Need-based assistance where possible.</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button variant="outline">Download Fee Guide (PDF)</Button>
                <Button>Request Scholarship Info</Button>
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-8" id="visit">
          <Reveal>
            <VisitScheduler />
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard>
              <h3 className="text-xl font-bold text-navy">
                Admissions Process
              </h3>
              <ol className="mt-2 list-decimal pl-5 text-black/85 space-y-1">
                <li>Submit the online application or call admissions.</li>
                <li>
                  Provide required documents (birth certificate, photo, previous
                  report).
                </li>
                <li>Short reading & numeracy check (P2–P7).</li>
                <li>Enrollment decision & welcome briefing.</li>
              </ol>
            </ColorCard>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
