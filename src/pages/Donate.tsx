// src/pages/Donate.tsx
import PageHero from "../components/PageHero";
import DonationWidget from "../components/DonationWidget"; // Flutterwave inline checkout
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";

// --- Data (top-level, outside the component) ---
const tiers = [
  { amt: 10000, label: "Exercise books & pencils" },
  { amt: 30000, label: "Uniform support for one learner" },
  { amt: 50000, label: "Lunch for a week (pupil)" },
  { amt: 100000, label: "Teacher materials & training" },
];

const needs = [
  {
    label: "School Infrastructure",
    level: "High",
    text: "Repairs and maintenance of facilities.",
  },
  {
    label: "Learning Materials",
    level: "High",
    text: "Books, stationery, and resources.",
  },
  {
    label: "Teacher Support",
    level: "Medium",
    text: "Materials and professional development.",
  },
  {
    label: "Student Meals",
    level: "Medium",
    text: "Nutritious meals to support learning.",
  },
  {
    label: "Scholarships",
    level: "Ongoing",
    text: "Keep vulnerable children in school.",
  },
];

export default function Donate() {
  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Donate"
        subtitle="Give now, sponsor a child, or set up monthly support. Payments via Mobile Money Uganda & Cards (Flutterwave)."
      />

      {/* Give Now + Transparency blocks */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <ColorCard>
              <h3 className="text-2xl font-bold mb-2">Give Now</h3>
              <DonationWidget />
            </ColorCard>
          </Reveal>

          <div className="space-y-4">
            <Reveal>
              <DonationProgress
                targetUGX={50_000_000}
                currentUGX={12_500_000}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <ColorCard>
                <ImpactCalculator />
              </ColorCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Tiers + Current Needs */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <ColorCard>
              <h4 className="text-lg font-semibold mb-2">Suggested Tiers</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {tiers.map((t) => (
                  <div
                    key={t.amt}
                    className="rounded-xl border border-black/10 bg-white p-3"
                  >
                    <div className="text-xl font-bold">
                      UGX {t.amt.toLocaleString()}
                    </div>
                    <div className="text-sm text-black/80">{t.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-black/60">
                Examples are indicative; funds are used where the need is
                greatest.
              </p>
            </ColorCard>
          </Reveal>

          <Reveal delay={0.05}>
            <ColorCard>
              <h4 className="text-lg font-semibold mb-3">Current Needs</h4>
              <div className="space-y-3">
                {needs.map((n) => (
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
    </div>
  );
}
