export type Milestone = {
    year: string;
    title: string;
    text: string;
};

export default function Timeline({ items }: { items: Milestone[] }) {
    return (
        <ol className="relative border-s border-black/10 pl-6 space-y-6">
            {items.map((m) => (
                <li key={m.year} className="space-y-1">
                    <span className="absolute -left-2 mt-1 size-3 rounded-full bg-accent ring-4 ring-white" />
                    <div className="text-sm text-black/60">{m.year}</div>
                    <div className="text-lg font-semibold">{m.title}</div>
                    <p className="text-black/80">{m.text}</p>
                </li>
            ))}
        </ol>
    );
}
