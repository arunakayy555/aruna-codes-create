import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <p className="text-primary text-sm font-medium mb-2">Hi there! I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Arunalakshmi K
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">A Computer Science undergraduate passionate about building practical, human-centred tech solutions.<span className="text-foreground font-semibold">Computer Science undergraduate</span> passionate about building practical, human-centred tech solutions.
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">I love challenges that blend logic, creativity, and real-world impact - from writing efficient algorithms to designing intuitive user experiences. Currently deepening my expertise in full-stack web development and Data Structures & Algorithms, while exploring how technology can simplify everyday problems.<span className="text-primary font-medium">full-stack web development</span> and <span className="text-accent font-medium">Data Structures & Algorithms</span>, while exploring how technology can simplify everyday problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth"
        })} className="px-8">
            View Projects
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;