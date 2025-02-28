import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkPage from './Pages/LinkPage';
import HomePage from './Pages/HomePage';
import Certificate from './Pages/Certificate';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import RamadhanPlanner from './Pages/RamadhanPlanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ramadhan-planner" element={<RamadhanPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
