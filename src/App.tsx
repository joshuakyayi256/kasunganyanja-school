import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import StickyDonateBar from "./components/StickyDonateBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Donate from "./pages/Donate";
import Sponsor from "./pages/Sponsor";
import Impact from "./pages/Impact";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
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
      <StickyDonateBar />   {/* mobile persistent CTA */}
      <Footer />
    </>
  );
}
