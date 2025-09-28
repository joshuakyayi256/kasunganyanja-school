/// <reference types="vite/client" />

declare module "*.mdx" {
    import type { ComponentType } from "react";
    export const meta: {
        title: string;
        date: string; // ISO
        excerpt: string;
        tags?: string[];
        cover?: string;
        author?: string;
        readMins?: number;
    };
    let MDXComponent: ComponentType<any>;
    export default MDXComponent;
}
