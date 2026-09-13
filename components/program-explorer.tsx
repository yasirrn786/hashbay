'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus, Search } from 'lucide-react';
import { programs } from '@/lib/content';

export function ProgramExplorer() {
  const [category,setCategory]=useState('All programs');
  const [query,setQuery]=useState('');
  const filtered=programs.filter(p=>(category==='All programs'||p.category===category)&&`${p.name} ${p.topics.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <section className="program-section" id="programs"><div className="shell"><div className="section-label"><span>Find your next discipline</span><span>Hands-on learning</span></div><div className="program-toolbar"><div className="program-filters" role="group" aria-label="Filter programs">{['All programs','Infrastructure','Security','Development'].map(label=><button type="button" key={label} aria-pressed={category===label} onClick={()=>setCategory(label)}>{label}</button>)}</div><label className="program-search"><Search size={18} aria-hidden="true"/><span className="sr-only">Search programs</span><input type="search" placeholder="Search programs" value={query} onChange={event=>setQuery(event.target.value)}/></label></div><p className="sr-only" role="status">{filtered.length} programs found</p><div className="program-results">{filtered.map(program=><details className="program-row" key={program.name}><summary><span className="mono">0{programs.indexOf(program)+1}</span><h2>{program.name}</h2><span className="program-category mono">{program.category}</span><Plus className="expand-icon" size={24}/></summary><div className="program-detail"><p>{program.description}</p><ul>{program.topics.map(topic=><li key={topic}>{topic}</li>)}</ul><Link className="text-link" href="/contact">Enquire about this program <ArrowUpRight size={17}/></Link></div></details>)}{filtered.length===0?<div className="program-empty"><h2>No matching programs</h2><p>Try a different discipline or search term.</p><button className="text-link" onClick={()=>{setCategory('All programs');setQuery('');}}>Show all programs <ArrowUpRight size={17}/></button></div>:null}</div></div></section>;
}
