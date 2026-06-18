import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ products, query }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} query={query} />
      ))}
    </div>
  );
}
