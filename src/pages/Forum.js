// src/pages/Forum.js
import React from 'react';

const posts = [
  { id: 1, user: 'Dr. Prema Narang', content: 'How do you handle seasonal allergies?', date: '2025-07-28' },
  { id: 2, user: 'Dr. Amit Patel', content: 'Best herbal remedies for anxiety?', date: '2025-07-27' },
];

export default function Forum() {
  return (
    <main style={{ padding: '2rem', background: '#F7F3E9', minHeight: '100vh' }}>
      <h2 style={{ color: '#46654A' }}>Forum</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        {posts.map(({ id, user, content, date }) => (
          <li key={id} style={{
            backgroundColor: '#F8F0DB',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            color: '#383A2D',
          }}>
            <p><strong>{user}</strong> <small style={{float: 'right', color: '#888'}}>{date}</small></p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
