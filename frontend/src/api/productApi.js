import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api/products";
const MAX_QUERY_LENGTH = 100;

const client = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

function handleError(err) {
  const message =
    axios.isAxiosError(err) && err.response
      ? (err.response.data?.error?.message ??
        `Request failed with status ${err.response.status}.`)
      : "Could not reach the server. Check that the backend is running.";

  throw new Error(message);
}

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

export const productApi = {
  async list() {
    try {
      const response = await client.get("");
      return response.data;
    } catch (err) {
      handleError(err);
    }
  },

  async search(query) {
    validateSearchQuery(query);
    try {
      const response = await client.get("/search", { params: { q: query } });
      return response.data;
    } catch (err) {
      handleError(err);
    }
  },
};
