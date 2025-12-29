// src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for does not exist. Return to Kasunganyanja Parents Primary School home." 
        path="/404" 
      />
      <div className="max-w-md text-center">
        <h1 className="text-9xl font-black text-navy/10 leading-none">404</h1>
        <h2 className="text-3xl font-black text-navy mt-[-2rem] mb-4">Lost in the playground?</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          The page you're looking for might have been moved, renamed, or perhaps it never existed in our records.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild color="navy">
            <Link to="/" className="flex items-center gap-2">
              <Home className="size-4" /> Go Home
            </Link>
          </Button>
          <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center gap-2">
            <ArrowLeft className="size-4" /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}