import React from "react";
import Navbar from "../components/Navbar-temp";
import Footer from "../components/Footer";
import Giscus from '@giscus/react';

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-300 transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-6 pt-20">
                
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-[#d4d4d4] font-bold">💬 Discussion</h2>
                    <a href="/blog" className="text-xs text-zinc-500">
                    Join the conversation below!
                    </a>
                </div>
                {/* Komentar Giscus langsung tanpa box */}
                <Giscus
                    id="comments"
                    repo="fatkhurrhn/fatkhurrhn"
                    repoId="R_kgDON55_yQ="
                    category="Announcements"
                    categoryId="DIC_kwDON55_yc4CoHRy"
                    mapping="pathname"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="top"
                    theme="transparent_dark"
                    lang="en"
                    loading="lazy"
                />
            </section>
            <Footer />
        </div>
    );
}
