import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Brand } from './site-header';
import { capabilities } from '@/lib/content';
export { Header, Brand } from './site-header';

export function ContactBand() {
  return <section className="contact-band"><div className="shell contact-band-inner">
    <div><p className="eyebrow">The next conversation</p><h2>What does your<br />business need next?</h2></div>
    <div><p>Start with your requirements. Let&apos;s connect them with the right technology services.</p><Link className="button" href="/contact">Talk to Hashbay <ArrowRight size={19} /></Link></div>
  </div></section>;
}

export function Footer() {
  return <footer className="footer"><div className="shell">
    <div className="footer-main"><div className="footer-identity"><Brand /><p>Technology that keeps<br />business moving.</p><a className="text-link" href="tel:+917899347270">+91 7899347270 <ArrowUpRight size={17} /></a></div>
      <nav aria-label="Footer services"><h2>Our capabilities</h2>{capabilities.map(service => <Link key={service.id} href={`/services#${service.id}`}>{service.name}</Link>)}</nav>
      <nav aria-label="Footer navigation"><h2>Hashbay</h2><Link href="/about">About Hashbay</Link><Link href="/training">Training</Link><Link href="/contact">Contact us</Link></nav>
      <div className="footer-location"><h2>Get in touch</h2><a className="footer-email" href="mailto:contact@hashbaytechnology.com">contact@hashbaytechnology.com</a><p>Bangalore, India</p><a className="text-link" href="#main">Back to top <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="footer-bottom"><span>Hashbay Technology Private Limited</span><span>Bangalore, India</span></div>
  </div></footer>;
}

export function PageHero({ label, title, description, children }: { label: string; title: string; description: string; children?: React.ReactNode }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{label}</p><div className="page-hero-grid"><h1>{title}</h1><div><p className="lead">{description}</p>{children}</div></div></div></section>;
}

export function EditorialImage({ kind = 'engineering', className = '', priority = false }: { kind?: 'engineering' | 'network'; className?: string; priority?: boolean }) {
  return <figure className={`editorial-image ${className}`}><div className="image-window" data-reveal><Image src={`/images/${kind}-illustration.webp`} alt={kind === 'engineering' ? 'Hands positioning a memory module inside an open computer.' : 'Blue Ethernet cables connected to a metal network panel.'} fill sizes="(max-width: 767px) 100vw, 60vw" preload={priority} /></div><figcaption>Concept image. Not Hashbay {kind === 'engineering' ? 'staff or client work' : 'facilities'}.</figcaption></figure>;
}
