import { Link } from 'react-router-dom';
import { Target, Lightbulb, Box } from 'lucide-react';
import { AbilityBlock } from '../../types';

interface AbilityBlockCardProps {
  block: AbilityBlock;
}

const iconMap: Record<string, any> = {
  Target,
  Lightbulb,
  Box
};

export default function AbilityBlockCard({ block }: AbilityBlockCardProps) {
  const IconComponent = iconMap[block.icon] || Target;

  return (
    <Link
      to={block.route}
      className="group block p-8 bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-gray-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors">
          <IconComponent size={24} />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 leading-tight group-hover:text-black">
          {block.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {block.keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm text-gray-600 bg-gray-50 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>

      <div className="mt-6 text-sm font-medium text-gray-400 group-hover:text-black transition-colors">
        点击查看项目 →
      </div>
    </Link>
  );
}
