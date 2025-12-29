import { useState, useCallback } from "react";
import Button from "./ui/Button";
import { Lock, Mail, User, Phone, Wallet } from "lucide-react";
import { cn } from "../lib/cn";

export default function DonationWidget() {
  const [amount, setAmount] = useState<number>(50000);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handlePay = useCallback(() => {
    // ... same Flutterwave logic ...
  }, [amount, email, name, phone]);

  // Premium Input Style
  const inputContainer = "relative flex items-center group";
  const iconStyle = "absolute left-4 size-5 text-slate-400 group-focus-within:text-navy transition-colors";
  const inputStyle = "w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-4 focus:ring-navy/5 focus:bg-white focus:border-navy/20 transition-all text-navy font-semibold";

  return (
    <div className="max-w-md w-full p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-navy/10 border border-slate-50 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 mb-2">
          <Lock className="size-6" />
        </div>
        <h3 className="text-xl font-black text-navy">Secure Donation</h3>
        <p className="text-xs text-slate-500 font-medium">Your contribution goes directly to student welfare.</p>
      </div>

      <div className="space-y-4">
        {/* Amount Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Amount (UGX)</label>
          <div className={inputContainer}>
            <Wallet className={iconStyle} />
            <input 
              type="number" 
              value={amount} 
              onChange={e => setAmount(Number(e.target.value))} 
              className={cn(inputStyle, "text-2xl")} 
            />
          </div>
        </div>

        {/* Personal Details Grid */}
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1.5">
             <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
             <div className={inputContainer}>
                <User className={iconStyle} />
                <input className={inputStyle} value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" />
             </div>
          </div>
          
          <div className="space-y-1.5">
             <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
             <div className={inputContainer}>
                <Phone className={iconStyle} />
                <input className={inputStyle} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+256..." />
             </div>
          </div>

          <div className="space-y-1.5">
             <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
             <div className={inputContainer}>
                <Mail className={iconStyle} />
                <input type="email" className={inputStyle} value={email} onChange={e => setEmail(e.target.value)} placeholder="john@example.com" />
             </div>
          </div>
        </div>
      </div>

      <Button type="button" onClick={handlePay} className="w-full py-8 text-lg rounded-2xl" size="xl">
        Complete Donation
      </Button>

      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-4 grayscale opacity-50">
           {/* You could add small Flutterwave or Mobile Money logos here */}
           <span className="text-[10px] font-bold text-slate-400">SECURE PAYMENT BY FLUTTERWAVE</span>
        </div>
        <p className="text-[10px] text-slate-400 text-center px-4 leading-relaxed">
          Supports Mobile Money Uganda, Visa, and Mastercard. Your data is encrypted and secure.
        </p>
      </div>
    </div>
  );
}