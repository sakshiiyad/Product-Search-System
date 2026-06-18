/* eslint-disable no-unused-vars */

/**
 * Centralized error handler. Every thrown ApiError - and any unexpected
 * error - ends up here, so clients always receive the same response shape:
 *   { error: { message, details? } }
 * This is the single place that decides how errors look on the wire.
 */
function errorHandler(err, req, res, next) {
  const statusCode = err.isApiError ? err.statusCode : 500;
  const message = err.isApiError ? err.message : 'Something went wrong on the server.';

  if (!err.isApiError) {
    // Unexpected errors are logged with full detail server-side, but never
    // leaked to the client.
    console.error('Unexpected error:', err);
  }

  res.status(statusCode).json({
    error: {
      message,
      ...(err.details ? { details: err.details } : {}),
    },
  });
}

module.exports = errorHandler;
