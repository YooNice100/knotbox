import { products } from "../data/products";
import ProductCard from "./ProductCard";

function Dashboard() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <main>
      <h2>Inventory Dashboard</h2>

      {categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category === category
        );

        return (
          <section key={category}>
            <h3>{category}</h3>

            <div>
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Dashboard;