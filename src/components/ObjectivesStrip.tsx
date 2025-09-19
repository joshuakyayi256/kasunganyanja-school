export default function ObjectivesStrip() {
  const items = [
    {
      title: "Academic Excellence",
      text: "Strong literacy, numeracy, science, and inquiry-based learning.",
    },
    {
      title: "Character Development",
      text: "Discipline, respect, integrity, and responsibility.",
    },
    {
      title: "Critical Thinking",
      text: "Solve problems, ask good questions, collaborate with others.",
    },
  ];
  return (
    <section className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl md:text-3xl font-extrabold">
          Our Education Objectives
        </h3>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-5"
            >
              <div className="text-lg font-semibold">{i.title}</div>
              <p className="mt-2 text-white/85">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
