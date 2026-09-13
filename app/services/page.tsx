import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Header, Footer, ContactBand, PageHero } from '@/components/site-shell';
import { capabilities } from '@/lib/content';
import { ServiceIndex } from '@/components/service-index';

export const metadata: Metadata = { title: 'IT Services & Capabilities', description: 'Explore Hashbay infrastructure, cloud, cybersecurity, software development, IT staffing, AMC and operational support services.' };

export default function ServicesPage() {
  return <><Header /><main id="main">
    <PageHero label="Our services" title="Connected capabilities. Practical expertise." description="From the infrastructure beneath your business to the applications and people moving it forward. Explore the scope of Hashbay's technology services."><Link className="text-link" href="/contact">Discuss your requirements <ArrowRight size={18} /></Link></PageHero>
    <div className="services-layout shell"><ServiceIndex />
      <div className="service-sections">{capabilities.map((service, index) => <section className="service-detail" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}>
        <div className="service-detail-top"><span className="index">0{index + 1}</span><p>{service.need}</p></div>
        <h2 id={`${service.id}-title`}>{service.name}</h2><h3>{service.line}</h3><p className="service-context">{service.context}</p>
        <div className="service-scope"><h4>Service scope</h4><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></div>
        {service.id === 'cloud' && <p className="scope-note">Platform names describe service capabilities, not partnership or certification status.</p>}
        {service.id === 'support' && <p className="scope-note">Support scope and engagement terms are discussed against your requirements.</p>}
        <div className="service-detail-footer"><Link className="text-link" href="/contact">Discuss {service.id === 'professional-services' ? 'staffing requirements' : service.id === 'security' ? 'cybersecurity' : service.id === 'support' ? 'support requirements' : service.id === 'software' ? 'your application' : service.name.toLowerCase()} <ArrowRight size={17} /></Link><a href={`#${service.related}`}>Related: {capabilities.find(item => item.id === service.related)?.name}<ArrowUpRight size={15} /></a></div>
      </section>)}</div>
    </div>
    <ContactBand />
  </main><Footer /></>;
}
