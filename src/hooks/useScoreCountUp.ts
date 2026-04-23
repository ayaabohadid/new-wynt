import { useEffect, useRef } from 'react';

export function useScoreCountUp(target: number) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let current = 0;
    const percentNode = el.childNodes[0];
    if (percentNode && percentNode.nodeValue !== null) {
      percentNode.nodeValue = '0';
    }

    const step = () => {
      current = Math.min(target, current + Math.ceil((target - current) / 10) + 1);
      if (percentNode) percentNode.nodeValue = String(current);
      if (current < target) requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            step();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return ref;
}
