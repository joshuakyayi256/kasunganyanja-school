import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyDonateBar from "./components/StickyDonateBar";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/admissions";
import Donate from "./pages/Donate";
import Sponsor from "./pages/Sponsor";
import Impact from "./pages/Impact";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/**
 * ScrollToTop ensures the window scrolls back to the top 
 * whenever the URL path changes. This is a key "premium" feel 
 * often missing in basic React apps.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <ScrollToTop />
      
      {/* Navigation - usually fixed or sticky */}
      <NavBar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer stays at the bottom due to flex-grow on main */}
      <Footer />

      {/* Mobile persistent CTA - usually fixed position with high z-index */}
      <StickyDonateBar />
    </div>
  );
}