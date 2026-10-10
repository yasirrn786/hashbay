import type { Metadata } from "next";
import Link from "next/link";
import { canonicalMetadata } from "@/lib/site";
import { commitments } from "@/lib/content";
import { ContactBand } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "About Hashbay",
  description:
    "Hashbay Technology Private Limited is building an understandable approach to IT services, software and practical training.",
  ...canonicalMetadata("/about"),
};
export default function About() {
  return (
    <>
      <section className="reading-page about-page container split">
        <h1>
          Good technology.
          <br />
          Understood by people.
        </h1>
        <div className="split-right">
          <p className="lead">
            Hashbay Technology Private Limited brings together IT services,
            software and practical training. We are building the company around
            a simple standard: make the work understandable.
          </p>
          <h2 style={{ fontSize: 38, marginTop: 42 }}>
            The commitments behind a project.
          </h2>
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
          <p className="scope-note" style={{ marginTop: 25 }}>
            Based in Bangalore, India. Delivery location, expertise and
            availability are agreed per project.
          </p>
          <Link
            className="text-button"
            href="/approach"
            style={{ display: "inline-block", marginTop: 28 }}
          >
            Read our working approach
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
