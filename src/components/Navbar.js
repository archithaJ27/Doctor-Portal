import React from 'react';

const navbarStyle = {
  backgroundColor: '#ECB96D',
  padding: '1rem 2rem',
  color: '#46654A',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

export default function Navbar() {
  return (
    <header style={navbarStyle}>
      Doctor Portal - Welcome
    </header>
  );
}
