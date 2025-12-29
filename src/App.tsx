import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "./components/SEO"; // SEO wrapper

// Component Imports
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyDonateBar from "./components/StickyDonateBar";

// Page Imports
import Home from "./pages/Home";
// ... (other imports)
import NotFound from "./pages/NotFound"; 
import Impact from "./pages/Impact";
import Admissions from "./pages/admissions";

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
      <NavBar />

      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={
            <>
              <SEO title="Home" description="Welcome to Kasunganyanja Parents Primary School. Nurturing excellence and success in Bunyangabu, Uganda." path="/" />
              <Home />
            </>
          } />
          
          <Route path="/admissions" element={
            <>
              <SEO title="Admissions" description="Apply for P1-P7 enrollment at Kasunganyanja PPS. View requirements and fees." path="/admissions" />
              <Admissions />
            </>
          } />

          {/* ... Add SEO wrappers to other routes similarly ... */}

          <Route path="/impact" element={
            <>
              <SEO title="Our Impact" description="Transparency reports and termly financial audits of donor contributions." path="/impact" />
              <Impact />
            </>
          } />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <StickyDonateBar />
    </div>
  );
}