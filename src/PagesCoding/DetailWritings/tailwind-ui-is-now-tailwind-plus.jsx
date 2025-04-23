import React from "react";
import Navbar from "../../components/Navbar-temp";
import Footer from "../../components/Footer";

import Thumbnail from "../../assets/Tailwind UI is now Tailwind Plus.webp"

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">

                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/">home</a><i class="ri-arrow-drop-right-line"></i>
                        <a href="/writings">writings</a><i class="ri-arrow-drop-right-line"></i>
                        tailwind ui is now tailwind plus</h2>
                </div>

                {/* Title & Metadata */}
                <div className="mt-5 text-center">
                    <h1 className="text-4xl font-bold">Tailwind UI is now Tailwind Plus</h1>
                    <p className="text-sm text-gray-400 mt-2">Published on March 18, 2025 • 1 min read</p>
                </div>

                {/* Thumbnail */}
                <div className="mt-5">
                    <img src={Thumbnail} alt="Tailwind Plus" className="w-full rounded-lg shadow-lg" />
                </div>

                {/* Article Content */}
                <article className="mt-10 text-[16px] leading-8 text-gray-300">
                    <p>
                        Tailwind UI has officially rebranded as <strong>Tailwind Plus</strong>. This change marks a new era for developers
                        and designers who rely on Tailwind for building modern, sleek user interfaces effortlessly.
                    </p>
                    <p className="mt-5">
                        The decision to rebrand comes with new features, improved UI components, and better integration with the Tailwind CSS ecosystem.
                        With <strong>Tailwind Plus</strong>, users can expect:
                    </p>
                    <ul className="mt-5 list-disc list-inside space-y-2">
                        <li>Enhanced accessibility support</li>
                        <li>More pre-built templates for faster development</li>
                        <li>Optimized performance and better customization</li>
                    </ul>
                    <p className="mt-5">
                        Whether you're a beginner or an experienced developer, Tailwind Plus continues to be the go-to framework for building
                        responsive and highly customizable user interfaces. Stay tuned for more updates!
                    </p>
                </article>

                {/* Separator */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>
            </section>
            <Footer />
        </div>
    );
}
