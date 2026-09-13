'use client';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useRef, type ReactNode } from 'react';

export function CinematicHero({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLElement>(null);
  return <section ref={scene} className="cinematic-hero" onPointerMove={event => {
    if (event.pointerType !== 'mouse' || document.documentElement.dataset.motion === 'paused') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 12}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 8}px`);
  }} onPointerLeave={()=>{scene.current?.style.setProperty('--pointer-x','0px');scene.current?.style.setProperty('--pointer-y','0px');}}>
    {children}<div className="hero-shade" aria-hidden="true" />
    <div className="shell hero-content"><div className="hero-heading"><h1><span className="hero-line"><span>Technology</span></span><span className="hero-line"><span>that keeps</span></span><span className="hero-line"><span>business <em>moving.</em></span></span></h1></div>
      <div className="hero-bottom"><a className="hero-explore" href="#capabilities"><span className="round-icon"><ArrowDown size={21}/></span><span>Explore the<br/>connected possibilities</span></a><div className="hero-description"><p>From infrastructure and cloud to cybersecurity, software, and support. Hashbay helps organizations build, secure, and operate dependable technology environments.</p><Link className="text-link light" href="/contact">Let&apos;s talk technology <ArrowUpRight size={19}/></Link></div></div>
    </div>
    <div className="hero-node-label node-label-cloud" aria-hidden="true"><i/>Cloud</div><div className="hero-node-label node-label-security" aria-hidden="true"><i/>Security</div><div className="hero-node-label node-label-systems" aria-hidden="true"><i/>Infrastructure</div>
    <div className="hero-rail"><div className="shell">{['Infrastructure','Cloud','Security','Software','Support'].map((label,i)=><Link key={label} href={`/services#${['infrastructure','cloud','security','software','support'][i]}`}><span>0{i+1}</span>{label}<ArrowUpRight size={14}/></Link>)}</div></div>
  </section>;
}
