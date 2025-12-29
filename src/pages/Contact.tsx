import { useState } from "react";
import { school } from "../data/school";
import PageHero from "../components/PageHero";
import Button from "../components/ui/Button";
import ColorCard from "../components/ColorCard";
import EnrollmentApply from "../components/EnrollmentApply";
import VisitScheduler from "../components/VisitScheduler";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { cn } from "../lib/cn";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const mapsQuery = encodeURIComponent(
    "Kasunganyanja Parish, Kibiito Sub County, Bunyangabu District, Uganda"
  );

  // Input styling to match your premium forms
  const inputStyle = "mt-1 w-full rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-navy outline-none focus:ring-4 focus:ring-navy/5 focus:bg-white focus:border-navy/20 transition-all font-semibold";

  return (
    <div className="bg-white min-h-screen pb-20">
      <PageHero
        size="lg"
        bgImage="/images/campus-view.jpg" // High-quality campus shot
        tint="navy"
        title="Get in Touch"
        subtitle="We're here to answer your questions about admissions, support, and school life."
      />

      {/* 1. CORE CONTACT INFO & ENROLLMENT QUICK-LINK */}
      <Section container="section-tight" className="-mt-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50">
                <h3 className="text-2xl font-black text-navy mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <a href={`tel:${school.contacts.phone}`} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</div>
                      <div className="text-lg font-bold text-navy">{school.contacts.phone}</div>
                    </div>
                  </a>

                  <a href={`mailto:${school.contacts.email}`} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</div>
                      <div className="text-lg font-bold text-navy">{school.contacts.email}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-navy/5 text-navy">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</div>
                      <div className="text-sm font-bold text-navy leading-relaxed">{school.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
               <div className="p-8 rounded-[2rem] bg-sky-50 border border-sky-100">
                  <h4 className="font-bold text-sky-900 mb-2">Admissions Office</h4>
                  <p className="text-sm text-sky-800/70 leading-relaxed">
                    Open Monday to Friday, 8:00 AM — 5:00 PM for walk-in inquiries and tours.
                  </p>
               </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3">
            <Reveal delay={0.2}>
              <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
                <EnrollmentApply />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 2. INTERACTIVE MAP & VISIT SCHEDULER */}
      <Section container="section-tight" tone="slate">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
               <h3 className="text-3xl font-black text-navy">Find Us</h3>
               <p className="text-slate-500">Located in the heart of Bunyangabu District, serving the Kasunganyanja community.</p>
               <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl h-80">
                 <iframe
                   title="Map"
                   src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&ie=UTF8&iwloc=&output=embed`}
                   className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                   loading="lazy"
                 />
               </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-navy/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-navy text-white"><Send className="size-5" /></div>
                <h3 className="text-2xl font-black text-navy">Schedule a Visit</h3>
              </div>
              <VisitScheduler />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 3. MESSAGE FORM */}
      <Section container="section-tight">
        <Reveal>
          <div className="max-w-4xl mx-auto bg-navy rounded-[3.5rem] p-8 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-32 -mt-32 rounded-full" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12">
               <div className="md:w-1/3">
                  <MessageSquare className="size-12 text-sky-400 mb-6" />
                  <h3 className="text-3xl font-black mb-4">Send a Message</h3>
                  <p className="text-white/60 leading-relaxed">
                    Have a specific question? Send us a direct message and our admin team will get back to you within 24 hours.
                  </p>
               </div>

               <form
                className="md:w-2/3 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="sm:col-span-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                  <input className={cn(inputStyle, "bg-white/5 border-white/10 text-white placeholder:text-white/20")} placeholder="John Doe" required />
                </div>
                <div className="sm:col-span-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <input type="email" className={cn(inputStyle, "bg-white/5 border-white/10 text-white placeholder:text-white/20")} placeholder="john@example.com" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Message</label>
                  <textarea
                    className={cn(inputStyle, "bg-white/5 border-white/10 text-white placeholder:text-white/20")}
                    rows={4}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div className="sm:col-span-2 pt-4">
                  <Button type="submit" size="xl" variant="white" className="w-full sm:w-auto px-12">
                    Send Message
                  </Button>
                  {sent && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sky-400 text-sm mt-4 font-bold flex items-center gap-2"
                    >
                      <CheckCircle className="size-4" /> Thanks! We’ll respond soon.
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}