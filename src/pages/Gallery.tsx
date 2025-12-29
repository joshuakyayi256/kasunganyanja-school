import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { useState, useEffect } from "react";
import { Maximize2, Camera, X } from "lucide-react";

// The generated images are now mapped to specific moments
const MOMENTS = [
  { src: "https://images.unsplash.com/photo-1509062522246-37359ec3113d?q=80&w=2000", title: "Learning Together", type: "Classroom" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000", title: "Community Smiles", type: "Break Time" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000", title: "Bright Futures", type: "Student Portrait" },
  { src: "https://images.unsplash.com/photo-1540747913346-19e3adbd174f?q=80&w=2000", title: "Outdoor Play", type: "Campus Life" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000", title: "Science Discovery", type: "Academic" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000", title: "Art & Creativity", type: "After School" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Use the best smiling group image for the Hero */}
      <PageHero
        size="lg"
        tint="navy"
        bgImage="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000"
        title="Our Story in Frames"
        subtitle="Step inside Kasunganyanja Parents Primary School and see our learners in action."
      />

      <Section container="section-tight">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-navy/10 text-navy">
              <Camera className="size-6" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-navy">Captured Moments</h2>
              <p className="text-sm text-slate-500 font-medium">Daily life at Kasunganyanja</p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
             <span className="text-4xl font-black text-navy/10 leading-none">GALLERY</span>
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {MOMENTS.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05} y={30}>
              <div 
                className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
                onClick={() => setSelectedImg(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                  <p className="text-white text-xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </p>
                  <p className="text-sky-400 text-xs uppercase tracking-widest font-bold mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.type}
                  </p>
                  <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
                    <Maximize2 className="size-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-12"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors bg-white/10 p-3 rounded-full"
            onClick={() => setSelectedImg(null)}
          >
            <X className="size-6" />
          </button>
          
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-[2rem] shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500" 
            alt="Full size view"
          />
        </div>
      )}
    </div>
  );
}