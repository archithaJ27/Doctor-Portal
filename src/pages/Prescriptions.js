// src/pages/Prescriptions.js
import React from 'react';

const prescriptions = [
  { id: 1, medication: 'Ashwagandha', dose: '500 mg', duration: '30 days' },
  { id: 2, medication: 'Tulsi Tea', dose: '2 cups daily', duration: '15 days' },
];

export default function Prescriptions() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Prescriptions</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {prescriptions.map(({ id, medication, dose, duration }) => (
          <li key={id} style={{
            backgroundColor: '#F8F0DB',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            color: '#383A2D',
          }}>
            <strong>{medication}</strong> – {dose} for {duration}
          </li>
        ))}
      </ul>
    </main>
  );
}
