"use client";

import { X } from "lucide-react";

export default function ArticleModal({
    open,
    onClose,
    title,
    date,
    cover,
    children,
}: {
    open: boolean;
    onClose: () => void;
    title: string;
    date?: string;
    cover?: string;
    children: React.ReactNode;
}) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm">
            <div className="mx-auto mt-10 w-[min(960px,92vw)] rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        {date && <div className="text-xs text-black/60">{new Date(date).toDateString()}</div>}
                    </div>
                    <button
                        aria-label="Close"
                        className="rounded-lg border border-black/10 p-2 hover:bg-black/5"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
                {cover ? (
                    <img
                        src={cover}
                        alt=""
                        className="mt-3 max-h-[360px] w-full rounded-xl object-cover"
                    />
                ) : null}
                <div className="mt-3">{children}</div>
            </div>
        </div>
    );
}
