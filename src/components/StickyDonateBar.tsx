import { Link, useLocation } from "react-router-dom";
import { HeartHandshake } from "lucide-react";

export default function StickyDonateBar() {
  const { pathname } = useLocation();
  const hide = pathname === "/donate"; // don’t show on the donate page itself
  if (hide) return null;
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <Link
        to="/donate"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-navy text-white shadow-[0_10px_30px_rgba(11,46,78,0.35)]"
      >
        <HeartHandshake className="size-4" /> Donate
      </Link>
    </div>
  );
}
