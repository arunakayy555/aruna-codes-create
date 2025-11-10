import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
  image: string;
  icon: string;
}

const ProjectCard = ({ title, description, technologies, image, icon }: ProjectCardProps) => {
  return (
    <div className="group">
      <div className="overflow-hidden mb-6 aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="font-serif text-3xl font-medium text-foreground">
          {title}
        </h3>
        
        <div className="space-y-2">
          {description.map((point, index) => (
            <p key={index} className="text-base text-muted-foreground leading-relaxed">
              {point}
            </p>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
