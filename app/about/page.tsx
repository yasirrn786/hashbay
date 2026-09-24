import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header, Footer, ContactBand, PageHero, EditorialImage } from '@/components/site-shell';
import { DeliveryFramework } from '@/components/delivery-framework';
import { canonicalMetadata } from '@/lib/site';

export const metadata: Metadata = { title: 'About Hashbay', description: 'Meet Hashbay Technology Private Limited, a Bangalore-based IT manpower consultancy and professional services company.', ...canonicalMetadata('/about') };

export default function AboutPage() {
  return <><Header /><main id="main">
    <PageHero label="About Hashbay Technology" title="Technology is only part of the equation." description="The people applying it, the processes around it and the purpose behind it matter just as much." />
    <section className="about-story shell"><EditorialImage priority /><div><p className="eyebrow">Our company</p><h2>People. Processes.<br />Systems. Together.</h2><p className="lead">Hashbay Technology Private Limited is an IT manpower consultancy and professional services company headquartered in Bangalore, India.</p><p>We provide staffing, consulting and technology services to support project goals and operational efficiency. Our capabilities span IT infrastructure, cloud, cybersecurity, software development, maintenance, customer support and technical training.</p><p>With on-site and off-site professional services, Hashbay connects technical work with the people and support it needs.</p><Link className="text-link" href="/services">Explore our services <ArrowRight size={18} /></Link></div></section>
    <section className="priorities section"><div className="shell"><div className="section-intro"><p className="eyebrow">What guides the work</p><h2>A focus on the project.<br />A view of the whole environment.</h2></div><div className="priority-rows">{[['Project requirements', 'Align professional and technology services with the work that needs to be delivered.'], ['Operational efficiency', 'Consider how people, processes and systems work together in day-to-day operations.'], ['Ongoing attention', 'Connect implementation with maintenance, service desk and support capabilities.']].map(([title, text], index) => <div key={title}><span className="index">0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <DeliveryFramework />
    <ContactBand />
  </main><Footer /></>;
}
