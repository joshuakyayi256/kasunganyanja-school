import PageHero from "../components/PageHero";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { useState, useEffect } from "react";
import { Maximize2, Camera, X } from "lucide-react";

/**
 * Mapped your local images to moments. 
 * Note: I've excluded .CR2 files as browsers cannot display raw camera files.
 * I've also descriptive titles to help with SEO and user experience.
 */
const MOMENTS = [
  { src: "/images/smiles.jpg", title: "Bright Smiles", type: "Student Life" },
  { src: "/images/girls-linedup.jpg", title: "Morning Assembly", type: "Discipline" },
  { src: "/images/learning.jpg", title: "Focused Learning", type: "Classroom" },
  { src: "/images/mainBuilding.jpg", title: "Our Main Campus", type: "Infrastructure" },
  { src: "/images/boys-linedup.jpg", title: "Uniform & Pride", type: "Student Life" },
  { src: "/images/chalkboard.jpg", title: "Interactive Lessons", type: "Academic" },
  { src: "/images/compound.jpg", title: "School Grounds", type: "Campus" },
  { src: "/images/girlsbacktoback.jpg", title: "Friendship & Bonds", type: "Social" },
  { src: "/images/furniture.jpg", title: "Equipped for Success", type: "Facilities" },
  { src: "/images/learning (2).jpg", title: "Peer Collaboration", type: "Classroom" },
  { src: "/images/girlsinfront.jpg", title: "Student Leadership", type: "Portraits" },
  { src: "/images/field.jpg", title: "Active Play", type: "Sports" },
  { src: "/images/classrooms.jpg", title: "Primary Block", type: "Infrastructure" },
  { src: "/images/outdoors.jpg", title: "Outdoor Education", type: "Campus Life" },
  { src: "/images/child-save.jpg", title: "Safe Environment", type: "Community" },
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
      {/* HERO: Using smiles.jpg as it's the most welcoming image 
         for the top of the page.
      */}
      <PageHero
        size="lg"
        tint="navy"
        bgImage="/images/smiles.jpg"
        title="Our Story in Frames"
        subtitle="Real moments from Kasunganyanja Parents Primary School."
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
             <span className="text-4xl font-black text-navy/10 leading-none tracking-tighter">AUTHENTIC</span>
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {MOMENTS.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05} y={30}>
              <div 
                className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in border border-slate-100"
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