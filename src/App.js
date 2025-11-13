import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListPage from './components/ProductListPage';
import CartPage from './components/CartPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListPage />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <CartPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
