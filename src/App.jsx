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

// ─── Creator Pages ──────────────────────────────────
import Creator from './pages/creator/HomePage';
import Storythur from './pages/creator/Storythur';
import Quotes from './pages/creator/Quotes';
import Mentahan from './pages/creator/Mentahan';
import MentahanAudio from './pages/creator/MentahanAudio';
import MentahanVideo from './pages/creator/MentahanVideo';
import Other from './pages/creator/Other';
import Store from './pages/creator/Store';

import StoreMl from './pages/creator/detailStore/DetailDiamondML';
import StoreNetflix from './pages/creator/detailStore/DetailNetflix';
import StoreCapcut from './pages/creator/detailStore/DetailCapcut';
import StoreCanva from './pages/creator/detailStore/DetailCanva';
import StoreViu from './pages/creator/detailStore/DetailViu';
import StoreAM from './pages/creator/detailStore/DetailAlightMotion';
import StoreYT from './pages/creator/detailStore/DetailYoutube';

// ─── Islamic Page ───────────────────────────────────
import Islamic from './pages/Islamic/Islamic';

// ─── Tools Pages ────────────────────────────────────
import HomePageTools from './pages/tools/HomePage';
import ShortlinkPage from './pages/tools/shortlinks/ShortLinks';
import PasswordGenerator from './pages/tools/PasswordGenerator';
import TextCaseConverter from './pages/tools/TextCaseConverter';
import WhatsAppTextConverter from './pages/tools/WhatsAppTextConverter';

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

        {/* ── Tools Routes ──────────────── */}
        <Route path="/tools" element={<HomePageTools />} />
        <Route path="/tools/shortlink" element={<ShortlinkPage />} />
        <Route path="/tools/password-generator" element={<PasswordGenerator />} />
        <Route path="/tools/text-case-converter" element={<TextCaseConverter />} />
        <Route path="/tools/whatsapp-text-converter" element={<WhatsAppTextConverter />} />
        <Route path="/:slug" element={<ShortlinkPage />} />

        {/* ── Frontdev Routes ───────────── */}
        <Route path="/frontdev/projects" element={<Project />} />
        <Route path="/frontdev/certificates" element={<Certificate />} />
        <Route path="/frontdev/guestbook" element={<Guestbook />} />
        <Route path="/frontdev/github" element={<GithubRepo />} />
        <Route path="/frontdev/others" element={<OtherFrontDev />} />
        <Route path="/frontdev/blogs" element={<Blogs />} />
        <Route path="/frontdev/blogs/:slug" element={<DetailBlog />} />
        <Route path="/frontdev/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* ── Creator Routes ────────────── */}
        <Route path="/creator" element={<Creator />} />
        <Route path="/creator/storythur" element={<Storythur />} />
        <Route path="/creator/quotes" element={<Quotes />} />
        <Route path="/creator/mentahan" element={<Mentahan />} />
        <Route path="/creator/mentahan-audio" element={<MentahanAudio />} />
        <Route path="/creator/mentahan-video" element={<MentahanVideo />} />
        <Route path="/creator/other" element={<Other />} />

        {/* ── Creator Store ─────────────── */}
        <Route path="/creator/store" element={<Store />} />
        <Route path="/creator/store/diamond-ml" element={<StoreMl />} />
        <Route path="/creator/store/netflix" element={<StoreNetflix />} />
        <Route path="/creator/store/capcut" element={<StoreCapcut />} />
        <Route path="/creator/store/canva" element={<StoreCanva />} />
        <Route path="/creator/store/viu" element={<StoreViu />} />
        <Route path="/creator/store/alight-motion" element={<StoreAM />} />
        <Route path="/creator/store/youtube" element={<StoreYT />} />

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
