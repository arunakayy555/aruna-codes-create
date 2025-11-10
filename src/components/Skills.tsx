const Skills = ({ className }: { className?: string }) => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "C", "C++", "JavaScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "React"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL"]
    },
    {
      title: "Design Tools",
      skills: ["Canva", "Figma"]
    },
    {
      title: "Other Tools",
      skills: ["Git", "Postman", "AI-based dev tools"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Adaptability", "Teamwork"]
    }
  ];

  return (
    <section id="skills" className={`py-32 px-6 md:px-8 ${className || ''}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight">
            Expertise
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="border-l-2 border-primary/20 pl-8 py-2">
              <h3 className="font-serif text-2xl font-medium mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-base text-muted-foreground bg-secondary/30 px-4 py-2 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
