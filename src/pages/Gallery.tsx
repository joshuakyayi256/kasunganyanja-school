import React, { useState, useRef } from "react";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { Camera, X } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// 1. COMPREHENSIVE IMAGE LIST
const ALL_IMAGES = [
  "1@ (9).jpg", "IMG_1205.JPG","IMG_1206.JPG", "IMG_1207.JPG", "boydb2b.jpg", "boys-linedup.jpg", "chalkboard.jpg", 
  "child-save.jpg", "classrooms-1.jpg", "classrooms.jpg", "compound area.jpg", "IMG_1208.JPG", 
  "field (2).jpg", "field.jpg","IMG_1071.JPG", "furniture.jpg", "girls lined1.jpg", 
  "girls-linedup.jpg", "girlsbacktoback.jpg", "girlsinfront.jpg", "hero-home.jpg", "IMG_0803.jpg", 
  "IMG_0808.jpg", "IMG_0809.jpg", "IMG_0810.jpg", "IMG_0905.jpg", "IMG_0907.jpg", 
  "IMG_0914.jpg", "IMG_1052.jpg", "IMG_1060.jpg", "IMG_1061.JPG", "IMG_1066.JPG",
  "IMG_1067.JPG", "IMG_1070.JPG", "IMG_1072.JPG", "IMG_1073.JPG", "IMG_1075.JPG", 
  "IMG_1084.JPG", "IMG_1085.JPG", "IMG_1089.JPG", "IMG_1094.JPG", "IMG_1103.JPG", 
  "IMG_1160.JPG", "IMG_1161.JPG", "IMG_1169.JPG", "IMG_1177.JPG", "IMG_1192.JPG", 
  "IMG_1195.JPG", "IMG_1222.JPG", "IMG_1395.JPG", "IMG_1420.JPG", "IMG_2253.JPG", 
  "IMG_2325.JPG", "IMG_4125.JPG", "IMG-20250909-WA0020.jpg", "IMG-20250909-WA0021.jpg", 
  "IMG-20250909-WA0024.jpg", "IMG-20250909-WA0025.jpg", "IMG-20250909-WA0026.jpg", 
  "IMG-20250909-WA0027.jpg", "IMG-20250909-WA0029.jpg", "IMG-20250909-WA0031.jpg", 
  "IMG-20250909-WA0032.jpg", "IMG-20250909-WA0034.jpg", "IMG-20250909-WA0048.jpg", 
  "IMG-20250909-WA0051.jpg", "IMG-20250909-WA0054.jpg", "IMG-20250909-WA0055.jpg", 
  "IMG-20250909-WA0056.jpg", "IMG-20250909-WA0058.jpg", "IMG-20250915-WA0091.jpg", 
  "IMG-20250915-WA0095.jpg", "learning.jpg", "main-cuilding.jpg", "mainBuilding.jpg", 
  "outdoors.jpg", "smiles.jpg", "smiles1.jpg"
];

// Generate Elegant Metadata Automatically
const MOMENTS = ALL_IMAGES.map((img) => ({
  src: `/images/${img}`,
  // Randomizes slightly between landscape and square for true masonry feel
  ratio: Math.random() > 0.6 ? 16/10 : 1 
}));

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Divide images into 3 columns for a true Masonry feel
  const columns = [[], [], []] as any[][];
  MOMENTS.forEach((item, idx) => {
    columns[idx % 3].push(item);
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-32">
      <PageHero
        size="lg"
        tint="navy"
        bgImage="/images/hero-home.jpg"
        title="Our Story in Frames"
        subtitle="Every child, every moment, every milestone captured at Kasunganyanja."
      />

      <Section container="section-tight" className="-mt-20 relative z-30">
        <div className="bg-white rounded-[3.5rem] p-6 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sky-500 font-black uppercase tracking-[0.2em] text-[10px]">
                <Camera className="size-4" /> Comprehensive Gallery
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-navy tracking-tighter">
                Captured <br /> Authentic Life
              </h2>
            </div>
            <div className="mt-8 md:mt-0 max-w-xs text-slate-400 font-medium leading-relaxed border-l-2 border-sky-100 pl-6">
              Displaying all {ALL_IMAGES.length} moments from our current school term in Kibiito.
            </div>
          </div>

          {/* MASONRY GRID SYSTEM */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-6 md:gap-8">
                {col.map((item, i) => (
                  <AnimatedImage
                    key={item.src}
                    item={item}
                    index={i}
                    onClick={() => setSelectedImg(item.src)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-navy/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors bg-white/10 p-4 rounded-full">
              <X className="size-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedImage({ item, index, onClick }: { item: any; index: number; onClick: () => void }) {
  const ref = useRef(null);
  // Adjusted margin so images load slightly earlier before entering viewport
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.8, 
        delay: (index % 5) * 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      onClick={onClick}
      // 'cursor-zoom-in' indicates clickable
      className="group relative cursor-zoom-in"
    >
      {/* Removed the text overlay div completely. 
          Kept the subtle shadow lift on hover for elegant feedback. */}
      <div 
        className="relative overflow-hidden rounded-[2.2rem] bg-slate-50 border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-navy/10 group-hover:-translate-y-1"
        style={{ aspectRatio: item.ratio }}
      >
        <img
          src={item.src}
          alt="Gallery image"
          // Kept the slow zoom effect on the image itself
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}