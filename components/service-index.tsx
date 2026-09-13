'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { capabilities } from '@/lib/content';

export function ServiceIndex() {
  const [active, setActive] = useState<string>(capabilities[0].id);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const current = [...capabilities].reverse().find(service => (document.getElementById(service.id)?.getBoundingClientRect().top ?? Infinity) <= 180);
      setActive(current?.id ?? capabilities[0].id);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    return () => { removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);
  return <aside className="service-index"><p className="eyebrow">Explore our capabilities</p><nav aria-label="On this page">{capabilities.map((service, index) => <a key={service.id} href={`#${service.id}`} aria-current={active === service.id ? 'location' : undefined}><span className="index">0{index + 1}</span>{service.name}<ArrowUpRight size={15} /></a>)}</nav><Link className="text-link" href="/training">Technology training <ArrowRight size={16} /></Link></aside>;
}
