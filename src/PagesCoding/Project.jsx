import React from "react";
import Navbar from "../components/Navbar-temp";
import Footer from "../components/Footer";
import TopProject from "../PageSection/Projects/TopProject";
import ListProject from "../PageSection/Projects/ListProject";


export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Top project Section */}
                <TopProject />
                
                {/* List Project Section */}
                <ListProject />
            </section>
            <Footer />
        </div>
    );
}
