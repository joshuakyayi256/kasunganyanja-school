import { cn } from "../../lib/cn";
export default function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <span className={cn("inline-flex items-center rounded-full border border-black/10 bg-black/[.04] px-2.5 py-1 text-xs text-black", className)}>
            {children}
        </span>
    );
}
