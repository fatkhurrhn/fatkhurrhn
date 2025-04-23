import React from "react";
import Navbar from "../components/Navbar-temp";
import Footer from "../components/Footer";

import Instagram from "../assets/p-instagram.png";
import Linkedin from "../assets/p-linkedin.png";
import Tiktok from "../assets/p-tiktok.png";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Introduction Section */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-12">
                    <div className="w-[180px] h-[180px] md:w-[190px] md:h-[190px] overflow-hidden rounded-full border-4 border-zinc-600">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1747872000&v=beta&t=MrQuPEHgF4UlcoqkgEUbBX7xO2OgayPveQUZOh5z_SM"
                            alt="Profile Picture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold pt-4 mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Fatkhurrhn</h1>
                        <p className="text-[16px] md:text-[16px] mb-6 text-gray-300 text-justify">
                            Welcome to my creator page! I am a content creator who focuses on sharing knowledge, inspiration, and useful content on various social media platforms. With a total of more than 90,000 followers, I am committed to providing high-quality content that can inspire and educate.
                        </p>
                        {/* sosmed */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="/creator/product"
                                className="px-3 py-1.5 text-gray-300 border border-[#252529] bg-[#18181b] rounded-[5px] hover:bg-[#1f1f24] transition">
                                let's see the products I made <i class="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gradient Divider */}
                <div className="h-[1px] my-10 mb-5 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* Platforms Section */}
                <div className="space-y-16 py-2">
                    {/* Instagram */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                {/* <Instagram size={28} className="text-pink-500" /> */}
                                Instagram <span className="text-pink-500">90K+ Followers</span>
                            </h2>
                            <p className="text-gray-300 mb-4 text-justify">
                                On Instagram, I share inspiring and educational content with over 90,000 followers. I provide tips, insights, and motivation to help others grow and stay inspired. My goal is to create a positive space that encourages personal and professional growth.</p>
                            <a href="https://instagram.com/story.thur" className="inline-block text-gray-300 px-4 py-2 border border-[#252529] bg-[#18181b] rounded-[5px] hover:bg-[#1f1f24] rounded-[5px] font-medium transition-opacity">
                                Visit Instagram <i class="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#252529] rounded-xl">
                            <img
                                src={Instagram}
                                alt="Instagram Profile"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                {/* <Linkedin size={28} className="text-blue-500" /> */}
                                LinkedIn <span className="text-blue-500">1K+ Koneksi</span>
                            </h2>
                            <p className="text-gray-300 text-justify mb-4">
                                On LinkedIn, I share professional content and industry insights with over 1,000 connections. My focus is on career development, professional skills, and the latest industry trends. I also engage in meaningful discussions, providing valuable perspectives to help others grow in their careers.</p>
                            <a href="https://linkedin.com/in/fatkhurrhn" className="inline-block text-gray-300 px-4 py-2 border border-[#252529] bg-[#18181b] rounded-[5px] hover:bg-[#1f1f24] rounded-[5px] font-medium transition-opacity">
                                Visit LinkedIn <i class="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#252529] rounded-xl">
                            <img
                                src={Linkedin}
                                alt="LinkedIn Profile"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                    {/* TikTok */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                {/* <TikTok size={28} className="text-white" /> */}
                                TikTok <span className="text-teal-400">3K+ Followers</span>
                            </h2>
                            <p className="text-gray-300 text-justify mb-4">
                                TikTok is my platform for sharing creative and engaging short-form videos. With over 3,000 followers, I share motivational words to inspire and uplift others. I also explore trending topics and insights to encourage positivity, growth, and self-improvement.</p>
                            <a href="https://tiktok.com/@fatkhurrhn" className="inline-block text-gray-300 px-4 py-2 border border-[#252529] bg-[#18181b] rounded-[5px] hover:bg-[#1f1f24] rounded-[5px] font-medium transition-colors">
                                Visit TikTok <i class="ri-arrow-right-up-line"></i>
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 bg-[#252529] rounded-xl">
                            <img
                                src={Tiktok}
                                alt="TikTok Profile"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Gradient Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[20px] text-[#d4d4d4] font-bold">Product</h2>
                    <a href="/creator/product" className="text-xs text-zinc-500">
                        View more
                    </a>
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