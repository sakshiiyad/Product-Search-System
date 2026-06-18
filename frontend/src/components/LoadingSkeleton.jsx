export default function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card card--skeleton">
          <div className="skeleton-line skeleton-line--short" />
          <div className="skeleton-line skeleton-line--long" />
          <div className="skeleton-line skeleton-line--medium" />
        </div>
      ))}
    </div>
  );
}
