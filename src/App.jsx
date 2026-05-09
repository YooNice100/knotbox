// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import InventoryPage from "./pages/InventoryPage";
import "./App.css";

function App() {
  return (
    <>
      <nav className="top-nav">
        <h1>KnotBox</h1>

        <div>
          <button>Inventory</button>
          <button>Events</button>
          <button>Products</button>
        </div>
      </nav>

      <InventoryPage />
    </>
  );
}

export default App;