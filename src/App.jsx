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
import Creator from './pages/creator/HomePage';
import Blogs from './pages/frontdev/Blog';
import DetailBlog from './pages/frontdev/DetailBlog';
import Writings01 from './pages/frontdev/DetailWritings/tailwind-ui-is-now-tailwind-plus';
import OtherFrontDev from './pages/frontdev/OtherFrontDev';

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

import Islamic from './pages/Islamic/Islamic';
import Quotes from './pages/creator/Quotes';
import ManageQuotes from './pages/admin/ManageQuotes';
import MentahanAudio from './pages/creator/MentahanAudio';
import Other from './pages/creator/Other';
import Store from './pages/creator/Store';
import StoreMl from './pages/creator/detailStore/DetailDiamondML';
import StoreNetflix from './pages/creator/detailStore/DetailNetflix';
import StoreCapcut from './pages/creator/detailStore/DetailCapcut';
import StoreCanva from './pages/creator/detailStore/DetailCanva';
import StoreViu from './pages/creator/detailStore/DetailViu';
import StoreAM from './pages/creator/detailStore/DetailAlightMotion';
import StoreYT from './pages/creator/detailStore/DetailYoutube';
import MentahanVideo from './pages/creator/MentahanVideo';
import Mentahan from './pages/creator/Mentahan';

import ChatRoom from './pages/ChatRoom';
import ManageAudio from './pages/admin/ManageAudio';


import ShortlinkPage from './pages/tools/shortlinks/ShortLinks';
import PasswordGenerator from './pages/tools/PasswordGenerator';
import TextCaseConverter from './pages/tools/TextCaseConverter';
import WhatsAppTextConverter from './pages/tools/WhatsAppTextConverter';
import HomePageTools from './pages/tools/HomePage';

function App() {
  return (
    <Router>
      <Routes>

        {/* Route Main */}
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/chat" element={<ChatRoom />} />

        {/* Route Toole Page */}
        <Route path="/tools" element={<HomePageTools />} />
        <Route path="/tools/shortlink" element={<ShortlinkPage />} />
        <Route path="/:slug" element={<ShortlinkPage />} />
        <Route path="/tools/password-generator" element={<PasswordGenerator />} />
        <Route path="/tools/text-case-converter" element={<TextCaseConverter />} />
        <Route path="/tools/whatsapp-text-converter" element={<WhatsAppTextConverter />} />

        {/* Route Frontdev */}
        <Route path="/frontdev/projects" element={<Project />} />
        <Route path="/frontdev/certificates" element={<Certificate />} />
        <Route path="/frontdev/guestbook" element={<Guestbook />} />
        <Route path="/frontdev/github" element={<GithubRepo />} />
        <Route path="/frontdev/others" element={<OtherFrontDev />} />
        <Route path="/frontdev/blogs" element={<Blogs />} />
        <Route path="/frontdev/blogs/:slug" element={<DetailBlog />} />
        <Route path="/frontdev/writings/tailwind-ui-is-now-tailwind-plus" element={<Writings01 />} />

        {/* Route Creator */}
        <Route path="/creator" element={<Creator />} />
        <Route path="/creator/storythur" element={<Storythur />} />
        <Route path="/creator/quotes" element={<Quotes />} />
        <Route path="/creator/mentahan" element={<Mentahan />} />
        <Route path="/creator/mentahan-audio" element={<MentahanAudio />} />
        <Route path="/creator/mentahan-video" element={<MentahanVideo />} />
        <Route path="/creator/other" element={<Other />} />

        <Route path="/creator/store" element={<Store />} />
        <Route path="/creator/store/diamond-ml" element={<StoreMl />} />
        <Route path="/creator/store/netflix" element={<StoreNetflix />} />
        <Route path="/creator/store/capcut" element={<StoreCapcut />} />
        <Route path="/creator/store/canva" element={<StoreCanva />} />
        <Route path="/creator/store/viu" element={<StoreViu />} />
        <Route path="/creator/store/alight-motion" element={<StoreAM />} />
        <Route path="/creator/store/youtube" element={<StoreYT />} />

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

        {/* Route Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/frontdev/manage-projects" element={<AdminProject />} />
        <Route path="/dashboard/frontdev/manage-certificates" element={<AdminCertificate />} />
        <Route path="/dashboard/frontdev/manage-blogs" element={<ManageBlogs />} />
        <Route path="/dashboard/manage-animes" element={<DashboardAnime />} />
        <Route path="/dashboard/animes/manage-reels" element={<DashboardReelsAnime />} />
        <Route path="/dashboard/creator/manage-quotes" element={<ManageQuotes />} />
        <Route path="/dashboard/creator/manage-audio" element={<ManageAudio />} />
      </Routes>
    </Router>
  );
}

export default App;
