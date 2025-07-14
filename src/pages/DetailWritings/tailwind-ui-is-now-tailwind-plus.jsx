import React from "react";
import NavNavigate from "../../components/NavNavigate";
import Footer from "../../components/Footer";

export default function Page() {
    return (
        <div className="bg-white min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <NavNavigate />
            <section className="max-w-4xl mx-auto px-5 pt-20 text-gray-800">

                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3">
                    <h2 className="text-[15px] text-gray-800 font-sm">
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
                    <img src="/assets/Tailwind UI is now Tailwind Plus.webp" alt="Tailwind Plus" className="w-full rounded-lg shadow-lg" />
                </div>

                {/* Article Content */}
                <article className="mt-10 text-[16px] leading-8 text-gray-800">
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

                </section>
            <Footer />
        </div>
    );
}
