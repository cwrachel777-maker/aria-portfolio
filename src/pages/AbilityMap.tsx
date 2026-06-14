import { useState, useEffect } from 'react';
import SectionWrapper from '../components/common/SectionWrapper';
import { useNavigate } from 'react-router-dom';

const abilityBlocks = [
  {
    id: 'visual-system',
    title: '视觉体系与闭环管理',
    keywords: ['陈列标准与SOP搭建', '巡店检核与考核闭环', '培训带教与梯队培养'],
    route: '/projects/a',
  },
  {
    id: 'creative-planning',
    title: '创意策划与动态叙事',
    keywords: ['视觉主题策划', '市场趋势调研', '跨部门协同'],
    route: '/projects/b',
  },
  {
    id: 'space-design',
    title: '空间设计与展陈实践',
    keywords: ['空间规划与动线设计', '展陈设计与道具开发', '品牌调性转译空间视觉'],
    route: '/projects/c',
  }
];

export default function AbilityMap() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBlockClick = (route: string) => {
    navigate(route);
  };

  const circleRadius = isDesktop ? 160 : 90;
  const angle = (index: number) => (index * 120 - 90) * (Math.PI / 180);
  const centerOffset = circleRadius * 0.92;

  return (
    <SectionWrapper id="ability">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-start gap-8 mb-16">
          <span className="line-number text-xs text-gray-400">ABILITY</span>
          
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="circle-number">02</span>
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              能力地图
            </h2>
            <p className="text-gray-600">
              三大核心能力，驱动视觉价值落地
            </p>
          </div>
        </div>

        <div className={`relative flex items-center justify-center ${isDesktop ? 'min-h-[700px]' : 'min-h-[500px]'}`} style={isDesktop ? { transform: 'translateY(-240px)' } : {}}>
          <div 
            className="absolute rounded-full border border-gray-300 border-dashed"
            style={{ width: circleRadius * 4, height: circleRadius * 4 }}
          ></div>

          <div 
            className="absolute rounded-full border border-gray-200"
            style={{ width: circleRadius * 3.2, height: circleRadius * 3.2 }}
          ></div>

          <div 
            className="absolute rounded-full border border-gray-200 border-dashed"
            style={{ width: circleRadius * 2.4, height: circleRadius * 2.4 }}
          ></div>

          <div 
            className="absolute rounded-full border border-gray-200"
            style={{ width: circleRadius * 1.2, height: circleRadius * 1.2 }}
          ></div>

          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <div
              key={deg}
              className={`absolute ${i % 2 === 0 ? 'border-l border-gray-200' : 'border-l border-gray-200 border-dashed'}`}
              style={{
                transform: `rotate(${deg}deg)`,
                transformOrigin: 'bottom center',
                bottom: `calc(50% - ${circleRadius * 0.6}px)`,
                left: '50%',
                marginLeft: '-0.5px',
                height: isDesktop ? '400px' : '250px'
              }}
            />
          ))}

          {abilityBlocks.map((block, index) => {
            const rad = angle(index);
            const x = Math.cos(rad) * centerOffset;
            const y = Math.sin(rad) * centerOffset;

            return (
              <div
                key={block.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  left: `calc(50% + ${x}px)`, 
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <button
                  onClick={() => handleBlockClick(block.route)}
                  className={`group rounded-full bg-gray-200/70 border border-gray-300 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isDesktop ? 'w-80 h-80' : 'w-48 h-48'
                  }`}
                >
                  <h3 className={`font-display font-semibold text-gray-900 mb-2 lg:mb-6 text-center px-4 lg:px-8 ${
                    isDesktop ? 'text-xl' : 'text-sm'
                  }`}>
                    {block.title}
                  </h3>
                  
                  <div className={`flex flex-col items-center gap-1 lg:gap-2 ${isDesktop ? '' : 'px-2'}`}>
                    {block.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className={`text-gray-600 text-center ${isDesktop ? 'text-xs px-4' : 'text-[10px] px-1'}`}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
