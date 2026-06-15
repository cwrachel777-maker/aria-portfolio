import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/project/ProjectCard';
import { AnimateOnScroll } from '../components/common/AnimateOnScroll';
import { cProjects } from '../data/projects';

export default function CProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              C · 空间设计与展陈实践
            </h2>
            <p className="text-gray-600">
              从概念策划到空间建模，掌握零售空间与展陈落地的全流程
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {cProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="fade-in-slide-up" delay={index * 100}>
              <ProjectCard
                project={project}
                onClick={() => navigate(`/projects/c/${project.id.toLowerCase()}`)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
