// src/pages/MedicalRecords.js
import React from 'react';

const records = [
  { id: 1, title: 'Blood Test Report', date: '2025-06-01' },
  { id: 2, title: 'X-Ray Scan', date: '2025-05-15' },
];

export default function MedicalRecords() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Medical Records</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {records.map(({ id, title, date }) => (
          <li key={id} style={{
            backgroundColor: '#F8F0DB',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            color: '#383A2D',
          }}>
            <strong>{title}</strong> — {date}
          </li>
        ))}
      </ul>
    </main>
  );
}
