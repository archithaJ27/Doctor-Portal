// src/pages/Dashboard.js
import React from 'react';
import { Button } from '../components/Button';

export default function Dashboard() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Join Amrutam – Grow Your Practice</h1>
      <p>Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.</p>
      <Button>Join Now</Button>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <div style={{
          background: '#F8F0DB', padding: '1.5rem', borderRadius: '10px', minWidth: '140px', textAlign: 'center'
        }}>
          <div style={{ color: '#46654A', fontSize: '2rem', fontWeight: 'bold' }}>500+</div>
          <div>Average Active Users</div>
        </div>
        <div style={{
          background: '#F8F0DB', padding: '1.5rem', borderRadius: '10px', minWidth: '140px', textAlign: 'center'
        }}>
          <div style={{ color: '#46654A', fontSize: '2rem', fontWeight: 'bold' }}>40+</div>
          <div>Daily Free Calls</div>
        </div>
      </div>
    </main>
  );
}
