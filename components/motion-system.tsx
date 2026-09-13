'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Pause, Play } from 'lucide-react';

export function MotionSystem() {
  const pathname = usePathname();
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const animations: Animation[] = [];
    const syncMotion = () => { const reduced = paused || preference.matches; root.dataset.motion = reduced ? 'paused' : 'running'; if (reduced) animations.forEach(animation => animation.finish()); };
    syncMotion(); preference.addEventListener('change', syncMotion);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (root.dataset.motion === 'paused') return;
        animations.push(entry.target.animate([{ opacity: .15, transform: 'translateY(32px)', clipPath: 'inset(0 0 10% 0)' }, { opacity: 1, transform: 'translateY(0)', clipPath: 'inset(0 0 0 0)' }], { duration: 850, easing: 'cubic-bezier(.2,.65,.25,1)', fill: 'none' }));
      });
    }, { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
    let frame = 0;
    const updateScroll = () => { frame = 0; root.classList.toggle('is-scrolled', scrollY > 40); const distance = root.scrollHeight - innerHeight; root.style.setProperty('--page-progress', String(distance > 0 ? scrollY / distance : 0)); };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
    updateScroll(); addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener('change', syncMotion); removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, [pathname, paused]);
  return <button type="button" className="motion-toggle" aria-label={paused ? 'Resume animations' : 'Pause animations'} title={paused ? 'Resume animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>;
}
