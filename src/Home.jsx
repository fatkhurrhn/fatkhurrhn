import React from "react";
import PP from "./assets/pp.jpg";
import PPP from "./assets/profil.jpg";

const Test = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-white text-gray-900">
            <div className="w-full max-w-xl flex flex-col items-center gap-5 p-5">
                {/* Profile Section */}
                <div className="flex flex-col items-center gap-4 mt-8">
                    <div className="relative w-44 h-44 rounded-full border-4 border-blue-500 overflow-hidden">
                        <img src={PP} alt="Fatkhurrhn's profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 mt-[-3px] text-2xl font-bold text-gray-900">
                        Fatkhurrhn
                        <span className="text-blue-500 text-xl">
                            <i className="fas fa-check-circle"></i>
                        </span>
                    </div>
                    <a href="https://fatkhurrhn.vercel.app/" className="mt-[-12px] text-blue-500 text-sm">
                        https://fatkhurrhn.vercel.app/
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-2">
                {[
                        { href: "https://fatkhurrhn.vercel.app/", icon: "fas fa-globe", text: "Website", showOnMobile: false },
                        { href: "https://github.com/fatkhurrhn", icon: "fab fa-github", text: "Github", showOnMobile: false },
                        { href: "http://instagram.com/story.thur", icon: "fab fa-instagram", text: "Instagram", showOnMobile: true },
                        { href: "https://www.tiktok.com/@fatkhurrhnn", icon: "fab fa-tiktok", text: "Tiktok", showOnMobile: true },
                        { href: "https://www.linkedin.com/in/fatkhurrhn/", icon: "fab fa-linkedin", text: "LinkedIn", showOnMobile: true }
                    ].map(({ href, icon, text, showOnMobile }, index) => (
                        <a
                            key={index}
                            href={href}
                            className={`flex items-center gap-2 border border-gray-300 bg-gray-100 text-gray-900 px-3 py-1 rounded-lg text-sm font-medium transition hover:bg-gray-200 
            ${showOnMobile ? "" : "hidden sm:flex"}`}
                        >
                            <i className={icon}></i> {text}
                        </a>
                    ))}
                </div>

                {/* className="flex items-center gap-2 border border-gray-300 bg-gray-100 text-gray-900 px-3 py-1 rounded-lg text-sm font-medium transition hover:bg-gray-200" */}

                {/* Course Section */}
                <div className="w-full flex flex-col gap-3">
                    {[
                        { icon: "ri-code-s-slash-line ri-1x", text: "Personal Website & Portfolio", href: "/" },
                        { icon: "ri-edit-2-line ri-1x", text: "Free Editing Assets Store", href: "/creator" },
                        { icon: "ri-apps-line ri-1x", text: "Premium Ready-to-Use Apps", href: "/store" },
                        { icon: "ri-github-line ri-1x", text: "Explore My GitHub Projects", href: "https://github.com/fatkhurrhn" },
                        { icon: "ri-youtube-line ri-1x", text: "Watch My YouTube Content", href: "https://youtube.com/@fatkhurrhnn" },
                        { icon: "ri-phone-line ri-1x", text: "Contact Me on WhatsApp", href: "https://wa.me/6282285512813" },
                        // { icon: "ri-message-2-line ri-1x", text: "WhatsApp Channel for Updates", href: "https://whatsapp.com/channel/0029VabjmVDEQIahfM6pih3q" },
                        { icon: "ri-chat-1-line ri-1x", text: "Instagram Channel for Updates", href: "https://ig.me/j/AbYAsEmFeC7N27Jp/" }
                    ].map(({ icon, text, href }, index) => (
                        <a key={index} href={href} className="no-underline">
                            <div className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-lg p-4 border border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex justify-center items-center text-gray-900 text-lg">
                                        <i className={icon}></i>
                                    </div>
                                    <span className="font-semibold text-gray-900 text-sm">{text}</span>
                                </div>
                                <i className="fas fa-arrow-right text-gray-600"></i>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Test;
