// src/pages/News.tsx
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";

// ---------- Types ----------
type Post = {
  id: number;
  title: string;
  date: string; // ISO
  excerpt: string;
  source: string;
  url: string;
  tags?: string[];
  readMins?: number;
  cover?: string; // optional image path/url
};

type EventItem = {
  id: number;
  title: string;
  date: string; // ISO
  info: string;
  location?: string;
};

// ---------- Legit articles (external) ----------
const POSTS: Post[] = [
  {
    id: 101,
    title: "Uganda’s 2024 PLE results show improvement over 2023",
    date: "2025-01-23",
    excerpt:
      "UNEB reported better overall performance in the 2024 Primary Leaving Examinations compared to 2023, with over 732,000 candidates passing.",
    source: "SoftPower / UNEB",
    url: "https://softpower.ug/over-732000-candidates-pass-ple-2024/",
    tags: ["Assessment", "PLE", "UNEB"],
    readMins: 4,
  },
  {
    id: 102,
    title: "Spotlight on primary completion & foundational learning in Uganda",
    date: "2024-04-18",
    excerpt:
      "UNESCO’s GEM blog highlights Uganda’s Early Grade Reading programme—now covering ~80% of public primary schools and 6M pupils—showing improved learning in P3.",
    source: "UNESCO GEM Report",
    url: "https://world-education-blog.org/2024/04/18/shining-the-spotlight-on-primary-completion-and-foundational-learning-in-uganda/",
    tags: ["Foundational Learning", "Reading"],
    readMins: 5,
  },
  {
    id: 103,
    title: "School meals boost attendance in Karamoja",
    date: "2024-10-22",
    excerpt:
      "UNICEF reports that provision of meals in schools significantly improved attendance in Karamoja, underscoring the impact of nutrition on learning.",
    source: "UNICEF Uganda",
    url: "https://www.unicef.org/uganda/stories/provision-meals-school-proves-significant-change-school-attendance-karamoja",
    tags: ["School Meals", "Attendance", "Nutrition"],
    readMins: 4,
  },
  {
    id: 104,
    title: "Uganda Learning Poverty brief",
    date: "2024-06-14",
    excerpt:
      "World Bank’s learning poverty brief explains the share of children unable to read with comprehension by age 10, and why eliminating learning poverty matters.",
    source: "World Bank",
    url: "https://documents1.worldbank.org/curated/en/099062624143010228/pdf/P179209113a9980f61a01110448657471c9.pdf",
    tags: ["Learning Poverty", "Policy"],
    readMins: 6,
  },
  {
    id: 105,
    title: "Education & enrollment indicators for Uganda",
    date: "2024-02-01",
    excerpt:
      "UIS/World Bank indicators for primary enrollment and completion offer context on access and progression.",
    source: "World Bank Data / UIS",
    url: "https://data.worldbank.org/indicator/SE.PRM.ENRR?locations=UG",
    tags: ["Data", "Indicators"],
    readMins: 3,
  },
];

// ---------- Local school stories (keep yours + add detail) ----------
const LOCAL_POSTS: Post[] = [
  {
    id: 1,
    title: "Literacy Fair 2025",
    date: "2025-07-03",
    excerpt:
      "Parents and pupils celebrated reading with performances and book swaps. P2–P4 learners showcased Luganda and English read-alouds; 320 books exchanged.",
    source: "Kasunganyanja PPS",
    url: "/news/literacy-fair-2025", // replace if you create a detail page
    tags: ["School Life", "Reading"],
    readMins: 2,
  },
  {
    id: 2,
    title: "New Classroom Block",
    date: "2025-04-22",
    excerpt:
      "Repairs completed on two classrooms with community support: new roofing sheets, desks, and chalkboards installed before Term 2.",
    source: "Kasunganyanja PPS",
    url: "/news/new-classroom-block-2025", // replace if you create a detail page
    tags: ["Infrastructure"],
    readMins: 2,
  },
];

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Open Day",
    date: "2025-10-12",
    info: "Meet teachers, tour classrooms, and view learners’ projects.",
    location: "School compound",
  },
  {
    id: 2,
    title: "Sports Day",
    date: "2025-11-08",
    info: "Inter-house athletics and games; parents welcome.",
    location: "School field",
  },
];

// ---------- Helpers ----------
function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function isPast(iso: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(iso) < today;
}

// ---------- Page ----------
export default function News() {
  const mergedPosts = [...LOCAL_POSTS, ...POSTS].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  return (
    <div>
      <PageHero
        size="lg"
        tint="light"
        title="News & Events"
        subtitle="Evidence and stories that shape learning — from our classrooms to national data."
      />

      {/* Articles */}
      <Section>
        <div className="mb-3 flex items-baseline justify-between">
          <h3 className="text-2xl font-bold text-navy">Articles</h3>
          <span className="text-xs text-black/60">
            Curated from our school & reputable sources
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {mergedPosts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ColorCard className="card-hover relative overflow-hidden">
                {/* subtle blob */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-black/5 blur-2xl"
                  aria-hidden
                />
                <div className="text-xs text-black/60">{formatDate(p.date)}</div>
                <div className="mt-1 text-lg font-bold text-navy">{p.title}</div>
                <p className="mt-1 text-black/80">{p.excerpt}</p>

                {/* meta */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-xs">
                    {p.source}
                  </span>
                  {p.tags?.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[11px] text-black/70"
                    >
                      #{t}
                    </span>
                  ))}
                  {p.readMins ? (
                    <span className="ml-auto text-xs text-black/50">
                      {p.readMins} min read
                    </span>
                  ) : null}
                </div>

                <div className="mt-3">
                  <Button asChild variant="ghost">
                    <a href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      Read {p.url.startsWith("http") ? "article" : "story"}
                    </a>
                  </Button>
                </div>
              </ColorCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Events */}
      <Section>
        <h3 className="mb-3 text-2xl font-bold text-navy">Events</h3>

        <div className="grid gap-4 md:grid-cols-2">
          {EVENTS.map((e, i) => {
            const past = isPast(e.date);
            return (
              <Reveal key={e.id} delay={i * 0.05}>
                <ColorCard className="card-hover">
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-black/60">{formatDate(e.date)}</div>
                    <span
                      className={`rounded-full border px-2 py-0.5 ${
                        past
                          ? "border-black/10 bg-white text-black/60"
                          : "border-black/10 bg-black text-white"
                      } text-[11px]`}
                    >
                      {past ? "Past" : "Upcoming"}
                    </span>
                  </div>
                  <div className="mt-1 text-lg font-bold text-navy">{e.title}</div>
                  <p className="mt-1 text-black/80">{e.info}</p>
                  {e.location ? (
                    <div className="mt-2 text-xs text-black/60">Location: {e.location}</div>
                  ) : null}

                  <div className="mt-3 flex gap-3">
                    {!past ? (
                      <>
                        <Button variant="outline">RSVP</Button>
                        <Button asChild>
                          {/* Simple Google Calendar template (adjust text/times as needed) */}
                          <a
                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                              e.title
                            )}&dates=${e.date.replace(/-/g, "")}T080000Z/${e.date.replace(
                              /-/g,
                              ""
                            )}T100000Z&details=${encodeURIComponent(e.info)}&location=${encodeURIComponent(
                              e.location ?? ""
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Add to Calendar
                          </a>
                        </Button>
                      </>
                    ) : (
                      <Button variant="ghost">View Photos</Button>
                    )}
                  </div>
                </ColorCard>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
