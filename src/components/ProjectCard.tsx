import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <span>{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-2 mb-4 flex-1">
          {description.map((point, index) => (
            <CardDescription key={index} className="text-sm leading-relaxed">
              → {point}
            </CardDescription>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
