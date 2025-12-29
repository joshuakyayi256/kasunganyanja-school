import { Link } from "react-router-dom";
import { 
  Phone, Mail, MapPin, ArrowRight, HeartHandshake, 
  Facebook, Instagram, Twitter, Sparkles, Send 
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
          
          {/* Brand Section - Span 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-navy grid place-items-center text-white shadow-xl">
                <Sparkles className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none">Kasunganyanja</span>
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Parents Primary School</span>
              </div>
            </div>
            
            <p className="text-white/60 leading-relaxed text-sm max-w-sm">
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

          {/* Quick Links - Span 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className={linkCls}>About Us</Link></li>
              <li><Link to="/academics" className={linkCls}>Academics</Link></li>
              <li><Link to="/admissions" className={linkCls}>Admissions</Link></li>
              <li><Link to="/impact" className={linkCls}>Our Impact</Link></li>
              <li><Link to="/gallery" className={linkCls}>Gallery</Link></li>
            </ul>
          </div>

          {/* Support - Span 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Support</h4>
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

          {/* Newsletter / Contact - Span 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">Join our newsletter to receive stories of impact from our students.</p>
            
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

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-sky-400" />
                <a href="tel:+256757158407" className="hover:text-white">+256 757 158 407</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-sky-400 mt-1" />
                <span className="leading-tight">Kibiito Sub County, Bunyangabu District, Uganda</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SUB-FOOTER */}
        <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()} Kasunganyanja Parents Primary School. 
            <span className="hidden md:inline ml-2">Licensed P1–P7 Educational Institution.</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/40">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}