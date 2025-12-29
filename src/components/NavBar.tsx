import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, HeartHandshake, ChevronDown, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "../lib/cn";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

// Navigation data remains the same
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
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  // Scroll detection logic
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLockBodyScroll(open);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
      {/* 1. ANNOUNCEMENT BAR: High-contrast utility bar */}
      <div className={cn(
        "bg-navy text-white/80 transition-all duration-500 overflow-hidden",
        scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-6">
            <a href="tel:+256757158407" className="hover:text-sky-400 flex items-center gap-2 transition-colors">
              <Phone className="size-3" /> +256 757 158 407
            </a>
            <span className="hidden md:block text-white/20">|</span>
            <span className="hidden md:block">Licensed by Ministry of Education, Uganda</span>
          </div>
          <Link to="/sponsor" className="text-sky-400 hover:text-white transition-colors">
            Sponsor a Child
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION: The "Floating" Glass Container */}
      <div className={cn(
        "px-4 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}>
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between rounded-[2rem] transition-all duration-500",
          "border border-white/20 backdrop-blur-2xl px-2 h-16 shadow-lg shadow-navy/5",
          scrolled ? "bg-white/95 border-slate-200" : "bg-white/40"
        )}>
          
          {/* LOGO: Scalable branding */}
          <Link to="/" className="flex items-center gap-3 pl-4 group shrink-0">
            <div className="h-10 w-10 rounded-2xl bg-navy flex items-center justify-center text-white shadow-xl shadow-navy/20 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="size-5" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-black text-navy text-lg tracking-tighter">Kasunganyanja</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 tracking-widest mt-1">Parents Primary School</span>
            </div>
          </Link>

          {/* DESKTOP NAV: Subtle active pill states */}
          <nav className="hidden lg:flex items-center gap-1">
            {PRIMARY.map(({ to, label }) => (
              <NavLink 
                key={to} 
                to={to} 
                className={({ isActive }) => cn(
                  "px-5 py-2 rounded-full text-[13px] font-extrabold transition-all duration-300",
                  isActive 
                    ? "text-white bg-navy shadow-md shadow-navy/20 scale-105" 
                    : "text-slate-600 hover:text-navy hover:bg-white/80"
                )}
              >
                {label}
              </NavLink>
            ))}
            
            {/* "MORE" DROPDOWN: Clean menu trigger */}
            <div className="relative" ref={moreRef}>
              <button 
                onClick={() => setMoreOpen(!moreOpen)}
                className={cn(
                  "flex items-center gap-1 px-5 py-2 rounded-full text-[13px] font-extrabold transition-all",
                  moreOpen ? "bg-slate-100 text-navy" : "text-slate-600 hover:text-navy"
                )}
              >
                More <ChevronDown className={cn("size-3 transition-transform", moreOpen && "rotate-180")} />
              </button>

              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-100 rounded-3xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                  {MORE.map((item) => (
                    <Link 
                      key={item.to} 
                      to={item.to}
                      className="flex items-center w-full px-4 py-3 text-sm font-bold text-slate-600 hover:text-navy hover:bg-slate-50 rounded-2xl transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* ACTION SECTION: High-visibility primary button */}
          <div className="flex items-center gap-2 pr-1">
            <Button asChild size="md" className="hidden sm:flex rounded-full px-8 h-11 bg-navy hover:bg-navy-light text-white shadow-xl shadow-navy/10 border-none group">
              <Link to="/donate" className="text-xs font-black">
                <HeartHandshake className="size-4 mr-2 group-hover:animate-pulse" /> Support Us
              </Link>
            </Button>
            
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden h-11 w-11 rounded-full bg-slate-100 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}