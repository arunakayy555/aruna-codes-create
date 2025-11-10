import { Card } from "@/components/ui/card";
const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Elegant header with serif typography */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-6xl md:text-7xl font-semibold text-foreground mb-6 tracking-tight">
            Arunalakshmi K
          </h2>
          <div className="h-px w-32 bg-primary/30 mx-auto mb-8"></div>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
            Computer Science Undergraduate
          </p>
        </div>

        {/* Content with editorial spacing */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-foreground/90 leading-loose tracking-wide">
            I'm passionate about building practical, human-centred tech solutions — the kind that actually work for real people in real contexts.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-loose tracking-wide">
            I enjoy challenges that blend logic, creativity, and tangible impact. From writing efficient algorithms to designing intuitive user experiences, I'm drawn to problems that require both technical rigor and thoughtful design.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-loose tracking-wide">
            Currently, I'm deepening my expertise in full-stack web development and Data Structures & Algorithms, with a focus on using technology to simplify everyday life.
          </p>
        </div>

        {/* Signature element */}
        <div className="mt-20 text-center">
          <div className="inline-block border-t border-primary/20 pt-6">
            <p className="font-serif text-sm text-muted-foreground tracking-widest uppercase">
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;