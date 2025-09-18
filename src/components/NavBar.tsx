import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "../lib/cn";

const linkBase = "px-3 py-2 rounded-xl text-sm font-medium";
const navClass = ({ isActive }: { isActive: boolean }) =>
    cn(linkBase, isActive ? "bg-black/5 text-black" : "text-black/80 hover:bg-black/5");

export default function NavBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-40">
            <div className="max-w-6xl mx-auto px-3 py-3">
                <div
                    className="
            relative mx-auto flex items-center gap-4
            rounded-[999px] border border-black/10 bg-white/70
            backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            pl-4 pr-2 h-[64px]
          "
                >
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-black">
                        <div className="h-9 w-9 rounded-2xl bg-black/5 grid place-items-center border border-black/10">K</div>
                        <span>Kasunganyanja School</span>
                    </Link>

                    {/* Nav */}
                    <nav className="hidden md:flex ml-auto items-center gap-1">
                        <NavLink to="/" className={navClass} end>Home</NavLink>
                        <NavLink to="/about" className={navClass}>About</NavLink>
                        <NavLink to="/academics" className={navClass}>Academics</NavLink>
                        <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
                        <NavLink to="/donate" className={navClass}>Donate</NavLink>
                        <NavLink to="/contact" className={navClass}>Contact</NavLink>
                    </nav>

                    {/* Actions */}
                    <div className="ml-auto md:ml-2 flex items-center gap-2">
                        <a
                            href="tel:+256757158407"
                            className="hidden sm:flex items-center gap-2 rounded-2xl border border-black/10 px-3 py-2 text-sm text-black/90 hover:bg-black/5"
                        >
                            <Phone className="size-4" /> +256 757 158 407
                        </a>
                        <Button asChild variant="solid" size="md">
                            <Link to="/contact">Get in touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
