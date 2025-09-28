// src/components/MobileMoneyOnlyWidget.tsx
"use client";

import { useMemo, useState } from "react";

type Props = {
    receiverName: string;
    receiverNumber: string; // e.g. "+256 757 158 407"
    suggestedTiers?: number[];
};

export default function MobileMoneyOnlyWidget({
    receiverName,
    receiverNumber,
    suggestedTiers = [10000, 30000, 50000, 100000],
}: Props) {
    const [amount, setAmount] = useState<number>(suggestedTiers[0] ?? 10000);
    const [copied, setCopied] = useState(false);
    const cleanNumber = useMemo(() => receiverNumber.replace(/\s+/g, ""), [receiverNumber]);

    function copyNumber() {
        navigator.clipboard
            .writeText(cleanNumber)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            })
            .catch(() => { });
    }

    return (
        <div id="donate-now" className="space-y-6">
            {/* Receiver card */}
            <div className="rounded-2xl border border-black/10 bg-white/80 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white">
                        {/* simple phone glyph */}
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6 2h12v20H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <circle cx="12" cy="19" r="1" fill="currentColor" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm text-black/70">Send Mobile Money to</div>
                        <div className="text-base font-semibold">{receiverName}</div>
                        <div className="font-mono text-sm text-black/80">{cleanNumber}</div>
                    </div>
                    <button
                        type="button"
                        onClick={copyNumber}
                        className="ml-auto inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm hover:bg-black/5"
                    >
                        {copied ? "Copied" : "Copy"}
                    </button>
                </div>

                {/* Amount picker */}
                <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium">Select Amount (UGX)</label>
                    <div className="flex flex-wrap gap-2">
                        {suggestedTiers.map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => setAmount(t)}
                                className={`px-3 py-2 rounded-xl border text-sm transition shadow-sm ${amount === t
                                        ? "border-black bg-black text-white"
                                        : "border-black/10 bg-white hover:border-black/30"
                                    }`}
                            >
                                {t.toLocaleString()}
                            </button>
                        ))}
                    </div>
                    <div className="mt-3">
                        <input
                            type="number"
                            min={1000}
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value || "0", 10))}
                            className="w-full rounded-xl border border-black/10 px-3 py-2 outline-none focus:border-black/30"
                            placeholder="Enter custom amount"
                            inputMode="numeric"
                        />
                    </div>
                </div>

                {/* How-to (USSD) */}
                <details className="mt-5 rounded-xl border border-black/10 bg-white/70 p-4 text-sm">
                    <summary className="cursor-pointer select-none font-medium">How to pay via USSD</summary>
                    <div className="mt-3 space-y-2 text-black/70">
                        <div>
                            <div className="font-semibold">MTN Mobile Money</div>
                            <div>Dial *165# → Send Money → Enter number → Amount → Reference “Donation”.</div>
                        </div>
                        <div>
                            <div className="font-semibold">Airtel Money</div>
                            <div>Dial *185# → Send Money → Enter number → Amount → Reference “Donation”.</div>
                        </div>
                    </div>
                </details>

                <p className="mt-4 text-xs text-black/60">
                    Funds are used where the need is greatest. Add the reference <span className="font-semibold">Donation</span>{" "}
                    when sending.
                </p>
            </div>
        </div>
    );
}
