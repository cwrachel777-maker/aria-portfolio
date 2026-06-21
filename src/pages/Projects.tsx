import SectionWrapper from '../components/common/SectionWrapper';
import { AnimateOnScroll } from '../components/common/AnimateOnScroll';
import { useNavigate } from 'react-router-dom';

// 导入项目封面图
import a1Cover from '../assets/part3-a1-loop-cover.jpg';
import a2Cover from '../assets/part3-a2-training-cover.jpg';
import a3Cover from '../assets/part3-a3-upgrade-cover.jpg';
import a4Cover from '../assets/part3-a4-training-cover.jpg';
import b1Cover from '../assets/part3-b1-event-cover.jpg';
import b2Cover from '../assets/part3-b2-liannian-cover.jpg';
import b3Cover from '../assets/part3-market-research-cover.jpg';
import c1Cover from '../assets/part3-c1-city-lake-cover.jpg';
import c2Cover from '../assets/part3-cloud-store-cover.jpg';
import c3Cover from '../assets/part3-c3-super-light-cover.jpg';
import c4Cover from '../assets/part3-c4-narrative-display-cover.jpg';

// 第一页项目（A板块 + B板块）
const projectsPage1 = [
  { id: 'A1', title: '品牌专卖店形象规范指南', category: 'A', route: '/projects/a/a1', cover: a1Cover },
  { id: 'A2', title: '波段上新陈列指引', category: 'A', route: '/projects/a/a2', cover: a2Cover },
  { id: 'A3', title: '季度陈列升级与跨部门协作', category: 'A', route: '/projects/a/a3', cover: a3Cover },
  { id: 'A4', title: '分层培训体系', category: 'A', route: '/projects/a/a4', cover: a4Cover },
  { id: 'B1', title: '上海旗舰店月度沙龙视觉企划', category: 'B', route: '/projects/b/b1', cover: b1Cover },
  { id: 'B2', title: '季度橱窗视觉企划', category: 'B', route: '/projects/b/b2', cover: b2Cover },
  { id: 'B3', title: '市场趋势调研', category: 'B', route: '/projects/b/b3', cover: b3Cover },
];

// 第二页项目（C板块）
const projectsPage2 = [
  { id: 'C1', title: 'City Lake诗意场域构建', category: 'C', route: '/projects/c/c1', cover: c1Cover },
  { id: 'C2', title: '云朵商店未来商店叙事', category: 'C', route: '/projects/c/c2', cover: c2Cover },
  { id: 'C3', title: 'Super Light光之容器', category: 'C', route: '/projects/c/c3', cover: c3Cover },
  { id: 'C4', title: '叙事性陈列兴趣起点', category: 'C', route: '/projects/c/c4', cover: c4Cover },
];

// 所有项目（用于导航）
const allProjects = [
  ...projectsPage1,
  ...projectsPage2,
];

function ProjectSection({ title, subtitle, projects, startIndex }: { 
  title: string; 
  subtitle: string; 
  projects: typeof projectsPage1;
  startIndex: number;
}) {
  const navigate = useNavigate();

  return (
    <div className="mb-16">
      <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-4xl font-light text-gray-300">{title}</span>
          <span className="text-sm text-gray-500 tracking-wide">{subtitle}</span>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} animation="fade-in-slide-up" delay={(startIndex + index) * 100}>
            <button
              onClick={() => navigate(project.route)}
              className="group cursor-pointer text-left"
            >
              <div className="aspect-square overflow-hidden mb-3">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-sm text-gray-700 group-hover:text-black transition-colors">
                {project.title}
              </div>
            </button>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}

export { allProjects };

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
          <div className="flex items-start gap-8 mb-16">
            <span className="line-number text-xs text-gray-400">PROJECTS</span>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="circle-number">03</span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                项目经历
              </h2>
              <p className="text-gray-600">
                从标准制定到创意执行，从培训体系到空间设计
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* A板块 */}
        <ProjectSection 
          title="A" 
          subtitle="VISUAL SYSTEM" 
          projects={projectsPage1.filter(p => p.category === 'A')} 
          startIndex={0}
        />

        {/* B板块 */}
        <ProjectSection 
          title="B" 
          subtitle="CREATIVE PLANNING" 
          projects={projectsPage1.filter(p => p.category === 'B')} 
          startIndex={4}
        />
      </div>
    </SectionWrapper>
  );
}

// 导出第二页作为独立组件
export function ProjectsPage2() {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="projects-page2">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
          <div className="flex items-start gap-8 mb-16">
            <span className="line-number text-xs text-gray-400">PROJECTS</span>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="circle-number">03</span>
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                项目经历
              </h2>
              <p className="text-gray-600">
                从标准制定到创意执行，从培训体系到空间设计
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* C板块 */}
        <ProjectSection 
          title="C" 
          subtitle="SPACE DESIGN" 
          projects={projectsPage2} 
          startIndex={0}
        />

        {/* PDF备注 */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 leading-relaxed">
            作品集原为网页版，PDF静态导出无法呈现细节。若时间允许，可扫描简历右上方二维码或点击链接查看网页版，效果更佳。
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
