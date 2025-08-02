// src/pages/Messages.js
import React from 'react';

const messages = [
  { id: 1, from: 'Maria Lee', content: 'Can we reschedule our appointment?', time: 'Today 9:30 AM' },
  { id: 2, from: 'John Doe', content: 'Thank you for the consultation.', time: 'Yesterday 4:15 PM' },
];

export default function Messages() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Messages</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {messages.map(({ id, from, content, time }) => (
          <li key={id} style={{
            backgroundColor: '#F8F0DB',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
          }}>
            <p style={{ margin: 0, color: '#46654A' }}><strong>{from}</strong></p>
            <p style={{ margin: '0.5rem 0' }}>{content}</p>
            <span style={{ fontSize: '0.8rem', color: '#888' }}>{time}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
