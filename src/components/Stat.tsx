import { useEffect, useRef, useState } from "react";

export default function Stat({ value, duration = 1000, className }: {
    value: number; duration?: number; className?: string;
}) {
    const [n, setN] = useState(0);
    const start = useRef<number | undefined>();
    useEffect(() => {
        const animate = (t: number) => {
            if (!start.current) start.current = t;
            const p = Math.min(1, (t - start.current) / duration);
            setN(Math.round(value * p));
            if (p < 1) requestAnimationFrame(animate);
        };
        const id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    }, [value, duration]);
    return <span className={className}>{n}</span>;
}
