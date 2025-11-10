import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight">
            Let's Connect
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto mb-12"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
          </p>
        </div>
        
        <div className="space-y-10 mb-16">
          <div className="border-l-2 border-primary/20 pl-8 py-2">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">Location</h3>
            <p className="text-base text-muted-foreground">Chennai, Tamil Nadu, India</p>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-8 py-2">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">Email</h3>
            <a 
              href="mailto:arunaksundar444@gmail.com" 
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              arunaksundar444@gmail.com
            </a>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-8 py-2">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/arunakalyan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              linkedin.com/in/arunakalyan
            </a>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => window.location.href = "mailto:arunaksundar444@gmail.com"} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base"
          >
            Send an Email
          </Button>
        </div>

        <footer className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-sm tracking-wider uppercase text-muted-foreground">
            © 2025 Arunalakshmi K
          </p>
        </footer>
      </div>
    </section>
  );
};
export default Contact;