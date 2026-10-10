import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { DemoLab } from "@/components/demo-lab";
import { ContactBand, PageIntro } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "The Lab | Working Demos",
  description:
    "Try a working task tracker and a cloud cost worksheet. Honest sample data and useful interactions before a project conversation.",
  ...canonicalMetadata("/lab"),
};
export default async function Lab({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <PageIntro title="Try the work." className="lab-intro">
        <p>
          Small, working examples. Explore an interaction before discussing a
          project.
        </p>
      </PageIntro>
      <DemoLab initialDemo={params.demo === "cloud" ? "cloud" : "workflow"} />
      <ContactBand title="Have a workflow in mind?" />
    </>
  );
}
