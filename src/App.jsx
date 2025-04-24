import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/index';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Guestbook from './pages/Guestbook';
import Writings from './pages/Writing';

import Writings01 from './pages/DetailWritings/tailwind-ui-is-now-tailwind-plus';

// sisi Admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProject from './pages/admin/Project';
import AdminCertificate from './pages/admin/Certificate';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/writings" element={<Writings />} />

        <Route path="/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* Route Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/project" element={<AdminProject />} />
        <Route path="/admin/certificate" element={<AdminCertificate />} />
      </Routes>
    </Router>
  );
}

export default App;
