import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlogSection from "../PageSection/Writings/Blogs"

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Blog Section */}
                <BlogSection/>
            </section>
            <Footer />
        </div>
    );
}
