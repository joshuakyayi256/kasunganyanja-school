// src/pages/Donate.tsx
import EnhancedHero from "../components/EnhancedHero";
import MobileMoneyOnlyWidget from "../components/MobileMoneyOnlyWidget";
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
  { label: "School Infrastructure", level: "High", text: "Repairs and maintenance of facilities." },
  { label: "Learning Materials", level: "High", text: "Books, stationery, and resources." },
  { label: "Teacher Support", level: "Medium", text: "Materials and professional development." },
  { label: "Student Meals", level: "Medium", text: "Nutritious meals to support learning." },
  { label: "Scholarships", level: "Ongoing", text: "Keep vulnerable children in school." },
];

export default function Donate() {
  return (
    <div>
      <EnhancedHero
        title="Fuel a child's learning today"
        subtitle="Donate via Mobile Money (UGX) directly to +256 757 158 407. Your gift provides books, meals, and teacher resources where the need is greatest."
        eyebrow="100% transparent targets"
        ctaPrimary={{ label: "Donate via Mobile Money", href: "#donate-now" }}
        ctaSecondary={{ label: "See your impact", href: "/impact" }}
        imageSrc="/images/child-save.jpg" // <- add your image file or remove this prop
        imageAlt="Learners reading at Kasunganyanja Parents Primary School"
      />

      {/* Give Now + Transparency blocks */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ColorCard>
              <h3 className="mb-2 text-2xl font-bold">Give Now (Mobile Money UGX)</h3>
              <MobileMoneyOnlyWidget
                receiverName="Kasunganyanja Parents Primary School"
                receiverNumber="+256 757 158 407"
                suggestedTiers={tiers.map((t) => t.amt)}
              />
            </ColorCard>
          </Reveal>

          <div className="space-y-4">
            <Reveal>
              <DonationProgress targetUGX={50_000_000} currentUGX={1_500_000} />
            </Reveal>
            <Reveal delay={0.05}>
              <ColorCard id="impact">
                <h4 className="mb-3 text-lg font-semibold">Impact Calculator</h4>
                <ImpactCalculator />
              </ColorCard>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Tiers + Current Needs */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <ColorCard>
              <h4 className="mb-2 text-lg font-semibold">Suggested Tiers</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {tiers.map((t) => (
                  <div key={t.amt} className="rounded-xl border border-black/10 bg-white p-3 shadow-sm">
                    <div className="text-xl font-bold">UGX {t.amt.toLocaleString()}</div>
                    <div className="text-sm text-black/80">{t.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-black/60">
                Examples are indicative; funds are used where the need is greatest.
              </p>
            </ColorCard>
          </Reveal>

          <Reveal delay={0.05}>
            <ColorCard>
              <h4 className="mb-3 text-lg font-semibold">Current Needs</h4>
              <div className="space-y-3">
                {needs.map((n) => (
                  <div key={n.label} className="flex items-start gap-3">
                    <Badge className="shrink-0">{n.level}</Badge>
                    <div>
                      <div className="font-medium">{n.label}</div>
                      <div className="text-sm text-black/80">{n.text}</div>
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


