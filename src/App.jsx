import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tes from './PagesCoding/Tes';
import HomePage from './PagesCoding/HomePage';
import Project from './PagesCoding/Project';
import Certificate from './PagesCoding/Certificate';
import Writing from './PagesCoding/Writings';
import Guestbook from './PagesCoding/Guestbook';

import Writings1 from './PagesCoding/DetailWritings/tailwind-ui-is-now-tailwind-plus';

import Home from './Home';
import Template from './Template';

import MentahanVideo from "./PagesCreator/MentahanVideo";
import MentahanFoto from "./PagesCreator/MentahanFoto";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tes" element={<Tes />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/writings" element={<Writing />} />
        <Route path="/guestbook" element={<Guestbook />} />

        <Route path="/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings1 />} />

        <Route path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
        
        <Route path="/creator/mentahan-video" element={<MentahanVideo />} />
        <Route path="/creator/mentahan-foto" element={<MentahanFoto />} />
      </Routes>
    </Router>
  );
}

export default App;
