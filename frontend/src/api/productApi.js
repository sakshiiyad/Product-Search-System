const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/products";
const MAX_QUERY_LENGTH = 100;

// Fetch with consistent error handling - throws Error on failures
async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch (networkErr) {
    throw new Error(
      "Could not reach the server. Check that the backend is running.",
    );
  }

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      body?.error?.message || `Request failed with status ${response.status}.`;
    throw new Error(message);
  }
  return body;
}

// Validate search query before API call
function validateSearchQuery(query) {
  if (!query || query.trim() === "") {
    throw new Error("Search query cannot be empty.");
  }
  if (query.length > MAX_QUERY_LENGTH) {
    throw new Error(
      `Search query must be ${MAX_QUERY_LENGTH} characters or fewer. Current length: ${query.length}`,
    );
  }
}

// API methods for product operations
export const productApi = {
  list: () => request(""),
  search: (query) => {
    validateSearchQuery(query);
    return request(`/search?q=${encodeURIComponent(query)}`);
  },
};
