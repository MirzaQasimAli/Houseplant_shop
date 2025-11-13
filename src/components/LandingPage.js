import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const backgroundStyle = {
    minHeight: '100vh',
    backgroundImage:
      "url('https://images.pexels.com/photos/3076899/pexels-photo-3076899.jpeg?auto=compress&cs=tinysrgb&w=1200')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#f9fafb',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(21,94,49,0.75) 60%, rgba(34,197,94,0.5) 100%)',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '640px',
    margin: '0 auto',
    paddingTop: '20vh',
    paddingInline: '24px',
    textAlign: 'left',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>
          Houseplant Shop
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
          Welcome to Houseplant Shop, your online destination for lush, healthy
          indoor plants. From low-maintenance greens to statement centerpieces,
          we hand-pick every plant to help you build the indoor jungle of your
          dreams.
        </p>
        <Link to="/products">
          <button
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              backgroundColor: '#22c55e',
              color: '#022c22',
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
