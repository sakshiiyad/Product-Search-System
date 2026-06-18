/**
 * Renders `text` with the first case-insensitive occurrence of `query`
 * wrapped in a <mark> styled like a highlighter swipe. Falls back to plain
 * text when there's no active query.
 */
export default function HighlightMatch({ text, query }) {
  if (!query) return <>{text}</>;

  const lower = text.toLowerCase();
  const target = query.trim().toLowerCase();
  const index = target ? lower.indexOf(target) : -1;

  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + target.length);
  const after = text.slice(index + target.length);

  return (
    <>
      {before}
      <mark className="highlight">{match}</mark>
      {after}
    </>
  );
}
