import { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function VisitScheduler() {
  const [sent, setSent] = useState(false);
  return (
    <Card>
      <h3 className="text-2xl font-bold">Schedule a Visit</h3>
      <p className="mt-2 text-black/80">We welcome visitors Monday–Friday, 8:00 AM – 5:00 PM.</p>
      <form className="mt-3 grid sm:grid-cols-2 gap-3" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
        <input className="rounded-md border border-black/20 bg-white px-3 py-2" placeholder="Your Name" required />
        <input className="rounded-md border border-black/20 bg-white px-3 py-2" type="email" placeholder="Email" required />
        <input className="rounded-md border border-black/20 bg-white px-3 py-2" placeholder="Phone (+256…)" required />
        <input className="rounded-md border border-black/20 bg-white px-3 py-2" type="date" required />
        <textarea className="sm:col-span-2 rounded-md border border-black/20 bg-white px-3 py-2" rows={3} placeholder="Anything you'd like us to know?" />
        <div className="sm:col-span-2"><Button type="submit">Request Visit</Button></div>
      </form>
      {sent && <p className="mt-2 text-green-600 text-sm">Thanks! We’ll confirm by phone or email.</p>}
    </Card>
  );
}
