import { useEffect, useState } from "react";
import { productApi } from "./api/productApi.js";
import { useDebouncedValue } from "./hooks/useDebounce.js";
import SearchBar from "./components/SearchBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import LoadingSkeleton from "./components/LoadingSkeleton.jsx";
import ErrorState from "./components/ErrorState.jsx";
import EmptyState from "./components/EmptyState.jsx";

export default function App() {
  // State for products, search query, and UI feedback
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load all products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Trigger search when debounced query changes
  // If query is empty, load all products; otherwise search
  useEffect(() => {
    if (debouncedQuery) {
      searchProducts(debouncedQuery);
    } else {
      fetchProducts();
    }
  }, [debouncedQuery]);

  // Fetch all products from API
  async function fetchProducts() {
    setLoading(true);
    setError("");

    try {
      const data = await productApi.list();
      setProducts(data.results);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  // Search products by query term
  // Server-side search with validation (max 100 chars)
  async function searchProducts(searchQuery) {
    if (!searchQuery.trim()) {
      fetchProducts();
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await productApi.search(searchQuery);
      setProducts(data.results);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  // Update search query (debouncing is handled by useDebouncedValue hook)
  const handleSearch = (value) => {
    setQuery(value);
  };

  // Clear search input and error state to reset to all products
  const handleRetry = () => {
    setQuery("");
    setError("");
  };

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">Catalog Tool</p>
        <h1 className="app__title">Product Search System</h1>
        <p className="app__subtitle">Find what's in stock, instantly.</p>
      </header>

      <div className="app__controls">
        <SearchBar value={query} onChange={handleSearch} />
      </div>

      <p className="tally">
        {products.length} product{products.length === 1 ? "" : "s"}
      </p>

      <main>
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorState message={error} onRetry={handleRetry} />
        ) : products.length === 0 ? (
          <EmptyState
            query={query}
            onClear={() => {
              setQuery("");
              fetchProducts();
            }}
          />
        ) : (
          <ProductGrid products={products} query={query} />
        )}
      </main>
    </div>
  );
}
