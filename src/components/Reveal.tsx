import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string; // Added to fix the TS error
}

export default function Reveal({
  children,
  delay = 0,
  y = 20, // Increased slightly for a more "elegant" entrance
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Better trigger point for UX
      transition={{ 
        duration: 0.7, // Slightly slower = more premium feel
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for "snappy" but smooth motion
      }}
      className={cn(className)} 
    >
      {children}
    </motion.div>
  );
}