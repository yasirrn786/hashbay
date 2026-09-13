'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export function Mark() { return <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="brand-mark"><path d="M3 3V33M12 3V15H24V3M12 33V24H24V33M33 3V33M3 19.5H33" stroke="currentColor" strokeWidth="2.4" /></svg>; }
export function Brand() { return <Link className="brand" href="/" aria-label="Hashbay home"><Mark /><span>HASHBAY<span className="brand-sub">TECHNOLOGY</span></span></Link>; }
const links = [['About', '/about'], ['Services', '/services'], ['Training', '/training'], ['Contact', '/contact']] as const;
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!open) return; const close = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, [open]);
  return <header className={`site-header${open ? ' menu-open' : ''}`}><a href="#main" className="skip-link">Skip to content</a><div className="shell nav"><Brand /><nav aria-label="Primary navigation" className="nav-links">{links.slice(0,3).map(([label, href]) => <Link aria-current={pathname === href ? 'page' : undefined} key={href} href={href}>{label}</Link>)}</nav><Link href="/contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={17} /></Link><button ref={toggle} type="button" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open ? <X /> : <Menu />}</button></div><nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu" hidden={!open}>{links.map(([label,href], i)=><Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={()=>setOpen(false)}><span className="mono">0{i+1}</span>{label}<ArrowUpRight /></Link>)}</nav><div className="page-progress" /></header>;
}
