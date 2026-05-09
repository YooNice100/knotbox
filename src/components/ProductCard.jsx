function ProductCard({ product }) {
  return (
    <div>
      <h4>{product.name}</h4>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

export default ProductCard;