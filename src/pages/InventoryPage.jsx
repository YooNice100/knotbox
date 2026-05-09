import { useState } from "react";
import { products } from "../data/products";
import CategorySection from "../components/CategorySection";

function InventoryPage() {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchText, setSearchText] = useState("");

  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">KnotBox</p>
        <h1>Inventory Dashboard</h1>
        <p>Track handmade plushies, keychains, and market stock.</p>
      </header>

      <div className="filter-bar">
        <label htmlFor="product-search">Search products</label>
        <input
          id="product-search"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by product name..."
        />
      </div>

      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`tab ${activeCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <CategorySection
        category={activeCategory}
        products={visibleProducts}
      />
    </main>
  );
}

export default InventoryPage;