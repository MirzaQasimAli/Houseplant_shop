import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const location = useLocation();
  const items = useSelector((state) => state.cart.items);
  const totalCount = Object.values(items).reduce(
    (sum, entry) => sum + entry.quantity,
    0
  );

  return (
    <header
      style={{
        backgroundColor: '#0f172a',
        color: '#f9fafb',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/products" style={{ fontSize: '1.3rem', fontWeight: '700' }}>
        Houseplant Shop
      </Link>
      <nav style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Link
          to="/products"
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor:
              location.pathname === '/products' ? '#1f2937' : 'transparent',
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor:
              location.pathname === '/cart' ? '#1f2937' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span role="img" aria-label="cart">
            🛒
          </span>
          <span>{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
