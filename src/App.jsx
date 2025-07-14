import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/frontdev/HomePage';
import Project from './pages/frontdev/Project';
import Certificate from './pages/frontdev/Certificate';
import Guestbook from './pages/frontdev/Guestbook';
import Resume from './pages/Resume';

// blogs page
import Blogs from './pages/frontdev/Blog';
import DetailBlog from './pages/frontdev/DetailBlog';
import Writings01 from './pages/DetailWritings/tailwind-ui-is-now-tailwind-plus';

// sisi Admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProject from './pages/admin/ManageProject';
import AdminCertificate from './pages/admin/ManageCertificate';
import ManageBlogs from './pages/admin/ManageBlogs';
import DashboardAnime from './pages/admin/ManageAnime';
import DashboardReelsAnime from './pages/admin/ManageReelsAnime';

// sisi Anime
import HomeAnime from './pages/anime/Home';
import AnimeDetail from './pages/anime/AnimeDetail';
import EpisodePlayer from './pages/anime/EpisodePlayer';
import Story from './pages/anime/Story';
import Genre from './pages/anime/Genre';
import Status from './pages/anime/Status';
import More from './pages/anime/More';
import Tes from './pages/anime/Tes';
import Other from './pages/frontdev/Other';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/others" element={<Other />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="//blogs/:slug" element={<DetailBlog />} />
        <Route path="/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* Route Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/frontdev/manage-projects" element={<AdminProject />} />
        <Route path="/dashboard/frontdev/manage-certificates" element={<AdminCertificate />} />
        <Route path="/dashboard/frontdev/manage-blogs" element={<ManageBlogs />} />
        <Route path="/dashboard/manage-animes" element={<DashboardAnime />} />
        <Route path="/dashboard/animes/manage-reels" element={<DashboardReelsAnime />} />

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
