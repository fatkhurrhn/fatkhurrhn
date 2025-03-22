import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ProfileSection from "../PageSection/HomePage/Profile";
import BlogSection from "../PageSection/HomePage/Blogs";
import ExperienceSection from "../PageSection/HomePage/Experiences";
import GithubSection from "../PageSection/HomePage/Github";
import SkillSection from "../PageSection/HomePage/Skills";
import ProjectSection from "../PageSection/HomePage/Project";
import CertificateSection from "../PageSection/HomePage/Certificates";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Profile Section */}
                <ProfileSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* GitHub Activity Section*/}
                <GithubSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* skills section */}
                <SkillSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* project section */}
                <ProjectSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* sertifikat section */}
                <CertificateSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* experience section */}
                <ExperienceSection />

                {/* Driver */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* blog section */}
                <BlogSection />
            </section>
            <Footer />
        </div>
    );
}
