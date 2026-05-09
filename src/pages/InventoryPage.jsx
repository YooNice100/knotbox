import { products } from "../data/products";
import CategorySection from "../components/CategorySection";

function InventoryPage() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">KnotBox</p>
        <h1>Inventory Dashboard</h1>
        <p>Track handmade plushies, keychains, and market stock.</p>
      </header>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <CategorySection
            key={category}
            category={category}
            products={categoryProducts}
          />
        );
      })}
    </main>
  );
}

export default InventoryPage;