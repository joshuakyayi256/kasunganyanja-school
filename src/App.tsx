import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";

export default function App() {
  // ✅ Safe Mode flag must be INSIDE the component
  const SAFE_MODE = import.meta.env.VITE_SAFE_MODE === "1";

  if (SAFE_MODE) {
    // ✅ This return is now inside the function — no parser error
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 px-4 py-10 text-white">
          <h1 className="text-2xl font-bold">Safe Mode</h1>
          <p className="mt-2">
            If you see this, React mounted fine. The bug is in a component we disabled.
          </p>
          <div className="mt-6">
            <Link to="/" className="underline">Go Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ✅ Normal app render
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
