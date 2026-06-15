import { ReactNode, forwardRef, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-slide-up' | 'fade-in';
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  ({ children, className, animation = 'fade-in-slide-up', delay = 0, once = true, threshold = 0.1 }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold, delay, once });

    const animationClass: Record<string, string> = {
      'fade-in-slide-up': 'animate-fade-in-slide-up',
      'fade-in': 'animate-fade-in',
    };

    return (
      <div
        ref={(el) => {
          internalRef.current = el;
          scrollRef(el);
          if (typeof ref === 'function') ref(el);
          else if (ref) ref.current = el;
        }}
        className={cn('opacity-0', isVisible && animationClass[animation], className)}
      >
        {children}
      </div>
    );
  }
);

AnimateOnScroll.displayName = 'AnimateOnScroll';
