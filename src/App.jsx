import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './PagesCoding/Tes';
import HomePage from './PagesCoding/HomePage';
import Project from './PagesCoding/Project';
import Certificate from './PagesCoding/Certificate';
import Writing from './PagesCoding/Writing';
import Guestbook from './PagesCoding/Guestbook';

import Home from './Home';
import Template from './Template';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tes />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/guestbook" element={<Guestbook />} />

        <Route path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </Router>
  );
}

export default App;
