import React from 'react';
import { NavLink } from 'react-router-dom';

const sidebarStyle = {
  width: '220px',
  backgroundColor: '#46654A',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '6px',
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const activeLinkStyle = {
  backgroundColor: '#ECB96D',
  color: '#46654A',
};

export default function Sidebar() {
  return (
    <nav style={sidebarStyle}>
      <h2 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Doctor Portal</h2>
      <NavLink to="/" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)} end>Dashboard</NavLink>
      <NavLink to="/appointments" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Appointments</NavLink>
      <NavLink to="/patients" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Patient List</NavLink>
      <NavLink to="/patient-details" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Patient Details</NavLink>
      <NavLink to="/prescriptions" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Prescriptions</NavLink>
      <NavLink to="/medical-records" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Medical Records</NavLink>
      <NavLink to="/messages" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Messages</NavLink>
      <NavLink to="/profile" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Profile</NavLink>
      <NavLink to="/notifications" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Notifications</NavLink>
      <NavLink to="/settings" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Settings</NavLink>
      <NavLink to="/forum" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Forum</NavLink>
      <NavLink to="/download" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}>Download App</NavLink>
    </nav>
  );
}
