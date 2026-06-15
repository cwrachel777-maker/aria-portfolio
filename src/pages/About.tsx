import SectionWrapper from '../components/common/SectionWrapper';
import { AnimateOnScroll } from '../components/common/AnimateOnScroll';
import { careerTimeline, contactInfo } from '../data/projects';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <AnimateOnScroll animation="fade-in-slide-up" delay={0}>
          <div className="flex items-start gap-8 mb-12">
            <div className="relative">
              <span className="line-number text-xs text-gray-400">ABOUT</span>
              <div className="ray-line-section-v-short" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="circle-number">05</span>
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                关于我
              </h2>
              <div className="ray-line-section" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Career timeline */}
        <div className="mb-12">
          <div className="flex gap-8">
            {careerTimeline.map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-in-slide-up" delay={index * 200}>
                <div className="flex-1 pb-8 border-l border-gray-200 pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-black"></div>
                  <span className="text-lg font-semibold text-gray-900 tracking-wide block mb-3">
                    {item.period}
                  </span>
                  <h3 className="font-display text-lg font-light text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Contact info */}
        <AnimateOnScroll animation="fade-in" delay={600}>
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">
              CONTACT
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Phone size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wide mb-1">PHONE</p>
                  <p className="text-gray-900 text-sm">{contactInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Mail size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wide mb-1">EMAIL</p>
                  <p className="text-gray-900 text-sm">{contactInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <MessageCircle size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 tracking-wide mb-1">WECHAT</p>
                  <p className="text-gray-900 text-sm">{contactInfo.wechat}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
