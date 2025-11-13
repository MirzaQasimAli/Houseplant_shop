import React from 'react';

const PlantCard = ({ plant, inCart, onAddToCart }) => {
  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img
        src={plant.thumbnail}
        alt={plant.name}
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />
      <div style={{ padding: '12px 14px', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{plant.name}</h3>
        <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '8px' }}>
          {plant.category}
        </p>
        <p style={{ fontWeight: '600', marginBottom: '8px' }}>${plant.price}</p>
        <button
          disabled={inCart}
          onClick={onAddToCart}
          style={{
            width: '100%',
            padding: '8px 0',
            borderRadius: '999px',
            border: 'none',
            fontWeight: 600,
            backgroundColor: inCart ? '#9ca3af' : '#16a34a',
            color: '#f9fafb',
          }}
        >
          {inCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
