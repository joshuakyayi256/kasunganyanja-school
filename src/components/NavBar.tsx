// src/components/NavBar.tsx
import { useEffect, useRef, useState, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, HeartHandshake, ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "../lib/cn";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const linkBase = "px-3 py-2 rounded-xl text-sm font-medium";
const navClass = ({ isActive }: { isActive: boolean }) =>
  cn(linkBase, isActive ? "bg-black/5 text-black" : "text-black/80 hover:bg-black/5");

// Primary (always visible on desktop)
const PRIMARY = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/impact", label: "Impact" },
];

// Secondary moved under “More”
const MORE = [
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  // Close menus on route change
  useEffect(() => { setOpen(false); setMoreOpen(false); }, [pathname]);

  // Header styling on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useLockBodyScroll(open);

  // Close “More” when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); setMoreOpen(false); } };
    document.addEventListener("click", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleMobile = useCallback(() => setOpen(v => !v), []);
  const closeMobile = useCallback(() => setOpen(false), []);
  const toggleMore = useCallback(() => setMoreOpen(v => !v), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-3 py-2">
          <div
            className={cn(
              "relative mx-auto flex items-center gap-2 rounded-[999px] border border-black/10",
              "bg-white/70 backdrop-blur-md pl-4 pr-2 h-[56px] transition-all duration-300",
              "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
              scrolled && "bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
            )}
          >
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-black">
              <div className="h-8 w-8 rounded-2xl bg-navy/10 grid place-items-center border border-black/10 text-navy">K</div>
              <span className="hidden sm:inline">Kasunganyanja School</span>
              <span className="sm:hidden">Kasunganyanja</span>
            </Link>

            {/* Desktop nav (decluttered) */}
            <nav className="hidden lg:flex ml-2 items-center gap-1">
              {PRIMARY.map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end as boolean | undefined} className={navClass}>
                  {label}
                </NavLink>
              ))}
              {/* More dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  type="button"
                  onClick={toggleMore}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                  className={cn(linkBase, "inline-flex items-center gap-1 text-black/80 hover:bg-black/5")}
                >
                  More <ChevronDown className="size-4" />
                </button>
                <div
                  role="menu"
                  className={cn(
                    "absolute left-0 mt-2 w-52 rounded-2xl border border-black/10 bg-white shadow-xl overflow-hidden",
                    moreOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
                    "transition-all duration-150"
                  )}
                >
                  {MORE.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 text-sm",
                          isActive ? "bg-black/5 text-black font-semibold" : "text-black/80 hover:bg-black/5"
                        )
                      }
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex ml-auto items-center gap-2">
              <a
                href="tel:+256757158407"
                className="items-center gap-2 rounded-2xl border border-black/10 px-3 py-1.5 text-sm text-black/90 hover:bg-black/5 hidden xl:flex"
              >
                <Phone className="size-4" /> +256 757 158 407
              </a>
              <Button asChild size="md">
                <Link to="/donate"><HeartHandshake className="size-4 mr-2" /> Donate</Link>
              </Button>
              <Button asChild size="md" variant="outline">
                <Link to="/sponsor">Sponsor</Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={toggleMobile}
              className="md:hidden ml-auto p-2 rounded-2xl border border-black/10 hover:bg-black/5 text-black"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobile}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[86%] max-w-[360px] bg-white shadow-xl border-l border-black/10",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between h-[56px] px-4 border-b border-black/10">
            <Link to="/" className="font-extrabold text-black" onClick={closeMobile}>
              Kasunganyanja
            </Link>
            <button aria-label="Close menu" onClick={closeMobile} className="p-2 rounded-xl hover:bg-black/5 text-black">
              <X className="size-5" />
            </button>
          </div>

          <nav className="px-3 py-4 space-y-1">
            {[...PRIMARY, ...MORE, { to: "/donate", label: "Donate" }].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end as boolean | undefined}
                onClick={closeMobile}
                className={({ isActive }) =>
                  cn(
                    "block rounded-xl px-3 py-3 text-base",
                    isActive ? "bg-black/5 text-black font-semibold" : "text-black/80 hover:bg-black/5"
                  )
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2 flex gap-2">
              <Button asChild className="flex-1">
                <Link to="/donate">Donate</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/sponsor">Sponsor</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
