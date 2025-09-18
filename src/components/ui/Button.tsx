// src/components/ui/Button.tsx
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    variant?: "solid" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
};

export default function Button({
    className, variant = "solid", size = "md", asChild, ...props
}: Props) {
    const Comp = asChild ? Slot : "button";
    const base =
        "inline-flex items-center justify-center rounded-2xl font-semibold transition-all " +
        "focus:outline-none focus:ring-2 focus:ring-black/20";
    const variants = {
        solid: "bg-accent text-black hover:brightness-110 active:scale-[.98] shadow-[0_8px_30px_rgba(245,179,1,0.25)]",
        ghost: "bg-transparent hover:bg-black/5 text-black",
        outline: "border border-black/10 hover:bg-black/5 text-black",
    }[variant];
    const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2", lg: "px-5 py-3 text-lg" }[size];
    return <Comp className={cn(base, variants, sizes, className)} {...props} />;
}
