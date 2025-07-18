import React, { useState, useEffect } from "react";
import NavNavigate from "../../components/frontdev/NavNavigate";
import Footer from "../../components/frontdev/Footer";
import ProfileSection from "../../components/frontdev/ProfileSection";
import SkillsSection from "../../components/frontdev/SkillsSection";
import ProjectsSection from "../../components/frontdev/ProjectsSection";
import CertificatesSection from "../../components/frontdev/CertificatesSection";
import ExperienceSection from "../../components/frontdev/ExperienceSection";
import BlogSection from "../../components/frontdev/BlogSection";
import GithubActivity from "../../components/frontdev/GithubActivity";
import Divider from "../../components/frontdev/Divider";
import EducationSection from "../../components/frontdev/EducationSection";

import ChatRoom from "../../components/ChatRoom";

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
      <ChatRoom/>
      <section className="max-w-4xl mx-auto px-5 pt-[95px]">
        <ProfileSection />

        <Divider />
        <GithubActivity />

        <Divider />
        <SkillsSection />

        <Divider />
        <ProjectsSection />

        <Divider />
        <CertificatesSection />

        <Divider/>
        <EducationSection/>

        <Divider />
        <ExperienceSection />

        <Divider />
        <BlogSection />
      </section>
      <Footer />
    </div>
  );
}