import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import {
  ContactBand,
  DeliveryBand,
  FAQ,
  PageIntro,
  ServiceRows,
} from "@/components/site-shell";
export const metadata: Metadata = {
  title: "IT Services & Software",
  description:
    "Explore software, infrastructure, cloud, cybersecurity, IT support and consulting with defined scopes and transparent deliverables.",
  ...canonicalMetadata("/services"),
};
export default function Services() {
  return (
    <>
      <PageIntro title="Built around your next step.">
        <p>Choose the problem. We will define the work with you.</p>
      </PageIntro>
      <section className="container" style={{ paddingBottom: 60 }}>
        <ServiceRows />
        <p className="scope-note" style={{ borderTop: 0 }}>
          Every enquiry starts with a scope and availability review. Specialist
          expertise, service hours and on-site coverage are confirmed in the
          written offer.
        </p>
        <FAQ
          items={[
            {
              question: "Can I start with a small project?",
              answer:
                "Yes, ask for a bounded discovery, one workflow, one workload or a single support task. We confirm whether the scope fits our available capability before quoting.",
            },
            {
              question: "How do you price the work?",
              answer:
                "The quote separates labour, hardware, licences, travel, taxes and ongoing support where applicable. Unknown systems may need paid discovery. Work outside the accepted scope requires approval.",
            },
            {
              question: "Can you support my city?",
              answer:
                "Remote delivery and on-site attendance are reviewed separately. Share the location and requirement; we confirm actual engineer coverage before committing to a visit.",
            },
            {
              question: "Do you offer 24/7 coverage?",
              answer:
                "Coverage is defined in the accepted service agreement. This website does not promise round-the-clock monitoring or emergency response.",
            },
          ]}
        />
      </section>
      <DeliveryBand />
      <ContactBand />
    </>
  );
}
