export default function ErrorState({ message, onRetry }) {
  return (
    <div className="error-state" role="alert">
      <p className="error-state__title">Something went wrong</p>
      <p className="error-state__hint">{message}</p>
      <button type="button" className="btn btn--primary" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}
