import Button from "./ui/Button";
import { Link } from "react-router-dom";
import Card from "./ui/Card";

export default function CTAWide() {
  return (
    <Card className="bg-skyline border-navy/10">
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
            Support Quality Education
          </h3>
          <p className="mt-2 text-black/80">
            Sponsor a child or contribute to meals, uniforms, and learning
            materials. Your gift changes lives.
          </p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <Button asChild size="lg">
            <Link to="/donate">Donate Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Sponsor a Child</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
