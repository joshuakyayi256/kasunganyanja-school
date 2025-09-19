import PageHero from "../components/PageHero";
import DonationWidget from "../components/DonationWidget";
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import ImageSplit from "../components/ImageSplit";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";


const tiers = [
  { amt: 10000, label: "Exercise books & pencils" },
  { amt: 30000, label: "Uniform support for one learner" },
  { amt: 50000, label: "Lunch for a week (pupil)" },
  { amt: 100000, label: "Teacher materials & training" },
];

const needs = [
  { label: "School Infrastructure", level: "High", text: "Classroom repairs and maintenance of campus facilities." },
  { label: "Learning Materials", level: "High", text: "Books, stationery, and educational resources for our learners." },
  { label: "Teacher Support", level: "Medium", text: "Supporting dedicated staff with materials and training." },
  { label: "Student Meals", level: "Medium", text: "Nutritious meals that support learning and development." },
  { label: "Scholarships", level: "Ongoing", text: "Help children from vulnerable families stay in school." },
];

export default function Donate() {
  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Support the School"
        subtitle="Your generosity helps children whose parents struggle to afford education. Every gift—small or large—makes learning possible."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <ColorCard>
              <h3 className="text-2xl font-bold mb-2">Donate Securely</h3>
              <DonationWidget />
            </ColorCard>
          </Reveal>

          <div className="space-y-4">
            <Reveal><DonationProgress targetUGX={50000000} currentUGX={12500000} /></Reveal>
            <Reveal delay={0.05}><ColorCard><ImpactCalculator /></ColorCard></Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <ColorCard>
              <h4 className="text-lg font-semibold mb-2">Suggested Tiers</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {tiers.map(t => (
                  <div key={t.amt} className="rounded-xl border border-black/10 bg-white p-3">
                    <div className="text-xl font-bold">UGX {t.amt.toLocaleString()}</div>
                    <div className="text-sm text-black/80">{t.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-black/60">Examples are indicative; funds are used where the need is greatest.</p>
            </ColorCard>
          </Reveal>

          <Reveal delay={0.05}>
            <ColorCard>
              <h4 className="text-lg font-semibold mb-3">Our Current Needs</h4>
              <div className="space-y-3">
                {needs.map(n => (
                  <div key={n.label} className="flex items-start gap-3">
                    <Badge className="shrink-0">{n.level}</Badge>
                    <div>
                      <div className="font-medium">{n.label}</div>
                      <div className="text-black/80 text-sm">{n.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      <Section container="section-tight">
        <Reveal>
          <ImageSplit
            reverse
            title="Where your giving goes"
            text="Your support maintains safe classrooms, equips teachers, provides meals, and keeps vulnerable children learning. Thank you for partnering with us."
            img="/images/campus-1.jpg"
          />
        </Reveal>
      </Section>
    </div>
  );
}
