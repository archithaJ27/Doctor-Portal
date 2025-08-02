// src/pages/Notifications.js
import React from 'react';

const notifications = [
  { id: 1, message: 'You have a new appointment request.', date: 'Today' },
  { id: 2, message: 'Patient Maria uploaded new medical documents.', date: 'Yesterday' },
];

export default function Notifications() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Notifications</h2>
      <ul style={{listStyle: 'none', padding:0, marginTop:'1rem'}}>
        {notifications.map(({id, message, date}) => (
          <li key={id} style={{
            backgroundColor: '#F8F0DB',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            color: '#383A2D',
          }}>
            {message} <br/>
            <small style={{color: '#888'}}>{date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
