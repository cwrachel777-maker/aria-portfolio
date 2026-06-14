import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-gray-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {project.subtitle}
          </p>
        </div>
        <div className="ml-4 text-xs text-gray-400 whitespace-nowrap">
          {project.id}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {project.role}
        </span>
        {project.duration && (
          <span className="text-xs text-gray-400">
            {project.duration}
          </span>
        )}
      </div>
    </button>
  );
}
