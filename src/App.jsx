import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Guestbook from './pages/Guestbook';
import Blogs from './pages/Blog';
import Writings01 from './pages/DetailWritings/tailwind-ui-is-now-tailwind-plus';
// sisi Admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProject from './pages/admin/Project';
import AdminCertificate from './pages/admin/Certificate';

// sisi Anime
import HomeAnime from './pages/anime/Home';
import AnimeDetail from './pages/anime/AnimeDetail';
import EpisodePlayer from './pages/anime/EpisodePlayer';
import Story from './pages/anime/Story';
import Genre from './pages/anime/Genre';
import Status from './pages/anime/Status';
import More from './pages/anime/More';
import DashboardAnime from './pages/admin/DashboardAnime';
import DashboardStoryAnime from './pages/admin/DashboardStoryAnime';
import Tes from './pages/anime/Tes';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* Route Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/projects" element={<AdminProject />} />
        <Route path="/admin/certificates" element={<AdminCertificate />} />
        <Route path="/admin/dashboard-animes" element={<DashboardAnime />} />
        <Route path="/admin/dashboard-animes-story" element={<DashboardStoryAnime />} />

        {/* Route Anime */}
        <Route path="/anime" element={<HomeAnime />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/anime/:id/episode/:episodeNumber" element={<EpisodePlayer />} />
        <Route path="/anime/story" element={<Story />} />
        <Route path="/anime/genre" element={<Genre />} />
        <Route path="/genre/:genreName" element={<Genre />} />
        <Route path="/anime/status" element={<Status />} />
        <Route path="/anime/more" element={<More />} />
        <Route path="/anime/tes" element={<Tes />} />
      </Routes>
    </Router>
  );
}

export default App;
