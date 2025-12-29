"use client";

import { X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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
    // Lock body scroll when modal is open
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-navy/40 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col"
            >
                {/* Close Button - Floating for easier thumb reach */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 z-10 size-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all active:scale-90"
                >
                    <X className="size-5" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto custom-scrollbar">
                    {cover && (
                        <div className="relative h-[300px] sm:h-[400px] w-full">
                            <img
                                src={cover}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                        </div>
                    )}

                    <div className="px-8 pb-12 pt-8 sm:px-12">
                        <div className="flex flex-col gap-2 mb-8">
                            {date && (
                                <div className="flex items-center gap-2 text-xs font-bold text-navy/40 uppercase tracking-widest">
                                    <Calendar className="size-3" />
                                    {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                            )}
                            <h2 className="text-3xl sm:text-4xl font-black text-navy leading-tight">
                                {title}
                            </h2>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                            {children}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}