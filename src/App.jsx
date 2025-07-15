import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// main
import Resume from './pages/Resume';

// frontdev 
import HomePage from './pages/frontdev/HomePage';
import Project from './pages/frontdev/Project';
import Certificate from './pages/frontdev/Certificate';
import Guestbook from './pages/frontdev/Guestbook';
import GithubRepo from './pages/frontdev/GithubRepo';
import Creator from './pages/creator/Creator';
import Blogs from './pages/frontdev/Blog';
import DetailBlog from './pages/frontdev/DetailBlog';
import Writings01 from './pages/frontdev/DetailWritings/tailwind-ui-is-now-tailwind-plus';
import Other from './pages/frontdev/Other';

// storythur
import Storythur from './pages/creator/Storythur';

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

import Islamic from './pages/Islamic';

function App() {
  return (
    <Router>
      <Routes>

        {/* Route Main */}
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />

        {/* Route Frontdev */}
        <Route path="/frontdev/projects" element={<Project />} />
        <Route path="/frontdev/certificates" element={<Certificate />} />
        <Route path="/frontdev/guestbook" element={<Guestbook />} />
        <Route path="/frontdev/github" element={<GithubRepo />} />
        <Route path="/frontdev/others" element={<Other />} />
        <Route path="/frontdev/blogs" element={<Blogs />} />
        <Route path="/frontdev/blogs/:slug" element={<DetailBlog />} />
        <Route path="/frontdev/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* Route Creator */}
        <Route path="/creators" element={<Creator />} />
        <Route path="/creators/storythur" element={<Storythur />} />

        {/* Route Islamic */}
        <Route path="/islamic" element={<Islamic />} />
        {/* <Route path="/islamic/jadwal-sholat" element={<JadwalSholat />} /> */}

        {/* Route Anime */}
        <Route path="/animes" element={<HomeAnime />} />
        <Route path="/animes/:id" element={<AnimeDetail />} />
        <Route path="/animes/:id/episode/:episodeNumber" element={<EpisodePlayer />} />
        <Route path="/animes/story" element={<Story />} />
        <Route path="/animes/genre" element={<Genre />} />
        <Route path="/genres/:genreName" element={<Genre />} />
        <Route path="/animes/status" element={<Status />} />
        <Route path="/animes/more" element={<More />} />
        <Route path="/animes/tes" element={<Tes />} />

        {/* Route Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/frontdev/manage-projects" element={<AdminProject />} />
        <Route path="/dashboard/frontdev/manage-certificates" element={<AdminCertificate />} />
        <Route path="/dashboard/frontdev/manage-blogs" element={<ManageBlogs />} />
        <Route path="/dashboard/manage-animes" element={<DashboardAnime />} />
        <Route path="/dashboard/animes/manage-reels" element={<DashboardReelsAnime />} />
      </Routes>
    </Router>
  );
}

export default App;
