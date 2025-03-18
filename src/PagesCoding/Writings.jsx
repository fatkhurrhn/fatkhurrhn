import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">

                {/* blog */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-[#d4d4d4] font-bold">✍️ Blogs</h2>
                    <a href="/blog" className="text-xs text-zinc-500">
                        View more
                    </a>
                </div>
                {/* Single Blog Card (Full Width) */}
                <div className="w-full mt-5">
                    <div className="border border-[#252529] bg-[#141417] p-5 rounded-xl">
                        <div className="flex flex-col sm:flex-row justify-between gap-5">
                            {/* Left Side (Icon + Info) */}
                            <div className="flex gap-3">
                                <div className="mt-1">
                                    <a href="/writings/tailwind-ui-is-now-tailwind-plus" className="text-lg text-[#d4d4d4] font-black flex gap-2">
                                        Tailwind UI is now Tailwind Plus
                                    </a>
                                    <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                                        <li>2 min read</li>
                                        <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                                        <li>28 Jan 2025</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

            </section>
            <Footer />
        </div>
    );
}
