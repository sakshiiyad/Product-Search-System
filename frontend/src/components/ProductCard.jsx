import HighlightMatch from "./HighlightMatch.jsx";

// Format price as Indian Rupees
const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// Determine stock status badge based on inventory level
function stockTier(stock) {
  if (stock === 0) return { label: "Out of stock", className: "stock--out" };
  if (stock <= 10)
    return { label: `Low · ${stock} left`, className: "stock--low" };
  return { label: `${stock} in stock`, className: "stock--ok" };
}

export default function ProductCard({ product, query }) {
  const tier = stockTier(product.stock);

  return (
    // Product card displays: SKU, category, name with search highlight, price, stock status
    <article className="card">
      <div className="card__top">
        <span className="card__sku">{product.sku}</span>
        <span className="card__category">{product.category}</span>
      </div>

      <h3 className="card__name">
        <HighlightMatch text={product.name} query={query} />
      </h3>

      <div className="card__bottom">
        <span className="card__price">{currency.format(product.price)}</span>
        <span className={`card__stock ${tier.className}`}>{tier.label}</span>
      </div>
    </article>
  );
}
