import { useState } from "react";
import PageHero from "../components/PageHero";

export default function Gallery() {
    const imgs = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/kasu-${i}/900/600`);
    const [open, setOpen] = useState<string | null>(null);

    return (
        <div>
            <PageHero size="lg" title="Gallery" subtitle="Moments from our school community." />

            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
                    {imgs.map(src => (
                        <img key={src} src={src} alt="" loading="lazy"
                            onClick={() => setOpen(src)}
                            className="mb-4 w-full rounded-xl border border-black/10 cursor-zoom-in hover:brightness-105 transition" />
                    ))}
                </div>

                {open && (
                    <dialog open className="fixed inset-0 bg-black/70 grid place-items-center p-4">
                        <img src={open} alt="" className="max-h-[80vh] rounded-xl border border-black/10 bg-white" />
                        <button onClick={() => setOpen(null)} className="mt-4 underline text-white">Close</button>
                    </dialog>
                )}
            </div>
        </div>
    );
}
