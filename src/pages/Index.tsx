import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <Hero className="bg-[#d7eed8]" />
      <About />
      <Skills className="bg-[#d7eed8]" />
      <Projects />
      <Achievements className="bg-[#d7eed8]" />
      <Contact />
    </div>;
};
export default Index;