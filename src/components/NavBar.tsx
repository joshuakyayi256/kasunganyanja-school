import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, HeartHandshake, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Highly recommended for mobile feel
import Button from "./ui/Button";
import { cn } from "../lib/cn";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const PRIMARY = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/impact", label: "Impact" },
];

const MORE = [
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
  { to: "/sponsor", label: "Sponsor a Child" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  // Close menus when navigating
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLockBodyScroll(open);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* 1. ANNOUNCEMENT BAR (Desktop Only) */}
      <div className={cn(
        "bg-navy text-white/80 transition-all duration-500 overflow-hidden hidden md:block",
        scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-6">
            <a href="tel:+256757158407" className="hover:text-sky-400 flex items-center gap-2 transition-colors">
              <Phone className="size-3" /> +256 757 158 407
            </a>
            <span className="text-white/20">|</span>
            <span>Licensed by Ministry of Education, Uganda</span>
          </div>
          <Link to="/sponsor" className="text-sky-400 hover:text-white transition-colors">Sponsor a Child</Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className={cn("px-4 transition-all duration-300", scrolled ? "py-2" : "py-4")}>
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between rounded-[2rem] border transition-all duration-500",
          "backdrop-blur-2xl px-2 h-16 shadow-lg shadow-navy/5",
          scrolled ? "bg-white/95 border-slate-200" : "bg-white/40 border-white/20"
        )}>
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 pl-4 group shrink-0">
            <div className="h-10 w-10 rounded-2xl bg-navy flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="size-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-navy text-lg tracking-tighter">Kasunganyanja</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 tracking-widest mt-0.5">Parents Primary</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => cn(
                "px-5 py-2 rounded-full text-[13px] font-extrabold transition-all duration-300",
                isActive ? "text-white bg-navy shadow-md shadow-navy/20" : "text-slate-600 hover:text-navy hover:bg-white/80"
              )}>
                {label}
              </NavLink>
            ))}
            
            <div className="relative" ref={moreRef}>
              <button onClick={() => setMoreOpen(!moreOpen)} className={cn(
                "flex items-center gap-1 px-5 py-2 rounded-full text-[13px] font-extrabold transition-all",
                moreOpen ? "bg-slate-100 text-navy" : "text-slate-600 hover:text-navy"
              )}>
                More <ChevronDown className={cn("size-3 transition-transform", moreOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-100 rounded-3xl p-2 shadow-2xl"
                  >
                    {MORE.map((item) => (
                      <Link key={item.to} to={item.to} className="flex items-center w-full px-4 py-3 text-sm font-bold text-slate-600 hover:text-navy hover:bg-slate-50 rounded-2xl transition-all">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* MOBILE TOGGLE & CTA */}
          <div className="flex items-center gap-2 pr-1">
            <Button asChild size="md" className="hidden sm:flex rounded-full px-8 h-11 bg-navy text-white shadow-xl border-none">
              <Link to="/donate" className="text-xs font-black">
                <HeartHandshake className="size-4 mr-2" /> Support Us
              </Link>
            </Button>
            
            <button 
              onClick={() => setOpen(!open)} 
              aria-label="Toggle Menu"
              className="lg:hidden h-11 w-11 rounded-full bg-navy text-white flex items-center justify-center transition-all active:scale-90"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[150] flex flex-col lg:hidden"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-navy flex items-center justify-center text-white"><Sparkles className="size-5" /></div>
                <span className="font-black text-navy text-lg tracking-tighter">Kasunganyanja</span>
              </Link>
              <button onClick={() => setOpen(false)} className="h-11 w-11 rounded-full bg-slate-100 flex items-center justify-center text-navy"><X className="size-6" /></button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-grow overflow-y-auto py-8 px-6">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 ml-4">Main Menu</p>
                {[...PRIMARY, ...MORE].map((item) => (
                  <NavLink 
                    key={item.to} 
                    to={item.to}
                    className={({ isActive }) => cn(
                      "flex items-center justify-between w-full p-4 rounded-3xl text-xl font-black transition-all",
                      isActive ? "bg-navy text-white" : "text-navy hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                    <ArrowRight className="size-5 opacity-20" />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
              <Button asChild size="lg" className="w-full h-16 rounded-[2rem] text-lg font-black shadow-xl shadow-navy/20">
                <Link to="/donate"><HeartHandshake className="size-6 mr-3" /> Support Our School</Link>
              </Button>
              <div className="flex justify-center gap-6 py-2">
                <a href="tel:+256757158407" className="p-3 rounded-2xl bg-white border border-slate-200 text-navy shadow-sm"><Phone className="size-6" /></a>
                <a href="mailto:baniinah@gmail.com" className="p-3 rounded-2xl bg-white border border-slate-200 text-navy shadow-sm"><span className="font-black text-sm px-2">EMAIL US</span></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}