const { z } = require("zod");
const ApiError = require("./ApiError");

const MAX_QUERY_LENGTH = 100;

// Zod schema for search query validation
const searchQuerySchema = z
  .string()
  .trim()
  .min(1, 'Search query "q" is required and cannot be empty.')
  .max(
    MAX_QUERY_LENGTH,
    `Search query is too long (max ${MAX_QUERY_LENGTH} characters).`,
  );

// Validate search query
// Throws ApiError if validation fails
function validateSearchQuery(query) {
  if (query === undefined || query === null) {
    throw ApiError.badRequest(
      'Search query "q" is required and cannot be empty.',
    );
  }

  const result = searchQuerySchema.safeParse(query);

  if (!result.success) {
    const message = result.error.issues[0]?.message || "Invalid search query.";
    throw ApiError.badRequest(message);
  }

  return result.data;
}

module.exports = {
  validateSearchQuery,
};
