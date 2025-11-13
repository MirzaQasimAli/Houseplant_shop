import React from 'react';

const CartItem = ({
  plant,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const lineTotal = plant.price * quantity;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 120px 120px',
        gap: '12px',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <img
        src={plant.thumbnail}
        alt={plant.name}
        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <div>
        <h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>{plant.name}</h3>
        <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
          Unit price: ${plant.price}
        </p>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '4px',
          }}
        >
          <button
            onClick={onDecrease}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '999px',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={onIncrease}
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '999px',
              border: '1px solid #d1d5db',
              backgroundColor: '#f9fafb',
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={onRemove}
          style={{
            marginTop: '4px',
            padding: '4px 10px',
            borderRadius: '999px',
            border: 'none',
            backgroundColor: '#ef4444',
            color: '#f9fafb',
            fontSize: '0.8rem',
          }}
        >
          Delete
        </button>
      </div>
      <div style={{ textAlign: 'right', fontWeight: 600 }}>
        ${lineTotal.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
