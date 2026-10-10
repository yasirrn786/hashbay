import Link from "next/link";
import { HeroSample } from "@/components/hero-sample";
import {
  ContactBand,
  DeliveryBand,
  ServiceRows,
} from "@/components/site-shell";
import { commitments } from "@/lib/content";
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div>
          <h1>
            <span>The right </span>
            <span>technology. </span>
            <span>A clearer way </span>
            <span>forward.</span>
          </h1>
          <p className="lead">
            Practical IT services, software and training. Start with a defined
            scope. Leave with a result your team can use.
          </p>
          <div className="actions">
            <Link className="button" href="/contact">
              Build a project brief
            </Link>
            <Link href="/lab">Try a working demo</Link>
          </div>
        </div>
        <HeroSample />
      </section>
      <div className="clarity-strip container">
        <p>A good project starts with clarity.</p>
        <p>What is included. Who owns it. What happens next.</p>
      </div>
      <section className="section container home-services">
        <div className="section-intro">
          <h2>Built around your next step.</h2>
          <p>Choose the problem. We will define the work with you.</p>
        </div>
        <ServiceRows />
      </section>
      <DeliveryBand />
      <section className="section container split feature-reading">
        <div>
          <h2>
            Good work should
            <br />
            be easy to understand.
          </h2>
          <p style={{ marginTop: 24 }}>
            A clear first step makes room for a better result. Our approach puts
            the decisions, costs and ownership in writing.
          </p>
          <div className="actions">
            <Link href="/about" className="text-button">
              Meet Hashbay
            </Link>
            <Link href="/approach">Explore the approach</Link>
          </div>
        </div>
        <ol className="numbered-list">
          {commitments.map((c, i) => (
            <li key={c.title}>
              <span className="row-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="dark-band detail-band">
        <div className="container split">
          <h2>
            Learn it.
            <br />
            Then put it to work.
          </h2>
          <div>
            <p>
              Practical modules in software, cloud, networking, data and
              security. Inspect the prerequisites, exercise and course terms
              before enrolment.
            </p>
            <Link href="/training" className="band-link">
              Explore training
            </Link>
          </div>
        </div>
      </section>
      <ContactBand title="Let’s make the next step clear." />
    </>
  );
}
