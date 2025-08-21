import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Protected route
import ProtectedRoute from './components/common/ProtectedRoute';

// ─── Main Pages ──────────────────────────────────────
import Resume from './pages/Resume';
import HomePage from './pages/frontdev/HomePage';
import ChatRoom from './pages/ChatRoom';

// ─── Frontdev Pages ─────────────────────────────────
import Project from './pages/frontdev/Project';
import Certificate from './pages/frontdev/Certificate';
import Guestbook from './pages/frontdev/Guestbook';
import GithubRepo from './pages/frontdev/GithubRepo';
import Blogs from './pages/frontdev/Blog';
import DetailBlog from './pages/frontdev/DetailBlog';
import Writings01 from './pages/frontdev/DetailWritings/tailwind-ui-is-now-tailwind-plus';
import OtherFrontDev from './pages/frontdev/OtherFrontDev';

// ─── Islamic Page ───────────────────────────────────
import Islamic from './pages/Islamic/Islamic';

// ─── Admin Pages ────────────────────────────────────
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProject from './pages/admin/ManageProject';
import AdminCertificate from './pages/admin/ManageCertificate';
import ManageBlogs from './pages/admin/ManageBlogs';
import DashboardAnime from './pages/admin/ManageAnime';
import DashboardReelsAnime from './pages/admin/ManageReelsAnime';
import ManageQuotes from './pages/admin/ManageQuotes';
import ManageAudio from './pages/admin/ManageAudio';

function App() {
  return (
    <Router>
      <Routes>

        {/* ── Main Routes ───────────────── */}
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/chat" element={<ChatRoom />} />

        {/* ── Frontdev Routes ───────────── */}
        <Route path="/frontdev/projects" element={<Project />} />
        <Route path="/frontdev/certificates" element={<Certificate />} />
        <Route path="/frontdev/guestbook" element={<Guestbook />} />
        <Route path="/frontdev/github" element={<GithubRepo />} />
        <Route path="/frontdev/others" element={<OtherFrontDev />} />
        <Route path="/frontdev/blogs" element={<Blogs />} />
        <Route path="/frontdev/blogs/:slug" element={<DetailBlog />} />
        <Route path="/frontdev/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* ── Islamic Route ─────────────── */}
        <Route path="/islamic" element={<Islamic />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Admin / Dashboard (Protected) */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/frontdev/manage-projects" element={<ProtectedRoute><AdminProject /></ProtectedRoute>} />
        <Route path="/dashboard/frontdev/manage-certificates" element={<ProtectedRoute><AdminCertificate /></ProtectedRoute>} />
        <Route path="/dashboard/frontdev/manage-blogs" element={<ProtectedRoute><ManageBlogs /></ProtectedRoute>} />
        <Route path="/dashboard/manage-animes" element={<ProtectedRoute><DashboardAnime /></ProtectedRoute>} />
        <Route path="/dashboard/animes/manage-reels" element={<ProtectedRoute><DashboardReelsAnime /></ProtectedRoute>} />
        <Route path="/dashboard/creator/manage-quotes" element={<ProtectedRoute><ManageQuotes /></ProtectedRoute>} />
        <Route path="/dashboard/creator/manage-audio" element={<ProtectedRoute><ManageAudio /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
