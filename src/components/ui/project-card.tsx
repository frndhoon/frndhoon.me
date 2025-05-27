import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <button
      className="border-border rounded-lg border p-6 text-left transition-shadow hover:shadow-sm"
      onClick={onClick}
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-heading text-lg font-medium">{project.title}</h3>
        <Badge>{project.status}</Badge>
      </div>

      <p className="text-second mb-4 line-clamp-2">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-second rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </button>
  );
};
