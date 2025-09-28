// src/pages/Impact.tsx
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import DonationProgress from "../components/DonationProgress";
import ImpactCalculator from "../components/ImpactCalculator";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";
// Optional icons (comment out if you don't use lucide-react)
import { BookOpen, Utensils, Users, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export default function Impact() {
  // Example live-ish stats (swap with real values or props)
  const stats = [
    { label: "Students Supported", value: "85", icon: Users },
    { label: "Meals Served", value: "12,400", icon: Utensils },
    { label: "Books Purchased", value: "1,150", icon: BookOpen },
  ];

  // Transparency breakdown (must sum to <= 100)
  const transparency = [
    { label: "Learning Materials", pct: 42 },
    { label: "Meals & Welfare", pct: 33 },
    { label: "Teacher Support", pct: 15 },
    { label: "Operations", pct: 10 },
  ];

  const milestones = [
    { when: "Term 1", title: "Uniform & Books Drive", text: "Distributed starter kits to new pupils in P1–P3." },
    { when: "Term 2", title: "Meal Program Scale-up", text: "Expanded lunch coverage to 4 additional classes." },
    { when: "Term 3", title: "Teacher Training", text: "Workshop on literacy-focused instruction and feedback." },
  ];

  return (
    <div>
      <PageHero
        size="xl"
        tint="light"
        title="Impact & Transparency"
        subtitle="Track progress in real time, see how funds are used, and download reports."
      />

      {/* Top: progress + calculator */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ColorCard>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Fundraising Progress</h3>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs">
                  <ShieldCheck className="h-4 w-4" />
                  Verified updates
                </div>
              </div>
              <div className="mt-4">
                <DonationProgress targetUGX={50_000_000} currentUGX={1_500_000} />
              </div>
            </ColorCard>
          </Reveal>

          <Reveal delay={0.05}>
            <ColorCard>
              <h3 className="text-xl font-bold">Impact Calculator</h3>
              <p className="mt-1 text-sm text-black/70">
                Estimate what your Mobile Money gift can do—books, meals, and teacher resources.
              </p>
              <div className="mt-4">
                <ImpactCalculator />
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      {/* Stats grid */}
      <Section>
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(({ label, value, icon: Icon }) => (
              <ColorCard key={label} className="relative overflow-hidden">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-black/5 blur-2xl" aria-hidden />
                <div className="flex items-center gap-3">
                  {Icon ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  ) : null}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-black/60">{label}</div>
                    <div className="text-2xl font-bold leading-tight">{value}</div>
                  </div>
                </div>
              </ColorCard>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Transparency + KPIs */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <ColorCard>
              <h3 className="text-xl font-bold">Where Your Donations Go</h3>
              <p className="mt-1 text-sm text-black/70">
                We prioritize direct learner support first, then essential operations.
              </p>

              {/* Bars */}
              <div className="mt-4 space-y-4">
                {transparency.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-black/60">{item.pct}%</span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-black/10">
                      <div
                        className="h-2.5 rounded-full bg-black transition-[width] duration-700"
                        style={{ width: `${Math.min(100, Math.max(0, item.pct))}%` }}
                        aria-label={`${item.label} ${item.pct}%`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-black/60">
                Figures are indicative and updated termly; funds are used where the need is greatest.
              </p>
            </ColorCard>
          </Reveal>

          <Reveal delay={0.05}>
            <ColorCard>
              <h3 className="text-xl font-bold">KPIs (this year)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-black/85">
                <li>Students Supported: 85 (+12% vs last year)</li>
                <li>Meals Served: 12,400 (+18%)</li>
                <li>Books Purchased: 1,150 (+9%)</li>
              </ul>
            </ColorCard>
          </Reveal>
        </div>
      </Section>

      {/* Milestones timeline */}
      <Section>
        <Reveal>
          <ColorCard>
            <h3 className="text-xl font-bold">Milestones</h3>
            <ol className="mt-4 space-y-5">
              {milestones.map((m, i) => (
                <li key={i} className="relative pl-6">
                  <span
                    className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-black/20 bg-white"
                    aria-hidden
                  />
                  <div className="text-xs uppercase tracking-wide text-black/60">{m.when}</div>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-black/80">{m.text}</div>
                </li>
              ))}
            </ol>
          </ColorCard>
        </Reveal>
      </Section>

      {/* Reports & downloads */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <ColorCard>
              <h3 className="text-xl font-bold">Reports & Downloads</h3>
              <p className="mt-1 text-sm text-black/70">
                Annual summaries, budgets, and audit notes—available to everyone.
              </p>
              <div className="mt-4 space-y-3">
                {/* Replace hrefs with real links */}
                <DownloadRow label="2024 Annual Report (PDF)" href="#" />
                <DownloadRow label="Budget Allocation (XLSX)" href="#" />
                <DownloadRow label="Meals Program Summary (PDF)" href="#" />
              </div>
              <div className="mt-4 flex gap-3">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" /> Download 2024 Report
                </Button>
                <Button>
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ColorCard>
          </Reveal>

          {/* CTA back to Donate */}
          <Reveal delay={0.05}>
            <ColorCard className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">Make an Immediate Difference</h3>
                <p className="mt-2 text-black/80">
                  Donate via Mobile Money (UGX) to <span className="font-semibold">+256 757 158 407</span>. Your support
                  fuels books, meals, and classroom essentials.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="/donate#donate-now"
                  className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
                >
                  Donate Now
                </a>
              </div>
            </ColorCard>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

/* ---------- small internal component ---------- */

function DownloadRow({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-2 text-sm hover:bg-black/5"
    >
      <span className="font-medium">{label}</span>
      <span className="text-xs text-black/50 group-hover:underline">Open</span>
    </a>
  );
}
