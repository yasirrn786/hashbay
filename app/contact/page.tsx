import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { company, programs, services } from "@/lib/content";
import { BriefBuilder } from "@/components/brief-builder";
export const metadata: Metadata = {
  title: "Contact & Project Brief",
  description:
    "Discuss an IT, software or training project with Hashbay. Prepare a clear brief, inspect it and send it directly by email.",
  ...canonicalMetadata("/contact"),
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; course?: string }>;
}) {
  const params = await searchParams;
  const course = programs.find((p) => p.slug === params.course);
  return (
    <section className="contact-layout container">
      <div className="contact-intro">
        <h1>
          Start with
          <br />
          the problem.
        </h1>
        <p className="lead">
          Tell us what needs to change. We will use your brief to discuss scope,
          availability and next steps.
        </p>
        <div className="contact-note">
          <h2>A useful first conversation.</h2>
          <ol>
            <li>Your goal</li>
            <li>Your constraints</li>
            <li>Your definition of done</li>
          </ol>
        </div>
        <div className="contact-direct">
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
        </div>
      </div>
      <BriefBuilder
        key={course?.slug || params.service || "general"}
        serviceNames={services.map((s) => s.name)}
        initialService={course ? "Training" : params.service}
        initialCourse={course?.name}
      />
    </section>
  );
}
