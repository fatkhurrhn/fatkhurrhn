import React, { useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <nav className="bg-[#141417] fixed w-full z-20 top-0 start-0 border-b border-[#252529]">
            <div className="max-w-4xl mx-auto flex items-center justify-between px-3 py-4">
                {/* Hamburger Menu Button (Mobile) */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-700 dark:text-white text-2xl md:hidden"
                >
                    <i className="ri-menu-2-line"></i>
                </button>

                <ul className="hidden md:flex space-x-8 font-medium text-gray-900 dark:text-white">
                    <li><a href="/">Home</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="/certificate">Certificate</a></li>
                    <li><a href="/writing">Writings</a></li>
                    <li><a href="/guestbook">Guestbook</a></li>
                </ul>

                {/* Contact Me Button */}
                <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#18181b] border border-[#252529] dark:hover:bg-[#1f1f24] dark:focus:ring-blue-800"
                >
                    Contact Me
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 text-white transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-30 px-6`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute top-4 right-4 text-2xl"
                >
                    <i className="ri-close-line"></i>
                </button>

                {/* Sidebar Menu */}
                <ul className="mt-16 space-y-6">
                    <li><a href="#" className="block text-lg hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="block text-lg hover:text-blue-400">Project</a></li>
                    <li><a href="#" className="block text-lg hover:text-blue-400">Certificate</a></li>
                    <li><a href="#" className="block text-lg hover:text-blue-400">Writings</a></li>
                    <li><a href="#" className="block text-lg hover:text-blue-400">Guestbook</a></li>
                </ul>

                {/* Social Media Icons */}
                <div className="absolute bottom-5 left-0 w-full flex justify-center gap-4">
                    <a href="https://youtube.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-youtube-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://linkedin.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-linkedin-box-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://tiktok.com/fatkhurrhnn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-tiktok-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                    <a href="https://instagram.com/fatkhurrhn" target="_blank" rel="noopener noreferrer">
                        <i className="ri-instagram-fill text-gray-400 text-xl hover:text-white transition-all"></i>
                    </a>
                </div>
            </div>

            {/* Overlay Background */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
