import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { Header, Footer } from '@/components/site-shell';
import { CopyPhone } from '@/components/copy-phone';

export const metadata: Metadata = { title: 'Contact Hashbay', description: 'Call Hashbay Technology Private Limited on +91 7899347270 to discuss IT services, professional services or training requirements.' };

export default function ContactPage() {
  return <><Header /><main id="main">
    <section className="contact-page"><div className="shell"><p className="eyebrow">Contact Hashbay</p><h1>Let&apos;s start with<br />what you need.</h1><div className="contact-layout"><div><p className="lead">A new technology project, support for an existing environment, or the next step in your learning.</p><p>Tell us about your requirements and the work ahead.</p></div><div className="contact-direct"><div className="contact-call-label"><Phone size={19} /><span>Call Hashbay</span></div><a className="phone-link" href="tel:+917899347270">+91 7899347270 <ArrowUpRight size={30} /></a><CopyPhone /><div className="contact-email"><div className="contact-call-label"><Mail size={19} /><span>Email Hashbay</span></div><a href="mailto:contact@hashbaytechnology.com">contact@hashbaytechnology.com <ArrowUpRight size={20} /></a></div><div className="contact-location"><span>Based in</span><p>Bangalore, India</p></div></div></div></div></section>
    <section className="contact-topics section"><div className="shell"><div className="section-intro"><p className="eyebrow">A starting point</p><h2>Bring us the context.<br />We&apos;ll talk through the possibilities.</h2></div><div className="contact-topic-grid">{[['Technology services', 'Your current environment, the challenge you are addressing and the scope you have in mind.', '/services', 'Explore services'], ['Professional services', 'The technical skills, project requirements and on-site or off-site support you need.', '/services#professional-services', 'Explore professional services'], ['Training', 'Your background, learning goals and the technology discipline you want to develop.', '/training', 'Explore training']].map(([title, description, href, label]) => <div key={title}><h3>{title}</h3><p>{description}</p><Link className="text-link" href={href}>{label}<ArrowRight size={17} /></Link></div>)}</div></div></section>
  </main><Footer /></>;
}
