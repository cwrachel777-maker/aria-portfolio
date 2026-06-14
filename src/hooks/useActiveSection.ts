import { useState, useEffect, useRef } from 'react';
import { Section } from '../types';

export function useActiveSection(sectionIds: Section[]) {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Find the entry with the highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) => {
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });

          const sectionId = mostVisible.target.id as Section;
          if (sectionIds.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: [0.2, 0.5],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds]);

  return activeSection;
}

export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return scrollToSection;
}
