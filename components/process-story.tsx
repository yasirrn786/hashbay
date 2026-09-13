'use client';
import { useEffect, useRef, useState } from 'react';
import { stages } from '@/lib/content';

export function ProcessStory() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.stage));});
    },{rootMargin:'-28% 0px -42% 0px',threshold:0});
    root.current?.querySelectorAll('[data-stage]').forEach(element=>observer.observe(element));
    return ()=>observer.disconnect();
  },[]);
  return <section className="process-story" ref={root} id="approach"><div className="shell process-layout"><div className="process-sticky"><p className="section-label">One connected approach</p><h2>From the first plan.<br/><span>To what&apos;s next.</span></h2><div className="process-stage-art" data-active={active} aria-hidden="true"><span className="process-number">0{active+1}</span><svg viewBox="0 0 480 300" fill="none">{[0,1,2,3].map(i=><g key={i} className={i===active?'stage-layer active':'stage-layer'} transform={`translate(240 ${62+i*48})`}><path d="M0-48L150 0 0 48-150 0Z"/><path d="M0-32L100 0 0 32-100 0Z"/><path d="M-150 0V18L0 66 150 18V0M0 48V66"/></g>)}</svg></div><nav className="stage-nav" aria-label="Our approach">{stages.map((stage,i)=><a href={`#stage-${i}`} key={stage.name} aria-current={active===i?'step':undefined}><span>0{i+1}</span>{stage.name}</a>)}</nav></div><div className="process-steps">{stages.map((stage,i)=><article id={`stage-${i}`} key={stage.name} data-stage={i} className={`process-step${active===i?' active':''}`}><div className="stage-overline"><span>0{i+1}</span><span>{stage.name}</span></div><h3 data-reveal>{stage.heading}</h3><p>{stage.text}</p><div className="stage-detail mono">{stage.detail}</div></article>)}</div></div></section>;
}
