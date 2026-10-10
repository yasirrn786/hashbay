import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Hashbay website use, demo limitations, service quotations, project changes, training terms and cancellation information.",
  ...canonicalMetadata("/terms"),
};
export default function Terms() {
  return (
    <section className="reading-page container split">
      <div>
        <h1>
          Clear terms.
          <br />A better start.
        </h1>
        <p className="small muted" style={{ marginTop: 24 }}>
          Website terms updated 11 October 2026.
        </p>
      </div>
      <div className="split-right">
        <section className="reading-section">
          <h2>About this website.</h2>
          <p>
            This website introduces the services and training areas of{" "}
            {company.name}. Content is for initial discussion. Availability,
            qualifications, coverage, dates and prices are confirmed for each
            engagement.
          </p>
          <p>
            The site does not accept bookings or payments. Preparing a brief
            does not submit an order or create a service agreement.
          </p>
        </section>
        <section className="reading-section">
          <h2>Quotes and service agreements.</h2>
          <p>
            Paid work begins after a written scope and commercial agreement are
            accepted through the agreed process. That document defines
            deliverables, exclusions, acceptance, price and taxes, payment
            milestones, schedule, intellectual property, third-party licences,
            support and exit responsibilities.
          </p>
          <p>
            Unknown systems may require paid discovery before a fixed-price
            offer. Work outside the accepted scope needs a separately approved
            change. A support response target is distinct from a resolution
            commitment.
          </p>
          <p>
            A project-specific agreement sets the applicable service terms.
            Nothing on this website removes rights that cannot be excluded under
            applicable law.
          </p>
        </section>
        <section className="reading-section">
          <h2>Using the lab.</h2>
          <p>
            The interactive examples use sample data or your own assumptions.
            They do not connect to client systems, perform a security test,
            provision cloud resources or certify a skill.
          </p>
          <p>
            The cost worksheet uses constant monthly assumptions over 12 months.
            Its output is an illustration, not a quote or financial saving
            guarantee. Actual costs, taxes, commitments and technical
            requirements must be checked before a change.
          </p>
          <p>
            Use the site lawfully. Do not enter credentials, confidential
            records or another person&apos;s private information without
            permission. Do not use sample training content to test systems
            without written authorisation.
          </p>
        </section>
        <section className="reading-section">
          <h2>Training and cancellation.</h2>
          <p>
            Before enrolment, the applicable dated course sheet confirms
            prerequisites, syllabus, instructor, timetable, language, class
            size, tuition and taxes, lab or exam charges, access period,
            assessment, support and completion evidence.
          </p>
          <p>
            Learner cancellation, rescheduling and any module transfer option
            are stated in that sheet before payment. Notice periods, deductions
            and refundable amounts must be explicit. There is no universal
            free-transfer promise on this website.
          </p>
          <p>
            If Hashbay cancels an undelivered session or module, you can choose
            an agreed replacement or a refund for the undelivered portion. The
            course sheet specifies the process and refund timeline before
            purchase.
          </p>
          <p>
            Employment, placement and vendor certification are not guaranteed.
            Any official exam or certification is separate unless expressly
            included.
          </p>
        </section>
        <section className="reading-section">
          <h2>Ownership and public templates.</h2>
          <p>
            The website&apos;s brand and original material belong to Hashbay or
            their respective rights holders. Open-source fonts retain their
            published licences. You may use the downloadable worksheets to
            prepare or review your own project or training enquiry.
          </p>
          <p>
            Project account ownership, source files, pre-existing materials and
            third-party components are addressed in the accepted service
            agreement. The website does not transfer rights to separately
            licensed software.
          </p>
        </section>
        <section className="reading-section">
          <h2>Questions or corrections.</h2>
          <p>
            Contact <a href={`mailto:${company.email}`}>{company.email}</a> if
            content is unclear or needs correction. We may update this website
            and these terms; the date above identifies the current notice.
            Accepted project or course terms are handled separately.
          </p>
        </section>
      </div>
    </section>
  );
}
