/// <reference types="vite/client" />

declare module "*.mdx" {
    import type { ComponentType } from "react";
    export const meta: {
        title: string;
        date: string;
        excerpt: string;
        tags?: string[];
        cover?: string;
        author?: string;
        readMins?: number;
    };
    const MDXComponent: ComponentType<any>;
    export default MDXComponent;
}
