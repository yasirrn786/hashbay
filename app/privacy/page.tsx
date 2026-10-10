import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hashbay handles website visits, local demo and brief data, email enquiries and privacy requests.",
  ...canonicalMetadata("/privacy"),
};
export default function Privacy() {
  return (
    <section className="reading-page container split">
      <div>
        <h1>Privacy, in plain language.</h1>
        <p className="small muted" style={{ marginTop: 24 }}>
          Website notice updated 11 October 2026.
        </p>
      </div>
      <div className="split-right">
        <section className="reading-section">
          <h2>Who this notice covers.</h2>
          <p>
            This notice describes this website and initial enquiries to{" "}
            {company.name}, Bangalore, India. Project or training services may
            involve additional data handling, which is agreed for the specific
            engagement.
          </p>
          <p>
            Contact: <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </section>
        <section className="reading-section">
          <h2>The brief builder and demos.</h2>
          <p>
            The brief builder, workflow tracker, cost worksheet and practice
            exercise run in your browser. The site does not submit their entries
            to a Hashbay form server or store them in browser local storage.
            Reloading or leaving the page clears this local state.
          </p>
          <p>
            Downloading a brief or worksheet creates a file on your device.
            Copying a draft uses your clipboard. These copies can remain until
            you remove them. Your browser or email app may also retain entered
            information through its own features.
          </p>
          <p>
            Opening an email draft passes the draft to your configured email
            application. Hashbay receives it only if you send the email. Leave
            out passwords, payment details, sensitive system information and
            private records.
          </p>
        </section>
        <section className="reading-section">
          <h2>When you contact us.</h2>
          <p>
            If you email or call, we receive the details you provide, such as
            your name, contact information and project requirements. We use them
            to answer your enquiry, discuss an offer and manage the resulting
            relationship.
          </p>
          <p>
            Correspondence is handled through our communication providers. If
            delivery needs an additional specialist or partner, access and
            sharing should be agreed as part of the scope. Please obtain
            permission before sharing anyone else&apos;s personal information.
          </p>
          <p>
            We retain correspondence for the enquiry and any resulting
            engagement, record-keeping or dispute needs. The period depends on
            that purpose and applicable obligations; this website does not
            promise a universal deletion date.
          </p>
        </section>
        <section className="reading-section">
          <h2>Hosting and website traffic.</h2>
          <p>
            This site is hosted on Vercel. Hosting and security infrastructure
            may process technical request information, such as IP addresses,
            requested URLs, device or browser information and timestamps.
          </p>
          <p>
            The site code does not add advertising pixels, marketing analytics,
            external font requests or tracking cookies. Hosting-level processing
            and your browser&apos;s own behaviour are separate. Vercel explains
            its handling in its{" "}
            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy notice
            </a>
            .
          </p>
        </section>
        <section className="reading-section">
          <h2>Your questions and choices.</h2>
          <p>
            You can use the public contact details without completing the brief
            builder. For questions about information you have sent us, or to
            request access, correction or deletion, email {company.email}. We
            review requests in light of the information held and any applicable
            retention obligations.
          </p>
          <p>
            Service data, credentials, candidate information and learner records
            require engagement-specific handling and access arrangements before
            collection. They should not be included in a general website brief.
          </p>
        </section>
      </div>
    </section>
  );
}
