import { useEffect, useRef } from 'react';

export function useHeroParallax() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const matchCardRef = useRef<HTMLDivElement | null>(null);
  const pillCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const visual = visualRef.current;
    const matchWrapper = matchCardRef.current;
    const pill = pillCardRef.current;
    if (!visual || !matchWrapper || !pill) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const card = matchWrapper.querySelector<HTMLElement>('.match-card');
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = visual.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotate(${-1 + x * 1}deg) translate(${x * 8}px, ${y * 8}px)`;
      pill.style.transform = `translate(${x * -10}px, ${y * -6}px)`;
    };

    const onLeave = () => {
      card.style.transform = '';
      pill.style.transform = '';
    };

    visual.addEventListener('mousemove', onMove);
    visual.addEventListener('mouseleave', onLeave);
    return () => {
      visual.removeEventListener('mousemove', onMove);
      visual.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return { visualRef, matchCardRef, pillCardRef };
}
