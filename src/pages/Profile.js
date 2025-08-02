// src/pages/Profile.js
import React from 'react';

const doctor = {
  name: 'Dr. Prema Narang',
  specialty: 'Ayurvedic Medicine',
  email: 'prema.narang@example.com',
  phone: '+91 9876543210',
};

export default function Profile() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Profile</h2>
      <div style={{
        backgroundColor: '#F8F0DB',
        borderRadius: '10px',
        padding: '1.5rem',
        maxWidth: '400px',
        color: '#383A2D',
      }}>
        {Object.entries(doctor).map(([key, val]) => (
          <p key={key} style={{ marginBottom: '0.5rem' }}>
            <strong style={{ textTransform: 'capitalize' }}>{key}:</strong> {val}
          </p>
        ))}
      </div>
    </main>
  );
}
