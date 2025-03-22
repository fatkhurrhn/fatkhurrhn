import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import ProfileSection from "../PageSection/HomePage/Profile";
import BlogSection from "../PageSection/HomePage/Blogs";
import ExperienceSection from "../PageSection/HomePage/Experiences";


// import BlogSection from "../PageSection/WritingsSection/Blogs";

import Thumbnail1 from "../assets/thumbnail01.png";
import Bangkit from "../assets/bangkit.png";
import Google from "../assets/google.png";
import Aws from "../assets/aws.png";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Profile Section */}
                <ProfileSection />

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* GitHub Activity */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[18px] font-bold text-[#d4d4d4]">📊 GitHub Activity</h2>
                    <a href="https://github.com/fatkhurrhn" className="text-xs text-zinc-500">
                        View more
                    </a>
                </div> <br />
                <div className="bg-gray-100 bg-zinc-900 text-[#d4d4d4] border border-[#252529] p-5 rounded-[11px] max-w-full overflow-x-auto">
                    <GitHubCalendar
                        username="fatkhurrhn"
                        blockSize={11.4}
                        colorScheme="dark"
                    />
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* skills */}

                <div className="max-w-4xl text-center mb-10">
                    <ul className="flex flex-wrap justify-center gap-2 text-lg list-none p-0">
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            HTML
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            CSS
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            JavaScript
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            React
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Bootstrap
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Next.js
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Laravel
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Node.js
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Git/Github
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            Tailwind
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            REST API
                        </li>
                        <li className="bg-[#18181b] text-[#d4d4d4] border border-[#252529] rounded-lg py-1 px-4 hover:bg-[#1f1f24]">
                            GraphQL
                        </li>
                    </ul>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* project */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[18px] font-bold text-[#d4d4d4]">🛠 My Projects</h2>
                    <a href="/project" className="text-xs text-zinc-500">
                        View more
                    </a>
                </div> <br />
                <div className="grid gap-2">
                    <div className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center">
                        <div className="p-2">
                            <img
                                src={Thumbnail1}
                                alt="Personal Website Mockup"
                                width={500}
                                height={100}
                                className="border border-[#202024] rounded-lg"
                            />
                        </div>
                        <div className="p-3 w-full">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[18px] text-[#d4d4d4] font-black">Personal Website</h1>
                                <a
                                    target="_blank"
                                    href="https://fatkhurrhn.vercel.app/"
                                    className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-[#d4d4d4] gap-2"
                                >
                                    <i className="ri-a-m" /> Preview
                                </a>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3" />
                            <div className="flex items-center gap-5">
                                <ul className="flex gap-2">
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # JavaScript
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # Tailwindv3
                                    </li>
                                    <li className="text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                        # ReactJS
                                    </li>
                                </ul>
                            </div>
                            <hr className="border-1 border-[#252529] border-dashed my-3 text-justify" />
                            <p className="text-[#d4d4d4]">
                                Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* sertifikat */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[18px] font-bold text-[#d4d4d4]">📜 My Certificates</h2>
                    <a href="/certificate" className="text-xs text-zinc-500">
                        View more
                    </a>
                </div> <br />
                <div className="grid gap-3">
                    <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

                        <div className="w-full bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                            <div className="sertif-image">
                                <img
                                    src={Bangkit}
                                    alt="sertifikat"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                    Issued Jan 2025 - Expires Jan 2028
                                </h3>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                >
                                    View Course
                                </a>
                            </div>
                        </div>

                        {/* Duplikat sertifikat */}
                        <div className="w-full hidden sm:block bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                            <div className="sertif-image">
                                <img
                                    src={Google}
                                    alt="sertifikat"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                    Issued Nov 2024 - Expires Nov 2027
                                </h3>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                >
                                    View Course
                                </a>
                            </div>
                        </div>

                        <div className="w-full hidden sm:block bg-[#141417] rounded-lg shadow-md overflow-hidden border border-[#252529]">
                            <div className="sertif-image">
                                <img
                                    src={Aws}
                                    alt="sertifikat"
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-3">
                                <h3 className="text-sm font-medium text-[#d4d4d4] text-left">
                                    Issued Nov 2024 - Expires Nov 2027
                                </h3>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block w-full border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] text-[#d4d4d4] hover:text-white font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                >
                                    View Course
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* experience section */}
                <ExperienceSection/>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* blog section */}
                <BlogSection/>

            </section>
            <Footer />
        </div>
    );
}
