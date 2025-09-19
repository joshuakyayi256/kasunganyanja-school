// src/components/Footer.tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, HeartHandshake, Facebook, Instagram, Twitter } from "lucide-react";
import Button from "./ui/Button";

const linkCls =
  "text-black/80 hover:text-black font-medium transition-colors inline-flex items-center gap-1";

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* Top wave / color band */}
      <div className="h-3 w-full bg-navy" />

      {/* Main footer */}
      <div className="bg-skyline">
        <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-4 gap-8">
          {/* Brand & short pitch */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-navy/90 grid place-items-center text-white font-extrabold">K</div>
              <div className="text-2xl font-extrabold text-navy leading-none">
                Kasunganyanja
                <div className="text-sm font-medium text-black/70 mt-1">Parents Primary School</div>
              </div>
            </div>
            <p className="mt-4 text-black/80">
              Licensed mixed day school (P1–P7) serving families in Kasunganyanja Parish, Bunyangabu District—focused on
              academic excellence, character, and community.
            </p>
            <div className="mt-4 flex gap-2">
              <a aria-label="Facebook" href="#" className="p-2 rounded-xl border border-black/10 hover:bg-black/5">
                <Facebook className="size-5 text-navy" />
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-xl border border-black/10 hover:bg-black/5">
                <Instagram className="size-5 text-navy" />
              </a>
              <a aria-label="Twitter / X" href="#" className="p-2 rounded-xl border border-black/10 hover:bg-black/5">
                <Twitter className="size-5 text-navy" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold text-navy">Explore</h4>
            <ul className="mt-3 space-y-2">
              <li><Link to="/" className={linkCls}>Home</Link></li>
              <li><Link to="/about" className={linkCls}>About</Link></li>
              <li><Link to="/academics" className={linkCls}>Academics</Link></li>
              <li><Link to="/gallery" className={linkCls}>Gallery</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact & Admissions</Link></li>
            </ul>
          </div>

          {/* Give / Support (no MoMo card) */}
          <div>
            <h4 className="text-lg font-bold text-navy">Support</h4>
            <div className="mt-3 space-y-3">
              <Link to="/donate" className={linkCls}>
                <HeartHandshake className="size-4 text-navy" /> Donate to the School
              </Link>
              <Link to="/contact" className={linkCls}>
                <ArrowRight className="size-4 text-navy" /> Sponsor a Child
              </Link>
              <a
                href="https://wa.me/?text=I%20want%20to%20support%20Kasunganyanja%20Parents%20Primary%20School"
                className={linkCls}
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRight className="size-4 text-navy" /> Share on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-navy">Contact</h4>
            <ul className="mt-3 space-y-2 text-black/85">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-navy" />
                <a href="tel:+256757158407" className="hover:underline">+256 757 158 407</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-navy" />
                <a href="mailto:baniinah@gmail.com" className="hover:underline">baniinah@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-navy mt-1" />
                <span>Kasunganyanja Parish, Kibiito Sub County, Bunyangabu District, Uganda</span>
              </li>
            </ul>

            <form
              className="mt-4 grid grid-cols-[1fr_auto] gap-2"
              onSubmit={(e)=>{ e.preventDefault(); alert("Thanks! We'll keep you updated."); }}
            >
              <input
                className="rounded-xl border border-black/20 bg-white px-3 py-2"
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                required
              />
              <Button type="submit">Join</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-3 justify-between">
          <div className="text-sm">
            © {new Date().getFullYear()} Kasunganyanja Parents Primary School. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/about" className="text-white/80 hover:text-white">About</Link>
            <Link to="/contact" className="text-white/80 hover:text-white">Admissions</Link>
            <Link to="/donate" className="text-white/80 hover:text-white">Donate</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
