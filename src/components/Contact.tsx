import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
        
        <Card className="p-8 shadow-lg rounded-md bg-gray-50">
          <p className="text-center text-lg mb-8 text-stone-950">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:arunaksundar444@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  arunaksundar444@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Linkedin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/arunakalyan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/arunakalyan
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <Button size="lg" onClick={() => window.location.href = "mailto:arunaksundar444@gmail.com"} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Send me an Email
            </Button>
          </div>
        </Card>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Arunalakshmi K. All rights reserved.</p>
        </footer>
      </div>
    </section>;
};
export default Contact;