// src/pages/PatientDetails.js
import React from 'react';

const patient = {
  name: 'John Doe',
  age: 44,
  gender: 'Male',
  height: '175 cm',
  weight: '70 kg',
  healthConcern: 'High blood pressure',
};

export default function PatientDetails() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Patient Details</h2>
      <div style={{ backgroundColor: '#F8F0DB', borderRadius: '10px', padding: '1.5rem', maxWidth: '400px' }}>
        {Object.entries(patient).map(([key, value]) => (
          <p key={key} style={{ color: '#383A2D', marginBottom: '0.5rem' }}>
            <strong style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
          </p>
        ))}
      </div>
    </main>
  );
}
