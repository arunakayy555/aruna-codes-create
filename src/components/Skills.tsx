import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "C", "C++", "JavaScript"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Database",
      skills: ["PostgreSQL"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Design Tools",
      skills: ["Canva", "Figma"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Other Tools",
      skills: ["Git", "Postman", "AI-based dev tools"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Adaptability", "Teamwork"],
      color: "bg-muted text-muted-foreground border-border"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className={category.color}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
