import { useState, useCallback } from "react";
import Button from "./ui/Button";

declare global {
    interface Window { FlutterwaveCheckout?: (config: Record<string, any>) => void; }
}

const pk = import.meta.env.VITE_FLW_PUBLIC_KEY as string;
const currency = (import.meta.env.VITE_DONATION_DEFAULT_CURRENCY as string) || "UGX";
const schoolName = (import.meta.env.VITE_SCHOOL_NAME as string) || "Kasunganyanja Parents Primary School";

export default function DonationWidget() {
    const [amount, setAmount] = useState<number>(50000);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handlePay = useCallback(() => {
        if (!window.FlutterwaveCheckout) {
            alert("Payment library not loaded yet. Please try again in a moment.");
            return;
        }
        window.FlutterwaveCheckout({
            public_key: pk,
            tx_ref: `KASU-${Date.now()}`,
            amount: Number(amount || 0),
            currency,
            payment_options: "card, mobilemoneyuganda, ussd",
            customer: { email, phonenumber: phone, name },
            customizations: {
                title: `${schoolName} Donation`,
                description: "Support access to quality primary education.",
                logo: "",
            },
            callback: function () { alert("Thank you for your support!"); },
            onclose: function () { },
        });
    }, [amount, email, name, phone]);

    const input = "mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-black";

    return (
        <div className="max-w-md w-full space-y-4">
            <div>
                <label className="block text-sm font-medium">Amount ({currency})</label>
                <input type="number" min={1000} value={amount} onChange={e => setAmount(Number(e.target.value))} className={input} placeholder="50000" />
                <p className="text-xs text-black/60 mt-1">Tip: UGX 10,000 – 100,000 are common amounts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input className={input} value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input className={input} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+256..." />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium">Email (for receipt)</label>
                <input type="email" className={input} value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <Button type="button" onClick={handlePay} className="group w-full" size="lg">
                <span className="transition-transform group-active:scale-95">Donate Securely</span>
            </Button>

            <p className="text-xs text-black/60">Powered by Flutterwave Inline (supports Mobile Money Uganda & cards).</p>
        </div>
    );
}
