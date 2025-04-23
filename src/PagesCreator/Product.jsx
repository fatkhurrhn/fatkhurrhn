import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">

                {/* breadcrumb */}
                <div className="flex justify-between items-center w-full pt-3">
                    <h2 className="text-[15px] text-[#d4d4d4] font-sm">
                        <a href="/creator">Creator</a><i class="ri-arrow-drop-right-line"></i>
                        <a href="">Product</a></h2>
                </div>
                
                <hr className="mb-3 mt-3 border-0 h-[1px] bg-gradient-to-r from-[#252529] to-[#ffffff]/20 dark:from-[#252529] dark:to-[#ffffff]/10" />

                {/* Single Blog Card (Full Width) */}
                <div className="w-full mt-2">
                    <div className="border border-[#252529] bg-[#141417] p-5 rounded-xl">
                        <div className="flex flex-col sm:flex-row justify-between gap-5">
                            {/* Left Side (Icon + Info) */}
                            <div className="flex gap-3">
                                <div className="mt-1">
                                    <a href="/creator/product/mentahan-video" className="text-lg text-[#d4d4d4] font-black flex gap-2">
                                    100+ More Free Raw Videos
                                    </a>
                                    <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                                        <li>fatkhurrhn</li>
                                        <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                                        <li>28 Jan 2025</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-2">
                    <div className="border border-[#252529] bg-[#141417] p-5 rounded-xl">
                        <div className="flex flex-col sm:flex-row justify-between gap-5">
                            {/* Left Side (Icon + Info) */}
                            <div className="flex gap-3">
                                <div className="mt-1">
                                    <a href="/creator/product/mentahan-foto" className="text-lg text-[#d4d4d4] font-black flex gap-2">
                                    100+ More Free Raw Photos
                                    </a>
                                    <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                                        <li>fatkhurrhn</li>
                                        <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                                        <li>28 Jan 2025</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    );
}
