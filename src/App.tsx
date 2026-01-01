// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./components/SEO";

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
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

/**
 * ScrollToTop ensures the window scrolls back to the top 
 * whenever the URL path changes. This is a key "premium" feel.
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
    <div className="flex flex-col min-h-screen bg-white font-kumbh">
      <ScrollToTop />
      
      {/* 1. NAVIGATION */}
      <NavBar />

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <SEO 
                title="Home" 
                description="Welcome to Kasunganyanja Parents Primary School. A licensed mixed day P1–P7 school in Bunyangabu, Uganda focusing on transformation and success." 
                path="/" 
              />
              <Home />
            </>
          } />

          <Route path="/about" element={
            <>
              <SEO 
                title="About Our School" 
                description="Learn about the history, leadership, mission, and vision of Kasunganyanja Parents Primary School founded by Dr. Tusiime Ramathan Hamza." 
                path="/about" 
              />
              <About />
            </>
          } />

          <Route path="/academics" element={
            <>
              <SEO 
                title="Academics & Curriculum" 
                description="Explore our primary education curriculum, daily schedules, and the diverse clubs available for our learners." 
                path="/academics" 
              />
              <Academics />
            </>
          } />

          <Route path="/admissions" element={
            <>
              <SEO 
                title="Admissions & Enrollment" 
                description="Join our community. View enrollment requirements, fee structures, and the step-by-step admission process for P1–P7 learners." 
                path="/admissions" 
              />
              <Admissions />
            </>
          } />

          <Route path="/donate" element={
            <>
              <SEO 
                title="Support Our Mission" 
                description="Donate via Mobile Money to support school infrastructure, student meals, and learning materials." 
                path="/donate" 
              />
              <Donate />
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
<Route path="/terms" element={<Terms />} />

          <Route path="/sponsor" element={
            <>
              <SEO 
                title="Sponsor a Child" 
                description="Provide steady monthly support for a learner in need. Your sponsorship covers meals, books, and tuition." 
                path="/sponsor" 
              />
              <Sponsor />
            </>
          } />

          <Route path="/impact" element={
            <>
              <SEO 
                title="Impact & Transparency" 
                description="View our termly financial audits and manual reconciliation reports. We are committed to 100% transparency in fund allocation." 
                path="/impact" 
              />
              <Impact />
            </>
          } />

          <Route path="/news" element={
            <>
              <SEO 
                title="News & Events" 
                description="Stay updated with the latest stories from our classrooms and national education news in Uganda." 
                path="/news" 
              />
              <News />
            </>
          } />

          <Route path="/gallery" element={
            <>
              <SEO 
                title="School Gallery" 
                description="A visual journey through our campus life, extracurricular activities, and community celebrations." 
                path="/gallery" 
              />
              <Gallery />
            </>
          } />

          <Route path="/contact" element={
            <>
              <SEO 
                title="Contact Us" 
                description="Get in touch with the Kasunganyanja Parents Primary School administration. Reach us via phone, email, or visit our campus." 
                path="/contact" 
              />
              <Contact />
            </>
          } />

          {/* 3. 404 CATCH-ALL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 4. FOOTER */}
      <Footer />

      {/* 5. PERSISTENT CTA */}
      <StickyDonateBar />
    </div>
  );
}