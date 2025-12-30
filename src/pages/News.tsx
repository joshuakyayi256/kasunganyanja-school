import PageHero from "../components/PageHero";
import Section from "../components/Section";
import ColorCard from "../components/ColorCard";
import Reveal from "../components/Reveal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Calendar, Clock, ExternalLink, Newspaper, BookOpen } from "lucide-react";
import { cn } from "../lib/cn";
import SEO from "../components/SEO";

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
  cover?: string;
};

type EventItem = {
  id: number;
  title: string;
  date: string; // ISO
  info: string;
  location?: string;
};

// ---------- External Articles ----------
const POSTS: Post[] = [
  {
    id: 101,
    title: "Uganda’s 2024 PLE results show improvement over 2023",
    date: "2025-01-23",
    excerpt: "UNEB reported better overall performance in the 2024 Primary Leaving Examinations compared to 2023.",
    source: "SoftPower / UNEB",
    url: "https://softpower.ug/over-732000-candidates-pass-ple-2024/",
    tags: ["Assessment", "PLE", "UNEB"],
    readMins: 4,
  },
  {
    id: 102,
    title: "Spotlight on primary completion & foundational learning in Uganda",
    date: "2024-04-18",
    excerpt: "UNESCO’s GEM blog highlights Uganda’s Early Grade Reading programme covering ~80% of public schools.",
    source: "UNESCO GEM Report",
    url: "https://world-education-blog.org/2024/04/18/shining-the-spotlight-on-primary-completion-and-foundational-learning-in-uganda/",
    tags: ["Foundational Learning", "Reading"],
    readMins: 5,
  }
];

// ---------- Local School Stories ----------
const LOCAL_POSTS: Post[] = [
  {
    id: 1,
    title: "Literacy Fair 2025",
    date: "2025-07-03",
    excerpt: "Parents and pupils celebrated reading with performances and book swaps.",
    source: "Kasunganyanja PPS",
    url: "/news/literacy-fair-2025",
    tags: ["School Life", "Reading"],
    readMins: 2,
    cover: "/images/girlsbacktoback.jpg" // Local image integration
  }
];

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Open Day",
    date: "2025-10-12",
    info: "Meet teachers, tour classrooms, and view learners’ projects.",
    location: "School compound",
  }
];

// ---------- Helper Functions ----------
function getFormattedDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function checkIsPast(iso: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(iso) < today;
}

export default function News() {
  const mergedPosts = [...LOCAL_POSTS, ...POSTS].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

  const featuredPost = mergedPosts[0];
  const remainingPosts = mergedPosts.slice(1);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="News & Events" 
        description="Stay updated with the latest stories from our classrooms and national education news in Uganda." 
        path="/news" 
      />

      <PageHero
        size="lg"
        bgImage="/images/chalkboard.jpg" // Local image integration
        tint="navy"
        title="Journal & Updates"
        subtitle="Stories from our classrooms and national evidence shaping the future of Ugandan education."
      />

      {/* Featured Story */}
      <Section container="section-tight" className="-mt-16 relative z-10">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[3rem] bg-white shadow-2xl border border-slate-100 flex flex-col md:flex-row items-stretch min-h-[400px]">
            <div className="md:w-1/2 relative overflow-hidden">
               <img 
                 src={featuredPost.cover || "/images/smiles.jpg"} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 alt={featuredPost.title}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
               <Badge variant="navy" className="absolute top-6 left-6 shadow-lg uppercase tracking-widest">Featured Story</Badge>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                <Calendar className="size-3 text-sky-500" />
                {getFormattedDate(featuredPost.date)}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight mb-6 tracking-tight">
                {featuredPost.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <Button asChild size="lg" className="w-fit rounded-2xl shadow-lg shadow-navy/10">
                <a href={featuredPost.url}>Read Full Story</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Grid of Articles */}
      <Section container="section-tight">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <div className="group h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-4">
                  {getFormattedDate(p.date)}
                </div>
                <h4 className="text-xl font-black text-navy leading-tight mb-4">
                  {p.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {p.excerpt}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-xs">
                   <span className="font-bold text-slate-400 uppercase tracking-tighter">{p.source}</span>
                   <a href={p.url} target="_blank" className="text-navy hover:text-sky-600 transition-colors">
                     <ExternalLink className="size-4" />
                   </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Events Section */}
      <Section container="section-tight" className="bg-white rounded-[4rem] mx-4 py-24 px-8 border border-slate-100 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-4xl font-black text-navy mb-4 tracking-tight">Upcoming Events</h3>
          <p className="text-slate-400 font-medium">Mark your calendar for important school milestones.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {EVENTS.map((e, i) => {
            const past = checkIsPast(e.date);
            return (
              <Reveal key={e.id} delay={i * 0.1}>
                <div className={cn(
                  "p-8 rounded-[2.5rem] border flex flex-col sm:flex-row gap-8 items-center transition-all duration-300",
                  past ? "bg-slate-50 border-slate-100 opacity-60" : "bg-white border-slate-100 shadow-sm hover:shadow-lg"
                )}>
                  <div className={cn(
                    "flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-[1.5rem] shadow-inner",
                    past ? "bg-slate-200 text-slate-500" : "bg-navy text-white"
                  )}>
                    <span className="text-3xl font-black">{getFormattedDate(e.date).split(' ')[1]}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-black text-navy mb-2">{e.title}</h4>
                    <p className="text-slate-500 text-sm mb-4 leading-relaxed">{e.info}</p>
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       <BookOpen className="size-3 text-sky-500" /> {e.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </div>
  );
}