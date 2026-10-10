import Link from "next/link";
import { company, services, stages } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <Link className="wordmark" href="/" aria-label="Hashbay home">
            hashbay.
          </Link>
          <p>
            Practical technology.
            <br />A clearer way forward.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/training">Training</Link>
          <Link href="/lab">The lab</Link>
          <Link href="/approach">Our approach</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
          <p>
            {company.location}
            <br />
            Remote and on-site availability confirmed per project.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {company.name}
        </span>
        <span>Scope first. Clear ownership. Practical handover.</span>
      </div>
    </footer>
  );
}
export function ContactBand({
  title = "Have a next step in mind?",
  text,
  service,
}: {
  title?: string;
  text?: string;
  service?: string;
}) {
  return (
    <section className="inline-cta container">
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      <Link
        href={
          service
            ? `/contact?service=${encodeURIComponent(service)}`
            : "/contact"
        }
        className="button"
      >
        Build a project brief
      </Link>
    </section>
  );
}
export function ServiceRows() {
  return (
    <div className="services-list">
      {services.map((s, i) => (
        <article className="service-row" id={s.legacyId} key={s.slug}>
          <span className="row-number" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>
            <Link
              href={`/services/${s.slug}`}
              style={{ textDecoration: "none" }}
            >
              {s.name}
            </Link>
          </h3>
          <p>{s.line}</p>
          <Link href={`/services/${s.slug}`} aria-label={`Explore ${s.name}`}>
            Explore
          </Link>
        </article>
      ))}
    </div>
  );
}
export function DeliveryBand() {
  return (
    <section className="dark-band delivery-band">
      <div className="container">
        <h2>Clarity is part of the work.</h2>
        <div className="steps">
          {stages.map((s, i) => (
            <div className="step" key={s.name}>
              <span className="row-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className="band-link" href="/approach">
          Read our working approach
        </Link>
      </div>
    </section>
  );
}
export function PageIntro({
  title,
  children,
  className = "",
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`page-intro container ${className}`}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}
export function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="plain-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}
export function FAQ({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  return (
    <section className="faq">
      <h2>A few useful answers.</h2>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
