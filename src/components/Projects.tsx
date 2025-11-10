import ProjectCard from "./ProjectCard";
import drugCheckerImg from "@/assets/drug-checker.jpg";
import careerCompassImg from "@/assets/career-compass.jpg";
import farmerDaoImg from "@/assets/farmer-dao.jpg";
import typingToolImg from "@/assets/typing-tool.jpg";

const Projects = () => {
  const projects = [
    {
      icon: "💊",
      title: "Drug Interaction Checker",
      description: [
        "Node.js + Express + Next.js web app that identifies potential drug interactions.",
        "Built RESTful APIs using Neon PostgreSQL.",
        "Designed a clean, intuitive frontend showing interaction severity and description.",
        "Implemented color-coded UI for risk levels."
      ],
      technologies: ["Node.js", "Express", "Next.js", "PostgreSQL"],
      image: drugCheckerImg
    },
    {
      icon: "🎯",
      title: "Career Compass",
      description: [
        "Solo project built in a 24-hour AI-only hackathon.",
        "AI-powered job search assistant with six modules for career discovery and skill-gap analysis.",
        "Designed workflows, prompts, and UI for a complete functional prototype."
      ],
      technologies: ["AI", "Web Development", "UX Design"],
      image: careerCompassImg
    },
    {
      icon: "🌾",
      title: "Farmer DAO Platform",
      description: [
        "Team project during a 48-hour hackathon.",
        "Built a React-based platform for farmers to propose, vote, and track decisions transparently.",
        "Developed responsive UI with custom CSS for accessibility."
      ],
      technologies: ["React", "CSS", "Web3"],
      image: farmerDaoImg
    },
    {
      icon: "⌨️",
      title: "Typing Lessons Tool",
      description: [
        "Typing tool with customizable high-contrast themes.",
        "Non-colour visual cues to support colour-blind users.",
        "Focus on accessibility and inclusive design."
      ],
      technologies: ["JavaScript", "HTML", "CSS", "Accessibility"],
      image: typingToolImg
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6 tracking-tight">
            Selected Work
          </h2>
          <div className="h-px w-24 bg-primary/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
