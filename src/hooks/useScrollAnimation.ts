import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  once?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -60px 0px', delay = 0, once = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        if (once && hasAnimated.current) return;
        hasAnimated.current = true;
        timerRef.current = setTimeout(() => setIsVisible(true), delay);
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once, delay]
  );

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(handleIntersection),
      { threshold, rootMargin }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleIntersection, threshold, rootMargin]);

  const ref = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  return { ref, isVisible };
}
