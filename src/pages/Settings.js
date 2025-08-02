// src/pages/Settings.js
import React from 'react';

export default function Settings() {
  return (
    <main style={{
      padding: '2rem',
      background: '#F7F3E9',
      minHeight: '100vh',
      color: '#383A2D',
    }}>
      <h2 style={{ color: '#46654A' }}>Settings</h2>
      <section style={{
        backgroundColor: '#F8F0DB',
        borderRadius: '10px',
        padding: '1.5rem',
        maxWidth: '600px',
        marginTop: '1rem',
      }}>
        <h3>Newsletter Subscription</h3>
        <form>
          <input
            type="email"
            placeholder="email@example.com"
            style={{
              padding: '0.5rem',
              borderRadius: '5px',
              border: '1px solid #46654A',
              width: '70%',
              marginRight: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#46654A',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Subscribe
          </button>
        </form>
        {/* Add more settings fields as needed */}
      </section>
    </main>
  );
}
