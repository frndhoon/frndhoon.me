import { useState } from 'react';

import type { Project } from '@/data/projects';

import { ProjectCard } from './project-card';
import { ProjectDetailModal } from './project-detail-modal';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
