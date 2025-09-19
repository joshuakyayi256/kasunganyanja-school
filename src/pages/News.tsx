import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";

const POSTS = [
  {
    id: 1,
    title: "Literacy Fair 2025",
    date: "2025-07-03",
    excerpt:
      "Parents and pupils celebrated reading with performances and book exchanges.",
  },
  {
    id: 2,
    title: "New Classroom Block",
    date: "2025-04-22",
    excerpt:
      "Repairs completed on two classrooms, thanks to community support.",
  },
];

const EVENTS = [
  {
    id: 1,
    title: "Open Day",
    date: "2025-10-12",
    info: "Meet teachers and tour the school.",
  },
  {
    id: 2,
    title: "Sports Day",
    date: "2025-11-08",
    info: "Inter-house athletics and games.",
  },
];

export default function News() {
  return (
    <div>
      <PageHero
        size="lg"
        tint="light"
        title="News & Events"
        subtitle="Updates from the school and opportunities to connect."
      />

      <Section>
        <h3 className="text-2xl font-bold text-navy mb-3">Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {POSTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ColorCard className="card-hover">
                <div className="text-sm text-black/60">
                  {new Date(p.date).toDateString()}
                </div>
                <div className="text-lg font-bold text-navy">{p.title}</div>
                <p className="mt-1 text-black/80">{p.excerpt}</p>
                <Button variant="ghost" className="mt-2">
                  Read
                </Button>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <h3 className="text-2xl font-bold text-navy mb-3">Events</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <ColorCard className="card-hover">
                <div className="text-sm text-black/60">
                  {new Date(e.date).toDateString()}
                </div>
                <div className="text-lg font-bold text-navy">{e.title}</div>
                <p className="mt-1 text-black/80">{e.info}</p>
                <Button variant="outline" className="mt-2">
                  RSVP
                </Button>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
