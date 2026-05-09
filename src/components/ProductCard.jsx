import { useState } from "react";

function ProductCard({ product }) {
  const [stock, setStock] = useState(product.stock || 0);

  return (
    <article className="product-card">
      <h3>{product.name}</h3>

      <div className="controls-row">
        <button
          className="stock-btn minus"
          onClick={() => setStock((current) => Math.max(0, current - 1))}
          aria-label={`Decrease stock for ${product.name}`}
        >
          −
        </button>

        <span className="stock-number">{stock}</span>

        <button
          className="stock-btn plus"
          onClick={() => setStock((current) => current + 1)}
          aria-label={`Increase stock for ${product.name}`}
        >
          +
        </button>
      </div>
    </article>
  );
}

export default ProductCard;