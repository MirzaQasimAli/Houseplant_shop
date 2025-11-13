import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import products from '../redux/products';
import { addToCart } from '../redux/actions';
import PlantCard from './PlantCard';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <main style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '1.7rem', marginBottom: '8px' }}>Our Houseplants</h2>
      <p style={{ color: '#4b5563', marginBottom: '24px' }}>
        Browse our curated selection of indoor plants. Click &quot;Add to Cart&quot; to
        start building your collection.
      </p>

      {categories.map((category) => (
        <section key={category} style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: '1.3rem',
              marginBottom: '12px',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '4px',
            }}
          >
            {category}
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {products
              .filter((p) => p.category === category)
              .map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  inCart={Boolean(items[plant.id])}
                  onAddToCart={() => handleAdd(plant)}
                />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default ProductListPage;
