import { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "../lib/cn";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const linkBase = "px-3 py-2 rounded-xl text-sm font-medium";
const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(linkBase, isActive ? "bg-black/5 text-black" : "text-black/80 hover:bg-black/5");

const NAV_ITEMS = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/gallery", label: "Gallery" },
    { to: "/donate", label: "Donate" },
    { to: "/contact", label: "Contact" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false); // 👈 new
    const { pathname } = useLocation();

    // Close mobile menu on route change
    useEffect(() => { setOpen(false); }, [pathname]);

    // Lock body scroll when menu is open
    useLockBodyScroll(open);

    // Close on Esc
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // 👇 add subtle shadow / denser bg when the page is scrolled
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll(); // run once on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggle = useCallback(() => setOpen(v => !v), []);
    const close = useCallback(() => setOpen(false), []);

    return (
        <>
            {/* Floating pill header */}
            <header className="fixed top-0 left-0 right-0 z-40">
                <div className="max-w-6xl mx-auto px-3 py-3">
                    <div
                        className={cn(
                            "relative mx-auto flex items-center gap-3 rounded-[999px]",
                            "border border-black/10 bg-white/70 backdrop-blur-md",
                            "pl-4 pr-2 h-[64px] transition-all duration-300",
                            "shadow-[0_8px_30px_rgba(0,0,0,0.08)]",
                            scrolled && "bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.10)]" // 👈 applied on scroll
                        )}
                    >
                        {/* Brand */}
                        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-black">
                            <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center border border-black/10">K</div>
                            <span className="hidden sm:inline">Kasunganyanja School</span>
                            <span className="sm:hidden">Kasunganyanja</span>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex ml-auto items-center gap-1">
                            {NAV_ITEMS.map(({ to, label, end }) => (
                                <NavLink key={to} to={to} end={end as boolean | undefined} className={navClass}>
                                    {label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Desktop actions */}
                        <div className="hidden md:flex ml-2 items-center gap-2">
                            <a
                                href="tel:+256757158407"
                                className="items-center gap-2 rounded-2xl border border-black/10 px-3 py-2 text-sm text-black/90 hover:bg-black/5 hidden lg:flex"
                            >
                                <Phone className="size-4" /> +256 757 158 407
                            </a>
                            <Button asChild variant="solid" size="md">
                                <Link to="/contact">Get in touch</Link>
                            </Button>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            aria-label="Open menu"
                            aria-controls="mobile-menu"
                            aria-expanded={open}
                            onClick={toggle}
                            className="md:hidden ml-auto p-2 rounded-2xl border border-black/10 hover:bg-black/5 text-black"
                        >
                            <Menu className="size-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile full-screen menu */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                className={cn(
                    "fixed inset-0 z-50 md:hidden transition-opacity",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={close}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Sheet */}
                <div
                    className={cn(
                        "absolute inset-y-0 right-0 w-[86%] max-w-[360px] bg-white shadow-xl border-l border-black/10",
                        "transition-transform duration-300",
                        open ? "translate-x-0" : "translate-x-full"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between h-[64px] px-4 border-b border-black/10">
                        <Link to="/" className="font-extrabold text-black" onClick={close}>
                            Kasunganyanja
                        </Link>
                        <button
                            aria-label="Close menu"
                            onClick={close}
                            className="p-2 rounded-xl hover:bg-black/5 text-black"
                        >
                            <X className="size-5" />
                        </button>
                    </div>

                    <nav className="px-3 py-4 space-y-1">
                        {NAV_ITEMS.map(({ to, label, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end as boolean | undefined}
                                onClick={close}
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
                    </nav>

                    <div className="px-3 pt-2 border-t border-black/10">
                        <a
                            href="tel:+256757158407"
                            className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 px-3 py-3 text-sm text-black hover:bg-black/5"
                        >
                            <Phone className="size-4" /> +256 757 158 407
                        </a>
                        <Button asChild className="w-full mt-3" size="md">
                            <Link to="/contact">Get in touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
