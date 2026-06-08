import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee, { Services } from "./components/Services";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#f7f1e6] text-[#1a1512] min-h-screen relative">
      {/* Subtle global paper texture */}
      <div className="fixed inset-0 pointer-events-none paper-texture opacity-30 z-[1]" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
