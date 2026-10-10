export default function Loading() {
  return (
    <section
      className="skeleton container"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="skeleton-line skeleton-heading" />
      <div className="skeleton-line" />
      <div className="skeleton-line" style={{ maxWidth: 460 }} />
    </section>
  );
}
