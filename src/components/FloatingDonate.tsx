import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function FloatingDonate() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Subtle background pulse for attention without being annoying */}
      <div className="absolute inset-0 rounded-full bg-navy/20 animate-ping group-hover:hidden" />
      
      <Button asChild size="xl" className="rounded-full shadow-2xl shadow-navy/40 relative">
        <Link to="/donate" className="flex items-center gap-2">
          <Heart className="size-5 fill-white" />
          <span className="hidden sm:inline">Support Our Mission</span>
          <span className="sm:hidden">Donate</span>
        </Link>
      </Button>
    </div>
  );
}