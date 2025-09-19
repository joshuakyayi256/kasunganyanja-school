import Card from "./ui/Card";

const DATA = [
  {
    name: "Parent (Kibiito)",
    quote: "My child’s reading improved so quickly. Teachers really care.",
  },
  {
    name: "Former P7 Learner",
    quote:
      "I learned confidence and discipline here. It set me up for secondary.",
  },
  {
    name: "Community Leader",
    quote: "The school is a blessing to families who struggle with fees.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
        What People Say
      </h3>
      <div className="mt-5 grid md:grid-cols-3 gap-4">
        {DATA.map((t) => (
          <Card key={t.name}>
            <p className="text-black/85">“{t.quote}”</p>
            <div className="mt-3 text-sm text-black/60">— {t.name}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
