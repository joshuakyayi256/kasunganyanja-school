import { cn } from "../../lib/cn";

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "outline" | "navy" | "gold";
};

export default function Badge({ className, children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-600 border-transparent",
    outline: "bg-transparent border-slate-200 text-slate-500",
    navy: "bg-navy text-white border-transparent shadow-sm",
    gold: "bg-amber-50 text-amber-700 border-amber-100",
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-colors",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}