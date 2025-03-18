import React from "react";
import GitHubCalendar from "react-github-calendar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Thumbnail1 from "../assets/thumbnail01.png";
import Lintasarta from "../assets/lintasarta.png";
import NF from "../assets/nf.jpg";
import Senada from "../assets/senada.jpg";
import Pintar from "../assets/pintar.png";
import Bangkit from "../assets/bangkit.png";
import Google from "../assets/google.png";
import Aws from "../assets/aws.png";

export default function Page() {
    return (
        <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-20">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Foto */}
                    <div className="flex items-center space-x-4 md:block">
                        <img
                            src="https://media.licdn.com/dms/image/v2/D5603AQFSeewLSkNWqw/profile-displayphoto-shrink_400_400/B56ZOsnbZfGgAo-/0/1733767838340?e=1744243200&v=beta&t=UxHXMMALF5Qc2QZ4dhi3Ers-M-nP6NjBjaPPcrgHLY8"
                            alt="profile pic"
                            className="rounded-full grayscale hover:grayscale-0 duration-150 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40"
                        />
                        {/* Nama & Role di sebelah foto (Mobile) */}
                        <div className="md:hidden">
                            <h1 className="text-xl sm:text-[18px] font-bold text-[#d4d4d4]">Fatkhurrhn 🪴</h1>
                            <p className="text-xs sm:text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                    </div>

                    {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
                    <div className="text-center md:text-left md:flex-1">
                        <div className="hidden md:block">
                            <h1 className="text-[18px] font-bold text-[#d4d4d4]">Fatkhurrhn 🪴</h1>
                            <p className="text-sm font-mono text-[#252529] dark:text-gray-300">
                                FrontEnd Developer
                            </p>
                        </div>
                        <p className="mt-2 dark:text-[#d4d4d4] text-justify">
                            I'm an Information Systems student passionate about Front-End Development. I love turning ideas into interactive, user-friendly experiences with clean and efficient code. Always exploring new web technologies, I enjoy building innovative projects and sharing knowledge to make a real impact.😎🔥
                        </p>
                    </div>
                </div>

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

                {/* my experience */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[18px] font-bold text-[#d4d4d4]">💼 My Experience</h2>
                    <a href="https://www.linkedin.com/in/fatkhurrhn/" className="text-xs text-zinc-500">
                        View more
                    </a>
                </div> <br />
                <div className="mt-1 sm:mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="grid gap-4">
                        <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                            <div className="mb-3 sm:mb-4 flex items-center gap-3" >
                                <img className="h-[40px] w-[40px] rounded-full" src={Lintasarta}
                                    alt=" Company Lintasarta" />
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                        Company Lintasarta
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                        Capstone Project at Bangkit Academy
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                    Developed an employee recruitment website using React over two months as part of the
                                    Capstone Project at Lintasarta, focusing on frontend development and user
                                    experience.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                            <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                <img className="h-[40px] w-[40px] rounded-full" src={NF}
                                    alt="Assistan Lecturer 2024" />
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                        Assistan Lecturer 2024
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                        STT Terpadu Nurul Fikri
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                    Assisted in teaching the Big Data course for one semester, helping students
                                    understand data processing, analytics, and visualization concepts. Provided guidance
                                    in practical assignments, facilitated discussions, and supported the lecturer in
                                    className activities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4" >
                        <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                            <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                <img className="h-[40px] w-[40px] rounded-full"
                                    src="https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg"
                                    alt="Bangkit Academy 2024" />
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-[#d4d4d4] text-left">
                                        Bangkit Academy 2024
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#d4d4d4] text-left">
                                        Cloud Computing Cohort CC-23
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                    Participated in the Kampus Merdeka program for four months, focusing on the Cloud
                                    Computing learning path.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                            <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                <img className="h-[40px] w-[40px] rounded-full" src={Senada}
                                    alt="Head of the Quran Program Department" />
                                <div>
                                    <h3 className="text-base sm:text-lg text-left font-semibold">
                                        Leader of the PQ
                                    </h3>
                                    <p className="text-xs sm:text-sm text-left text-[#d4d4d4]">
                                        LDK Senada STT NF
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                    an Islamic organization on the STT Nurul Fikri campus
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[#252529] hover:bg-[#1f1f24] bg-[141417] p-3 sm:p-4" >
                            <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                <img className="h-[40px] w-[40px] rounded-full" src={Pintar}
                                    alt="Freelance Translator" />
                                <div>
                                    <h3 className="text-base sm:text-lg text-left font-semibold">
                                        Freelance Translator
                                    </h3>
                                    <p className="text-xs sm:text-sm text-left text-[#d4d4d4]">
                                        Malay translator at PINTAR
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm sm:text-base text-[#d4d4d4] text-justify">
                                    Translated Malay language documents for two months at PINTAR.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* hr */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>

                {/* blog */}
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-[18px] font-bold text-[#d4d4d4]">✍️ Latest Blogs</h2>
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
                                <div className="h-14 w-14 border border-[#252529] bg-[#1a1a1e] rounded-xl flex items-center justify-center text-[18px]">
                                    🥶
                                </div>
                                <div className="mt-1">
                                    <a href="/writings/tailwind-ui-is-now-tailwind-plus" className="text-lg text-[#d4d4d4] font-black flex gap-2">
                                        Tailwind UI is now Tailwind Plus
                                        <div className="block sm:hidden text-sm bg-[#18181b] border border-[#252529] rounded px-1 py-0.5 text-zinc-500">
                                            # Gear
                                        </div>
                                    </a>
                                    <ul className="text-zinc-400 flex items-center gap-2 text-sm">
                                        <li>2 min read</li>
                                        <div className="bg-zinc-400 rounded-full h-[3px] w-[3px] aspect-square"></div>
                                        <li>28 Jan 2025</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Tags */}
                            <ul className="sm:flex gap-1 hidden">
                                <li>
                                    <a
                                        className="text-sm bg-[#18181b] border border-[#252529] rounded px-2 py-1 text-zinc-500 hover:bg-[#252529] transition"
                                        href="#"
                                    >
                                        # programmer
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
