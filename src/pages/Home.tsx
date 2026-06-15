import SectionWrapper from '../components/common/SectionWrapper';
import { AnimateOnScroll } from '../components/common/AnimateOnScroll';
import profileImage from '../assets/part1-profile.jpg';

export default function Home() {
  return (
    <SectionWrapper id="home">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center min-h-[80vh]">
          {/* Photo */}
          <AnimateOnScroll animation="fade-in" delay={0} className="lg:col-span-5 order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={profileImage}
                alt="Aria Cao"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll animation="fade-in-slide-up" delay={200} className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-start gap-8">
              <span className="line-number text-xs text-gray-400">ARIA CAO</span>

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <span className="circle-number">01</span>
                </div>

                {/* 第一优先级 */}
                <h1 className="font-display text-4xl lg:text-6xl font-light text-gray-900 mb-8 tracking-wide leading-tight flex flex-wrap items-baseline gap-x-3">
                  <span>空间设计</span>
                  <span className="text-gray-400">×</span>
                  <span>服装陈列</span>
                  <span className="text-2xl lg:text-4xl text-gray-500">复合经验</span>
                </h1>

                {/* 第二优先级 */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="text-gray-600">四川大学</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600">空间设计 </span>
                  <span className="text-xl font-semibold text-gray-900">2</span>
                  <span className="text-gray-600">年</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600">服装陈列 </span>
                  <span className="text-xl font-semibold text-gray-900">3</span>
                  <span className="text-gray-600">年</span>
                </div>

                {/* 第三优先级 */}
                <div className="space-y-3 mb-8 text-gray-600 leading-relaxed">
                  <p>5年+空间设计与服装陈列复合经验。</p>
                  <p>兼具乙方落地与甲方管理双重视角。</p>
                  <p>擅长从0到1搭建全国陈列标准。</p>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-400 tracking-wide">
                    SCROLL DOWN TO EXPLORE
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>
  );
}
