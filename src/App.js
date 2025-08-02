import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Import all 12 pages
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import PatientList from './pages/PatientList';
import PatientDetails from './pages/PatientDetails';
import Prescriptions from './pages/Prescriptions';
import MedicalRecords from './pages/MedicalRecords';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Forum from './pages/Forum';
import DownloadApp from './pages/DownloadApp';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#F7F3E9' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1, padding: '1rem 2rem', overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/patients" element={<PatientList />} />
              <Route path="/patient-details" element={<PatientDetails />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/medical-records" element={<MedicalRecords />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/download" element={<DownloadApp />} />
              {/* Redirect unknown routes to Dashboard */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
