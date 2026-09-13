import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown, ArrowUpRight, Cloud, ShieldCheck } from 'lucide-react';
import { Header, Footer, ContactBand, EditorialImage } from '@/components/site-shell';
import { DeliveryFramework } from '@/components/delivery-framework';
import { capabilities } from '@/lib/content';

export default function Home() {
  const { props: mobileHero } = getImageProps({ src: '/images/network-mobile-illustration.webp', alt: '', width: 1024, height: 1536, sizes: '100vw' });
  return <><Header /><main id="main">
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="hero-image"><picture><source media="(max-width: 767px)" srcSet={mobileHero.srcSet} sizes="100vw" /><Image src="/images/network-illustration.webp" alt="" fill loading="eager" fetchPriority="high" sizes="100vw" /></picture></div>
      <div className="shell hero-content"><p className="eyebrow">Hashbay Technology / IT services</p><h1 id="hero-title">Technology that<br />keeps business<br /><span>moving.</span></h1><p className="hero-description">Infrastructure, cloud, cybersecurity, software and the people who bring it together.</p><Link className="button" href="/contact">Let&apos;s talk about your business <ArrowRight size={19} /></Link></div>
      <div className="shell hero-bottom"><a href="#capabilities">Explore our capabilities <ArrowDown size={17} /></a><span></span></div>
    </section>

    <section className="capabilities section" id="capabilities"><div className="shell">
      <div className="section-intro"><div><p className="eyebrow">Connected technology operations</p><h2>Technology works better<br />when it works together.</h2></div><p className="lead">Hashbay Technology Private Limited brings IT services and professional expertise together to help organizations build, secure and operate dependable technology environments.</p></div>
      <div className="capability-directory">{capabilities.map((service, index) => <Link className="capability-item" href={`/services#${service.id}`} key={service.id}><span className="index">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.description}</p></div><ArrowUpRight size={23} strokeWidth={1.6} /></Link>)}</div>
    </div></section>

    <section className="operations section"><div className="shell">
      <div className="operations-heading"><p className="eyebrow">Infrastructure & ongoing operations</p><h2>From the first connection<br />to the everyday work.</h2></div>
      <div className="operations-grid"><div className="operations-intro"><p className="lead">A new office. An evolving network. Systems that need continued care.</p><p>Hashbay supports the physical and operational foundations of IT, from infrastructure development to annual maintenance and service desk.</p><Link className="text-link" href="/services#infrastructure">Infrastructure services <ArrowRight size={18} /></Link></div>
        <div className="scope-table"><div><span>Establish</span><p>Office infrastructure<br />Data center development<br />Network study, design & execution</p></div><div><span>Maintain</span><p>Hardware & operating systems<br />Multi-vendor AMC<br />System & peripheral upgrades</p></div><div><span>Operate</span><p>Network administration<br />Facility Management Services<br />Customer support & service desk</p></div></div>
      </div>
      <div className="connected-services"><Link href="/services#cloud"><Cloud size={26} strokeWidth={1.5} /><div><h3>Extend into the cloud.</h3><p>Migration, optimization and ongoing management.</p></div><ArrowUpRight size={22} /></Link><Link href="/services#security"><ShieldCheck size={26} strokeWidth={1.5} /><div><h3>Strengthen your security.</h3><p>Assessment, testing, monitoring and implementation.</p></div><ArrowUpRight size={22} /></Link></div>
    </div></section>

    <section className="expertise section"><div className="shell expertise-grid"><EditorialImage /><div className="expertise-copy"><p className="eyebrow">People & professional services</p><h2>Systems matter.<br />So do the people<br />behind them.</h2><p className="lead">Bring technical expertise into the work your organization needs to get done.</p><p>IT manpower consultancy, staffing and professional services connect project requirements with on-site and off-site support. Software capabilities extend from requirement analysis through development and maintenance.</p><div className="link-stack"><Link className="text-link" href="/services#professional-services">Explore professional services <ArrowRight size={18} /></Link><Link className="text-link" href="/services#software">Software development <ArrowRight size={18} /></Link></div></div></div></section>

    <DeliveryFramework />

    <section className="training-preview section"><div className="shell training-preview-grid"><div><p className="eyebrow">Hashbay Training</p><h2>The next capability<br />starts with learning.</h2><p>Hands-on technical training for academic and career development, from hardware fundamentals to software and security.</p><Link className="text-link" href="/training">Explore training programs <ArrowRight size={18} /></Link></div><div className="learning-tracks">{[['01', 'Build the foundation', 'Hardware & Networking / Azure', '/training#programs'], ['02', 'Develop the application', 'Web Development / Data Science', '/training#programs'], ['03', 'Understand the defenses', 'Cyber Security / Network Security', '/training#programs']].map(([number, title, detail, href]) => <Link href={href} key={number}><span className="index">{number}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight size={20} /></Link>)}</div></div></section>

    <section className="company-note section"><div className="shell editorial-grid"><p className="eyebrow">About Hashbay</p><div><h2>Based in Bangalore.<br />Focused on your project.</h2><p className="lead">Hashbay is an IT manpower consultancy and professional services company. Our work brings together people, processes and systems, with a focus on project requirements and operational efficiency.</p><Link className="text-link" href="/about">Get to know Hashbay <ArrowRight size={18} /></Link></div></div></section>
    <ContactBand />
  </main><Footer /></>;
}
