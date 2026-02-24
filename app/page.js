import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import Navbar from "./components/Navbar";
import ApproachSection from "./components/ApproachSection";
import TrustedBrands from "./components/TrustedBrands";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Navbar />
      </div>

      {/* Main Content with padding for fixed navbar */}
        <Hero />
        <AboutSection />
        <ProjectShowcase />
        <ApproachSection />
        <TrustedBrands />
        <ContactSection />
        <Footer />
      {/* Bottom Fixed Navbar */}
    </div>
  );
}
