import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { MotionSystem } from '@/components/motion-system';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: { default: "Hashbay Technology | IT Services & Professional Support", template: "%s | Hashbay Technology" },
  description: "Hashbay Technology Private Limited delivers IT infrastructure, cloud, cybersecurity, software, staffing, support, and training services.",
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  openGraph: { type: "website", locale: "en_IN", siteName: "Hashbay Technology", title: "Hashbay Technology | Technology that keeps business moving.", description: "IT infrastructure, cloud, cybersecurity, software, staffing, support, and training services." },
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Hashbay Technology Private Limited', telephone: '+917899347270', email: 'contact@hashbaytechnology.com', address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' }, ...(siteUrl ? { url: siteUrl.toString() } : {}) };
  return <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, '\\u003c') }} />{children}<MotionSystem /></body></html>;
}
