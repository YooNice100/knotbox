// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import { useState } from "react";
import InventoryPage from "./pages/InventoryPage";
import PatternsPage from "./pages/PatternsPage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("inventory");

  return (
    <>
      <nav className="top-nav">
        <h1>KnotBox</h1>

        <div className="nav-buttons">
          <button type="button" onClick={() => setCurrentPage("inventory")}>
            Inventory
          </button>

          <button type="button" onClick={() => setCurrentPage("patterns")}>
            Patterns
          </button>
        </div>
      </nav>

      {currentPage === "inventory" && <InventoryPage />}
      {currentPage === "patterns" && <PatternsPage />}
    </>
  );
}

export default App;