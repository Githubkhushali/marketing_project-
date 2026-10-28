import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Work from "./components/Work";
import DesignGallery from "./components/DesignGallery";
import MarketingApproach from "./components/MarketingApproach";
import Toolkit from "./components/Toolkit";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-charcoal text-offwhite">
      <Nav />
      <main>
        <Hero />
        <Work />
        <DesignGallery />
        <About />
        <Expertise />
        <Experience />
        <MarketingApproach />
        <Toolkit />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
