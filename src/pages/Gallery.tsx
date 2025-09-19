import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

const IMGS = [
  "/images/campus-1.jpg",
  "/images/campus-2.jpg",
  "/images/learning-1.jpg",
  "/images/learning-2.jpg",
];

export default function Gallery() {
  return (
    <div>
      <PageHero
        size="lg"
        tint="light"
        title="Gallery"
        subtitle="Highlights from school life."
      />
      <Section>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {IMGS.map((src, i) => (
            <Reveal key={src} delay={i * 0.04}>
              <img
                src={src}
                alt=""
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-black/10"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
