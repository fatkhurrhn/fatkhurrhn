import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Thumbnail1 from "../assets/thumbnail01.png";
import Bangkit from "../assets/bangkit.png";
import Google from "../assets/google.png";
import Aws from "../assets/aws.png";
import Lintasarta from "../assets/lintasarta.png";
import NF from "../assets/nf.jpg";
import Senada from "../assets/senada.jpg";
import Pintar from "../assets/pintar.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.add(savedTheme);
    }, []);


    if (!mounted) return null;

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800 transition-colors duration-300">
            <Navbar />
            <section className="max-w-4xl mx-auto px-5 pt-[95px]">
                {/* Profile Section */}
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    {/* Foto */}
                    <div className="flex items-center space-x-4 md:block">
                        <img
                            src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
                            alt="profile pic"
                            className="rounded-full grayscale hover:grayscale-0 duration-150 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 border-2 border-white shadow-md"
                        />
                        {/* Nama & Role di sebelah foto (Mobile) */}
                        <div className="md:hidden">
                            <h1 className="text-xl sm:text-[18px] font-bold text-gray-800">Fatkhurrhn 🪴</h1>
                            <p className="text-xs sm:text-sm font-mono text-gray-600">
                                FrontEnd Developer
                            </p>
                        </div>
                    </div>

                    {/* Nama & Paragraf (Desktop), Paragraf (Mobile) */}
                    <div className="text-center md:text-left md:flex-1">
                        <div className="hidden md:block">
                            <h1 className="text-[18px] font-bold text-gray-800">Fatkhurrhn 🪴</h1>
                            <p className="text-sm font-mono text-gray-600">
                                FrontEnd Developer
                            </p>
                        </div>
                        <p className="mt-2 text-gray-700 text-justify">
                            I'm an Information Systems student passionate about Front-End Development. I love turning ideas into interactive, user-friendly experiences with clean and efficient code. Always exploring new web technologies, I enjoy building innovative projects and sharing knowledge to make a real impact.😎🔥
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-4 justify-center md:justify-start">
                            <a href="https://github.com/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                <i className="ri-github-fill text-xl"></i>
                            </a>
                            <a href="https://linkedin.com/in/fatkhurrhn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                <i className="ri-linkedin-fill text-xl"></i>
                            </a>
                            <a href="mailto:nuhammadthursina123@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                                <i className="ri-mail-fill text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* GitHub Activity Section*/}
                <div>
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
                            <i className="ri-bar-chart-2-fill"></i> GitHub Activity
                        </h2>
                        <a href="https://github.com/fatkhurrhn" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                            View more
                        </a>
                    </div> <br />
                    <div className="bg-white text-gray-800 border border-gray-200 p-5 rounded-xl max-w-full overflow-x-auto shadow-sm">
                        <GitHubCalendar
                            username="fatkhurrhn"
                            blockSize={11.4}
                            colorScheme="light"
                            fontSize={12}
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* skills section */}
                <div>
                    <h2 className="text-[18px] font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <i className="ri-code-s-slash-line"></i> Skills & Technologies
                    </h2>
                    <div className="max-w-4xl text-center mb-10">
                        <ul className="flex flex-wrap justify-center gap-2 text-lg list-none p-0">
                            {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind',
                                'Bootstrap', 'Node.js', 'Git/Github',
                                'REST API', 'GraphQL', 'TypeScript', 'Figma', 'AWS'].map(skill => (
                                    <li
                                        key={skill}
                                        className="bg-white text-gray-700 border border-gray-200 rounded-lg py-1 px-4 hover:bg-gray-50 transition-colors shadow-sm"
                                    >
                                        {skill}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* project section */}
                <div>
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
                            <i className="ri-tools-fill"></i> Featured Projects
                        </h2>
                        <a href="/projects" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                            View more
                        </a>
                    </div> <br />
                    <div className="grid gap-2">
                        <div className="border border-gray-200 bg-white rounded-xl sm:flex items-center transition-all hover:shadow-md">
                            <div className="p-2">
                                <img
                                    src={Thumbnail1}
                                    alt="Personal Website Mockup"
                                    width={500}
                                    height={100}
                                    className="border border-gray-200 rounded-lg"
                                />
                            </div>
                            <div className="p-3 w-full">
                                <div className="flex justify-between items-center">
                                    <h1 className="text-[18px] text-gray-800 font-black">Personal Website</h1>
                                    <a
                                        target="_blank"
                                        href="https://fatkhurrhn.vercel.app/"
                                        className="border border-gray-200 bg-white hover:bg-gray-100 duration-200 px-5 py-2 flex items-center rounded-lg text-gray-800 gap-2"
                                    >
                                        <i className="ri-a-m" /> Preview
                                    </a>
                                </div>
                                <hr className="border-1 border-gray-200 border-dashed my-3" />
                                <div className="flex items-center gap-5">
                                    <ul className="flex gap-2">
                                        <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                            # JavaScript
                                        </li>
                                        <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                            # Tailwindv3
                                        </li>
                                        <li className="text-sm bg-white border border-gray-200 rounded px-1 py-0.5 text-zinc-500 font-mono w-fit">
                                            # ReactJS
                                        </li>
                                    </ul>
                                </div>
                                <hr className="border-1 border-gray-200 border-dashed my-3 text-justify" />
                                <p className="text-gray-800">
                                    Personal portfolio built with React.js and Tailwind, showcasing my skills, projects, and experience in front-end development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* sertifikat section */}
                <div>
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
                            <i className="ri-award-fill"></i> Certifications
                        </h2>
                        <a href="/certificate" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                            View more
                        </a>
                    </div> <br />
                    <div className="grid gap-4">
                        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                { img: Bangkit, title: "Bangkit Academy", date: "Issued Jan 2025 - Expires Jan 2028" },
                                { img: Google, title: "Google Certification", date: "Issued Nov 2024 - Expires Nov 2027" },
                                { img: Aws, title: "AWS Certified", date: "Issued Nov 2024 - Expires Nov 2027" }
                            ].map((cert, index) => (
                                <div key={index} className="w-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                                    <div className="sertif-image overflow-hidden">
                                        <img
                                            src={cert.img}
                                            alt={cert.title}
                                            className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm font-medium text-gray-600 text-left">
                                            {cert.date}
                                        </h3>
                                        <a
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block w-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-2 px-3 rounded-md transition duration-200 text-center text-xs"
                                        >
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* experience section */}
                <div>
                <div className="flex justify-between items-center w-full">
                        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
                            <i className="ri-briefcase-4-fill"></i> Experience
                        </h2>
                        <a href="https://www.linkedin.com/in/fatkhurrhn/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                            View more
                        </a>
                    </div> <br />
                    <div className="mt-1 sm:mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="grid gap-4">
                            <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
                                <div className="mb-3 sm:mb-4 flex items-center gap-3" >
                                    <img className="h-[40px] w-[40px] rounded-full" src={Lintasarta}
                                        alt=" Company Lintasarta" />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                                            Company Lintasarta
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-800 text-left">
                                            Capstone Project at Bangkit Academy
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm sm:text-base text-gray-800 text-justify">
                                        Developed an employee recruitment website using React over two months as part of the
                                        Capstone Project at Lintasarta, focusing on frontend development and user
                                        experience.
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">React</span>
                                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Tailwind</span>
                                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">UI/UX</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
                                <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                    <img className="h-[40px] w-[40px] rounded-full" src={NF}
                                        alt="Assistan Lecturer 2024" />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                                            Assistan Lecturer 2024
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-800 text-left">
                                            STT Terpadu Nurul Fikri
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm sm:text-base text-gray-800 text-justify">
                                        Assisted in teaching the Big Data course for one semester, helping students
                                        understand data processing, analytics, and visualization concepts. Provided guidance
                                        in practical assignments, facilitated discussions, and supported the lecturer in
                                        className activities.
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Teaching</span>
                                        <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Big Data</span>
                                        <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">Mentoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4" >
                            <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
                                <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                    <img className="h-[40px] w-[40px] rounded-full"
                                        src="https://files.klob.id/public/mig01/l32ovhf5/channels4_profile.jpg"
                                        alt="Bangkit Academy 2024" />
                                    <div>
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                                            Bangkit Academy 2024
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-800 text-left">
                                            Cloud Computing Cohort CC-23
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm sm:text-base text-gray-800 text-justify">
                                        Participated in the Kampus Merdeka program for four months, focusing on the Cloud
                                        Computing learning path.
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">AWS</span>
                                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Cloud Computing</span>
                                        <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Google</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
                                <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                    <img className="h-[40px] w-[40px] rounded-full" src={Senada}
                                        alt="Head of the Quran Program Department" />
                                    <div>
                                        <h3 className="text-base sm:text-lg text-left font-semibold">
                                            Leader of the PQ
                                        </h3>
                                        <p className="text-xs sm:text-sm text-left text-gray-800">
                                            LDK Senada STT NF
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm sm:text-base text-gray-800 text-justify">
                                        an Islamic organization on the STT Nurul Fikri campus
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">Leadership</span>
                                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">Organization</span>
                                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">Mentoring</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-gray-200 hover:bg-shadow-md bg-white p-3 sm:p-4" >
                                <div className="mb-3 sm:mb-4 flex items-center gap-3">
                                    <img className="h-[40px] w-[40px] rounded-full" src={Pintar}
                                        alt="Freelance Translator" />
                                    <div>
                                        <h3 className="text-base sm:text-lg text-left font-semibold">
                                            Freelance Translator
                                        </h3>
                                        <p className="text-xs sm:text-sm text-left text-gray-800">
                                            Malay translator at PINTAR
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm sm:text-base text-gray-800 text-justify">
                                        Translated Malay language documents for two months at PINTAR.
                                    </p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Translation</span>
                                        <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Malay</span>
                                        <span className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">Freelance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] my-10 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 max-w-lg mx-auto"></div>

                {/* blog section */}
                <div>
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[18px] font-bold text-gray-800 flex items-center gap-2">
                            <i className="ri-article-fill"></i> Latest Articles
                        </h2>
                        <a href="/blog" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                            View more
                        </a>
                    </div>

                    {/* Single Blog Card (Full Width) */}
                    <div className="w-full mt-5">
                        <div className="border border-gray-200 bg-white p-5 rounded-xl">
                            <div className="flex flex-col sm:flex-row justify-between gap-5">
                                {/* Left Side (Icon + Info) */}
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        <a href="/writings/tailwind-ui-is-now-tailwind-plus" className="text-lg text-gray-800 font-black flex gap-2">
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
                </div>
            </section>
            <Footer />
        </div>
    );
}