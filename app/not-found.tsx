import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header, Footer } from '@/components/site-shell';

export default function NotFound() {
  return <><Header /><main id="main"><section className="not-found"><div className="shell"><p className="eyebrow">404 / Page not found</p><div className="not-found-grid"><h1>This route<br />ends here.</h1><div><p className="lead">The page you were looking for is not available. Return to Hashbay or continue to our technology services.</p><div className="not-found-actions"><Link className="button" href="/"><ArrowLeft size={18} /> Back to home</Link><Link className="text-link" href="/services">Explore services <ArrowRight size={18} /></Link></div></div></div></div></section></main><Footer /></>;
}
