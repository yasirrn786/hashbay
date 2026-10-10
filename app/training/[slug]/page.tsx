import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "@/lib/content";
import { canonicalMetadata } from "@/lib/site";
import { ContactBand, NumberedList, PageIntro } from "@/components/site-shell";
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: p.name + " Training",
    description:
      p.line +
      " Explore proposed learning topics, prerequisites and a practical exercise. Availability confirmed before enrolment.",
    ...canonicalMetadata("/training/" + p.slug),
  };
}
export default async function Program({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageIntro title={p.name + ". In practice."}>
        <p>
          {p.line} Discuss a focused module with an instructor, format and
          timetable confirmed before enrolment.
        </p>
        <div className="actions" style={{ marginTop: 28 }}>
          <Link className="button" href={`/contact?course=${p.slug}`}>
            Ask about this module
          </Link>
          <Link href="/training">All training areas</Link>
        </div>
      </PageIntro>
      <div className="container">
        <p className="scope-note">
          A proposed learning outline for discussion. The dated course sheet
          confirms the actual syllabus, delivery team, fees and availability.
        </p>
        <section className="scope-columns" style={{ borderTop: 0 }}>
          <div>
            <h2>Topics to explore.</h2>
            <NumberedList items={p.topics} />
          </div>
          <div>
            <h2>A useful starting point.</h2>
            <p style={{ marginTop: 24 }}>{p.prerequisite}</p>
            <h3 style={{ marginTop: 32 }}>Tools and access.</h3>
            <p style={{ marginTop: 15 }}>{p.tools}</p>
          </div>
        </section>
      </div>
      <section className="dark-band detail-band">
        <div className="container split">
          <h2>
            Show what
            <br />
            you can do.
          </h2>
          <div>
            <p>{p.exercise}</p>
            <p className="small" style={{ marginTop: 20 }}>
              This is a proposed practical task. Completion criteria and
              instructor feedback are specified in the module sheet.
            </p>
          </div>
        </div>
      </section>
      <section className="container scope-columns">
        <div>
          <h2>A format that fits.</h2>
          <p style={{ marginTop: 24 }}>
            Ask for a short module, an evening or weekend session, or a
            preferred teaching language. We confirm these options only when the
            instructor, lab and cohort can support them.
          </p>
        </div>
        <div>
          <h2>Inspect the full offer.</h2>
          <NumberedList
            items={[
              "Dates, contact hours and class size",
              "Instructor, prerequisites and assessed exercise",
              "Total fees, taxes and separate lab or exam costs",
              "Access duration, support slots and completion evidence",
              "Cancellation, rescheduling and any transfer conditions",
            ]}
          />
          <Link
            className="text-button"
            href="/downloads/training-course-sheet.txt"
          >
            Read the course sheet template
          </Link>
        </div>
      </section>
      <ContactBand
        title="Make room for a practical next step."
        service="Training"
      />
    </>
  );
}
