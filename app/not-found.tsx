import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-intro container" style={{ minHeight: "60vh" }}>
      <h1>A different next step.</h1>
      <p>
        We could not find that page. Explore our services or tell us what you
        need.
      </p>
      <div className="actions" style={{ marginTop: 30 }}>
        <Link href="/services" className="button">
          Explore services
        </Link>
        <Link href="/contact">Start a conversation</Link>
      </div>
    </section>
  );
}
