import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectDetailNav from './ProjectDetailNav';
import { AnimateOnScroll } from '../common/AnimateOnScroll';
import { Project } from '../../types';
import { projectImages } from '../../data/projectImages';

interface UnifiedProjectDetailProps {
  project: Project;
  backRoute: string;
}

export default function UnifiedProjectDetail({ project, backRoute }: UnifiedProjectDetailProps) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = project.pages.length;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentPageData = project.pages[currentPage - 1];
  const images = projectImages[project.id] || [];
  const hasMultipleImages = images.length > 1;

  const handleBack = () => {
    navigate(backRoute);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <ProjectDetailNav
        projectName={`${project.id} · ${project.title}`}
        currentPage={currentPage}
        totalPages={totalPages}
        onBack={handleBack}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Content section - 左右两栏布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - text content */}
          <AnimateOnScroll animation="fade-in-slide-up" delay={0} className="lg:col-span-4">
            {/* Project header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-400">{project.id}</span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-500">{project.role}</span>
              </div>
              <h1 className="font-display text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-sm text-gray-600">
                {project.subtitle}
              </p>
            </div>

            {/* Page title */}
            <h2 className="font-display text-lg font-light text-gray-900 mb-6">
              {currentPageData.title}
            </h2>

            {/* Background */}
            {currentPageData.background && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  项目背景
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentPageData.background}
                </p>
              </div>
            )}

            {/* Core actions */}
            {currentPageData.coreActions && currentPageData.coreActions.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  核心动作
                </h3>
                <ul className="space-y-1.5">
                  {currentPageData.coreActions.map((action, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-gray-400 inline-block mr-2"></span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Results */}
            {currentPageData.results && currentPageData.results.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  成果
                </h3>
                <ul className="space-y-1.5">
                  {currentPageData.results.map((result, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      <span className="w-1 h-1 rounded-full bg-black inline-block mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </AnimateOnScroll>

          {/* Right - image with scroll */}
          <AnimateOnScroll animation="fade-in" delay={200} className="lg:col-span-8">
            {images.length > 0 ? (
              <div>
                <div
                  ref={scrollContainerRef}
                  className="aspect-[4/3] overflow-x-auto flex gap-4 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full snap-center"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                {hasMultipleImages && (
                  <p className="text-xs text-gray-400 mt-3 text-right">
                    右滑查看更多
                  </p>
                )}
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">图片</span>
              </div>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
