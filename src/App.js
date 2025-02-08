import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkPage from './LinkPage';
import HomePage from './HomePage';
import Certificate from './Certificate';
import Project from './Project';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
