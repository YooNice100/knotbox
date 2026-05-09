import ProductCard from "./ProductCard";

function CategorySection({ category, products }) {
  if (products.length === 0) {
    return (
      <section className="category-section">
        <h2>{category}</h2>
        <p>No products match your search.</p>
      </section>
    );
  }

  return (
    <section className="category-section">
      <h2>{category}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;