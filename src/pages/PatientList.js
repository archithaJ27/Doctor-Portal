// src/pages/PatientList.js
import React from 'react';

const patients = [
  { id: 1, name: 'John Doe', age: 44, gender: 'Male' },
  { id: 2, name: 'Maria Lee', age: 38, gender: 'Female' },
  //...more data
];

export default function PatientList() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Patient List</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {patients.map(({id, name, age, gender}) => (
          <li key={id} style={{ backgroundColor: '#F8F0DB', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
            <strong style={{color: '#46654A'}}>{name}</strong>, Age: {age}, Gender: {gender}
          </li>
        ))}
      </ul>
    </main>
  );
}
