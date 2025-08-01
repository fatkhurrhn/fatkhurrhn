import React from "react";
import NavNavigate from "../../components/frontdev/NavNavigate";
import Footer from "../../components/frontdev/Footer";
import Giscus from '@giscus/react';
import ChatRoomComponents from "../../components/ChatRoom";

export default function Page() {
    return (
        <div className="bg-white min-h-screen text-gray-300 transition-colors duration-300">
            <NavNavigate />
            <ChatRoomComponents/>
            <section className="max-w-4xl mx-auto px-6 pt-4">

                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-gray-800 font-bold">💬 Discussionn</h2>
                    <a href="/guestbook" className="text-xs text-gray-800">
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
                    theme="light"
                    lang="en"
                    loading="lazy"
                />
            </section>
            <Footer />
        </div>
    );
}
