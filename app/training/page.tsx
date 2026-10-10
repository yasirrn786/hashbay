import type { Metadata } from "next";
import Link from "next/link";
import { canonicalMetadata } from "@/lib/site";
import { programs } from "@/lib/content";
import { ContactBand, FAQ, PageIntro } from "@/components/site-shell";
import { PracticalExercise } from "@/components/practical-exercise";
export const metadata: Metadata = {
  title: "Practical Technology Training",
  description:
    "Explore web development, cybersecurity, cloud, data and networking modules. Clear prerequisites, hands-on exercises and course terms before enrolment.",
  ...canonicalMetadata("/training"),
};
export default function Training() {
  return (
    <>
      <PageIntro
        className="training-intro"
        title={
          <>
            Learn it.
            <br />
            Then put it to work.
          </>
        }
      >
        <p>
          Practical technology training, with the format and instructor
          confirmed before enrolment.
        </p>
      </PageIntro>
      <section className="container split split-rule program-layout">
        <div>
          <h2>A plan you can inspect.</h2>
          <ol className="numbered-list program-standards">
            {[
              "Defined prerequisites",
              "Hands-on exercises",
              "Clear fees and dates",
              "Written cancellation terms",
            ].map((item, i) => (
              <li key={item}>
                <span className="row-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="split-right">
          {programs.map((p) => (
            <article className="program-row" key={p.slug}>
              <Link href={`/training/${p.slug}`}>{p.name}</Link>
              <p>{p.line}</p>
            </article>
          ))}
        </div>
      </section>
      <PracticalExercise />
      <section className="container section">
        <div className="split">
          <h2>
            A smaller module.
            <br />A clear learning goal.
          </h2>
          <div>
            <p style={{ fontSize: 21 }}>
              Ask about one practical skill before committing to a longer
              programme. Evening or weekend schedules, bilingual explanations
              and transfer options can be discussed when an instructor and the
              required resources are available.
            </p>
            <p style={{ marginTop: 20 }}>
              The dated course sheet confirms the timetable, language, class
              size, lab access, all fees, assessment, cancellation and
              rescheduling rules. Review that sheet before paying.
            </p>
            <Link
              href="/downloads/training-course-sheet.txt"
              className="text-button"
              style={{ display: "inline-block", marginTop: 24 }}
            >
              Inspect the course sheet template
            </Link>
          </div>
        </div>
        <FAQ
          items={[
            {
              question: "Are these courses open for enrolment now?",
              answer:
                "These are training areas for enquiry. We confirm a capable instructor, a tested lab, cohort viability and a course-specific schedule before opening enrolment or accepting payment.",
            },
            {
              question: "Can I learn in the evening or in another language?",
              answer:
                "Tell us your preferred time and language. We confirm availability in the course sheet. Technical vocabulary and the practical assessment remain clear; no language or weekend schedule is promised before confirmation.",
            },
            {
              question: "What is included in the price?",
              answer:
                "The course sheet lists tuition, taxes, lab access, materials, assessment and any separate exam or platform charges. Access duration and support sessions are explicit.",
            },
            {
              question: "What happens if I need to cancel or reschedule?",
              answer:
                "The dated course sheet sets the applicable notice periods, refundable amount, deductions and transfer conditions before payment. If Hashbay cancels an undelivered session or module, you can choose an agreed replacement or a refund for the undelivered portion.",
            },
            {
              question: "Will I receive a job or an official certification?",
              answer:
                "Employment outcomes are not guaranteed. Any completion evidence is described in the course sheet. Vendor exams, official certification and placement services are separate unless expressly included.",
            },
          ]}
        />
      </section>
      <ContactBand title="What would you like to learn?" service="Training" />
    </>
  );
}
