import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LinkPage from './Pages/LinkPage';
import HomePage from './Pages/HomePage';
import Certificate from './Pages/Certificate';
import Project from './Pages/Project';
import Blog from './Pages/Blog';

import Islamic from './Pages/Islamic.js';
import News from './Pages/Islamic/News-islamic';
import JadwalSholat from './Pages/Islamic/JadwalSholat';
import Kiblat from './Pages/Islamic/Kiblat';
import Kalender from './Pages/Islamic/Kalender';
import Tes from './Pages/Tes.js';
import Hasil from './Pages/Sample';
import Tess from './Pages/Islamic/tess';
import Doa from './Pages/Islamic/doa';

import DzikirPagi from './Pages/Islamic/doa/WiridHarian/DzikirPagi';
import WiridHome from './Pages/Islamic/doa/WiridHarian/WiridHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/islamic" element={<Islamic />} />
        <Route path="/news-islamic" element={<News />} />
        <Route path="/jadwal-sholat" element={<JadwalSholat />} />
        <Route path="/kiblat" element={<Kiblat />} />
        <Route path="/kalender" element={<Kalender />} />
        <Route path="/tes" element={<Tes />} />
        <Route path="/hasil" element={<Hasil />} />
        <Route path="/tess" element={<Tess />} />
        <Route path="/doa" element={<Doa />} />

        <Route path="/dzikir-pagi" element={<DzikirPagi />} />
        <Route path="/wirid-home" element={<WiridHome />} />
      </Routes>
    </Router>
  );
}

export default App;
