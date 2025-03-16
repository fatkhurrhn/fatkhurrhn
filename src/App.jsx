import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './PagesCoding/Tes';
import HomePage from './PagesCoding/HomePage';
import Project from './PagesCoding/Project';
import Certificate from './PagesCoding/Certificate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tes />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
