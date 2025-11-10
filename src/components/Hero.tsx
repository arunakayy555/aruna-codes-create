import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = ({ className }: { className?: string }) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center pt-20 px-6 md:px-8 ${className || ''}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 tracking-tight">
              Arunalakshmi K
            </h1>
            <div className="h-px w-32 bg-primary/30 mx-auto mb-8"></div>
          </div>
          
          <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed max-w-3xl mx-auto italic">
            A Computer Science undergraduate passionate about building practical, human-centred tech solutions
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I love challenges that blend logic, creativity, and real-world impact - from efficient algorithms to intuitive user experiences!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base"
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
              className="px-10 py-6 text-base border-primary/30 hover:bg-primary/5"
            >
              View Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;