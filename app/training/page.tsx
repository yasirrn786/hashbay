import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Header, Footer, ContactBand } from '@/components/site-shell';
import { ProgramExplorer } from '@/components/program-explorer';

export const metadata: Metadata = { title: 'Technology Training Programs', description: 'Explore Hashbay training in cybersecurity, data science, Azure, hardware and networking, web development and network security.' };

export default function TrainingPage() {
  return <><Header /><main id="main">
    <section className="training-hero"><div className="shell"><p className="eyebrow">Hashbay Training</p><h1>Build your understanding.<br /><span>Put it into practice.</span></h1><div className="training-hero-bottom"><p className="lead">Hands-on technical learning and soft-skill development, supporting academic and career growth.</p><a className="text-link" href="#programs">Find your program <ArrowDown size={18} /></a></div><div className="discipline-strip" aria-label="Training disciplines"><span>Infrastructure</span><span>Cloud</span><span>Development</span><span>Data</span><span>Security</span></div></div></section>
    <figure className="training-image-band"><div className="image-window"><Image src="/images/learning-illustration.webp" alt="AI-generated illustration of a laptop, notebook and networking equipment, not a Hashbay classroom." fill sizes="100vw" /></div><figcaption className="shell">AI-generated learning illustration. Not a Hashbay classroom.</figcaption></figure>
    <ProgramExplorer />
    <section className="training-enquiry section"><div className="shell editorial-grid"><div><p className="eyebrow">Your next step</p><h2>Start with your<br />learning goals.</h2></div><div><p className="lead">Talk to Hashbay about your background, the discipline you want to explore and the skills you want to develop.</p><p>Contact us for current availability, format, fees and program details. Certification preparation is not a certification or placement guarantee.</p><Link className="text-link" href="/contact">Discuss a training program <ArrowRight size={18} /></Link></div></div></section>
    <ContactBand />
  </main><Footer /></>;
}
