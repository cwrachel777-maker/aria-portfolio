import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/project/ProjectCard';
import { aProjects } from '../data/projects';

export default function AProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A · 视觉体系与闭环管理
          </h2>
          <p className="text-gray-600">
            从标准制定到持续升级，联动跨部门驱动视觉价值落地
          </p>
        </div>

        <div className="space-y-4">
          {aProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/projects/a/${project.id.toLowerCase()}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
