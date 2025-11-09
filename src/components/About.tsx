import { Card } from "@/components/ui/card";
const About = () => {
  return <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
        
        <Card className="p-8 shadow-lg">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a <span className="text-foreground font-semibold">Computer Science student from Chennai</span> with strong programming foundations in <span className="text-primary font-medium">Java, C, and C++</span>, and hands-on experience in frontend development using <span className="text-primary font-medium">JavaScript, HTML, and CSS</span>.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">I've built projects under hackathon pressure - from AI-powered tools to accessibility-focused platforms - that taught me teamwork, adaptability, and problem-solving under tight deadlines.<span className="text-foreground font-semibold">hackathon pressure</span> — from AI-powered tools to accessibility-focused platforms — that taught me teamwork, adaptability, and problem-solving under tight deadlines.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Beyond code, I'm a <span className="text-accent font-medium">violinist, designer, and public speaker</span>, which helps me bring creativity and clarity to my technical work.
          </p>
          
          <p className="text-lg text-foreground font-semibold">
            My goal is to craft thoughtful, functional, and accessible technology that makes a difference.
          </p>
        </Card>
      </div>
    </section>;
};
export default About;