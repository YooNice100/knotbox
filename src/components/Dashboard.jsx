import ProductCard from "./ProductCard";

function Dashboard() {
  return (
    <div>
      <h2>Inventory</h2>

      <ProductCard
        name="Frog Plush"
        stock={3}
      />

      <ProductCard
        name="Bear Keychain"
        stock={8}
      />
    </div>
  );
}

export default Dashboard;