import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Stat({
  value,
  duration = 2000,
  className,
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const step = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      
      // Easing function: Cubic Out (starts fast, ends slow)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOutCubic * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={containerRef} className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}