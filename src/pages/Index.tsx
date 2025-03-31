import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Review from "@/components/Review";
import Experience from "@/components/Experience"; //ye baaki h//
import Certifications from "@/components/Certifications";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Review/>
      <Contact />
      <BackgroundBeams/>
    </div>
  );
};

export default Index;
