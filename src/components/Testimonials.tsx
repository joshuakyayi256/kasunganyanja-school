import Card from "./ui/Card";
import Section from "./Section";
import Reveal from "./Reveal";
import { Quote } from "lucide-react";

const DATA = [
  {
    name: "Parent (Kibiito)",
    quote: "My child’s reading improved so quickly. Teachers really care about the individual progress of every learner.",
  },
  {
    name: "Former P7 Learner",
    quote: "I learned confidence and discipline here. It set me up for success in secondary school.",
  },
  {
    name: "Community Leader",
    quote: "The school is a blessing to families in Kasunganyanja who struggle with high fees elsewhere.",
  },
];

export default function Testimonials() {
  return (
    <Section tone="slate" container="section-tight">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-black text-navy tracking-tight">
          Voices of our Community
        </h3>
        <p className="text-slate-500 mt-2">The heart of Kasunganyanja through the eyes of those who know us best.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DATA.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <Card className="h-full relative p-8 bg-white rounded-[2.5rem] border-none shadow-xl shadow-navy/5 group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="size-10 text-navy/5 absolute top-6 right-6 group-hover:text-navy/10 transition-colors" />
              <p className="text-slate-600 italic leading-relaxed relative z-10">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-sky-400" />
                <div className="text-xs font-black uppercase tracking-widest text-navy">
                  {t.name}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}