// src/components/Timeline.tsx

/** Milestone type */
export type Milestone = {
  year: string;
  title: string;
  text?: string;
};

export default function Timeline({
  title = "Our Journey",
  items,
}: {
  title?: string;
  items: Milestone[];
}) {
  return (
    <section className="px-4">
      <div
        className={[
          "max-w-6xl mx-auto",
          // rounded navy card
          "rounded-3xl border border-black/10 bg-[#0f2e4a] text-white",
          "shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
          "px-6 md:px-10 py-8 md:py-10",
        ].join(" ")}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
          {title}
        </h2>

        {/* vertical line */}
        <ol className="relative ml-2 before:content-[''] before:absolute before:left-[7px] before:top-1 before:bottom-1 before:w-[2px] before:bg-gradient-to-b before:from-white/30 before:to-white/10">
          {items?.map((m, i) => (
            <li
              key={`${m.year}-${m.title}-${i}`}
              className="relative pl-8 pb-6 last:pb-0 group"
            >
              {/* dot + soft ping */}
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#F5B301] ring-4 ring-white/10" />
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[#F5B301] animate-ping opacity-40" />

              {/* content */}
              <div className="text-sm opacity-80">{m.year}</div>
              <div
                className={[
                  "mt-0.5 font-semibold text-white",
                  "transition-transform duration-500 ease-out",
                  "group-hover:translate-x-0.5",
                ].join(" ")}
              >
                {m.title}
              </div>
              {m.text && (
                <p
                  className={[
                    "mt-1 text-white/85",
                    "transition-opacity duration-500 ease-out",
                    "group-hover:opacity-100",
                  ].join(" ")}
                >
                  {m.text}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
