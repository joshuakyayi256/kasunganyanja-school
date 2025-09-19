import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Button from "../components/ui/Button";
import Reveal from "../components/Reveal";

const MOCK = [
  {
    id: "L-101",
    name: "Aisha",
    class: "P3",
    need: "Meals & Books",
    monthly: 50000,
  },
  {
    id: "L-102",
    name: "Brian",
    class: "P5",
    need: "Uniform & Fees Support",
    monthly: 90000,
  },
  { id: "L-103", name: "Hope", class: "P2", need: "Meals", monthly: 40000 },
];

export default function Sponsor() {
  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Sponsor a Child"
        subtitle="Provide steady monthly support and receive periodic updates (privacy-safe)."
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {MOCK.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <ColorCard className="card-hover">
                <div className="text-lg font-bold text-navy">
                  {s.name} — {s.class}
                </div>
                <div className="mt-1 text-black/80 text-sm">{s.need}</div>
                <div className="mt-2 font-semibold">
                  UGX {s.monthly.toLocaleString()} / month
                </div>
                <Button
                  className="mt-3"
                  onClick={() =>
                    alert(
                      "Setup recurring via Flutterwave subscriptions (server-side)."
                    )
                  }
                >
                  Sponsor
                </Button>
                <p className="mt-2 text-xs text-black/60">
                  We use aliases and protect children’s data.
                </p>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <ColorCard>
          <h3 className="text-xl font-bold text-navy">
            Safeguarding & Privacy
          </h3>
          <p className="mt-2 text-black/80">
            We publish anonymized profiles with consent. Personal details are
            protected; updates focus on school progress and wellbeing.
          </p>
        </ColorCard>
      </Section>
    </div>
  );
}
