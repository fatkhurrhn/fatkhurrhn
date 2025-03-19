import React, { } from "react";
import Navbar from "../Components/NavbarStore";
import Footer from "../Components/Footer";

export default function Page() {

    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3 pb-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/store">store</a><i class="ri-arrow-drop-right-line"></i>
                        <a href="">coming soon</a>
                    </h2>
                </div>
                <h2 className="text-center">Coming Soon hhe :v</h2>
            </section>
            <Footer />
        </div>
    );
}