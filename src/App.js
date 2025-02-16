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

// import blog
import BlogDetail from "./detail-blog/blog-1";
import BlogDetail2 from "./detail-blog/blog-2";
import BlogDetail3 from "./detail-blog/blog-3";
import BlogDetail4 from "./detail-blog/blog-4";
import BlogDetail5 from "./detail-blog/blog-5";
import BlogDetail6 from "./detail-blog/blog-6";

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

        <Route path="/blog-1" element={<BlogDetail />} /> 
        <Route path="/blog-2" element={<BlogDetail2 />} /> 
        <Route path="/blog-3" element={<BlogDetail3 />} /> 
        <Route path="/blog-4" element={<BlogDetail4 />} /> 
        <Route path="/blog-5" element={<BlogDetail5 />} /> 
        <Route path="/blog-6" element={<BlogDetail6 />} /> 

      </Routes>
    </Router>
  );
}

export default App;
