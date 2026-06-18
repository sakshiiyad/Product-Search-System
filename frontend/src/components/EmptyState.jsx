export default function EmptyState({ query, onClear }) {
  return (
    <div className="empty-state" role="status">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="empty-state__title">No products found for "{query}"</p>
      <p className="empty-state__hint">Try a different name, or check the spelling.</p>
      <button type="button" className="btn btn--ghost" onClick={onClear}>
        Clear search
      </button>
    </div>
  );
}
