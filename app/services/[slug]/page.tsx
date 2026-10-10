import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { canonicalMetadata } from "@/lib/site";
import { ContactBand, NumberedList, PageIntro } from "@/components/site-shell";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.intro,
    ...canonicalMetadata("/services/" + service.slug),
  };
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro title={s.headline}>
        <p>{s.intro}</p>
        <div className="actions" style={{ marginTop: 28 }}>
          <Link
            className="button"
            href={`/contact?service=${encodeURIComponent(s.name)}`}
          >
            Discuss this service
          </Link>
          <Link href={s.demo} className="text-button">
            {s.demoLabel}
          </Link>
        </div>
      </PageIntro>
      <div className="container">
        <p className="scope-note">
          <strong>A sensible first step:</strong> {s.start}. We confirm scope,
          expertise and availability before a commitment.
        </p>
        <section className="scope-columns" style={{ borderTop: 0 }}>
          <div>
            <h2>What the work can cover.</h2>
            <NumberedList items={s.scope} />
          </div>
          <div>
            <h2>What you should receive.</h2>
            <NumberedList items={s.deliverables} />
          </div>
        </section>
      </div>
      <section className="dark-band detail-band">
        <div className="container split">
          <h2>
            Define a result
            <br />
            you can review.
          </h2>
          <p>{s.acceptance}</p>
        </div>
      </section>
      <section className="container scope-columns">
        <div>
          <h2>Before we begin.</h2>
          <p style={{ marginTop: 24 }}>{s.prepare}</p>
          <Link
            href="/downloads/project-scope.txt"
            className="text-button"
            style={{ display: "inline-block", marginTop: 25 }}
          >
            Download the scope worksheet
          </Link>
        </div>
        <div>
          <h2>Keep the boundaries clear.</h2>
          <NumberedList items={s.boundaries} />
          <Link href="/approach">
            See the quote, change and handover process
          </Link>
        </div>
      </section>
      <ContactBand title="Start with a useful first step." service={s.name} />
    </>
  );
}
