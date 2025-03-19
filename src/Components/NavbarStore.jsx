import React, { useState } from "react";
import MenuSidebar from "./MenuSidebar";
import MenuAtas from "./MenuAtas";

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

                {/* menu atas */}
                <MenuAtas/>

                {/* Contact Me Button */}
                <a href="https://wa.me/6282285512813" target="_blank"
                    type="button"
                    className="text-[#d4d4d4] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#18181b] border border-[#252529] dark:hover:bg-[#1f1f24]"
                >
                    FaStore ID
                </a>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-2/4 bg-[#141417] text-[#d4d4d4] transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
                <MenuSidebar/>

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
