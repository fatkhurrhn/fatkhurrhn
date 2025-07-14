import React, { useState, useEffect } from "react";
import NavNavigate from "../components/NavNavigate";
import Footer from "../components/Footer";
import ProfileSection from "../components/home/ProfileSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import CertificatesSection from "../components/home/CertificatesSection";
import ExperienceSection from "../components/home/ExperienceSection";
import BlogSection from "../components/home/BlogSection";
import GithubActivity from "../components/home/GithubActivity";
import Divider from "../components/home/Divider";

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
        
        <Divider />
        <ExperienceSection />
        
        <Divider />
        <BlogSection />
      </section>
      <Footer />
    </div>
  );
}