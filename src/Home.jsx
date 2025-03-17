import React from "react";
import PP from "./assets/pp.jpg";

const Test = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-[#141417] text-gray-900 dark:text-white">
            <div className="w-full max-w-xl flex flex-col items-center gap-5 p-5">
                {/* Profile Section */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="relative w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden">
                        <img src={PP} alt="Fatkhurrhn's profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 text-2xl font-bold">
                        Fatkhurrhn
                        <span className="text-blue-500 text-xl">
                            <i className="fas fa-check-circle"></i>
                        </span>
                    </div>
                    <a href="https://fatkhurrhn.vercel.app/" className="text-blue-500 text-sm">
                        https://fatkhurrhn.vercel.app/
                    </a>
                    <p className="text-center text-sm">
                        Pengen jago ngoding kaya panutan, pak dika hhe
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        { href: "https://fatkhurrhn.vercel.app/", icon: "fas fa-globe", text: "Website" },
                        { href: "https://github.com/fatkhurrhn", icon: "fab fa-github", text: "Github" },
                        { href: "http://instagram.com/story.thur", icon: "fab fa-instagram", text: "Instagram" },
                        { href: "https://www.tiktok.com/@fatkhurrhnn", icon: "fab fa-tiktok", text: "Tiktok" },
                        { href: "https://www.linkedin.com/in/fatkhurrhn/", icon: "fab fa-linkedin", text: "LinkedIn" }
                    ].map(({ href, icon, text }, index) => (
                        <a key={index} href={href} className="flex items-center gap-2 border border-[#252529] dark:bg-[#18181b] text-gray-800 dark:text-white px-3 py-1 rounded-lg text-sm font-medium transition dark:hover:bg-[#1f1f24]">
                            <i className={icon}></i> {text}
                        </a>
                    ))}
                </div>

                {/* Course Section */}
                <div className="w-full flex flex-col gap-3">
                    {[
                        {
                            icon: "ri-code-s-slash-line",
                            text: "Aku Sebagai Front-End Developer",
                            bg: "bg-gray-700",
                            href: "/frontend" // Ganti dengan link yang sesuai
                        },
                        {
                            icon: "ri-edit-2-line",
                            text: "Aku Sebagai Content Creator",
                            bg: "bg-gray-700",
                            href: "/creator" // Ganti dengan link yang sesuai
                        }
                    ].map(({ icon, text, bg, href }, index) => (
                        <a key={index} href={href} className="no-underline">
                            <div className="flex items-center justify-between bg-white dark:bg-[#18181b] hover:bg-[#1f1f24] rounded-lg p-4 border border-gray-300 dark:border-gray-700 shadow-md cursor-pointer hover:shadow-lg transition">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 flex justify-center items-center rounded-lg text-white text-lg ${bg}`}>
                                        <i className={icon}></i>
                                    </div>
                                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{text}</span>
                                </div>
                                <i className="fas fa-arrow-right text-gray-600 dark:text-gray-400"></i>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Test;
