import type { Metadata } from "next";
import Link from "next/link";
import { canonicalMetadata } from "@/lib/site";
import { ContactBand, NumberedList } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Our Approach | Scope, Quote & Handover",
  description:
    "Understand the scope, quote, change controls, account ownership, training terms and practical handover behind a Hashbay engagement.",
  ...canonicalMetadata("/approach"),
};
export default function Approach() {
  return (
    <>
      <section className="reading-page container split">
        <div>
          <h1>
            Clarity is part
            <br />
            of the work.
          </h1>
          <p style={{ marginTop: 24, fontSize: 20 }}>
            A useful guide to the decisions that belong in your written offer.
          </p>
          <div className="footer-links" style={{ marginTop: 32 }}>
            <a href="#scope">Define the scope</a>
            <a href="#quote">Understand the quote</a>
            <a href="#changes">Approve the changes</a>
            <a href="#handover">Review the handover</a>
            <a href="#continuity">Plan for continuity</a>
            <a href="#learning">Choose the learning format</a>
          </div>
        </div>
        <div className="split-right">
          <section className="reading-section" id="scope">
            <h2>Start small. Define done.</h2>
            <p>
              When the requirement or system is uncertain, start with a bounded
              discovery or pilot. Agree the deliverable and what a successful
              result looks like before a larger build.
            </p>
            <NumberedList
              items={[
                "The problem, users and systems involved",
                "Included features, assets, workloads or training modules",
                "Dependencies, assumptions and exclusions",
                "A named delivery owner and qualified reviewer where needed",
                "Acceptance tests, milestone dates and customer responsibilities",
              ]}
            />
            <Link href="/downloads/project-scope.txt">
              Download the project scope worksheet
            </Link>
          </section>
          <section className="reading-section" id="quote">
            <h2>A quote you can read.</h2>
            <p>
              The total matters as much as the headline price. Separate the
              following costs, including any one-time and recurring charges. For
              an unknown estate, an inspection or discovery scope comes first.
            </p>
            <NumberedList
              items={[
                "Labour and the unit of work: tasks, users, devices or included hours",
                "Hardware, spares, software licences and platform charges",
                "Remote support versus on-site visits, location and travel",
                "Service window, response targets and escalation; resolution dependencies separately",
                "Taxes, payment milestones, approved overage rates and exit work",
              ]}
            />
            <p>
              Response and resolution are different. An acknowledgement target
              does not imply a guaranteed fix or continuous monitoring.
            </p>
            <Link href="/downloads/quote-comparison.txt">
              Download the quote comparison checklist
            </Link>
          </section>
          <section className="reading-section" id="changes">
            <h2>Change deliberately.</h2>
            <p>
              Approve a change in writing before work outside the accepted scope
              begins. Record the impact on cost, schedule, access and
              acceptance. For systems work, include a backup, change window and
              rollback method.
            </p>
            <p>
              Security testing requires the system owner&apos;s permission and
              named boundaries. High-risk work needs an appropriately qualified
              specialist. For cloud work, measure full cost and performance on a
              limited trial before approving a wider change.
            </p>
            <Link href="/lab?demo=cloud">Try the cloud cost worksheet</Link>
          </section>
          <section className="reading-section" id="handover">
            <h2>Leave with the means to operate.</h2>
            <p>
              Agree ownership at the start. Customer-owned accounts or
              repositories are used where appropriate; third-party and
              pre-existing components retain their applicable licence terms.
            </p>
            <NumberedList
              items={[
                "The agreed source files, configuration and dependency list",
                "Account ownership, access roles and a secure transfer process",
                "Deployment, operation and backup/restore instructions where applicable",
                "A scheduled walkthrough and a practical acceptance test",
                "Temporary access removed and future support or exit responsibilities recorded",
              ]}
            />
            <p>
              A useful test: have someone who did not build the system follow
              the agreed operating or deployment instructions. Any failed
              acceptance check should be resolved or explicitly recorded before
              sign-off.
            </p>
            <Link href="/downloads/project-handover.txt">
              Download the handover checklist
            </Link>
          </section>
          <section className="reading-section" id="continuity">
            <h2>Confirm people and coverage.</h2>
            <p>
              On-site engineer coverage is checked for the actual address.
              Remote delivery has its own scope. Specialist availability is
              confirmed before making a delivery commitment.
            </p>
            <p>
              For staffing, agree a role-based scorecard, a consented work
              sample and finite replacement conditions. Candidate details are
              shared with permission. Payroll staffing needs confirmed funding
              and administration.
            </p>
            <p>
              If partners are involved, the offer should identify the
              responsible lead, funded payment milestones, access boundaries and
              a practical backup or exit path. Ongoing support is a separate,
              costed agreement.
            </p>
            <Link href="/downloads/role-scorecard.txt">
              Inspect the role scorecard template
            </Link>
          </section>
          <section className="reading-section" id="learning">
            <h2>Make learning easier to inspect.</h2>
            <p>
              Ask about a short practical module before a longer programme.
              Evening or weekend sessions and bilingual explanations depend on
              confirmed instructor availability. Keep the same practical
              assessment when the format changes.
            </p>
            <p>
              One dated course sheet covers the syllabus, prerequisites, fees
              and taxes, access duration, instructor, timetable, support,
              assessment and cancellation. Rescheduling or module transfer
              conditions, if offered, are written there before payment.
            </p>
            <p>
              If Hashbay cancels an undelivered module, the learner can choose
              an agreed replacement or a refund for the undelivered portion. Job
              outcomes and vendor certification are not implied.
            </p>
            <Link href="/downloads/training-course-sheet.txt">
              Read the course sheet template
            </Link>
          </section>
        </div>
      </section>
      <ContactBand title="Let’s define your next step." />
    </>
  );
}
