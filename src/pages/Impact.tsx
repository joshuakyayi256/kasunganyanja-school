import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";

export default function Impact() {
  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Impact & Transparency"
        subtitle="See progress, explore reports, and understand where donations go."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <DonationProgress targetUGX={50000000} currentUGX={12500000} />
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard>
              <ImpactCalculator />
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <ColorCard>
              <h3 className="text-xl font-bold text-navy">KPIs (examples)</h3>
              <ul className="mt-2 list-disc pl-5 text-black/85 space-y-1">
                <li>Students Supported: 85</li>
                <li>Meals Served: 12,400</li>
                <li>Books Purchased: 1,150</li>
              </ul>
            </ColorCard>
          </Reveal>
          <Reveal delay={0.05}>
            <ColorCard>
              <h3 className="text-xl font-bold text-navy">
                Reports & Downloads
              </h3>
              <p className="mt-2 text-black/80">
                Annual summaries, budgets, and audit notes.
              </p>
              <div className="mt-3 flex gap-3">
                <Button variant="outline">Download 2024 Report (PDF)</Button>
                <Button>View All</Button>
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
