import { useState } from "react";

function ProductCard({ product }) {
  const [stock, setStock] = useState(product.stock);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <article className="product-card">
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </div>

      <div className="stock-row">
        {isEditing ? (
          <input
            type="number"
            value={stock}
            min="0"
            onChange={(event) => setStock(event.target.value)}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        ) : (
          <span className="stock-number">{stock}</span>
        )}

        <button
          className="edit-button"
          type="button"
          onClick={() => setIsEditing(true)}
          aria-label={`Edit stock for ${product.name}`}
        >
          ✏️
        </button>
      </div>
    </article>
  );
}

export default ProductCard;