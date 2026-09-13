'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { capabilities } from '@/lib/content';

export function Brand() {
  return <Link className="brand" href="/" aria-label="Hashbay Technology home">
    <span className="brand-name">HASHBAY<span className="brand-corner" aria-hidden="true" /></span>
    <span className="brand-sub">TECHNOLOGY</span>
  </Link>;
}

export function Header() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<'services' | 'mobile' | null>(null);
  const serviceToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const close = () => setPanel(null);

  return <header className="site-header" onKeyDown={event => {
    if (event.key === 'Escape' && panel) {
      (panel === 'services' ? serviceToggle : mobileToggle).current?.focus();
      close();
    }
  }} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) close();
  }}>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="shell nav">
      <Brand />
      <nav aria-label="Primary navigation" className="nav-links">
        <div className="services-nav">
          <Link href="/services" aria-current={pathname === '/services' ? 'page' : undefined} onClick={close}>Services</Link>
          <button ref={serviceToggle} className="nav-disclosure" aria-label="Explore services" aria-expanded={panel === 'services'} aria-controls="service-navigation" onClick={() => setPanel(panel === 'services' ? null : 'services')}><ChevronDown size={16} /></button>
        </div>
        <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined} onClick={close}>About Hashbay</Link>
        <Link href="/training" aria-current={pathname === '/training' ? 'page' : undefined} onClick={close}>Training</Link>
      </nav>
      <Link href="/contact" className="nav-contact" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact us <ArrowRight size={18} /></Link>
      <button ref={mobileToggle} className="menu-toggle" aria-label={panel === 'mobile' ? 'Close navigation' : 'Open navigation'} aria-expanded={panel === 'mobile'} aria-controls="mobile-navigation" onClick={() => setPanel(panel === 'mobile' ? null : 'mobile')}>{panel === 'mobile' ? <X /> : <Menu />}</button>
    </div>
    <nav id="service-navigation" aria-label="Service navigation" className="service-menu" hidden={panel !== 'services'}>
      <div className="shell service-menu-layout"><div><p className="eyebrow">Connected capabilities</p><h2>Technology.<br />People. Operations.</h2><Link className="text-link" href="/services" onClick={close}>All services <ArrowRight size={18} /></Link></div><div className="service-menu-links">{capabilities.map(service => <Link key={service.id} href={`/services#${service.id}`} onClick={close}>{service.name}<ArrowRight size={17} /></Link>)}</div></div>
    </nav>
    <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu" hidden={panel !== 'mobile'}>
      <Link href="/services" onClick={close}>Services <ArrowRight size={20} /></Link>
      <div className="mobile-service-links">{capabilities.map(service => <Link key={service.id} href={`/services#${service.id}`} onClick={close}>{service.name}</Link>)}</div>
      <Link href="/about" onClick={close}>About Hashbay <ArrowRight size={20} /></Link>
      <Link href="/training" onClick={close}>Training <ArrowRight size={20} /></Link>
      <Link href="/contact" onClick={close}>Contact us <ArrowRight size={20} /></Link>
    </nav>
  </header>;
}
