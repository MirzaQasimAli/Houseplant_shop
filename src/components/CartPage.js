import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from '../redux/actions';
import CartItem from './CartItem';

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const entries = Object.values(items);

  const totalPlants = entries.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalCost = entries.reduce(
    (sum, entry) => sum + entry.quantity * entry.plant.price,
    0
  );

  const handleIncrease = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <main style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '1.7rem', marginBottom: '16px' }}>Shopping Cart</h2>

      {entries.length === 0 ? (
        <div>
          <p style={{ marginBottom: '16px' }}>Your cart is currently empty.</p>
          <Link to="/products">
            <button
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: '#16a34a',
                color: '#f9fafb',
              }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              maxWidth: '640px',
            }}
          >
            <p>Total number of plants: <strong>{totalPlants}</strong></p>
            <p>
              Total cost:{' '}
              <strong>${totalCost.toFixed(2)}</strong>
            </p>
          </section>

          <section style={{ marginBottom: '24px', maxWidth: '800px' }}>
            {entries.map((entry) => (
              <CartItem
                key={entry.plant.id}
                plant={entry.plant}
                quantity={entry.quantity}
                onIncrease={() => handleIncrease(entry.plant.id)}
                onDecrease={() => handleDecrease(entry.plant.id)}
                onRemove={() => handleRemove(entry.plant.id)}
              />
            ))}
          </section>

          <section style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => alert('Checkout Coming Soon!')}
              style={{
                padding: '8px 16px',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: '#0ea5e9',
                color: '#f9fafb',
              }}
            >
              Checkout
            </button>
            <Link to="/products">
              <button
                style={{
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: '1px solid #d1d5db',
                  backgroundColor: '#ffffff',
                  color: '#111827',
                }}
              >
                Continue Shopping
              </button>
            </Link>
          </section>
        </>
      )}
    </main>
  );
};

export default CartPage;
