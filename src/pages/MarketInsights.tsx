import SectionWrapper from '../components/common/SectionWrapper';
import { ExternalLink } from 'lucide-react';
import { xiaohongshuProfile } from '../data/projects';

// 导入小红书缩略图
import chuangChenImg from '../assets/part4-display-observation.jpg';
import chuChuangImg from '../assets/part4-window-display.jpg';
import kongJianImg from '../assets/part4-space-narrative.jpg';
import lingGanImg from '../assets/part4-inspiration-fragments.jpg';

const insights = [
  { category: '陈列观察', image: chuangChenImg, link: xiaohongshuProfile },
  { category: '橱窗陈列', image: chuChuangImg, link: xiaohongshuProfile },
  { category: '空间叙事', image: kongJianImg, link: xiaohongshuProfile },
  { category: '灵感碎片', image: lingGanImg, link: xiaohongshuProfile },
];

export default function MarketInsights() {
  return (
    <SectionWrapper id="insights">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-start gap-8 mb-16">
          <span className="line-number text-xs text-gray-400">INSIGHTS</span>
          
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="circle-number">04</span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              市场洞察
            </h2>
            <p className="text-gray-600 max-w-2xl">
              持续关注行业趋势，并将日常观察与思考记录于小红书，以此保持市场敏锐度。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, index) => (
            <a
              key={index}
              href={insight.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-[3/4] overflow-hidden mb-3">
                <img 
                  src={insight.image} 
                  alt={insight.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {insight.category}
                </span>
                <ExternalLink size={14} className="text-gray-400" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <a
            href={xiaohongshuProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors tracking-wide"
          >
            <span>FOLLOW MY ACCOUNT</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
