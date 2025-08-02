// src/pages/Appointments.js
import React from 'react';

const appointments = [
  { id: 1, patient: 'John Doe', time: '10:00 AM', mode: 'Video Call' },
  { id: 2, patient: 'Maria Lee', time: '11:30 AM', mode: 'Voice Call' },
  // ...More mock data
];

export default function Appointments() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Appointments</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={thStyle}>Patient</th>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Session Mode</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(({id, patient, time, mode}) => (
            <tr key={id} style={{ backgroundColor: id % 2 === 0 ? '#F8F0DB' : 'white' }}>
              <td style={tdStyle}>{patient}</td>
              <td style={tdStyle}>{time}</td>
              <td style={tdStyle}>{mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const thStyle = {textAlign: 'left', padding: '0.75rem', borderBottom: '2px solid #46654A', color: '#46654A'};
const tdStyle = {padding: '0.75rem', borderBottom: '1px solid #E6E0CC', color: '#383A2D'};
