export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search products by name…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search products by name"
        autoFocus
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}
