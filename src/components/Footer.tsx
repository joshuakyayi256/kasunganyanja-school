import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, ArrowRight, HeartHandshake, 
  Facebook, Instagram, Twitter, Send 
} from "lucide-react";
import Button from "./ui/Button";
import { cn } from "../lib/cn";

const linkCls = "text-white/60 hover:text-white font-medium transition-all duration-200 flex items-center gap-2 group";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* 1. CURVED TRANSITION - Matches your PageHero and Cards */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[3rem] z-10" />

      {/* 2. MAIN FOOTER BODY */}
      <div className="bg-navy text-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          {/* Brand Section - Updated with official badge */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl overflow-hidden bg-white shadow-2xl p-0.5 flex items-center justify-center">
                <img 
                  src="/KPNS Badge.jpg" 
                  alt="KPNS Official Badge" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter">Kasunganyanja</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1.5">Parents Primary School</span>
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed text-sm max-w-sm font-medium">
              Empowering the next generation in Bunyangabu District through holistic education, 
              character building, and community engagement. Committed to "Transformation and Success."
            </p>

            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" }
              ].map((social) => (
                <a 
                  key={social.label}
                  aria-label={social.label} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <social.icon className="size-5 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-8">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className={linkCls}>About Us</Link></li>
              <li><Link to="/academics" className={linkCls}>Academics</Link></li>
              <li><Link to="/admissions" className={linkCls}>Admissions</Link></li>
              <li><Link to="/impact" className={linkCls}>Our Impact</Link></li>
              <li><Link to="/gallery" className={linkCls}>Gallery</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-8">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/donate" className={cn(linkCls, "text-sky-400 hover:text-sky-300 font-bold")}>
                  <HeartHandshake className="size-4" /> Donate Now
                </Link>
              </li>
              <li><Link to="/sponsor" className={linkCls}>Sponsor a Child</Link></li>
              <li><Link to="/contact" className={linkCls}>Partner with Us</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-8">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-6 font-medium">Join our newsletter to receive stories of impact from our students.</p>
            
            <form
              className="relative mb-8"
              onSubmit={(e)=>{ e.preventDefault(); alert("Welcome to our community!"); }}
            >
              <input
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-white text-navy font-bold text-xs hover:bg-sky-100 transition-colors"
              >
                Join
              </button>
            </form>

            <div className="space-y-4 text-sm text-white/60 font-medium">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="size-4 text-sky-400" />
                </div>
                <a href="tel:+256757158407" className="hover:text-white transition-colors">+256 757 158 407</a>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="size-4 text-sky-400" />
                </div>
                <span className="leading-snug">Kibiito Sub County, Bunyangabu District, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Kasunganyanja Parents Primary School. 
            <span className="hidden md:inline ml-2">Licensed P1–P7 Educational Institution.</span>
          </div>
          {/* src/components/Footer.tsx */}
<div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-white/30">
  <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
  <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
</div>
        </div>
      </div>
    </footer>
  );
}