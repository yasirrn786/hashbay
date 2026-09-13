'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MotionSystem() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    const stop = () => { if (preference.matches) animations.forEach(animation => animation.finish()); };
    preference.addEventListener('change', stop);
    // Content is visible by default, including without JavaScript or after navigation.
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches) return;
        const animation = entry.target.animate([
          { opacity: 0.8, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 440, easing: 'cubic-bezier(.22,.61,.36,1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener('change', stop); };
  }, [pathname]);
  return null;
}
