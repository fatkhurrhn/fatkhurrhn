import React, { useState, useEffect } from "react";
import NavNavigate from "../components/NavNavigate";
import Footer from "../components/Footer";
import ProfileSection from "../components/ProfileSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificatesSection from "../components/CertificatesSection";
import ExperienceSection from "../components/ExperienceSection";
import BlogSection from "../components/BlogSection";
import GithubActivity from "../components/GithubActivity";
import Divider from "../components/Divider";
import EducationSection from "../components/EducationSection";

import ChatRoom from "../components/ChatRoom";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(savedTheme);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
      <NavNavigate />
      <ChatRoom />
      <section className="max-w-4xl mx-auto px-5 pt-4">
        <ProfileSection />

        <Divider />
        <GithubActivity />

        <Divider />
        <SkillsSection />

        <Divider />
        <ProjectsSection />

        <Divider />
        <CertificatesSection />

        <Divider />
        <EducationSection />

        <Divider />
        <ExperienceSection />

        <Divider />
        <BlogSection />
      </section>
      <Footer />
    </div>
  );
}