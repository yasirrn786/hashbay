'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cloud, Code2, Headphones, Network, ShieldCheck } from 'lucide-react';
import { capabilities } from '@/lib/content';

const icons=[Network,Cloud,ShieldCheck,Code2,Headphones];
export function CapabilityExplorer() {
  const [active,setActive]=useState(0);
  const tabs=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let frame=0;
    const sync=()=>{
      const i=capabilities.findIndex(item=>`#${item.id}`===location.hash);
      if(i<0)return;
      setActive(i);
      frame=requestAnimationFrame(()=>document.querySelector('.architecture-section')?.scrollIntoView({behavior:'instant',block:'start'}));
    };
    sync();
    addEventListener('hashchange',sync);
    return()=>{removeEventListener('hashchange',sync);cancelAnimationFrame(frame);};
  },[]);
  const select=(index:number)=>{setActive(index);history.replaceState(null,'',`#${capabilities[index].id}`);};
  const item=capabilities[active];
  const Icon=icons[active];
  return <section className="architecture-section"><div className="shell"><div className="section-label"><span>The capability architecture</span><span>Connected by design</span></div><div className="architecture-layout"><div role="tablist" aria-label="Technology capabilities" aria-orientation="vertical" className="architecture-tabs" ref={tabs}>{capabilities.map((capability,i)=><button key={capability.id} role="tab" id={`tab-${capability.id}`} type="button" aria-controls={`panel-${capability.id}`} aria-selected={active===i} tabIndex={active===i?0:-1} onClick={()=>select(i)} onKeyDown={event=>{let next=active;if(event.key==='ArrowDown'||event.key==='ArrowRight')next=(active+1)%capabilities.length;else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=(active+capabilities.length-1)%capabilities.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=capabilities.length-1;else return;event.preventDefault();select(next);(tabs.current?.children[next] as HTMLButtonElement)?.focus();}}><span className="mono">0{i+1}</span>{capability.name}<ArrowUpRight size={20}/></button>)}</div><div role="tabpanel" tabIndex={0} id={`panel-${item.id}`} aria-labelledby={`tab-${item.id}`} className="architecture-panel" key={item.id}><div className="architecture-art" aria-hidden="true"><div className="architecture-orbits"><i/><i/><i/></div><Icon size={60} strokeWidth={.8}/><span className="mono">{item.name}</span></div><div className="architecture-copy"><h2>{item.line}</h2><p>{item.description}</p><ul>{item.items.map(text=><li key={text}>{text}</li>)}</ul><Link className="text-link" href="/contact">Discuss {item.name.toLowerCase()} <ArrowUpRight size={17}/></Link></div></div></div></div></section>;
}
