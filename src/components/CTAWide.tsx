import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";

export default function CTAWide() {
  return (
    <div className="relative overflow-hidden rounded-[3rem] bg-navy p-8 md:p-12 text-white shadow-2xl shadow-navy/20">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mr-32 -mt-32 rounded-full" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="size-4 text-sky-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Make a Difference</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black leading-tight">
            Support Quality <br/> Foundation Education
          </h3>
          <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
            Your recurring gift provides stable nutrition, uniforms, and books for learners in our community.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <Button asChild size="lg" variant="white" className="px-10 shadow-xl shadow-black/20">
            <Link to="/donate" className="flex items-center gap-2">
              <Heart className="size-4 fill-current" /> Donate Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10">
            <Link to="/sponsor">Sponsor a Child</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}