import { useState } from "react";

function ProductCard({ product }) {
  const [stock, setStock] = useState(product.stock);
  const [draftStock, setDraftStock] = useState(product.stock);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setDraftStock(stock);
    setIsEditing(true);
  }

  function handleSave() {
    setStock(draftStock);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraftStock(stock);
    setIsEditing(false);
  }

  function decreaseStock() {
    setDraftStock((currentStock) => Math.max(0, Number(currentStock) - 1));
  }

  function increaseStock() {
    setDraftStock((currentStock) => Number(currentStock) + 1);
  }

  return (
    <article className="product-card">
      <h3>{product.name}</h3>

      {isEditing ? (
        <div className="edit-stock-panel">
          <div className="quantity-controls">
            <button type="button" onClick={decreaseStock}>
              -
            </button>

            <input
              type="number"
              min="0"
              value={draftStock}
              onChange={(event) => setDraftStock(event.target.value)}
            />

            <button type="button" onClick={increaseStock}>
              +
            </button>
          </div>

          <div className="edit-actions">
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>

            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="stock-controls">
          <span className="stock-number">{stock}</span>

          <button className="edit-button" type="button" onClick={handleEdit}>
            ✏️
          </button>
        </div>
      )}
    </article>
  );
}

export default ProductCard;