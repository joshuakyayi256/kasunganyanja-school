// src/lib/cn.ts
import type { ClassValue } from "clsx"; // type-only import so it’s erased at runtime
import clsx from "clsx"; // clsx has a default export
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(...inputs));
}
