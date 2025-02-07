import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkPage from './LinkPage';
import HomePage from './HomePage'; // Pastikan ini ada, jika tidak, bisa pakai App sebagai halaman utama.
import Certificate from './Certificate'; // Pastikan ini ada, jika tidak, bisa pakai App sebagai halaman utama.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
