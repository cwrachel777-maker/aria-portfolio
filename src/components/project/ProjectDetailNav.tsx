import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailNavProps {
  projectName: string;
  currentPage: number;
  totalPages: number;
  onBack: () => void;
  onPrevPage?: () => void;
  onNextPage?: () => void;
}

export default function ProjectDetailNav({
  projectName,
  currentPage,
  totalPages,
  onBack,
  onPrevPage,
  onNextPage
}: ProjectDetailNavProps) {
  const showPagination = totalPages > 1;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">返回</span>
        </button>

        {/* Project name */}
        <div className="text-sm font-medium text-gray-900 truncate max-w-md">
          {projectName}
        </div>

        {/* Pagination */}
        {showPagination && (
          <div className="flex items-center gap-4">
            <button
              onClick={onPrevPage}
              disabled={currentPage === 1}
              className="p-2 text-gray-600 hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-medium text-gray-900">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={onNextPage}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-600 hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Empty space for layout balance */}
        {!showPagination && <div className="w-20"></div>}
      </div>
    </div>
  );
}
