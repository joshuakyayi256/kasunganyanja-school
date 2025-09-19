import Card from "./ui/Card";

export default function MissionVisionStrip({
  mission,
  vision,
}: {
  mission: string;
  vision: string;
}) {
  return (
    <section className="bg-skyline">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-4">
        <Card className="border-navy/10">
          <div className="h-1.5 w-12 bg-navy rounded-full mb-3" />
          <h4 className="text-xl font-bold text-navy">Mission</h4>
          <p className="mt-2 text-black/80 text-lg">{mission}</p>
        </Card>
        <Card className="border-navy/10">
          <div className="h-1.5 w-12 bg-navy rounded-full mb-3" />
          <h4 className="text-xl font-bold text-navy">Vision</h4>
          <p className="mt-2 text-black/80 text-lg">{vision}</p>
        </Card>
      </div>
    </section>
  );
}
