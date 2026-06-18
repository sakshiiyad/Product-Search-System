/**
 * ApiError
 * A small, predictable error shape used everywhere in the app instead of
 * throwing raw strings or generic Errors. Every error that reaches the
 * client goes through this class so the response shape never varies.
 */
/**
 * Custom error class for API responses
 * Allows setting HTTP status codes and error messages
 */
class ApiError extends Error {
  constructor(statusCode, message, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.isApiError = true;
  }

  static badRequest(message, details = null) {
    return new ApiError(400, message, details);
  }

  static notFound(message) {
    return new ApiError(404, message);
  }
}

module.exports = ApiError;
