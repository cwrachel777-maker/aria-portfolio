import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/project/ProjectCard';
import { AnimateOnScroll } from '../components/common/AnimateOnScroll';
import { bProjects } from '../data/projects';

export default function BProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              B · 创意策划与动态叙事
            </h2>
            <p className="text-gray-600">
              以上海旗舰店为核心，通过月度沙龙视觉企划，打造持续变化的沉浸式品牌体验
            </p>
            <div className="ray-line-category" />
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {bProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="fade-in-slide-up" delay={index * 100}>
              <ProjectCard
                project={project}
                onClick={() => navigate(`/projects/b/${project.id.toLowerCase()}`)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
