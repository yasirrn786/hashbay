import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-shell";
import { company } from "@/lib/content";
import { siteIsIndexable, siteUrl } from "@/lib/site";

const archivo = localFont({
  src: "../public/fonts/archivo.woff2",
  variable: "--font-archivo",
  display: "swap",
  weight: "400 700",
});
const newsreader = localFont({
  src: "../public/fonts/newsreader.woff2",
  variable: "--font-newsreader",
  display: "swap",
  weight: "400 600",
});
export const metadata: Metadata = {
  title: {
    default: "Hashbay Technology | IT Services, Software & Training",
    template: "%s | Hashbay Technology",
  },
  description:
    "Practical IT services, software and training from Hashbay Technology. Defined scopes, transparent quotes, documented ownership and practical handovers.",
  verification: {
    google:
      process.env.GOOGLE_SITE_VERIFICATION ||
      "IdCHlHT_OYDXnXMS1lPs5P-wvpW2SO9-5DeNcQoBzlQ",
  },
  ...(siteUrl
    ? { metadataBase: siteUrl, alternates: { canonical: siteUrl } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Hashbay Technology",
    ...(siteUrl ? { url: siteUrl } : {}),
    title: "Hashbay | The right technology. A clearer way forward.",
    description:
      "Practical IT services, software and training. Start with a defined scope. Leave with a result your team can use.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: siteIsIndexable, follow: siteIsIndexable },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
